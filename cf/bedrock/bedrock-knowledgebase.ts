import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Settings for an Amazon Kendra knowledge base.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface KendraKnowledgeBaseConfiguration {
    /**
     * - The ARN of the Amazon Kendra index.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws(|-cn|-us-gov):kendra:[a-z0-9-]{1,20}:([0-9]{12}|):index/([a-zA-Z0-9][a-zA-Z0-9-]{35}|[a-zA-Z0-9][a-zA-Z0-9-]{35}-[a-zA-Z0-9][a-zA-Z0-9-]{35})$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-kendraknowledgebaseconfiguration-kendraindexarn */
    "KendraIndexArn": string | Intrinsic;
}

/**
 * Contains the names of the fields to which to map information about the vector store.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface MongoDbAtlasFieldMapping {
    /**
     * - The name of the field in which Amazon Bedrock stores metadata about the vector store.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*$`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-mongodbatlasfieldmapping-metadatafield */
    "MetadataField": string | Intrinsic;
    /**
     * - The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*$`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-mongodbatlasfieldmapping-textfield */
    "TextField": string | Intrinsic;
    /**
     * - The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*$`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-mongodbatlasfieldmapping-vectorfield */
    "VectorField": string | Intrinsic;
}

/**
 * Contains details about the storage configuration of the knowledge base in MongoDB Atlas.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface MongoDbAtlasConfiguration {
    /**
     * - The collection name of the knowledge base in MongoDB Atlas.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*$`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-mongodbatlasconfiguration-collectionname */
    "CollectionName": string | Intrinsic;
    /**
     * - The Amazon Resource Name (ARN) of the secret that you created in AWS Secrets Manager that contains user credentials for your MongoDB Atlas cluster.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws(|-cn|-us-gov):secretsmanager:[a-z0-9-]{1,20}:([0-9]{12}|):secret:[a-zA-Z0-9!/_+=.@-]{1,512}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-mongodbatlasconfiguration-credentialssecretarn */
    "CredentialsSecretArn": string | Intrinsic;
    /**
     * - The database name in your MongoDB Atlas cluster for your knowledge base.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*$`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-mongodbatlasconfiguration-databasename */
    "DatabaseName": string | Intrinsic;
    /**
     * - The endpoint URL of your MongoDB Atlas cluster for your knowledge base.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+\.mongodb\.net$`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-mongodbatlasconfiguration-endpoint */
    "Endpoint": string | Intrinsic;
    /**
     * - The name of the VPC endpoint service in your account that is connected to your MongoDB Atlas cluster.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^(?:arn:aws(?:-us-gov|-cn|-iso|-iso-[a-z])*:.+:.*:\d+:.+/.+$|[a-zA-Z0-9*]+[a-zA-Z0-9._-]*)$`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-mongodbatlasconfiguration-endpointservicename */
    "EndpointServiceName"?: string | Intrinsic;
    /**
     * - Contains the names of the fields to which to map information about the vector store.
     * - _Required_: Yes
     * - _Type_: [MongoDbAtlasFieldMapping](./aws-properties-bedrock-knowledgebase-mongodbatlasfieldmapping.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-mongodbatlasconfiguration-fieldmapping */
    "FieldMapping": MongoDbAtlasFieldMapping;
    /**
     * - The name of the text search index in the MongoDB collection. This is required for using the hybrid search feature.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^.*$`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-mongodbatlasconfiguration-textindexname */
    "TextIndexName"?: string | Intrinsic;
    /**
     * - The name of the MongoDB Atlas vector search index.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*$`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-mongodbatlasconfiguration-vectorindexname */
    "VectorIndexName": string | Intrinsic;
}

/**
 * Contains the names of the fields to which to map information about the vector store.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface OpenSearchManagedClusterFieldMapping {
    /**
     * - The name of the field in which Amazon Bedrock stores metadata about the vector store.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*$`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-opensearchmanagedclusterfieldmapping-metadatafield */
    "MetadataField": string | Intrinsic;
    /**
     * - The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*$`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-opensearchmanagedclusterfieldmapping-textfield */
    "TextField": string | Intrinsic;
    /**
     * - The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*$`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-opensearchmanagedclusterfieldmapping-vectorfield */
    "VectorField": string | Intrinsic;
}

/**
 * Contains details about the Managed Cluster configuration of the knowledge base in Amazon OpenSearch Service. For more information, see [Create a vector index in OpenSearch Managed Cluster](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-osm.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface OpenSearchManagedClusterConfiguration {
    /**
     * - The Amazon Resource Name (ARN) of the OpenSearch domain.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws(|-cn|-us-gov|-iso):es:[a-z]{2}(-gov)?-[a-z]+-\d{1}:\d{12}:domain/[a-z][a-z0-9-]{3,28}$`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-opensearchmanagedclusterconfiguration-domainarn */
    "DomainArn": string | Intrinsic;
    /**
     * - The endpoint URL the OpenSearch domain.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^https://.*$`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-opensearchmanagedclusterconfiguration-domainendpoint */
    "DomainEndpoint": string | Intrinsic;
    /**
     * - Contains the names of the fields to which to map information about the vector store.
     * - _Required_: Yes
     * - _Type_: [OpenSearchManagedClusterFieldMapping](./aws-properties-bedrock-knowledgebase-opensearchmanagedclusterfieldmapping.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-opensearchmanagedclusterconfiguration-fieldmapping */
    "FieldMapping": OpenSearchManagedClusterFieldMapping;
    /**
     * - The name of the vector store.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?![\-_+.])[a-z0-9][a-z0-9\-_\.]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-opensearchmanagedclusterconfiguration-vectorindexname */
    "VectorIndexName": string | Intrinsic;
}

/**
 * Contains the names of the fields to which to map information about the vector store.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface NeptuneAnalyticsFieldMapping {
    /**
     * - The name of the field in which Amazon Bedrock stores metadata about the vector store.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*$`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-neptuneanalyticsfieldmapping-metadatafield */
    "MetadataField": string | Intrinsic;
    /**
     * - The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*$`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-neptuneanalyticsfieldmapping-textfield */
    "TextField": string | Intrinsic;
}

/**
 * Contains details about the storage configuration of the knowledge base in Amazon Neptune Analytics. For more information, see [Create a vector index in Amazon Neptune Analytics](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-neptune.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface NeptuneAnalyticsConfiguration {
    /**
     * - Contains the names of the fields to which to map information about the vector store.
     * - _Required_: Yes
     * - _Type_: [NeptuneAnalyticsFieldMapping](./aws-properties-bedrock-knowledgebase-neptuneanalyticsfieldmapping.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-neptuneanalyticsconfiguration-fieldmapping */
    "FieldMapping": NeptuneAnalyticsFieldMapping;
    /**
     * - The Amazon Resource Name (ARN) of the Neptune Analytics vector store.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws(|-cn|-us-gov):neptune-graph:[a-zA-Z0-9-]*:[0-9]{12}:graph\/g-[a-zA-Z0-9]{10}$`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-neptuneanalyticsconfiguration-grapharn */
    "GraphArn": string | Intrinsic;
}

/**
 * Contains the names of the fields to which to map information about the vector store.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface OpenSearchServerlessFieldMapping {
    /**
     * - The name of the field in which Amazon Bedrock stores metadata about the vector store.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*$`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-opensearchserverlessfieldmapping-metadatafield */
    "MetadataField": string | Intrinsic;
    /**
     * - The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*$`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-opensearchserverlessfieldmapping-textfield */
    "TextField": string | Intrinsic;
    /**
     * - The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*$`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-opensearchserverlessfieldmapping-vectorfield */
    "VectorField": string | Intrinsic;
}

/**
 * Contains details about the storage configuration of the knowledge base in Amazon OpenSearch Service. For more information, see [Create a vector index in Amazon OpenSearch Service](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-oss.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface OpenSearchServerlessConfiguration {
    /**
     * - The Amazon Resource Name (ARN) of the OpenSearch Service vector store.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws(|-cn|-us-gov|-iso):aoss:[a-z]{2}(-gov)?-[a-z]+-\d{1}:\d{12}:collection/[a-z0-9-]{3,32}$`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-opensearchserverlessconfiguration-collectionarn */
    "CollectionArn": string | Intrinsic;
    /**
     * - Contains the names of the fields to which to map information about the vector store.
     * - _Required_: Yes
     * - _Type_: [OpenSearchServerlessFieldMapping](./aws-properties-bedrock-knowledgebase-opensearchserverlessfieldmapping.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-opensearchserverlessconfiguration-fieldmapping */
    "FieldMapping": OpenSearchServerlessFieldMapping;
    /**
     * - The name of the vector store.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*$`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-opensearchserverlessconfiguration-vectorindexname */
    "VectorIndexName": string | Intrinsic;
}

/**
 * Contains the names of the fields to which to map information about the vector store.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface PineconeFieldMapping {
    /**
     * - The name of the field in which Amazon Bedrock stores metadata about the vector store.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*$`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-pineconefieldmapping-metadatafield */
    "MetadataField": string | Intrinsic;
    /**
     * - The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*$`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-pineconefieldmapping-textfield */
    "TextField": string | Intrinsic;
}

/**
 * Contains details about the storage configuration of the knowledge base in Pinecone. For more information, see [Create a vector index in Pinecone](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-pinecone.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface PineconeConfiguration {
    /**
     * - The endpoint URL for your index management page.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*$`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-pineconeconfiguration-connectionstring */
    "ConnectionString": string | Intrinsic;
    /**
     * - The Amazon Resource Name (ARN) of the secret that you created in AWS Secrets Manager that is linked to your Pinecone API key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws(|-cn|-us-gov):secretsmanager:[a-z0-9-]{1,20}:([0-9]{12}|):secret:[a-zA-Z0-9!/_+=.@-]{1,512}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-pineconeconfiguration-credentialssecretarn */
    "CredentialsSecretArn": string | Intrinsic;
    /**
     * - Contains the names of the fields to which to map information about the vector store.
     * - _Required_: Yes
     * - _Type_: [PineconeFieldMapping](./aws-properties-bedrock-knowledgebase-pineconefieldmapping.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-pineconeconfiguration-fieldmapping */
    "FieldMapping": PineconeFieldMapping;
    /**
     * - The namespace to be used to write new data to your database.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^.*$`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-pineconeconfiguration-namespace */
    "Namespace"?: string | Intrinsic;
}

/**
 * Contains the names of the fields to which to map information about the vector store.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface RdsFieldMapping {
    /**
     * - Provide a name for the universal metadata field where Amazon Bedrock will store any custom metadata from your data source.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_\-]+$`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-rdsfieldmapping-custommetadatafield */
    "CustomMetadataField"?: string | Intrinsic;
    /**
     * - The name of the field in which Amazon Bedrock stores metadata about the vector store.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_\-]+$`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-rdsfieldmapping-metadatafield */
    "MetadataField": string | Intrinsic;
    /**
     * - The name of the field in which Amazon Bedrock stores the ID for each entry.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_\-]+$`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-rdsfieldmapping-primarykeyfield */
    "PrimaryKeyField": string | Intrinsic;
    /**
     * - The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_\-]+$`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-rdsfieldmapping-textfield */
    "TextField": string | Intrinsic;
    /**
     * - The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_\-]+$`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-rdsfieldmapping-vectorfield */
    "VectorField": string | Intrinsic;
}

/**
 * Contains details about the storage configuration of the knowledge base in Amazon RDS. For more information, see [Create a vector index in Amazon RDS](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-rds.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface RdsConfiguration {
    /**
     * - The Amazon Resource Name (ARN) of the secret that you created in AWS Secrets Manager that is linked to your Amazon RDS database.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws(|-cn|-us-gov):secretsmanager:[a-z0-9-]{1,20}:([0-9]{12}|):secret:[a-zA-Z0-9!/_+=.@-]{1,512}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-rdsconfiguration-credentialssecretarn */
    "CredentialsSecretArn": string | Intrinsic;
    /**
     * - The name of your Amazon RDS database.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_\-]+$`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-rdsconfiguration-databasename */
    "DatabaseName": string | Intrinsic;
    /**
     * - Contains the names of the fields to which to map information about the vector store.
     * - _Required_: Yes
     * - _Type_: [RdsFieldMapping](./aws-properties-bedrock-knowledgebase-rdsfieldmapping.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-rdsconfiguration-fieldmapping */
    "FieldMapping": RdsFieldMapping;
    /**
     * - The Amazon Resource Name (ARN) of the vector store.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws(|-cn|-us-gov):rds:[a-zA-Z0-9-]*:[0-9]{12}:cluster:[a-zA-Z0-9-]{1,63}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-rdsconfiguration-resourcearn */
    "ResourceArn": string | Intrinsic;
    /**
     * - The name of the table in the database.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_\.\-]+$`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-rdsconfiguration-tablename */
    "TableName": string | Intrinsic;
}

/**
 * Contains the storage configuration of the knowledge base.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface StorageConfiguration {
    /**
     * - Contains the storage configuration of the knowledge base in MongoDB Atlas.
     * - _Required_: No
     * - _Type_: [MongoDbAtlasConfiguration](./aws-properties-bedrock-knowledgebase-mongodbatlasconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-storageconfiguration-mongodbatlasconfiguration */
    "MongoDbAtlasConfiguration"?: MongoDbAtlasConfiguration;
    /**
     * - Contains details about the Neptune Analytics configuration of the knowledge base in Amazon Neptune. For more information, see [Create a vector index in Amazon Neptune Analytics.](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-neptune.html).
     * - _Required_: No
     * - _Type_: [NeptuneAnalyticsConfiguration](./aws-properties-bedrock-knowledgebase-neptuneanalyticsconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-storageconfiguration-neptuneanalyticsconfiguration */
    "NeptuneAnalyticsConfiguration"?: NeptuneAnalyticsConfiguration;
    /**
     * - Contains details about the storage configuration of the knowledge base in OpenSearch Managed Cluster. For more information, see [Create a vector index in Amazon OpenSearch Service](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-osm.html).
     * - _Required_: No
     * - _Type_: [OpenSearchManagedClusterConfiguration](./aws-properties-bedrock-knowledgebase-opensearchmanagedclusterconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-storageconfiguration-opensearchmanagedclusterconfiguration */
    "OpensearchManagedClusterConfiguration"?: OpenSearchManagedClusterConfiguration;
    /**
     * - Contains the storage configuration of the knowledge base in Amazon OpenSearch Service.
     * - _Required_: No
     * - _Type_: [OpenSearchServerlessConfiguration](./aws-properties-bedrock-knowledgebase-opensearchserverlessconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-storageconfiguration-opensearchserverlessconfiguration */
    "OpensearchServerlessConfiguration"?: OpenSearchServerlessConfiguration;
    /**
     * - Contains the storage configuration of the knowledge base in Pinecone.
     * - _Required_: No
     * - _Type_: [PineconeConfiguration](./aws-properties-bedrock-knowledgebase-pineconeconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-storageconfiguration-pineconeconfiguration */
    "PineconeConfiguration"?: PineconeConfiguration;
    /**
     * - Contains details about the storage configuration of the knowledge base in Amazon RDS. For more information, see [Create a vector index in Amazon RDS](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-rds.html).
     * - _Required_: No
     * - _Type_: [RdsConfiguration](./aws-properties-bedrock-knowledgebase-rdsconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-storageconfiguration-rdsconfiguration */
    "RdsConfiguration"?: RdsConfiguration;
    /**
     * - The vector store service in which the knowledge base is stored.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `OPENSEARCH_SERVERLESS | PINECONE | RDS | MONGO_DB_ATLAS | NEPTUNE_ANALYTICS | OPENSEARCH_MANAGED_CLUSTER`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-storageconfiguration-type */
    "Type": string | Intrinsic;
}

/**
 * The vector configuration details for the Bedrock embeddings model.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface BedrockEmbeddingModelConfiguration {
    /**
     * - The dimensions details for the vector configuration used on the Bedrock embeddings model.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `4096`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-bedrockembeddingmodelconfiguration-dimensions */
    "Dimensions"?: number | Intrinsic;
    /**
     * - The data type for the vectors when using a model to convert text into vector embeddings. The model must support the specified data type for vector embeddings. Floating-point (float32) is the default data type, and is supported by most models for vector embeddings. See [Supported embeddings models](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-supported.html) for information on the available models and their vector data types.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `FLOAT32 | BINARY`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-bedrockembeddingmodelconfiguration-embeddingdatatype */
    "EmbeddingDataType"?: string | Intrinsic;
}

/**
 * The configuration details for the embeddings model.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface EmbeddingModelConfiguration {
    /**
     * - The vector configuration details on the Bedrock embeddings model.
     * - _Required_: No
     * - _Type_: [BedrockEmbeddingModelConfiguration](./aws-properties-bedrock-knowledgebase-bedrockembeddingmodelconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-embeddingmodelconfiguration-bedrockembeddingmodelconfiguration */
    "BedrockEmbeddingModelConfiguration"?: BedrockEmbeddingModelConfiguration;
}

/**
 * A storage location in an Amazon S3 bucket.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface S3Location {
    /**
     * - An object URI starting with `s3://`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^s3://.{1,128}$`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-s3location-uri */
    "URI": string | Intrinsic;
}

/**
 * Contains information about a storage location for images extracted from multimodal documents in your data source.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface SupplementalDataStorageLocation {
    /**
     * - Contains information about the Amazon S3 location for the extracted images.
     * - _Required_: No
     * - _Type_: [S3Location](./aws-properties-bedrock-knowledgebase-s3location.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-supplementaldatastoragelocation-s3location */
    "S3Location"?: S3Location;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `S3`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-supplementaldatastoragelocation-supplementaldatastoragelocationtype */
    "SupplementalDataStorageLocationType": string | Intrinsic;
}

/**
 * Specifies configurations for the storage location of the images extracted from multimodal documents in your data source. These images can be retrieved and returned to the end user.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface SupplementalDataStorageConfiguration {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: Array of [SupplementalDataStorageLocation](./aws-properties-bedrock-knowledgebase-supplementaldatastoragelocation.html)
     * - _Minimum_: `1`
     * - _Maximum_: `1`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-supplementaldatastorageconfiguration-supplementaldatastoragelocations */
    "SupplementalDataStorageLocations": SupplementalDataStorageLocation[];
}

/**
 * Contains details about the model used to create vector embeddings for the knowledge base.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface VectorKnowledgeBaseConfiguration {
    /**
     * - The Amazon Resource Name (ARN) of the model used to create vector embeddings for the knowledge base.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(arn:aws(-[^:]+)?:[a-z0-9-]+:[a-z0-9-]{1,20}:[0-9]{0,12}:[a-zA-Z0-9-:/._+]+)$`
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-vectorknowledgebaseconfiguration-embeddingmodelarn */
    "EmbeddingModelArn": string | Intrinsic;
    /**
     * - The embeddings model configuration details for the vector model used in Knowledge Base.
     * - _Required_: No
     * - _Type_: [EmbeddingModelConfiguration](./aws-properties-bedrock-knowledgebase-embeddingmodelconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-vectorknowledgebaseconfiguration-embeddingmodelconfiguration */
    "EmbeddingModelConfiguration"?: EmbeddingModelConfiguration;
    /**
     * - If you include multimodal data from your data source, use this object to specify configurations for the storage location of the images extracted from your documents. These images can be retrieved and returned to the end user. They can also be used in generation when using [RetrieveAndGenerate](https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_RetrieveAndGenerate.html).
     * - _Required_: No
     * - _Type_: [SupplementalDataStorageConfiguration](./aws-properties-bedrock-knowledgebase-supplementaldatastorageconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-vectorknowledgebaseconfiguration-supplementaldatastorageconfiguration */
    "SupplementalDataStorageConfiguration"?: SupplementalDataStorageConfiguration;
}

/**
 * Contains configurations for storage in AWS Glue Data Catalog.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface RedshiftQueryEngineAwsDataCatalogStorageConfiguration {
    /**
     * - A list of names of the tables to use.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `1000`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-redshiftqueryengineawsdatacatalogstorageconfiguration-tablenames */
    "TableNames": (string | Intrinsic)[];
}

/**
 * Contains configurations for storage in Amazon Redshift.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface RedshiftQueryEngineRedshiftStorageConfiguration {
    /**
     * - The name of the Amazon Redshift database.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `200`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-redshiftqueryengineredshiftstorageconfiguration-databasename */
    "DatabaseName": string | Intrinsic;
}

/**
 * Contains configurations for Amazon Redshift data storage. Specify the data storage service to use in the `type` field and include the corresponding field. For more information, see [Build a knowledge base by connecting to a structured data source](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-build-structured.html) in the Amazon Bedrock User Guide.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface RedshiftQueryEngineStorageConfiguration {
    /**
     * - Specifies configurations for storage in AWS Glue Data Catalog.
     * - _Required_: No
     * - _Type_: [RedshiftQueryEngineAwsDataCatalogStorageConfiguration](./aws-properties-bedrock-knowledgebase-redshiftqueryengineawsdatacatalogstorageconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-redshiftqueryenginestorageconfiguration-awsdatacatalogconfiguration */
    "AwsDataCatalogConfiguration"?: RedshiftQueryEngineAwsDataCatalogStorageConfiguration;
    /**
     * - Specifies configurations for storage in Amazon Redshift.
     * - _Required_: No
     * - _Type_: [RedshiftQueryEngineRedshiftStorageConfiguration](./aws-properties-bedrock-knowledgebase-redshiftqueryengineredshiftstorageconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-redshiftqueryenginestorageconfiguration-redshiftconfiguration */
    "RedshiftConfiguration"?: RedshiftQueryEngineRedshiftStorageConfiguration;
    /**
     * - The data storage service to use.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `REDSHIFT | AWS_DATA_CATALOG`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-redshiftqueryenginestorageconfiguration-type */
    "Type": string | Intrinsic;
}

/**
 * Contains configurations for authentication to an Amazon Redshift provisioned data warehouse. Specify the type of authentication to use in the `type` field and include the corresponding field. If you specify IAM authentication, you don't need to include another field.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface RedshiftProvisionedAuthConfiguration {
    /**
     * - The database username for authentication to an Amazon Redshift provisioned data warehouse.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-redshiftprovisionedauthconfiguration-databaseuser */
    "DatabaseUser"?: string | Intrinsic;
    /**
     * - The type of authentication to use.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `IAM | USERNAME_PASSWORD | USERNAME`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-redshiftprovisionedauthconfiguration-type */
    "Type": string | Intrinsic;
    /**
     * - The ARN of an Secrets Manager secret for authentication.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:aws(|-cn|-us-gov):secretsmanager:[a-z0-9-]{1,20}:([0-9]{12}|):secret:[a-zA-Z0-9!/_+=.@-]{1,512}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-redshiftprovisionedauthconfiguration-usernamepasswordsecretarn */
    "UsernamePasswordSecretArn"?: string | Intrinsic;
}

/**
 * Contains configurations for a provisioned Amazon Redshift query engine.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface RedshiftProvisionedConfiguration {
    /**
     * - Specifies configurations for authentication to Amazon Redshift.
     * - _Required_: Yes
     * - _Type_: [RedshiftProvisionedAuthConfiguration](./aws-properties-bedrock-knowledgebase-redshiftprovisionedauthconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-redshiftprovisionedconfiguration-authconfiguration */
    "AuthConfiguration": RedshiftProvisionedAuthConfiguration;
    /**
     * - The ID of the Amazon Redshift cluster.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-redshiftprovisionedconfiguration-clusteridentifier */
    "ClusterIdentifier": string | Intrinsic;
}

/**
 * Specifies configurations for authentication to a Redshift Serverless. Specify the type of authentication to use in the `type` field and include the corresponding field. If you specify IAM authentication, you don't need to include another field.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface RedshiftServerlessAuthConfiguration {
    /**
     * - The type of authentication to use.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `IAM | USERNAME_PASSWORD`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-redshiftserverlessauthconfiguration-type */
    "Type": string | Intrinsic;
    /**
     * - The ARN of an Secrets Manager secret for authentication.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:aws(|-cn|-us-gov):secretsmanager:[a-z0-9-]{1,20}:([0-9]{12}|):secret:[a-zA-Z0-9!/_+=.@-]{1,512}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-redshiftserverlessauthconfiguration-usernamepasswordsecretarn */
    "UsernamePasswordSecretArn"?: string | Intrinsic;
}

/**
 * Contains configurations for authentication to Amazon Redshift Serverless.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface RedshiftServerlessConfiguration {
    /**
     * - Specifies configurations for authentication to an Amazon Redshift provisioned data warehouse.
     * - _Required_: Yes
     * - _Type_: [RedshiftServerlessAuthConfiguration](./aws-properties-bedrock-knowledgebase-redshiftserverlessauthconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-redshiftserverlessconfiguration-authconfiguration */
    "AuthConfiguration": RedshiftServerlessAuthConfiguration;
    /**
     * - The ARN of the Amazon Redshift workgroup.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(arn:(aws(-[a-z]+)*):redshift-serverless:[a-z]{2}(-gov)?-[a-z]+-\d{1}:\d{12}:workgroup/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-redshiftserverlessconfiguration-workgrouparn */
    "WorkgroupArn": string | Intrinsic;
}

/**
 * Contains configurations for an Amazon Redshift query engine. Specify the type of query engine in `type` and include the corresponding field. For more information, see [Build a knowledge base by connecting to a structured data source](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-build-structured.html) in the Amazon Bedrock User Guide.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface RedshiftQueryEngineConfiguration {
    /**
     * - Specifies configurations for a provisioned Amazon Redshift query engine.
     * - _Required_: No
     * - _Type_: [RedshiftProvisionedConfiguration](./aws-properties-bedrock-knowledgebase-redshiftprovisionedconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-redshiftqueryengineconfiguration-provisionedconfiguration */
    "ProvisionedConfiguration"?: RedshiftProvisionedConfiguration;
    /**
     * - Specifies configurations for a serverless Amazon Redshift query engine.
     * - _Required_: No
     * - _Type_: [RedshiftServerlessConfiguration](./aws-properties-bedrock-knowledgebase-redshiftserverlessconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-redshiftqueryengineconfiguration-serverlessconfiguration */
    "ServerlessConfiguration"?: RedshiftServerlessConfiguration;
    /**
     * - The type of query engine.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `SERVERLESS | PROVISIONED`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-redshiftqueryengineconfiguration-type */
    "Type": string | Intrinsic;
}

/**
 * Contains configurations for a query, each of which defines information about example queries to help the query engine generate appropriate SQL queries.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface CuratedQuery {
    /**
     * - An example natural language query.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-curatedquery-naturallanguage */
    "NaturalLanguage": string | Intrinsic;
    /**
     * - The SQL equivalent of the natural language query.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-curatedquery-sql */
    "Sql": string | Intrinsic;
}

/**
 * Contains information about a column in the current table for the query engine to consider.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface QueryGenerationColumn {
    /**
     * - A description of the column that helps the query engine understand the contents of the column.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-querygenerationcolumn-description */
    "Description"?: string | Intrinsic;
    /**
     * - Specifies whether to include or exclude the column during query generation. If you specify `EXCLUDE`, the column will be ignored. If you specify `INCLUDE`, all other columns in the table will be ignored.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `INCLUDE | EXCLUDE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-querygenerationcolumn-inclusion */
    "Inclusion"?: string | Intrinsic;
    /**
     * - The name of the column for which the other fields in this object apply.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `127`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-querygenerationcolumn-name */
    "Name"?: string | Intrinsic;
}

/**
 * Contains information about a table for the query engine to consider.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface QueryGenerationTable {
    /**
     * - An array of objects, each of which defines information about a column in the table.
     * - _Required_: No
     * - _Type_: Array of [QueryGenerationColumn](./aws-properties-bedrock-knowledgebase-querygenerationcolumn.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-querygenerationtable-columns */
    "Columns"?: QueryGenerationColumn[];
    /**
     * - A description of the table that helps the query engine understand the contents of the table.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-querygenerationtable-description */
    "Description"?: string | Intrinsic;
    /**
     * - Specifies whether to include or exclude the table during query generation. If you specify `EXCLUDE`, the table will be ignored. If you specify `INCLUDE`, all other tables will be ignored.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `INCLUDE | EXCLUDE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-querygenerationtable-inclusion */
    "Inclusion"?: string | Intrinsic;
    /**
     * - The name of the table for which the other fields in this object apply.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*\..*\..*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-querygenerationtable-name */
    "Name": string | Intrinsic;
}

/**
 * \>Contains configurations for context to use during query generation.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface QueryGenerationContext {
    /**
     * - An array of objects, each of which defines information about example queries to help the query engine generate appropriate SQL queries.
     * - _Required_: No
     * - _Type_: Array of [CuratedQuery](./aws-properties-bedrock-knowledgebase-curatedquery.html)
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-querygenerationcontext-curatedqueries */
    "CuratedQueries"?: CuratedQuery[];
    /**
     * - An array of objects, each of which defines information about a table in the database.
     * - _Required_: No
     * - _Type_: Array of [QueryGenerationTable](./aws-properties-bedrock-knowledgebase-querygenerationtable.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-querygenerationcontext-tables */
    "Tables"?: QueryGenerationTable[];
}

/**
 * Contains configurations for query generation. For more information, see [Build a knowledge base by connecting to a structured data source](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-build-structured.html) in the Amazon Bedrock User Guide..
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface QueryGenerationConfiguration {
    /**
     * - The time after which query generation will time out.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-querygenerationconfiguration-executiontimeoutseconds */
    "ExecutionTimeoutSeconds"?: number | Intrinsic;
    /**
     * - Specifies configurations for context to use during query generation.
     * - _Required_: No
     * - _Type_: [QueryGenerationContext](./aws-properties-bedrock-knowledgebase-querygenerationcontext.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-querygenerationconfiguration-generationcontext */
    "GenerationContext"?: QueryGenerationContext;
}

/**
 * Contains configurations for an Amazon Redshift database. For more information, see [Build a knowledge base by connecting to a structured data source](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-build-structured.html) in the Amazon Bedrock User Guide.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface RedshiftConfiguration {
    /**
     * - Specifies configurations for an Amazon Redshift query engine.
     * - _Required_: Yes
     * - _Type_: [RedshiftQueryEngineConfiguration](./aws-properties-bedrock-knowledgebase-redshiftqueryengineconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-redshiftconfiguration-queryengineconfiguration */
    "QueryEngineConfiguration": RedshiftQueryEngineConfiguration;
    /**
     * - Specifies configurations for generating queries.
     * - _Required_: No
     * - _Type_: [QueryGenerationConfiguration](./aws-properties-bedrock-knowledgebase-querygenerationconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-redshiftconfiguration-querygenerationconfiguration */
    "QueryGenerationConfiguration"?: QueryGenerationConfiguration;
    /**
     * - Specifies configurations for Amazon Redshift database storage.
     * - _Required_: Yes
     * - _Type_: Array of [RedshiftQueryEngineStorageConfiguration](./aws-properties-bedrock-knowledgebase-redshiftqueryenginestorageconfiguration.html)
     * - _Minimum_: `1`
     * - _Maximum_: `1`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-redshiftconfiguration-storageconfigurations */
    "StorageConfigurations": RedshiftQueryEngineStorageConfiguration[];
}

/**
 * Contains configurations for a knowledge base connected to an SQL database. Specify the SQL database type in the `type` field and include the corresponding field. For more information, see [Build a knowledge base by connecting to a structured data source](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-build-structured.html) in the Amazon Bedrock User Guide.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface SqlKnowledgeBaseConfiguration {
    /**
     * - Specifies configurations for a knowledge base connected to an Amazon Redshift database.
     * - _Required_: No
     * - _Type_: [RedshiftConfiguration](./aws-properties-bedrock-knowledgebase-redshiftconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-sqlknowledgebaseconfiguration-redshiftconfiguration */
    "RedshiftConfiguration"?: RedshiftConfiguration;
    /**
     * - The type of SQL database to connect to the knowledge base.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `REDSHIFT`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-sqlknowledgebaseconfiguration-type */
    "Type": string | Intrinsic;
}

/**
 * Configurations to apply to a knowledge base attached to the agent during query. For more information, see [Knowledge base retrieval configurations](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-session-state.html#session-state-kb).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface KnowledgeBaseConfiguration {
    /**
     * - Settings for an Amazon Kendra knowledge base.
     * - _Required_: No
     * - _Type_: [KendraKnowledgeBaseConfiguration](./aws-properties-bedrock-knowledgebase-kendraknowledgebaseconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-knowledgebaseconfiguration-kendraknowledgebaseconfiguration */
    "KendraKnowledgeBaseConfiguration"?: KendraKnowledgeBaseConfiguration;
    /**
     * - Specifies configurations for a knowledge base connected to an SQL database.
     * - _Required_: No
     * - _Type_: [SqlKnowledgeBaseConfiguration](./aws-properties-bedrock-knowledgebase-sqlknowledgebaseconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-knowledgebaseconfiguration-sqlknowledgebaseconfiguration */
    "SqlKnowledgeBaseConfiguration"?: SqlKnowledgeBaseConfiguration;
    /**
     * - The type of data that the data source is converted into for the knowledge base.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `VECTOR | KENDRA | SQL`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-knowledgebaseconfiguration-type */
    "Type": string | Intrinsic;
    /**
     * - Contains details about the model that's used to convert the data source into vector embeddings.
     * - _Required_: No
     * - _Type_: [VectorKnowledgeBaseConfiguration](./aws-properties-bedrock-knowledgebase-vectorknowledgebaseconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-knowledgebaseconfiguration-vectorknowledgebaseconfiguration */
    "VectorKnowledgeBaseConfiguration"?: VectorKnowledgeBaseConfiguration;
}

/**
 * Specifies a knowledge base as a resource in a top-level template. Minimally, you must specify the following properties:
 * *   Name – Specify a name for the knowledge base.
 *     
 * *   RoleArn – Specify the Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the knowledge base. For more information, see [Create a service role for Knowledge base for Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/kb-permissions.html).
 *     
 * *   KnowledgeBaseConfiguration – Specify the embeddings configuration of the knowledge base. The following sub-properties are required:
 *     
 *     *   Type – Specify the value `VECTOR`.
 *         
 *     
 * *   StorageConfiguration – Specify information about the vector store in which the data source is stored. The following sub-properties are required:
 *     
 *     *   Type – Specify the vector store service that you are using.
 *         
 *     
 *     ###### Note
 *     
 *     Redis Enterprise Cloud vector stores are currently unsupported in AWS CloudFormation.
 * For more information about using knowledge bases in Amazon Bedrock, see [Knowledge base for Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html).
 * See the **Properties** section below for descriptions of both the required and optional properties.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface BedrockKnowledgeBase extends ResourceAttributes {
    "Type": "AWS::Bedrock::KnowledgeBase";
    "Properties": {
        /**
         * - The description of the knowledge base associated with the inline agent.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-description */
        "Description"?: string | Intrinsic;
        /**
         * - Contains details about the embeddings configuration of the knowledge base.
         * - _Required_: Yes
         * - _Type_: [KnowledgeBaseConfiguration](./aws-properties-bedrock-knowledgebase-knowledgebaseconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-knowledgebaseconfiguration */
        "KnowledgeBaseConfiguration": KnowledgeBaseConfiguration;
        /**
         * - The name of the knowledge base.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^([0-9a-zA-Z][_-]?){1,100}$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-name */
        "Name": string | Intrinsic;
        /**
         * - The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the knowledge base.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:aws(-[^:]+)?:iam::([0-9]{12})?:role/.+$`
         * - _Maximum_: `2048`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-rolearn */
        "RoleArn": string | Intrinsic;
        /**
         * - Contains details about the storage configuration of the knowledge base.
         * - _Required_: No
         * - _Type_: [StorageConfiguration](./aws-properties-bedrock-knowledgebase-storageconfiguration.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-storageconfiguration */
        "StorageConfiguration"?: StorageConfiguration;
        /**
         * - Metadata that you can assign to a resource as key-value pairs. For more information, see the following resources:
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `^[a-zA-Z0-9\s._:/=+@-]*$`
         * - _Minimum_: `0`
         * - _Maximum_: `256`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-tags */
        "Tags"?: Record<string, string | Intrinsic>;
    };
}