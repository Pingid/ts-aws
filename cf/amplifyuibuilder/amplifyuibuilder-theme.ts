import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `ThemeValue` property specifies the configuration of a theme's properties.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-theme.html */

export interface ThemeValue {
    /**
     * - A list of key-value pairs that define the theme's properties.
     * - _Required_: No
     * - _Type_: Array of [ThemeValues](./aws-properties-amplifyuibuilder-theme-themevalues.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-theme.html#cfn-amplifyuibuilder-theme-themevalue-children */
    "Children"?: ThemeValues[];
    /**
     * - The value of a theme property.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-theme.html#cfn-amplifyuibuilder-theme-themevalue-value */
    "Value"?: string | Intrinsic;
}

/**
 * The `ThemeValues` property specifies key-value pair that defines a property of a theme.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-theme.html */

export interface ThemeValues {
    /**
     * - The name of the property.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-theme.html#cfn-amplifyuibuilder-theme-themevalues-key */
    "Key"?: string | Intrinsic;
    /**
     * - The value of the property.
     * - _Required_: No
     * - _Type_: [ThemeValue](./aws-properties-amplifyuibuilder-theme-themevalue.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-theme.html#cfn-amplifyuibuilder-theme-themevalues-value */
    "Value"?: ThemeValue;
}

/**
 * The AWS::AmplifyUIBuilder::Theme resource specifies a theme within an Amplify app. A theme is a collection of style settings that apply globally to the components associated with the app.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-theme.html */

export interface AmplifyUIBuilderTheme extends ResourceAttributes {
    "Type": "AWS::AmplifyUIBuilder::Theme";
    "Properties": {
        /**
         * - The unique ID for the Amplify app associated with the theme.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-theme.html#cfn-amplifyuibuilder-theme-appid */
        "AppId"?: string | Intrinsic;
        /**
         * - The name of the backend environment that is a part of the Amplify app.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-theme.html#cfn-amplifyuibuilder-theme-environmentname */
        "EnvironmentName"?: string | Intrinsic;
        /**
         * - The name of the theme.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-theme.html#cfn-amplifyuibuilder-theme-name */
        "Name"?: string | Intrinsic;
        /**
         * - Describes the properties that can be overriden to customize a theme.
         * - _Required_: No
         * - _Type_: Array of [ThemeValues](./aws-properties-amplifyuibuilder-theme-themevalues.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-theme.html#cfn-amplifyuibuilder-theme-overrides */
        "Overrides"?: ThemeValues[];
        /**
         * - One or more key-value pairs to use when tagging the theme.
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `^(?!aws:)[a-zA-Z+-=._:/]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-theme.html#cfn-amplifyuibuilder-theme-tags */
        "Tags"?: Record<string, string | Intrinsic>;
        /**
         * - A list of key-value pairs that defines the properties of the theme.
         * - _Required_: No
         * - _Type_: Array of [ThemeValues](./aws-properties-amplifyuibuilder-theme-themevalues.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplifyuibuilder-theme.html#cfn-amplifyuibuilder-theme-values */
        "Values"?: ThemeValues[];
    };
}