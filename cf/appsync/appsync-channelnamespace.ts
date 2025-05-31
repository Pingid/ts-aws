import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Describes an authorization configuration. Use `AuthMode` to specify the publishing and subscription authorization configuration for an Event API.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html */

export interface AuthMode {
    /**
     * - The authorization type.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `AMAZON_COGNITO_USER_POOLS | AWS_IAM | API_KEY | OPENID_CONNECT | AWS_LAMBDA`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html#cfn-appsync-channelnamespace-authmode-authtype */
    "AuthType"?: string | Intrinsic;
}

/**
 * A tag (key-value pair) for this channel namespace.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html */

export interface Tag {
    /**
     * - Describes the key of the tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?!aws:)[ a-zA-Z+-=._:/]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html#cfn-appsync-channelnamespace-tag-key */
    "Key": string | Intrinsic;
    /**
     * - Describes the value of the tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[\s\w+-=\.:/@]*$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html#cfn-appsync-channelnamespace-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The `LambdaConfig` property type specifies the integration configuration for a Lambda data source.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html */

export interface LambdaConfig {
    /**
     * - The invocation type for a Lambda data source.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `REQUEST_RESPONSE | EVENT`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html#cfn-appsync-channelnamespace-lambdaconfig-invoketype */
    "InvokeType": string | Intrinsic;
}

/**
 * The `Integration` property type specifies the integration data source configuration for the handler.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html */

export interface Integration {
    /**
     * - The unique name of the data source that has been configured on the API.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `([_A-Za-z][_0-9A-Za-z]{0,511})?`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html#cfn-appsync-channelnamespace-integration-datasourcename */
    "DataSourceName": string | Intrinsic;
    /**
     * - The configuration for a Lambda data source.
     * - _Required_: No
     * - _Type_: [LambdaConfig](./aws-properties-appsync-channelnamespace-lambdaconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html#cfn-appsync-channelnamespace-integration-lambdaconfig */
    "LambdaConfig"?: LambdaConfig;
}

/**
 * The `HandlerConfig` property type specifies the configuration for the handler.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html */

export interface HandlerConfig {
    /**
     * - The behavior for the handler.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `CODE | DIRECT`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html#cfn-appsync-channelnamespace-handlerconfig-behavior */
    "Behavior": string | Intrinsic;
    /**
     * - The integration data source configuration for the handler.
     * - _Required_: Yes
     * - _Type_: [Integration](./aws-properties-appsync-channelnamespace-integration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html#cfn-appsync-channelnamespace-handlerconfig-integration */
    "Integration": Integration;
}

/**
 * The `HandlerConfigs` property type specifies the configuration for the `OnPublish` and `OnSubscribe` handlers.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html */

export interface HandlerConfigs {
    /**
     * - The configuration for the `OnPublish` handler.
     * - _Required_: No
     * - _Type_: [HandlerConfig](./aws-properties-appsync-channelnamespace-handlerconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html#cfn-appsync-channelnamespace-handlerconfigs-onpublish */
    "OnPublish"?: HandlerConfig;
    /**
     * - The configuration for the `OnSubscribe` handler.
     * - _Required_: No
     * - _Type_: [HandlerConfig](./aws-properties-appsync-channelnamespace-handlerconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html#cfn-appsync-channelnamespace-handlerconfigs-onsubscribe */
    "OnSubscribe"?: HandlerConfig;
}

/**
 * The `AWS::AppSync::ChannelNamespace` resource creates a channel namespace associated with an `Api`. The `ChannelNamespace` contains the definitions for code handlers for the `Api`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html */

export interface AppSyncChannelNamespace extends ResourceAttributes {
    "Type": "AWS::AppSync::ChannelNamespace";
    "Properties": {
        /**
         * - The `Api` ID.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html#cfn-appsync-channelnamespace-apiid */
        "ApiId": string | Intrinsic;
        /**
         * - The event handler functions that run custom business logic to process published events and subscribe requests.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `32768`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html#cfn-appsync-channelnamespace-codehandlers */
        "CodeHandlers"?: string | Intrinsic;
        /**
         * - The Amazon S3 endpoint where the code is located.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html#cfn-appsync-channelnamespace-codes3location */
        "CodeS3Location"?: string | Intrinsic;
        /**
         * - The configuration for the `OnPublish` and `OnSubscribe` handlers.
         * - _Required_: No
         * - _Type_: [HandlerConfigs](./aws-properties-appsync-channelnamespace-handlerconfigs.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html#cfn-appsync-channelnamespace-handlerconfigs */
        "HandlerConfigs"?: HandlerConfigs;
        /**
         * - The name of the channel namespace. This name must be unique within the `Api`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `([A-Za-z0-9](?:[A-Za-z0-9\-]{0,48}[A-Za-z0-9])?)`
         * - _Minimum_: `1`
         * - _Maximum_: `50`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html#cfn-appsync-channelnamespace-name */
        "Name": string | Intrinsic;
        /**
         * - The authorization mode to use for publishing messages on the channel namespace. This configuration overrides the default `Api`authorization configuration.
         * - _Required_: No
         * - _Type_: Array of [AuthMode](./aws-properties-appsync-channelnamespace-authmode.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html#cfn-appsync-channelnamespace-publishauthmodes */
        "PublishAuthModes"?: AuthMode[];
        /**
         * - The authorization mode to use for subscribing to messages on the channel namespace. This configuration overrides the default `Api`authorization configuration.
         * - _Required_: No
         * - _Type_: Array of [AuthMode](./aws-properties-appsync-channelnamespace-authmode.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html#cfn-appsync-channelnamespace-subscribeauthmodes */
        "SubscribeAuthModes"?: AuthMode[];
        /**
         * - A set of tags (key-value pairs) for this channel namespace.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-appsync-channelnamespace-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-channelnamespace.html#cfn-appsync-channelnamespace-tags */
        "Tags"?: Tag[];
    };
}