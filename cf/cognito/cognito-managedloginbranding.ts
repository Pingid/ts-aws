import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * An image file from a managed login branding style in a user pool.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-managedloginbranding.html */

export interface AssetType {
    /**
     * - The image file, in Base64-encoded binary.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `1000000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-managedloginbranding.html#cfn-cognito-managedloginbranding-assettype-bytes */
    "Bytes"?: string | Intrinsic;
    /**
     * - The category that the image corresponds to in your managed login configuration. Managed login has asset categories for different types of logos, backgrounds, and icons.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `FAVICON_ICO | FAVICON_SVG | EMAIL_GRAPHIC | SMS_GRAPHIC | AUTH_APP_GRAPHIC | PASSWORD_GRAPHIC | PASSKEY_GRAPHIC | PAGE_HEADER_LOGO | PAGE_HEADER_BACKGROUND | PAGE_FOOTER_LOGO | PAGE_FOOTER_BACKGROUND | PAGE_BACKGROUND | FORM_BACKGROUND | FORM_LOGO | IDP_BUTTON_ICON`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-managedloginbranding.html#cfn-cognito-managedloginbranding-assettype-category */
    "Category": string | Intrinsic;
    /**
     * - The display-mode target of the asset: light, dark, or browser-adaptive. For example, Amazon Cognito displays a dark-mode image only when the browser or application is in dark mode, but displays a browser-adaptive file in all contexts.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `LIGHT | DARK | DYNAMIC`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-managedloginbranding.html#cfn-cognito-managedloginbranding-assettype-colormode */
    "ColorMode": string | Intrinsic;
    /**
     * - The file type of the image file.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ICO | JPEG | PNG | SVG | WEBP`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-managedloginbranding.html#cfn-cognito-managedloginbranding-assettype-extension */
    "Extension": string | Intrinsic;
    /**
     * - The ID of the asset.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\w\- ]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `40`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-managedloginbranding.html#cfn-cognito-managedloginbranding-assettype-resourceid */
    "ResourceId"?: string | Intrinsic;
}

/**
 * Creates a new set of branding settings for a user pool style and associates it with an app client. This operation is the programmatic option for the creation of a new style in the branding designer.
 * Provides values for UI customization in a `Settings` JSON object and image files in an `Assets` array. To send the JSON object `Document` type parameter in `Settings`, you might need to update to the most recent version of your AWS SDK.
 * This operation has a 2-megabyte request-size limit and include the CSS settings and image assets for your app client. Your branding settings might exceed 2MB in size. Amazon Cognito doesn't require that you pass all parameters in one request and preserves existing style settings that you don't specify. If your request is larger than 2MB, separate it into multiple requests, each with a size smaller than the limit.
 * As a best practice, modify the output of [DescribeManagedLoginBrandingByClient](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeManagedLoginBrandingByClient.html) into the request parameters for this operation. To get all settings, set `ReturnMergedResources` to `true`. For more information, see [API and SDK operations for managed login branding](https://docs.aws.amazon.com/cognito/latest/developerguide/managed-login-brandingdesigner.html#branding-designer-api)
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-managedloginbranding.html */

export interface CognitoManagedLoginBranding extends ResourceAttributes {
    "Type": "AWS::Cognito::ManagedLoginBranding";
    "Properties": {
        /**
         * - An array of image files that you want to apply to roles like backgrounds, logos, and icons. Each object must also indicate whether it is for dark mode, light mode, or browser-adaptive mode.
         * - _Required_: No
         * - _Type_: Array of [AssetType](./aws-properties-cognito-managedloginbranding-assettype.html)
         * - _Minimum_: `0`
         * - _Maximum_: `40`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-managedloginbranding.html#cfn-cognito-managedloginbranding-assets */
        "Assets"?: AssetType[];
        /**
         * - The app client that you want to assign the branding style to. Each style is linked to an app client until you delete it.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-managedloginbranding.html#cfn-cognito-managedloginbranding-clientid */
        "ClientId"?: string | Intrinsic;
        /**
         * - When `true`, returns values for branding options that are unchanged from Amazon Cognito defaults. When `false` or when you omit this parameter, returns only values that you customized in your branding style.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-managedloginbranding.html#cfn-cognito-managedloginbranding-returnmergedresources */
        "ReturnMergedResources"?: boolean | Intrinsic;
        /**
         * - A JSON file, encoded as a `Document` type, with the the settings that you want to apply to your style.
         * - _Required_: No
         * - _Type_: Json
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-managedloginbranding.html#cfn-cognito-managedloginbranding-settings */
        "Settings"?: any | Intrinsic;
        /**
         * - When true, applies the default branding style options. This option reverts to default style options that are managed by Amazon Cognito. You can modify them later in the branding editor.
         * - When you specify `true` for this option, you must also omit values for `Settings` and `Assets` in the request.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-managedloginbranding.html#cfn-cognito-managedloginbranding-usecognitoprovidedvalues */
        "UseCognitoProvidedValues"?: boolean | Intrinsic;
        /**
         * - The user pool where the branding style is assigned.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[\w-]+_[0-9a-zA-Z]+`
         * - _Minimum_: `1`
         * - _Maximum_: `55`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-managedloginbranding.html#cfn-cognito-managedloginbranding-userpoolid */
        "UserPoolId": string | Intrinsic;
    };
}