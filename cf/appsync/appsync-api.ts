import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A tag (key-value pair) for this API.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html */

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
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html#cfn-appsync-api-tag-key */
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
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html#cfn-appsync-api-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Describes an authorization configuration. Use `AuthMode` to specify the publishing and subscription authorization configuration for an Event API.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html */

export interface AuthMode {
    /**
     * - The authorization type.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `AMAZON_COGNITO_USER_POOLS | AWS_IAM | API_KEY | OPENID_CONNECT | AWS_LAMBDA`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html#cfn-appsync-api-authmode-authtype */
    "AuthType"?: string | Intrinsic;
}

/**
 * Describes the CloudWatch Logs configuration for the Event API.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html */

export interface EventLogConfig {
    /**
     * - The IAM service role that AWS AppSync assumes to publish CloudWatch Logs in your account.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html#cfn-appsync-api-eventlogconfig-cloudwatchlogsrolearn */
    "CloudWatchLogsRoleArn": string | Intrinsic;
    /**
     * - The type of information to log for the Event API.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `NONE | ERROR | ALL | INFO | DEBUG`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html#cfn-appsync-api-eventlogconfig-loglevel */
    "LogLevel": string | Intrinsic;
}

/**
 * Describes an Amazon Cognito configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html */

export interface CognitoConfig {
    /**
     * - A regular expression for validating the incoming Amazon Cognito user pool app client ID. If this value isn't set, no filtering is applied.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html#cfn-appsync-api-cognitoconfig-appidclientregex */
    "AppIdClientRegex"?: string | Intrinsic;
    /**
     * - The AWS Region in which the user pool was created.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html#cfn-appsync-api-cognitoconfig-awsregion */
    "AwsRegion": string | Intrinsic;
    /**
     * - The user pool ID.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html#cfn-appsync-api-cognitoconfig-userpoolid */
    "UserPoolId": string | Intrinsic;
}

/**
 * Describes an OpenID Connect (OIDC) configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html */

export interface OpenIDConnectConfig {
    /**
     * - The number of milliseconds that a token is valid after being authenticated.
     * - _Required_: No
     * - _Type_: Number
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html#cfn-appsync-api-openidconnectconfig-authttl */
    "AuthTTL"?: number | Intrinsic;
    /**
     * - The client identifier of the relying party at the OpenID identity provider. This identifier is typically obtained when the relying party is registered with the OpenID identity provider. You can specify a regular expression so that AWS AppSync can validate against multiple client identifiers at a time.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html#cfn-appsync-api-openidconnectconfig-clientid */
    "ClientId"?: string | Intrinsic;
    /**
     * - The number of milliseconds that a token is valid after it's issued to a user.
     * - _Required_: No
     * - _Type_: Number
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html#cfn-appsync-api-openidconnectconfig-iatttl */
    "IatTTL"?: number | Intrinsic;
    /**
     * - The issuer for the OIDC configuration. The issuer returned by discovery must exactly match the value of `iss` in the ID token.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html#cfn-appsync-api-openidconnectconfig-issuer */
    "Issuer": string | Intrinsic;
}

/**
 * A `LambdaAuthorizerConfig` specifies how to authorize AWS AppSync API access when using the `AWS_LAMBDA` authorizer mode. Be aware that an AWS AppSync API can have only one AWS Lambda authorizer configured at a time.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html */

export interface LambdaAuthorizerConfig {
    /**
     * - The number of seconds a response should be cached for. The default is 0 seconds, which disables caching. If you don't specify a value for `authorizerResultTtlInSeconds`, the default value is used. The maximum value is one hour (3600 seconds). The Lambda function can override this by returning a `ttlOverride` key in its response.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `3600`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html#cfn-appsync-api-lambdaauthorizerconfig-authorizerresultttlinseconds */
    "AuthorizerResultTtlInSeconds"?: number | Intrinsic;
    /**
     * - The Amazon Resource Name (ARN) of the Lambda function to be called for authorization. This can be a standard Lambda ARN, a version ARN (`.../v3`), or an alias ARN.
     * - **Note**: This Lambda function must have the following resource-based policy assigned to it. When configuring Lambda authorizers in the console, this is done for you. To use the AWS Command Line Interface (AWS CLI), run the following:
     * - `aws lambda add-permission --function-name "arn:aws:lambda:us-east-2:111122223333:function:my-function" --statement-id "appsync" --principal appsync.amazonaws.com --action lambda:InvokeFunction`
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html#cfn-appsync-api-lambdaauthorizerconfig-authorizeruri */
    "AuthorizerUri": string | Intrinsic;
    /**
     * - A regular expression for validation of tokens before the Lambda function is called.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html#cfn-appsync-api-lambdaauthorizerconfig-identityvalidationexpression */
    "IdentityValidationExpression"?: string | Intrinsic;
}

/**
 * Describes an authorization provider.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html */

export interface AuthProvider {
    /**
     * - The authorization type.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `AMAZON_COGNITO_USER_POOLS | AWS_IAM | API_KEY | OPENID_CONNECT | AWS_LAMBDA`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html#cfn-appsync-api-authprovider-authtype */
    "AuthType": string | Intrinsic;
    /**
     * - Describes an Amazon Cognito user pool configuration.
     * - _Required_: No
     * - _Type_: [CognitoConfig](./aws-properties-appsync-api-cognitoconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html#cfn-appsync-api-authprovider-cognitoconfig */
    "CognitoConfig"?: CognitoConfig;
    /**
     * - A `LambdaAuthorizerConfig` specifies how to authorize AWS AppSync API access when using the `AWS_LAMBDA` authorizer mode. Be aware that an AWS AppSync API can have only one AWS Lambda authorizer configured at a time.
     * - _Required_: No
     * - _Type_: [LambdaAuthorizerConfig](./aws-properties-appsync-api-lambdaauthorizerconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html#cfn-appsync-api-authprovider-lambdaauthorizerconfig */
    "LambdaAuthorizerConfig"?: LambdaAuthorizerConfig;
    /**
     * - Describes an OpenID Connect (OIDC) configuration.
     * - _Required_: No
     * - _Type_: [OpenIDConnectConfig](./aws-properties-appsync-api-openidconnectconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html#cfn-appsync-api-authprovider-openidconnectconfig */
    "OpenIDConnectConfig"?: OpenIDConnectConfig;
}

/**
 * Describes the authorization configuration for connections, message publishing, message subscriptions, and logging for an Event API.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html */

export interface EventConfig {
    /**
     * - A list of authorization providers.
     * - _Required_: Yes
     * - _Type_: Array of [AuthProvider](./aws-properties-appsync-api-authprovider.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html#cfn-appsync-api-eventconfig-authproviders */
    "AuthProviders": AuthProvider[];
    /**
     * - A list of valid authorization modes for the Event API connections.
     * - _Required_: Yes
     * - _Type_: Array of [AuthMode](./aws-properties-appsync-api-authmode.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html#cfn-appsync-api-eventconfig-connectionauthmodes */
    "ConnectionAuthModes": AuthMode[];
    /**
     * - A list of valid authorization modes for the Event API publishing.
     * - _Required_: Yes
     * - _Type_: Array of [AuthMode](./aws-properties-appsync-api-authmode.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html#cfn-appsync-api-eventconfig-defaultpublishauthmodes */
    "DefaultPublishAuthModes": AuthMode[];
    /**
     * - A list of valid authorization modes for the Event API subscriptions.
     * - _Required_: Yes
     * - _Type_: Array of [AuthMode](./aws-properties-appsync-api-authmode.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html#cfn-appsync-api-eventconfig-defaultsubscribeauthmodes */
    "DefaultSubscribeAuthModes": AuthMode[];
    /**
     * - The CloudWatch Logs configuration for the Event API.
     * - _Required_: No
     * - _Type_: [EventLogConfig](./aws-properties-appsync-api-eventlogconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html#cfn-appsync-api-eventconfig-logconfig */
    "LogConfig"?: EventLogConfig;
}

/**
 * The `AWS::AppSync::Api` resource creates an AWS AppSync API that you can use for an AWS AppSync API with your preferred configuration, such as an Event API that provides real-time message publishing and message subscriptions over WebSockets.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html */

export interface AppSyncApi extends ResourceAttributes {
    "Type": "AWS::AppSync::Api";
    "Properties": {
        /**
         * - Describes the authorization configuration for connections, message publishing, message subscriptions, and logging for an Event API.
         * - _Required_: No
         * - _Type_: [EventConfig](./aws-properties-appsync-api-eventconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html#cfn-appsync-api-eventconfig */
        "EventConfig"?: EventConfig;
        /**
         * - The name of the `Api`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[A-Za-z0-9_\-\ ]+`
         * - _Minimum_: `1`
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html#cfn-appsync-api-name */
        "Name": string | Intrinsic;
        /**
         * - The owner contact information for an API resource.
         * - This field accepts any string input with a length of 0 - 256 characters.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[A-Za-z0-9_\-\ \.]+`
         * - _Minimum_: `1`
         * - _Maximum_: `250`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html#cfn-appsync-api-ownercontact */
        "OwnerContact"?: string | Intrinsic;
        /**
         * - A set of tags (key-value pairs) for this API.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-appsync-api-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-api.html#cfn-appsync-api-tags */
        "Tags"?: Tag[];
    };
}