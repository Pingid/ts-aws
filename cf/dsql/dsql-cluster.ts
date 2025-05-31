import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Defines a tag for a DSQL cluster.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dsql-cluster.html */

export interface Tag {
    /**
     * - Unique tag key, maximum 128 Unicode characters in UTF-8.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dsql-cluster.html#cfn-dsql-cluster-tag-key */
    "Key": string | Intrinsic;
    /**
     * - Tag value, maximum 256 Unicode characters in UTF-8.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dsql-cluster.html#cfn-dsql-cluster-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The CreateCluster API allows you to create both single-region clusters and multi-Region clusters. With the addition of the _multiRegionProperties_ parameter, you can create a cluster with witness Region support and establish peer relationships with clusters in other Regions during creation.
 * ###### Note
 * 
 * Creating multi-Region clusters requires additional IAM permissions beyond those needed for single-Region clusters, as detailed in the **Required permissions** section below.
 * **Required permissions**
 * dsql:CreateCluster
 * 
 * Required to create a cluster.
 * 
 * Resources: `arn:aws:dsql:region:account-id:cluster/*`
 * 
 * dsql:TagResource
 * 
 * Permission to add tags to a resource.
 * 
 * Resources: `arn:aws:dsql:region:account-id:cluster/*`
 * 
 * dsql:PutMultiRegionProperties
 * 
 * Permission to configure multi-region properties for a cluster.
 * 
 * Resources: `arn:aws:dsql:region:account-id:cluster/*`
 * 
 * dsql:AddPeerCluster
 * 
 * When specifying `multiRegionProperties.clusters`, permission to add peer clusters.
 * 
 * Resources:
 * 
 * *   Local cluster: `arn:aws:dsql:region:account-id:cluster/*`
 *     
 * *   Each peer cluster: exact ARN of each specified peer cluster
 *     
 * 
 * dsql:PutWitnessRegion
 * 
 * When specifying `multiRegionProperties.witnessRegion`, permission to set a witness Region. This permission is checked both in the cluster Region and in the witness Region.
 * 
 * Resources: `arn:aws:dsql:region:account-id:cluster/*`
 * 
 * Condition Keys: `dsql:WitnessRegion` (matching the specified witness region)
 * ###### Important
 * 
 * *   The witness Region specified in `multiRegionProperties.witnessRegion` cannot be the same as the cluster's Region.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dsql-cluster.html */

export interface DSQLCluster extends ResourceAttributes {
    "Type": "AWS::DSQL::Cluster";
    "Properties": {
        /**
         * - Whether deletion protection is enabled on this cluster.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dsql-cluster.html#cfn-dsql-cluster-deletionprotectionenabled */
        "DeletionProtectionEnabled"?: boolean | Intrinsic;
        /**
         * - A map of key and value pairs this cluster is tagged with.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-dsql-cluster-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dsql-cluster.html#cfn-dsql-cluster-tags */
        "Tags"?: Tag[];
    };
}