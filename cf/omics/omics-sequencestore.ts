import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Server-side encryption (SSE) settings for a store.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-sequencestore.html */

export interface SseConfig {
    /**
     * - An encryption key ARN.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:([^: ]*):([^: ]*):([^: ]*):([0-9]{12}):([^: ]*)`
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-sequencestore.html#cfn-omics-sequencestore-sseconfig-keyarn */
    "KeyArn"?: string | Intrinsic;
    /**
     * - The encryption type.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `KMS`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-sequencestore.html#cfn-omics-sequencestore-sseconfig-type */
    "Type": string | Intrinsic;
}

/**
 * Creates a sequence store.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-sequencestore.html */

export interface OmicsSequenceStore extends ResourceAttributes {
    "Type": "AWS::Omics::SequenceStore";
    "Properties": {
        /**
         * - Location of the access logs.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^$|^s3://([a-z0-9][a-z0-9-.]{1,61}[a-z0-9])/?((.{1,800})/)?$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-sequencestore.html#cfn-omics-sequencestore-accessloglocation */
        "AccessLogLocation"?: string | Intrinsic;
        /**
         * - A description for the store.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-sequencestore.html#cfn-omics-sequencestore-description */
        "Description"?: string | Intrinsic;
        /**
         * - The algorithm family of the ETag.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `MD5up | SHA256up | SHA512up`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-sequencestore.html#cfn-omics-sequencestore-etagalgorithmfamily */
        "ETagAlgorithmFamily"?: string | Intrinsic;
        /**
         * - An S3 location that is used to store files that have failed a direct upload.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^$|^s3://([a-z0-9][a-z0-9-.]{1,61}[a-z0-9])/?((.{1,1024})/)?$`
         * - _Minimum_: `0`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-sequencestore.html#cfn-omics-sequencestore-fallbacklocation */
        "FallbackLocation"?: string | Intrinsic;
        /**
         * - A name for the store.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `127`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-sequencestore.html#cfn-omics-sequencestore-name */
        "Name": string | Intrinsic;
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Minimum_: `1 | 0`
         * - _Maximum_: `128 | 50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-sequencestore.html#cfn-omics-sequencestore-propagatedsetleveltags */
        "PropagatedSetLevelTags"?: (string | Intrinsic)[];
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: Json
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-sequencestore.html#cfn-omics-sequencestore-s3accesspolicy */
        "S3AccessPolicy"?: any | Intrinsic;
        /**
         * - Server-side encryption (SSE) settings for the store.
         * - _Required_: No
         * - _Type_: [SseConfig](./aws-properties-omics-sequencestore-sseconfig.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-sequencestore.html#cfn-omics-sequencestore-sseconfig */
        "SseConfig"?: SseConfig;
        /**
         * - Tags for the store.
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `.+`
         * - _Minimum_: `0`
         * - _Maximum_: `256`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-sequencestore.html#cfn-omics-sequencestore-tags */
        "Tags"?: Record<string, string | Intrinsic>;
    };
}