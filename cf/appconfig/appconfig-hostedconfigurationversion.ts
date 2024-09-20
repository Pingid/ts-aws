import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Create a new configuration in the AWS AppConfig hosted configuration store. Configurations must be 1 MB or smaller. The AWS AppConfig hosted configuration store provides the following benefits over other configuration store options.
 * *   You don't need to set up and configure other services such as Amazon Simple Storage Service (Amazon S3) or Parameter Store.
 *
 * *   You don't need to configure AWS Identity and Access Management (IAM) permissions to use the configuration store.
 *
 * *   You can store configurations in any content type.
 *
 * *   There is no cost to use the store.
 *
 * *   You can create a configuration and add it to the store when you create a configuration profile.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html */

export interface AppConfigHostedConfigurationVersion extends ResourceAttributes {
  Type: 'AWS::AppConfig::HostedConfigurationVersion'
  Properties: {
    /**
     * - The application ID.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-z0-9]{4,7}`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html#cfn-appconfig-hostedconfigurationversion-applicationid */
    ApplicationId: string | Intrinsic
    /**
     * - The configuration profile ID.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-z0-9]{4,7}`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html#cfn-appconfig-hostedconfigurationversion-configurationprofileid */
    ConfigurationProfileId: string | Intrinsic
    /**
     * - The configuration data, as bytes.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html#cfn-appconfig-hostedconfigurationversion-content */
    Content: string | Intrinsic
    /**
     * - A standard MIME type describing the format of the configuration content. For more information, see [Content-Type](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17).
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html#cfn-appconfig-hostedconfigurationversion-contenttype */
    ContentType: string | Intrinsic
    /**
     * - A description of the configuration.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html#cfn-appconfig-hostedconfigurationversion-description */
    Description?: string | Intrinsic
    /**
     * - An optional locking token used to prevent race conditions from overwriting configuration updates when creating a new version. To ensure your data is not overwritten when creating multiple hosted configuration versions in rapid succession, specify the version number of the latest hosted configuration version.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html#cfn-appconfig-hostedconfigurationversion-latestversionnumber */
    LatestVersionNumber?: number | Intrinsic
    /**
     * - A user-defined label for an AWS AppConfig hosted configuration version.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^$|.*[^0-9].*`
     * - _Minimum_: `0`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-hostedconfigurationversion.html#cfn-appconfig-hostedconfigurationversion-versionlabel */
    VersionLabel?: string | Intrinsic
  }
}
