import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Specifies the settings that control the size and behavior of the connection pool associated with a `DBProxyTargetGroup`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxytargetgroup.html */

export interface ConnectionPoolConfigurationInfoFormat {
    /**
     * - The number of seconds for a proxy to wait for a connection to become available in the connection pool. This setting only applies when the proxy has opened its maximum number of connections and all connections are busy with client sessions.
     * - Default: `120`
     * - Constraints:
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxytargetgroup.html#cfn-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat-connectionborrowtimeout */
    "ConnectionBorrowTimeout"?: number | Intrinsic;
    /**
     * - Add an initialization query, or modify the current one. You can specify one or more SQL statements for the proxy to run when opening each new database connection. The setting is typically used with `SET` statements to make sure that each connection has identical settings. Make sure the query added here is valid. This is an optional field, so you can choose to leave it empty. For including multiple variables in a single SET statement, use a comma separator.
     * - For example: `SET variable1=value1, variable2=value2`
     * - Default: no initialization query
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxytargetgroup.html#cfn-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat-initquery */
    "InitQuery"?: string | Intrinsic;
    /**
     * - The maximum size of the connection pool for each target in a target group. The value is expressed as a percentage of the `max_connections` setting for the RDS DB instance or Aurora DB cluster used by the target group.
     * - If you specify `MaxIdleConnectionsPercent`, then you must also include a value for this parameter.
     * - Default: `10` for RDS for Microsoft SQL Server, and `100` for all other engines
     * - Constraints:
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxytargetgroup.html#cfn-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat-maxconnectionspercent */
    "MaxConnectionsPercent"?: number | Intrinsic;
    /**
     * - A value that controls how actively the proxy closes idle database connections in the connection pool. The value is expressed as a percentage of the `max_connections` setting for the RDS DB instance or Aurora DB cluster used by the target group. With a high value, the proxy leaves a high percentage of idle database connections open. A low value causes the proxy to close more idle connections and return them to the database.
     * - If you specify this parameter, then you must also include a value for `MaxConnectionsPercent`.
     * - Default: The default value is half of the value of `MaxConnectionsPercent`. For example, if `MaxConnectionsPercent` is 80, then the default value of `MaxIdleConnectionsPercent` is 40. If the value of `MaxConnectionsPercent` isn't specified, then for SQL Server, `MaxIdleConnectionsPercent` is `5`, and for all other engines, the default is `50`.
     * - Constraints:
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxytargetgroup.html#cfn-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat-maxidleconnectionspercent */
    "MaxIdleConnectionsPercent"?: number | Intrinsic;
    /**
     * - Each item in the list represents a class of SQL operations that normally cause all later statements in a session using a proxy to be pinned to the same underlying database connection. Including an item in the list exempts that class of SQL operations from the pinning behavior.
     * - Default: no session pinning filters
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxytargetgroup.html#cfn-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat-sessionpinningfilters */
    "SessionPinningFilters"?: (string | Intrinsic)[];
}

/**
 * The `AWS::RDS::DBProxyTargetGroup` resource represents a set of RDS DB instances, Aurora DB clusters, or both that a proxy can connect to. Currently, each target group is associated with exactly one RDS DB instance or Aurora DB cluster.
 * This data type is used as a response element in the `DescribeDBProxyTargetGroups` action.
 * For information about RDS Proxy for Amazon RDS, see [Managing Connections with Amazon RDS Proxy](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy.html) in the _Amazon RDS User Guide_.
 * For information about RDS Proxy for Amazon Aurora, see [Managing Connections with Amazon RDS Proxy](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.html) in the _Amazon Aurora User Guide_.
 * For a sample template that creates a DB proxy and registers a DB instance, see [Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxy.html#aws-resource-rds-dbproxy--examples) in AWS::RDS::DBProxy.
 * ###### Note
 * 
 * Limitations apply to RDS Proxy, including DB engine version limitations and AWS Region limitations.
 * 
 * For information about limitations that apply to RDS Proxy for Amazon RDS, see [Limitations for RDS Proxy](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy.html#rds-proxy.limitations) in the _Amazon RDS User Guide_.
 * 
 * For information about that apply to RDS Proxy for Amazon Aurora, see [Limitations for RDS Proxy](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.html#rds-proxy.limitations) in the _Amazon Aurora User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxytargetgroup.html */

export interface RDSDBProxyTargetGroup extends ResourceAttributes {
    "Type": "AWS::RDS::DBProxyTargetGroup";
    "Properties": {
        /**
         * - Displays the settings that control the size and behavior of the connection pool associated with a `DBProxyTarget`.
         * - _Required_: No
         * - _Type_: [ConnectionPoolConfigurationInfoFormat](./aws-properties-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxytargetgroup.html#cfn-rds-dbproxytargetgroup-connectionpoolconfigurationinfo */
        "ConnectionPoolConfigurationInfo"?: ConnectionPoolConfigurationInfoFormat;
        /**
         * - One or more DB cluster identifiers.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxytargetgroup.html#cfn-rds-dbproxytargetgroup-dbclusteridentifiers */
        "DBClusterIdentifiers"?: (string | Intrinsic)[];
        /**
         * - One or more DB instance identifiers.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxytargetgroup.html#cfn-rds-dbproxytargetgroup-dbinstanceidentifiers */
        "DBInstanceIdentifiers"?: (string | Intrinsic)[];
        /**
         * - The identifier of the `DBProxy` that is associated with the `DBProxyTargetGroup`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[A-z][0-z]*`
         * - _Maximum_: `64`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxytargetgroup.html#cfn-rds-dbproxytargetgroup-dbproxyname */
        "DBProxyName": string | Intrinsic;
        /**
         * - The identifier for the target group.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `default`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxytargetgroup.html#cfn-rds-dbproxytargetgroup-targetgroupname */
        "TargetGroupName": string | Intrinsic;
    };
}