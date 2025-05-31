import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Information about how to render the content.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html */

export interface RenderingConfiguration {
    /**
     * - A URI template containing exactly one variable in `${variableName}` format. This can only be set for `EXTERNAL` knowledge bases. For Salesforce, ServiceNow, and Zendesk, the variable must be one of the following:
     * - The variable is replaced with the actual value for a piece of content when calling [GetContent](https://docs.aws.amazon.com/amazon-q-connect/latest/APIReference/API_GetContent.html).
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `4096`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-renderingconfiguration-templateuri */
    "TemplateUri"?: string | Intrinsic;
}

/**
 * The configuration information for the customer managed key used for encryption.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html */

export interface ServerSideEncryptionConfiguration {
    /**
     * - The customer managed key used for encryption.
     * - This customer managed key must have a policy that allows `kms:CreateGrant` and `kms:DescribeKey` permissions to the IAM identity using the key to invoke Wisdom.
     * - For more information about setting up a customer managed key for Wisdom, see [Enable Amazon Connect Wisdom for your instance](https://docs.aws.amazon.com/connect/latest/adminguide/enable-wisdom.html). For information about valid ID values, see [Key identifiers (KeyId)](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id).
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `4096`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-serversideencryptionconfiguration-kmskeyid */
    "KmsKeyId"?: string | Intrinsic;
}

/**
 * Metadata to assign to the Wisdom knowledge base. Tags help organize and categorize your Amazon Connect Wisdom resources. Each tag consists of a key and an optional value, both of which you define.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html */

export interface Tag {
    /**
     * - The key-value string map. The valid character set is `[a-zA-Z+-=._:/]`. The tag key can be up to 128 characters and must not start with `aws:`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?!aws:)[a-zA-Z+-=._:/]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The tag value can be up to 256 characters.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Configuration information for Amazon AppIntegrations to automatically ingest content.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html */

export interface AppIntegrationsConfiguration {
    /**
     * - The Amazon Resource Name (ARN) of the AppIntegrations DataIntegration to use for ingesting content.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:[a-z-]+?:[a-z-]+?:[a-z0-9-]*?:([0-9]{12})?:[a-zA-Z0-9-:/]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-appintegrationsconfiguration-appintegrationarn */
    "AppIntegrationArn": string | Intrinsic;
    /**
     * - The fields from the source that are made available to your agents in Amazon Q in Connect. Optional if ObjectConfiguration is included in the provided DataIntegration.
     * - Make sure to include additional fields. These fields are indexed and used to source recommendations.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1 | 1`
     * - _Maximum_: `4096 | 100`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-appintegrationsconfiguration-objectfields */
    "ObjectFields"?: (string | Intrinsic)[];
}

/**
 * Configurations for when you choose fixed-size chunking. If you set the `chunkingStrategy` as `NONE`, exclude this field.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html */

export interface FixedSizeChunkingConfiguration {
    /**
     * - The maximum number of tokens to include in a chunk.
     * - _Required_: Yes
     * - _Type_: Number
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-fixedsizechunkingconfiguration-maxtokens */
    "MaxTokens": number | Intrinsic;
    /**
     * - The percentage of overlap between adjacent chunks of a data source.
     * - _Required_: Yes
     * - _Type_: Number
     * - _Minimum_: `1`
     * - _Maximum_: `99`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-fixedsizechunkingconfiguration-overlappercentage */
    "OverlapPercentage": number | Intrinsic;
}

/**
 * Settings for semantic document chunking for a data source. Semantic chunking splits a document into smaller documents based on groups of similar content derived from the text with natural language processing.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html */

export interface SemanticChunkingConfiguration {
    /**
     * - The dissimilarity threshold for splitting chunks.
     * - _Required_: Yes
     * - _Type_: Number
     * - _Minimum_: `50`
     * - _Maximum_: `99`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-semanticchunkingconfiguration-breakpointpercentilethreshold */
    "BreakpointPercentileThreshold": number | Intrinsic;
    /**
     * - The buffer size.
     * - _Required_: Yes
     * - _Type_: Number
     * - _Minimum_: `0`
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-semanticchunkingconfiguration-buffersize */
    "BufferSize": number | Intrinsic;
    /**
     * - The maximum number of tokens that a chunk can contain.
     * - _Required_: Yes
     * - _Type_: Number
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-semanticchunkingconfiguration-maxtokens */
    "MaxTokens": number | Intrinsic;
}

/**
 * Token settings for each layer.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html */

export interface HierarchicalChunkingLevelConfiguration {
    /**
     * - The maximum number of tokens that a chunk can contain in this layer.
     * - _Required_: Yes
     * - _Type_: Number
     * - _Minimum_: `1`
     * - _Maximum_: `8192`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-hierarchicalchunkinglevelconfiguration-maxtokens */
    "MaxTokens": number | Intrinsic;
}

/**
 * Settings for hierarchical document chunking for a data source. Hierarchical chunking splits documents into layers of chunks where the first layer contains large chunks, and the second layer contains smaller chunks derived from the first layer.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html */

export interface HierarchicalChunkingConfiguration {
    /**
     * - Token settings for each layer.
     * - _Required_: Yes
     * - _Type_: Array of [HierarchicalChunkingLevelConfiguration](./aws-properties-wisdom-knowledgebase-hierarchicalchunkinglevelconfiguration.html)
     * - _Minimum_: `2`
     * - _Maximum_: `2`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-hierarchicalchunkingconfiguration-levelconfigurations */
    "LevelConfigurations": HierarchicalChunkingLevelConfiguration[];
    /**
     * - The number of tokens to repeat across chunks in the same layer.
     * - _Required_: Yes
     * - _Type_: Number
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-hierarchicalchunkingconfiguration-overlaptokens */
    "OverlapTokens": number | Intrinsic;
}

/**
 * Details about how to chunk the documents in the data source. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html */

export interface ChunkingConfiguration {
    /**
     * - Knowledge base can split your source data into chunks. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried. You have the following options for chunking your data. If you opt for `NONE`, then you may want to pre-process your files by splitting them up such that each file corresponds to a chunk.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `FIXED_SIZE | NONE | HIERARCHICAL | SEMANTIC`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-chunkingconfiguration-chunkingstrategy */
    "ChunkingStrategy": string | Intrinsic;
    /**
     * - Configurations for when you choose fixed-size chunking. If you set the `chunkingStrategy` as `NONE`, exclude this field.
     * - _Required_: No
     * - _Type_: [FixedSizeChunkingConfiguration](./aws-properties-wisdom-knowledgebase-fixedsizechunkingconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-chunkingconfiguration-fixedsizechunkingconfiguration */
    "FixedSizeChunkingConfiguration"?: FixedSizeChunkingConfiguration;
    /**
     * - Settings for hierarchical document chunking for a data source. Hierarchical chunking splits documents into layers of chunks where the first layer contains large chunks, and the second layer contains smaller chunks derived from the first layer.
     * - _Required_: No
     * - _Type_: [HierarchicalChunkingConfiguration](./aws-properties-wisdom-knowledgebase-hierarchicalchunkingconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-chunkingconfiguration-hierarchicalchunkingconfiguration */
    "HierarchicalChunkingConfiguration"?: HierarchicalChunkingConfiguration;
    /**
     * - Settings for semantic document chunking for a data source. Semantic chunking splits a document into smaller documents based on groups of similar content derived from the text with natural language processing.
     * - _Required_: No
     * - _Type_: [SemanticChunkingConfiguration](./aws-properties-wisdom-knowledgebase-semanticchunkingconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-chunkingconfiguration-semanticchunkingconfiguration */
    "SemanticChunkingConfiguration"?: SemanticChunkingConfiguration;
}

/**
 * Instructions for interpreting the contents of a document.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html */

export interface ParsingPrompt {
    /**
     * - Instructions for interpreting the contents of a document.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `10000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-parsingprompt-parsingprompttext */
    "ParsingPromptText": string | Intrinsic;
}

/**
 * The configuration of the Bedrock foundation model.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html */

export interface BedrockFoundationModelConfiguration {
    /**
     * - The model ARN of the Bedrock foundation model.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}::foundation-model\/anthropic.claude-3-haiku-20240307-v1:0$`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-bedrockfoundationmodelconfiguration-modelarn */
    "ModelArn": string | Intrinsic;
    /**
     * - The parsing prompt of the Bedrock foundation model configuration.
     * - _Required_: No
     * - _Type_: [ParsingPrompt](./aws-properties-wisdom-knowledgebase-parsingprompt.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-bedrockfoundationmodelconfiguration-parsingprompt */
    "ParsingPrompt"?: ParsingPrompt;
}

/**
 * Settings for parsing document contents. By default, the service converts the contents of each document into text before splitting it into chunks. To improve processing of PDF files with tables and images, you can configure the data source to convert the pages of text into images and use a model to describe the contents of each page.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html */

export interface ParsingConfiguration {
    /**
     * - Settings for a foundation model used to parse documents for a data source.
     * - _Required_: No
     * - _Type_: [BedrockFoundationModelConfiguration](./aws-properties-wisdom-knowledgebase-bedrockfoundationmodelconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-parsingconfiguration-bedrockfoundationmodelconfiguration */
    "BedrockFoundationModelConfiguration"?: BedrockFoundationModelConfiguration;
    /**
     * - The parsing strategy for the data source.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `BEDROCK_FOUNDATION_MODEL`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-parsingconfiguration-parsingstrategy */
    "ParsingStrategy": string | Intrinsic;
}

/**
 * Contains details about how to ingest the documents in a data source.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html */

export interface VectorIngestionConfiguration {
    /**
     * - Details about how to chunk the documents in the data source. A chunk refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried.
     * - _Required_: No
     * - _Type_: [ChunkingConfiguration](./aws-properties-wisdom-knowledgebase-chunkingconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-vectoringestionconfiguration-chunkingconfiguration */
    "ChunkingConfiguration"?: ChunkingConfiguration;
    /**
     * - A custom parser for data source documents.
     * - _Required_: No
     * - _Type_: [ParsingConfiguration](./aws-properties-wisdom-knowledgebase-parsingconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-vectoringestionconfiguration-parsingconfiguration */
    "ParsingConfiguration"?: ParsingConfiguration;
}

/**
 * The limits of the crawler.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html */

export interface CrawlerLimits {
    /**
     * - The limit rate at which the crawler is configured.
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `1`
     * - _Maximum_: `3000`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-crawlerlimits-ratelimit */
    "RateLimit"?: number | Intrinsic;
}

/**
 * A URL for crawling.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html */

export interface SeedUrl {
    /**
     * - URL for crawling
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^https?://[A-Za-z0-9][^\s]*$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-seedurl-url */
    "Url"?: string | Intrinsic;
}

/**
 * The configuration of the URL/URLs for the web content that you want to crawl. You should be authorized to crawl the URLs.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html */

export interface UrlConfiguration {
    /**
     * - List of URLs for crawling.
     * - _Required_: No
     * - _Type_: Array of [SeedUrl](./aws-properties-wisdom-knowledgebase-seedurl.html)
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-urlconfiguration-seedurls */
    "SeedUrls"?: SeedUrl[];
}

/**
 * The configuration details for the web data source.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html */

export interface WebCrawlerConfiguration {
    /**
     * - The configuration of crawl limits for the web URLs.
     * - _Required_: No
     * - _Type_: [CrawlerLimits](./aws-properties-wisdom-knowledgebase-crawlerlimits.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-webcrawlerconfiguration-crawlerlimits */
    "CrawlerLimits"?: CrawlerLimits;
    /**
     * - A list of one or more exclusion regular expression patterns to exclude certain URLs. If you specify an inclusion and exclusion filter/pattern and both match a URL, the exclusion filter takes precedence and the web content of the URL isn’t crawled.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `25`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-webcrawlerconfiguration-exclusionfilters */
    "ExclusionFilters"?: (string | Intrinsic)[];
    /**
     * - A list of one or more inclusion regular expression patterns to include certain URLs. If you specify an inclusion and exclusion filter/pattern and both match a URL, the exclusion filter takes precedence and the web content of the URL isn’t crawled.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `25`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-webcrawlerconfiguration-inclusionfilters */
    "InclusionFilters"?: (string | Intrinsic)[];
    /**
     * - The scope of what is crawled for your URLs. You can choose to crawl only web pages that belong to the same host or primary domain. For example, only web pages that contain the seed URL `https://docs.aws.amazon.com/bedrock/latest/userguide/` and no other domains. You can choose to include sub domains in addition to the host or primary domain. For example, web pages that contain `aws.amazon.com` can also include sub domain `docs.aws.amazon.com`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `HOST_ONLY | SUBDOMAINS`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-webcrawlerconfiguration-scope */
    "Scope"?: string | Intrinsic;
    /**
     * - The configuration of the URL/URLs for the web content that you want to crawl. You should be authorized to crawl the URLs.
     * - _Required_: Yes
     * - _Type_: [UrlConfiguration](./aws-properties-wisdom-knowledgebase-urlconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-webcrawlerconfiguration-urlconfiguration */
    "UrlConfiguration": UrlConfiguration;
}

/**
 * Source configuration for managed resources.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html */

export interface ManagedSourceConfiguration {
    /**
     * - Configuration data for web crawler data source.
     * - _Required_: Yes
     * - _Type_: [WebCrawlerConfiguration](./aws-properties-wisdom-knowledgebase-webcrawlerconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-managedsourceconfiguration-webcrawlerconfiguration */
    "WebCrawlerConfiguration": WebCrawlerConfiguration;
}

/**
 * Configuration information about the external data source.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html */

export interface SourceConfiguration {
    /**
     * - Configuration information for Amazon AppIntegrations to automatically ingest content.
     * - _Required_: No
     * - _Type_: [AppIntegrationsConfiguration](./aws-properties-wisdom-knowledgebase-appintegrationsconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-sourceconfiguration-appintegrations */
    "AppIntegrations"?: AppIntegrationsConfiguration;
    /**
     * - Source configuration for managed resources.
     * - _Required_: No
     * - _Type_: [ManagedSourceConfiguration](./aws-properties-wisdom-knowledgebase-managedsourceconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-sourceconfiguration-managedsourceconfiguration */
    "ManagedSourceConfiguration"?: ManagedSourceConfiguration;
}

/**
 * Specifies a knowledge base.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html */

export interface WisdomKnowledgeBase extends ResourceAttributes {
    "Type": "AWS::Wisdom::KnowledgeBase";
    "Properties": {
        /**
         * - The description.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-description */
        "Description"?: string | Intrinsic;
        /**
         * - The type of knowledge base. Only CUSTOM knowledge bases allow you to upload your own content. EXTERNAL knowledge bases support integrations with third-party systems whose content is synchronized automatically.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `EXTERNAL | CUSTOM | MESSAGE_TEMPLATES | MANAGED | QUICK_RESPONSES`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-knowledgebasetype */
        "KnowledgeBaseType": string | Intrinsic;
        /**
         * - The name of the knowledge base.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-name */
        "Name": string | Intrinsic;
        /**
         * - Information about how to render the content.
         * - _Required_: No
         * - _Type_: [RenderingConfiguration](./aws-properties-wisdom-knowledgebase-renderingconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-renderingconfiguration */
        "RenderingConfiguration"?: RenderingConfiguration;
        /**
         * - This customer managed key must have a policy that allows `kms:CreateGrant` and `kms:DescribeKey` permissions to the IAM identity using the key to invoke Wisdom. For more information about setting up a customer managed key for Wisdom, see [Enable Amazon Connect Wisdom for your instance](https://docs.aws.amazon.com/connect/latest/adminguide/enable-wisdom.html). For information about valid ID values, see [Key identifiers (KeyId)](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id) in the _AWS Key Management Service Developer Guide_.
         * - _Required_: No
         * - _Type_: [ServerSideEncryptionConfiguration](./aws-properties-wisdom-knowledgebase-serversideencryptionconfiguration.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-serversideencryptionconfiguration */
        "ServerSideEncryptionConfiguration"?: ServerSideEncryptionConfiguration;
        /**
         * - The source of the knowledge base content. Only set this argument for EXTERNAL or Managed knowledge bases.
         * - _Required_: No
         * - _Type_: [SourceConfiguration](./aws-properties-wisdom-knowledgebase-sourceconfiguration.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-sourceconfiguration */
        "SourceConfiguration"?: SourceConfiguration;
        /**
         * - The tags used to organize, track, or control access for this resource.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-wisdom-knowledgebase-tag.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-tags */
        "Tags"?: Tag[];
        /**
         * - Contains details about how to ingest the documents in a data source.
         * - _Required_: No
         * - _Type_: [VectorIngestionConfiguration](./aws-properties-wisdom-knowledgebase-vectoringestionconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-knowledgebase.html#cfn-wisdom-knowledgebase-vectoringestionconfiguration */
        "VectorIngestionConfiguration"?: VectorIngestionConfiguration;
    };
}