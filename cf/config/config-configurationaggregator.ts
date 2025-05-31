import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A collection of accounts and regions.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationaggregator.html */

export interface AccountAggregationSource {
    /**
     * - The 12-digit account ID of the account being aggregated.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationaggregator.html#cfn-config-configurationaggregator-accountaggregationsource-accountids */
    "AccountIds": (string | Intrinsic)[];
    /**
     * - If true, aggregate existing AWS Config regions and future regions.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationaggregator.html#cfn-config-configurationaggregator-accountaggregationsource-allawsregions */
    "AllAwsRegions"?: boolean | Intrinsic;
    /**
     * - The source regions being aggregated.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationaggregator.html#cfn-config-configurationaggregator-accountaggregationsource-awsregions */
    "AwsRegions"?: (string | Intrinsic)[];
}

/**
 * This object contains regions to set up the aggregator and an IAM role to retrieve organization details.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationaggregator.html */

export interface OrganizationAggregationSource {
    /**
     * - If true, aggregate existing AWS Config regions and future regions.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationaggregator.html#cfn-config-configurationaggregator-organizationaggregationsource-allawsregions */
    "AllAwsRegions"?: boolean | Intrinsic;
    /**
     * - The source regions being aggregated.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationaggregator.html#cfn-config-configurationaggregator-organizationaggregationsource-awsregions */
    "AwsRegions"?: (string | Intrinsic)[];
    /**
     * - ARN of the IAM role used to retrieve AWS Organizations details associated with the aggregator account.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationaggregator.html#cfn-config-configurationaggregator-organizationaggregationsource-rolearn */
    "RoleArn": string | Intrinsic;
}

/**
 * The tags for the resource. The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationaggregator.html */

export interface Tag {
    /**
     * - One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationaggregator.html#cfn-config-configurationaggregator-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationaggregator.html#cfn-config-configurationaggregator-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The details about the configuration aggregator, including information about source accounts, regions, and metadata of the aggregator.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationaggregator.html */

export interface ConfigConfigurationAggregator extends ResourceAttributes {
    "Type": "AWS::Config::ConfigurationAggregator";
    "Properties": {
        /**
         * - Provides a list of source accounts and regions to be aggregated.
         * - _Required_: No
         * - _Type_: Array of [AccountAggregationSource](./aws-properties-config-configurationaggregator-accountaggregationsource.html)
         * - _Minimum_: `0`
         * - _Maximum_: `1`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationaggregator.html#cfn-config-configurationaggregator-accountaggregationsources */
        "AccountAggregationSources"?: AccountAggregationSource[];
        /**
         * - The name of the aggregator.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[\w\-]+`
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationaggregator.html#cfn-config-configurationaggregator-configurationaggregatorname */
        "ConfigurationAggregatorName"?: string | Intrinsic;
        /**
         * - Provides an organization and list of regions to be aggregated.
         * - _Required_: No
         * - _Type_: [OrganizationAggregationSource](./aws-properties-config-configurationaggregator-organizationaggregationsource.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationaggregator.html#cfn-config-configurationaggregator-organizationaggregationsource */
        "OrganizationAggregationSource"?: OrganizationAggregationSource;
        /**
         * - An array of tag object.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-config-configurationaggregator-tag.html)
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationaggregator.html#cfn-config-configurationaggregator-tags */
        "Tags"?: Tag[];
    };
}