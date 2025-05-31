import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A set of key-value pairs that are used to manage the resource. Tags can only be applied to permission sets and cannot be applied to corresponding roles that IAM Identity Center creates in AWS accounts.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-application.html */

export interface Tag {
    /**
     * - The key for the tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[\w+=,.@-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-application.html#cfn-sso-application-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value of the tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[\w+=,.@-]+$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-application.html#cfn-sso-application-tag-value */
    "Value": string | Intrinsic;
}

/**
 * A structure that describes the sign-in options for an application portal.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-application.html */

export interface SignInOptions {
    /**
     * - The URL that accepts authentication requests for an application. This is a required parameter if the `Origin` parameter is `APPLICATION`.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^http(s)?:\/\/[-a-zA-Z0-9+&@#\/%?=~_|!:,.;]*[-a-zA-Z0-9+&bb@#\/%?=~_|]$`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-application.html#cfn-sso-application-signinoptions-applicationurl */
    "ApplicationUrl"?: string | Intrinsic;
    /**
     * - This determines how IAM Identity Center navigates the user to the target application. It can be one of the following values:
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `IDENTITY_CENTER | APPLICATION`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-application.html#cfn-sso-application-signinoptions-origin */
    "Origin": string | Intrinsic;
}

/**
 * A structure that describes the options for the portal associated with an application.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-application.html */

export interface PortalOptionsConfiguration {
    /**
     * - A structure that describes the sign-in options for the access portal.
     * - _Required_: No
     * - _Type_: [SignInOptions](./aws-properties-sso-application-signinoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-application.html#cfn-sso-application-portaloptionsconfiguration-signinoptions */
    "SignInOptions"?: SignInOptions;
    /**
     * - Indicates whether this application is visible in the access portal.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-application.html#cfn-sso-application-portaloptionsconfiguration-visibility */
    "Visibility"?: string | Intrinsic;
}

/**
 * Creates an OAuth 2.0 customer managed application in IAM Identity Center for the given application provider.
 * ###### Note
 * 
 * This API does not support creating SAML 2.0 customer managed applications or AWS managed applications. To learn how to create an AWS managed application, see the application user guide. You can create a SAML 2.0 customer managed application in the AWS Management Console only. See [Setting up customer managed SAML 2.0 applications](https://docs.aws.amazon.com/singlesignon/latest/userguide/customermanagedapps-saml2-setup.html). For more information on these application types, see [AWS managed applications](https://docs.aws.amazon.com/singlesignon/latest/userguide/awsapps.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-application.html */

export interface SSOApplication extends ResourceAttributes {
    "Type": "AWS::SSO::Application";
    "Properties": {
        /**
         * - The ARN of the application provider for this application.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso::aws:applicationProvider/[a-zA-Z0-9-/]+$`
         * - _Minimum_: `10`
         * - _Maximum_: `1224`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-application.html#cfn-sso-application-applicationproviderarn */
        "ApplicationProviderArn": string | Intrinsic;
        /**
         * - The description of the application.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-application.html#cfn-sso-application-description */
        "Description"?: string | Intrinsic;
        /**
         * - The ARN of the instance of IAM Identity Center that is configured with this application.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso:::instance/(sso)?ins-[a-zA-Z0-9-.]{16}$`
         * - _Minimum_: `10`
         * - _Maximum_: `1224`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-application.html#cfn-sso-application-instancearn */
        "InstanceArn": string | Intrinsic;
        /**
         * - The name of the application.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[\w+=,.@-]+$`
         * - _Minimum_: `0`
         * - _Maximum_: `255`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-application.html#cfn-sso-application-name */
        "Name": string | Intrinsic;
        /**
         * - A structure that describes the options for the access portal associated with this application.
         * - _Required_: No
         * - _Type_: [PortalOptionsConfiguration](./aws-properties-sso-application-portaloptionsconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-application.html#cfn-sso-application-portaloptions */
        "PortalOptions"?: PortalOptionsConfiguration;
        /**
         * - The current status of the application in this instance of IAM Identity Center.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `ENABLED | DISABLED`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-application.html#cfn-sso-application-status */
        "Status"?: string | Intrinsic;
        /**
         * - Specifies tags to be attached to the application.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-sso-application-tag.html)
         * - _Maximum_: `75`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-application.html#cfn-sso-application-tags */
        "Tags"?: Tag[];
    };
}