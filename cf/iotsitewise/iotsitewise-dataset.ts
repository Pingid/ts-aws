import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `Tag` property type specifies Property description not available. for an [AWS::IoTSiteWise::Dataset](./aws-resource-iotsitewise-dataset.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dataset.html */

export interface Tag {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dataset.html#cfn-iotsitewise-dataset-tag-key */
    "Key": string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dataset.html#cfn-iotsitewise-dataset-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The `KendraSourceDetail` property type specifies Property description not available. for an [AWS::IoTSiteWise::Dataset](./aws-resource-iotsitewise-dataset.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dataset.html */

export interface KendraSourceDetail {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dataset.html#cfn-iotsitewise-dataset-kendrasourcedetail-knowledgebasearn */
    "KnowledgeBaseArn": string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dataset.html#cfn-iotsitewise-dataset-kendrasourcedetail-rolearn */
    "RoleArn": string | Intrinsic;
}

/**
 * The `SourceDetail` property type specifies Property description not available. for an [AWS::IoTSiteWise::Dataset](./aws-resource-iotsitewise-dataset.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dataset.html */

export interface SourceDetail {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [KendraSourceDetail](./aws-properties-iotsitewise-dataset-kendrasourcedetail.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dataset.html#cfn-iotsitewise-dataset-sourcedetail-kendra */
    "Kendra"?: KendraSourceDetail;
}

/**
 * The `DatasetSource` property type specifies Property description not available. for an [AWS::IoTSiteWise::Dataset](./aws-resource-iotsitewise-dataset.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dataset.html */

export interface DatasetSource {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [SourceDetail](./aws-properties-iotsitewise-dataset-sourcedetail.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dataset.html#cfn-iotsitewise-dataset-datasetsource-sourcedetail */
    "SourceDetail"?: SourceDetail;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `KNOWLEDGE_BASE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dataset.html#cfn-iotsitewise-dataset-datasetsource-sourceformat */
    "SourceFormat": string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `KENDRA`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dataset.html#cfn-iotsitewise-dataset-datasetsource-sourcetype */
    "SourceType": string | Intrinsic;
}

/**
 * The `AWS::IoTSiteWise::Dataset` resource Property description not available. for IoTSiteWise.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dataset.html */

export interface IoTSiteWiseDataset extends ResourceAttributes {
    "Type": "AWS::IoTSiteWise::Dataset";
    "Properties": {
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dataset.html#cfn-iotsitewise-dataset-datasetdescription */
        "DatasetDescription"?: string | Intrinsic;
        /**
         * - Property description not available.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dataset.html#cfn-iotsitewise-dataset-datasetname */
        "DatasetName": string | Intrinsic;
        /**
         * - Property description not available.
         * - _Required_: Yes
         * - _Type_: [DatasetSource](./aws-properties-iotsitewise-dataset-datasetsource.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dataset.html#cfn-iotsitewise-dataset-datasetsource */
        "DatasetSource": DatasetSource;
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-iotsitewise-dataset-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-dataset.html#cfn-iotsitewise-dataset-tags */
        "Tags"?: Tag[];
    };
}