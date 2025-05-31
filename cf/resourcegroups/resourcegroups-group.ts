import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Adds tags to a resource group with the specified Amazon resource name (ARN). Existing tags on a resource group are not changed if they are not specified in the request parameters.
 * ###### Important
 * 
 * Do not store personally identifiable information (PII) or other confidential or sensitive information in tags. We use tags to provide you with billing and administration services. Tags are not intended to be used for private or sensitive data.
 * **Minimum permissions**
 * To run this command, you must have the following permissions:
 * *   `resource-groups:Tag`
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html */

export interface Tag {
    /**
     * - The tag key.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^(?!aws:).+`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html#cfn-resourcegroups-group-tag-key */
    "Key"?: string | Intrinsic;
    /**
     * - The tag value.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html#cfn-resourcegroups-group-tag-value */
    "Value"?: string | Intrinsic;
}

/**
 * One parameter for a group configuration item. For details about service configurations and how to construct them, see [Service configurations for resource groups](https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html) in the _AWS Resource Groups User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html */

export interface ConfigurationParameter {
    /**
     * - The name of the group configuration parameter. For the list of parameters that you can use with each configuration item type, see [Supported resource types and parameters](https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html#about-slg-types) in the _AWS Resource Groups User Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[a-z-]+`
     * - _Minimum_: `1`
     * - _Maximum_: `80`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html#cfn-resourcegroups-group-configurationparameter-name */
    "Name"?: string | Intrinsic;
    /**
     * - The value or values to be used for the specified parameter. For the list of values you can use with each parameter, see [Supported resource types and parameters](https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html#about-slg-types).
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html#cfn-resourcegroups-group-configurationparameter-values */
    "Values"?: (string | Intrinsic)[];
}

/**
 * One of the items in the service configuration assigned to a resource group. A service configuration can consist of one or more items. For details service configurations and how to construct them, see [Service configurations for resource groups](https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html) in the _AWS Resource Groups User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html */

export interface ConfigurationItem {
    /**
     * - A collection of parameters for this configuration item. For the list of parameters that you can use with each configuration item `Type`, see [Supported resource types and parameters](https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html#about-slg-types) in the _AWS Resource Groups User Guide_.
     * - _Required_: No
     * - _Type_: Array of [ConfigurationParameter](./aws-properties-resourcegroups-group-configurationparameter.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html#cfn-resourcegroups-group-configurationitem-parameters */
    "Parameters"?: ConfigurationParameter[];
    /**
     * - Specifies the type of configuration item. Each item must have a unique value for type. For the list of the types that you can specify for a configuration item, see [Supported resource types and parameters](https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html#about-slg-types) in the _AWS Resource Groups User Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `AWS::[a-zA-Z0-9]+::[a-zA-Z0-9]+`
     * - _Maximum_: `40`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html#cfn-resourcegroups-group-configurationitem-type */
    "Type"?: string | Intrinsic;
}

/**
 * Specifies a single tag key and optional values that you can use to specify membership in a tag-based group. An AWS resource that doesn't have a matching tag key and value is rejected as a member of the group.
 * A `TagFilter` object includes two properties: `Key` (a string) and `Values` (a list of strings). Only resources in the account that are tagged with a matching key-value pair are members of the group. The `Values` property of `TagFilter` is optional, but specifying it narrows the query results.
 * As an example, suppose the `TagFilters` string is `[{"Key": "Stage", "Values": ["Test", "Beta"]}, {"Key": "Storage"}]`. In this case, only resources with all of the following tags are members of the group:
 * *   `Stage` tag key with a value of either `Test` or `Beta`
 *     
 * *   `Storage` tag key with any value
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html */

export interface TagFilter {
    /**
     * - A string that defines a tag key. Only resources in the account that are tagged with a specified tag key are members of the tag-based resource group.
     * - This field is required when the `ResourceQuery` structure's `Type` property is `TAG_FILTERS_1_0`. You must specify at least one tag key.
     * - _Required_: Conditional
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html#cfn-resourcegroups-group-tagfilter-key */
    "Key"?: string | Intrinsic;
    /**
     * - A list of tag values that can be included in the tag-based resource group. This is optional. If you don't specify a value or values for a key, then an AWS resource with any value for that key is a member.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html#cfn-resourcegroups-group-tagfilter-values */
    "Values"?: (string | Intrinsic)[];
}

/**
 * Specifies details within a `ResourceQuery` structure that determines the membership of the resource group. The contents required in the `Query` structure are determined by the `Type` property of the containing `ResourceQuery` structure.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html */

export interface Query {
    /**
     * - Specifies limits to the types of resources that can be included in the resource group. For example, if `ResourceTypeFilters` is `["AWS::EC2::Instance", "AWS::DynamoDB::Table"]`, only EC2 instances or DynamoDB tables can be members of this resource group. The default value is `["AWS::AllSupported"]`.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html#cfn-resourcegroups-group-query-resourcetypefilters */
    "ResourceTypeFilters"?: (string | Intrinsic)[];
    /**
     * - Specifies the ARN of a CloudFormation stack. All supported resources of the CloudFormation stack are members of the resource group. If you don't specify an ARN, this parameter defaults to the current stack that you are defining, which means that all the resources of the current stack are grouped.
     * - You can specify a value for `StackIdentifier` only when the `ResourceQuery.Type` property is `CLOUDFORMATION_STACK_1_0.`
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html#cfn-resourcegroups-group-query-stackidentifier */
    "StackIdentifier"?: string | Intrinsic;
    /**
     * - A list of key-value pair objects that limit which resources can be members of the resource group. This property is required when the `ResourceQuery.Type` property is `TAG_FILTERS_1_0`.
     * - A resource must have a tag that matches every filter that is provided in the `TagFilters` list.
     * - _Required_: Conditional
     * - _Type_: Array of [TagFilter](./aws-properties-resourcegroups-group-tagfilter.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html#cfn-resourcegroups-group-query-tagfilters */
    "TagFilters"?: TagFilter[];
}

/**
 * The query used to dynamically define the members of a group. For more information about how to construct a query, see [Build queries and groups in AWS Resource Groups](https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html */

export interface ResourceQuery {
    /**
     * - The query that defines the membership of the group. This is a structure with properties that depend on the `Type`.
     * - The `Query` structure must be included in the following scenarios:
     * - _Required_: No
     * - _Type_: [Query](./aws-properties-resourcegroups-group-query.html)
     * - _Pattern_: `[\s\S]*`
     * - _Maximum_: `4096`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html#cfn-resourcegroups-group-resourcequery-query */
    "Query"?: Query;
    /**
     * - Specifies the type of resource query that determines this group's membership. There are two valid query types:
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `TAG_FILTERS_1_0 | CLOUDFORMATION_STACK_1_0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html#cfn-resourcegroups-group-resourcequery-type */
    "Type"?: string | Intrinsic;
}

/**
 * Creates a resource group with the specified name and description. You can optionally include either a resource query or a service configuration. For more information about constructing a resource query, see [Build queries and groups in AWS Resource Groups](https://docs.aws.amazon.com/ARG/latest/userguide/getting_started-query.html) in the _AWS Resource Groups User Guide_. For more information about service-linked groups and service configurations, see [Service configurations for Resource Groups](https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html).
 * **Minimum permissions**
 * To run this command, you must have the following permissions:
 * *   `resource-groups:CreateGroup`
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html */

export interface ResourceGroupsGroup extends ResourceAttributes {
    "Type": "AWS::ResourceGroups::Group";
    "Properties": {
        /**
         * - The service configuration currently associated with the resource group and in effect for the members of the resource group. A `Configuration` consists of one or more `ConfigurationItem` entries. For information about service configurations for resource groups and how to construct them, see [Service configurations for resource groups](https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html) in the _AWS Resource Groups User Guide_.
         * - _Required_: Conditional
         * - _Type_: Array of [ConfigurationItem](./aws-properties-resourcegroups-group-configurationitem.html)
         * - _Maximum_: `2`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html#cfn-resourcegroups-group-configuration */
        "Configuration"?: ConfigurationItem[];
        /**
         * - The description of the resource group.
         * - _Required_: No
         * - _Type_: String
         * - _Maximum_: `512`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html#cfn-resourcegroups-group-description */
        "Description"?: string | Intrinsic;
        /**
         * - The name of a resource group. The name must be unique within the AWS Region in which you create the resource. To create multiple resource groups based on the same CloudFormation stack, you must generate unique names for each.
         * - _Required_: Yes
         * - _Type_: String
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html#cfn-resourcegroups-group-name */
        "Name": string | Intrinsic;
        /**
         * - The resource query structure that is used to dynamically determine which AWS resources are members of the associated resource group. For more information about queries and how to construct them, see [Build queries and groups in AWS Resource Groups](https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html) in the _AWS Resource Groups User Guide_
         * - _Required_: Conditional
         * - _Type_: [ResourceQuery](./aws-properties-resourcegroups-group-resourcequery.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html#cfn-resourcegroups-group-resourcequery */
        "ResourceQuery"?: ResourceQuery;
        /**
         * - A list of the Amazon Resource Names (ARNs) of AWS resources that you want to add to the specified group.
         * - _Required_: Conditional
         * - _Type_: Array of String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html#cfn-resourcegroups-group-resources */
        "Resources"?: (string | Intrinsic)[];
        /**
         * - The tag key and value pairs that are attached to the resource group.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-resourcegroups-group-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-group.html#cfn-resourcegroups-group-tags */
        "Tags"?: Tag[];
    };
}