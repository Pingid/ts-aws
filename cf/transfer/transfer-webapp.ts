import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A structure that describes the values to use for the IAM Identity Center settings when you create or update a web app.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-webapp.html */

export interface IdentityProviderDetails {
    /**
     * - The Amazon Resource Name (ARN) for the IAM Identity Center application: this value is set automatically when you create your web app.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:[\w-]+:sso::\d{12}:application/(sso)?ins-[a-zA-Z0-9-.]{16}/apl-[a-zA-Z0-9]{16}$`
     * - _Minimum_: `10`
     * - _Maximum_: `1224`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-webapp.html#cfn-transfer-webapp-identityproviderdetails-applicationarn */
    "ApplicationArn"?: string | Intrinsic;
    /**
     * - The Amazon Resource Name (ARN) for the IAM Identity Center used for the web app.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:[\w-]+:sso:::instance/(sso)?ins-[a-zA-Z0-9-.]{16}$`
     * - _Minimum_: `10`
     * - _Maximum_: `1224`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-webapp.html#cfn-transfer-webapp-identityproviderdetails-instancearn */
    "InstanceArn"?: string | Intrinsic;
    /**
     * - The IAM role in IAM Identity Center used for the web app.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:[a-z-]+:iam::[0-9]{12}:role[:/]\S+$`
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-webapp.html#cfn-transfer-webapp-identityproviderdetails-role */
    "Role"?: string | Intrinsic;
}

/**
 * Creates a key-value pair for a specific resource. Tags are metadata that you can use to search for and group a resource for various purposes. You can apply tags to servers, users, and roles. A tag key can take more than one value. For example, to group servers for accounting purposes, you might create a tag called `Group` and assign the values `Research` and `Accounting` to that group.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-webapp.html */

export interface Tag {
    /**
     * - The name assigned to the tag that you create.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-webapp.html#cfn-transfer-webapp-tag-key */
    "Key": string | Intrinsic;
    /**
     * - Contains one or more values that you assigned to the key name you create.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-webapp.html#cfn-transfer-webapp-tag-value */
    "Value": string | Intrinsic;
}

/**
 * A structure that contains the customization fields for the web app. You can provide a title, logo, and icon to customize the appearance of your web app.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-webapp.html */

export interface WebAppCustomization {
    /**
     * - Returns an icon file data string (in base64 encoding).
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `20960`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-webapp.html#cfn-transfer-webapp-webappcustomization-faviconfile */
    "FaviconFile"?: string | Intrinsic;
    /**
     * - Returns a logo file data string (in base64 encoding).
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `51200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-webapp.html#cfn-transfer-webapp-webappcustomization-logofile */
    "LogoFile"?: string | Intrinsic;
    /**
     * - Returns the page title that you defined for your web app.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-webapp.html#cfn-transfer-webapp-webappcustomization-title */
    "Title"?: string | Intrinsic;
}

/**
 * Contains an integer value that represents the value for number of concurrent connections or the user sessions on your web app.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-webapp.html */

export interface WebAppUnits {
    /**
     * - An integer that represents the number of units for your desired number of concurrent connections, or the number of user sessions on your web app at the same time.
     * - Each increment allows an additional 250 concurrent sessions: a value of `1` sets the number of concurrent sessions to 250; `2` sets a value of 500, and so on.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-webapp.html#cfn-transfer-webapp-webappunits-provisioned */
    "Provisioned": number | Intrinsic;
}

/**
 * Creates a web app based on specified parameters, and returns the ID for the new web app.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-webapp.html */

export interface TransferWebApp extends ResourceAttributes {
    "Type": "AWS::Transfer::WebApp";
    "Properties": {
        /**
         * - The `AccessEndpoint` is the URL that you provide to your users for them to interact with the Transfer Family web app. You can specify a custom URL or use the default value.
         * - Before you enter a custom URL for this parameter, follow the steps described in [Update your access endpoint with a custom URL](https://docs.aws.amazon.com/transfer/latest/userguide/webapp-customize.html).
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `1024`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-webapp.html#cfn-transfer-webapp-accessendpoint */
        "AccessEndpoint"?: string | Intrinsic;
        /**
         * - You can provide a structure that contains the details for the identity provider to use with your web app.
         * - For more details about this parameter, see [Configure your identity provider for Transfer Family web apps](https://docs.aws.amazon.com/transfer/latest/userguide/webapp-identity-center.html).
         * - _Required_: Yes
         * - _Type_: [IdentityProviderDetails](./aws-properties-transfer-webapp-identityproviderdetails.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-webapp.html#cfn-transfer-webapp-identityproviderdetails */
        "IdentityProviderDetails": IdentityProviderDetails;
        /**
         * - Key-value pairs that can be used to group and search for web apps. Tags are metadata attached to web apps for any purpose.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-transfer-webapp-tag.html)
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-webapp.html#cfn-transfer-webapp-tags */
        "Tags"?: Tag[];
        /**
         * - A structure that contains the customization fields for the web app. You can provide a title, logo, and icon to customize the appearance of your web app.
         * - _Required_: No
         * - _Type_: [WebAppCustomization](./aws-properties-transfer-webapp-webappcustomization.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-webapp.html#cfn-transfer-webapp-webappcustomization */
        "WebAppCustomization"?: WebAppCustomization;
        /**
         * - Setting for the type of endpoint policy for the web app. The default value is `STANDARD`.
         * - If your web app was created in an AWS GovCloud (US) Region, the value of this parameter can be `FIPS`, which indicates the web app endpoint is FIPS-compliant.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `STANDARD | FIPS`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-webapp.html#cfn-transfer-webapp-webappendpointpolicy */
        "WebAppEndpointPolicy"?: string | Intrinsic;
        /**
         * - A union that contains the value for number of concurrent connections or the user sessions on your web app.
         * - _Required_: No
         * - _Type_: [WebAppUnits](./aws-properties-transfer-webapp-webappunits.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-webapp.html#cfn-transfer-webapp-webappunits */
        "WebAppUnits"?: WebAppUnits;
    };
}