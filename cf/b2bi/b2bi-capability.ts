import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Specifies the details for the Amazon S3 file location that is being used with AWS B2BI Data Interchange. File locations in Amazon S3 are identified using a combination of the bucket and key.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html */

export interface S3Location {
  /**
   * - Specifies the name of the Amazon S3 bucket.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `3`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html#cfn-b2bi-capability-s3location-bucketname */
  BucketName?: string | Intrinsic
  /**
   * - Specifies the Amazon S3 key for the file location.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html#cfn-b2bi-capability-s3location-key */
  Key?: string | Intrinsic
}

/**
 * A key-value pair for a specific capability. Tags are metadata that you can use to search for and group capabilities for various purposes.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html */

export interface Tag {
  /**
   * - Specifies the name assigned to the tag that you create.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html#cfn-b2bi-capability-tag-key */
  Key: string | Intrinsic
  /**
   * - Contains one or more values that you assigned to the key name that you create.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html#cfn-b2bi-capability-tag-value */
  Value: string | Intrinsic
}

/**
 * The `X12Details` property type specifies Property description not available. for an [AWS::B2BI::Capability](./aws-resource-b2bi-capability.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html */

export interface X12Details {
  /**
   * - Returns an enumerated type where each value identifies an X12 transaction set. Transaction sets are maintained by the X12 Accredited Standards Committee.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `X12_110 | X12_180 | X12_204 | X12_210 | X12_211 | X12_214 | X12_215 | X12_259 | X12_260 | X12_266 | X12_269 | X12_270 | X12_271 | X12_274 | X12_275 | X12_276 | X12_277 | X12_278 | X12_310 | X12_315 | X12_322 | X12_404 | X12_410 | X12_417 | X12_421 | X12_426 | X12_810 | X12_820 | X12_824 | X12_830 | X12_832 | X12_834 | X12_835 | X12_837 | X12_844 | X12_846 | X12_849 | X12_850 | X12_852 | X12_855 | X12_856 | X12_860 | X12_861 | X12_864 | X12_865 | X12_869 | X12_870 | X12_940 | X12_945 | X12_990 | X12_997 | X12_999 | X12_270_X279 | X12_271_X279 | X12_275_X210 | X12_275_X211 | X12_276_X212 | X12_277_X212 | X12_277_X214 | X12_277_X364 | X12_278_X217 | X12_820_X218 | X12_820_X306 | X12_824_X186 | X12_834_X220 | X12_834_X307 | X12_834_X318 | X12_835_X221 | X12_837_X222 | X12_837_X223 | X12_837_X224 | X12_837_X291 | X12_837_X292 | X12_837_X298 | X12_999_X231`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html#cfn-b2bi-capability-x12details-transactionset */
  TransactionSet?: string | Intrinsic
  /**
   * - Returns the version to use for the specified X12 transaction set.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `VERSION_4010 | VERSION_4030 | VERSION_5010 | VERSION_5010_HIPAA`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html#cfn-b2bi-capability-x12details-version */
  Version?: string | Intrinsic
}

/**
 * Specifies the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html */

export interface EdiType {
  /**
   * - Returns the details for the EDI standard that is being used for the transformer. Currently, only X12 is supported. X12 is a set of standards and corresponding messages that define specific business documents.
   * - _Required_: Yes
   * - _Type_: [X12Details](./aws-properties-b2bi-capability-x12details.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html#cfn-b2bi-capability-editype-x12details */
  X12Details: X12Details
}

/**
 * Specifies the details for the EDI (electronic data interchange) transformation.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html */

export interface EdiConfiguration {
  /**
   * - Contains the Amazon S3 bucket and prefix for the location of the input file, which is contained in an `S3Location` object.
   * - _Required_: Yes
   * - _Type_: [S3Location](./aws-properties-b2bi-capability-s3location.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html#cfn-b2bi-capability-ediconfiguration-inputlocation */
  InputLocation: S3Location
  /**
   * - Contains the Amazon S3 bucket and prefix for the location of the output file, which is contained in an `S3Location` object.
   * - _Required_: Yes
   * - _Type_: [S3Location](./aws-properties-b2bi-capability-s3location.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html#cfn-b2bi-capability-ediconfiguration-outputlocation */
  OutputLocation: S3Location
  /**
   * - Returns the system-assigned unique identifier for the transformer.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9_-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html#cfn-b2bi-capability-ediconfiguration-transformerid */
  TransformerId: string | Intrinsic
  /**
   * - Returns the type of the capability. Currently, only `edi` is supported.
   * - _Required_: Yes
   * - _Type_: [EdiType](./aws-properties-b2bi-capability-editype.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html#cfn-b2bi-capability-ediconfiguration-type */
  Type: EdiType
}

/**
 * A capability object. Currently, only EDI (electronic data interchange) capabilities are supported. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html */

export interface CapabilityConfiguration {
  /**
   * - An EDI (electronic data interchange) configuration object.
   * - _Required_: Yes
   * - _Type_: [EdiConfiguration](./aws-properties-b2bi-capability-ediconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html#cfn-b2bi-capability-capabilityconfiguration-edi */
  Edi: EdiConfiguration
}

/**
 * Instantiates a capability based on the specified parameters. A trading capability contains the information required to transform incoming EDI documents into JSON or XML outputs.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html */

export interface B2BICapability extends ResourceAttributes {
  Type: 'AWS::B2BI::Capability'
  Properties: {
    /**
     * - Specifies a structure that contains the details for a capability.
     * - _Required_: Yes
     * - _Type_: [CapabilityConfiguration](./aws-properties-b2bi-capability-capabilityconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html#cfn-b2bi-capability-configuration */
    Configuration: CapabilityConfiguration
    /**
     * - Specifies one or more locations in Amazon S3, each specifying an EDI document that can be used with this capability. Each item contains the name of the bucket and the key, to identify the document's location.
     * - _Required_: No
     * - _Type_: Array of [S3Location](./aws-properties-b2bi-capability-s3location.html)
     * - _Minimum_: `0`
     * - _Maximum_: `5`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html#cfn-b2bi-capability-instructionsdocuments */
    InstructionsDocuments?: S3Location[]
    /**
     * - The display name of the capability.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `254`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html#cfn-b2bi-capability-name */
    Name: string | Intrinsic
    /**
     * - Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-b2bi-capability-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html#cfn-b2bi-capability-tags */
    Tags?: Tag[]
    /**
     * - Returns the type of the capability. Currently, only `edi` is supported.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `edi`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-capability.html#cfn-b2bi-capability-type */
    Type: string | Intrinsic
  }
}
