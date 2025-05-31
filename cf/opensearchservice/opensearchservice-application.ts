import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Configuration settings for an OpenSearch application. For more information, see see [Using the OpenSearch user interface in Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/application.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-application.html */

export interface AppConfig {
    /**
     * - The configuration item to set, such as the admin role for the OpenSearch application.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `opensearchDashboards.dashboardAdmin.users | opensearchDashboards.dashboardAdmin.groups`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-application.html#cfn-opensearchservice-application-appconfig-key */
    "Key": string | Intrinsic;
    /**
     * - The value assigned to the configuration key, such as an IAM user ARN.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-application.html#cfn-opensearchservice-application-appconfig-value */
    "Value": string | Intrinsic;
}

/**
 * Data sources that are associated with an OpenSearch application.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-application.html */

export interface DataSource {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-application.html#cfn-opensearchservice-application-datasource-datasourcearn */
    "DataSourceArn": string | Intrinsic;
    /**
     * - Detailed description of a data source.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^([a-zA-Z0-9_])*[\\a-zA-Z0-9_@#%*+=:?./!\s-]*$`
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-application.html#cfn-opensearchservice-application-datasource-datasourcedescription */
    "DataSourceDescription"?: string | Intrinsic;
}

/**
 * A tag (key-value pair) for an Amazon OpenSearch Service resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-application.html */

export interface Tag {
    /**
     * - The tag key. Tag keys must be unique for the domain to which they are attached.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-application.html#cfn-opensearchservice-application-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value assigned to the corresponding tag key. Tag values can be null and don't have to be unique in a tag set. For example, you can have a key value pair in a tag set of `project : Trinity` and `cost-center : Trinity`
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-application.html#cfn-opensearchservice-application-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Configuration settings for IAM Identity Center in an OpenSearch application.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-application.html */

export interface IamIdentityCenterOptions {
    /**
     * - Indicates whether IAM Identity Center is enabled for the OpenSearch application.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-application.html#cfn-opensearchservice-application-iamidentitycenteroptions-enabled */
    "Enabled"?: boolean | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-application.html#cfn-opensearchservice-application-iamidentitycenteroptions-iamidentitycenterinstancearn */
    "IamIdentityCenterInstanceArn"?: string | Intrinsic;
    /**
     * - The Amazon Resource Name (ARN) of the IAM role assigned to the IAM Identity Center application for the OpenSearch application.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:(aws|aws\-cn|aws\-us\-gov|aws\-iso|aws\-iso\-b):iam::[0-9]+:role\/.*`
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-application.html#cfn-opensearchservice-application-iamidentitycenteroptions-iamroleforidentitycenterapplicationarn */
    "IamRoleForIdentityCenterApplicationArn"?: string | Intrinsic;
}

/**
 * Creates an OpenSearch UI application. For more information, see [Using the OpenSearch user interface in Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/application.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-application.html */

export interface OpenSearchServiceApplication extends ResourceAttributes {
    "Type": "AWS::OpenSearchService::Application";
    "Properties": {
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: Array of [AppConfig](./aws-properties-opensearchservice-application-appconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-application.html#cfn-opensearchservice-application-appconfigs */
        "AppConfigs"?: AppConfig[];
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: Array of [DataSource](./aws-properties-opensearchservice-application-datasource.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-application.html#cfn-opensearchservice-application-datasources */
        "DataSources"?: DataSource[];
        /**
         * - The endpoint URL of an OpenSearch application.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-application.html#cfn-opensearchservice-application-endpoint */
        "Endpoint"?: string | Intrinsic;
        /**
         * - Settings container for integrating IAM Identity Center with OpenSearch UI applications, which enables enabling secure user authentication and access control across multiple data sources. This setup supports single sign-on (SSO) through IAM Identity Center, allowing centralized user management.
         * - _Required_: No
         * - _Type_: [IamIdentityCenterOptions](./aws-properties-opensearchservice-application-iamidentitycenteroptions.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-application.html#cfn-opensearchservice-application-iamidentitycenteroptions */
        "IamIdentityCenterOptions"?: IamIdentityCenterOptions;
        /**
         * - The name of an OpenSearch application.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[a-z][a-z0-9\-]+`
         * - _Minimum_: `3`
         * - _Maximum_: `40`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-application.html#cfn-opensearchservice-application-name */
        "Name": string | Intrinsic;
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-opensearchservice-application-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchservice-application.html#cfn-opensearchservice-application-tags */
        "Tags"?: Tag[];
    };
}