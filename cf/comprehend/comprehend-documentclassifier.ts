import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Provide the location for output data from a custom classifier job. This field is mandatory if you are training a native document model.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html */

export interface DocumentClassifierOutputDataConfig {
  /**
   * - ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt the output results from an analysis job. The KmsKeyId can be one of the following formats:
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-documentclassifieroutputdataconfig-kmskeyid */
  KmsKeyId?: string | Intrinsic
  /**
   * - When you use the `OutputDataConfig` object while creating a custom classifier, you specify the Amazon S3 location where you want to write the confusion matrix and other output files. The URI must be in the same Region as the API endpoint that you are calling. The location is used as the prefix for the actual location of this output file.
   * - When the custom classifier job is finished, the service creates the output file in a directory specific to the job. The `S3Uri` field contains the location of the output file, called `output.tar.gz`. It is a compressed archive that contains the confusion matrix.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `s3://[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9](/.*)?`
   * - _Maximum_: `1024`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-documentclassifieroutputdataconfig-s3uri */
  S3Uri?: string | Intrinsic
}

/**
 * A key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with the key-value pair ‘Department’:’Sales’ might be added to a resource to indicate its use by a particular department.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html */

export interface Tag {
  /**
   * - The initial part of a key-value pair that forms a tag associated with a given resource. For instance, if you want to show which resources are used by which departments, you might use “Department” as the key portion of the pair, with multiple possible values such as “sales,” “legal,” and “administration.”
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-tag-key */
  Key: string | Intrinsic
  /**
   * - The second part of a key-value pair that forms a tag associated with a given resource. For instance, if you want to show which resources are used by which departments, you might use “Department” as the initial (key) portion of the pair, with a value of “sales” to indicate the sales department.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-tag-value */
  Value: string | Intrinsic
}

/**
 * Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html */

export interface VpcConfig {
  /**
   * - The ID number for a security group on an instance of your private VPC. Security groups on your VPC function serve as a virtual firewall to control inbound and outbound traffic and provides security for the resources that you’ll be accessing on the VPC. This ID number is preceded by "sg-", for instance: "sg-03b388029b0a285ea". For more information, see [Security Groups for your VPC](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html).
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `32 | 5`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-vpcconfig-securitygroupids */
  SecurityGroupIds: (string | Intrinsic)[]
  /**
   * - The ID for each subnet being used in your private VPC. This subnet is a subset of the a range of IPv4 addresses used by the VPC and is specific to a given availability zone in the VPC’s Region. This ID number is preceded by "subnet-", for instance: "subnet-04ccf456919e69055". For more information, see [VPCs and Subnets](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html).
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `32 | 16`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-vpcconfig-subnets */
  Subnets: (string | Intrinsic)[]
}

/**
 * An augmented manifest file that provides training data for your custom model. An augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html */

export interface AugmentedManifestsListItem {
  /**
   * - The JSON attribute that contains the annotations for your training documents. The number of attribute names that you specify depends on whether your augmented manifest file is the output of a single labeling job or a chained labeling job.
   * - If your file is the output of a single labeling job, specify the LabelAttributeName key that was used when the job was created in Ground Truth.
   * - If your file is the output of a chained labeling job, specify the LabelAttributeName key for one or more jobs in the chain. Each LabelAttributeName key provides the annotations from an individual job.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `63`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-augmentedmanifestslistitem-attributenames */
  AttributeNames: (string | Intrinsic)[]
  /**
   * - The Amazon S3 location of the augmented manifest file.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `s3://[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9](/.*)?`
   * - _Maximum_: `1024`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-augmentedmanifestslistitem-s3uri */
  S3Uri: string | Intrinsic
  /**
   * - The purpose of the data you've provided in the augmented manifest. You can either train or test this data. If you don't specify, the default is train.
   * - TRAIN - all of the documents in the manifest will be used for training. If no test documents are provided, Amazon Comprehend will automatically reserve a portion of the training documents for testing.
   * - TEST - all of the documents in the manifest will be used for testing.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `TRAIN | TEST`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-augmentedmanifestslistitem-split */
  Split?: string | Intrinsic
}

/**
 * Provides configuration parameters to override the default actions for extracting text from PDF documents and image files.
 * By default, Amazon Comprehend performs the following actions to extract text from files, based on the input file type:
 * *   **Word files** - Amazon Comprehend parser extracts the text.
 *
 * *   **Digital PDF files** - Amazon Comprehend parser extracts the text.
 *
 * *   **Image files and scanned PDF files** - Amazon Comprehend uses the Amazon Textract `DetectDocumentText` API to extract the text.
 * `DocumentReaderConfig` does not apply to plain text files or Word files.
 * For image files and PDF documents, you can override these default actions using the fields listed below. For more information, see [Setting text extraction options](https://docs.aws.amazon.com/comprehend/latest/dg/idp-set-textract-options.html) in the Comprehend Developer Guide.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html */

export interface DocumentReaderConfig {
  /**
   * - This field defines the Amazon Textract API operation that Amazon Comprehend uses to extract text from PDF files and image files. Enter one of the following values:
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `TEXTRACT_DETECT_DOCUMENT_TEXT | TEXTRACT_ANALYZE_DOCUMENT`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-documentreaderconfig-documentreadaction */
  DocumentReadAction: string | Intrinsic
  /**
   * - Determines the text extraction actions for PDF files. Enter one of the following values:
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `SERVICE_DEFAULT | FORCE_DOCUMENT_READ_ACTION`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-documentreaderconfig-documentreadmode */
  DocumentReadMode?: string | Intrinsic
  /**
   * - Specifies the type of Amazon Textract features to apply. If you chose `TEXTRACT_ANALYZE_DOCUMENT` as the read action, you must specify one or both of the following values:
   * - _Required_: No
   * - _Type_: Array of String
   * - _Allowed values_: `TABLES | FORMS`
   * - _Minimum_: `1`
   * - _Maximum_: `2`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-documentreaderconfig-featuretypes */
  FeatureTypes?: (string | Intrinsic)[]
}

/**
 * The location of the training documents. This parameter is required in a request to create a semi-structured document classification model.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html */

export interface DocumentClassifierDocuments {
  /**
   * - The S3 URI location of the training documents specified in the S3Uri CSV file.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `s3://[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9](/.*)?`
   * - _Maximum_: `1024`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-documentclassifierdocuments-s3uri */
  S3Uri: string | Intrinsic
  /**
   * - The S3 URI location of the test documents included in the TestS3Uri CSV file. This field is not required if you do not specify a test CSV file.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `s3://[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9](/.*)?`
   * - _Maximum_: `1024`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-documentclassifierdocuments-tests3uri */
  TestS3Uri?: string | Intrinsic
}

/**
 * The input properties for training a document classifier.
 * For more information on how the input file is formatted, see [Preparing training data](https://docs.aws.amazon.com/comprehend/latest/dg/prep-classifier-data.html) in the Comprehend Developer Guide.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html */

export interface DocumentClassifierInputDataConfig {
  /**
   * - A list of augmented manifest files that provide training data for your custom model. An augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth.
   * - This parameter is required if you set `DataFormat` to `AUGMENTED_MANIFEST`.
   * - _Required_: No
   * - _Type_: Array of [AugmentedManifestsListItem](./aws-properties-comprehend-documentclassifier-augmentedmanifestslistitem.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-documentclassifierinputdataconfig-augmentedmanifests */
  AugmentedManifests?: AugmentedManifestsListItem[]
  /**
   * - The format of your training data:
   * - If you don't specify a value, Amazon Comprehend uses `COMPREHEND_CSV` as the default.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `COMPREHEND_CSV | AUGMENTED_MANIFEST`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-documentclassifierinputdataconfig-dataformat */
  DataFormat?: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [DocumentReaderConfig](./aws-properties-comprehend-documentclassifier-documentreaderconfig.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-documentclassifierinputdataconfig-documentreaderconfig */
  DocumentReaderConfig?: DocumentReaderConfig
  /**
   * - The S3 location of the training documents. This parameter is required in a request to create a native document model.
   * - _Required_: No
   * - _Type_: [DocumentClassifierDocuments](./aws-properties-comprehend-documentclassifier-documentclassifierdocuments.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-documentclassifierinputdataconfig-documents */
  Documents?: DocumentClassifierDocuments
  /**
   * - The type of input documents for training the model. Provide plain-text documents to create a plain-text model, and provide semi-structured documents to create a native document model.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `PLAIN_TEXT_DOCUMENT | SEMI_STRUCTURED_DOCUMENT`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-documentclassifierinputdataconfig-documenttype */
  DocumentType?: string | Intrinsic
  /**
   * - Indicates the delimiter used to separate each label for training a multi-label classifier. The default delimiter between labels is a pipe (|). You can use a different character as a delimiter (if it's an allowed character) by specifying it under Delimiter for labels. If the training documents use a delimiter other than the default or the delimiter you specify, the labels on that line will be combined to make a single unique label, such as LABELLABELLABEL.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[ ~!@#$%^*\-_+=|\\:;\t>?/]$`
   * - _Minimum_: `1`
   * - _Maximum_: `1`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-documentclassifierinputdataconfig-labeldelimiter */
  LabelDelimiter?: string | Intrinsic
  /**
   * - The Amazon S3 URI for the input data. The S3 bucket must be in the same Region as the API endpoint that you are calling. The URI can point to a single input file or it can provide the prefix for a collection of input files.
   * - For example, if you use the URI `S3://bucketName/prefix`, if the prefix is a single file, Amazon Comprehend uses that file as input. If more than one file begins with the prefix, Amazon Comprehend uses all of them as input.
   * - This parameter is required if you set `DataFormat` to `COMPREHEND_CSV`.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `s3://[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9](/.*)?`
   * - _Maximum_: `1024`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-documentclassifierinputdataconfig-s3uri */
  S3Uri?: string | Intrinsic
  /**
   * - This specifies the Amazon S3 location that contains the test annotations for the document classifier. The URI must be in the same AWS Region as the API endpoint that you are calling.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `s3://[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9](/.*)?`
   * - _Maximum_: `1024`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-documentclassifierinputdataconfig-tests3uri */
  TestS3Uri?: string | Intrinsic
}

/**
 * This resource creates and trains a document classifier to categorize documents. You provide a set of training documents that are labeled with the categories that you want to identify. After the classifier is trained you can use it to categorize a set of labeled documents into the categories. For more information, see [Document Classification](https://docs.aws.amazon.com/comprehend/latest/dg/how-document-classification.html) in the Comprehend Developer Guide.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html */

export interface ComprehendDocumentClassifier extends ResourceAttributes {
  Type: 'AWS::Comprehend::DocumentClassifier'
  Properties: {
    /**
     * - The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `arn:aws(-[^:]+)?:iam::[0-9]{12}:role/.+`
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-dataaccessrolearn */
    DataAccessRoleArn: string | Intrinsic
    /**
     * - The name of the document classifier.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
     * - _Minimum_: `1`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-documentclassifiername */
    DocumentClassifierName: string | Intrinsic
    /**
     * - Specifies the format and location of the input data for the job.
     * - _Required_: Yes
     * - _Type_: [DocumentClassifierInputDataConfig](./aws-properties-comprehend-documentclassifier-documentclassifierinputdataconfig.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-inputdataconfig */
    InputDataConfig: DocumentClassifierInputDataConfig
    /**
     * - The language of the input documents. You can specify any of the languages supported by Amazon Comprehend. All documents must be in the same language.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `en | es | fr | it | de | pt`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-languagecode */
    LanguageCode: string | Intrinsic
    /**
     * - Indicates the mode in which the classifier will be trained. The classifier can be trained in multi-class (single-label) mode or multi-label mode. Multi-class mode identifies a single class label for each document and multi-label mode identifies one or more class labels for each document. Multiple labels for an individual document are separated by a delimiter. The default delimiter between labels is a pipe (|).
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `MULTI_CLASS | MULTI_LABEL`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-mode */
    Mode?: string | Intrinsic
    /**
     * - ID for the AWS KMS key that Amazon Comprehend uses to encrypt trained custom models. The ModelKmsKeyId can be either of the following formats:
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-modelkmskeyid */
    ModelKmsKeyId?: string | Intrinsic
    /**
     * - The resource-based policy to attach to your custom document classifier model. You can use this policy to allow another AWS account to import your custom model.
     * - Provide your policy as a JSON body that you enter as a UTF-8 encoded string without line breaks. To provide valid JSON, enclose the attribute names and values in double quotes. If the JSON body is also enclosed in double quotes, then you must escape the double quotes that are inside the policy:
     * - `"{\"attribute\": \"value\", \"attribute\": [\"value\"]}"`
     * - To avoid escaping quotes, you can use single quotes to enclose the policy and double quotes to enclose the JSON names and values:
     * - `'{"attribute": "value", "attribute": ["value"]}'`
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[\u0009\u000A\u000D\u0020-\u00FF]+`
     * - _Minimum_: `1`
     * - _Maximum_: `20000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-modelpolicy */
    ModelPolicy?: string | Intrinsic
    /**
     * - Provides output results configuration parameters for custom classifier jobs.
     * - _Required_: No
     * - _Type_: [DocumentClassifierOutputDataConfig](./aws-properties-comprehend-documentclassifier-documentclassifieroutputdataconfig.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-outputdataconfig */
    OutputDataConfig?: DocumentClassifierOutputDataConfig
    /**
     * - Tags to associate with the document classifier. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-comprehend-documentclassifier-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-tags */
    Tags?: Tag[]
    /**
     * - The version name given to the newly created classifier. Version names can have a maximum of 256 characters. Alphanumeric characters, hyphens (-) and underscores (\_) are allowed. The version name must be unique among all models with the same classifier name in the AWS account/AWS Region.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
     * - _Minimum_: `1`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-versionname */
    VersionName?: string | Intrinsic
    /**
     * - ID for the AWS Key Management Service (KMS) key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job. The VolumeKmsKeyId can be either of the following formats:
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-volumekmskeyid */
    VolumeKmsKeyId?: string | Intrinsic
    /**
     * - Configuration parameters for a private Virtual Private Cloud (VPC) containing the resources you are using for your custom classifier. For more information, see [Amazon VPC](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html).
     * - _Required_: No
     * - _Type_: [VpcConfig](./aws-properties-comprehend-documentclassifier-vpcconfig.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-comprehend-documentclassifier.html#cfn-comprehend-documentclassifier-vpcconfig */
    VpcConfig?: VpcConfig
  }
}
