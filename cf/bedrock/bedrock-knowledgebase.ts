import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
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
  MetadataField: string | Intrinsic
  /**
   * - The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^.*$`
   * - _Maximum_: `2048`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-mongodbatlasfieldmapping-textfield */
  TextField: string | Intrinsic
  /**
   * - The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^.*$`
   * - _Maximum_: `2048`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-mongodbatlasfieldmapping-vectorfield */
  VectorField: string | Intrinsic
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
  MetadataField: string | Intrinsic
  /**
   * - The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^.*$`
   * - _Maximum_: `2048`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-opensearchserverlessfieldmapping-textfield */
  TextField: string | Intrinsic
  /**
   * - The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^.*$`
   * - _Maximum_: `2048`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-opensearchserverlessfieldmapping-vectorfield */
  VectorField: string | Intrinsic
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
  MetadataField: string | Intrinsic
  /**
   * - The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^.*$`
   * - _Maximum_: `2048`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-pineconefieldmapping-textfield */
  TextField: string | Intrinsic
}

/**
 * Contains the names of the fields to which to map information about the vector store.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface RdsFieldMapping {
  /**
   * - The name of the field in which Amazon Bedrock stores metadata about the vector store.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9_\-]+$`
   * - _Maximum_: `63`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-rdsfieldmapping-metadatafield */
  MetadataField: string | Intrinsic
  /**
   * - The name of the field in which Amazon Bedrock stores the ID for each entry.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9_\-]+$`
   * - _Maximum_: `63`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-rdsfieldmapping-primarykeyfield */
  PrimaryKeyField: string | Intrinsic
  /**
   * - The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9_\-]+$`
   * - _Maximum_: `63`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-rdsfieldmapping-textfield */
  TextField: string | Intrinsic
  /**
   * - The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9_\-]+$`
   * - _Maximum_: `63`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-rdsfieldmapping-vectorfield */
  VectorField: string | Intrinsic
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
  Dimensions?: number | Intrinsic
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
  CollectionName: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of the secret that you created in AWS Secrets Manager that contains user credentials for your MongoDB Atlas cluster.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:aws(|-cn|-us-gov):secretsmanager:[a-z0-9-]{1,20}:([0-9]{12}|):secret:[a-zA-Z0-9!/_+=.@-]{1,512}$`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-mongodbatlasconfiguration-credentialssecretarn */
  CredentialsSecretArn: string | Intrinsic
  /**
   * - The database name in your MongoDB Atlas cluster for your knowledge base.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^.*$`
   * - _Maximum_: `63`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-mongodbatlasconfiguration-databasename */
  DatabaseName: string | Intrinsic
  /**
   * - The endpoint URL of your MongoDB Atlas cluster for your knowledge base.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+\.mongodb\.net$`
   * - _Maximum_: `2048`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-mongodbatlasconfiguration-endpoint */
  Endpoint: string | Intrinsic
  /**
   * - The name of the VPC endpoint service in your account that is connected to your MongoDB Atlas cluster.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(?:arn:aws(?:-us-gov|-cn|-iso|-iso-[a-z])*:.+:.*:\d+:.+/.+$|[a-zA-Z0-9*]+[a-zA-Z0-9._-]*)$`
   * - _Maximum_: `255`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-mongodbatlasconfiguration-endpointservicename */
  EndpointServiceName?: string | Intrinsic
  /**
   * - Contains the names of the fields to which to map information about the vector store.
   * - _Required_: Yes
   * - _Type_: [MongoDbAtlasFieldMapping](./aws-properties-bedrock-knowledgebase-mongodbatlasfieldmapping.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-mongodbatlasconfiguration-fieldmapping */
  FieldMapping: MongoDbAtlasFieldMapping
  /**
   * - The name of the MongoDB Atlas vector search index.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^.*$`
   * - _Maximum_: `2048`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-mongodbatlasconfiguration-vectorindexname */
  VectorIndexName: string | Intrinsic
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
   * - _Pattern_: `^arn:aws:aoss:[a-z]{2}(-gov)?-[a-z]+-\d{1}:\d{12}:collection/[a-z0-9-]{3,32}$`
   * - _Maximum_: `2048`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-opensearchserverlessconfiguration-collectionarn */
  CollectionArn: string | Intrinsic
  /**
   * - Contains the names of the fields to which to map information about the vector store.
   * - _Required_: Yes
   * - _Type_: [OpenSearchServerlessFieldMapping](./aws-properties-bedrock-knowledgebase-opensearchserverlessfieldmapping.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-opensearchserverlessconfiguration-fieldmapping */
  FieldMapping: OpenSearchServerlessFieldMapping
  /**
   * - The name of the vector store.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^.*$`
   * - _Maximum_: `2048`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-opensearchserverlessconfiguration-vectorindexname */
  VectorIndexName: string | Intrinsic
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
  ConnectionString: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of the secret that you created in AWS Secrets Manager that is linked to your Pinecone API key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:aws(|-cn|-us-gov):secretsmanager:[a-z0-9-]{1,20}:([0-9]{12}|):secret:[a-zA-Z0-9!/_+=.@-]{1,512}$`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-pineconeconfiguration-credentialssecretarn */
  CredentialsSecretArn: string | Intrinsic
  /**
   * - Contains the names of the fields to which to map information about the vector store.
   * - _Required_: Yes
   * - _Type_: [PineconeFieldMapping](./aws-properties-bedrock-knowledgebase-pineconefieldmapping.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-pineconeconfiguration-fieldmapping */
  FieldMapping: PineconeFieldMapping
  /**
   * - The namespace to be used to write new data to your database.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^.*$`
   * - _Maximum_: `2048`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-pineconeconfiguration-namespace */
  Namespace?: string | Intrinsic
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
  CredentialsSecretArn: string | Intrinsic
  /**
   * - The name of your Amazon RDS database.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9_\-]+$`
   * - _Maximum_: `63`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-rdsconfiguration-databasename */
  DatabaseName: string | Intrinsic
  /**
   * - Contains the names of the fields to which to map information about the vector store.
   * - _Required_: Yes
   * - _Type_: [RdsFieldMapping](./aws-properties-bedrock-knowledgebase-rdsfieldmapping.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-rdsconfiguration-fieldmapping */
  FieldMapping: RdsFieldMapping
  /**
   * - The Amazon Resource Name (ARN) of the vector store.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:aws(|-cn|-us-gov):rds:[a-zA-Z0-9-]*:[0-9]{12}:cluster:[a-zA-Z0-9-]{1,63}$`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-rdsconfiguration-resourcearn */
  ResourceArn: string | Intrinsic
  /**
   * - The name of the table in the database.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9_\.\-]+$`
   * - _Maximum_: `63`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-rdsconfiguration-tablename */
  TableName: string | Intrinsic
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
  BedrockEmbeddingModelConfiguration?: BedrockEmbeddingModelConfiguration
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
  MongoDbAtlasConfiguration?: MongoDbAtlasConfiguration
  /**
   * - Contains the storage configuration of the knowledge base in Amazon OpenSearch Service.
   * - _Required_: No
   * - _Type_: [OpenSearchServerlessConfiguration](./aws-properties-bedrock-knowledgebase-opensearchserverlessconfiguration.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-storageconfiguration-opensearchserverlessconfiguration */
  OpensearchServerlessConfiguration?: OpenSearchServerlessConfiguration
  /**
   * - Contains the storage configuration of the knowledge base in Pinecone.
   * - _Required_: No
   * - _Type_: [PineconeConfiguration](./aws-properties-bedrock-knowledgebase-pineconeconfiguration.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-storageconfiguration-pineconeconfiguration */
  PineconeConfiguration?: PineconeConfiguration
  /**
   * - Contains details about the storage configuration of the knowledge base in Amazon RDS. For more information, see [Create a vector index in Amazon RDS](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup-rds.html).
   * - _Required_: No
   * - _Type_: [RdsConfiguration](./aws-properties-bedrock-knowledgebase-rdsconfiguration.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-storageconfiguration-rdsconfiguration */
  RdsConfiguration?: RdsConfiguration
  /**
   * - The vector store service in which the knowledge base is stored.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `OPENSEARCH_SERVERLESS | PINECONE | RDS | MONGO_DB_ATLAS`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-storageconfiguration-type */
  Type: string | Intrinsic
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
  EmbeddingModelArn: string | Intrinsic
  /**
   * - The embeddings model configuration details for the vector model used in Knowledge Base.
   * - _Required_: No
   * - _Type_: [EmbeddingModelConfiguration](./aws-properties-bedrock-knowledgebase-embeddingmodelconfiguration.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-vectorknowledgebaseconfiguration-embeddingmodelconfiguration */
  EmbeddingModelConfiguration?: EmbeddingModelConfiguration
}

/**
 * Configurations to apply to a knowledge base attached to the agent during query. For more information, see [Knowledge base retrieval configurations](https://docs.aws.amazon.com/bedrock/latest/userguide/agents-session-state.html#session-state-kb).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html */

export interface KnowledgeBaseConfiguration {
  /**
   * - The type of data that the data source is converted into for the knowledge base.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `VECTOR`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-knowledgebaseconfiguration-type */
  Type: string | Intrinsic
  /**
   * - Contains details about the embeddings model that'sused to convert the data source.
   * - _Required_: Yes
   * - _Type_: [VectorKnowledgeBaseConfiguration](./aws-properties-bedrock-knowledgebase-vectorknowledgebaseconfiguration.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-knowledgebaseconfiguration-vectorknowledgebaseconfiguration */
  VectorKnowledgeBaseConfiguration: VectorKnowledgeBaseConfiguration
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
  Type: 'AWS::Bedrock::KnowledgeBase'
  Properties: {
    /**
     * - The description of the knowledge base.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-description */
    Description?: string | Intrinsic
    /**
     * - Contains details about the embeddings configuration of the knowledge base.
     * - _Required_: Yes
     * - _Type_: [KnowledgeBaseConfiguration](./aws-properties-bedrock-knowledgebase-knowledgebaseconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-knowledgebaseconfiguration */
    KnowledgeBaseConfiguration: KnowledgeBaseConfiguration
    /**
     * - The name of the knowledge base.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([0-9a-zA-Z][_-]?){1,100}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-name */
    Name: string | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the knowledge base.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws(-[^:]+)?:iam::([0-9]{12})?:role/.+$`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-rolearn */
    RoleArn: string | Intrinsic
    /**
     * - Contains details about the storage configuration of the knowledge base.
     * - _Required_: Yes
     * - _Type_: [StorageConfiguration](./aws-properties-bedrock-knowledgebase-storageconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-knowledgebase.html#cfn-bedrock-knowledgebase-storageconfiguration */
    StorageConfiguration: StorageConfiguration
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
    Tags?: Record<string, string | Intrinsic>
  }
}
