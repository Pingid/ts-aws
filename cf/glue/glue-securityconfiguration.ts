import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Specifies how Amazon CloudWatch data should be encrypted.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-securityconfiguration.html */

export interface CloudWatchEncryption {
    /**
     * - The encryption mode to use for CloudWatch data.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DISABLED | SSE-KMS`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-securityconfiguration.html#cfn-glue-securityconfiguration-cloudwatchencryption-cloudwatchencryptionmode */
    "CloudWatchEncryptionMode"?: string | Intrinsic;
    /**
     * - The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^$|arn:aws[a-z0-9-]*:kms:.*`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-securityconfiguration.html#cfn-glue-securityconfiguration-cloudwatchencryption-kmskeyarn */
    "KmsKeyArn"?: string | Intrinsic;
}

/**
 * Specifies how job bookmark data should be encrypted.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-securityconfiguration.html */

export interface JobBookmarksEncryption {
    /**
     * - The encryption mode to use for job bookmarks data.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DISABLED | CSE-KMS`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-securityconfiguration.html#cfn-glue-securityconfiguration-jobbookmarksencryption-jobbookmarksencryptionmode */
    "JobBookmarksEncryptionMode"?: string | Intrinsic;
    /**
     * - The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^$|arn:aws[a-z0-9-]*:kms:.*`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-securityconfiguration.html#cfn-glue-securityconfiguration-jobbookmarksencryption-kmskeyarn */
    "KmsKeyArn"?: string | Intrinsic;
}

/**
 * Specifies how Amazon Simple Storage Service (Amazon S3) data should be encrypted.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-securityconfiguration.html */

export interface S3Encryption {
    /**
     * - The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^$|arn:aws[a-z0-9-]*:kms:.*`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-securityconfiguration.html#cfn-glue-securityconfiguration-s3encryption-kmskeyarn */
    "KmsKeyArn"?: string | Intrinsic;
    /**
     * - The encryption mode to use for Amazon S3 data.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DISABLED | SSE-KMS | SSE-S3`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-securityconfiguration.html#cfn-glue-securityconfiguration-s3encryption-s3encryptionmode */
    "S3EncryptionMode"?: string | Intrinsic;
}

/**
 * Specifies an encryption configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-securityconfiguration.html */

export interface EncryptionConfiguration {
    /**
     * - The encryption configuration for Amazon CloudWatch.
     * - _Required_: No
     * - _Type_: [CloudWatchEncryption](./aws-properties-glue-securityconfiguration-cloudwatchencryption.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-securityconfiguration.html#cfn-glue-securityconfiguration-encryptionconfiguration-cloudwatchencryption */
    "CloudWatchEncryption"?: CloudWatchEncryption;
    /**
     * - The encryption configuration for job bookmarks.
     * - _Required_: No
     * - _Type_: [JobBookmarksEncryption](./aws-properties-glue-securityconfiguration-jobbookmarksencryption.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-securityconfiguration.html#cfn-glue-securityconfiguration-encryptionconfiguration-jobbookmarksencryption */
    "JobBookmarksEncryption"?: JobBookmarksEncryption;
    /**
     * - The encyption configuration for Amazon Simple Storage Service (Amazon S3) data.
     * - _Required_: No
     * - _Type_: Array of [S3Encryption](./aws-properties-glue-securityconfiguration-s3encryption.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-securityconfiguration.html#cfn-glue-securityconfiguration-encryptionconfiguration-s3encryptions */
    "S3Encryptions"?: S3Encryption[];
}

/**
 * Creates a new security configuration. A security configuration is a set of security properties that can be used by AWS Glue. You can use a security configuration to encrypt data at rest. For information about using security configurations in AWS Glue, see [Encrypting Data Written by Crawlers, Jobs, and Development Endpoints](https://docs.aws.amazon.com/glue/latest/dg/encryption-security-configuration.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-securityconfiguration.html */

export interface GlueSecurityConfiguration extends ResourceAttributes {
    "Type": "AWS::Glue::SecurityConfiguration";
    "Properties": {
        /**
         * - The encryption configuration associated with this security configuration.
         * - _Required_: Yes
         * - _Type_: [EncryptionConfiguration](./aws-properties-glue-securityconfiguration-encryptionconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-securityconfiguration.html#cfn-glue-securityconfiguration-encryptionconfiguration */
        "EncryptionConfiguration": EncryptionConfiguration;
        /**
         * - The name of the security configuration.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t]*`
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-securityconfiguration.html#cfn-glue-securityconfiguration-name */
        "Name": string | Intrinsic;
    };
}