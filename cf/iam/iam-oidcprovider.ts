import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A structure that represents user-provided metadata that can be associated with an IAM resource. For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the _IAM User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-oidcprovider.html */

export interface Tag {
    /**
     * - The key name that can be used to look up or retrieve the associated value. For example, `Department` or `Cost Center` are common choices.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-oidcprovider.html#cfn-iam-oidcprovider-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value associated with this tag. For example, tags with a key name of `Department` could have values such as `Human Resources`, `Accounting`, and `Support`. Tags with a key name of `Cost Center` might have values that consist of the number associated with the different cost centers in your company. Typically, many resources have tags with the same key name but with different values.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-oidcprovider.html#cfn-iam-oidcprovider-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Creates or updates an IAM entity to describe an identity provider (IdP) that supports [OpenID Connect (OIDC)](http://openid.net/connect/).
 * The OIDC provider that you create with this operation can be used as a principal in a role's trust policy. Such a policy establishes a trust relationship between AWS and the OIDC provider.
 * When you create the IAM OIDC provider, you specify the following:
 * *   The URL of the OIDC identity provider (IdP) to trust
 *     
 * *   A list of client IDs (also known as audiences) that identify the application or applications that are allowed to authenticate using the OIDC provider
 *     
 * *   A list of tags that are attached to the specified IAM OIDC provider
 *     
 * *   A list of thumbprints of one or more server certificates that the IdP uses
 * You get all of this information from the OIDC IdP that you want to use to access AWS.
 * When you update the IAM OIDC provider, you specify the following:
 * *   The URL of the OIDC identity provider (IdP) to trust
 *     
 * *   A list of client IDs (also known as audiences) that replaces the existing list of client IDs associated with the OIDC IdP
 *     
 * *   A list of tags that replaces the existing list of tags attached to the specified IAM OIDC provider
 *     
 * *   A list of thumbprints that replaces the existing list of server certificates thumbprints that the IdP uses
 * ###### Note
 * 
 * The trust for the OIDC provider is derived from the IAM provider that this operation creates. Therefore, it is best to limit access to the [CreateOpenIDConnectProvider](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html) operation to highly privileged users.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-oidcprovider.html */

export interface IAMOIDCProvider extends ResourceAttributes {
    "Type": "AWS::IAM::OIDCProvider";
    "Properties": {
        /**
         * - A list of client IDs (also known as audiences) that are associated with the specified IAM OIDC provider resource object. For more information, see [CreateOpenIDConnectProvider](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html).
         * - _Required_: No
         * - _Type_: Array of String
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-oidcprovider.html#cfn-iam-oidcprovider-clientidlist */
        "ClientIdList"?: (string | Intrinsic)[];
        /**
         * - A list of tags that are attached to the specified IAM OIDC provider. The returned list of tags is sorted by tag key. For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the _IAM User Guide_.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-iam-oidcprovider-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-oidcprovider.html#cfn-iam-oidcprovider-tags */
        "Tags"?: Tag[];
        /**
         * - A list of certificate thumbprints that are associated with the specified IAM OIDC provider resource object. For more information, see [CreateOpenIDConnectProvider](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html).
         * - This property is optional. If it is not included, IAM will retrieve and use the top intermediate certificate authority (CA) thumbprint of the OpenID Connect identity provider server certificate.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Minimum_: `40`
         * - _Maximum_: `40 | 5`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-oidcprovider.html#cfn-iam-oidcprovider-thumbprintlist */
        "ThumbprintList"?: (string | Intrinsic)[];
        /**
         * - The URL that the IAM OIDC provider resource object is associated with. For more information, see [CreateOpenIDConnectProvider](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateOpenIDConnectProvider.html).
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-oidcprovider.html#cfn-iam-oidcprovider-url */
        "Url"?: string | Intrinsic;
    };
}