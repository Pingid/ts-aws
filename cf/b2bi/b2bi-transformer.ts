import type { Intrinsic } from '../intrinsic/index.js' /**
 * A key-value pair for a specific transformer. Tags are metadata that you can use to search for and group capabilities for various purposes.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html */

export interface Tag {
  /**
   * - Specifies the name assigned to the tag that you create.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-tag-key */
  Key: string | Intrinsic
  /**
   * - Contains one or more values that you assigned to the key name that you create.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-tag-value */
  Value: string | Intrinsic
}

/**
 * A structure that contains the X12 transaction set and version. The X12 structure is used when the system transforms an EDI (electronic data interchange) file.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html */

export interface X12Details {
  /**
   * - Returns an enumerated type where each value identifies an X12 transaction set. Transaction sets are maintained by the X12 Accredited Standards Committee.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `X12_110 | X12_180 | X12_204 | X12_210 | X12_211 | X12_214 | X12_215 | X12_259 | X12_260 | X12_266 | X12_269 | X12_270 | X12_271 | X12_274 | X12_275 | X12_276 | X12_277 | X12_278 | X12_310 | X12_315 | X12_322 | X12_404 | X12_410 | X12_417 | X12_421 | X12_426 | X12_810 | X12_820 | X12_824 | X12_830 | X12_832 | X12_834 | X12_835 | X12_837 | X12_844 | X12_846 | X12_849 | X12_850 | X12_852 | X12_855 | X12_856 | X12_860 | X12_861 | X12_864 | X12_865 | X12_869 | X12_870 | X12_940 | X12_945 | X12_990 | X12_997 | X12_999 | X12_270_X279 | X12_271_X279 | X12_275_X210 | X12_275_X211 | X12_276_X212 | X12_277_X212 | X12_277_X214 | X12_277_X364 | X12_278_X217 | X12_820_X218 | X12_820_X306 | X12_824_X186 | X12_834_X220 | X12_834_X307 | X12_834_X318 | X12_835_X221 | X12_837_X222 | X12_837_X223 | X12_837_X224 | X12_837_X291 | X12_837_X292 | X12_837_X298 | X12_999_X231`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-x12details-transactionset */
  TransactionSet?: string | Intrinsic
  /**
   * - Returns the version to use for the specified X12 transaction set.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `VERSION_4010 | VERSION_4030 | VERSION_5010 | VERSION_5010_HIPAA`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-x12details-version */
  Version?: string | Intrinsic
}

/**
 * Specifies the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html */

export interface EdiType {
  /**
   * - Returns the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.
   * - _Required_: Yes
   * - _Type_: [X12Details](./aws-properties-b2bi-transformer-x12details.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-editype-x12details */
  X12Details: X12Details
}

/**
 * Creates a transformer. A transformer describes how to process the incoming EDI documents and extract the necessary information to the output file.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html */

export interface B2BITransformer {
  Type: 'AWS::B2BI::Transformer'
  Properties: {
    /**
     * - Returns the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.
     * - _Required_: Yes
     * - _Type_: [EdiType](./aws-properties-b2bi-transformer-editype.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-editype */
    EdiType: EdiType
    /**
     * - Returns that the currently supported file formats for EDI transformations are `JSON` and `XML`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `XML | JSON`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-fileformat */
    FileFormat: string | Intrinsic
    /**
     * - Returns a sample EDI document that is used by a transformer as a guide for processing the EDI data.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `350000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-mappingtemplate */
    MappingTemplate: string | Intrinsic
    /**
     * - Returns the descriptive name for the transformer.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `254`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-name */
    Name: string | Intrinsic
    /**
     * - Returns a sample EDI document that is used by a transformer as a guide for processing the EDI data.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-sampledocument */
    SampleDocument?: string | Intrinsic
    /**
     * - Returns the state of the newly created transformer. The transformer can be either `active` or `inactive`. For the transformer to be used in a capability, its status must `active`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `active | inactive`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-status */
    Status: string | Intrinsic
    /**
     * - A key-value pair for a specific transformer. Tags are metadata that you can use to search for and group capabilities for various purposes.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-b2bi-transformer-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-tags */
    Tags?: Tag[]
  }
}
