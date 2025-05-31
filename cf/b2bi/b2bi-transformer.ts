import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `Mapping` property type specifies Property description not available. for an [AWS::B2BI::Transformer](./aws-resource-b2bi-transformer.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html */

export interface Mapping {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `350000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-mapping-template */
    "Template"?: string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `XSLT | JSONATA`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-mapping-templatelanguage */
    "TemplateLanguage": string | Intrinsic;
}

/**
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
    "Key": string | Intrinsic;
    /**
     * - Contains one or more values that you assigned to the key name that you create.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The `OutputConversion` property type specifies Property description not available. for an [AWS::B2BI::Transformer](./aws-resource-b2bi-transformer.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html */

export interface OutputConversion {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [FormatOptions](./aws-properties-b2bi-transformer-formatoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-outputconversion-formatoptions */
    "FormatOptions"?: FormatOptions;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `X12`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-outputconversion-toformat */
    "ToFormat": string | Intrinsic;
}

/**
 * The `SampleDocumentKeys` property type specifies Property description not available. for an [AWS::B2BI::Transformer](./aws-resource-b2bi-transformer.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html */

export interface SampleDocumentKeys {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-sampledocumentkeys-input */
    "Input"?: string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-sampledocumentkeys-output */
    "Output"?: string | Intrinsic;
}

/**
 * The `SampleDocuments` property type specifies Property description not available. for an [AWS::B2BI::Transformer](./aws-resource-b2bi-transformer.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html */

export interface SampleDocuments {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `3`
     * - _Maximum_: `63`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-sampledocuments-bucketname */
    "BucketName": string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: Array of [SampleDocumentKeys](./aws-properties-b2bi-transformer-sampledocumentkeys.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-sampledocuments-keys */
    "Keys": SampleDocumentKeys[];
}

/**
 * A structure that contains the X12 transaction set and version. The X12 structure is used when the system transforms an EDI (electronic data interchange) file.
 * ###### Note
 * 
 * If an EDI input file contains more than one transaction, each transaction must have the same transaction set and version, for example 214/4010. If not, the transformer cannot parse the file.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html */

export interface X12Details {
    /**
     * - Returns an enumerated type where each value identifies an X12 transaction set. Transaction sets are maintained by the X12 Accredited Standards Committee.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `X12_100 | X12_101 | X12_102 | X12_103 | X12_104 | X12_105 | X12_106 | X12_107 | X12_108 | X12_109 | X12_110 | X12_111 | X12_112 | X12_113 | X12_120 | X12_121 | X12_124 | X12_125 | X12_126 | X12_127 | X12_128 | X12_129 | X12_130 | X12_131 | X12_132 | X12_133 | X12_135 | X12_138 | X12_139 | X12_140 | X12_141 | X12_142 | X12_143 | X12_144 | X12_146 | X12_147 | X12_148 | X12_149 | X12_150 | X12_151 | X12_152 | X12_153 | X12_154 | X12_155 | X12_157 | X12_158 | X12_159 | X12_160 | X12_161 | X12_163 | X12_170 | X12_175 | X12_176 | X12_179 | X12_180 | X12_185 | X12_186 | X12_187 | X12_188 | X12_189 | X12_190 | X12_191 | X12_194 | X12_195 | X12_196 | X12_197 | X12_198 | X12_199 | X12_200 | X12_201 | X12_202 | X12_203 | X12_204 | X12_205 | X12_206 | X12_210 | X12_211 | X12_212 | X12_213 | X12_214 | X12_215 | X12_216 | X12_217 | X12_218 | X12_219 | X12_220 | X12_222 | X12_223 | X12_224 | X12_225 | X12_227 | X12_228 | X12_240 | X12_242 | X12_244 | X12_245 | X12_248 | X12_249 | X12_250 | X12_251 | X12_252 | X12_255 | X12_256 | X12_259 | X12_260 | X12_261 | X12_262 | X12_263 | X12_264 | X12_265 | X12_266 | X12_267 | X12_268 | X12_269 | X12_270 | X12_271 | X12_272 | X12_273 | X12_274 | X12_275 | X12_276 | X12_277 | X12_278 | X12_280 | X12_283 | X12_284 | X12_285 | X12_286 | X12_288 | X12_290 | X12_300 | X12_301 | X12_303 | X12_304 | X12_309 | X12_310 | X12_311 | X12_312 | X12_313 | X12_315 | X12_317 | X12_319 | X12_322 | X12_323 | X12_324 | X12_325 | X12_326 | X12_350 | X12_352 | X12_353 | X12_354 | X12_355 | X12_356 | X12_357 | X12_358 | X12_361 | X12_362 | X12_404 | X12_410 | X12_412 | X12_414 | X12_417 | X12_418 | X12_419 | X12_420 | X12_421 | X12_422 | X12_423 | X12_424 | X12_425 | X12_426 | X12_429 | X12_431 | X12_432 | X12_433 | X12_434 | X12_435 | X12_436 | X12_437 | X12_440 | X12_451 | X12_452 | X12_453 | X12_455 | X12_456 | X12_460 | X12_463 | X12_466 | X12_468 | X12_470 | X12_475 | X12_485 | X12_486 | X12_490 | X12_492 | X12_494 | X12_500 | X12_501 | X12_503 | X12_504 | X12_511 | X12_517 | X12_521 | X12_527 | X12_536 | X12_540 | X12_561 | X12_567 | X12_568 | X12_601 | X12_602 | X12_620 | X12_625 | X12_650 | X12_715 | X12_753 | X12_754 | X12_805 | X12_806 | X12_810 | X12_811 | X12_812 | X12_813 | X12_814 | X12_815 | X12_816 | X12_818 | X12_819 | X12_820 | X12_821 | X12_822 | X12_823 | X12_824 | X12_826 | X12_827 | X12_828 | X12_829 | X12_830 | X12_831 | X12_832 | X12_833 | X12_834 | X12_835 | X12_836 | X12_837 | X12_838 | X12_839 | X12_840 | X12_841 | X12_842 | X12_843 | X12_844 | X12_845 | X12_846 | X12_847 | X12_848 | X12_849 | X12_850 | X12_851 | X12_852 | X12_853 | X12_854 | X12_855 | X12_856 | X12_857 | X12_858 | X12_859 | X12_860 | X12_861 | X12_862 | X12_863 | X12_864 | X12_865 | X12_866 | X12_867 | X12_868 | X12_869 | X12_870 | X12_871 | X12_872 | X12_873 | X12_874 | X12_875 | X12_876 | X12_877 | X12_878 | X12_879 | X12_880 | X12_881 | X12_882 | X12_883 | X12_884 | X12_885 | X12_886 | X12_887 | X12_888 | X12_889 | X12_891 | X12_893 | X12_894 | X12_895 | X12_896 | X12_920 | X12_924 | X12_925 | X12_926 | X12_928 | X12_940 | X12_943 | X12_944 | X12_945 | X12_947 | X12_980 | X12_990 | X12_993 | X12_996 | X12_997 | X12_998 | X12_999 | X12_270_X279 | X12_271_X279 | X12_275_X210 | X12_275_X211 | X12_276_X212 | X12_277_X212 | X12_277_X214 | X12_277_X364 | X12_278_X217 | X12_820_X218 | X12_820_X306 | X12_824_X186 | X12_834_X220 | X12_834_X307 | X12_834_X318 | X12_835_X221 | X12_837_X222 | X12_837_X223 | X12_837_X224 | X12_837_X291 | X12_837_X292 | X12_837_X298 | X12_999_X231`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-x12details-transactionset */
    "TransactionSet"?: string | Intrinsic;
    /**
     * - Returns the version to use for the specified X12 transaction set.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `VERSION_4010 | VERSION_4030 | VERSION_4050 | VERSION_4060 | VERSION_5010 | VERSION_5010_HIPAA`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-x12details-version */
    "Version"?: string | Intrinsic;
}

/**
 * The `FormatOptions` property type specifies Property description not available. for an [AWS::B2BI::Transformer](./aws-resource-b2bi-transformer.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html */

export interface FormatOptions {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: [X12Details](./aws-properties-b2bi-transformer-x12details.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-formatoptions-x12 */
    "X12": X12Details;
}

/**
 * The `InputConversion` property type specifies Property description not available. for an [AWS::B2BI::Transformer](./aws-resource-b2bi-transformer.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html */

export interface InputConversion {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [FormatOptions](./aws-properties-b2bi-transformer-formatoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-inputconversion-formatoptions */
    "FormatOptions"?: FormatOptions;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `X12`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-inputconversion-fromformat */
    "FromFormat": string | Intrinsic;
}

/**
 * Creates a transformer. AWS B2B Data Interchange currently supports two scenarios:
 * *   _Inbound EDI_: the AWS customer receives an EDI file from their trading partner. AWS B2B Data Interchange converts this EDI file into a JSON or XML file with a service-defined structure. A mapping template provided by the customer, in JSONata or XSLT format, is optionally applied to this file to produce a JSON or XML file with the structure the customer requires.
 *     
 * *   _Outbound EDI_: the AWS customer has a JSON or XML file containing data that they wish to use in an EDI file. A mapping template, provided by the customer (in either JSONata or XSLT format) is applied to this file to generate a JSON or XML file in the service-defined structure. This file is then converted to an EDI file.
 * ###### Note
 * 
 * The following fields are provided for backwards compatibility only: `fileFormat`, `mappingTemplate`, `ediType`, and `sampleDocument`.
 * 
 * *   Use the `mapping` data type in place of `mappingTemplate` and `fileFormat`
 *     
 * *   Use the `sampleDocuments` data type in place of `sampleDocument`
 *     
 * *   Use either the `inputConversion` or `outputConversion` in place of `ediType`
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html */

export interface B2BITransformer extends ResourceAttributes {
    "Type": "AWS::B2BI::Transformer";
    "Properties": {
        /**
         * - Returns a structure that contains the format options for the transformation.
         * - _Required_: No
         * - _Type_: [InputConversion](./aws-properties-b2bi-transformer-inputconversion.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-inputconversion */
        "InputConversion"?: InputConversion;
        /**
         * - Returns the structure that contains the mapping template and its language (either XSLT or JSONATA).
         * - _Required_: No
         * - _Type_: [Mapping](./aws-properties-b2bi-transformer-mapping.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-mapping */
        "Mapping"?: Mapping;
        /**
         * - Returns the descriptive name for the transformer.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9_-]{1,512}$`
         * - _Minimum_: `1`
         * - _Maximum_: `254`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-name */
        "Name": string | Intrinsic;
        /**
         * - Returns the `OutputConversion` object, which contains the format options for the outbound transformation.
         * - _Required_: No
         * - _Type_: [OutputConversion](./aws-properties-b2bi-transformer-outputconversion.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-outputconversion */
        "OutputConversion"?: OutputConversion;
        /**
         * - Returns a structure that contains the Amazon S3 bucket and an array of the corresponding keys used to identify the location for your sample documents.
         * - _Required_: No
         * - _Type_: [SampleDocuments](./aws-properties-b2bi-transformer-sampledocuments.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-sampledocuments */
        "SampleDocuments"?: SampleDocuments;
        /**
         * - Returns the state of the newly created transformer. The transformer can be either `active` or `inactive`. For the transformer to be used in a capability, its status must `active`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `active | inactive`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-status */
        "Status": string | Intrinsic;
        /**
         * - A key-value pair for a specific transformer. Tags are metadata that you can use to search for and group capabilities for various purposes.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-b2bi-transformer-tag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-b2bi-transformer.html#cfn-b2bi-transformer-tags */
        "Tags"?: Tag[];
    };
}