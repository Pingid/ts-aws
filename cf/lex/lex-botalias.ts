import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `Tag` property type specifies Property description not available. for an [AWS::Lex::BotAlias](./aws-resource-lex-botalias.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html */

export interface Tag {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-tag-key */
  Key: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-tag-value */
  Value: string | Intrinsic
}

/**
 * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html */

export interface SentimentAnalysisSettings {
  /**
   * - Sets whether Amazon Lex uses Amazon Comprehend to detect the sentiment of user utterances.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-sentimentanalysissettings-detectsentiment */
  DetectSentiment: boolean | Intrinsic
}

/**
 * Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html */

export interface LambdaCodeHook {
  /**
   * - The version of the request-response that you want Amazon Lex to use to invoke your Lambda function.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `5`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-lambdacodehook-codehookinterfaceversion */
  CodeHookInterfaceVersion: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of the Lambda function.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `20`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-lambdacodehook-lambdaarn */
  LambdaArn: string | Intrinsic
}

/**
 * Specifies an Amazon S3 bucket for logging audio conversations
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html */

export interface S3BucketLogDestination {
  /**
   * - The Amazon Resource Name (ARN) of an AWS Key Management Service (KMS) key for encrypting audio log files stored in an Amazon S3 bucket.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:[\w\-]+:kms:[\w\-]+:[\d]{12}:(?:key\/[\w\-]+|alias\/[a-zA-Z0-9:\/_\-]{1,256})$`
   * - _Minimum_: `20`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-s3bucketlogdestination-kmskeyarn */
  KmsKeyArn?: string | Intrinsic
  /**
   * - The S3 prefix to assign to audio log files.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-s3bucketlogdestination-logprefix */
  LogPrefix: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of an Amazon S3 bucket where audio log files are stored.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:[\w\-]+:s3:::[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9]$`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-s3bucketlogdestination-s3bucketarn */
  S3BucketArn: string | Intrinsic
}

/**
 * The Amazon CloudWatch Logs log group where the text and metadata logs are delivered. The log group must exist before you enable logging.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html */

export interface CloudWatchLogGroupLogDestination {
  /**
   * - The Amazon Resource Name (ARN) of the log group where text and metadata logs are delivered.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-cloudwatchloggrouplogdestination-cloudwatchloggrouparn */
  CloudWatchLogGroupArn: string | Intrinsic
  /**
   * - The prefix of the log stream name within the log group that you specified
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-cloudwatchloggrouplogdestination-logprefix */
  LogPrefix: string | Intrinsic
}

/**
 * Contains information about code hooks that Amazon Lex calls during a conversation.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html */

export interface CodeHookSpecification {
  /**
   * - Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot.
   * - _Required_: Yes
   * - _Type_: [LambdaCodeHook](./aws-properties-lex-botalias-lambdacodehook.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-codehookspecification-lambdacodehook */
  LambdaCodeHook: LambdaCodeHook
}

/**
 * Specifies the S3 bucket location where audio logs are stored.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html */

export interface AudioLogDestination {
  /**
   * - The S3 bucket location where audio logs are stored.
   * - _Required_: Yes
   * - _Type_: [S3BucketLogDestination](./aws-properties-lex-botalias-s3bucketlogdestination.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-audiologdestination-s3bucket */
  S3Bucket: S3BucketLogDestination
}

/**
 * Defines the Amazon CloudWatch Logs destination log group for conversation text logs.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html */

export interface TextLogDestination {
  /**
   * - Defines the Amazon CloudWatch Logs log group where text and metadata logs are delivered.
   * - _Required_: Yes
   * - _Type_: [CloudWatchLogGroupLogDestination](./aws-properties-lex-botalias-cloudwatchloggrouplogdestination.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-textlogdestination-cloudwatch */
  CloudWatch: CloudWatchLogGroupLogDestination
}

/**
 * Specifies settings that are unique to a locale. For example, you can use different Lambda function depending on the bot's locale.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html */

export interface BotAliasLocaleSettingsItem {
  /**
   * - Specifies the Lambda function that should be used in the locale.
   * - _Required_: No
   * - _Type_: [CodeHookSpecification](./aws-properties-lex-botalias-codehookspecification.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-botaliaslocalesettings-codehookspecification */
  CodeHookSpecification?: CodeHookSpecification
  /**
   * - Determines whether the locale is enabled for the bot. If the value is `false`, the locale isn't available for use.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-botaliaslocalesettings-enabled */
  Enabled: boolean | Intrinsic
}

/**
 * Settings for logging audio of conversations between Amazon Lex and a user. You specify whether to log audio and the Amazon S3 bucket where the audio file is stored.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html */

export interface AudioLogSetting {
  /**
   * - The location of audio log files collected when conversation logging is enabled for a bot.
   * - _Required_: Yes
   * - _Type_: [AudioLogDestination](./aws-properties-lex-botalias-audiologdestination.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-audiologsetting-destination */
  Destination: AudioLogDestination
  /**
   * - Determines whether audio logging in enabled for the bot.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-audiologsetting-enabled */
  Enabled: boolean | Intrinsic
}

/**
 * Defines settings to enable text conversation logs.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html */

export interface TextLogSetting {
  /**
   * - Defines the Amazon CloudWatch Logs destination log group for conversation text logs.
   * - _Required_: Yes
   * - _Type_: [TextLogDestination](./aws-properties-lex-botalias-textlogdestination.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-textlogsetting-destination */
  Destination: TextLogDestination
  /**
   * - Determines whether conversation logs should be stored for an alias.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-textlogsetting-enabled */
  Enabled: boolean | Intrinsic
}

/**
 * Configures conversation logging that saves audio, text, and metadata for the conversations with your users.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html */

export interface ConversationLogSettings {
  /**
   * - The Amazon S3 settings for logging audio to an S3 bucket.
   * - _Required_: No
   * - _Type_: Array of [AudioLogSetting](./aws-properties-lex-botalias-audiologsetting.html)
   * - _Maximum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-conversationlogsettings-audiologsettings */
  AudioLogSettings?: AudioLogSetting[]
  /**
   * - The Amazon CloudWatch Logs settings for logging text and metadata.
   * - _Required_: No
   * - _Type_: Array of [TextLogSetting](./aws-properties-lex-botalias-textlogsetting.html)
   * - _Maximum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-conversationlogsettings-textlogsettings */
  TextLogSettings?: TextLogSetting[]
}

/**
 * ###### Note
 *
 * Amazon Lex V2 is the only supported version in AWS CloudFormation.
 * Specifies an alias for the specified version of a bot. Use an alias to enable you to change the version of a bot without updating applications that use the bot.
 * For example, you can specify an alias called "PROD" that your applications use to call the Amazon Lex bot.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html */

export interface LexBotAlias extends ResourceAttributes {
  Type: 'AWS::Lex::BotAlias'
  Properties: {
    /**
     * - Specifies settings that are unique to a locale. For example, you can use different Lambda function depending on the bot's locale.
     * - _Required_: No
     * - _Type_: [Array](./aws-properties-lex-botalias-botaliaslocalesettings.html) of [BotAliasLocaleSettingsItem](./aws-properties-lex-botalias-botaliaslocalesettingsitem.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-botaliaslocalesettings */
    BotAliasLocaleSettings?: BotAliasLocaleSettingsItem[]
    /**
     * - The name of the bot alias.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([0-9a-zA-Z][_-]?)+$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-botaliasname */
    BotAliasName: string | Intrinsic
    /**
     * - An array of key-value pairs to apply to this resource.
     * - You can only add tags when you specify an alias.
     * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-lex-botalias-tag.html)
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-botaliastags */
    BotAliasTags?: Tag[]
    /**
     * - The unique identifier of the bot.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[0-9a-zA-Z]+$`
     * - _Minimum_: `10`
     * - _Maximum_: `10`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-botid */
    BotId: string | Intrinsic
    /**
     * - The version of the bot that the bot alias references.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^(DRAFT|[0-9]+)$`
     * - _Minimum_: `1`
     * - _Maximum_: `5`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-botversion */
    BotVersion?: string | Intrinsic
    /**
     * - Specifies whether Amazon Lex logs text and audio for conversations with the bot. When you enable conversation logs, text logs store text input, transcripts of audio input, and associated metadata in Amazon CloudWatch logs. Audio logs store input in Amazon S3.
     * - _Required_: No
     * - _Type_: [ConversationLogSettings](./aws-properties-lex-botalias-conversationlogsettings.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-conversationlogsettings */
    ConversationLogSettings?: ConversationLogSettings
    /**
     * - The description of the bot alias.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-description */
    Description?: string | Intrinsic
    /**
     * - Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
     * - _Required_: No
     * - _Type_: [SentimentAnalysisSettings](./aws-properties-lex-botalias-sentimentanalysissettings.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botalias.html#cfn-lex-botalias-sentimentanalysissettings */
    SentimentAnalysisSettings?: SentimentAnalysisSettings
  }
}
