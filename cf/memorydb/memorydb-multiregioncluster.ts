import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A tag that can be added to an MemoryDB resource. Tags are composed of a Key/Value pair. You can use tags to categorize and track all your MemoryDB resources. When you add or remove tags on clusters, those actions will be replicated to all nodes in the cluster. A tag with a null Value is permitted. For more information, see [Tagging your MemoryDB resources](https://docs.aws.amazon.com/MemoryDB/latest/devguide/tagging-resources.html)
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-multiregioncluster.html */

export interface Tag {
    /**
     * - The key for the tag. May not be null.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?!aws:)(?!memorydb:)[a-zA-Z0-9 _\.\/=+:\-@]{1,128}$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-multiregioncluster.html#cfn-memorydb-multiregioncluster-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The tag's value. May be null.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?!aws:)(?!memorydb:)[a-zA-Z0-9 _\.\/=+:\-@]{1,256}$`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-multiregioncluster.html#cfn-memorydb-multiregioncluster-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Represents a multi-Region cluster.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-multiregioncluster.html */

export interface MemoryDBMultiRegionCluster extends ResourceAttributes {
    "Type": "AWS::MemoryDB::MultiRegionCluster";
    "Properties": {
        /**
         * - The description of the multi-Region cluster.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-multiregioncluster.html#cfn-memorydb-multiregioncluster-description */
        "Description"?: string | Intrinsic;
        /**
         * - The name of the engine used by the multi-Region cluster.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-multiregioncluster.html#cfn-memorydb-multiregioncluster-engine */
        "Engine"?: string | Intrinsic;
        /**
         * - The version of the engine used by the multi-Region cluster.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-multiregioncluster.html#cfn-memorydb-multiregioncluster-engineversion */
        "EngineVersion"?: string | Intrinsic;
        /**
         * - A suffix to be added to the Multi-Region cluster name. Amazon MemoryDB automatically applies a prefix to the Multi-Region cluster Name when it is created. Each Amazon Region has its own prefix. For instance, a Multi-Region cluster Name created in the US-West-1 region will begin with "virxk", along with the suffix name you provide. The suffix guarantees uniqueness of the Multi-Region cluster name across multiple regions.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[a-z][a-z0-9\-]*`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-multiregioncluster.html#cfn-memorydb-multiregioncluster-multiregionclusternamesuffix */
        "MultiRegionClusterNameSuffix"?: string | Intrinsic;
        /**
         * - The name of the multi-Region parameter group associated with the cluster.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-multiregioncluster.html#cfn-memorydb-multiregioncluster-multiregionparametergroupname */
        "MultiRegionParameterGroupName"?: string | Intrinsic;
        /**
         * - The node type used by the multi-Region cluster.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-multiregioncluster.html#cfn-memorydb-multiregioncluster-nodetype */
        "NodeType": string | Intrinsic;
        /**
         * - The number of shards in the multi-Region cluster.
         * - _Required_: No
         * - _Type_: Integer
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-multiregioncluster.html#cfn-memorydb-multiregioncluster-numshards */
        "NumShards"?: number | Intrinsic;
        /**
         * - A list of tags to be applied to the multi-Region cluster.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-memorydb-multiregioncluster-tag.html)
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-multiregioncluster.html#cfn-memorydb-multiregioncluster-tags */
        "Tags"?: Tag[];
        /**
         * - Indiciates if the multi-Region cluster is TLS enabled.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-multiregioncluster.html#cfn-memorydb-multiregioncluster-tlsenabled */
        "TLSEnabled"?: boolean | Intrinsic;
        /**
         * - The strategy to use for the update operation. Supported values are "coordinated" or "uncoordinated".
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `COORDINATED | UNCOORDINATED`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-multiregioncluster.html#cfn-memorydb-multiregioncluster-updatestrategy */
        "UpdateStrategy"?: string | Intrinsic;
    };
}