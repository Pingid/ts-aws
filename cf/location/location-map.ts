import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Specifies the map tile style selected from an available provider.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-map.html */

export interface MapConfiguration {
    /**
     * - Specifies the custom layers for the style. Leave unset to not enable any custom layer, or, for styles that support custom layers, you can enable layer(s), such as the `POI` layer for the VectorEsriNavigation style.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `100 | 10`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-map.html#cfn-location-map-mapconfiguration-customlayers */
    "CustomLayers"?: (string | Intrinsic)[];
    /**
     * - Specifies the map political view selected from an available data provider.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[A-Z]{3}$`
     * - _Minimum_: `3`
     * - _Maximum_: `3`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-map.html#cfn-location-map-mapconfiguration-politicalview */
    "PoliticalView"?: string | Intrinsic;
    /**
     * - Specifies the map style selected from an available data provider.
     * - Valid [Esri map styles](https://docs.aws.amazon.com/location/previous/developerguide/esri.html):
     * - Valid [HERE Technologies map styles](https://docs.aws.amazon.com/location/previous/developerguide/HERE.html):
     * - Valid [GrabMaps map styles](https://docs.aws.amazon.com/location/previous/developerguide/grab.html):
     * - Valid [Open Data map styles](https://docs.aws.amazon.com/location/previous/developerguide/open-data.html):
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[-._\w]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-map.html#cfn-location-map-mapconfiguration-style */
    "Style": string | Intrinsic;
}

/**
 * Applies one or more tags to the map resource. A tag is a key-value pair helps manage, identify, search, and filter your resources by labelling them.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-map.html */

export interface Tag {
    /**
     * - The key of the tag that is associated with the specified map.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z+-=._:/]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-map.html#cfn-location-map-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The key of the value that is associated with the specified map.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[A-Za-z0-9 _=@:.+-/]*$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-map.html#cfn-location-map-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The `AWS::Location::Map` resource specifies a map resource in your AWS account, which provides map tiles of different styles sourced from global location data providers.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-map.html */

export interface LocationMap extends ResourceAttributes {
    "Type": "AWS::Location::Map";
    "Properties": {
        /**
         * - Specifies the `MapConfiguration`, including the map style, for the map resource that you create. The map style defines the look of maps and the data provider for your map resource.
         * - _Required_: Yes
         * - _Type_: [MapConfiguration](./aws-properties-location-map-mapconfiguration.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-map.html#cfn-location-map-configuration */
        "Configuration": MapConfiguration;
        /**
         * - An optional description for the map resource.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `0`
         * - _Maximum_: `1000`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-map.html#cfn-location-map-description */
        "Description"?: string | Intrinsic;
        /**
         * - The name for the map resource.
         * - Requirements:
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[-._\w]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `100`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-map.html#cfn-location-map-mapname */
        "MapName": string | Intrinsic;
        /**
         * - No longer used. If included, the only allowed value is `RequestBasedUsage`.
         * - _Allowed Values_: `RequestBasedUsage`
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `RequestBasedUsage`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-map.html#cfn-location-map-pricingplan */
        "PricingPlan"?: string | Intrinsic;
        /**
         * - Applies one or more tags to the map resource. A tag is a key-value pair helps manage, identify, search, and filter your resources by labelling them.
         * - Format: `"key" : "value"`
         * - Restrictions:
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-location-map-tag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-map.html#cfn-location-map-tags */
        "Tags"?: Tag[];
    };
}