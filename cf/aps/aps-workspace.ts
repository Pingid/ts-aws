import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Contains information about the rules and alerting logging configuration for the workspace.
 * ###### Note
 * 
 * These logging configurations are only for rules and alerting logs.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html */

export interface LoggingConfiguration {
    /**
     * - The ARN of the CloudWatch log group to which the vended log data will be published. This log group must exist prior to calling this operation.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html#cfn-aps-workspace-loggingconfiguration-loggrouparn */
    "LogGroupArn"?: string | Intrinsic;
}

/**
 * A tag associated with a resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html */

export interface Tag {
    /**
     * - The key of the tag. Must not begin with `aws:`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html#cfn-aps-workspace-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value of the tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html#cfn-aps-workspace-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Configuration details for logging to CloudWatch Logs.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html */

export interface CloudWatchLogDestination {
    /**
     * - The ARN of the CloudWatch log group.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html#cfn-aps-workspace-cloudwatchlogdestination-loggrouparn */
    "LogGroupArn": string | Intrinsic;
}

/**
 * Filtering criteria that determine which queries are logged.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html */

export interface LoggingFilter {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html#cfn-aps-workspace-loggingfilter-qspthreshold */
    "QspThreshold": number | Intrinsic;
}

/**
 * The logging destination in an Amazon Managed Service for Prometheus workspace.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html */

export interface LoggingDestination {
    /**
     * - Configuration details for logging to CloudWatch Logs.
     * - _Required_: Yes
     * - _Type_: [CloudWatchLogDestination](./aws-properties-aps-workspace-cloudwatchlogdestination.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html#cfn-aps-workspace-loggingdestination-cloudwatchlogs */
    "CloudWatchLogs": CloudWatchLogDestination;
    /**
     * - Filtering criteria that determine which queries are logged.
     * - _Required_: Yes
     * - _Type_: [LoggingFilter](./aws-properties-aps-workspace-loggingfilter.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html#cfn-aps-workspace-loggingdestination-filters */
    "Filters": LoggingFilter;
}

/**
 * The query logging configuration in an Amazon Managed Service for Prometheus workspace.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html */

export interface QueryLoggingConfiguration {
    /**
     * - Defines a destination and its associated filtering criteria for query logging.
     * - _Required_: Yes
     * - _Type_: Array of [LoggingDestination](./aws-properties-aps-workspace-loggingdestination.html)
     * - _Minimum_: `1`
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html#cfn-aps-workspace-queryloggingconfiguration-destinations */
    "Destinations": LoggingDestination[];
}

/**
 * A label is a name:value pair used to add context to ingested metrics. This structure defines the name and value for one label that is used in a label set. You can set ingestion limits on time series that match defined label sets, to help prevent a workspace from being overwhelmed with unexpected spikes in time series ingestion.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html */

export interface Label {
    /**
     * - The name for this label.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z_][a-zA-Z0-9_]*$`
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html#cfn-aps-workspace-label-name */
    "Name": string | Intrinsic;
    /**
     * - The value for this label.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html#cfn-aps-workspace-label-value */
    "Value": string | Intrinsic;
}

/**
 * This structure contains the limits that apply to time series that match one label set.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html */

export interface LimitsPerLabelSetEntry {
    /**
     * - The maximum number of active series that can be ingested that match this label set.
     * - Setting this to 0 causes no label set limit to be enforced, but it does cause Amazon Managed Service for Prometheus to vend label set metrics to CloudWatch
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html#cfn-aps-workspace-limitsperlabelsetentry-maxseries */
    "MaxSeries"?: number | Intrinsic;
}

/**
 * This defines a label set for the workspace, and defines the ingestion limit for active time series that match that label set. Each label name in a label set must be unique.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html */

export interface LimitsPerLabelSet {
    /**
     * - This defines one label set that will have an enforced ingestion limit. You can set ingestion limits on time series that match defined label sets, to help prevent a workspace from being overwhelmed with unexpected spikes in time series ingestion.
     * - Label values accept all UTF-8 characters with one exception. If the label name is metric name label `___name___`, then the _metric_ part of the name must conform to the following pattern: `[a-zA-Z_:][a-zA-Z0-9_:]*`
     * - _Required_: Yes
     * - _Type_: Array of [Label](./aws-properties-aps-workspace-label.html)
     * - _Minimum_: `0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html#cfn-aps-workspace-limitsperlabelset-labelset */
    "LabelSet": Label[];
    /**
     * - This structure contains the information about the limits that apply to time series that match this label set.
     * - _Required_: Yes
     * - _Type_: [LimitsPerLabelSetEntry](./aws-properties-aps-workspace-limitsperlabelsetentry.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html#cfn-aps-workspace-limitsperlabelset-limits */
    "Limits": LimitsPerLabelSetEntry;
}

/**
 * Use this structure to define label sets and the ingestion limits for time series that match label sets, and to specify the retention period of the workspace.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html */

export interface WorkspaceConfiguration {
    /**
     * - This is an array of structures, where each structure defines a label set for the workspace, and defines the ingestion limit for active time series for each of those label sets. Each label name in a label set must be unique.
     * - _Required_: No
     * - _Type_: Array of [LimitsPerLabelSet](./aws-properties-aps-workspace-limitsperlabelset.html)
     * - _Minimum_: `0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html#cfn-aps-workspace-workspaceconfiguration-limitsperlabelsets */
    "LimitsPerLabelSets"?: LimitsPerLabelSet[];
    /**
     * - Specifies how many days that metrics will be retained in the workspace.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html#cfn-aps-workspace-workspaceconfiguration-retentionperiodindays */
    "RetentionPeriodInDays"?: number | Intrinsic;
}

/**
 * An Amazon Managed Service for Prometheus workspace is a logical and isolated Prometheus server dedicated to ingesting, storing, and querying your Prometheus-compatible metrics.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html */

export interface APSWorkspace extends ResourceAttributes {
    "Type": "AWS::APS::Workspace";
    "Properties": {
        /**
         * - The alert manager definition, a YAML configuration for the alert manager in your Amazon Managed Service for Prometheus workspace.
         * - For details about the alert manager definition, see [Creating an alert manager configuration files](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-alertmanager-config.html) in the _Amazon Managed Service for Prometheus User Guide_.
         * - The following example shows part of a CloudFormation YAML file with an embedded alert manager definition (following the `- |-`).
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html#cfn-aps-workspace-alertmanagerdefinition */
        "AlertManagerDefinition"?: string | Intrinsic;
        /**
         * - The alias that is assigned to this workspace to help identify it. It does not need to be unique.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `0`
         * - _Maximum_: `100`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html#cfn-aps-workspace-alias */
        "Alias"?: string | Intrinsic;
        /**
         * - (optional) The ARN for a customer managed AWS KMS key to use for encrypting data within your workspace. For more information about using your own key in your workspace, see [Encryption at rest](https://docs.aws.amazon.com/prometheus/latest/userguide/encryption-at-rest-Amazon-Service-Prometheus.html) in the _Amazon Managed Service for Prometheus User Guide_.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^arn:aws[-a-z]*:kms:[-a-z0-9]+:[0-9]{12}:key/.+$`
         * - _Minimum_: `20`
         * - _Maximum_: `2048`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html#cfn-aps-workspace-kmskeyarn */
        "KmsKeyArn"?: string | Intrinsic;
        /**
         * - Contains information about the current rules and alerting logging configuration for the workspace.
         * - _Required_: No
         * - _Type_: [LoggingConfiguration](./aws-properties-aps-workspace-loggingconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html#cfn-aps-workspace-loggingconfiguration */
        "LoggingConfiguration"?: LoggingConfiguration;
        /**
         * - The definition of logging configuration in an Amazon Managed Service for Prometheus workspace.
         * - _Required_: No
         * - _Type_: [QueryLoggingConfiguration](./aws-properties-aps-workspace-queryloggingconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html#cfn-aps-workspace-queryloggingconfiguration */
        "QueryLoggingConfiguration"?: QueryLoggingConfiguration;
        /**
         * - The list of tag keys and values that are associated with the workspace.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-aps-workspace-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html#cfn-aps-workspace-tags */
        "Tags"?: Tag[];
        /**
         * - Use this structure to define label sets and the ingestion limits for time series that match label sets, and to specify the retention period of the workspace.
         * - _Required_: No
         * - _Type_: [WorkspaceConfiguration](./aws-properties-aps-workspace-workspaceconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-workspace.html#cfn-aps-workspace-workspaceconfiguration */
        "WorkspaceConfiguration"?: WorkspaceConfiguration;
    };
}