import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html */

export interface Tag {
    /**
     * - The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, `_`, `.`, `/`, `=`, `+`, and `-`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?!aws:)[a-zA-Z+-=._:/]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html#cfn-appintegrations-dataintegration-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, `_`, `.`, `/`, `=`, `+`, and `-`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html#cfn-appintegrations-dataintegration-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The configuration for what files should be pulled from the source.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html */

export interface FileConfiguration {
    /**
     * - Restrictions for what files should be pulled from the source.
     * - _Required_: No
     * - _Type_: Object of Array
     * - _Pattern_: `^[A-Za-z]`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html#cfn-appintegrations-dataintegration-fileconfiguration-filters */
    "Filters"?: Record<string, (any | Intrinsic)[]>;
    /**
     * - Identifiers for the source folders to pull all files from recursively.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1 | 1`
     * - _Maximum_: `200 | 10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html#cfn-appintegrations-dataintegration-fileconfiguration-folders */
    "Folders": (string | Intrinsic)[];
}

/**
 * The name of the data and how often it should be pulled from the source.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html */

export interface ScheduleConfig {
    /**
     * - The start date for objects to import in the first flow run as an Unix/epoch timestamp in milliseconds or in ISO-8601 format.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*\S.*`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html#cfn-appintegrations-dataintegration-scheduleconfig-firstexecutionfrom */
    "FirstExecutionFrom"?: string | Intrinsic;
    /**
     * - The name of the object to pull from the data source.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9/\._\-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html#cfn-appintegrations-dataintegration-scheduleconfig-object */
    "Object"?: string | Intrinsic;
    /**
     * - How often the data should be pulled from data source.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `.*\S.*`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html#cfn-appintegrations-dataintegration-scheduleconfig-scheduleexpression */
    "ScheduleExpression": string | Intrinsic;
}

/**
 * Creates and persists a DataIntegration resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html */

export interface AppIntegrationsDataIntegration extends ResourceAttributes {
    "Type": "AWS::AppIntegrations::DataIntegration";
    "Properties": {
        /**
         * - A description of the DataIntegration.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `1000`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html#cfn-appintegrations-dataintegration-description */
        "Description"?: string | Intrinsic;
        /**
         * - The configuration for what files should be pulled from the source.
         * - _Required_: No
         * - _Type_: [FileConfiguration](./aws-properties-appintegrations-dataintegration-fileconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html#cfn-appintegrations-dataintegration-fileconfiguration */
        "FileConfiguration"?: FileConfiguration;
        /**
         * - The KMS key for the DataIntegration.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `.*\S.*`
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html#cfn-appintegrations-dataintegration-kmskey */
        "KmsKey": string | Intrinsic;
        /**
         * - The name of the DataIntegration.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9/\._\-]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html#cfn-appintegrations-dataintegration-name */
        "Name": string | Intrinsic;
        /**
         * - The configuration for what data should be pulled from the source.
         * - _Required_: No
         * - _Type_: Object of Object
         * - _Pattern_: `^.+$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html#cfn-appintegrations-dataintegration-objectconfiguration */
        "ObjectConfiguration"?: Record<string, any | Intrinsic>;
        /**
         * - The name of the data and how often it should be pulled from the source.
         * - _Required_: No
         * - _Type_: [ScheduleConfig](./aws-properties-appintegrations-dataintegration-scheduleconfig.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html#cfn-appintegrations-dataintegration-scheduleconfig */
        "ScheduleConfig"?: ScheduleConfig;
        /**
         * - The URI of the data source.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^(\w+\:\/\/[\w.-]+[\w/!@#+=.-]+$)|(\w+\:\/\/[\w.-]+[\w/!@#+=.-]+[\w/!@#+=.-]+[\w/!@#+=.,-]+$)`
         * - _Minimum_: `1`
         * - _Maximum_: `1000`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html#cfn-appintegrations-dataintegration-sourceuri */
        "SourceURI": string | Intrinsic;
        /**
         * - An array of key-value pairs to apply to this resource.
         * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-appintegrations-dataintegration-tag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appintegrations-dataintegration.html#cfn-appintegrations-dataintegration-tags */
        "Tags"?: Tag[];
    };
}