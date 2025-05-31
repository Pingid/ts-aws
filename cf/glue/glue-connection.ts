import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The OAuth client app in GetConnection response.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html */

export interface PhysicalConnectionRequirements {
    /**
     * - The connection's Availability Zone.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t]*`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-physicalconnectionrequirements-availabilityzone */
    "AvailabilityZone"?: string | Intrinsic;
    /**
     * - The security group ID list used by the connection.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `0`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-physicalconnectionrequirements-securitygroupidlist */
    "SecurityGroupIdList"?: (string | Intrinsic)[];
    /**
     * - The subnet ID used by the connection.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t]*`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-physicalconnectionrequirements-subnetid */
    "SubnetId"?: string | Intrinsic;
}

/**
 * For supplying basic auth credentials when not providing a `SecretArn` value.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html */

export interface BasicAuthenticationCredentials {
    /**
     * - The password to connect to the data source.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-basicauthenticationcredentials-password */
    "Password"?: string | Intrinsic;
    /**
     * - The username to connect to the data source.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `\S+`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-basicauthenticationcredentials-username */
    "Username"?: string | Intrinsic;
}

/**
 * The set of properties required for the the OAuth2 `AUTHORIZATION_CODE` grant type workflow.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html */

export interface AuthorizationCodeProperties {
    /**
     * - An authorization code to be used in the third leg of the `AUTHORIZATION_CODE` grant workflow. This is a single-use code which becomes invalid once exchanged for an access token, thus it is acceptable to have this value as a request parameter.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `\S+`
     * - _Minimum_: `1`
     * - _Maximum_: `4096`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-authorizationcodeproperties-authorizationcode */
    "AuthorizationCode"?: string | Intrinsic;
    /**
     * - The redirect URI where the user gets redirected to by authorization server when issuing an authorization code. The URI is subsequently used when the authorization code is exchanged for an access token.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^(https?):\/\/[^\s/$.?#].[^\s]*$`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-authorizationcodeproperties-redirecturi */
    "RedirectUri"?: string | Intrinsic;
}

/**
 * The OAuth2 client app used for the connection.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html */

export interface OAuth2ClientApplication {
    /**
     * - The reference to the SaaS-side client app that is AWS managed.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `\S+`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-oauth2clientapplication-awsmanagedclientapplicationreference */
    "AWSManagedClientApplicationReference"?: string | Intrinsic;
    /**
     * - The client application clientID if the ClientAppType is `USER_MANAGED`.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `\S+`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-oauth2clientapplication-usermanagedclientapplicationclientid */
    "UserManagedClientApplicationClientId"?: string | Intrinsic;
}

/**
 * The credentials used when the authentication type is OAuth2 authentication.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html */

export interface OAuth2Credentials {
    /**
     * - The access token used when the authentication type is OAuth2.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\x20-\x7E]*$`
     * - _Maximum_: `4096`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-oauth2credentials-accesstoken */
    "AccessToken"?: string | Intrinsic;
    /**
     * - The JSON Web Token (JWT) used when the authentication type is OAuth2.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_\-\+\/=]*)`
     * - _Maximum_: `8000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-oauth2credentials-jwttoken */
    "JwtToken"?: string | Intrinsic;
    /**
     * - The refresh token used when the authentication type is OAuth2.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\x20-\x7E]*$`
     * - _Maximum_: `4096`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-oauth2credentials-refreshtoken */
    "RefreshToken"?: string | Intrinsic;
    /**
     * - The client application client secret if the client application is user managed.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\x20-\x7E]*$`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-oauth2credentials-usermanagedclientapplicationclientsecret */
    "UserManagedClientApplicationClientSecret"?: string | Intrinsic;
}

/**
 * A structure containing properties for OAuth2 in the CreateConnection request.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html */

export interface OAuth2PropertiesInput {
    /**
     * - The set of properties required for the the OAuth2 `AUTHORIZATION_CODE` grant type.
     * - _Required_: No
     * - _Type_: [AuthorizationCodeProperties](./aws-properties-glue-connection-authorizationcodeproperties.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-oauth2propertiesinput-authorizationcodeproperties */
    "AuthorizationCodeProperties"?: AuthorizationCodeProperties;
    /**
     * - The client application type in the CreateConnection request. For example, `AWS_MANAGED` or `USER_MANAGED`.
     * - _Required_: No
     * - _Type_: [OAuth2ClientApplication](./aws-properties-glue-connection-oauth2clientapplication.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-oauth2propertiesinput-oauth2clientapplication */
    "OAuth2ClientApplication"?: OAuth2ClientApplication;
    /**
     * - The credentials used when the authentication type is OAuth2 authentication.
     * - _Required_: No
     * - _Type_: [OAuth2Credentials](./aws-properties-glue-connection-oauth2credentials.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-oauth2propertiesinput-oauth2credentials */
    "OAuth2Credentials"?: OAuth2Credentials;
    /**
     * - The OAuth2 grant type in the CreateConnection request. For example, `AUTHORIZATION_CODE`, `JWT_BEARER`, or `CLIENT_CREDENTIALS`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `AUTHORIZATION_CODE | CLIENT_CREDENTIALS | JWT_BEARER`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-oauth2propertiesinput-oauth2granttype */
    "OAuth2GrantType"?: string | Intrinsic;
    /**
     * - The URL of the provider's authentication server, to exchange an authorization code for an access token.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^(https?)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-oauth2propertiesinput-tokenurl */
    "TokenUrl"?: string | Intrinsic;
    /**
     * - A map of parameters that are added to the token `GET` request.
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-oauth2propertiesinput-tokenurlparametersmap */
    "TokenUrlParametersMap"?: any | Intrinsic;
}

/**
 * A structure containing the authentication configuration in the CreateConnection request.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html */

export interface AuthenticationConfigurationInput {
    /**
     * - A structure containing the authentication configuration in the CreateConnection request.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `BASIC | OAUTH2 | CUSTOM | IAM`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-authenticationconfigurationinput-authenticationtype */
    "AuthenticationType": string | Intrinsic;
    /**
     * - The credentials used when the authentication type is basic authentication.
     * - _Required_: No
     * - _Type_: [BasicAuthenticationCredentials](./aws-properties-glue-connection-basicauthenticationcredentials.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-authenticationconfigurationinput-basicauthenticationcredentials */
    "BasicAuthenticationCredentials"?: BasicAuthenticationCredentials;
    /**
     * - The credentials used when the authentication type is custom authentication.
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-authenticationconfigurationinput-customauthenticationcredentials */
    "CustomAuthenticationCredentials"?: any | Intrinsic;
    /**
     * - The ARN of the KMS key used to encrypt the connection. Only taken an as input in the request and stored in the Secret Manager.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^$|arn:aws[a-z0-9-]*:kms:.*`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-authenticationconfigurationinput-kmskeyarn */
    "KmsKeyArn"?: string | Intrinsic;
    /**
     * - The properties for OAuth2 authentication in the CreateConnection request.
     * - _Required_: No
     * - _Type_: [OAuth2PropertiesInput](./aws-properties-glue-connection-oauth2propertiesinput.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-authenticationconfigurationinput-oauth2properties */
    "OAuth2Properties"?: OAuth2PropertiesInput;
    /**
     * - The secret manager ARN to store credentials in the CreateConnection request.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:aws(-(cn|us-gov|iso(-[bef])?))?:secretsmanager:.*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-authenticationconfigurationinput-secretarn */
    "SecretArn"?: string | Intrinsic;
}

/**
 * A structure that is used to specify a connection to create or update.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html */

export interface ConnectionInput {
    /**
     * - Connection properties specific to the Athena compute environment.
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-connectioninput-athenaproperties */
    "AthenaProperties"?: any | Intrinsic;
    /**
     * - The authentication properties of the connection.
     * - _Required_: No
     * - _Type_: [AuthenticationConfigurationInput](./aws-properties-glue-connection-authenticationconfigurationinput.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-connectioninput-authenticationconfiguration */
    "AuthenticationConfiguration"?: AuthenticationConfigurationInput;
    /**
     * - These key-value pairs define parameters for the connection.
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-connectioninput-connectionproperties */
    "ConnectionProperties"?: any | Intrinsic;
    /**
     * - The type of the connection. Currently, these types are supported:
     * - Additionally, a `ConnectionType` for the following SaaS connectors is supported:
     * - For more information on the connection parameters needed for a particular connector, see the documentation for the connector in [Adding an AWS Glue connection](https://docs.aws.amazon.com/glue/latest/dg/console-connections.html)in the AWS Glue User Guide.
     * - `SFTP` is not supported.
     * - For more information about how optional ConnectionProperties are used to configure features in AWS Glue, consult [AWS Glue connection properties](https://docs.aws.amazon.com/glue/latest/dg/connection-defining.html).
     * - For more information about how optional ConnectionProperties are used to configure features in AWS Glue Studio, consult [Using connectors and connections](https://docs.aws.amazon.com/glue/latest/ug/connectors-chapter.html).
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `JDBC | SFTP | MONGODB | KAFKA | NETWORK | MARKETPLACE | CUSTOM | SALESFORCE | VIEW_VALIDATION_REDSHIFT | VIEW_VALIDATION_ATHENA | GOOGLEADS | GOOGLESHEETS | GOOGLEANALYTICS4 | SERVICENOW | MARKETO | SAPODATA | ZENDESK | JIRACLOUD | NETSUITEERP | HUBSPOT | FACEBOOKADS | INSTAGRAMADS | ZOHOCRM | SALESFORCEPARDOT | SALESFORCEMARKETINGCLOUD | SLACK | STRIPE | INTERCOM | SNAPCHATADS`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-connectioninput-connectiontype */
    "ConnectionType": string | Intrinsic;
    /**
     * - The description of the connection.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\r\n\t]*`
     * - _Minimum_: `0`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-connectioninput-description */
    "Description"?: string | Intrinsic;
    /**
     * - A list of criteria that can be used in selecting this connection.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `0`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-connectioninput-matchcriteria */
    "MatchCriteria"?: (string | Intrinsic)[];
    /**
     * - The name of the connection.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDC00-\uDBFF\uDFFF\t]*`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-connectioninput-name */
    "Name"?: string | Intrinsic;
    /**
     * - The physical connection requirements, such as virtual private cloud (VPC) and `SecurityGroup`, that are needed to successfully make this connection.
     * - _Required_: No
     * - _Type_: [PhysicalConnectionRequirements](./aws-properties-glue-connection-physicalconnectionrequirements.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-connectioninput-physicalconnectionrequirements */
    "PhysicalConnectionRequirements"?: PhysicalConnectionRequirements;
    /**
     * - Connection properties specific to the Python compute environment.
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-connectioninput-pythonproperties */
    "PythonProperties"?: any | Intrinsic;
    /**
     * - Connection properties specific to the Spark compute environment.
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-connectioninput-sparkproperties */
    "SparkProperties"?: any | Intrinsic;
    /**
     * - A flag to validate the credentials during create connection. Default is true.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-connectioninput-validatecredentials */
    "ValidateCredentials"?: boolean | Intrinsic;
    /**
     * - The compute environments that the specified connection properties are validated against.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-connectioninput-validateforcomputeenvironments */
    "ValidateForComputeEnvironments"?: (string | Intrinsic)[];
}

/**
 * The `AWS::Glue::Connection` resource specifies an AWS Glue connection to a data source. For more information, see [Adding a Connection to Your Data Store](https://docs.aws.amazon.com/glue/latest/dg/populate-add-connection.html) and [Connection Structure](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-catalog-connections.html#aws-glue-api-catalog-connections-Connection) in the _AWS Glue Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html */

export interface GlueConnection extends ResourceAttributes {
    "Type": "AWS::Glue::Connection";
    "Properties": {
        /**
         * - The ID of the data catalog to create the catalog object in. Currently, this should be the AWS account ID.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-catalogid */
        "CatalogId": string | Intrinsic;
        /**
         * - The connection that you want to create.
         * - _Required_: Yes
         * - _Type_: [ConnectionInput](./aws-properties-glue-connection-connectioninput.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-glue-connection.html#cfn-glue-connection-connectioninput */
        "ConnectionInput": ConnectionInput;
    };
}