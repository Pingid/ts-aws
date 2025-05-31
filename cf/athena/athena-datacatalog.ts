import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A label that you assign to a resource. Athena resources include workgroups, data catalogs, and capacity reservations. Each tag consists of a key and an optional value, both of which you define. For example, you can use tags to categorize Athena resources by purpose, owner, or environment. Use a consistent set of tag keys to make it easier to search and filter the resources in your account. For best practices, see [Tagging Best Practices](https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html). Tag keys can be from 1 to 128 UTF-8 Unicode characters, and tag values can be from 0 to 256 UTF-8 Unicode characters. Tags can use letters and numbers representable in UTF-8, and the following characters: + - = . \_ : / @. Tag keys and values are case-sensitive. Tag keys must be unique per resource. If you specify more than one tag, separate them by commas.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-datacatalog.html */

export interface Tag {
    /**
     * - A tag key. The tag key length is from 1 to 128 Unicode characters in UTF-8. You can use letters and numbers representable in UTF-8, and the following characters: + - = . \_ : / @. Tag keys are case-sensitive and must be unique per resource.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-datacatalog.html#cfn-athena-datacatalog-tag-key */
    "Key": string | Intrinsic;
    /**
     * - A tag value. The tag value length is from 0 to 256 Unicode characters in UTF-8. You can use letters and numbers representable in UTF-8, and the following characters: + - = . \_ : / @. Tag values are case-sensitive.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-datacatalog.html#cfn-athena-datacatalog-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The AWS::Athena::DataCatalog resource specifies an Amazon Athena data catalog, which contains a name, description, type, parameters, and tags. For more information, see [DataCatalog](https://docs.aws.amazon.com/athena/latest/APIReference/API_DataCatalog.html) in the _Amazon Athena API Reference_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-datacatalog.html */

export interface AthenaDataCatalog extends ResourceAttributes {
    "Type": "AWS::Athena::DataCatalog";
    "Properties": {
        /**
         * - The type of connection for a `FEDERATED` data catalog (for example, `REDSHIFT`, `MYSQL`, or `SQLSERVER`). For information about individual connectors, see [Available data source connectors](https://docs.aws.amazon.com/athena/latest/ug/connectors-available.html).
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `DYNAMODB | MYSQL | POSTGRESQL | REDSHIFT | ORACLE | SYNAPSE | SQLSERVER | DB2 | OPENSEARCH | BIGQUERY | GOOGLECLOUDSTORAGE | HBASE | DOCUMENTDB | CMDB | TPCDS | TIMESTREAM | SAPHANA | SNOWFLAKE | DATALAKEGEN2 | DB2AS400`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-datacatalog.html#cfn-athena-datacatalog-connectiontype */
        "ConnectionType"?: string | Intrinsic;
        /**
         * - A description of the data catalog.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `1024`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-datacatalog.html#cfn-athena-datacatalog-description */
        "Description"?: string | Intrinsic;
        /**
         * - Text of the error that occurred during data catalog creation or deletion.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-datacatalog.html#cfn-athena-datacatalog-error */
        "Error"?: string | Intrinsic;
        /**
         * - The name of the data catalog. The catalog name must be unique for the AWS account and can use a maximum of 128 alphanumeric, underscore, at sign, or hyphen characters.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-datacatalog.html#cfn-athena-datacatalog-name */
        "Name": string | Intrinsic;
        /**
         * - Specifies the Lambda function or functions to use for the data catalog. The mapping used depends on the catalog type.
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `.*`
         * - _Maximum_: `51200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-datacatalog.html#cfn-athena-datacatalog-parameters */
        "Parameters"?: Record<string, string | Intrinsic>;
        /**
         * - The status of the creation or deletion of the data catalog.
         * - Data catalog creation status:
         * - Data catalog deletion status:
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `CREATE_IN_PROGRESS | CREATE_COMPLETE | CREATE_FAILED | CREATE_FAILED_CLEANUP_IN_PROGRESS | CREATE_FAILED_CLEANUP_COMPLETE | CREATE_FAILED_CLEANUP_FAILED | DELETE_IN_PROGRESS | DELETE_COMPLETE | DELETE_FAILED`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-datacatalog.html#cfn-athena-datacatalog-status */
        "Status"?: string | Intrinsic;
        /**
         * - The tags (key-value pairs) to associate with this resource.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-athena-datacatalog-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-datacatalog.html#cfn-athena-datacatalog-tags */
        "Tags"?: Tag[];
        /**
         * - The type of data catalog: `LAMBDA` for a federated catalog, `GLUE` for AWS Glue Catalog, or `HIVE` for an external hive metastore.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `LAMBDA | GLUE | HIVE | FEDERATED`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-athena-datacatalog.html#cfn-athena-datacatalog-type */
        "Type": string | Intrinsic;
    };
}