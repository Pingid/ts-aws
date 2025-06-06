import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Specifies an action for an experiment template.
 * For more information, see [Actions](https://docs.aws.amazon.com/fis/latest/userguide/actions.html) in the _AWS Fault Injection Service User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html */

export interface ExperimentTemplateAction {
    /**
     * - The ID of the action.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-experimenttemplateaction-actionid */
    "ActionId": string | Intrinsic;
    /**
     * - A description for the action.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-experimenttemplateaction-description */
    "Description"?: string | Intrinsic;
    /**
     * - The parameters for the action.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `.{1,64}`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-experimenttemplateaction-parameters */
    "Parameters"?: Record<string, string | Intrinsic>;
    /**
     * - The name of the action that must be completed before the current action starts.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-experimenttemplateaction-startafter */
    "StartAfter"?: (string | Intrinsic)[];
    /**
     * - The targets for the action.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `.{1,64}`
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-experimenttemplateaction-targets */
    "Targets"?: Record<string, string | Intrinsic>;
}

/**
 * Specifies a stop condition for an experiment template.
 * For more information, see [Stop conditions](https://docs.aws.amazon.com/fis/latest/userguide/stop-conditions.html) in the _AWS Fault Injection Service User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html */

export interface ExperimentTemplateStopCondition {
    /**
     * - The source for the stop condition.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-experimenttemplatestopcondition-source */
    "Source": string | Intrinsic;
    /**
     * - The Amazon Resource Name (ARN) of the CloudWatch alarm, if applicable.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-experimenttemplatestopcondition-value */
    "Value"?: string | Intrinsic;
}

/**
 * Describes the experiment options for an experiment template.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html */

export interface ExperimentTemplateExperimentOptions {
    /**
     * - The account targeting setting for an experiment template.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `multi-account | single-account`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-experimenttemplateexperimentoptions-accounttargeting */
    "AccountTargeting"?: string | Intrinsic;
    /**
     * - The empty target resolution mode for an experiment template.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `fail | skip`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-experimenttemplateexperimentoptions-emptytargetresolutionmode */
    "EmptyTargetResolutionMode"?: string | Intrinsic;
}

/**
 * Specifies the configuration for experiment logging to CloudWatch Logs.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html */

export interface CloudWatchLogsConfiguration {
    /**
     * - The Amazon Resource Name (ARN) of the destination Amazon CloudWatch Logs log group.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-cloudwatchlogsconfiguration-loggrouparn */
    "LogGroupArn": string | Intrinsic;
}

/**
 * Specifies the configuration for experiment logging to Amazon S3.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html */

export interface S3Configuration {
    /**
     * - The name of the destination bucket.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `3`
     * - _Maximum_: `63`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-s3configuration-bucketname */
    "BucketName": string | Intrinsic;
    /**
     * - The bucket prefix.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `700`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-s3configuration-prefix */
    "Prefix"?: string | Intrinsic;
}

/**
 * Specifies the configuration for experiment logging.
 * For more information, see [Experiment logging](https://docs.aws.amazon.com/fis/latest/userguide/monitoring-logging.html) in the _AWS Fault Injection Service User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html */

export interface ExperimentTemplateLogConfiguration {
    /**
     * - The configuration for experiment logging to CloudWatch Logs.
     * - _Required_: No
     * - _Type_: [CloudWatchLogsConfiguration](./aws-properties-fis-experimenttemplate-cloudwatchlogsconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-experimenttemplatelogconfiguration-cloudwatchlogsconfiguration */
    "CloudWatchLogsConfiguration"?: CloudWatchLogsConfiguration;
    /**
     * - The schema version.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-experimenttemplatelogconfiguration-logschemaversion */
    "LogSchemaVersion": number | Intrinsic;
    /**
     * - The configuration for experiment logging to Amazon S3.
     * - _Required_: No
     * - _Type_: [S3Configuration](./aws-properties-fis-experimenttemplate-s3configuration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-experimenttemplatelogconfiguration-s3configuration */
    "S3Configuration"?: S3Configuration;
}

/**
 * Specifies a filter used for the target resource input in an experiment template.
 * For more information, see [Resource filters](https://docs.aws.amazon.com/fis/latest/userguide/targets.html#target-filters) in the _AWS Fault Injection Service User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html */

export interface ExperimentTemplateTargetFilter {
    /**
     * - The attribute path for the filter.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-experimenttemplatetargetfilter-path */
    "Path": string | Intrinsic;
    /**
     * - The attribute values for the filter.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-experimenttemplatetargetfilter-values */
    "Values": (string | Intrinsic)[];
}

/**
 * Specifies a target for an experiment. You must specify at least one Amazon Resource Name (ARN) or at least one resource tag. You cannot specify both ARNs and tags.
 * For more information, see [Targets](https://docs.aws.amazon.com/fis/latest/userguide/targets.html) in the _AWS Fault Injection Service User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html */

export interface ExperimentTemplateTarget {
    /**
     * - The filters to apply to identify target resources using specific attributes.
     * - _Required_: No
     * - _Type_: Array of [ExperimentTemplateTargetFilter](./aws-properties-fis-experimenttemplate-experimenttemplatetargetfilter.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-experimenttemplatetarget-filters */
    "Filters"?: ExperimentTemplateTargetFilter[];
    /**
     * - The parameters for the resource type.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `.{1,64}`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-experimenttemplatetarget-parameters */
    "Parameters"?: Record<string, string | Intrinsic>;
    /**
     * - The Amazon Resource Names (ARNs) of the targets.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Maximum_: `5`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-experimenttemplatetarget-resourcearns */
    "ResourceArns"?: (string | Intrinsic)[];
    /**
     * - The tags for the target resources.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `.{1,128}`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-experimenttemplatetarget-resourcetags */
    "ResourceTags"?: Record<string, string | Intrinsic>;
    /**
     * - The resource type.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-experimenttemplatetarget-resourcetype */
    "ResourceType": string | Intrinsic;
    /**
     * - Scopes the identified resources to a specific count or percentage.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-experimenttemplatetarget-selectionmode */
    "SelectionMode": string | Intrinsic;
}

/**
 * The S3 destination for the experiment report.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html */

export interface ExperimentReportS3Configuration {
    /**
     * - The name of the S3 bucket where the experiment report will be stored.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `3`
     * - _Maximum_: `63`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-experimentreports3configuration-bucketname */
    "BucketName": string | Intrinsic;
    /**
     * - The prefix of the S3 bucket where the experiment report will be stored.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-experimentreports3configuration-prefix */
    "Prefix"?: string | Intrinsic;
}

/**
 * Describes the output destinations of the experiment report.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html */

export interface Outputs {
    /**
     * - The S3 destination for the experiment report.
     * - _Required_: Yes
     * - _Type_: [ExperimentReportS3Configuration](./aws-properties-fis-experimenttemplate-experimentreports3configuration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-outputs-experimentreports3configuration */
    "ExperimentReportS3Configuration": ExperimentReportS3Configuration;
}

/**
 * The CloudWatch dashboards to include as data sources in the experiment report.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html */

export interface CloudWatchDashboard {
    /**
     * - The Amazon Resource Name (ARN) of the CloudWatch dashboard to include in the experiment report.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-cloudwatchdashboard-dashboardidentifier */
    "DashboardIdentifier": string | Intrinsic;
}

/**
 * Describes the data sources for the experiment report.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html */

export interface DataSources {
    /**
     * - The CloudWatch dashboards to include as data sources in the experiment report.
     * - _Required_: No
     * - _Type_: Array of [CloudWatchDashboard](./aws-properties-fis-experimenttemplate-cloudwatchdashboard.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-datasources-cloudwatchdashboards */
    "CloudWatchDashboards"?: CloudWatchDashboard[];
}

/**
 * Describes the report configuration for the experiment template.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html */

export interface ExperimentTemplateExperimentReportConfiguration {
    /**
     * - The data sources for the experiment report.
     * - _Required_: No
     * - _Type_: [DataSources](./aws-properties-fis-experimenttemplate-datasources.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-experimenttemplateexperimentreportconfiguration-datasources */
    "DataSources"?: DataSources;
    /**
     * - The output destinations of the experiment report.
     * - _Required_: Yes
     * - _Type_: [Outputs](./aws-properties-fis-experimenttemplate-outputs.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-experimenttemplateexperimentreportconfiguration-outputs */
    "Outputs": Outputs;
    /**
     * - The duration after the experiment end time for the data sources to include in the report.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[\S]+`
     * - _Maximum_: `32`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-experimenttemplateexperimentreportconfiguration-postexperimentduration */
    "PostExperimentDuration"?: string | Intrinsic;
    /**
     * - The duration before the experiment start time for the data sources to include in the report.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[\S]+`
     * - _Maximum_: `32`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-experimenttemplateexperimentreportconfiguration-preexperimentduration */
    "PreExperimentDuration"?: string | Intrinsic;
}

/**
 * Specifies an experiment template.
 * An experiment template includes the following components:
 * *   **Targets**: A target can be a specific resource in your AWS environment, or one or more resources that match criteria that you specify, for example, resources that have specific tags.
 *     
 * *   **Actions**: The actions to carry out on the target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.
 *     
 * *   **Stop conditions**: If a stop condition is triggered while an experiment is running, the experiment is automatically stopped. You can define a stop condition as a CloudWatch alarm.
 * For more information, see [Experiment templates](https://docs.aws.amazon.com/fis/latest/userguide/experiment-templates.html) in the _AWS Fault Injection Service User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html */

export interface FISExperimentTemplate extends ResourceAttributes {
    "Type": "AWS::FIS::ExperimentTemplate";
    "Properties": {
        /**
         * - The actions for the experiment.
         * - _Required_: No
         * - _Type_: Object of [ExperimentTemplateAction](./aws-properties-fis-experimenttemplate-experimenttemplateaction.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-actions */
        "Actions"?: Record<string, ExperimentTemplateAction>;
        /**
         * - The description for the experiment template.
         * - _Required_: Yes
         * - _Type_: String
         * - _Maximum_: `512`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-description */
        "Description": string | Intrinsic;
        /**
         * - The experiment options for an experiment template.
         * - _Required_: No
         * - _Type_: [ExperimentTemplateExperimentOptions](./aws-properties-fis-experimenttemplate-experimenttemplateexperimentoptions.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-experimentoptions */
        "ExperimentOptions"?: ExperimentTemplateExperimentOptions;
        /**
         * - Describes the report configuration for the experiment template.
         * - _Required_: No
         * - _Type_: [ExperimentTemplateExperimentReportConfiguration](./aws-properties-fis-experimenttemplate-experimenttemplateexperimentreportconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-experimentreportconfiguration */
        "ExperimentReportConfiguration"?: ExperimentTemplateExperimentReportConfiguration;
        /**
         * - The configuration for experiment logging.
         * - _Required_: No
         * - _Type_: [ExperimentTemplateLogConfiguration](./aws-properties-fis-experimenttemplate-experimenttemplatelogconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-logconfiguration */
        "LogConfiguration"?: ExperimentTemplateLogConfiguration;
        /**
         * - The Amazon Resource Name (ARN) of an IAM role.
         * - _Required_: Yes
         * - _Type_: String
         * - _Maximum_: `1224`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-rolearn */
        "RoleArn": string | Intrinsic;
        /**
         * - The stop conditions for the experiment.
         * - _Required_: Yes
         * - _Type_: Array of [ExperimentTemplateStopCondition](./aws-properties-fis-experimenttemplate-experimenttemplatestopcondition.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-stopconditions */
        "StopConditions": ExperimentTemplateStopCondition[];
        /**
         * - The tags for the experiment template.
         * - _Required_: Yes
         * - _Type_: Object of String
         * - _Pattern_: `.{1,128}`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-tags */
        "Tags": Record<string, string | Intrinsic>;
        /**
         * - The targets for the experiment.
         * - _Required_: Yes
         * - _Type_: Object of [ExperimentTemplateTarget](./aws-properties-fis-experimenttemplate-experimenttemplatetarget.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-experimenttemplate.html#cfn-fis-experimenttemplate-targets */
        "Targets": Record<string, ExperimentTemplateTarget>;
    };
}