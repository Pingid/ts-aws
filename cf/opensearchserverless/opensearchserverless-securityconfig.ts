import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Describes SAML options for an OpenSearch Serverless security configuration in the form of a key-value map.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securityconfig.html */

export interface SamlConfigOptions {
  /**
   * - The group attribute for this SAML integration.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[\w+=,.@-]+`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securityconfig.html#cfn-opensearchserverless-securityconfig-samlconfigoptions-groupattribute */
  GroupAttribute?: string | Intrinsic
  /**
   * - The XML IdP metadata file generated from your identity provider.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[\u0009\u000A\u000D\u0020-\u007E\u00A1-\u00FF]+`
   * - _Minimum_: `1`
   * - _Maximum_: `51200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securityconfig.html#cfn-opensearchserverless-securityconfig-samlconfigoptions-metadata */
  Metadata: string | Intrinsic
  /**
   * - The session timeout, in minutes. Default is 60 minutes (12 hours).
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `5`
   * - _Maximum_: `720`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securityconfig.html#cfn-opensearchserverless-securityconfig-samlconfigoptions-sessiontimeout */
  SessionTimeout?: number | Intrinsic
  /**
   * - A user attribute for this SAML integration.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[\w+=,.@-]+`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securityconfig.html#cfn-opensearchserverless-securityconfig-samlconfigoptions-userattribute */
  UserAttribute?: string | Intrinsic
}

/**
 * Specifies a security configuration for OpenSearch Serverless. For more information, see [SAML authentication for Amazon OpenSearch Serverless](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-saml.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securityconfig.html */

export interface OpenSearchServerlessSecurityConfig extends ResourceAttributes {
  Type: 'AWS::OpenSearchServerless::SecurityConfig'
  Properties: {
    /**
     * - The description of the security configuration.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securityconfig.html#cfn-opensearchserverless-securityconfig-description */
    Description?: string | Intrinsic
    /**
     * - The name of the security configuration.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-z][a-z0-9-]{2,31}$`
     * - _Minimum_: `3`
     * - _Maximum_: `32`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securityconfig.html#cfn-opensearchserverless-securityconfig-name */
    Name?: string | Intrinsic
    /**
     * - SAML options for the security configuration in the form of a key-value map.
     * - _Required_: No
     * - _Type_: [SamlConfigOptions](./aws-properties-opensearchserverless-securityconfig-samlconfigoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securityconfig.html#cfn-opensearchserverless-securityconfig-samloptions */
    SamlOptions?: SamlConfigOptions
    /**
     * - The type of security configuration. Currently the only option is `saml`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `saml`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securityconfig.html#cfn-opensearchserverless-securityconfig-type */
    Type?: string | Intrinsic
  }
}
