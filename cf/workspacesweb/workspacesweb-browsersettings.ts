import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The tag.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-browsersettings.html */

export interface Tag {
    /**
     * - The key of the tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-browsersettings.html#cfn-workspacesweb-browsersettings-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value of the tag
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-browsersettings.html#cfn-workspacesweb-browsersettings-tag-value */
    "Value": string | Intrinsic;
}

/**
 * This resource specifies browser settings that can be associated with a web portal. Once associated with a web portal, browser settings control how the browser will behave once a user starts a streaming session for the web portal.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-browsersettings.html */

export interface WorkSpacesWebBrowserSettings extends ResourceAttributes {
    "Type": "AWS::WorkSpacesWeb::BrowserSettings";
    "Properties": {
        /**
         * - Additional encryption context of the browser settings.
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `^[\s\S]*$`
         * - _Minimum_: `0`
         * - _Maximum_: `131072`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-browsersettings.html#cfn-workspacesweb-browsersettings-additionalencryptioncontext */
        "AdditionalEncryptionContext"?: Record<string, string | Intrinsic>;
        /**
         * - A JSON string containing Chrome Enterprise policies that will be applied to all streaming sessions.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `\{[\S\s]*\}\s*`
         * - _Minimum_: `2`
         * - _Maximum_: `131072`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-browsersettings.html#cfn-workspacesweb-browsersettings-browserpolicy */
        "BrowserPolicy"?: string | Intrinsic;
        /**
         * - The custom managed key of the browser settings.
         * - _Pattern_: `^arn:[\w+=\/,.@-]+:kms:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:key\/[a-zA-Z0-9-]+$`
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^arn:[\w+=\/,.@-]+:kms:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:key\/[a-zA-Z0-9-]+$`
         * - _Minimum_: `20`
         * - _Maximum_: `2048`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-browsersettings.html#cfn-workspacesweb-browsersettings-customermanagedkey */
        "CustomerManagedKey"?: string | Intrinsic;
        /**
         * - The tags to add to the browser settings resource. A tag is a key-value pair.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-workspacesweb-browsersettings-tag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-browsersettings.html#cfn-workspacesweb-browsersettings-tags */
        "Tags"?: Tag[];
    };
}