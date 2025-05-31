import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Contains information about a widget on a CloudTrail Lake dashboard.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-dashboard.html */

export interface Widget {
    /**
     * - The optional query parameters. The following query parameters are valid: `$StartTime$`, `$EndTime$`, and `$Period$`.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-dashboard.html#cfn-cloudtrail-dashboard-widget-queryparameters */
    "QueryParameters"?: (string | Intrinsic)[];
    /**
     * - The query statement for the widget. For custom dashboard widgets, you can query across multiple event data stores as long as all event data stores exist in your account.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `(?s).*`
     * - _Minimum_: `1`
     * - _Maximum_: `10000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-dashboard.html#cfn-cloudtrail-dashboard-widget-querystatement */
    "QueryStatement": string | Intrinsic;
    /**
     * - The view properties for the widget. For more information about view properties, see [View properties for widgets](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/lake-widget-properties.html) in the _AWS CloudTrail User Guide_.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `^[a-zA-Z0-9._-]{3,128}$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-dashboard.html#cfn-cloudtrail-dashboard-widget-viewproperties */
    "ViewProperties"?: Record<string, string | Intrinsic>;
}

/**
 * A custom key-value pair associated with a dashboard resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-dashboard.html */

export interface Tag {
    /**
     * - The key in a key-value pair. The key must be must be no longer than 128 Unicode characters. The key must be unique for the resource to which it applies.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-dashboard.html#cfn-cloudtrail-dashboard-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value in a key-value pair of a tag. The value must be no longer than 256 Unicode characters.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-dashboard.html#cfn-cloudtrail-dashboard-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Specifies the frequency for a dashboard refresh schedule.
 * For a custom dashboard, you can schedule a refresh for every 1, 6, 12, or 24 hours, or every day.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-dashboard.html */

export interface Frequency {
    /**
     * - The unit to use for the refresh.
     * - For custom dashboards, the unit can be `HOURS` or `DAYS`.
     * - For the Highlights dashboard, the `Unit` must be `HOURS`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `HOURS | DAYS`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-dashboard.html#cfn-cloudtrail-dashboard-frequency-unit */
    "Unit": string | Intrinsic;
    /**
     * - The value for the refresh schedule.
     * - For custom dashboards, the following values are valid when the unit is `HOURS`: `1`, `6`, `12`, `24`
     * - For custom dashboards, the only valid value when the unit is `DAYS` is `1`.
     * - For the Highlights dashboard, the `Value` must be `6`.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-dashboard.html#cfn-cloudtrail-dashboard-frequency-value */
    "Value": number | Intrinsic;
}

/**
 * The schedule for a dashboard refresh.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-dashboard.html */

export interface RefreshSchedule {
    /**
     * - The frequency at which you want the dashboard refreshed.
     * - _Required_: No
     * - _Type_: [Frequency](./aws-properties-cloudtrail-dashboard-frequency.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-dashboard.html#cfn-cloudtrail-dashboard-refreshschedule-frequency */
    "Frequency"?: Frequency;
    /**
     * - Specifies whether the refresh schedule is enabled. Set the value to `ENABLED` to enable the refresh schedule, or to `DISABLED` to turn off the refresh schedule.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-dashboard.html#cfn-cloudtrail-dashboard-refreshschedule-status */
    "Status"?: string | Intrinsic;
    /**
     * - The time of day in UTC to run the schedule; for hourly only refer to minutes; default is 00:00.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[0-9]{2}:[0-9]{2}`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-dashboard.html#cfn-cloudtrail-dashboard-refreshschedule-timeofday */
    "TimeOfDay"?: string | Intrinsic;
}

/**
 * Creates a custom dashboard or the Highlights dashboard.
 * *   **Custom dashboards** - Custom dashboards allow you to query events in any event data store type. You can add up to 10 widgets to a custom dashboard. You can manually refresh a custom dashboard, or you can set a refresh schedule.
 *     
 * *   **Highlights dashboard** - You can create the Highlights dashboard to see a summary of key user activities and API usage across all your event data stores. CloudTrail Lake manages the Highlights dashboard and refreshes the dashboard every 6 hours. To create the Highlights dashboard, you must set and enable a refresh schedule.
 * CloudTrail runs queries to populate the dashboard's widgets during a manual or scheduled refresh. CloudTrail must be granted permissions to run the `StartQuery` operation on your behalf. To provide permissions, run the `PutResourcePolicy` operation to attach a resource-based policy to each event data store. For more information, see [Example: Allow CloudTrail to run queries to populate a dashboard](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/security_iam_resource-based-policy-examples.html#security_iam_resource-based-policy-examples-eds-dashboard) in the _AWS CloudTrail User Guide_.
 * To set a refresh schedule, CloudTrail must be granted permissions to run the `StartDashboardRefresh` operation to refresh the dashboard on your behalf. To provide permissions, run the `PutResourcePolicy` operation to attach a resource-based policy to the dashboard. For more information, see [Resource-based policy example for a dashboard](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/security_iam_resource-based-policy-examples.html#security_iam_resource-based-policy-examples-dashboards) in the _AWS CloudTrail User Guide_.
 * For more information about dashboards, see [CloudTrail Lake dashboards](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/lake-dashboard.html) in the _AWS CloudTrail User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-dashboard.html */

export interface CloudTrailDashboard extends ResourceAttributes {
    "Type": "AWS::CloudTrail::Dashboard";
    "Properties": {
        /**
         * - The name of the dashboard. The name must be unique to your account.
         * - To create the Highlights dashboard, the name must be `AWSCloudTrail-Highlights`.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9_\-]+$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-dashboard.html#cfn-cloudtrail-dashboard-name */
        "Name"?: string | Intrinsic;
        /**
         * - The schedule for a dashboard refresh.
         * - _Required_: No
         * - _Type_: [RefreshSchedule](./aws-properties-cloudtrail-dashboard-refreshschedule.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-dashboard.html#cfn-cloudtrail-dashboard-refreshschedule */
        "RefreshSchedule"?: RefreshSchedule;
        /**
         * - A list of tags.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-cloudtrail-dashboard-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-dashboard.html#cfn-cloudtrail-dashboard-tags */
        "Tags"?: Tag[];
        /**
         * - Specifies whether termination protection is enabled for the dashboard. If termination protection is enabled, you cannot delete the dashboard until termination protection is disabled.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-dashboard.html#cfn-cloudtrail-dashboard-terminationprotectionenabled */
        "TerminationProtectionEnabled"?: boolean | Intrinsic;
        /**
         * - An array of widgets for a custom dashboard. A custom dashboard can have a maximum of ten widgets.
         * - You do not need to specify widgets for the Highlights dashboard.
         * - _Required_: No
         * - _Type_: Array of [Widget](./aws-properties-cloudtrail-dashboard-widget.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-dashboard.html#cfn-cloudtrail-dashboard-widgets */
        "Widgets"?: Widget[];
    };
}