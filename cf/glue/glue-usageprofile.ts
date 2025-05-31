import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `Tag` object represents a label that you can assign to an AWS resource. Each tag consists of a key and an optional value, both of which you define.
 * For more information about tags, and controlling access to resources in AWS Glue, see [AWS Tags in AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html) and [Specifying AWS Glue Resource ARNs](https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html) in the developer guide.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-usageprofile.html */

export interface Tag {
    /**
     * - The tag key. The key is required when you create a tag on an object. The key is case-sensitive, and must not contain the prefix aws.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-usageprofile.html#cfn-glue-usageprofile-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The tag value. The value is optional when you create a tag on an object. The value is case-sensitive, and must not contain the prefix aws.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-usageprofile.html#cfn-glue-usageprofile-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Specifies the values that an admin sets for each job or session parameter configured in a AWS Glue usage profile.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-usageprofile.html */

export interface ConfigurationObject {
    /**
     * - A list of allowed values for the parameter.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-usageprofile.html#cfn-glue-usageprofile-configurationobject-allowedvalues */
    "AllowedValues"?: (string | Intrinsic)[];
    /**
     * - A default value for the parameter.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9_.-]+`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-usageprofile.html#cfn-glue-usageprofile-configurationobject-defaultvalue */
    "DefaultValue"?: string | Intrinsic;
    /**
     * - A maximum allowed value for the parameter.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9_.-]+`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-usageprofile.html#cfn-glue-usageprofile-configurationobject-maxvalue */
    "MaxValue"?: string | Intrinsic;
    /**
     * - A minimum allowed value for the parameter.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9_.-]+`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-usageprofile.html#cfn-glue-usageprofile-configurationobject-minvalue */
    "MinValue"?: string | Intrinsic;
}

/**
 * Specifies the job and session values that an admin configures in an AWS Glue usage profile.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-usageprofile.html */

export interface ProfileConfiguration {
    /**
     * - A key-value map of configuration parameters for AWS Glue jobs.
     * - _Required_: No
     * - _Type_: [ConfigurationObject](./aws-properties-glue-usageprofile-configurationobject.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-usageprofile.html#cfn-glue-usageprofile-profileconfiguration-jobconfiguration */
    "JobConfiguration"?: ConfigurationObject;
    /**
     * - A key-value map of configuration parameters for AWS Glue sessions.
     * - _Required_: No
     * - _Type_: [ConfigurationObject](./aws-properties-glue-usageprofile-configurationobject.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-usageprofile.html#cfn-glue-usageprofile-profileconfiguration-sessionconfiguration */
    "SessionConfiguration"?: ConfigurationObject;
}

/**
 * Creates an AWS Glue usage profile.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-usageprofile.html */

export interface GlueUsageProfile extends ResourceAttributes {
    "Type": "AWS::Glue::UsageProfile";
    "Properties": {
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: [ProfileConfiguration](./aws-properties-glue-usageprofile-profileconfiguration.html)
         * - _Minimum_: `1`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-usageprofile.html#cfn-glue-usageprofile-configuration */
        "Configuration"?: ProfileConfiguration;
        /**
         * - A description of the usage profile.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[a-zA-Z0-9\-\:\_]{1,64}`
         * - _Minimum_: `1`
         * - _Maximum_: `512`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-usageprofile.html#cfn-glue-usageprofile-description */
        "Description"?: string | Intrinsic;
        /**
         * - The name of the usage profile.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `5`
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-usageprofile.html#cfn-glue-usageprofile-name */
        "Name": string | Intrinsic;
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-glue-usageprofile-tag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-usageprofile.html#cfn-glue-usageprofile-tags */
        "Tags"?: Tag[];
    };
}