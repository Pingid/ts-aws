import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `AWS::SecurityHub::FindingAggregator` resource enables cross-Region aggregation. When cross-Region aggregation is enabled, you can aggregate findings, finding updates, insights, control compliance statuses, and security scores from one or more linked Regions to a single aggregation Region. You can then view and manage all of this data from the aggregation Region. For more details about cross-Region aggregation, see [Cross-Region aggregation](https://docs.aws.amazon.com/securityhub/latest/userguide/finding-aggregation.html) in the _AWS Security Hub User Guide_
 * This resource must be created in the Region that you want to designate as your aggregation Region.
 * Cross-Region aggregation is also a prerequisite for using [central configuration](https://docs.aws.amazon.com/securityhub/latest/userguide/central-configuration-intro.html) in Security Hub.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-findingaggregator.html */

export interface SecurityHubFindingAggregator extends ResourceAttributes {
    "Type": "AWS::SecurityHub::FindingAggregator";
    "Properties": {
        /**
         * - Indicates whether to aggregate findings from all of the available Regions in the current partition. Also determines whether to automatically aggregate findings from new Regions as Security Hub supports them and you opt into them.
         * - The selected option also determines how to use the Regions provided in the Regions list.
         * - In AWS CloudFormation, the options for this property are as follows:
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `ALL_REGIONS | ALL_REGIONS_EXCEPT_SPECIFIED | SPECIFIED_REGIONS`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-findingaggregator.html#cfn-securityhub-findingaggregator-regionlinkingmode */
        "RegionLinkingMode": string | Intrinsic;
        /**
         * - If `RegionLinkingMode` is `ALL_REGIONS_EXCEPT_SPECIFIED`, then this is a space-separated list of Regions that do not aggregate findings to the aggregation Region.
         * - If `RegionLinkingMode` is `SPECIFIED_REGIONS`, then this is a space-separated list of Regions that do aggregate findings to the aggregation Region.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Minimum_: `1`
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-findingaggregator.html#cfn-securityhub-findingaggregator-regions */
        "Regions"?: (string | Intrinsic)[];
    };
}