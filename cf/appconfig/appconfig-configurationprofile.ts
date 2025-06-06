import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Metadata to assign to the configuration profile. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html */

export interface Tags {
    /**
     * - The key-value string map. The valid character set is `[a-zA-Z+-=._:/]`. The tag key can be up to 128 characters and must not start with `aws:`.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html#cfn-appconfig-configurationprofile-tags-key */
    "Key"?: string | Intrinsic;
    /**
     * - The tag value can be up to 256 characters.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html#cfn-appconfig-configurationprofile-tags-value */
    "Value"?: string | Intrinsic;
}

/**
 * A validator provides a syntactic or semantic check to ensure the configuration that you want to deploy functions as intended. To validate your application configuration data, you provide a schema or an AWS Lambda function that runs against the configuration. The configuration deployment or update can only proceed when the configuration data is valid. For more information, see [About validators](https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-configuration-profile.html#appconfig-creating-configuration-and-profile-validators) in the _AWS AppConfig User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html */

export interface Validators {
    /**
     * - Either the JSON Schema content or the Amazon Resource Name (ARN) of an Lambda function.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `32768`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html#cfn-appconfig-configurationprofile-validators-content */
    "Content"?: string | Intrinsic;
    /**
     * - AWS AppConfig supports validators of type `JSON_SCHEMA` and `LAMBDA`
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `JSON_SCHEMA | LAMBDA`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html#cfn-appconfig-configurationprofile-validators-type */
    "Type"?: string | Intrinsic;
}

/**
 * The `AWS::AppConfig::ConfigurationProfile` resource creates a configuration profile that enables AWS AppConfig to access the configuration source. Valid configuration sources include AWS Systems Manager (SSM) documents, SSM Parameter Store parameters, and Amazon S3. A configuration profile includes the following information.
 * *   The Uri location of the configuration data.
 *     
 * *   The AWS Identity and Access Management (IAM) role that provides access to the configuration data.
 *     
 * *   A validator for the configuration data. Available validators include either a JSON Schema or the Amazon Resource Name (ARN) of an AWS Lambda function.
 * AWS AppConfig requires that you create resources and deploy a configuration in the following order:
 * 1.  Create an application
 *     
 * 2.  Create an environment
 *     
 * 3.  Create a configuration profile
 *     
 * 4.  Choose a pre-defined deployment strategy or create your own
 *     
 * 5.  Deploy the configuration
 * For more information, see [AWS AppConfig](https://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html) in the _AWS AppConfig User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html */

export interface AppConfigConfigurationProfile extends ResourceAttributes {
    "Type": "AWS::AppConfig::ConfigurationProfile";
    "Properties": {
        /**
         * - The application ID.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[a-z0-9]{4,7}`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html#cfn-appconfig-configurationprofile-applicationid */
        "ApplicationId": string | Intrinsic;
        /**
         * - A parameter to configure deletion protection. Deletion protection prevents a user from deleting a configuration profile if your application has called either [GetLatestConfiguration](https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_GetLatestConfiguration.html) or [GetConfiguration](https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_GetConfiguration.html) for the configuration profile during the specified interval.
         * - This parameter supports the following values:
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `ACCOUNT_DEFAULT | APPLY | BYPASS`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html#cfn-appconfig-configurationprofile-deletionprotectioncheck */
        "DeletionProtectionCheck"?: string | Intrinsic;
        /**
         * - A description of the configuration profile.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `0`
         * - _Maximum_: `1024`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html#cfn-appconfig-configurationprofile-description */
        "Description"?: string | Intrinsic;
        /**
         * - The AWS Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}|alias/[a-zA-Z0-9/_-]{1,250}|arn:aws[a-zA-Z-]*:kms:[a-z]{2}(-gov|-iso(b?))?-[a-z]+-\d{1}:\d{12}:(key/[0-9a-f-]{36}|alias/[a-zA-Z0-9/_-]{1,250})$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html#cfn-appconfig-configurationprofile-kmskeyidentifier */
        "KmsKeyIdentifier"?: string | Intrinsic;
        /**
         * - A URI to locate the configuration. You can specify the following:
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `2048`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html#cfn-appconfig-configurationprofile-locationuri */
        "LocationUri": string | Intrinsic;
        /**
         * - A name for the configuration profile.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html#cfn-appconfig-configurationprofile-name */
        "Name": string | Intrinsic;
        /**
         * - The ARN of an IAM role with permission to access the configuration at the specified `LocationUri`.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^((arn):(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):(iam)::\d{12}:role[/].*)$`
         * - _Minimum_: `20`
         * - _Maximum_: `2048`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html#cfn-appconfig-configurationprofile-retrievalrolearn */
        "RetrievalRoleArn"?: string | Intrinsic;
        /**
         * - Metadata to assign to the configuration profile. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
         * - _Required_: No
         * - _Type_: [Array](./aws-properties-appconfig-configurationprofile-tags.html) of [Tags](./aws-properties-appconfig-configurationprofile-tags.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html#cfn-appconfig-configurationprofile-tags */
        "Tags"?: Tags[];
        /**
         * - The type of configurations contained in the profile. AWS AppConfig supports `feature flags` and `freeform` configurations. We recommend you create feature flag configurations to enable or disable new features and freeform configurations to distribute configurations to an application. When calling this API, enter one of the following values for `Type`:
         * - `AWS.AppConfig.FeatureFlags`
         * - `AWS.Freeform`
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z\.]+`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html#cfn-appconfig-configurationprofile-type */
        "Type"?: string | Intrinsic;
        /**
         * - A list of methods for validating the configuration.
         * - _Required_: No
         * - _Type_: [Array](./aws-properties-appconfig-configurationprofile-validators.html) of [Validators](./aws-properties-appconfig-configurationprofile-validators.html)
         * - _Maximum_: `2`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-configurationprofile.html#cfn-appconfig-configurationprofile-validators */
        "Validators"?: Validators[];
    };
}