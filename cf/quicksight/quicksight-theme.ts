import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Permission for the resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html */

export interface ResourcePermission {
    /**
     * - The IAM action to grant or revoke permissions on.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `20`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-resourcepermission-actions */
    "Actions": (string | Intrinsic)[];
    /**
     * - The Amazon Resource Name (ARN) of the principal. This can be one of the following:
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-resourcepermission-principal */
    "Principal": string | Intrinsic;
}

/**
 * The `Tag` property type specifies Property description not available. for an [AWS::QuickSight::Theme](./aws-resource-quicksight-theme.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html */

export interface Tag {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-tag-key */
    "Key": string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The theme colors that are used for data colors in charts. The colors description is a hexadecimal color code that consists of six alphanumerical characters, prefixed with `#`, for example #37BFF5.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html */

export interface DataColorPalette {
    /**
     * - The hexadecimal codes for the colors.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `0`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-datacolorpalette-colors */
    "Colors"?: (string | Intrinsic)[];
    /**
     * - The hexadecimal code of a color that applies to charts where a lack of data is highlighted.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^#[A-F0-9]{6}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-datacolorpalette-emptyfillcolor */
    "EmptyFillColor"?: string | Intrinsic;
    /**
     * - The minimum and maximum hexadecimal codes that describe a color gradient.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `0`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-datacolorpalette-minmaxgradient */
    "MinMaxGradient"?: (string | Intrinsic)[];
}

/**
 * The theme colors that apply to UI and to charts, excluding data colors. The colors description is a hexadecimal color code that consists of six alphanumerical characters, prefixed with `#`, for example #37BFF5. For more information, see [Using Themes in Amazon QuickSight](https://docs.aws.amazon.com/quicksight/latest/user/themes-in-quicksight.html) in the _Amazon QuickSight User Guide._
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html */

export interface UIColorPalette {
    /**
     * - This color is that applies to selected states and buttons.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^#[A-F0-9]{6}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-uicolorpalette-accent */
    "Accent"?: string | Intrinsic;
    /**
     * - The foreground color that applies to any text or other elements that appear over the accent color.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^#[A-F0-9]{6}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-uicolorpalette-accentforeground */
    "AccentForeground"?: string | Intrinsic;
    /**
     * - The color that applies to error messages.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^#[A-F0-9]{6}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-uicolorpalette-danger */
    "Danger"?: string | Intrinsic;
    /**
     * - The foreground color that applies to any text or other elements that appear over the error color.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^#[A-F0-9]{6}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-uicolorpalette-dangerforeground */
    "DangerForeground"?: string | Intrinsic;
    /**
     * - The color that applies to the names of fields that are identified as dimensions.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^#[A-F0-9]{6}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-uicolorpalette-dimension */
    "Dimension"?: string | Intrinsic;
    /**
     * - The foreground color that applies to any text or other elements that appear over the dimension color.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^#[A-F0-9]{6}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-uicolorpalette-dimensionforeground */
    "DimensionForeground"?: string | Intrinsic;
    /**
     * - The color that applies to the names of fields that are identified as measures.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^#[A-F0-9]{6}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-uicolorpalette-measure */
    "Measure"?: string | Intrinsic;
    /**
     * - The foreground color that applies to any text or other elements that appear over the measure color.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^#[A-F0-9]{6}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-uicolorpalette-measureforeground */
    "MeasureForeground"?: string | Intrinsic;
    /**
     * - The background color that applies to visuals and other high emphasis UI.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^#[A-F0-9]{6}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-uicolorpalette-primarybackground */
    "PrimaryBackground"?: string | Intrinsic;
    /**
     * - The color of text and other foreground elements that appear over the primary background regions, such as grid lines, borders, table banding, icons, and so on.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^#[A-F0-9]{6}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-uicolorpalette-primaryforeground */
    "PrimaryForeground"?: string | Intrinsic;
    /**
     * - The background color that applies to the sheet background and sheet controls.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^#[A-F0-9]{6}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-uicolorpalette-secondarybackground */
    "SecondaryBackground"?: string | Intrinsic;
    /**
     * - The foreground color that applies to any sheet title, sheet control text, or UI that appears over the secondary background.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^#[A-F0-9]{6}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-uicolorpalette-secondaryforeground */
    "SecondaryForeground"?: string | Intrinsic;
    /**
     * - The color that applies to success messages, for example the check mark for a successful download.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^#[A-F0-9]{6}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-uicolorpalette-success */
    "Success"?: string | Intrinsic;
    /**
     * - The foreground color that applies to any text or other elements that appear over the success color.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^#[A-F0-9]{6}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-uicolorpalette-successforeground */
    "SuccessForeground"?: string | Intrinsic;
    /**
     * - This color that applies to warning and informational messages.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^#[A-F0-9]{6}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-uicolorpalette-warning */
    "Warning"?: string | Intrinsic;
    /**
     * - The foreground color that applies to any text or other elements that appear over the warning color.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^#[A-F0-9]{6}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-uicolorpalette-warningforeground */
    "WarningForeground"?: string | Intrinsic;
}

/**
 * Determines the font settings.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html */

export interface Font {
    /**
     * - Determines the font family settings.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-font-fontfamily */
    "FontFamily"?: string | Intrinsic;
}

/**
 * Determines the typography options.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html */

export interface Typography {
    /**
     * - Determines the list of font families.
     * - _Required_: No
     * - _Type_: Array of [Font](./aws-properties-quicksight-theme-font.html)
     * - _Minimum_: `0`
     * - _Maximum_: `5`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-typography-fontfamilies */
    "FontFamilies"?: Font[];
}

/**
 * The display options for tile borders for visuals.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html */

export interface BorderStyle {
    /**
     * - The option to enable display of borders for visuals.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-borderstyle-show */
    "Show"?: boolean | Intrinsic;
}

/**
 * Display options related to tiles on a sheet.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html */

export interface TileStyle {
    /**
     * - The border around a tile.
     * - _Required_: No
     * - _Type_: [BorderStyle](./aws-properties-quicksight-theme-borderstyle.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-tilestyle-border */
    "Border"?: BorderStyle;
}

/**
 * The display options for gutter spacing between tiles on a sheet.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html */

export interface GutterStyle {
    /**
     * - This Boolean value controls whether to display a gutter space between sheet tiles.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-gutterstyle-show */
    "Show"?: boolean | Intrinsic;
}

/**
 * The display options for margins around the outside edge of sheets.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html */

export interface MarginStyle {
    /**
     * - This Boolean value controls whether to display sheet margins.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-marginstyle-show */
    "Show"?: boolean | Intrinsic;
}

/**
 * The display options for the layout of tiles on a sheet.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html */

export interface TileLayoutStyle {
    /**
     * - The gutter settings that apply between tiles.
     * - _Required_: No
     * - _Type_: [GutterStyle](./aws-properties-quicksight-theme-gutterstyle.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-tilelayoutstyle-gutter */
    "Gutter"?: GutterStyle;
    /**
     * - The margin settings that apply around the outside edge of sheets.
     * - _Required_: No
     * - _Type_: [MarginStyle](./aws-properties-quicksight-theme-marginstyle.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-tilelayoutstyle-margin */
    "Margin"?: MarginStyle;
}

/**
 * The theme display options for sheets.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html */

export interface SheetStyle {
    /**
     * - The display options for tiles.
     * - _Required_: No
     * - _Type_: [TileStyle](./aws-properties-quicksight-theme-tilestyle.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-sheetstyle-tile */
    "Tile"?: TileStyle;
    /**
     * - The layout options for tiles.
     * - _Required_: No
     * - _Type_: [TileLayoutStyle](./aws-properties-quicksight-theme-tilelayoutstyle.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-sheetstyle-tilelayout */
    "TileLayout"?: TileLayoutStyle;
}

/**
 * The theme configuration. This configuration contains all of the display properties for a theme.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html */

export interface ThemeConfiguration {
    /**
     * - Color properties that apply to chart data colors.
     * - _Required_: No
     * - _Type_: [DataColorPalette](./aws-properties-quicksight-theme-datacolorpalette.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-themeconfiguration-datacolorpalette */
    "DataColorPalette"?: DataColorPalette;
    /**
     * - Display options related to sheets.
     * - _Required_: No
     * - _Type_: [SheetStyle](./aws-properties-quicksight-theme-sheetstyle.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-themeconfiguration-sheet */
    "Sheet"?: SheetStyle;
    /**
     * - Determines the typography options.
     * - _Required_: No
     * - _Type_: [Typography](./aws-properties-quicksight-theme-typography.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-themeconfiguration-typography */
    "Typography"?: Typography;
    /**
     * - Color properties that apply to the UI and to charts, excluding the colors that apply to data.
     * - _Required_: No
     * - _Type_: [UIColorPalette](./aws-properties-quicksight-theme-uicolorpalette.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-themeconfiguration-uicolorpalette */
    "UIColorPalette"?: UIColorPalette;
}

/**
 * Creates a theme.
 * A _theme_ is set of configuration options for color and layout. Themes apply to analyses and dashboards. For more information, see [Using Themes in Amazon QuickSight](https://docs.aws.amazon.com/quicksight/latest/user/themes-in-quicksight.html) in the _Amazon QuickSight User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html */

export interface QuickSightTheme extends ResourceAttributes {
    "Type": "AWS::QuickSight::Theme";
    "Properties": {
        /**
         * - The ID of the AWS account where you want to store the new theme.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[0-9]{12}$`
         * - _Minimum_: `12`
         * - _Maximum_: `12`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-awsaccountid */
        "AwsAccountId": string | Intrinsic;
        /**
         * - The ID of the theme that a custom theme will inherit from. All themes inherit from one of the starting themes defined by Amazon QuickSight. For a list of the starting themes, use `ListThemes` or choose **Themes** from within an analysis.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[\w\-]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `512`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-basethemeid */
        "BaseThemeId": string | Intrinsic;
        /**
         * - The theme configuration, which contains the theme display properties.
         * - _Required_: Yes
         * - _Type_: [ThemeConfiguration](./aws-properties-quicksight-theme-themeconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-configuration */
        "Configuration": ThemeConfiguration;
        /**
         * - A display name for the theme.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `2048`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-name */
        "Name": string | Intrinsic;
        /**
         * - A valid grouping of resource permissions to apply to the new theme.
         * - _Required_: No
         * - _Type_: Array of [ResourcePermission](./aws-properties-quicksight-theme-resourcepermission.html)
         * - _Minimum_: `1`
         * - _Maximum_: `64`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-permissions */
        "Permissions"?: ResourcePermission[];
        /**
         * - A map of the key-value pairs for the resource tag or tags that you want to add to the resource.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-quicksight-theme-tag.html)
         * - _Minimum_: `1`
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-tags */
        "Tags"?: Tag[];
        /**
         * - An ID for the theme that you want to create. The theme ID is unique per AWS Region in each AWS account.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[\w\-]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `512`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-themeid */
        "ThemeId": string | Intrinsic;
        /**
         * - A description of the first version of the theme that you're creating. Every time `UpdateTheme` is called, a new version is created. Each version of the theme has a description of the version in the `VersionDescription` field.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `512`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-theme.html#cfn-quicksight-theme-versiondescription */
        "VersionDescription"?: string | Intrinsic;
    };
}