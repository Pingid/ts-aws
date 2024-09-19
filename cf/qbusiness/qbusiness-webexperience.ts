import type { Intrinsic } from '../intrinsic/index.js' /**
 * A list of key/value pairs that identify an index, FAQ, or data source. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: \_ . : / = + - @.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html */

export interface Tag {
  /**
   * - The key for the tag. Keys are not case sensitive and must be unique for the Amazon Q Business application or data source.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html#cfn-qbusiness-webexperience-tag-key */
  Key: string | Intrinsic
  /**
   * - The value associated with the tag. The value may be an empty string but it can't be null.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html#cfn-qbusiness-webexperience-tag-value */
  Value: string | Intrinsic
}

/**
 * Information about the OIDC-compliant identity provider (IdP) used to authenticate end users of an Amazon Q Business web experience.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html */

export interface OpenIDConnectProviderConfiguration {
  /**
   * - The Amazon Resource Name (ARN) of a Secrets Manager secret containing the OIDC client secret.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}$`
   * - _Minimum_: `0`
   * - _Maximum_: `1284`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html#cfn-qbusiness-webexperience-openidconnectproviderconfiguration-secretsarn */
  SecretsArn: string | Intrinsic
  /**
   * - An IAM role with permissions to access AWS KMS to decrypt the Secrets Manager secret containing your OIDC client secret.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}$`
   * - _Minimum_: `0`
   * - _Maximum_: `1284`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html#cfn-qbusiness-webexperience-openidconnectproviderconfiguration-secretsrole */
  SecretsRole: string | Intrinsic
}

/**
 * Information about the SAML 2.0-compliant identity provider (IdP) used to authenticate end users of an Amazon Q Business web experience.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html */

export interface SamlProviderConfiguration {
  /**
   * - The URL where Amazon Q Business end users will be redirected for authentication.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^https://.*$`
   * - _Minimum_: `1`
   * - _Maximum_: `1284`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html#cfn-qbusiness-webexperience-samlproviderconfiguration-authenticationurl */
  AuthenticationUrl: string | Intrinsic
}

/**
 * Provides information about the identity provider (IdP) used to authenticate end users of an Amazon Q Business web experience.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html */

export interface IdentityProviderConfiguration {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [OpenIDConnectProviderConfiguration](./aws-properties-qbusiness-webexperience-openidconnectproviderconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html#cfn-qbusiness-webexperience-identityproviderconfiguration-openidconnectconfiguration */
  OpenIDConnectConfiguration?: OpenIDConnectProviderConfiguration
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [SamlProviderConfiguration](./aws-properties-qbusiness-webexperience-samlproviderconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html#cfn-qbusiness-webexperience-identityproviderconfiguration-samlconfiguration */
  SamlConfiguration?: SamlProviderConfiguration
}

/**
 * Creates an Amazon Q Business web experience.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html */

export interface QBusinessWebExperience {
  Type: 'AWS::QBusiness::WebExperience'
  Properties: {
    /**
     * - The identifier of the Amazon Q Business web experience.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9-]{35}$`
     * - _Minimum_: `36`
     * - _Maximum_: `36`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html#cfn-qbusiness-webexperience-applicationid */
    ApplicationId: string | Intrinsic
    /**
     * - Provides information about the identity provider (IdP) used to authenticate end users of an Amazon Q Business web experience.
     * - _Required_: No
     * - _Type_: [IdentityProviderConfiguration](./aws-properties-qbusiness-webexperience-identityproviderconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html#cfn-qbusiness-webexperience-identityproviderconfiguration */
    IdentityProviderConfiguration?: IdentityProviderConfiguration
    /**
     * - The Amazon Resource Name (ARN) of the service role attached to your web experience.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}$`
     * - _Minimum_: `0`
     * - _Maximum_: `1284`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html#cfn-qbusiness-webexperience-rolearn */
    RoleArn?: string | Intrinsic
    /**
     * - Determines whether sample prompts are enabled in the web experience for an end user.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html#cfn-qbusiness-webexperience-samplepromptscontrolmode */
    SamplePromptsControlMode?: string | Intrinsic
    /**
     * - A subtitle to personalize your Amazon Q Business web experience.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\s\S]*$`
     * - _Minimum_: `0`
     * - _Maximum_: `500`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html#cfn-qbusiness-webexperience-subtitle */
    Subtitle?: string | Intrinsic
    /**
     * - A list of key-value pairs that identify or categorize your Amazon Q Business web experience. You can also use tags to help control access to the web experience. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: \_ . : / = + - @.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-qbusiness-webexperience-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html#cfn-qbusiness-webexperience-tags */
    Tags?: Tag[]
    /**
     * - The title for your Amazon Q Business web experience.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\s\S]*$`
     * - _Minimum_: `0`
     * - _Maximum_: `500`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html#cfn-qbusiness-webexperience-title */
    Title?: string | Intrinsic
    /**
     * - A message in an Amazon Q Business web experience.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `300`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-webexperience.html#cfn-qbusiness-webexperience-welcomemessage */
    WelcomeMessage?: string | Intrinsic
  }
}
