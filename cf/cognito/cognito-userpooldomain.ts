import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The configuration for a hosted UI custom domain.
 * This data type is a request parameter of [CreateUserPoolDomain](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateUserPoolDomain.html) and [UpdateUserPoolDomain](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserPoolDomain.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooldomain.html */

export interface CustomDomainConfigType {
  /**
   * - The Amazon Resource Name (ARN) of an AWS Certificate Manager SSL certificate. You use this certificate for the subdomain of your custom domain.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `arn:[\w+=/,.@-]+:[\w+=/,.@-]+:([\w+=/,.@-]*)?:[0-9]+:[\w+=/,.@-]+(:[\w+=/,.@-]+)?(:[\w+=/,.@-]+)?`
   * - _Minimum_: `20`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooldomain.html#cfn-cognito-userpooldomain-customdomainconfigtype-certificatearn */
  CertificateArn?: string | Intrinsic
}

/**
 * The AWS::Cognito::UserPoolDomain resource creates a new domain for a user pool.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooldomain.html */

export interface CognitoUserPoolDomain extends ResourceAttributes {
  Type: 'AWS::Cognito::UserPoolDomain'
  Properties: {
    /**
     * - The configuration for a custom domain that hosts the sign-up and sign-in pages for your application. Use this object to specify an SSL certificate that is managed by ACM.
     * - _Required_: No
     * - _Type_: [CustomDomainConfigType](./aws-properties-cognito-userpooldomain-customdomainconfigtype.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooldomain.html#cfn-cognito-userpooldomain-customdomainconfig */
    CustomDomainConfig?: CustomDomainConfigType
    /**
     * - The domain name for the domain that hosts the sign-up and sign-in pages for your application. For example: `auth.example.com`. If you're using a prefix domain, this field denotes the first part of the domain before `.auth.[region].amazoncognito.com`.
     * - This string can include only lowercase letters, numbers, and hyphens. Don't use a hyphen for the first or last character. Use periods to separate subdomain names.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-z0-9](?:[a-z0-9\-]{0,61}[a-z0-9])?$`
     * - _Minimum_: `1`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooldomain.html#cfn-cognito-userpooldomain-domain */
    Domain: string | Intrinsic
    /**
     * - The user pool ID for the user pool where you want to associate a user pool domain.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\w-]+_[0-9a-zA-Z]+`
     * - _Minimum_: `1`
     * - _Maximum_: `55`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooldomain.html#cfn-cognito-userpooldomain-userpoolid */
    UserPoolId: string | Intrinsic
  }
}
