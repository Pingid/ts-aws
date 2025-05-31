import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A user-defined key-value pair that describes metadata added to an AWS DMS resource and that is used by operations such as the following:
 * *   `AddTagsToResource`
 *     
 * *   `ListTagsForResource`
 *     
 * *   `RemoveTagsFromResource`
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html */

export interface Tag {
    /**
     * - A key is the required name of the tag. The string value can be 1-128 Unicode characters in length and can't be prefixed with "aws:" or "dms:". The string can only contain only the set of Unicode letters, digits, white-space, '\_', '.', '/', '=', '+', '-' (Java regular expressions: "^(\[\\\\p{L}\\\\p{Z}\\\\p{N}\_.:/=+\\\\-\]\*)$").
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html#cfn-dms-datamigration-tag-key */
    "Key": string | Intrinsic;
    /**
     * - A value is the optional value of the tag. The string value can be 1-256 Unicode characters in length and can't be prefixed with "aws:" or "dms:". The string can only contain only the set of Unicode letters, digits, white-space, '\_', '.', '/', '=', '+', '-' (Java regular expressions: "^(\[\\\\p{L}\\\\p{Z}\\\\p{N}\_.:/=+\\\\-\]\*)$").
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html#cfn-dms-datamigration-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The `SourceDataSettings` property type specifies Property description not available. for an [AWS::DMS::DataMigration](./aws-resource-dms-datamigration.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html */

export interface SourceDataSettings {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `40`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html#cfn-dms-datamigration-sourcedatasettings-cdcstartposition */
    "CDCStartPosition"?: string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `40`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html#cfn-dms-datamigration-sourcedatasettings-cdcstarttime */
    "CDCStartTime"?: string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `40`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html#cfn-dms-datamigration-sourcedatasettings-cdcstoptime */
    "CDCStopTime"?: string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html#cfn-dms-datamigration-sourcedatasettings-slotname */
    "SlotName"?: string | Intrinsic;
}

/**
 * Options for configuring a data migration, including whether to enable CloudWatch logs, and the selection rules to use to include or exclude database objects from the migration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html */

export interface DataMigrationSettings {
    /**
     * - Whether to enable CloudWatch logging for the data migration.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html#cfn-dms-datamigration-datamigrationsettings-cloudwatchlogsenabled */
    "CloudwatchLogsEnabled"?: boolean | Intrinsic;
    /**
     * - The number of parallel jobs that trigger parallel threads to unload the tables from the source, and then load them to the target.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html#cfn-dms-datamigration-datamigrationsettings-numberofjobs */
    "NumberOfJobs"?: number | Intrinsic;
    /**
     * - A JSON-formatted string that defines what objects to include and exclude from the migration.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html#cfn-dms-datamigration-datamigrationsettings-selectionrules */
    "SelectionRules"?: string | Intrinsic;
}

/**
 * This object provides information about a AWS DMS data migration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html */

export interface DMSDataMigration extends ResourceAttributes {
    "Type": "AWS::DMS::DataMigration";
    "Properties": {
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `300`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html#cfn-dms-datamigration-datamigrationidentifier */
        "DataMigrationIdentifier"?: string | Intrinsic;
        /**
         * - The user-friendly name for the data migration.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `300`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html#cfn-dms-datamigration-datamigrationname */
        "DataMigrationName"?: string | Intrinsic;
        /**
         * - Specifies CloudWatch settings and selection rules for the data migration.
         * - _Required_: No
         * - _Type_: [DataMigrationSettings](./aws-properties-dms-datamigration-datamigrationsettings.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html#cfn-dms-datamigration-datamigrationsettings */
        "DataMigrationSettings"?: DataMigrationSettings;
        /**
         * - Specifies whether the data migration is full-load only, change data capture (CDC) only, or full-load and CDC.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `full-load | cdc | full-load-and-cdc`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html#cfn-dms-datamigration-datamigrationtype */
        "DataMigrationType": string | Intrinsic;
        /**
         * - Property description not available.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html#cfn-dms-datamigration-migrationprojectidentifier */
        "MigrationProjectIdentifier": string | Intrinsic;
        /**
         * - The IAM role that the data migration uses to access AWS resources.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `300`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html#cfn-dms-datamigration-serviceaccessrolearn */
        "ServiceAccessRoleArn": string | Intrinsic;
        /**
         * - Specifies information about the data migration's source data provider.
         * - _Required_: No
         * - _Type_: [Array](./aws-properties-dms-datamigration-sourcedatasettings.html) of [SourceDataSettings](./aws-properties-dms-datamigration-sourcedatasettings.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html#cfn-dms-datamigration-sourcedatasettings */
        "SourceDataSettings"?: SourceDataSettings[];
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-dms-datamigration-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-datamigration.html#cfn-dms-datamigration-tags */
        "Tags"?: Tag[];
    };
}