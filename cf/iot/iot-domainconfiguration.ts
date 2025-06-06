import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * An object that specifies the authorization service for a domain.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html */

export interface AuthorizerConfig {
    /**
     * - A Boolean that specifies whether the domain configuration's authorization service can be overridden.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-authorizerconfig-allowauthorizeroverride */
    "AllowAuthorizerOverride"?: boolean | Intrinsic;
    /**
     * - The name of the authorization service for a domain configuration.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\w=,@-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-authorizerconfig-defaultauthorizername */
    "DefaultAuthorizerName"?: string | Intrinsic;
}

/**
 * An object that speciﬁes the client certificate conﬁguration for a domain.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html */

export interface ClientCertificateConfig {
    /**
     * - The ARN of the Lambda function that IoT invokes after mutual TLS authentication during the connection.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `170`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-clientcertificateconfig-clientcertificatecallbackarn */
    "ClientCertificateCallbackArn"?: string | Intrinsic;
}

/**
 * The server certificate configuration.
 * For more information, see [Configurable endpoints](https://docs.aws.amazon.com/iot/latest/developerguide/iot-custom-endpoints-configurable.html) from the AWS IoT Core Developer Guide.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html */

export interface ServerCertificateConfig {
    /**
     * - A Boolean value that indicates whether Online Certificate Status Protocol (OCSP) server certificate check is enabled or not. For more information, see [Configurable endpoints](https://docs.aws.amazon.com/iot/latest/developerguide/iot-custom-endpoints-configurable.html) from the AWS IoT Core Developer Guide.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-servercertificateconfig-enableocspcheck */
    "EnableOCSPCheck"?: boolean | Intrinsic;
    /**
     * - The Amazon Resource Name (ARN) for an X.509 certificate stored in ACM. If provided, AWS IoT Core will use this certificate to validate the signature of the received OCSP response. The OCSP responder must sign responses using either this authorized responder certificate or the issuing certificate, depending on whether the ARN is provided or not. The certificate must be in the same account and region as the domain configuration.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:aws(-cn|-us-gov|-iso-b|-iso)?:acm:[a-z]{2}-(gov-|iso-|isob-)?[a-z]{4,9}-\d{1}:\d{12}:certificate/[a-zA-Z0-9/-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-servercertificateconfig-ocspauthorizedresponderarn */
    "OcspAuthorizedResponderArn"?: string | Intrinsic;
    /**
     * - The Amazon Resource Name (ARN) for a Lambda function that acts as a Request for Comments (RFC) 6960-compliant Online Certificate Status Protocol (OCSP) responder, supporting basic OCSP responses. The Lambda function accepts a base64-encoding of the OCSP request in the Distinguished Encoding Rules (DER) format. The Lambda function's response is also a base64-encoded OCSP response in the DER format. The response size must not exceed 4 kilobytes (KiB). The Lambda function must be in the same account and region as the domain configuration.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `170`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-servercertificateconfig-ocsplambdaarn */
    "OcspLambdaArn"?: string | Intrinsic;
}

/**
 * A set of key/value pairs that are used to manage the resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html */

export interface Tag {
    /**
     * - The tag's key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The tag's value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-tag-value */
    "Value": string | Intrinsic;
}

/**
 * An object that specifies the TLS configuration for a domain.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html */

export interface TlsConfig {
    /**
     * - The security policy for a domain configuration. For more information, see [Security policies](https://docs.aws.amazon.com/iot/latest/developerguide/transport-security.html#tls-policy-table) in the _AWS IoT Core developer guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-tlsconfig-securitypolicy */
    "SecurityPolicy"?: string | Intrinsic;
}

/**
 * Specifies a domain configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html */

export interface IoTDomainConfiguration extends ResourceAttributes {
    "Type": "AWS::IoT::DomainConfiguration";
    "Properties": {
        /**
         * - An enumerated string that speciﬁes the application-layer protocol.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `SECURE_MQTT | MQTT_WSS | HTTPS | DEFAULT`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-applicationprotocol */
        "ApplicationProtocol"?: string | Intrinsic;
        /**
         * - An enumerated string that speciﬁes the authentication type.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `AWS_X509 | CUSTOM_AUTH | AWS_SIGV4 | CUSTOM_AUTH_X509 | DEFAULT`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-authenticationtype */
        "AuthenticationType"?: string | Intrinsic;
        /**
         * - An object that specifies the authorization service for a domain.
         * - _Required_: No
         * - _Type_: [AuthorizerConfig](./aws-properties-iot-domainconfiguration-authorizerconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-authorizerconfig */
        "AuthorizerConfig"?: AuthorizerConfig;
        /**
         * - An object that speciﬁes the client certificate conﬁguration for a domain.
         * - _Required_: No
         * - _Type_: [ClientCertificateConfig](./aws-properties-iot-domainconfiguration-clientcertificateconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-clientcertificateconfig */
        "ClientCertificateConfig"?: ClientCertificateConfig;
        /**
         * - The name of the domain configuration. This value must be unique to a region.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[\w.-]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-domainconfigurationname */
        "DomainConfigurationName"?: string | Intrinsic;
        /**
         * - The status to which the domain configuration should be updated.
         * - Valid values: `ENABLED` | `DISABLED`
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `ENABLED | DISABLED`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-domainconfigurationstatus */
        "DomainConfigurationStatus"?: string | Intrinsic;
        /**
         * - The name of the domain.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `253`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-domainname */
        "DomainName"?: string | Intrinsic;
        /**
         * - The ARNs of the certificates that AWS IoT passes to the device during the TLS handshake. Currently you can specify only one certificate ARN. This value is not required for AWS-managed domains.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Minimum_: `1 | 0`
         * - _Maximum_: `2048 | 1`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-servercertificatearns */
        "ServerCertificateArns"?: (string | Intrinsic)[];
        /**
         * - The server certificate configuration.
         * - For more information, see [Configurable endpoints](https://docs.aws.amazon.com/iot/latest/developerguide/iot-custom-endpoints-configurable.html) from the AWS IoT Core Developer Guide.
         * - _Required_: No
         * - _Type_: [ServerCertificateConfig](./aws-properties-iot-domainconfiguration-servercertificateconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-servercertificateconfig */
        "ServerCertificateConfig"?: ServerCertificateConfig;
        /**
         * - The type of service delivered by the endpoint.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `DATA | CREDENTIAL_PROVIDER | JOBS`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-servicetype */
        "ServiceType"?: string | Intrinsic;
        /**
         * - Metadata which can be used to manage the domain configuration.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-iot-domainconfiguration-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-tags */
        "Tags"?: Tag[];
        /**
         * - An object that specifies the TLS configuration for a domain.
         * - _Required_: No
         * - _Type_: [TlsConfig](./aws-properties-iot-domainconfiguration-tlsconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-tlsconfig */
        "TlsConfig"?: TlsConfig;
        /**
         * - The certificate used to validate the server certificate and prove domain name ownership. This certificate must be signed by a public certificate authority. This value is not required for AWS-managed domains.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^arn:aws(-cn|-us-gov|-iso-b|-iso)?:acm:[a-z]{2}-(gov-|iso-|isob-)?[a-z]{4,9}-\d{1}:\d{12}:certificate/[a-zA-Z0-9/-]+$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-domainconfiguration.html#cfn-iot-domainconfiguration-validationcertificatearn */
        "ValidationCertificateArn"?: string | Intrinsic;
    };
}