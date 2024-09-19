import type { Intrinsic } from '../intrinsic/index.js' /**
 * Contains the configuration for server-side encryption.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface ServerSideEncryptionConfiguration {
  /**
   * - The Amazon Resource Name (ARN) of the AWS KMS key used to encrypt the resource.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:aws(|-cn|-us-gov):kms:[a-zA-Z0-9-]*:[0-9]{12}:key/[a-zA-Z0-9-]{36}$`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-serversideencryptionconfiguration-kmskeyarn */
  KmsKeyArn?: string | Intrinsic
}

/**
 * The configuration information to connect to Amazon S3 as your data source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface S3DataSourceConfiguration {
  /**
   * - The Amazon Resource Name (ARN) of the S3 bucket that contains your data.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:aws(|-cn|-us-gov):s3:::[a-z0-9][a-z0-9.-]{1,61}[a-z0-9]$`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-s3datasourceconfiguration-bucketarn */
  BucketArn: string | Intrinsic
  /**
   * - The account ID for the owner of the S3 bucket.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[0-9]{12}$`
   * - _Minimum_: `12`
   * - _Maximum_: `12`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-s3datasourceconfiguration-bucketowneraccountid */
  BucketOwnerAccountId?: string | Intrinsic
  /**
   * - A list of S3 prefixes to include certain files or content. For more information, see [Organizing objects using prefixes](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html).
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `300 | 1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-s3datasourceconfiguration-inclusionprefixes */
  InclusionPrefixes?: (string | Intrinsic)[]
}

/**
 * The endpoint information to connect to your Confluence data source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface ConfluenceSourceConfiguration {
  /**
   * - The supported authentication type to authenticate and connect to your Confluence instance.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `BASIC | OAUTH2_CLIENT_CREDENTIALS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-confluencesourceconfiguration-authtype */
  AuthType: string | Intrinsic
  /**
   * - The Amazon Resource Name of an AWS Secrets Manager secret that stores your authentication credentials for your Confluence instance URL. For more information on the key-value pairs that must be included in your secret, depending on your authentication type, see [Confluence connection configuration](https://docs.aws.amazon.com/bedrock/latest/userguide/confluence-data-source-connector.html#configuration-confluence-connector).
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:aws(|-cn|-us-gov):secretsmanager:[a-z0-9-]{1,20}:([0-9]{12}|):secret:[a-zA-Z0-9!/_+=.@-]{1,512}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-confluencesourceconfiguration-credentialssecretarn */
  CredentialsSecretArn: string | Intrinsic
  /**
   * - The supported host type, whether online/cloud or server/on-premises.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `SAAS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-confluencesourceconfiguration-hosttype */
  HostType: string | Intrinsic
  /**
   * - The Confluence host URL or instance URL.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^https://[A-Za-z0-9][^\s]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-confluencesourceconfiguration-hosturl */
  HostUrl: string | Intrinsic
}

/**
 * The configuration of the Salesforce content. For example, configuring specific types of Salesforce content.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface SalesforceCrawlerConfiguration {
  /**
   * - The configuration of filtering the Salesforce content. For example, configuring regular expression patterns to include or exclude certain content.
   * - _Required_: No
   * - _Type_: [CrawlFilterConfiguration](./aws-properties-bedrock-datasource-crawlfilterconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-salesforcecrawlerconfiguration-filterconfiguration */
  FilterConfiguration?: CrawlFilterConfiguration
}

/**
 * The endpoint information to connect to your Salesforce data source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface SalesforceSourceConfiguration {
  /**
   * - The supported authentication type to authenticate and connect to your Salesforce instance.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `OAUTH2_CLIENT_CREDENTIALS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-salesforcesourceconfiguration-authtype */
  AuthType: string | Intrinsic
  /**
   * - The Amazon Resource Name of an AWS Secrets Manager secret that stores your authentication credentials for your Salesforce instance URL. For more information on the key-value pairs that must be included in your secret, depending on your authentication type, see [Salesforce connection configuration](https://docs.aws.amazon.com/bedrock/latest/userguide/salesforce-data-source-connector.html#configuration-salesforce-connector).
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:aws(|-cn|-us-gov):secretsmanager:[a-z0-9-]{1,20}:([0-9]{12}|):secret:[a-zA-Z0-9!/_+=.@-]{1,512}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-salesforcesourceconfiguration-credentialssecretarn */
  CredentialsSecretArn: string | Intrinsic
  /**
   * - The Salesforce host URL or instance URL.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^https://[A-Za-z0-9][^\s]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-salesforcesourceconfiguration-hosturl */
  HostUrl: string | Intrinsic
}

/**
 * The configuration of the SharePoint content. For example, configuring specific types of SharePoint content.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface SharePointCrawlerConfiguration {
  /**
   * - The configuration of filtering the SharePoint content. For example, configuring regular expression patterns to include or exclude certain content.
   * - _Required_: No
   * - _Type_: [CrawlFilterConfiguration](./aws-properties-bedrock-datasource-crawlfilterconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-sharepointcrawlerconfiguration-filterconfiguration */
  FilterConfiguration?: CrawlFilterConfiguration
}

/**
 * The endpoint information to connect to your SharePoint data source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface SharePointSourceConfiguration {
  /**
   * - The supported authentication type to authenticate and connect to your SharePoint site/sites.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `OAUTH2_CLIENT_CREDENTIALS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-sharepointsourceconfiguration-authtype */
  AuthType: string | Intrinsic
  /**
   * - The Amazon Resource Name of an AWS Secrets Manager secret that stores your authentication credentials for your SharePoint site/sites. For more information on the key-value pairs that must be included in your secret, depending on your authentication type, see [SharePoint connection configuration](https://docs.aws.amazon.com/bedrock/latest/userguide/sharepoint-data-source-connector.html#configuration-sharepoint-connector).
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:aws(|-cn|-us-gov):secretsmanager:[a-z0-9-]{1,20}:([0-9]{12}|):secret:[a-zA-Z0-9!/_+=.@-]{1,512}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-sharepointsourceconfiguration-credentialssecretarn */
  CredentialsSecretArn: string | Intrinsic
  /**
   * - The domain of your SharePoint instance or site URL/URLs.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-sharepointsourceconfiguration-domain */
  Domain: string | Intrinsic
  /**
   * - The supported host type, whether online/cloud or server/on-premises.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `ONLINE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-sharepointsourceconfiguration-hosttype */
  HostType: string | Intrinsic
  /**
   * - A list of one or more SharePoint site URLs.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-sharepointsourceconfiguration-siteurls */
  SiteUrls: (string | Intrinsic)[]
  /**
   * - The identifier of your Microsoft 365 tenant.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-sharepointsourceconfiguration-tenantid */
  TenantId?: string | Intrinsic
}

/**
 * Configurations for when you choose fixed-size chunking. If you set the `chunkingStrategy` as `NONE`, exclude this field.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface FixedSizeChunkingConfiguration {
  /**
   * - The maximum number of tokens to include in a chunk.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-fixedsizechunkingconfiguration-maxtokens */
  MaxTokens: number | Intrinsic
  /**
   * - The percentage of overlap between adjacent chunks of a data source.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `99`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-fixedsizechunkingconfiguration-overlappercentage */
  OverlapPercentage: number | Intrinsic
}

/**
 * Settings for semantic document chunking for a data source. Semantic chunking splits a document into into smaller documents based on groups of similar content derived from the text with natural language processing.
 * With semantic chunking, each sentence is compared to the next to determine how similar they are. You specify a threshold in the form of a percentile, where adjacent sentences that are less similar than that percentage of sentence pairs are divided into separate chunks. For example, if you set the threshold to 90, then the 10 percent of sentence pairs that are least similar are split. So if you have 101 sentences, 100 sentence pairs are compared, and the 10 with the least similarity are split, creating 11 chunks. These chunks are further split if they exceed the max token size.
 * You must also specify a buffer size, which determines whether sentences are compared in isolation, or within a moving context window that includes the previous and following sentence. For example, if you set the buffer size to `1`, the embedding for sentence 10 is derived from sentences 9, 10, and 11 combined.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface SemanticChunkingConfiguration {
  /**
   * - The dissimilarity threshold for splitting chunks.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `50`
   * - _Maximum_: `99`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-semanticchunkingconfiguration-breakpointpercentilethreshold */
  BreakpointPercentileThreshold: number | Intrinsic
  /**
   * - The buffer size.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `1`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-semanticchunkingconfiguration-buffersize */
  BufferSize: number | Intrinsic
  /**
   * - The maximum number of tokens that a chunk can contain.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-semanticchunkingconfiguration-maxtokens */
  MaxTokens: number | Intrinsic
}

/**
 * The rate limits for the URLs that you want to crawl. You should be authorized to crawl the URLs.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface WebCrawlerLimits {
  /**
   * - The max rate at which pages are crawled, up to 300 per minute per host.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `300`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-webcrawlerlimits-ratelimit */
  RateLimit?: number | Intrinsic
}

/**
 * Token settings for a layer in a hierarchical chunking configuration.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface HierarchicalChunkingLevelConfiguration {
  /**
   * - The maximum number of tokens that a chunk can contain in this layer.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `8192`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-hierarchicalchunkinglevelconfiguration-maxtokens */
  MaxTokens: number | Intrinsic
}

/**
 * An Amazon S3 location.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface S3Location {
  /**
   * - The location's URI. For example, `s3://my-bucket/chunk-processor/`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^s3://.{1,128}$`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-s3location-uri */
  URI: string | Intrinsic
}

/**
 * Instructions for interpreting the contents of a document.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface ParsingPrompt {
  /**
   * - Instructions for interpreting the contents of a document.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `10000`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-parsingprompt-parsingprompttext */
  ParsingPromptText: string | Intrinsic
}

/**
 * The seed or starting point URL. You should be authorized to crawl the URL.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface SeedUrl {
  /**
   * - A seed or starting point URL.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^https?://[A-Za-z0-9][^\s]*$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-seedurl-url */
  Url: string | Intrinsic
}

/**
 * A Lambda function that processes documents.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface TransformationLambdaConfiguration {
  /**
   * - The function's ARN identifier.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}(-gov)?-[a-z]+-\d{1}:\d{12}:function:[a-zA-Z0-9-_\.]+(:(\$LATEST|[a-zA-Z0-9-_]+))?$`
   * - _Minimum_: `0`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-transformationlambdaconfiguration-lambdaarn */
  LambdaArn: string | Intrinsic
}

/**
 * The specific filters applied to your data source content. You can filter out or include certain content.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface PatternObjectFilter {
  /**
   * - A list of one or more exclusion regular expression patterns to exclude certain object types that adhere to the pattern. If you specify an inclusion and exclusion filter/pattern and both match a document, the exclusion filter takes precedence and the document isn’t crawled.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `1000 | 25`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-patternobjectfilter-exclusionfilters */
  ExclusionFilters?: (string | Intrinsic)[]
  /**
   * - A list of one or more inclusion regular expression patterns to include certain object types that adhere to the pattern. If you specify an inclusion and exclusion filter/pattern and both match a document, the exclusion filter takes precedence and the document isn’t crawled.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `1000 | 25`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-patternobjectfilter-inclusionfilters */
  InclusionFilters?: (string | Intrinsic)[]
  /**
   * - The supported object type or content type of the data source.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-patternobjectfilter-objecttype */
  ObjectType: string | Intrinsic
}

/**
 * The configuration information to connect to Salesforce as your data source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface SalesforceDataSourceConfiguration {
  /**
   * - The configuration of the Salesforce content. For example, configuring specific types of Salesforce content.
   * - _Required_: No
   * - _Type_: [SalesforceCrawlerConfiguration](./aws-properties-bedrock-datasource-salesforcecrawlerconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-salesforcedatasourceconfiguration-crawlerconfiguration */
  CrawlerConfiguration?: SalesforceCrawlerConfiguration
  /**
   * - The endpoint information to connect to your Salesforce data source.
   * - _Required_: Yes
   * - _Type_: [SalesforceSourceConfiguration](./aws-properties-bedrock-datasource-salesforcesourceconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-salesforcedatasourceconfiguration-sourceconfiguration */
  SourceConfiguration: SalesforceSourceConfiguration
}

/**
 * The configuration information to connect to SharePoint as your data source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface SharePointDataSourceConfiguration {
  /**
   * - The configuration of the SharePoint content. For example, configuring specific types of SharePoint content.
   * - _Required_: No
   * - _Type_: [SharePointCrawlerConfiguration](./aws-properties-bedrock-datasource-sharepointcrawlerconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-sharepointdatasourceconfiguration-crawlerconfiguration */
  CrawlerConfiguration?: SharePointCrawlerConfiguration
  /**
   * - The endpoint information to connect to your SharePoint data source.
   * - _Required_: Yes
   * - _Type_: [SharePointSourceConfiguration](./aws-properties-bedrock-datasource-sharepointsourceconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-sharepointdatasourceconfiguration-sourceconfiguration */
  SourceConfiguration: SharePointSourceConfiguration
}

/**
 * The configuration of web URLs that you want to crawl. You should be authorized to crawl the URLs.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface WebCrawlerConfiguration {
  /**
   * - The configuration of crawl limits for the web URLs.
   * - _Required_: No
   * - _Type_: [WebCrawlerLimits](./aws-properties-bedrock-datasource-webcrawlerlimits.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-webcrawlerconfiguration-crawlerlimits */
  CrawlerLimits?: WebCrawlerLimits
  /**
   * - A list of one or more exclusion regular expression patterns to exclude certain URLs. If you specify an inclusion and exclusion filter/pattern and both match a URL, the exclusion filter takes precedence and the web content of the URL isn’t crawled.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `1000 | 25`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-webcrawlerconfiguration-exclusionfilters */
  ExclusionFilters?: (string | Intrinsic)[]
  /**
   * - A list of one or more inclusion regular expression patterns to include certain URLs. If you specify an inclusion and exclusion filter/pattern and both match a URL, the exclusion filter takes precedence and the web content of the URL isn’t crawled.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `1000 | 25`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-webcrawlerconfiguration-inclusionfilters */
  InclusionFilters?: (string | Intrinsic)[]
  /**
   * - The scope of what is crawled for your URLs.
   * - You can choose to crawl only web pages that belong to the same host or primary domain. For example, only web pages that contain the seed URL "https://docs.aws.amazon.com/bedrock/latest/userguide/" and no other domains. You can choose to include sub domains in addition to the host or primary domain. For example, web pages that contain "aws.amazon.com" can also include sub domain "docs.aws.amazon.com".
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `HOST_ONLY | SUBDOMAINS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-webcrawlerconfiguration-scope */
  Scope?: string | Intrinsic
}

/**
 * Settings for hierarchical document chunking for a data source. Hierarchical chunking splits documents into layers of chunks where the first layer contains large chunks, and the second layer contains smaller chunks derived from the first layer.
 * You configure the number of tokens to overlap, or repeat across adjacent chunks. For example, if you set overlap tokens to 60, the last 60 tokens in the first chunk are also included at the beginning of the second chunk. For each layer, you must also configure the maximum number of tokens in a chunk.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface HierarchicalChunkingConfiguration {
  /**
   * - Token settings for each layer.
   * - _Required_: Yes
   * - _Type_: Array of [HierarchicalChunkingLevelConfiguration](./aws-properties-bedrock-datasource-hierarchicalchunkinglevelconfiguration.html)
   * - _Minimum_: `2`
   * - _Maximum_: `2`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-hierarchicalchunkingconfiguration-levelconfigurations */
  LevelConfigurations: HierarchicalChunkingLevelConfiguration[]
  /**
   * - The number of tokens to repeat across chunks in the same layer.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-hierarchicalchunkingconfiguration-overlaptokens */
  OverlapTokens: number | Intrinsic
}

/**
 * A location for storing content from data sources temporarily as it is processed by custom components in the ingestion pipeline.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface IntermediateStorage {
  /**
   * - An S3 bucket path.
   * - _Required_: Yes
   * - _Type_: [S3Location](./aws-properties-bedrock-datasource-s3location.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-intermediatestorage-s3location */
  S3Location: S3Location
}

/**
 * Settings for a foundation model or [inference profile](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html) used to parse documents for a data source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface BedrockFoundationModelConfiguration {
  /**
   * - The ARN of the foundation model or [inference profile](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html).
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}::foundation-model/([a-z0-9-]{1,63}[.]{1}[a-z0-9-]{1,63}([.]?[a-z0-9-]{1,63})([:][a-z0-9-]{1,63}){0,2})$`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-bedrockfoundationmodelconfiguration-modelarn */
  ModelArn: string | Intrinsic
  /**
   * - Instructions for interpreting the contents of a document.
   * - _Required_: No
   * - _Type_: [ParsingPrompt](./aws-properties-bedrock-datasource-parsingprompt.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-bedrockfoundationmodelconfiguration-parsingprompt */
  ParsingPrompt?: ParsingPrompt
}

/**
 * The configuration of web URLs that you want to crawl. You should be authorized to crawl the URLs.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface UrlConfiguration {
  /**
   * - One or more seed or starting point URLs.
   * - _Required_: Yes
   * - _Type_: Array of [SeedUrl](./aws-properties-bedrock-datasource-seedurl.html)
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-urlconfiguration-seedurls */
  SeedUrls: SeedUrl[]
}

/**
 * A Lambda function that processes documents.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface TransformationFunction {
  /**
   * - The Lambda function.
   * - _Required_: Yes
   * - _Type_: [TransformationLambdaConfiguration](./aws-properties-bedrock-datasource-transformationlambdaconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-transformationfunction-transformationlambdaconfiguration */
  TransformationLambdaConfiguration: TransformationLambdaConfiguration
}

/**
 * The configuration of filtering certain objects or content types of the data source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface PatternObjectFilterConfiguration {
  /**
   * - The configuration of specific filters applied to your data source content. You can filter out or include certain content.
   * - _Required_: Yes
   * - _Type_: Array of [PatternObjectFilter](./aws-properties-bedrock-datasource-patternobjectfilter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `25`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-patternobjectfilterconfiguration-filters */
  Filters: PatternObjectFilter[]
}

/**
 * Details about how to chunk the documents in the data source. A _chunk_ refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface ChunkingConfiguration {
  /**
   * - Knowledge base can split your source data into chunks. A _chunk_ refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried. You have the following options for chunking your data. If you opt for `NONE`, then you may want to pre-process your files by splitting them up such that each file corresponds to a chunk.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `FIXED_SIZE | NONE | HIERARCHICAL | SEMANTIC`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-chunkingconfiguration-chunkingstrategy */
  ChunkingStrategy: string | Intrinsic
  /**
   * - Configurations for when you choose fixed-size chunking. If you set the `chunkingStrategy` as `NONE`, exclude this field.
   * - _Required_: No
   * - _Type_: [FixedSizeChunkingConfiguration](./aws-properties-bedrock-datasource-fixedsizechunkingconfiguration.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-chunkingconfiguration-fixedsizechunkingconfiguration */
  FixedSizeChunkingConfiguration?: FixedSizeChunkingConfiguration
  /**
   * - Settings for hierarchical document chunking for a data source. Hierarchical chunking splits documents into layers of chunks where the first layer contains large chunks, and the second layer contains smaller chunks derived from the first layer.
   * - _Required_: No
   * - _Type_: [HierarchicalChunkingConfiguration](./aws-properties-bedrock-datasource-hierarchicalchunkingconfiguration.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-chunkingconfiguration-hierarchicalchunkingconfiguration */
  HierarchicalChunkingConfiguration?: HierarchicalChunkingConfiguration
  /**
   * - Settings for semantic document chunking for a data source. Semantic chunking splits a document into into smaller documents based on groups of similar content derived from the text with natural language processing.
   * - _Required_: No
   * - _Type_: [SemanticChunkingConfiguration](./aws-properties-bedrock-datasource-semanticchunkingconfiguration.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-chunkingconfiguration-semanticchunkingconfiguration */
  SemanticChunkingConfiguration?: SemanticChunkingConfiguration
}

/**
 * Settings for parsing document contents. By default, the service converts the contents of each document into text before splitting it into chunks. To improve processing of PDF files with tables and images, you can configure the data source to convert the pages of text into images and use a model to describe the contents of each page.
 * To use a model to parse PDF documents, set the parsing strategy to `BEDROCK_FOUNDATION_MODEL` and specify the model or [inference profile](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html) to use by ARN. You can also override the default parsing prompt with instructions for how to interpret images and tables in your documents. The following models are supported.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface ParsingConfiguration {
  /**
   * - Settings for a foundation model used to parse documents for a data source.
   * - _Required_: No
   * - _Type_: [BedrockFoundationModelConfiguration](./aws-properties-bedrock-datasource-bedrockfoundationmodelconfiguration.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-parsingconfiguration-bedrockfoundationmodelconfiguration */
  BedrockFoundationModelConfiguration?: BedrockFoundationModelConfiguration
  /**
   * - The parsing strategy for the data source.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `BEDROCK_FOUNDATION_MODEL`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-parsingconfiguration-parsingstrategy */
  ParsingStrategy: string | Intrinsic
}

/**
 * The configuration of the URL/URLs for the web content that you want to crawl. You should be authorized to crawl the URLs.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface WebSourceConfiguration {
  /**
   * - The configuration of the URL/URLs.
   * - _Required_: Yes
   * - _Type_: [UrlConfiguration](./aws-properties-bedrock-datasource-urlconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-websourceconfiguration-urlconfiguration */
  UrlConfiguration: UrlConfiguration
}

/**
 * A custom processing step for documents moving through a data source ingestion pipeline. To process documents after they have been converted into chunks, set the step to apply to `POST_CHUNKING`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface Transformation {
  /**
   * - When the service applies the transformation.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `POST_CHUNKING`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-transformation-steptoapply */
  StepToApply: string | Intrinsic
  /**
   * - A Lambda function that processes documents.
   * - _Required_: Yes
   * - _Type_: [TransformationFunction](./aws-properties-bedrock-datasource-transformationfunction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-transformation-transformationfunction */
  TransformationFunction: TransformationFunction
}

/**
 * The configuration of filtering the data source content. For example, configuring regular expression patterns to include or exclude certain content.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface CrawlFilterConfiguration {
  /**
   * - The configuration of filtering certain objects or content types of the data source.
   * - _Required_: No
   * - _Type_: [PatternObjectFilterConfiguration](./aws-properties-bedrock-datasource-patternobjectfilterconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-crawlfilterconfiguration-patternobjectfilter */
  PatternObjectFilter?: PatternObjectFilterConfiguration
  /**
   * - The type of filtering that you want to apply to certain objects or content of the data source. For example, the `PATTERN` type is regular expression patterns you can apply to filter your content.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `PATTERN`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-crawlfilterconfiguration-type */
  Type: string | Intrinsic
}

/**
 * The configuration details for the web data source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface WebDataSourceConfiguration {
  /**
   * - The Web Crawler configuration details for the web data source.
   * - _Required_: No
   * - _Type_: [WebCrawlerConfiguration](./aws-properties-bedrock-datasource-webcrawlerconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-webdatasourceconfiguration-crawlerconfiguration */
  CrawlerConfiguration?: WebCrawlerConfiguration
  /**
   * - The source configuration details for the web data source.
   * - _Required_: Yes
   * - _Type_: [WebSourceConfiguration](./aws-properties-bedrock-datasource-websourceconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-webdatasourceconfiguration-sourceconfiguration */
  SourceConfiguration: WebSourceConfiguration
}

/**
 * Settings for customizing steps in the data source content ingestion pipeline.
 * You can configure the data source to process documents with a Lambda function after they are parsed and converted into chunks. When you add a post-chunking transformation, the service stores chunked documents in an S3 bucket and invokes a Lambda function to process them.
 * To process chunked documents with a Lambda function, define an S3 bucket path for input and output objects, and a transformation that specifies the Lambda function to invoke. You can use the Lambda function to customize how chunks are split, and the metadata for each chunk.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface CustomTransformationConfiguration {
  /**
   * - An S3 bucket path for input and output objects.
   * - _Required_: Yes
   * - _Type_: [IntermediateStorage](./aws-properties-bedrock-datasource-intermediatestorage.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-customtransformationconfiguration-intermediatestorage */
  IntermediateStorage: IntermediateStorage
  /**
   * - A Lambda function that processes documents.
   * - _Required_: Yes
   * - _Type_: Array of [Transformation](./aws-properties-bedrock-datasource-transformation.html)
   * - _Minimum_: `1`
   * - _Maximum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-customtransformationconfiguration-transformations */
  Transformations: Transformation[]
}

/**
 * The configuration of the Confluence content. For example, configuring specific types of Confluence content.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface ConfluenceCrawlerConfiguration {
  /**
   * - The configuration of filtering the Confluence content. For example, configuring regular expression patterns to include or exclude certain content.
   * - _Required_: No
   * - _Type_: [CrawlFilterConfiguration](./aws-properties-bedrock-datasource-crawlfilterconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-confluencecrawlerconfiguration-filterconfiguration */
  FilterConfiguration?: CrawlFilterConfiguration
}

/**
 * Contains details about how to ingest the documents in a data source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface VectorIngestionConfiguration {
  /**
   * - Details about how to chunk the documents in the data source. A _chunk_ refers to an excerpt from a data source that is returned when the knowledge base that it belongs to is queried.
   * - _Required_: No
   * - _Type_: [ChunkingConfiguration](./aws-properties-bedrock-datasource-chunkingconfiguration.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-vectoringestionconfiguration-chunkingconfiguration */
  ChunkingConfiguration?: ChunkingConfiguration
  /**
   * - A custom document transformer for parsed data source documents.
   * - _Required_: No
   * - _Type_: [CustomTransformationConfiguration](./aws-properties-bedrock-datasource-customtransformationconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-vectoringestionconfiguration-customtransformationconfiguration */
  CustomTransformationConfiguration?: CustomTransformationConfiguration
  /**
   * - A custom parser for data source documents.
   * - _Required_: No
   * - _Type_: [ParsingConfiguration](./aws-properties-bedrock-datasource-parsingconfiguration.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-vectoringestionconfiguration-parsingconfiguration */
  ParsingConfiguration?: ParsingConfiguration
}

/**
 * The configuration information to connect to Confluence as your data source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface ConfluenceDataSourceConfiguration {
  /**
   * - The configuration of the Confluence content. For example, configuring specific types of Confluence content.
   * - _Required_: No
   * - _Type_: [ConfluenceCrawlerConfiguration](./aws-properties-bedrock-datasource-confluencecrawlerconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-confluencedatasourceconfiguration-crawlerconfiguration */
  CrawlerConfiguration?: ConfluenceCrawlerConfiguration
  /**
   * - The endpoint information to connect to your Confluence data source.
   * - _Required_: Yes
   * - _Type_: [ConfluenceSourceConfiguration](./aws-properties-bedrock-datasource-confluencesourceconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-confluencedatasourceconfiguration-sourceconfiguration */
  SourceConfiguration: ConfluenceSourceConfiguration
}

/**
 * The connection configuration for the data source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface DataSourceConfiguration {
  /**
   * - The configuration information to connect to Confluence as your data source.
   * - _Required_: No
   * - _Type_: [ConfluenceDataSourceConfiguration](./aws-properties-bedrock-datasource-confluencedatasourceconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-datasourceconfiguration-confluenceconfiguration */
  ConfluenceConfiguration?: ConfluenceDataSourceConfiguration
  /**
   * - The configuration information to connect to Amazon S3 as your data source.
   * - _Required_: No
   * - _Type_: [S3DataSourceConfiguration](./aws-properties-bedrock-datasource-s3datasourceconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-datasourceconfiguration-s3configuration */
  S3Configuration?: S3DataSourceConfiguration
  /**
   * - The configuration information to connect to Salesforce as your data source.
   * - _Required_: No
   * - _Type_: [SalesforceDataSourceConfiguration](./aws-properties-bedrock-datasource-salesforcedatasourceconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-datasourceconfiguration-salesforceconfiguration */
  SalesforceConfiguration?: SalesforceDataSourceConfiguration
  /**
   * - The configuration information to connect to SharePoint as your data source.
   * - _Required_: No
   * - _Type_: [SharePointDataSourceConfiguration](./aws-properties-bedrock-datasource-sharepointdatasourceconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-datasourceconfiguration-sharepointconfiguration */
  SharePointConfiguration?: SharePointDataSourceConfiguration
  /**
   * - The type of data source.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `S3 | CONFLUENCE | SALESFORCE | SHAREPOINT | WEB`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-datasourceconfiguration-type */
  Type: string | Intrinsic
  /**
   * - The configuration of web URLs to crawl for your data source. You should be authorized to crawl the URLs.
   * - _Required_: No
   * - _Type_: [WebDataSourceConfiguration](./aws-properties-bedrock-datasource-webdatasourceconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-datasourceconfiguration-webconfiguration */
  WebConfiguration?: WebDataSourceConfiguration
}

/**
 * Specifies a data source as a resource in a top-level template. Minimally, you must specify the following properties:
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html */

export interface BedrockDataSource {
  Type: 'AWS::Bedrock::DataSource'
  Properties: {
    /**
     * - The data deletion policy for the data source.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `RETAIN | DELETE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-datadeletionpolicy */
    DataDeletionPolicy?: string | Intrinsic
    /**
     * - The connection configuration for the data source.
     * - _Required_: Yes
     * - _Type_: [DataSourceConfiguration](./aws-properties-bedrock-datasource-datasourceconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-datasourceconfiguration */
    DataSourceConfiguration: DataSourceConfiguration
    /**
     * - The description of the data source.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-description */
    Description?: string | Intrinsic
    /**
     * - The unique identifier of the knowledge base to which the data source belongs.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[0-9a-zA-Z]{10}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-knowledgebaseid */
    KnowledgeBaseId: string | Intrinsic
    /**
     * - The name of the data source.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([0-9a-zA-Z][_-]?){1,100}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-name */
    Name: string | Intrinsic
    /**
     * - Contains details about the configuration of the server-side encryption.
     * - _Required_: No
     * - _Type_: [ServerSideEncryptionConfiguration](./aws-properties-bedrock-datasource-serversideencryptionconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-serversideencryptionconfiguration */
    ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration
    /**
     * - Contains details about how to ingest the documents in the data source.
     * - _Required_: No
     * - _Type_: [VectorIngestionConfiguration](./aws-properties-bedrock-datasource-vectoringestionconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-datasource.html#cfn-bedrock-datasource-vectoringestionconfiguration */
    VectorIngestionConfiguration?: VectorIngestionConfiguration
  }
}
