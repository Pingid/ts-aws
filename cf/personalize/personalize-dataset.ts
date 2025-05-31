import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Describes the data source that contains the data to upload to a dataset, or the list of records to delete from Amazon Personalize.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-dataset.html */

export interface DataSource {
    /**
     * - For dataset import jobs, the path to the Amazon S3 bucket where the data that you want to upload to your dataset is stored. For data deletion jobs, the path to the Amazon S3 bucket that stores the list of records to delete.
     * - For example:
     * - `s3://bucket-name/folder-name/fileName.csv`
     * - If your CSV files are in a folder in your Amazon S3 bucket and you want your import job or data deletion job to consider multiple files, you can specify the path to the folder. With a data deletion job, Amazon Personalize uses all files in the folder and any sub folder. Use the following syntax with a `/` after the folder name:
     * - `s3://bucket-name/folder-name/`
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `(s3|http|https)://.+`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-dataset.html#cfn-personalize-dataset-datasource-datalocation */
    "DataLocation"?: string | Intrinsic;
}

/**
 * Describes a job that imports training data from a data source (Amazon S3 bucket) to an Amazon Personalize dataset.
 * A dataset import job can be in one of the following states:
 * *   CREATE PENDING > CREATE IN\_PROGRESS > ACTIVE -or- CREATE FAILED
 * If you specify a dataset import job as part of a dataset, all dataset import job fields are required.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-dataset.html */

export interface DatasetImportJob {
    /**
     * - The Amazon Resource Name (ARN) of the dataset that receives the imported data.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:([a-z\d-]+):personalize:.*:.*:.+`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-dataset.html#cfn-personalize-dataset-datasetimportjob-datasetarn */
    "DatasetArn"?: string | Intrinsic;
    /**
     * - The ARN of the dataset import job.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:([a-z\d-]+):personalize:.*:.*:.+`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-dataset.html#cfn-personalize-dataset-datasetimportjob-datasetimportjobarn */
    "DatasetImportJobArn"?: string | Intrinsic;
    /**
     * - The Amazon S3 bucket that contains the training data to import.
     * - _Required_: No
     * - _Type_: [DataSource](./aws-properties-personalize-dataset-datasource.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-dataset.html#cfn-personalize-dataset-datasetimportjob-datasource */
    "DataSource"?: DataSource;
    /**
     * - The name of the import job.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9\-_]*`
     * - _Minimum_: `1`
     * - _Maximum_: `63`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-dataset.html#cfn-personalize-dataset-datasetimportjob-jobname */
    "JobName"?: string | Intrinsic;
    /**
     * - The ARN of the IAM role that has permissions to read from the Amazon S3 data source.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:([a-z\d-]+):iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-dataset.html#cfn-personalize-dataset-datasetimportjob-rolearn */
    "RoleArn"?: string | Intrinsic;
}

/**
 * Creates an empty dataset and adds it to the specified dataset group. Use [CreateDatasetImportJob](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetImportJob.html) to import your training data to a dataset.
 * There are 5 types of datasets:
 * *   Item interactions
 *     
 * *   Items
 *     
 * *   Users
 *     
 * *   Action interactions (you can't use CloudFormation to create an Action interactions dataset)
 *     
 * *   Actions (you can't use CloudFormation to create an Actions dataset)
 * Each dataset type has an associated schema with required field types. Only the `Item interactions` dataset is required in order to train a model (also referred to as creating a solution).
 * A dataset can be in one of the following states:
 * *   CREATE PENDING > CREATE IN\_PROGRESS > ACTIVE -or- CREATE FAILED
 *     
 * *   DELETE PENDING > DELETE IN\_PROGRESS
 * To get the status of the dataset, call [DescribeDataset](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html).
 * ###### Related APIs
 * 
 * *   [CreateDatasetGroup](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDatasetGroup.html)
 *     
 * *   [ListDatasets](https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasets.html)
 *     
 * *   [DescribeDataset](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDataset.html)
 *     
 * *   [DeleteDataset](https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteDataset.html)
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-dataset.html */

export interface PersonalizeDataset extends ResourceAttributes {
    "Type": "AWS::Personalize::Dataset";
    "Properties": {
        /**
         * - The Amazon Resource Name (ARN) of the dataset group.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `arn:([a-z\d-]+):personalize:.*:.*:.+`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-dataset.html#cfn-personalize-dataset-datasetgrouparn */
        "DatasetGroupArn": string | Intrinsic;
        /**
         * - Describes a job that imports training data from a data source (Amazon S3 bucket) to an Amazon Personalize dataset. If you specify a dataset import job as part of a dataset, all dataset import job fields are required.
         * - _Required_: No
         * - _Type_: [DatasetImportJob](./aws-properties-personalize-dataset-datasetimportjob.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-dataset.html#cfn-personalize-dataset-datasetimportjob */
        "DatasetImportJob"?: DatasetImportJob;
        /**
         * - One of the following values:
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `Interactions | Items | Users`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-dataset.html#cfn-personalize-dataset-datasettype */
        "DatasetType": string | Intrinsic;
        /**
         * - The name of the dataset.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9\-_]*`
         * - _Minimum_: `1`
         * - _Maximum_: `63`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-dataset.html#cfn-personalize-dataset-name */
        "Name": string | Intrinsic;
        /**
         * - The ARN of the associated schema.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `arn:([a-z\d-]+):personalize:.*:.*:.+`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-dataset.html#cfn-personalize-dataset-schemaarn */
        "SchemaArn": string | Intrinsic;
    };
}