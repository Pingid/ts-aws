import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `DomainNameConfiguration` property type specifies the configuration for an API's domain name.
 * `DomainNameConfiguration` is a property of the [AWS::ApiGatewayV2::DomainName](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-domainname.html) resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-domainname.html */

export interface DomainNameConfiguration {
  /**
   * - An AWS-managed certificate that will be used by the edge-optimized endpoint for this domain name. AWS Certificate Manager is the only supported source.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-domainname.html#cfn-apigatewayv2-domainname-domainnameconfiguration-certificatearn */
  CertificateArn?: string | Intrinsic
  /**
   * - The user-friendly name of the certificate that will be used by the edge-optimized endpoint for this domain name.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-domainname.html#cfn-apigatewayv2-domainname-domainnameconfiguration-certificatename */
  CertificateName?: string | Intrinsic
  /**
   * - The endpoint type.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-domainname.html#cfn-apigatewayv2-domainname-domainnameconfiguration-endpointtype */
  EndpointType?: string | Intrinsic
  /**
   * - The Amazon resource name (ARN) for the public certificate issued by AWS Certificate Manager. This ARN is used to validate custom domain ownership. It's required only if you configure mutual TLS and use either an ACM-imported or a private CA certificate ARN as the regionalCertificateArn.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-domainname.html#cfn-apigatewayv2-domainname-domainnameconfiguration-ownershipverificationcertificatearn */
  OwnershipVerificationCertificateArn?: string | Intrinsic
  /**
   * - The Transport Layer Security (TLS) version of the security policy for this domain name. The valid values are `TLS_1_0` and `TLS_1_2`.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-domainname.html#cfn-apigatewayv2-domainname-domainnameconfiguration-securitypolicy */
  SecurityPolicy?: string | Intrinsic
}

/**
 * If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your API.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-domainname.html */

export interface MutualTlsAuthentication {
  /**
   * - An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example, `` s3://`bucket-name`/`key-name` `` . The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. To update the truststore, you must have permissions to access the S3 object.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-domainname.html#cfn-apigatewayv2-domainname-mutualtlsauthentication-truststoreuri */
  TruststoreUri?: string | Intrinsic
  /**
   * - The version of the S3 object that contains your truststore. To specify a version, you must have versioning enabled for the S3 bucket.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-domainname.html#cfn-apigatewayv2-domainname-mutualtlsauthentication-truststoreversion */
  TruststoreVersion?: string | Intrinsic
}

/**
 * The `AWS::ApiGatewayV2::DomainName` resource specifies a custom domain name for your API in Amazon API Gateway (API Gateway).
 * You can use a custom domain name to provide a URL that's more intuitive and easier to recall. For more information about using custom domain names, see [Set up Custom Domain Name for an API in API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html) in the _API Gateway Developer Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-domainname.html */

export interface ApiGatewayV2DomainName extends ResourceAttributes {
  Type: 'AWS::ApiGatewayV2::DomainName'
  Properties: {
    /**
     * - The custom domain name for your API in Amazon API Gateway. Uppercase letters are not supported.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-domainname.html#cfn-apigatewayv2-domainname-domainname */
    DomainName: string | Intrinsic
    /**
     * - The domain name configurations.
     * - _Required_: No
     * - _Type_: Array of [DomainNameConfiguration](./aws-properties-apigatewayv2-domainname-domainnameconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-domainname.html#cfn-apigatewayv2-domainname-domainnameconfigurations */
    DomainNameConfigurations?: DomainNameConfiguration[]
    /**
     * - The mutual TLS authentication configuration for a custom domain name.
     * - _Required_: No
     * - _Type_: [MutualTlsAuthentication](./aws-properties-apigatewayv2-domainname-mutualtlsauthentication.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-domainname.html#cfn-apigatewayv2-domainname-mutualtlsauthentication */
    MutualTlsAuthentication?: MutualTlsAuthentication
    /**
     * - The collection of tags associated with a domain name.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `.*`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigatewayv2-domainname.html#cfn-apigatewayv2-domainname-tags */
    Tags?: Record<string, string | Intrinsic>
  }
}
