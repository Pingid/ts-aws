import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Contains the API key authorization parameters for the connection.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html */

export interface ApiKeyAuthParameters {
  /**
   * - The name of the API key to use for authorization.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[ \t]*[^\x00-\x1F:\x7F]+([ \t]+[^\x00-\x1F:\x7F]+)*[ \t]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-apikeyauthparameters-apikeyname */
  ApiKeyName: string | Intrinsic
  /**
   * - The value for the API key to use for authorization.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[ \t]*[^\x00-\x1F:\x7F]+([ \t]+[^\x00-\x1F:\x7F]+)*[ \t]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-apikeyauthparameters-apikeyvalue */
  ApiKeyValue: string | Intrinsic
}

/**
 * Contains the Basic authorization parameters for the connection.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html */

export interface BasicAuthParameters {
  /**
   * - The password associated with the user name to use for Basic authorization.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[ \t]*[^\x00-\x1F:\x7F]+([ \t]+[^\x00-\x1F:\x7F]+)*[ \t]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-basicauthparameters-password */
  Password: string | Intrinsic
  /**
   * - The user name to use for Basic authorization.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[ \t]*[^\x00-\x1F:\x7F]+([ \t]+[^\x00-\x1F:\x7F]+)*[ \t]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-basicauthparameters-username */
  Username: string | Intrinsic
}

/**
 * Additional query string parameter for the connection. You can include up to 100 additional query string parameters per request. Each additional parameter counts towards the event payload size, which cannot exceed 64 KB.
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
  IsValueSecret?: boolean | Intrinsic
  /**
   * - The key for a query string parameter.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[^\x00-\x1F\x7F]+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-parameter-key */
  Key: string | Intrinsic
  /**
   * - The value associated with the key for the query string parameter.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[^\x00-\x09\x0B\x0C\x0E-\x1F\x7F]+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-parameter-value */
  Value: string | Intrinsic
}

/**
 * Contains the OAuth authorization parameters to use for the connection.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html */

export interface ClientParameters {
  /**
   * - The client ID to use for OAuth authorization.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[ \t]*[^\x00-\x1F:\x7F]+([ \t]+[^\x00-\x1F:\x7F]+)*[ \t]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-clientparameters-clientid */
  ClientID: string | Intrinsic
  /**
   * - The client secret assciated with the client ID to use for OAuth authorization.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[ \t]*[^\x00-\x1F:\x7F]+([ \t]+[^\x00-\x1F:\x7F]+)*[ \t]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-clientparameters-clientsecret */
  ClientSecret: string | Intrinsic
}

/**
 * Contains additional parameters for the connection.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html */

export interface ConnectionHttpParameters {
  /**
   * - Contains additional body string parameters for the connection.
   * - _Required_: No
   * - _Type_: Array of [Parameter](./aws-properties-events-connection-parameter.html)
   * - _Minimum_: `0`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-connectionhttpparameters-bodyparameters */
  BodyParameters?: Parameter[]
  /**
   * - Contains additional header parameters for the connection.
   * - _Required_: No
   * - _Type_: Array of [Parameter](./aws-properties-events-connection-parameter.html)
   * - _Minimum_: `0`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-connectionhttpparameters-headerparameters */
  HeaderParameters?: Parameter[]
  /**
   * - Contains additional query string parameters for the connection.
   * - _Required_: No
   * - _Type_: Array of [Parameter](./aws-properties-events-connection-parameter.html)
   * - _Minimum_: `0`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-connectionhttpparameters-querystringparameters */
  QueryStringParameters?: Parameter[]
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
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-oauthparameters-authorizationendpoint */
  AuthorizationEndpoint: string | Intrinsic
  /**
   * - A `CreateConnectionOAuthClientRequestParameters` object that contains the client parameters for OAuth authorization.
   * - _Required_: Yes
   * - _Type_: [ClientParameters](./aws-properties-events-connection-clientparameters.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-oauthparameters-clientparameters */
  ClientParameters: ClientParameters
  /**
   * - The method to use for the authorization request.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `GET | POST | PUT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-oauthparameters-httpmethod */
  HttpMethod: string | Intrinsic
  /**
   * - A `ConnectionHttpParameters` object that contains details about the additional parameters to use for the connection.
   * - _Required_: No
   * - _Type_: [ConnectionHttpParameters](./aws-properties-events-connection-connectionhttpparameters.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-oauthparameters-oauthhttpparameters */
  OAuthHttpParameters?: ConnectionHttpParameters
}

/**
 * Contains the authorization parameters to use for the connection.
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
  ApiKeyAuthParameters?: ApiKeyAuthParameters
  /**
   * - The authorization parameters for Basic authorization.
   * - _Required_: No
   * - _Type_: [BasicAuthParameters](./aws-properties-events-connection-basicauthparameters.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-authparameters-basicauthparameters */
  BasicAuthParameters?: BasicAuthParameters
  /**
   * - Additional parameters for the connection that are passed through with every invocation to the HTTP endpoint.
   * - _Required_: No
   * - _Type_: [ConnectionHttpParameters](./aws-properties-events-connection-connectionhttpparameters.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-authparameters-invocationhttpparameters */
  InvocationHttpParameters?: ConnectionHttpParameters
  /**
   * - The OAuth parameters to use for authorization.
   * - _Required_: No
   * - _Type_: [OAuthParameters](./aws-properties-events-connection-oauthparameters.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-authparameters-oauthparameters */
  OAuthParameters?: OAuthParameters
}

/**
 * Creates a connection. A connection defines the authorization type and credentials to use for authorization with an API destination HTTP endpoint.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html */

export interface EventsConnection extends ResourceAttributes {
  Type: 'AWS::Events::Connection'
  Properties: {
    /**
     * - The type of authorization to use for the connection.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `API_KEY | BASIC | OAUTH_CLIENT_CREDENTIALS`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-authorizationtype */
    AuthorizationType?: string | Intrinsic
    /**
     * - A `CreateConnectionAuthRequestParameters` object that contains the authorization parameters to use to authorize with the endpoint.
     * - _Required_: No
     * - _Type_: [AuthParameters](./aws-properties-events-connection-authparameters.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-authparameters */
    AuthParameters?: AuthParameters
    /**
     * - A description for the connection to create.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-description */
    Description?: string | Intrinsic
    /**
     * - The name for the connection to create.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#cfn-events-connection-name */
    Name?: string | Intrinsic
  }
}
