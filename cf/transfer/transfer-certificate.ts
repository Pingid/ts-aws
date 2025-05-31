import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Creates a key-value pair for a specific resource. Tags are metadata that you can use to search for and group a resource for various purposes. You can apply tags to servers, users, and roles. A tag key can take more than one value. For example, to group servers for accounting purposes, you might create a tag called `Group` and assign the values `Research` and `Accounting` to that group.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-certificate.html */

export interface Tag {
    /**
     * - The name assigned to the tag that you create.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-certificate.html#cfn-transfer-certificate-tag-key */
    "Key": string | Intrinsic;
    /**
     * - Contains one or more values that you assigned to the key name you create.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-certificate.html#cfn-transfer-certificate-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Imports the signing and encryption certificates that you need to create local (AS2) profiles and partner profiles.
 * You can import both the certificate and its chain in the `Certificate` parameter.
 * ###### Note
 * 
 * If you use the `Certificate` parameter to upload both the certificate and its chain, don't use the `CertificateChain` parameter.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-certificate.html */

export interface TransferCertificate extends ResourceAttributes {
    "Type": "AWS::Transfer::Certificate";
    "Properties": {
        /**
         * - An optional date that specifies when the certificate becomes active. If you do not specify a value, `ActiveDate` takes the same value as `NotBeforeDate`, which is specified by the CA.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-certificate.html#cfn-transfer-certificate-activedate */
        "ActiveDate"?: string | Intrinsic;
        /**
         * - The file name for the certificate.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[\t\n\r\u0020-\u00FF]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `16384`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-certificate.html#cfn-transfer-certificate-certificate */
        "Certificate": string | Intrinsic;
        /**
         * - The list of certificates that make up the chain for the certificate.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[\t\n\r\u0020-\u00FF]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `2097152`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-certificate.html#cfn-transfer-certificate-certificatechain */
        "CertificateChain"?: string | Intrinsic;
        /**
         * - The name or description that's used to identity the certificate.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[\u0021-\u007E]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-certificate.html#cfn-transfer-certificate-description */
        "Description"?: string | Intrinsic;
        /**
         * - An optional date that specifies when the certificate becomes inactive. If you do not specify a value, `InactiveDate` takes the same value as `NotAfterDate`, which is specified by the CA.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-certificate.html#cfn-transfer-certificate-inactivedate */
        "InactiveDate"?: string | Intrinsic;
        /**
         * - The file that contains the private key for the certificate that's being imported.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[\t\n\r\u0020-\u00FF]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `16384`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-certificate.html#cfn-transfer-certificate-privatekey */
        "PrivateKey"?: string | Intrinsic;
        /**
         * - Key-value pairs that can be used to group and search for certificates.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-transfer-certificate-tag.html)
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-certificate.html#cfn-transfer-certificate-tags */
        "Tags"?: Tag[];
        /**
         * - Specifies how this certificate is used. It can be used in the following ways:
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `SIGNING | ENCRYPTION | TLS`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-certificate.html#cfn-transfer-certificate-usage */
        "Usage": string | Intrinsic;
    };
}