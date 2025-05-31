import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The API key authorization parameters for the connection.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html */

export interface ApiKeyAuthParameters {
    /**
     * - The name of the API key to use for authorization.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[ \t]*[^\x00-\x1F\x7F]+([ \t]+[^\x00-\x1F\x7F]+)*[ \t]*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-apikeyauthparameters-apikeyname */
    "ApiKeyName": string | Intrinsic;
    /**
     * - The value for the API key to use for authorization.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[ \t]*[^\x00-\x1F\x7F]+([ \t]+[^\x00-\x1F\x7F]+)*[ \t]*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-apikeyauthparameters-apikeyvalue */
    "ApiKeyValue": string | Intrinsic;
}

/**
 * The Basic authorization parameters for the connection.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html */

export interface BasicAuthParameters {
    /**
     * - The password associated with the user name to use for Basic authorization.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[ \t]*[^\x00-\x1F\x7F]+([ \t]+[^\x00-\x1F\x7F]+)*[ \t]*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-basicauthparameters-password */
    "Password": string | Intrinsic;
    /**
     * - The user name to use for Basic authorization.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[ \t]*[^\x00-\x1F\x7F]+([ \t]+[^\x00-\x1F\x7F]+)*[ \t]*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-basicauthparameters-username */
    "Username": string | Intrinsic;
}

/**
 * If you specify a private OAuth endpoint, the parameters for EventBridge to use when authenticating against the endpoint.
 * For more information, see [Authorization methods for connections](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-target-connection-auth.html) in the __Amazon EventBridge User Guide__ .
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html */

export interface ConnectivityParameters {
    /**
     * - The parameters for EventBridge to use when invoking the resource endpoint.
     * - _Required_: Yes
     * - _Type_: [ResourceParameters](./aws-properties-events-connection-resourceparameters.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-connectivityparameters-resourceparameters */
    "ResourceParameters": ResourceParameters;
}

/**
 * The parameters for EventBridge to use when invoking the resource endpoint.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html */

export interface ResourceParameters {
    /**
     * - For connections to private APIs, the Amazon Resource Name (ARN) of the resource association EventBridge created between the connection and the private API's resource configuration.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:[a-z0-9\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:servicenetworkresourceassociation/snra-[0-9a-z]{17}$`
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-resourceparameters-resourceassociationarn */
    "ResourceAssociationArn"?: string | Intrinsic;
    /**
     * - The Amazon Resource Name (ARN) of the Amazon VPC Lattice resource configuration for the resource endpoint.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:[a-z0-9f\-]+:vpc-lattice:[a-zA-Z0-9\-]+:\d{12}:resourceconfiguration/rcfg-[0-9a-z]{17}$`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-resourceparameters-resourceconfigurationarn */
    "ResourceConfigurationArn": string | Intrinsic;
}

/**
 * For connections to private APIs, the parameters to use for invoking the API.
 * For more information, see [Connecting to private APIs](https://docs.aws.amazon.com/eventbridge/latest/userguide/connection-private.html) in the __Amazon EventBridge User Guide__ .
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html */

export interface InvocationConnectivityParameters {
    /**
     * - The parameters for EventBridge to use when invoking the resource endpoint.
     * - _Required_: Yes
     * - _Type_: [ResourceParameters](./aws-properties-events-connection-resourceparameters.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-invocationconnectivityparameters-resourceparameters */
    "ResourceParameters": ResourceParameters;
}

/**
 * Any additional query string parameter for the connection. You can include up to 100 additional query string parameters per request. Each additional parameter counts towards the event payload size, which cannot exceed 64 KB.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html */

export interface Parameter {
    /**
     * - Specifies whether the value is secret.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-parameter-isvaluesecret */
    "IsValueSecret"?: boolean | Intrinsic;
    /**
     * - The key for a query string parameter.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[^\x00-\x1F\x7F]+`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-parameter-key */
    "Key": string | Intrinsic;
    /**
     * - The value associated with the key for the query string parameter.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[^\x00-\x09\x0B\x0C\x0E-\x1F\x7F]+`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-parameter-value */
    "Value": string | Intrinsic;
}

/**
 * Any additional parameters for the connection.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html */

export interface ConnectionHttpParameters {
    /**
     * - Any additional body string parameters for the connection.
     * - _Required_: No
     * - _Type_: Array of [Parameter](./aws-properties-events-connection-parameter.html)
     * - _Minimum_: `0`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-connectionhttpparameters-bodyparameters */
    "BodyParameters"?: Parameter[];
    /**
     * - Any additional header parameters for the connection.
     * - _Required_: No
     * - _Type_: Array of [Parameter](./aws-properties-events-connection-parameter.html)
     * - _Minimum_: `0`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-connectionhttpparameters-headerparameters */
    "HeaderParameters"?: Parameter[];
    /**
     * - Any additional query string parameters for the connection.
     * - _Required_: No
     * - _Type_: Array of [Parameter](./aws-properties-events-connection-parameter.html)
     * - _Minimum_: `0`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-connectionhttpparameters-querystringparameters */
    "QueryStringParameters"?: Parameter[];
}

/**
 * The OAuth authorization parameters to use for the connection.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html */

export interface ClientParameters {
    /**
     * - The client ID to use for OAuth authorization.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[ \t]*[^\x00-\x1F\x7F]+([ \t]+[^\x00-\x1F\x7F]+)*[ \t]*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-clientparameters-clientid */
    "ClientID": string | Intrinsic;
    /**
     * - The client secret assciated with the client ID to use for OAuth authorization.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[ \t]*[^\x00-\x1F\x7F]+([ \t]+[^\x00-\x1F\x7F]+)*[ \t]*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-clientparameters-clientsecret */
    "ClientSecret": string | Intrinsic;
}

/**
 * Contains the OAuth authorization parameters to use for the connection.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html */

export interface OAuthParameters {
    /**
     * - The URL to the authorization endpoint when OAuth is specified as the authorization type.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^((%[0-9A-Fa-f]{2}|[-()_.!~*';/?:@\x26=+$,A-Za-z0-9])+)([).!';/?:,])?$`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-oauthparameters-authorizationendpoint */
    "AuthorizationEndpoint": string | Intrinsic;
    /**
     * - The client parameters for OAuth authorization.
     * - _Required_: Yes
     * - _Type_: [ClientParameters](./aws-properties-events-connection-clientparameters.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-oauthparameters-clientparameters */
    "ClientParameters": ClientParameters;
    /**
     * - The method to use for the authorization request.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `GET | POST | PUT`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-oauthparameters-httpmethod */
    "HttpMethod": string | Intrinsic;
    /**
     * - Details about the additional parameters to use for the connection.
     * - _Required_: No
     * - _Type_: [ConnectionHttpParameters](./aws-properties-events-connection-connectionhttpparameters.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-oauthparameters-oauthhttpparameters */
    "OAuthHttpParameters"?: ConnectionHttpParameters;
}

/**
 * Tthe authorization parameters to use for the connection.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html */

export interface AuthParameters {
    /**
     * - The API Key parameters to use for authorization.
     * - _Required_: No
     * - _Type_: [ApiKeyAuthParameters](./aws-properties-events-connection-apikeyauthparameters.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-authparameters-apikeyauthparameters */
    "ApiKeyAuthParameters"?: ApiKeyAuthParameters;
    /**
     * - The authorization parameters for Basic authorization.
     * - _Required_: No
     * - _Type_: [BasicAuthParameters](./aws-properties-events-connection-basicauthparameters.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-authparameters-basicauthparameters */
    "BasicAuthParameters"?: BasicAuthParameters;
    /**
     * - For private OAuth authentication endpoints. The parameters EventBridge uses to authenticate against the endpoint.
     * - For more information, see [Authorization methods for connections](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-target-connection-auth.html) in the __Amazon EventBridge User Guide__ .
     * - _Required_: No
     * - _Type_: [ConnectivityParameters](./aws-properties-events-connection-connectivityparameters.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-authparameters-connectivityparameters */
    "ConnectivityParameters"?: ConnectivityParameters;
    /**
     * - Additional parameters for the connection that are passed through with every invocation to the HTTP endpoint.
     * - _Required_: No
     * - _Type_: [ConnectionHttpParameters](./aws-properties-events-connection-connectionhttpparameters.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-authparameters-invocationhttpparameters */
    "InvocationHttpParameters"?: ConnectionHttpParameters;
    /**
     * - The OAuth parameters to use for authorization.
     * - _Required_: No
     * - _Type_: [OAuthParameters](./aws-properties-events-connection-oauthparameters.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-authparameters-oauthparameters */
    "OAuthParameters"?: OAuthParameters;
}

/**
 * Creates a connection. A connection defines the authorization type and credentials to use for authorization with an API destination HTTP endpoint.
 * For more information, see [Connections for endpoint targets](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-target-connection.html) in the _Amazon EventBridge User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html */

export interface EventsConnection extends ResourceAttributes {
    "Type": "AWS::Events::Connection";
    "Properties": {
        /**
         * - The type of authorization to use for the connection.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `API_KEY | BASIC | OAUTH_CLIENT_CREDENTIALS`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-authorizationtype */
        "AuthorizationType"?: string | Intrinsic;
        /**
         * - The authorization parameters to use to authorize with the endpoint.
         * - You must include only authorization parameters for the `AuthorizationType` you specify.
         * - _Required_: No
         * - _Type_: [AuthParameters](./aws-properties-events-connection-authparameters.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-authparameters */
        "AuthParameters"?: AuthParameters;
        /**
         * - A description for the connection to create.
         * - _Required_: No
         * - _Type_: String
         * - _Maximum_: `512`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-description */
        "Description"?: string | Intrinsic;
        /**
         * - For connections to private APIs, the parameters to use for invoking the API.
         * - For more information, see [Connecting to private APIs](https://docs.aws.amazon.com/eventbridge/latest/userguide/connection-private.html) in the __Amazon EventBridge User Guide__ .
         * - _Required_: No
         * - _Type_: [InvocationConnectivityParameters](./aws-properties-events-connection-invocationconnectivityparameters.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-invocationconnectivityparameters */
        "InvocationConnectivityParameters"?: InvocationConnectivityParameters;
        /**
         * - The identifier of the AWS KMS customer managed key for EventBridge to use, if you choose to use a customer managed key to encrypt this connection. The identifier can be the key Amazon Resource Name (ARN), KeyId, key alias, or key alias ARN.
         * - If you do not specify a customer managed key identifier, EventBridge uses an AWS owned key to encrypt the connection.
         * - For more information, see [Identify and view keys](https://docs.aws.amazon.com/kms/latest/developerguide/viewing-keys.html) in the _AWS Key Management Service Developer Guide_.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9_\-/:]*$`
         * - _Maximum_: `2048`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-kmskeyidentifier */
        "KmsKeyIdentifier"?: string | Intrinsic;
        /**
         * - The name for the connection to create.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[\.\-_A-Za-z0-9]+`
         * - _Minimum_: `1`
         * - _Maximum_: `64`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-name */
        "Name"?: string | Intrinsic;
    };
}