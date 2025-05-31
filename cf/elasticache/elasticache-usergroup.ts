import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A tag that can be added to an ElastiCache cluster or replication group. Tags are composed of a Key/Value pair. You can use tags to categorize and track all your ElastiCache resources, with the exception of global replication group. When you add or remove tags on replication groups, those actions will be replicated to all nodes in the replication group. A tag with a null Value is permitted.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-usergroup.html */

export interface Tag {
    /**
     * - The key for the tag. May not be null.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?!aws:)[a-zA-Z0-9 _\.\/=+:\-@]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-usergroup.html#cfn-elasticache-usergroup-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The tag's value. May be null.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9 _\.\/=+:\-@]*$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-usergroup.html#cfn-elasticache-usergroup-tag-value */
    "Value"?: string | Intrinsic;
}

/**
 * For Valkey 7.2 and onwards, or Redis OSS 6.0 and onwards: Creates a user group. For more information, see [Using Role Based Access Control (RBAC)](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/Clusters.RBAC.html)
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-usergroup.html */

export interface ElastiCacheUserGroup extends ResourceAttributes {
    "Type": "AWS::ElastiCache::UserGroup";
    "Properties": {
        /**
         * - The current supported values are valkey and redis.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `redis | valkey`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-usergroup.html#cfn-elasticache-usergroup-engine */
        "Engine": string | Intrinsic;
        /**
         * - The list of tags.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-elasticache-usergroup-tag.html)
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-usergroup.html#cfn-elasticache-usergroup-tags */
        "Tags"?: Tag[];
        /**
         * - The ID of the user group.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[a-z][a-z0-9\\-]*`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-usergroup.html#cfn-elasticache-usergroup-usergroupid */
        "UserGroupId": string | Intrinsic;
        /**
         * - The list of user IDs that belong to the user group. A user named `default` must be included.
         * - _Required_: Yes
         * - _Type_: Array of String
         * - _Minimum_: `1`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-usergroup.html#cfn-elasticache-usergroup-userids */
        "UserIds": (string | Intrinsic)[];
    };
}