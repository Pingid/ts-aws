import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The connector-specific credentials required when using Amplitude.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface AmplitudeConnectorProfileCredentials {
  /**
   * - A unique alphanumeric identifier used to authenticate a user, developer, or calling program to your API.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-amplitudeconnectorprofilecredentials-apikey */
  ApiKey: string | Intrinsic
  /**
   * - The Secret Access Key portion of the credentials.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-amplitudeconnectorprofilecredentials-secretkey */
  SecretKey: string | Intrinsic
}

/**
 * The connector-specific credentials required by Datadog.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface DatadogConnectorProfileCredentials {
  /**
   * - A unique alphanumeric identifier used to authenticate a user, developer, or calling program to your API.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-datadogconnectorprofilecredentials-apikey */
  ApiKey: string | Intrinsic
  /**
   * - Application keys, in conjunction with your API key, give you full access to Datadog’s programmatic API. Application keys are associated with the user account that created them. The application key is used to log all requests made to the API.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-datadogconnectorprofilecredentials-applicationkey */
  ApplicationKey: string | Intrinsic
}

/**
 * The connector-specific profile credentials required by Dynatrace.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface DynatraceConnectorProfileCredentials {
  /**
   * - The API tokens used by Dynatrace API to authenticate various API calls.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-dynatraceconnectorprofilecredentials-apitoken */
  ApiToken: string | Intrinsic
}

/**
 * The connector-specific profile credentials required by Infor Nexus.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface InforNexusConnectorProfileCredentials {
  /**
   * - The Access Key portion of the credentials.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-infornexusconnectorprofilecredentials-accesskeyid */
  AccessKeyId: string | Intrinsic
  /**
   * - The encryption keys used to encrypt data.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-infornexusconnectorprofilecredentials-datakey */
  Datakey: string | Intrinsic
  /**
   * - The secret key used to sign requests.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-infornexusconnectorprofilecredentials-secretaccesskey */
  SecretAccessKey: string | Intrinsic
  /**
   * - The identifier for the user.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-infornexusconnectorprofilecredentials-userid */
  UserId: string | Intrinsic
}

/**
 * The connector-specific profile credentials required by Marketo.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface MarketoConnectorProfileCredentials {
  /**
   * - The credentials used to access protected Marketo resources.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `4096`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-marketoconnectorprofilecredentials-accesstoken */
  AccessToken?: string | Intrinsic
  /**
   * - The identifier for the desired client.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-marketoconnectorprofilecredentials-clientid */
  ClientId: string | Intrinsic
  /**
   * - The client secret used by the OAuth client to authenticate to the authorization server.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-marketoconnectorprofilecredentials-clientsecret */
  ClientSecret: string | Intrinsic
  /**
   * - Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack.
   * - _Required_: No
   * - _Type_: [ConnectorOAuthRequest](./aws-properties-appflow-connectorprofile-connectoroauthrequest.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-marketoconnectorprofilecredentials-connectoroauthrequest */
  ConnectorOAuthRequest?: ConnectorOAuthRequest
}

/**
 * The connector-specific profile credentials required when using Salesforce Pardot.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface PardotConnectorProfileCredentials {
  /**
   * - The credentials used to access protected Salesforce Pardot resources.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `4096`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-pardotconnectorprofilecredentials-accesstoken */
  AccessToken?: string | Intrinsic
  /**
   * - The secret manager ARN, which contains the client ID and client secret of the connected app.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `arn:aws:secretsmanager:.*:[0-9]+:.*`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-pardotconnectorprofilecredentials-clientcredentialsarn */
  ClientCredentialsArn?: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [ConnectorOAuthRequest](./aws-properties-appflow-connectorprofile-connectoroauthrequest.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-pardotconnectorprofilecredentials-connectoroauthrequest */
  ConnectorOAuthRequest?: ConnectorOAuthRequest
  /**
   * - The credentials used to acquire new access tokens.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `4096`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-pardotconnectorprofilecredentials-refreshtoken */
  RefreshToken?: string | Intrinsic
}

/**
 * The connector-specific profile credentials required when using Amazon Redshift.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface RedshiftConnectorProfileCredentials {
  /**
   * - The password that corresponds to the user name.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-redshiftconnectorprofilecredentials-password */
  Password?: string | Intrinsic
  /**
   * - The name of the user.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-redshiftconnectorprofilecredentials-username */
  Username?: string | Intrinsic
}

/**
 * The connector-specific profile credentials required when using Salesforce.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface SalesforceConnectorProfileCredentials {
  /**
   * - The credentials used to access protected Salesforce resources.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `4096`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-salesforceconnectorprofilecredentials-accesstoken */
  AccessToken?: string | Intrinsic
  /**
   * - The secret manager ARN, which contains the client ID and client secret of the connected app.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `arn:aws:secretsmanager:.*:[0-9]+:.*`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-salesforceconnectorprofilecredentials-clientcredentialsarn */
  ClientCredentialsArn?: string | Intrinsic
  /**
   * - Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack.
   * - _Required_: No
   * - _Type_: [ConnectorOAuthRequest](./aws-properties-appflow-connectorprofile-connectoroauthrequest.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-salesforceconnectorprofilecredentials-connectoroauthrequest */
  ConnectorOAuthRequest?: ConnectorOAuthRequest
  /**
   * - A JSON web token (JWT) that authorizes Amazon AppFlow to access your Salesforce records.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.[A-Za-z0-9-_.+/=]*$`
   * - _Maximum_: `8000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-salesforceconnectorprofilecredentials-jwttoken */
  JwtToken?: string | Intrinsic
  /**
   * - Specifies the OAuth 2.0 grant type that Amazon AppFlow uses when it requests an access token from Salesforce. Amazon AppFlow requires an access token each time it attempts to access your Salesforce records.
   * - You can specify one of the following values:
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `CLIENT_CREDENTIALS | AUTHORIZATION_CODE | JWT_BEARER`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-salesforceconnectorprofilecredentials-oauth2granttype */
  OAuth2GrantType?: string | Intrinsic
  /**
   * - The credentials used to acquire new access tokens.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `4096`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-salesforceconnectorprofilecredentials-refreshtoken */
  RefreshToken?: string | Intrinsic
}

/**
 * The connector-specific profile credentials required when using ServiceNow.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface ServiceNowConnectorProfileCredentials {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [OAuth2Credentials](./aws-properties-appflow-connectorprofile-oauth2credentials.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-servicenowconnectorprofilecredentials-oauth2credentials */
  OAuth2Credentials?: OAuth2Credentials
  /**
   * - The password that corresponds to the user name.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-servicenowconnectorprofilecredentials-password */
  Password?: string | Intrinsic
  /**
   * - The name of the user.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-servicenowconnectorprofilecredentials-username */
  Username?: string | Intrinsic
}

/**
 * The connector-specific profile credentials required when using Singular.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface SingularConnectorProfileCredentials {
  /**
   * - A unique alphanumeric identifier used to authenticate a user, developer, or calling program to your API.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-singularconnectorprofilecredentials-apikey */
  ApiKey: string | Intrinsic
}

/**
 * The connector-specific profile credentials required when using Slack.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface SlackConnectorProfileCredentials {
  /**
   * - The credentials used to access protected Slack resources.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `4096`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-slackconnectorprofilecredentials-accesstoken */
  AccessToken?: string | Intrinsic
  /**
   * - The identifier for the client.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-slackconnectorprofilecredentials-clientid */
  ClientId: string | Intrinsic
  /**
   * - The client secret used by the OAuth client to authenticate to the authorization server.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-slackconnectorprofilecredentials-clientsecret */
  ClientSecret: string | Intrinsic
  /**
   * - Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack.
   * - _Required_: No
   * - _Type_: [ConnectorOAuthRequest](./aws-properties-appflow-connectorprofile-connectoroauthrequest.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-slackconnectorprofilecredentials-connectoroauthrequest */
  ConnectorOAuthRequest?: ConnectorOAuthRequest
}

/**
 * The connector-specific profile credentials required when using Snowflake.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface SnowflakeConnectorProfileCredentials {
  /**
   * - The password that corresponds to the user name.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-snowflakeconnectorprofilecredentials-password */
  Password: string | Intrinsic
  /**
   * - The name of the user.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-snowflakeconnectorprofilecredentials-username */
  Username: string | Intrinsic
}

/**
 * The connector-specific profile credentials required when using Trend Micro.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface TrendmicroConnectorProfileCredentials {
  /**
   * - The Secret Access Key portion of the credentials.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-trendmicroconnectorprofilecredentials-apisecretkey */
  ApiSecretKey: string | Intrinsic
}

/**
 * The connector-specific profile credentials required when using Veeva.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface VeevaConnectorProfileCredentials {
  /**
   * - The password that corresponds to the user name.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-veevaconnectorprofilecredentials-password */
  Password: string | Intrinsic
  /**
   * - The name of the user.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-veevaconnectorprofilecredentials-username */
  Username: string | Intrinsic
}

/**
 * The connector-specific profile credentials required when using Zendesk.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface ZendeskConnectorProfileCredentials {
  /**
   * - The credentials used to access protected Zendesk resources.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `4096`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-zendeskconnectorprofilecredentials-accesstoken */
  AccessToken?: string | Intrinsic
  /**
   * - The identifier for the desired client.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-zendeskconnectorprofilecredentials-clientid */
  ClientId: string | Intrinsic
  /**
   * - The client secret used by the OAuth client to authenticate to the authorization server.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-zendeskconnectorprofilecredentials-clientsecret */
  ClientSecret: string | Intrinsic
  /**
   * - Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack.
   * - _Required_: No
   * - _Type_: [ConnectorOAuthRequest](./aws-properties-appflow-connectorprofile-connectoroauthrequest.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-zendeskconnectorprofilecredentials-connectoroauthrequest */
  ConnectorOAuthRequest?: ConnectorOAuthRequest
}

/**
 * The connector-specific profile properties required by Datadog.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface DatadogConnectorProfileProperties {
  /**
   * - The location of the Datadog resource.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-datadogconnectorprofileproperties-instanceurl */
  InstanceUrl: string | Intrinsic
}

/**
 * The connector-specific profile properties required by Dynatrace.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface DynatraceConnectorProfileProperties {
  /**
   * - The location of the Dynatrace resource.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-dynatraceconnectorprofileproperties-instanceurl */
  InstanceUrl: string | Intrinsic
}

/**
 * The connector-specific profile properties required by Infor Nexus.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface InforNexusConnectorProfileProperties {
  /**
   * - The location of the Infor Nexus resource.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-infornexusconnectorprofileproperties-instanceurl */
  InstanceUrl: string | Intrinsic
}

/**
 * The connector-specific profile properties required when using Marketo.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface MarketoConnectorProfileProperties {
  /**
   * - The location of the Marketo resource.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-marketoconnectorprofileproperties-instanceurl */
  InstanceUrl: string | Intrinsic
}

/**
 * The connector-specific profile properties required when using Salesforce Pardot.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface PardotConnectorProfileProperties {
  /**
   * - The business unit id of Salesforce Pardot instance.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `18`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-pardotconnectorprofileproperties-businessunitid */
  BusinessUnitId: string | Intrinsic
  /**
   * - The location of the Salesforce Pardot resource.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-pardotconnectorprofileproperties-instanceurl */
  InstanceUrl?: string | Intrinsic
  /**
   * - Indicates whether the connector profile applies to a sandbox or production environment.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-pardotconnectorprofileproperties-issandboxenvironment */
  IsSandboxEnvironment?: boolean | Intrinsic
}

/**
 * The connector-specific profile properties when using Amazon Redshift.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface RedshiftConnectorProfileProperties {
  /**
   * - A name for the associated Amazon S3 bucket.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Minimum_: `3`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-bucketname */
  BucketName: string | Intrinsic
  /**
   * - The object key for the destination bucket in which Amazon AppFlow places the files.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-bucketprefix */
  BucketPrefix?: string | Intrinsic
  /**
   * - The unique ID that's assigned to an Amazon Redshift cluster.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-clusteridentifier */
  ClusterIdentifier?: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of an IAM role that permits Amazon AppFlow to access your Amazon Redshift database through the Data API. For more information, and for the polices that you attach to this role, see [Allow Amazon AppFlow to access Amazon Redshift databases with the Data API](https://docs.aws.amazon.com/appflow/latest/userguide/security_iam_service-role-policies.html#access-redshift).
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `arn:aws:iam:.*:[0-9]+:.*`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-dataapirolearn */
  DataApiRoleArn?: string | Intrinsic
  /**
   * - The name of an Amazon Redshift database.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-databasename */
  DatabaseName?: string | Intrinsic
  /**
   * - The JDBC URL of the Amazon Redshift cluster.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-databaseurl */
  DatabaseUrl?: string | Intrinsic
  /**
   * - Indicates whether the connector profile defines a connection to an Amazon Redshift Serverless data warehouse.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-isredshiftserverless */
  IsRedshiftServerless?: boolean | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of IAM role that grants Amazon Redshift read-only access to Amazon S3. For more information, and for the polices that you attach to this role, see [Allow Amazon Redshift to access your Amazon AppFlow data in Amazon S3](https://docs.aws.amazon.com/appflow/latest/userguide/security_iam_service-role-policies.html#redshift-access-s3).
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:aws:iam:.*:[0-9]+:.*`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-rolearn */
  RoleArn: string | Intrinsic
  /**
   * - The name of an Amazon Redshift workgroup.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-redshiftconnectorprofileproperties-workgroupname */
  WorkgroupName?: string | Intrinsic
}

/**
 * The connector-specific profile properties required when using Salesforce.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface SalesforceConnectorProfileProperties {
  /**
   * - The location of the Salesforce resource.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-salesforceconnectorprofileproperties-instanceurl */
  InstanceUrl?: string | Intrinsic
  /**
   * - Indicates whether the connector profile applies to a sandbox or production environment.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-salesforceconnectorprofileproperties-issandboxenvironment */
  isSandboxEnvironment?: boolean | Intrinsic
  /**
   * - If the connection mode for the connector profile is private, this parameter sets whether Amazon AppFlow uses the private network to send metadata and authorization calls to Salesforce. Amazon AppFlow sends private calls through AWS PrivateLink. These calls travel through AWS infrastructure without being exposed to the public internet.
   * - Set either of the following values:
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-salesforceconnectorprofileproperties-useprivatelinkformetadataandauthorization */
  usePrivateLinkForMetadataAndAuthorization?: boolean | Intrinsic
}

/**
 * The connector-specific profile properties required when using ServiceNow.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface ServiceNowConnectorProfileProperties {
  /**
   * - The location of the ServiceNow resource.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-servicenowconnectorprofileproperties-instanceurl */
  InstanceUrl: string | Intrinsic
}

/**
 * The connector-specific profile properties required when using Slack.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface SlackConnectorProfileProperties {
  /**
   * - The location of the Slack resource.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-slackconnectorprofileproperties-instanceurl */
  InstanceUrl: string | Intrinsic
}

/**
 * The connector-specific profile properties required when using Snowflake.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface SnowflakeConnectorProfileProperties {
  /**
   * - The name of the account.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-snowflakeconnectorprofileproperties-accountname */
  AccountName?: string | Intrinsic
  /**
   * - The name of the Amazon S3 bucket associated with Snowflake.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Minimum_: `3`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-snowflakeconnectorprofileproperties-bucketname */
  BucketName: string | Intrinsic
  /**
   * - The bucket path that refers to the Amazon S3 bucket associated with Snowflake.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-snowflakeconnectorprofileproperties-bucketprefix */
  BucketPrefix?: string | Intrinsic
  /**
   * - The Snowflake Private Link service name to be used for private data transfers.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-snowflakeconnectorprofileproperties-privatelinkservicename */
  PrivateLinkServiceName?: string | Intrinsic
  /**
   * - The AWS Region of the Snowflake account.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-snowflakeconnectorprofileproperties-region */
  Region?: string | Intrinsic
  /**
   * - The name of the Amazon S3 stage that was created while setting up an Amazon S3 stage in the Snowflake account. This is written in the following format: < Database>< Schema><Stage Name>.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-snowflakeconnectorprofileproperties-stage */
  Stage: string | Intrinsic
  /**
   * - The name of the Snowflake warehouse.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[\s\w/!@#+=.-]*`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-snowflakeconnectorprofileproperties-warehouse */
  Warehouse: string | Intrinsic
}

/**
 * The connector-specific profile properties required when using Veeva.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface VeevaConnectorProfileProperties {
  /**
   * - The location of the Veeva resource.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-veevaconnectorprofileproperties-instanceurl */
  InstanceUrl: string | Intrinsic
}

/**
 * The connector-specific profile properties required when using Zendesk.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface ZendeskConnectorProfileProperties {
  /**
   * - The location of the Zendesk resource.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-zendeskconnectorprofileproperties-instanceurl */
  InstanceUrl: string | Intrinsic
}

/**
 * The API key credentials required for API key authentication.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface ApiKeyCredentials {
  /**
   * - The API key required for API key authentication.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-apikeycredentials-apikey */
  ApiKey: string | Intrinsic
  /**
   * - The API secret key required for API key authentication.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-apikeycredentials-apisecretkey */
  ApiSecretKey?: string | Intrinsic
}

/**
 * The basic auth credentials required for basic authentication.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface BasicAuthCredentials {
  /**
   * - The password to use to connect to a resource.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-basicauthcredentials-password */
  Password: string | Intrinsic
  /**
   * - The username to use to connect to a resource.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-basicauthcredentials-username */
  Username: string | Intrinsic
}

/**
 * The custom credentials required for custom authentication.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface CustomAuthCredentials {
  /**
   * - A map that holds custom authentication credentials.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `^[\w]{1,128}$`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-customauthcredentials-credentialsmap */
  CredentialsMap?: Record<string, string | Intrinsic>
  /**
   * - The custom authentication type that the connector uses.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-customauthcredentials-customauthenticationtype */
  CustomAuthenticationType: string | Intrinsic
}

/**
 * The OAuth 2.0 credentials required for OAuth 2.0 authentication.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface OAuth2Credentials {
  /**
   * - The access token used to access the connector on your behalf.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `4096`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-oauth2credentials-accesstoken */
  AccessToken?: string | Intrinsic
  /**
   * - The identifier for the desired client.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-oauth2credentials-clientid */
  ClientId?: string | Intrinsic
  /**
   * - The client secret used by the OAuth client to authenticate to the authorization server.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-oauth2credentials-clientsecret */
  ClientSecret?: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [ConnectorOAuthRequest](./aws-properties-appflow-connectorprofile-connectoroauthrequest.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-oauth2credentials-oauthrequest */
  OAuthRequest?: ConnectorOAuthRequest
  /**
   * - The refresh token used to refresh an expired access token.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `4096`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-oauth2credentials-refreshtoken */
  RefreshToken?: string | Intrinsic
}

/**
 * Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface ConnectorOAuthRequest {
  /**
   * - The code provided by the connector when it has been authenticated via the connected app.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `4096`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectoroauthrequest-authcode */
  AuthCode?: string | Intrinsic
  /**
   * - The URL to which the authentication server redirects the browser after authorization has been granted.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectoroauthrequest-redirecturi */
  RedirectUri?: string | Intrinsic
}

/**
 * The OAuth credentials required for OAuth type authentication.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface OAuthCredentials {
  /**
   * - The access token used to access protected SAPOData resources.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `4096`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-oauthcredentials-accesstoken */
  AccessToken?: string | Intrinsic
  /**
   * - The identifier for the desired client.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-oauthcredentials-clientid */
  ClientId?: string | Intrinsic
  /**
   * - The client secret used by the OAuth client to authenticate to the authorization server.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-oauthcredentials-clientsecret */
  ClientSecret?: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [ConnectorOAuthRequest](./aws-properties-appflow-connectorprofile-connectoroauthrequest.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-oauthcredentials-connectoroauthrequest */
  ConnectorOAuthRequest?: ConnectorOAuthRequest
  /**
   * - The refresh token used to refresh expired access token.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `4096`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-oauthcredentials-refreshtoken */
  RefreshToken?: string | Intrinsic
}

/**
 * The OAuth 2.0 properties required for OAuth 2.0 authentication.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface OAuth2Properties {
  /**
   * - The OAuth 2.0 grant type used by connector for OAuth 2.0 authentication.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `CLIENT_CREDENTIALS | AUTHORIZATION_CODE | JWT_BEARER`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-oauth2properties-oauth2granttype */
  OAuth2GrantType?: string | Intrinsic
  /**
   * - The token URL required for OAuth 2.0 authentication.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(https?)://[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]`
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-oauth2properties-tokenurl */
  TokenUrl?: string | Intrinsic
  /**
   * - Associates your token URL with a map of properties that you define. Use this parameter to provide any additional details that the connector requires to authenticate your request.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `^[\w]{1,128}$`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-oauth2properties-tokenurlcustomproperties */
  TokenUrlCustomProperties?: Record<string, string | Intrinsic>
}

/**
 * The OAuth properties required for OAuth type authentication.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface OAuthProperties {
  /**
   * - The authorization code url required to redirect to SAP Login Page to fetch authorization code for OAuth type authentication.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(https?)://[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-oauthproperties-authcodeurl */
  AuthCodeUrl?: string | Intrinsic
  /**
   * - The OAuth scopes required for OAuth type authentication.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-oauthproperties-oauthscopes */
  OAuthScopes?: (string | Intrinsic)[]
  /**
   * - The token url required to fetch access/refresh tokens using authorization code and also to refresh expired access token using refresh token.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(https?)://[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-oauthproperties-tokenurl */
  TokenUrl?: string | Intrinsic
}

/**
 * The connector-specific profile credentials that are required when using the custom connector.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface CustomConnectorProfileCredentials {
  /**
   * - The API keys required for the authentication of the user.
   * - _Required_: No
   * - _Type_: [ApiKeyCredentials](./aws-properties-appflow-connectorprofile-apikeycredentials.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-customconnectorprofilecredentials-apikey */
  ApiKey?: ApiKeyCredentials
  /**
   * - The authentication type that the custom connector uses for authenticating while creating a connector profile.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `OAUTH2 | APIKEY | BASIC | CUSTOM`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-customconnectorprofilecredentials-authenticationtype */
  AuthenticationType: string | Intrinsic
  /**
   * - The basic credentials that are required for the authentication of the user.
   * - _Required_: No
   * - _Type_: [BasicAuthCredentials](./aws-properties-appflow-connectorprofile-basicauthcredentials.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-customconnectorprofilecredentials-basic */
  Basic?: BasicAuthCredentials
  /**
   * - If the connector uses the custom authentication mechanism, this holds the required credentials.
   * - _Required_: No
   * - _Type_: [CustomAuthCredentials](./aws-properties-appflow-connectorprofile-customauthcredentials.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-customconnectorprofilecredentials-custom */
  Custom?: CustomAuthCredentials
  /**
   * - The OAuth 2.0 credentials required for the authentication of the user.
   * - _Required_: No
   * - _Type_: [OAuth2Credentials](./aws-properties-appflow-connectorprofile-oauth2credentials.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-customconnectorprofilecredentials-oauth2 */
  Oauth2?: OAuth2Credentials
}

/**
 * The connector-specific profile credentials required by Google Analytics.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface GoogleAnalyticsConnectorProfileCredentials {
  /**
   * - The credentials used to access protected Google Analytics resources.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `4096`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-googleanalyticsconnectorprofilecredentials-accesstoken */
  AccessToken?: string | Intrinsic
  /**
   * - The identifier for the desired client.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-googleanalyticsconnectorprofilecredentials-clientid */
  ClientId: string | Intrinsic
  /**
   * - The client secret used by the OAuth client to authenticate to the authorization server.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-googleanalyticsconnectorprofilecredentials-clientsecret */
  ClientSecret: string | Intrinsic
  /**
   * - Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack.
   * - _Required_: No
   * - _Type_: [ConnectorOAuthRequest](./aws-properties-appflow-connectorprofile-connectoroauthrequest.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-googleanalyticsconnectorprofilecredentials-connectoroauthrequest */
  ConnectorOAuthRequest?: ConnectorOAuthRequest
  /**
   * - The credentials used to acquire new access tokens. This is required only for OAuth2 access tokens, and is not required for OAuth1 access tokens.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `4096`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-googleanalyticsconnectorprofilecredentials-refreshtoken */
  RefreshToken?: string | Intrinsic
}

/**
 * The connector-specific profile credentials required when using SAPOData.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface SAPODataConnectorProfileCredentials {
  /**
   * - The SAPOData basic authentication credentials.
   * - _Required_: No
   * - _Type_: [BasicAuthCredentials](./aws-properties-appflow-connectorprofile-basicauthcredentials.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-sapodataconnectorprofilecredentials-basicauthcredentials */
  BasicAuthCredentials?: BasicAuthCredentials
  /**
   * - The SAPOData OAuth type authentication credentials.
   * - _Required_: No
   * - _Type_: [OAuthCredentials](./aws-properties-appflow-connectorprofile-oauthcredentials.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-sapodataconnectorprofilecredentials-oauthcredentials */
  OAuthCredentials?: OAuthCredentials
}

/**
 * The profile properties required by the custom connector.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface CustomConnectorProfileProperties {
  /**
   * - The OAuth 2.0 properties required for OAuth 2.0 authentication.
   * - _Required_: No
   * - _Type_: [OAuth2Properties](./aws-properties-appflow-connectorprofile-oauth2properties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-customconnectorprofileproperties-oauth2properties */
  OAuth2Properties?: OAuth2Properties
  /**
   * - A map of properties that are required to create a profile for the custom connector.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `^[\w]{1,256}$`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-customconnectorprofileproperties-profileproperties */
  ProfileProperties?: Record<string, string | Intrinsic>
}

/**
 * The connector-specific profile properties required when using SAPOData.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface SAPODataConnectorProfileProperties {
  /**
   * - The location of the SAPOData resource.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(https?)://[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-sapodataconnectorprofileproperties-applicationhosturl */
  ApplicationHostUrl?: string | Intrinsic
  /**
   * - The application path to catalog service.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-sapodataconnectorprofileproperties-applicationservicepath */
  ApplicationServicePath?: string | Intrinsic
  /**
   * - The client number for the client creating the connection.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^\d{3}$`
   * - _Minimum_: `3`
   * - _Maximum_: `3`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-sapodataconnectorprofileproperties-clientnumber */
  ClientNumber?: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-sapodataconnectorprofileproperties-disablesso */
  DisableSSO?: boolean | Intrinsic
  /**
   * - The logon language of SAPOData instance.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9_]*$`
   * - _Maximum_: `2`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-sapodataconnectorprofileproperties-logonlanguage */
  LogonLanguage?: string | Intrinsic
  /**
   * - The SAPOData OAuth properties required for OAuth type authentication.
   * - _Required_: No
   * - _Type_: [OAuthProperties](./aws-properties-appflow-connectorprofile-oauthproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-sapodataconnectorprofileproperties-oauthproperties */
  OAuthProperties?: OAuthProperties
  /**
   * - The port number of the SAPOData instance.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `65535`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-sapodataconnectorprofileproperties-portnumber */
  PortNumber?: number | Intrinsic
  /**
   * - The SAPOData Private Link service name to be used for private data transfers.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `\S+`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-sapodataconnectorprofileproperties-privatelinkservicename */
  PrivateLinkServiceName?: string | Intrinsic
}

/**
 * The connector-specific credentials required by a connector.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface ConnectorProfileCredentials {
  /**
   * - The connector-specific credentials required when using Amplitude.
   * - _Required_: No
   * - _Type_: [AmplitudeConnectorProfileCredentials](./aws-properties-appflow-connectorprofile-amplitudeconnectorprofilecredentials.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofilecredentials-amplitude */
  Amplitude?: AmplitudeConnectorProfileCredentials
  /**
   * - The connector-specific profile credentials that are required when using the custom connector.
   * - _Required_: No
   * - _Type_: [CustomConnectorProfileCredentials](./aws-properties-appflow-connectorprofile-customconnectorprofilecredentials.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofilecredentials-customconnector */
  CustomConnector?: CustomConnectorProfileCredentials
  /**
   * - The connector-specific credentials required when using Datadog.
   * - _Required_: No
   * - _Type_: [DatadogConnectorProfileCredentials](./aws-properties-appflow-connectorprofile-datadogconnectorprofilecredentials.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofilecredentials-datadog */
  Datadog?: DatadogConnectorProfileCredentials
  /**
   * - The connector-specific credentials required when using Dynatrace.
   * - _Required_: No
   * - _Type_: [DynatraceConnectorProfileCredentials](./aws-properties-appflow-connectorprofile-dynatraceconnectorprofilecredentials.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofilecredentials-dynatrace */
  Dynatrace?: DynatraceConnectorProfileCredentials
  /**
   * - The connector-specific credentials required when using Google Analytics.
   * - _Required_: No
   * - _Type_: [GoogleAnalyticsConnectorProfileCredentials](./aws-properties-appflow-connectorprofile-googleanalyticsconnectorprofilecredentials.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofilecredentials-googleanalytics */
  GoogleAnalytics?: GoogleAnalyticsConnectorProfileCredentials
  /**
   * - The connector-specific credentials required when using Infor Nexus.
   * - _Required_: No
   * - _Type_: [InforNexusConnectorProfileCredentials](./aws-properties-appflow-connectorprofile-infornexusconnectorprofilecredentials.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofilecredentials-infornexus */
  InforNexus?: InforNexusConnectorProfileCredentials
  /**
   * - The connector-specific credentials required when using Marketo.
   * - _Required_: No
   * - _Type_: [MarketoConnectorProfileCredentials](./aws-properties-appflow-connectorprofile-marketoconnectorprofilecredentials.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofilecredentials-marketo */
  Marketo?: MarketoConnectorProfileCredentials
  /**
   * - The connector-specific credentials required when using Salesforce Pardot.
   * - _Required_: No
   * - _Type_: [PardotConnectorProfileCredentials](./aws-properties-appflow-connectorprofile-pardotconnectorprofilecredentials.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofilecredentials-pardot */
  Pardot?: PardotConnectorProfileCredentials
  /**
   * - The connector-specific credentials required when using Amazon Redshift.
   * - _Required_: No
   * - _Type_: [RedshiftConnectorProfileCredentials](./aws-properties-appflow-connectorprofile-redshiftconnectorprofilecredentials.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofilecredentials-redshift */
  Redshift?: RedshiftConnectorProfileCredentials
  /**
   * - The connector-specific credentials required when using Salesforce.
   * - _Required_: No
   * - _Type_: [SalesforceConnectorProfileCredentials](./aws-properties-appflow-connectorprofile-salesforceconnectorprofilecredentials.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofilecredentials-salesforce */
  Salesforce?: SalesforceConnectorProfileCredentials
  /**
   * - The connector-specific profile credentials required when using SAPOData.
   * - _Required_: No
   * - _Type_: [SAPODataConnectorProfileCredentials](./aws-properties-appflow-connectorprofile-sapodataconnectorprofilecredentials.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofilecredentials-sapodata */
  SAPOData?: SAPODataConnectorProfileCredentials
  /**
   * - The connector-specific credentials required when using ServiceNow.
   * - _Required_: No
   * - _Type_: [ServiceNowConnectorProfileCredentials](./aws-properties-appflow-connectorprofile-servicenowconnectorprofilecredentials.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofilecredentials-servicenow */
  ServiceNow?: ServiceNowConnectorProfileCredentials
  /**
   * - The connector-specific credentials required when using Singular.
   * - _Required_: No
   * - _Type_: [SingularConnectorProfileCredentials](./aws-properties-appflow-connectorprofile-singularconnectorprofilecredentials.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofilecredentials-singular */
  Singular?: SingularConnectorProfileCredentials
  /**
   * - The connector-specific credentials required when using Slack.
   * - _Required_: No
   * - _Type_: [SlackConnectorProfileCredentials](./aws-properties-appflow-connectorprofile-slackconnectorprofilecredentials.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofilecredentials-slack */
  Slack?: SlackConnectorProfileCredentials
  /**
   * - The connector-specific credentials required when using Snowflake.
   * - _Required_: No
   * - _Type_: [SnowflakeConnectorProfileCredentials](./aws-properties-appflow-connectorprofile-snowflakeconnectorprofilecredentials.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofilecredentials-snowflake */
  Snowflake?: SnowflakeConnectorProfileCredentials
  /**
   * - The connector-specific credentials required when using Trend Micro.
   * - _Required_: No
   * - _Type_: [TrendmicroConnectorProfileCredentials](./aws-properties-appflow-connectorprofile-trendmicroconnectorprofilecredentials.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofilecredentials-trendmicro */
  Trendmicro?: TrendmicroConnectorProfileCredentials
  /**
   * - The connector-specific credentials required when using Veeva.
   * - _Required_: No
   * - _Type_: [VeevaConnectorProfileCredentials](./aws-properties-appflow-connectorprofile-veevaconnectorprofilecredentials.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofilecredentials-veeva */
  Veeva?: VeevaConnectorProfileCredentials
  /**
   * - The connector-specific credentials required when using Zendesk.
   * - _Required_: No
   * - _Type_: [ZendeskConnectorProfileCredentials](./aws-properties-appflow-connectorprofile-zendeskconnectorprofilecredentials.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofilecredentials-zendesk */
  Zendesk?: ZendeskConnectorProfileCredentials
}

/**
 * The connector-specific profile properties required by each connector.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface ConnectorProfileProperties {
  /**
   * - The properties required by the custom connector.
   * - _Required_: No
   * - _Type_: [CustomConnectorProfileProperties](./aws-properties-appflow-connectorprofile-customconnectorprofileproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofileproperties-customconnector */
  CustomConnector?: CustomConnectorProfileProperties
  /**
   * - The connector-specific properties required by Datadog.
   * - _Required_: No
   * - _Type_: [DatadogConnectorProfileProperties](./aws-properties-appflow-connectorprofile-datadogconnectorprofileproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofileproperties-datadog */
  Datadog?: DatadogConnectorProfileProperties
  /**
   * - The connector-specific properties required by Dynatrace.
   * - _Required_: No
   * - _Type_: [DynatraceConnectorProfileProperties](./aws-properties-appflow-connectorprofile-dynatraceconnectorprofileproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofileproperties-dynatrace */
  Dynatrace?: DynatraceConnectorProfileProperties
  /**
   * - The connector-specific properties required by Infor Nexus.
   * - _Required_: No
   * - _Type_: [InforNexusConnectorProfileProperties](./aws-properties-appflow-connectorprofile-infornexusconnectorprofileproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofileproperties-infornexus */
  InforNexus?: InforNexusConnectorProfileProperties
  /**
   * - The connector-specific properties required by Marketo.
   * - _Required_: No
   * - _Type_: [MarketoConnectorProfileProperties](./aws-properties-appflow-connectorprofile-marketoconnectorprofileproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofileproperties-marketo */
  Marketo?: MarketoConnectorProfileProperties
  /**
   * - The connector-specific properties required by Salesforce Pardot.
   * - _Required_: No
   * - _Type_: [PardotConnectorProfileProperties](./aws-properties-appflow-connectorprofile-pardotconnectorprofileproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofileproperties-pardot */
  Pardot?: PardotConnectorProfileProperties
  /**
   * - The connector-specific properties required by Amazon Redshift.
   * - _Required_: No
   * - _Type_: [RedshiftConnectorProfileProperties](./aws-properties-appflow-connectorprofile-redshiftconnectorprofileproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofileproperties-redshift */
  Redshift?: RedshiftConnectorProfileProperties
  /**
   * - The connector-specific properties required by Salesforce.
   * - _Required_: No
   * - _Type_: [SalesforceConnectorProfileProperties](./aws-properties-appflow-connectorprofile-salesforceconnectorprofileproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofileproperties-salesforce */
  Salesforce?: SalesforceConnectorProfileProperties
  /**
   * - The connector-specific profile properties required when using SAPOData.
   * - _Required_: No
   * - _Type_: [SAPODataConnectorProfileProperties](./aws-properties-appflow-connectorprofile-sapodataconnectorprofileproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofileproperties-sapodata */
  SAPOData?: SAPODataConnectorProfileProperties
  /**
   * - The connector-specific properties required by serviceNow.
   * - _Required_: No
   * - _Type_: [ServiceNowConnectorProfileProperties](./aws-properties-appflow-connectorprofile-servicenowconnectorprofileproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofileproperties-servicenow */
  ServiceNow?: ServiceNowConnectorProfileProperties
  /**
   * - The connector-specific properties required by Slack.
   * - _Required_: No
   * - _Type_: [SlackConnectorProfileProperties](./aws-properties-appflow-connectorprofile-slackconnectorprofileproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofileproperties-slack */
  Slack?: SlackConnectorProfileProperties
  /**
   * - The connector-specific properties required by Snowflake.
   * - _Required_: No
   * - _Type_: [SnowflakeConnectorProfileProperties](./aws-properties-appflow-connectorprofile-snowflakeconnectorprofileproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofileproperties-snowflake */
  Snowflake?: SnowflakeConnectorProfileProperties
  /**
   * - The connector-specific properties required by Veeva.
   * - _Required_: No
   * - _Type_: [VeevaConnectorProfileProperties](./aws-properties-appflow-connectorprofile-veevaconnectorprofileproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofileproperties-veeva */
  Veeva?: VeevaConnectorProfileProperties
  /**
   * - The connector-specific properties required by Zendesk.
   * - _Required_: No
   * - _Type_: [ZendeskConnectorProfileProperties](./aws-properties-appflow-connectorprofile-zendeskconnectorprofileproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofileproperties-zendesk */
  Zendesk?: ZendeskConnectorProfileProperties
}

/**
 * Defines the connector-specific configuration and credentials for the connector profile.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface ConnectorProfileConfig {
  /**
   * - The connector-specific credentials required by each connector.
   * - _Required_: No
   * - _Type_: [ConnectorProfileCredentials](./aws-properties-appflow-connectorprofile-connectorprofilecredentials.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofileconfig-connectorprofilecredentials */
  ConnectorProfileCredentials?: ConnectorProfileCredentials
  /**
   * - The connector-specific properties of the profile configuration.
   * - _Required_: No
   * - _Type_: [ConnectorProfileProperties](./aws-properties-appflow-connectorprofile-connectorprofileproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofileconfig-connectorprofileproperties */
  ConnectorProfileProperties?: ConnectorProfileProperties
}

/**
 * The `AWS::AppFlow::ConnectorProfile` resource is an Amazon AppFlow resource type that specifies the configuration profile for an instance of a connector. This includes the provided name, credentials ARN, connection-mode, and so on. The fields that are common to all types of connector profiles are explicitly specified under the `Properties` field. The rest of the connector-specific properties are specified under `Properties/ConnectorProfileConfig`.
 * ###### Note
 *
 * If you want to use AWS CloudFormation to create a connector profile for connectors that implement OAuth (such as Salesforce, Slack, Zendesk, and Google Analytics), you must fetch the access and refresh tokens. You can do this by implementing your own UI for OAuth, or by retrieving the tokens from elsewhere. Alternatively, you can use the Amazon AppFlow console to create the connector profile, and then use that connector profile in the flow creation CloudFormation template.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html */

export interface AppFlowConnectorProfile extends ResourceAttributes {
  Type: 'AWS::AppFlow::ConnectorProfile'
  Properties: {
    /**
     * - Indicates the connection mode and if it is public or private.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `Public | Private`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectionmode */
    ConnectionMode: string | Intrinsic
    /**
     * - The label for the connector profile being created.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[\w!@#.-]+`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorlabel */
    ConnectorLabel?: string | Intrinsic
    /**
     * - Defines the connector-specific configuration and credentials.
     * - _Required_: No
     * - _Type_: [ConnectorProfileConfig](./aws-properties-appflow-connectorprofile-connectorprofileconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofileconfig */
    ConnectorProfileConfig?: ConnectorProfileConfig
    /**
     * - The name of the connector profile. The name is unique for each `ConnectorProfile` in the AWS account.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\w/!@#+=.-]+`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectorprofilename */
    ConnectorProfileName: string | Intrinsic
    /**
     * - The type of connector, such as Salesforce, Amplitude, and so on.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `Salesforce | Pardot | Singular | Slack | Redshift | Marketo | Googleanalytics | Zendesk | Servicenow | SAPOData | Datadog | Trendmicro | Snowflake | Dynatrace | Infornexus | Amplitude | Veeva | CustomConnector`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-connectortype */
    ConnectorType: string | Intrinsic
    /**
     * - The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:aws:kms:.*:[0-9]+:.*`
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connectorprofile.html#cfn-appflow-connectorprofile-kmsarn */
    KMSArn?: string | Intrinsic
  }
}
