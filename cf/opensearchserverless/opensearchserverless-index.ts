import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * An OpenSearch Serverless index resource
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-index.html */

export interface Index {
    /**
     * - Enable or disable k-nearest neighbor search capability.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-index.html#cfn-opensearchserverless-index-index-knn */
    "Knn"?: boolean | Intrinsic;
    /**
     * - The size of the dynamic list for the nearest neighbors.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-index.html#cfn-opensearchserverless-index-index-knnalgoparamefsearch */
    "KnnAlgoParamEfSearch"?: number | Intrinsic;
    /**
     * - How often to perform a refresh operation. For example, 1s or 5s.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-index.html#cfn-opensearchserverless-index-index-refreshinterval */
    "RefreshInterval"?: string | Intrinsic;
}

/**
 * Index settings for the OpenSearch Serverless index.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-index.html */

export interface IndexSettings {
    /**
     * - Index settings.
     * - _Required_: No
     * - _Type_: [Index](./aws-properties-opensearchserverless-index-index.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-index.html#cfn-opensearchserverless-index-indexsettings-index */
    "Index"?: Index;
}

/**
 * Additional parameters for the k-NN algorithm.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-index.html */

export interface Parameters {
    /**
     * - The size of the dynamic list used during k-NN graph creation.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-index.html#cfn-opensearchserverless-index-parameters-efconstruction */
    "EfConstruction"?: number | Intrinsic;
    /**
     * - Number of neighbors to consider during k-NN search.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `2`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-index.html#cfn-opensearchserverless-index-parameters-m */
    "M"?: number | Intrinsic;
}

/**
 * Configuration for k-NN search method.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-index.html */

export interface Method {
    /**
     * - The k-NN search engine to use
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `nmslib | faiss | lucene`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-index.html#cfn-opensearchserverless-index-method-engine */
    "Engine": string | Intrinsic;
    /**
     * - The algorithm name for k-NN search.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `hnsw | ivf`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-index.html#cfn-opensearchserverless-index-method-name */
    "Name": string | Intrinsic;
    /**
     * - Additional parameters for the k-NN algorithm.
     * - _Required_: No
     * - _Type_: [Parameters](./aws-properties-opensearchserverless-index-parameters.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-index.html#cfn-opensearchserverless-index-method-parameters */
    "Parameters"?: Parameters;
    /**
     * - The distance function used for k-NN search.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `l2 | l1 | linf | cosinesimil | innerproduct | hamming`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-index.html#cfn-opensearchserverless-index-method-spacetype */
    "SpaceType"?: string | Intrinsic;
}

/**
 * Property mappings for the OpenSearch Serverless index.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-index.html */

export interface PropertyMapping {
    /**
     * - Dimension size for vector fields, defines the number of dimensions in the vector.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-index.html#cfn-opensearchserverless-index-propertymapping-dimension */
    "Dimension"?: number | Intrinsic;
    /**
     * - Whether a field should be indexed.
     * - _Required_: No
     * - _Type_: [Boolean](./aws-properties-opensearchserverless-index-index.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-index.html#cfn-opensearchserverless-index-propertymapping-index */
    "Index"?: boolean | Intrinsic;
    /**
     * - Configuration for k-NN search method.
     * - _Required_: No
     * - _Type_: [Method](./aws-properties-opensearchserverless-index-method.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-index.html#cfn-opensearchserverless-index-propertymapping-method */
    "Method"?: Method;
    /**
     * - Defines the fields within the mapping, including their types and configurations.
     * - _Required_: No
     * - _Type_: Object of [PropertyMapping](./aws-properties-opensearchserverless-index-propertymapping.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-index.html#cfn-opensearchserverless-index-propertymapping-properties */
    "Properties"?: Record<string, PropertyMapping>;
    /**
     * - The field data type. Must be a valid OpenSearch field type.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `text | knn_vector`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-index.html#cfn-opensearchserverless-index-propertymapping-type */
    "Type": string | Intrinsic;
    /**
     * - Default value for the field when not specified in a document.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-index.html#cfn-opensearchserverless-index-propertymapping-value */
    "Value"?: string | Intrinsic;
}

/**
 * Index mappings for the OpenSearch Serverless index.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-index.html */

export interface Mappings {
    /**
     * - Nested fields within an object or nested field type.
     * - _Required_: No
     * - _Type_: Object of [PropertyMapping](./aws-properties-opensearchserverless-index-propertymapping.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-index.html#cfn-opensearchserverless-index-mappings-properties */
    "Properties"?: Record<string, PropertyMapping>;
}

/**
 * An OpenSearch Serverless index resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-index.html */

export interface OpenSearchServerlessIndex extends ResourceAttributes {
    "Type": "AWS::OpenSearchServerless::Index";
    "Properties": {
        /**
         * - The endpoint for the collection.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-index.html#cfn-opensearchserverless-index-collectionendpoint */
        "CollectionEndpoint": string | Intrinsic;
        /**
         * - The name of the OpenSearch Serverless index.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^(?![_-])[a-z][a-z0-9_-]*$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-index.html#cfn-opensearchserverless-index-indexname */
        "IndexName": string | Intrinsic;
        /**
         * - Index mappings for the OpenSearch Serverless index.
         * - _Required_: No
         * - _Type_: [Mappings](./aws-properties-opensearchserverless-index-mappings.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-index.html#cfn-opensearchserverless-index-mappings */
        "Mappings"?: Mappings;
        /**
         * - Index settings for the OpenSearch Serverless index.
         * - _Required_: No
         * - _Type_: [IndexSettings](./aws-properties-opensearchserverless-index-indexsettings.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-index.html#cfn-opensearchserverless-index-settings */
        "Settings"?: IndexSettings;
    };
}