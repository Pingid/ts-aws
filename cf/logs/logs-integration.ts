import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * This structure contains configuration details about an integration between CloudWatch Logs and OpenSearch Service.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-integration.html */

export interface OpenSearchResourceConfig {
    /**
     * - If you want to use an existing OpenSearch Service application for your integration with OpenSearch Service, specify it here. If you omit this, a new application will be created.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[\w#+=/:,.@-]*\*?`
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-integration.html#cfn-logs-integration-opensearchresourceconfig-applicationarn */
    "ApplicationARN"?: string | Intrinsic;
    /**
     * - Specify the ARNs of IAM roles and IAM users who you want to grant permission to for viewing the dashboards.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-integration.html#cfn-logs-integration-opensearchresourceconfig-dashboardviewerprincipals */
    "DashboardViewerPrincipals": (string | Intrinsic)[];
    /**
     * - Specify the ARN of an IAM role that CloudWatch Logs will use to create the integration. This role must have the permissions necessary to access the OpenSearch Service collection to be able to create the dashboards. For more information about the permissions needed, see [Permissions that the integration needs](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/OpenSearch-Dashboards-CreateRole.html) in the CloudWatch Logs User Guide.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\w#+=/:,.@-]*\*?`
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-integration.html#cfn-logs-integration-opensearchresourceconfig-datasourcerolearn */
    "DataSourceRoleArn": string | Intrinsic;
    /**
     * - To have the vended dashboard data encrypted with AWS KMS instead of the CloudWatch Logs default encryption method, specify the ARN of the AWS KMS key that you want to use.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[\w#+=/:,.@-]*\*?`
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-integration.html#cfn-logs-integration-opensearchresourceconfig-kmskeyarn */
    "KmsKeyArn"?: string | Intrinsic;
    /**
     * - Specify how many days that you want the data derived by OpenSearch Service to be retained in the index that the dashboard refers to. This also sets the maximum time period that you can choose when viewing data in the dashboard. Choosing a longer time frame will incur additional costs.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `3650`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-integration.html#cfn-logs-integration-opensearchresourceconfig-retentiondays */
    "RetentionDays"?: number | Intrinsic;
}

/**
 * This structure contains configuration details about an integration between CloudWatch Logs and another entity.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-integration.html */

export interface ResourceConfig {
    /**
     * - This structure contains configuration details about an integration between CloudWatch Logs and OpenSearch Service.
     * - _Required_: No
     * - _Type_: [OpenSearchResourceConfig](./aws-properties-logs-integration-opensearchresourceconfig.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-integration.html#cfn-logs-integration-resourceconfig-opensearchresourceconfig */
    "OpenSearchResourceConfig"?: OpenSearchResourceConfig;
}

/**
 * Creates an integration between CloudWatch Logs and another service in this account. Currently, only integrations with OpenSearch Service are supported, and currently you can have only one integration in your account.
 * Integrating with OpenSearch Service makes it possible for you to create curated vended logs dashboards, powered by OpenSearch Service analytics. For more information, see [Vended log dashboards powered by Amazon OpenSearch Service](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogs-OpenSearch-Dashboards.html).
 * You can use this operation only to create a new integration. You can't modify an existing integration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-integration.html */

export interface LogsIntegration extends ResourceAttributes {
    "Type": "AWS::Logs::Integration";
    "Properties": {
        /**
         * - The name of this integration.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[\.\-_/#A-Za-z0-9]+`
         * - _Minimum_: `1`
         * - _Maximum_: `50`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-integration.html#cfn-logs-integration-integrationname */
        "IntegrationName": string | Intrinsic;
        /**
         * - The type of integration. Integrations with OpenSearch Service have the type `OPENSEARCH`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `OPENSEARCH`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-integration.html#cfn-logs-integration-integrationtype */
        "IntegrationType": string | Intrinsic;
        /**
         * - This structure contains configuration details about an integration between CloudWatch Logs and another entity.
         * - _Required_: Yes
         * - _Type_: [ResourceConfig](./aws-properties-logs-integration-resourceconfig.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-integration.html#cfn-logs-integration-resourceconfig */
        "ResourceConfig": ResourceConfig;
    };
}