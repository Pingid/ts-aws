import type { Intrinsic } from '../intrinsic/index.js' /**
 * The read set's genome reference ARN.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-variantstore.html */

export interface ReferenceItem {
  /**
   * - The reference's ARN.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:.+$`
   * - _Minimum_: `1`
   * - _Maximum_: `127`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-variantstore.html#cfn-omics-variantstore-referenceitem-referencearn */
  ReferenceArn: string | Intrinsic
}

/**
 * Server-side encryption (SSE) settings for a store.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-variantstore.html */

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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-variantstore.html#cfn-omics-variantstore-sseconfig-keyarn */
  KeyArn?: string | Intrinsic
  /**
   * - The encryption type.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `KMS`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-variantstore.html#cfn-omics-variantstore-sseconfig-type */
  Type: string | Intrinsic
}

/**
 * Create a store for variant data.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-variantstore.html */

export interface OmicsVariantStore {
  Type: 'AWS::Omics::VariantStore'
  Properties: {
    /**
     * - A description for the store.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `500`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-variantstore.html#cfn-omics-variantstore-description */
    Description?: string | Intrinsic
    /**
     * - A name for the store.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([a-z]){1}([a-z0-9_]){2,254}`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-variantstore.html#cfn-omics-variantstore-name */
    Name: string | Intrinsic
    /**
     * - The genome reference for the store's variants.
     * - _Required_: Yes
     * - _Type_: [ReferenceItem](./aws-properties-omics-variantstore-referenceitem.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-variantstore.html#cfn-omics-variantstore-reference */
    Reference: ReferenceItem
    /**
     * - Server-side encryption (SSE) settings for the store.
     * - _Required_: No
     * - _Type_: [SseConfig](./aws-properties-omics-variantstore-sseconfig.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-variantstore.html#cfn-omics-variantstore-sseconfig */
    SseConfig?: SseConfig
    /**
     * - Tags for the store.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `.+`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-variantstore.html#cfn-omics-variantstore-tags */
    Tags?: Record<string, string | Intrinsic>
  }
}
