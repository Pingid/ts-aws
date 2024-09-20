import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The identity provider configuration that you gave when the data store was created.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html */

export interface IdentityProviderConfiguration {
  /**
   * - The authorization strategy that you selected when you created the data store.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `SMART_ON_FHIR_V1 | AWS_AUTH`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html#cfn-healthlake-fhirdatastore-identityproviderconfiguration-authorizationstrategy */
  AuthorizationStrategy: string | Intrinsic
  /**
   * - If you enabled fine-grained authorization when you created the data store.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html#cfn-healthlake-fhirdatastore-identityproviderconfiguration-finegrainedauthorizationenabled */
  FineGrainedAuthorizationEnabled?: boolean | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of the Lambda function that you want to use to decode the access token created by the authorization server.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `arn:aws[-a-z]*:lambda:[a-z]{2}-[a-z]+-\d{1}:\d{12}:function:[a-zA-Z0-9\-_\.]+(:(\$LATEST|[a-zA-Z0-9\-_]+))?`
   * - _Minimum_: `49`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html#cfn-healthlake-fhirdatastore-identityproviderconfiguration-idplambdaarn */
  IdpLambdaArn?: string | Intrinsic
  /**
   * - The JSON metadata elements that you want to use in your identity provider configuration. Required elements are listed based on the launch specification of the SMART application. For more information on all possible elements, see [Metadata](https://build.fhir.org/ig/HL7/smart-app-launch/conformance.html#metadata) in SMART's App Launch specification.
   * - `authorization_endpoint`: The URL to the OAuth2 authorization endpoint.
   * - `grant_types_supported`: An array of grant types that are supported at the token endpoint. You must provide at least one grant type option. Valid options are `authorization_code` and `client_credentials`.
   * - `token_endpoint`: The URL to the OAuth2 token endpoint.
   * - `capabilities`: An array of strings of the SMART capabilities that the authorization server supports.
   * - `code_challenge_methods_supported`: An array of strings of supported PKCE code challenge methods. You must include the `S256` method in the array of PKCE code challenge methods.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html#cfn-healthlake-fhirdatastore-identityproviderconfiguration-metadata */
  Metadata?: string | Intrinsic
}

/**
 * Optional parameter to preload data upon creation of the data store. Currently, the only supported preloaded data is synthetic data generated from Synthea.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html */

export interface PreloadDataConfig {
  /**
   * - The type of preloaded data. Only Synthea preloaded data is supported.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `SYNTHEA`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html#cfn-healthlake-fhirdatastore-preloaddataconfig-preloaddatatype */
  PreloadDataType: string | Intrinsic
}

/**
 * A tag is a label consisting of a user-defined key and value. The form for tags is {"Key", "Value"}
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html */

export interface Tag {
  /**
   * - The key portion of a tag. Tag keys are case sensitive.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html#cfn-healthlake-fhirdatastore-tag-key */
  Key: string | Intrinsic
  /**
   * - The value portion of a tag. Tag values are case sensitive.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html#cfn-healthlake-fhirdatastore-tag-value */
  Value: string | Intrinsic
}

/**
 * The customer-managed-key(CMK) used when creating a Data Store. If a customer owned key is not specified, an Amazon owned key will be used for encryption.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html */

export interface KmsEncryptionConfig {
  /**
   * - The type of customer-managed-key(CMK) used for encryption. The two types of supported CMKs are customer owned CMKs and Amazon owned CMKs. For more information on CMK types, see [KmsEncryptionConfig](https://docs.aws.amazon.com/healthlake/latest/APIReference/API_KmsEncryptionConfig.html#HealthLake-Type-KmsEncryptionConfig-CmkType).
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `CUSTOMER_MANAGED_KMS_KEY | AWS_OWNED_KMS_KEY`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html#cfn-healthlake-fhirdatastore-kmsencryptionconfig-cmktype */
  CmkType: string | Intrinsic
  /**
   * - The KMS encryption key id/alias used to encrypt the data store contents at rest.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `(arn:aws((-us-gov)|(-iso)|(-iso-b)|(-cn))?:kms:)?([a-z]{2}-[a-z]+(-[a-z]+)?-\d:)?(\d{12}:)?(((key/)?[a-zA-Z0-9-_]+)|(alias/[a-zA-Z0-9:/_-]+))`
   * - _Minimum_: `1`
   * - _Maximum_: `400`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html#cfn-healthlake-fhirdatastore-kmsencryptionconfig-kmskeyid */
  KmsKeyId?: string | Intrinsic
}

/**
 * The server-side encryption key configuration for a customer provided encryption key.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html */

export interface SseConfiguration {
  /**
   * - The server-side encryption key configuration for a customer provided encryption key (CMK).
   * - _Required_: Yes
   * - _Type_: [KmsEncryptionConfig](./aws-properties-healthlake-fhirdatastore-kmsencryptionconfig.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html#cfn-healthlake-fhirdatastore-sseconfiguration-kmsencryptionconfig */
  KmsEncryptionConfig: KmsEncryptionConfig
}

/**
 * Creates a Data Store that can ingest and export FHIR formatted data.
 * ###### Important
 *
 * Please note that when a user tries to do an Update operation via CloudFormation, changes to the Data Store name, Type Version, PreloadDataConfig, or SSEConfiguration will delete their existing Data Store for the stack and create a new one. This will lead to potential loss of data.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html */

export interface HealthLakeFHIRDatastore extends ResourceAttributes {
  Type: 'AWS::HealthLake::FHIRDatastore'
  Properties: {
    /**
     * - The user generated name for the data store.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html#cfn-healthlake-fhirdatastore-datastorename */
    DatastoreName?: string | Intrinsic
    /**
     * - The FHIR version of the data store. The only supported version is R4.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `R4`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html#cfn-healthlake-fhirdatastore-datastoretypeversion */
    DatastoreTypeVersion: string | Intrinsic
    /**
     * - The identity provider configuration that you gave when the data store was created.
     * - _Required_: No
     * - _Type_: [IdentityProviderConfiguration](./aws-properties-healthlake-fhirdatastore-identityproviderconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html#cfn-healthlake-fhirdatastore-identityproviderconfiguration */
    IdentityProviderConfiguration?: IdentityProviderConfiguration
    /**
     * - The preloaded data configuration for the data store. Only data preloaded from Synthea is supported.
     * - _Required_: No
     * - _Type_: [PreloadDataConfig](./aws-properties-healthlake-fhirdatastore-preloaddataconfig.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html#cfn-healthlake-fhirdatastore-preloaddataconfig */
    PreloadDataConfig?: PreloadDataConfig
    /**
     * - The server-side encryption key configuration for a customer provided encryption key specified for creating a data store.
     * - _Required_: No
     * - _Type_: [SseConfiguration](./aws-properties-healthlake-fhirdatastore-sseconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html#cfn-healthlake-fhirdatastore-sseconfiguration */
    SseConfiguration?: SseConfiguration
    /**
     * - An array of key-value pairs to apply to this resource.
     * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-healthlake-fhirdatastore-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-healthlake-fhirdatastore.html#cfn-healthlake-fhirdatastore-tags */
    Tags?: Tag[]
  }
}
