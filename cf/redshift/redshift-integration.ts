import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A tag consisting of a name/value pair for a resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-integration.html */

export interface Tag {
    /**
     * - The key, or name, for the resource tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-integration.html#cfn-redshift-integration-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value for the resource tag.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-integration.html#cfn-redshift-integration-tag-value */
    "Value"?: string | Intrinsic;
}

/**
 * Describes a zero-ETL or S3 integration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-integration.html */

export interface RedshiftIntegration extends ResourceAttributes {
    "Type": "AWS::Redshift::Integration";
    "Properties": {
        /**
         * - The encryption context for the integration. For more information, see [Encryption context](https://docs.aws.amazon.com/) in the _AWS Key Management Service Developer Guide_.
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `^[\s\S]*$`
         * - _Minimum_: `0`
         * - _Maximum_: `131072`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-integration.html#cfn-redshift-integration-additionalencryptioncontext */
        "AdditionalEncryptionContext"?: Record<string, string | Intrinsic>;
        /**
         * - The name of the integration.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `64`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-integration.html#cfn-redshift-integration-integrationname */
        "IntegrationName"?: string | Intrinsic;
        /**
         * - The AWS Key Management Service (AWS KMS) key identifier for the key used to encrypt the integration.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-integration.html#cfn-redshift-integration-kmskeyid */
        "KMSKeyId"?: string | Intrinsic;
        /**
         * - The Amazon Resource Name (ARN) of the database used as the source for replication.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-integration.html#cfn-redshift-integration-sourcearn */
        "SourceArn": string | Intrinsic;
        /**
         * - The list of tags associated with the integration.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-redshift-integration-tag.html)
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-integration.html#cfn-redshift-integration-tags */
        "Tags"?: Tag[];
        /**
         * - The Amazon Resource Name (ARN) of the Amazon Redshift data warehouse to use as the target for replication.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-integration.html#cfn-redshift-integration-targetarn */
        "TargetArn": string | Intrinsic;
    };
}