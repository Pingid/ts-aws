import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Server-side encryption (SSE) settings for a store.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-referencestore.html */

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
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-referencestore.html#cfn-omics-referencestore-sseconfig-keyarn */
    "KeyArn"?: string | Intrinsic;
    /**
     * - The encryption type.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `KMS`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-referencestore.html#cfn-omics-referencestore-sseconfig-type */
    "Type": string | Intrinsic;
}

/**
 * Creates a reference store.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-referencestore.html */

export interface OmicsReferenceStore extends ResourceAttributes {
    "Type": "AWS::Omics::ReferenceStore";
    "Properties": {
        /**
         * - A description for the store.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-referencestore.html#cfn-omics-referencestore-description */
        "Description"?: string | Intrinsic;
        /**
         * - A name for the store.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `127`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-referencestore.html#cfn-omics-referencestore-name */
        "Name": string | Intrinsic;
        /**
         * - Server-side encryption (SSE) settings for the store.
         * - _Required_: No
         * - _Type_: [SseConfig](./aws-properties-omics-referencestore-sseconfig.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-referencestore.html#cfn-omics-referencestore-sseconfig */
        "SseConfig"?: SseConfig;
        /**
         * - Tags for the store.
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `.+`
         * - _Minimum_: `0`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-referencestore.html#cfn-omics-referencestore-tags */
        "Tags"?: Record<string, string | Intrinsic>;
    };
}