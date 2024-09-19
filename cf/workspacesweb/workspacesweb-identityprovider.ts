import type { Intrinsic } from '../intrinsic/index.js' /**
 * This resource specifies an identity provider that is then associated with a web portal. This resource is not required if your portal's `AuthenticationType` is IAM Identity Center.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-identityprovider.html */

export interface WorkSpacesWebIdentityProvider {
  Type: 'AWS::WorkSpacesWeb::IdentityProvider'
  Properties: {
    /**
     * - The identity provider details. The following list describes the provider detail keys for each identity provider type.
     * - _Required_: Yes
     * - _Type_: Object of String
     * - _Pattern_: `^[\s\S]*$`
     * - _Minimum_: `0`
     * - _Maximum_: `131072`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-identityprovider.html#cfn-workspacesweb-identityprovider-identityproviderdetails */
    IdentityProviderDetails: Record<string, string | Intrinsic>
    /**
     * - The identity provider name.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[^_][\p{L}\p{M}\p{S}\p{N}\p{P}][^_]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `32`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-identityprovider.html#cfn-workspacesweb-identityprovider-identityprovidername */
    IdentityProviderName: string | Intrinsic
    /**
     * - The identity provider type.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `SAML | Facebook | Google | LoginWithAmazon | SignInWithApple | OIDC`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-identityprovider.html#cfn-workspacesweb-identityprovider-identityprovidertype */
    IdentityProviderType: string | Intrinsic
    /**
     * - The ARN of the identity provider.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:[\w+=\/,.@-]+:[a-zA-Z0-9\-]+:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:[a-zA-Z]+(\/[a-fA-F0-9\-]{36})+$`
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-identityprovider.html#cfn-workspacesweb-identityprovider-portalarn */
    PortalArn?: string | Intrinsic
  }
}
