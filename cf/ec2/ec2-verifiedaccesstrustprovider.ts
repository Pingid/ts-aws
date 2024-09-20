import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Describes the options for an AWS Verified Access device-identity based trust provider.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html */

export interface DeviceOptions {
  /**
   * - The URL AWS Verified Access will use to verify the authenticity of the device tokens.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html#cfn-ec2-verifiedaccesstrustprovider-deviceoptions-publicsigningkeyurl */
  PublicSigningKeyUrl?: string | Intrinsic
  /**
   * - The ID of the tenant application with the device-identity provider.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html#cfn-ec2-verifiedaccesstrustprovider-deviceoptions-tenantid */
  TenantId?: string | Intrinsic
}

/**
 * Describes the options for an OpenID Connect-compatible user-identity trust provider.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html */

export interface OidcOptions {
  /**
   * - The OIDC authorization endpoint.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html#cfn-ec2-verifiedaccesstrustprovider-oidcoptions-authorizationendpoint */
  AuthorizationEndpoint?: string | Intrinsic
  /**
   * - The client identifier.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html#cfn-ec2-verifiedaccesstrustprovider-oidcoptions-clientid */
  ClientId?: string | Intrinsic
  /**
   * - The client secret.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html#cfn-ec2-verifiedaccesstrustprovider-oidcoptions-clientsecret */
  ClientSecret?: string | Intrinsic
  /**
   * - The OIDC issuer.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html#cfn-ec2-verifiedaccesstrustprovider-oidcoptions-issuer */
  Issuer?: string | Intrinsic
  /**
   * - The OpenID Connect (OIDC) scope specified.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html#cfn-ec2-verifiedaccesstrustprovider-oidcoptions-scope */
  Scope?: string | Intrinsic
  /**
   * - The OIDC token endpoint.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html#cfn-ec2-verifiedaccesstrustprovider-oidcoptions-tokenendpoint */
  TokenEndpoint?: string | Intrinsic
  /**
   * - The OIDC user info endpoint.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html#cfn-ec2-verifiedaccesstrustprovider-oidcoptions-userinfoendpoint */
  UserInfoEndpoint?: string | Intrinsic
}

/**
 * AWS Verified Access provides server side encryption by default to data at rest using AWS-owned KMS keys. You also have the option of using customer managed KMS keys, which can be specified using the options below.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html */

export interface SseSpecification {
  /**
   * - Enable or disable the use of customer managed KMS keys for server side encryption.
   * - Valid values: `True` | `False`
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html#cfn-ec2-verifiedaccesstrustprovider-ssespecification-customermanagedkeyenabled */
  CustomerManagedKeyEnabled?: boolean | Intrinsic
  /**
   * - The ARN of the KMS key.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html#cfn-ec2-verifiedaccesstrustprovider-ssespecification-kmskeyarn */
  KmsKeyArn?: string | Intrinsic
}

/**
 * Specifies a tag. For more information, see [Resource tags](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html */

export interface Tag {
  /**
   * - The tag key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html#cfn-ec2-verifiedaccesstrustprovider-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html#cfn-ec2-verifiedaccesstrustprovider-tag-value */
  Value: string | Intrinsic
}

/**
 * A trust provider is a third-party entity that creates, maintains, and manages identity information for users and devices. When an application request is made, the identity information sent by the trust provider is evaluated by Verified Access before allowing or denying the application request.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html */

export interface EC2VerifiedAccessTrustProvider extends ResourceAttributes {
  Type: 'AWS::EC2::VerifiedAccessTrustProvider'
  Properties: {
    /**
     * - A description for the AWS Verified Access trust provider.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html#cfn-ec2-verifiedaccesstrustprovider-description */
    Description?: string | Intrinsic
    /**
     * - The options for device-identity trust provider.
     * - _Required_: No
     * - _Type_: [DeviceOptions](./aws-properties-ec2-verifiedaccesstrustprovider-deviceoptions.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html#cfn-ec2-verifiedaccesstrustprovider-deviceoptions */
    DeviceOptions?: DeviceOptions
    /**
     * - The type of device-based trust provider.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `jamf | crowdstrike | jumpcloud`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html#cfn-ec2-verifiedaccesstrustprovider-devicetrustprovidertype */
    DeviceTrustProviderType?: string | Intrinsic
    /**
     * - The options for an OpenID Connect-compatible user-identity trust provider.
     * - _Required_: No
     * - _Type_: [OidcOptions](./aws-properties-ec2-verifiedaccesstrustprovider-oidcoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html#cfn-ec2-verifiedaccesstrustprovider-oidcoptions */
    OidcOptions?: OidcOptions
    /**
     * - The identifier to be used when working with policy rules.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html#cfn-ec2-verifiedaccesstrustprovider-policyreferencename */
    PolicyReferenceName: string | Intrinsic
    /**
     * - The options for additional server side encryption.
     * - _Required_: No
     * - _Type_: [SseSpecification](./aws-properties-ec2-verifiedaccesstrustprovider-ssespecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html#cfn-ec2-verifiedaccesstrustprovider-ssespecification */
    SseSpecification?: SseSpecification
    /**
     * - The tags.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-ec2-verifiedaccesstrustprovider-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html#cfn-ec2-verifiedaccesstrustprovider-tags */
    Tags?: Tag[]
    /**
     * - The type of Verified Access trust provider.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `user | device`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html#cfn-ec2-verifiedaccesstrustprovider-trustprovidertype */
    TrustProviderType: string | Intrinsic
    /**
     * - The type of user-based trust provider.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `iam-identity-center | oidc`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccesstrustprovider.html#cfn-ec2-verifiedaccesstrustprovider-usertrustprovidertype */
    UserTrustProviderType?: string | Intrinsic
  }
}
