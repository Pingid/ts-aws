import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A set of actions that correspond to Amazon QuickSight permissions.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-custompermissions.html */

export interface Capabilities {
    /**
     * - The ability to add or run anomaly detection.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DENY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-custompermissions.html#cfn-quicksight-custompermissions-capabilities-addorrunanomalydetectionforanalyses */
    "AddOrRunAnomalyDetectionForAnalyses"?: string | Intrinsic;
    /**
     * - The ability to create and update email reports.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DENY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-custompermissions.html#cfn-quicksight-custompermissions-capabilities-createandupdatedashboardemailreports */
    "CreateAndUpdateDashboardEmailReports"?: string | Intrinsic;
    /**
     * - The ability to create and update datasets.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DENY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-custompermissions.html#cfn-quicksight-custompermissions-capabilities-createandupdatedatasets */
    "CreateAndUpdateDatasets"?: string | Intrinsic;
    /**
     * - The ability to create and update data sources.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DENY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-custompermissions.html#cfn-quicksight-custompermissions-capabilities-createandupdatedatasources */
    "CreateAndUpdateDataSources"?: string | Intrinsic;
    /**
     * - The ability to export to Create and Update themes.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DENY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-custompermissions.html#cfn-quicksight-custompermissions-capabilities-createandupdatethemes */
    "CreateAndUpdateThemes"?: string | Intrinsic;
    /**
     * - The ability to create and update threshold alerts.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DENY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-custompermissions.html#cfn-quicksight-custompermissions-capabilities-createandupdatethresholdalerts */
    "CreateAndUpdateThresholdAlerts"?: string | Intrinsic;
    /**
     * - The ability to create shared folders.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DENY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-custompermissions.html#cfn-quicksight-custompermissions-capabilities-createsharedfolders */
    "CreateSharedFolders"?: string | Intrinsic;
    /**
     * - The ability to create a SPICE dataset.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DENY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-custompermissions.html#cfn-quicksight-custompermissions-capabilities-createspicedataset */
    "CreateSPICEDataset"?: string | Intrinsic;
    /**
     * - The ability to export to CSV files.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DENY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-custompermissions.html#cfn-quicksight-custompermissions-capabilities-exporttocsv */
    "ExportToCsv"?: string | Intrinsic;
    /**
     * - The ability to export to Excel files.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DENY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-custompermissions.html#cfn-quicksight-custompermissions-capabilities-exporttoexcel */
    "ExportToExcel"?: string | Intrinsic;
    /**
     * - The ability to rename shared folders.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DENY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-custompermissions.html#cfn-quicksight-custompermissions-capabilities-renamesharedfolders */
    "RenameSharedFolders"?: string | Intrinsic;
    /**
     * - The ability to share analyses.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DENY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-custompermissions.html#cfn-quicksight-custompermissions-capabilities-shareanalyses */
    "ShareAnalyses"?: string | Intrinsic;
    /**
     * - The ability to share dashboards.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DENY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-custompermissions.html#cfn-quicksight-custompermissions-capabilities-sharedashboards */
    "ShareDashboards"?: string | Intrinsic;
    /**
     * - The ability to share datasets.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DENY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-custompermissions.html#cfn-quicksight-custompermissions-capabilities-sharedatasets */
    "ShareDatasets"?: string | Intrinsic;
    /**
     * - The ability to share data sources.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DENY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-custompermissions.html#cfn-quicksight-custompermissions-capabilities-sharedatasources */
    "ShareDataSources"?: string | Intrinsic;
    /**
     * - The ability to subscribe to email reports.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DENY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-custompermissions.html#cfn-quicksight-custompermissions-capabilities-subscribedashboardemailreports */
    "SubscribeDashboardEmailReports"?: string | Intrinsic;
    /**
     * - The ability to view account SPICE capacity.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DENY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-custompermissions.html#cfn-quicksight-custompermissions-capabilities-viewaccountspicecapacity */
    "ViewAccountSPICECapacity"?: string | Intrinsic;
}

/**
 * The tags to associate with the custom permissions profile.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-custompermissions.html */

export interface Tag {
    /**
     * - The unique key for a tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-custompermissions.html#cfn-quicksight-custompermissions-tag-key */
    "Key": string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-custompermissions.html#cfn-quicksight-custompermissions-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Creates a custom permissions profile.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-custompermissions.html */

export interface QuickSightCustomPermissions extends ResourceAttributes {
    "Type": "AWS::QuickSight::CustomPermissions";
    "Properties": {
        /**
         * - The ID of the AWS account that contains the custom permission configuration that you want to update.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[0-9]{12}$`
         * - _Minimum_: `12`
         * - _Maximum_: `12`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-custompermissions.html#cfn-quicksight-custompermissions-awsaccountid */
        "AwsAccountId": string | Intrinsic;
        /**
         * - A set of actions in the custom permissions profile.
         * - _Required_: No
         * - _Type_: [Capabilities](./aws-properties-quicksight-custompermissions-capabilities.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-custompermissions.html#cfn-quicksight-custompermissions-capabilities */
        "Capabilities"?: Capabilities;
        /**
         * - The name of the custom permissions profile.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9+=,.@_-]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `64`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-custompermissions.html#cfn-quicksight-custompermissions-custompermissionsname */
        "CustomPermissionsName": string | Intrinsic;
        /**
         * - The tags to associate with the custom permissions profile.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-quicksight-custompermissions-tag.html)
         * - _Minimum_: `1`
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-custompermissions.html#cfn-quicksight-custompermissions-tags */
        "Tags"?: Tag[];
    };
}