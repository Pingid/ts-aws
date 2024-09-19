import type { Intrinsic } from '../intrinsic/index.js' /**
 * A genome reference.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html */

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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html#cfn-omics-annotationstore-referenceitem-referencearn */
  ReferenceArn: string | Intrinsic
}

/**
 * Server-side encryption (SSE) settings for a store.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html */

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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html#cfn-omics-annotationstore-sseconfig-keyarn */
  KeyArn?: string | Intrinsic
  /**
   * - The encryption type.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `KMS`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html#cfn-omics-annotationstore-sseconfig-type */
  Type: string | Intrinsic
}

/**
 * The store's parsing options.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html */

export interface TsvStoreOptions {
  /**
   * - The store's annotation type.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `GENERIC | CHR_POS | CHR_POS_REF_ALT | CHR_START_END_ONE_BASE | CHR_START_END_REF_ALT_ONE_BASE | CHR_START_END_ZERO_BASE | CHR_START_END_REF_ALT_ZERO_BASE`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html#cfn-omics-annotationstore-tsvstoreoptions-annotationtype */
  AnnotationType?: string | Intrinsic
  /**
   * - The store's header key to column name mapping.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `.+`
   * - _Minimum_: `0`
   * - _Maximum_: `1000`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html#cfn-omics-annotationstore-tsvstoreoptions-formattoheader */
  FormatToHeader?: Record<string, string | Intrinsic>
  /**
   * - The schema of an annotation store.
   * - _Required_: No
   * - _Type_: Array of Object
   * - _Minimum_: `1`
   * - _Maximum_: `5000`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html#cfn-omics-annotationstore-tsvstoreoptions-schema */
  Schema?: Record<string, any | Intrinsic>[]
}

/**
 * The store's file parsing options.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html */

export interface StoreOptions {
  /**
   * - Formatting options for a TSV file.
   * - _Required_: Yes
   * - _Type_: [TsvStoreOptions](./aws-properties-omics-annotationstore-tsvstoreoptions.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html#cfn-omics-annotationstore-storeoptions-tsvstoreoptions */
  TsvStoreOptions: TsvStoreOptions
}

/**
 * Creates an annotation store.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html */

export interface OmicsAnnotationStore {
  Type: 'AWS::Omics::AnnotationStore'
  Properties: {
    /**
     * - A description for the store.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `500`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html#cfn-omics-annotationstore-description */
    Description?: string | Intrinsic
    /**
     * - The name of the Annotation Store.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([a-z]){1}([a-z0-9_]){2,254}`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html#cfn-omics-annotationstore-name */
    Name: string | Intrinsic
    /**
     * - The genome reference for the store's annotations.
     * - _Required_: No
     * - _Type_: [ReferenceItem](./aws-properties-omics-annotationstore-referenceitem.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html#cfn-omics-annotationstore-reference */
    Reference?: ReferenceItem
    /**
     * - The store's server-side encryption (SSE) settings.
     * - _Required_: No
     * - _Type_: [SseConfig](./aws-properties-omics-annotationstore-sseconfig.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html#cfn-omics-annotationstore-sseconfig */
    SseConfig?: SseConfig
    /**
     * - The annotation file format of the store.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `GFF | TSV | VCF`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html#cfn-omics-annotationstore-storeformat */
    StoreFormat: string | Intrinsic
    /**
     * - File parsing options for the annotation store.
     * - _Required_: No
     * - _Type_: [StoreOptions](./aws-properties-omics-annotationstore-storeoptions.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html#cfn-omics-annotationstore-storeoptions */
    StoreOptions?: StoreOptions
    /**
     * - Tags for the store.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `.+`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-annotationstore.html#cfn-omics-annotationstore-tags */
    Tags?: Record<string, string | Intrinsic>
  }
}
