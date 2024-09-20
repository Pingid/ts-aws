import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * An AWS Key Management Service (KMS) key and an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key. You can specify this optional object in the CreateDataset and CreatePredictor requests.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-dataset.html */

export interface EncryptionConfig {
  /**
   * - The Amazon Resource Name (ARN) of the KMS key.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `arn:aws[-a-z]*:kms:.*:key/.*`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-dataset.html#cfn-forecast-dataset-encryptionconfig-kmskeyarn */
  KmsKeyArn?: string | Intrinsic
  /**
   * - The ARN of the IAM role that Amazon Forecast can assume to access the AWS KMS key.
   * - Passing a role across AWS accounts is not allowed. If you pass a role that isn't in your account, you get an `InvalidInputException` error.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9\-\_\.\/\:]+$`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-dataset.html#cfn-forecast-dataset-encryptionconfig-rolearn */
  RoleArn?: string | Intrinsic
}

/**
 * The `TagsItems` property type specifies Property description not available. for an [AWS::Forecast::Dataset](./aws-resource-forecast-dataset.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-dataset.html */

export interface TagsItems {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-dataset.html#cfn-forecast-dataset-tagsitems-key */
  Key: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-dataset.html#cfn-forecast-dataset-tagsitems-value */
  Value: string | Intrinsic
}

/**
 * The `AttributesItems` property type specifies Property description not available. for an [AWS::Forecast::Dataset](./aws-resource-forecast-dataset.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-dataset.html */

export interface AttributesItems {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z][a-zA-Z0-9_]*`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-dataset.html#cfn-forecast-dataset-attributesitems-attributename */
  AttributeName?: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `string | integer | float | timestamp | geolocation`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-dataset.html#cfn-forecast-dataset-attributesitems-attributetype */
  AttributeType?: string | Intrinsic
}

/**
 * Defines the fields of a dataset.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-dataset.html */

export interface Schema {
  /**
   * - An array of attributes specifying the name and type of each field in a dataset.
   * - _Required_: No
   * - _Type_: Array of [AttributesItems](./aws-properties-forecast-dataset-attributesitems.html)
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-dataset.html#cfn-forecast-dataset-schema-attributes */
  Attributes?: AttributesItems[]
}

/**
 * Creates an Amazon Forecast dataset.
 * ###### Important
 *
 * Amazon Forecast is no longer available to new customers. Existing customers of Amazon Forecast can continue to use the service as normal. [Learn more"](https://aws.amazon.com/blogs/machine-learning/transition-your-amazon-forecast-usage-to-amazon-sagemaker-canvas/)
 * The information about the dataset that you provide helps Forecast understand how to consume the data for model training. This includes the following:
 * *   _`DataFrequency`_ \- How frequently your historical time-series data is collected.
 *
 * *   _`Domain`_ and _`DatasetType`_ \- Each dataset has an associated dataset domain and a type within the domain. Amazon Forecast provides a list of predefined domains and types within each domain. For each unique dataset domain and type within the domain, Amazon Forecast requires your data to include a minimum set of predefined fields.
 *
 * *   _`Schema`_ \- A schema specifies the fields in the dataset, including the field name and data type.
 * After creating a dataset, you import your training data into it and add the dataset to a dataset group. You use the dataset group to create a predictor. For more information, see [Importing datasets](https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html).
 * To get a list of all your datasets, use the [ListDatasets](https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasets.html) operation.
 * For example Forecast datasets, see the [Amazon Forecast Sample GitHub repository](https://github.com/aws-samples/amazon-forecast-samples).
 * ###### Note
 *
 * The `Status` of a dataset must be `ACTIVE` before you can import training data. Use the [DescribeDataset](https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html) operation to get the status.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-dataset.html */

export interface ForecastDataset extends ResourceAttributes {
  Type: 'AWS::Forecast::Dataset'
  Properties: {
    /**
     * - The frequency of data collection. This parameter is required for RELATED\_TIME\_SERIES datasets.
     * - Valid intervals are an integer followed by Y (Year), M (Month), W (Week), D (Day), H (Hour), and min (Minute). For example, "1D" indicates every day and "15min" indicates every 15 minutes. You cannot specify a value that would overlap with the next larger frequency. That means, for example, you cannot specify a frequency of 60 minutes, because that is equivalent to 1 hour. The valid values for each frequency are the following:
     * - Thus, if you want every other week forecasts, specify "2W". Or, if you want quarterly forecasts, you specify "3M".
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^Y|M|W|D|H|30min|15min|10min|5min|1min$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-dataset.html#cfn-forecast-dataset-datafrequency */
    DataFrequency?: string | Intrinsic
    /**
     * - The name of the dataset.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z][a-zA-Z0-9_]*`
     * - _Minimum_: `1`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-dataset.html#cfn-forecast-dataset-datasetname */
    DatasetName: string | Intrinsic
    /**
     * - The dataset type.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `TARGET_TIME_SERIES | RELATED_TIME_SERIES | ITEM_METADATA`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-dataset.html#cfn-forecast-dataset-datasettype */
    DatasetType: string | Intrinsic
    /**
     * - The domain associated with the dataset.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `RETAIL | CUSTOM | INVENTORY_PLANNING | EC2_CAPACITY | WORK_FORCE | WEB_TRAFFIC | METRICS`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-dataset.html#cfn-forecast-dataset-domain */
    Domain: string | Intrinsic
    /**
     * - A Key Management Service (KMS) key and the Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key.
     * - _Required_: No
     * - _Type_: [EncryptionConfig](./aws-properties-forecast-dataset-encryptionconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-dataset.html#cfn-forecast-dataset-encryptionconfig */
    EncryptionConfig?: EncryptionConfig
    /**
     * - The schema for the dataset. The schema attributes and their order must match the fields in your data. The dataset `Domain` and `DatasetType` that you choose determine the minimum required fields in your training data. For information about the required fields for a specific dataset domain and type, see [Dataset Domains and Dataset Types](https://docs.aws.amazon.com/forecast/latest/dg/howitworks-domains-ds-types.html).
     * - _Required_: Yes
     * - _Type_: [Schema](./aws-properties-forecast-dataset-schema.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-dataset.html#cfn-forecast-dataset-schema */
    Schema: Schema
    /**
     * - An array of key-value pairs to apply to this resource.
     * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     * - _Required_: No
     * - _Type_: Array of [TagsItems](./aws-properties-forecast-dataset-tagsitems.html)
     * - _Minimum_: `0`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-forecast-dataset.html#cfn-forecast-dataset-tags */
    Tags?: TagsItems[]
  }
}
