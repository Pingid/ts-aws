import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * An array of objects representing the destination for a replication rule.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-replicationconfiguration.html */

export interface ReplicationDestination {
    /**
     * - The Region to replicate to.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[0-9a-z-]{2,25}`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-replicationconfiguration.html#cfn-ecr-replicationconfiguration-replicationdestination-region */
    "Region": string | Intrinsic;
    /**
     * - The AWS account ID of the Amazon ECR private registry to replicate to. When configuring cross-Region replication within your own registry, specify your own account ID.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[0-9]{12}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-replicationconfiguration.html#cfn-ecr-replicationconfiguration-replicationdestination-registryid */
    "RegistryId": string | Intrinsic;
}

/**
 * The filter settings used with image replication. Specifying a repository filter to a replication rule provides a method for controlling which repositories in a private registry are replicated. If no filters are added, the contents of all repositories are replicated.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-replicationconfiguration.html */

export interface RepositoryFilter {
    /**
     * - The repository filter details. When the `PREFIX_MATCH` filter type is specified, this value is required and should be the repository name prefix to configure replication for.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?:[a-z0-9]+(?:[._-][a-z0-9]*)*)*[a-z0-9]*(?:[._-][a-z0-9]*)*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-replicationconfiguration.html#cfn-ecr-replicationconfiguration-repositoryfilter-filter */
    "Filter": string | Intrinsic;
    /**
     * - The repository filter type. The only supported value is `PREFIX_MATCH`, which is a repository name prefix specified with the `filter` parameter.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `PREFIX_MATCH`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-replicationconfiguration.html#cfn-ecr-replicationconfiguration-repositoryfilter-filtertype */
    "FilterType": string | Intrinsic;
}

/**
 * An array of objects representing the replication destinations and repository filters for a replication configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-replicationconfiguration.html */

export interface ReplicationRule {
    /**
     * - An array of objects representing the destination for a replication rule.
     * - _Required_: Yes
     * - _Type_: Array of [ReplicationDestination](./aws-properties-ecr-replicationconfiguration-replicationdestination.html)
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-replicationconfiguration.html#cfn-ecr-replicationconfiguration-replicationrule-destinations */
    "Destinations": ReplicationDestination[];
    /**
     * - An array of objects representing the filters for a replication rule. Specifying a repository filter for a replication rule provides a method for controlling which repositories in a private registry are replicated.
     * - _Required_: No
     * - _Type_: Array of [RepositoryFilter](./aws-properties-ecr-replicationconfiguration-repositoryfilter.html)
     * - _Minimum_: `0`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-replicationconfiguration.html#cfn-ecr-replicationconfiguration-replicationrule-repositoryfilters */
    "RepositoryFilters"?: RepositoryFilter[];
}

/**
 * The replication configuration for a registry.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-replicationconfiguration.html */

export interface ReplicationConfiguration {
    /**
     * - An array of objects representing the replication destinations and repository filters for a replication configuration.
     * - _Required_: Yes
     * - _Type_: Array of [ReplicationRule](./aws-properties-ecr-replicationconfiguration-replicationrule.html)
     * - _Minimum_: `0`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-replicationconfiguration.html#cfn-ecr-replicationconfiguration-replicationconfiguration-rules */
    "Rules": ReplicationRule[];
}

/**
 * The `AWS::ECR::ReplicationConfiguration` resource creates or updates the replication configuration for a private registry. The first time a replication configuration is applied to a private registry, a service-linked IAM role is created in your account for the replication process. For more information, see [Using Service-Linked Roles for Amazon ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/using-service-linked-roles.html) in the _Amazon Elastic Container Registry User Guide_.
 * ###### Note
 * 
 * When configuring cross-account replication, the destination account must grant the source account permission to replicate. This permission is controlled using a private registry permissions policy. For more information, see `AWS::ECR::RegistryPolicy`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-replicationconfiguration.html */

export interface ECRReplicationConfiguration extends ResourceAttributes {
    "Type": "AWS::ECR::ReplicationConfiguration";
    "Properties": {
        /**
         * - The replication configuration for a registry.
         * - _Required_: Yes
         * - _Type_: [ReplicationConfiguration](./aws-properties-ecr-replicationconfiguration-replicationconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-replicationconfiguration.html#cfn-ecr-replicationconfiguration-replicationconfiguration */
        "ReplicationConfiguration": ReplicationConfiguration;
    };
}