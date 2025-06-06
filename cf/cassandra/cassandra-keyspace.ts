import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * You can use `ReplicationSpecification` to configure the `ReplicationStrategy` of a keyspace in Amazon Keyspaces.
 * The `ReplicationSpecification` property applies automatically to all tables in the keyspace.
 * To review the permissions that are required to add a new Region to a single-Region keyspace, see [Configure the IAM permissions required to add an AWS Region to a keyspace](https://docs.aws.amazon.com/keyspaces/latest/devguide/howitworks_replication_permissions_addReplica.html) in the _Amazon Keyspaces Developer Guide_.
 * For more information about multi-Region replication, see [Multi-Region replication](https://docs.aws.amazon.com/keyspaces/latest/devguide/multiRegion-replication.html) in the _Amazon Keyspaces Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-keyspace.html */

export interface ReplicationSpecification {
    /**
     * - Specifies the AWS Regions that the keyspace is replicated in. You must specify at least two Regions, including the Region that the keyspace is being created in.
     * - To specify a Region [that's disabled by default](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-regions.html#rande-manage-enable), you must first enable the Region. For more information, see [Multi-Region replication in AWS Regions disabled by default](https://docs.aws.amazon.com/keyspaces/latest/devguide/multiRegion-replication_how-it-works.html#howitworks_mrr_opt_in) in the _Amazon Keyspaces Developer Guide_.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Allowed values_: `af-south-1 | ap-northeast-1 | ap-northeast-2 | ap-south-1 | ap-southeast-1 | ap-southeast-2 | ca-central-1 | eu-central-1 | eu-north-1 | eu-west-1 | eu-west-2 | eu-west-3 | sa-east-1 | us-east-1 | us-east-2 | us-west-1 | us-west-2`
     * - _Minimum_: `2`
     * - _Maximum_: `17`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-keyspace.html#cfn-cassandra-keyspace-replicationspecification-regionlist */
    "RegionList"?: (string | Intrinsic)[];
    /**
     * - The options are:
     * - If no value is specified, the default is `SINGLE_REGION`. If `MULTI_REGION` is specified, `RegionList` is required.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `SINGLE_REGION | MULTI_REGION`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-keyspace.html#cfn-cassandra-keyspace-replicationspecification-replicationstrategy */
    "ReplicationStrategy"?: string | Intrinsic;
}

/**
 * Describes a tag. A tag is a key-value pair. You can add up to 50 tags to a single Amazon Keyspaces resource.
 * AWS-assigned tag names and values are automatically assigned the `aws:` prefix, which the user cannot assign. AWS-assigned tag names do not count towards the tag limit of 50. User-assigned tag names have the prefix `user:` in the Cost Allocation Report. You cannot backdate the application of a tag.
 * For more information, see [Adding tags and labels to Amazon Keyspaces resources](https://docs.aws.amazon.com/keyspaces/latest/devguide/tagging-keyspaces.html) in the _Amazon Keyspaces Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-keyspace.html */

export interface Tag {
    /**
     * - The key of the tag. Tag keys are case sensitive. Each Amazon Keyspaces resource can only have up to one tag with the same key. If you try to add an existing tag (same key), the existing tag value will be updated to the new value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-keyspace.html#cfn-cassandra-keyspace-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value of the tag. Tag values are case-sensitive and can be null.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-keyspace.html#cfn-cassandra-keyspace-tag-value */
    "Value": string | Intrinsic;
}

/**
 * You can use the `AWS::Cassandra::Keyspace` resource to create a new keyspace in Amazon Keyspaces (for Apache Cassandra). For more information, see [Create a keyspace](https://docs.aws.amazon.com/keyspaces/latest/devguide/getting-started.keyspaces.html) in the _Amazon Keyspaces Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-keyspace.html */

export interface CassandraKeyspace extends ResourceAttributes {
    "Type": "AWS::Cassandra::Keyspace";
    "Properties": {
        /**
         * - Indicates whether client-side timestamps are enabled (true) or disabled (false) for all tables in the keyspace. To add a Region to a single-Region keyspace with at least one table, the value must be set to true. After you've enabled client-side timestamps for a table, you can’t disable it again.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-keyspace.html#cfn-cassandra-keyspace-clientsidetimestampsenabled */
        "ClientSideTimestampsEnabled"?: boolean | Intrinsic;
        /**
         * - The name of the keyspace to be created. The keyspace name is case sensitive. If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the keyspace name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
         * - _Length constraints:_ Minimum length of 1. Maximum length of 48.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9_]{1,47}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-keyspace.html#cfn-cassandra-keyspace-keyspacename */
        "KeyspaceName"?: string | Intrinsic;
        /**
         * - Specifies the `ReplicationStrategy` of a keyspace. The options are:
         * - If no `ReplicationStrategy` is provided, the default is `SINGLE_REGION`. If you choose `MULTI_REGION`, you must also provide a `RegionList` with the AWS Regions that the keyspace is replicated in.
         * - _Required_: No
         * - _Type_: [ReplicationSpecification](./aws-properties-cassandra-keyspace-replicationspecification.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-keyspace.html#cfn-cassandra-keyspace-replicationspecification */
        "ReplicationSpecification"?: ReplicationSpecification;
        /**
         * - An array of key-value pairs to apply to this resource.
         * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-cassandra-keyspace-tag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-keyspace.html#cfn-cassandra-keyspace-tags */
        "Tags"?: Tag[];
    };
}