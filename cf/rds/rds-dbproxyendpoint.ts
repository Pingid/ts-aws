import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Metadata assigned to an Amazon RDS resource consisting of a key-value pair.
 * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the _Amazon RDS User Guide_ or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the _Amazon Aurora User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html */

export interface TagFormat {
    /**
     * - A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '\_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^(\[\\\\p{L}\\\\p{Z}\\\\p{N}\_.:/=+\\\\-@\]\*)$").
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `(\w|\d|\s|\\|-|\.:=+-)*`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html#cfn-rds-dbproxyendpoint-tagformat-key */
    "Key"?: string | Intrinsic;
    /**
     * - A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '\_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^(\[\\\\p{L}\\\\p{Z}\\\\p{N}\_.:/=+\\\\-@\]\*)$").
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `(\w|\d|\s|\\|-|\.:=+-)*`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html#cfn-rds-dbproxyendpoint-tagformat-value */
    "Value"?: string | Intrinsic;
}

/**
 * The `AWS::RDS::DBProxyEndpoint` resource creates or updates a DB proxy endpoint. You can use custom proxy endpoints to access a proxy through a different VPC than the proxy's default VPC.
 * For more information about RDS Proxy, see [AWS::RDS::DBProxy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxy.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html */

export interface RDSDBProxyEndpoint extends ResourceAttributes {
    "Type": "AWS::RDS::DBProxyEndpoint";
    "Properties": {
        /**
         * - The name of the DB proxy endpoint to create.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[0-z]*`
         * - _Maximum_: `64`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html#cfn-rds-dbproxyendpoint-dbproxyendpointname */
        "DBProxyEndpointName": string | Intrinsic;
        /**
         * - The name of the DB proxy associated with the DB proxy endpoint that you create.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[0-z]*`
         * - _Maximum_: `64`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html#cfn-rds-dbproxyendpoint-dbproxyname */
        "DBProxyName": string | Intrinsic;
        /**
         * - An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy.
         * - _Required_: No
         * - _Type_: Array of [TagFormat](./aws-properties-rds-dbproxyendpoint-tagformat.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html#cfn-rds-dbproxyendpoint-tags */
        "Tags"?: TagFormat[];
        /**
         * - A value that indicates whether the DB proxy endpoint can be used for read/write or read-only operations.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `READ_WRITE | READ_ONLY`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html#cfn-rds-dbproxyendpoint-targetrole */
        "TargetRole"?: string | Intrinsic;
        /**
         * - The VPC security group IDs for the DB proxy endpoint that you create. You can specify a different set of security group IDs than for the original DB proxy. The default is the default security group for the VPC.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Minimum_: `1`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html#cfn-rds-dbproxyendpoint-vpcsecuritygroupids */
        "VpcSecurityGroupIds"?: (string | Intrinsic)[];
        /**
         * - The VPC subnet IDs for the DB proxy endpoint that you create. You can specify a different set of subnet IDs than for the original DB proxy.
         * - _Required_: Yes
         * - _Type_: Array of String
         * - _Minimum_: `2`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html#cfn-rds-dbproxyendpoint-vpcsubnetids */
        "VpcSubnetIds": (string | Intrinsic)[];
    };
}