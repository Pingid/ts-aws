import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The configuration for a hosted UI custom domain.
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
    "CertificateArn"?: string | Intrinsic;
}

/**
 * The AWS::Cognito::UserPoolDomain resource creates a new domain for a user pool.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooldomain.html */

export interface CognitoUserPoolDomain extends ResourceAttributes {
    "Type": "AWS::Cognito::UserPoolDomain";
    "Properties": {
        /**
         * - The configuration for a custom domain that hosts the sign-up and sign-in pages for your application. Use this object to specify an SSL certificate that is managed by ACM.
         * - When you create a custom domain, the passkey RP ID defaults to the custom domain. If you had a prefix domain active, this will cause passkey integration for your prefix domain to stop working due to a mismatch in RP ID. To keep the prefix domain passkey integration working, you can explicitly set RP ID to the prefix domain.
         * - _Required_: No
         * - _Type_: [CustomDomainConfigType](./aws-properties-cognito-userpooldomain-customdomainconfigtype.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooldomain.html#cfn-cognito-userpooldomain-customdomainconfig */
        "CustomDomainConfig"?: CustomDomainConfigType;
        /**
         * - The name of the domain that you want to update. For custom domains, this is the fully-qualified domain name, for example `auth.example.com`. For prefix domains, this is the prefix alone, such as `myprefix`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-z0-9](?:[a-z0-9\-]{0,61}[a-z0-9])?$`
         * - _Minimum_: `1`
         * - _Maximum_: `63`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooldomain.html#cfn-cognito-userpooldomain-domain */
        "Domain": string | Intrinsic;
        /**
         * - A version number that indicates the state of managed login for your domain. Version `1` is hosted UI (classic). Version `2` is the newer managed login with the branding editor. For more information, see [Managed login](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html).
         * - _Required_: No
         * - _Type_: Integer
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooldomain.html#cfn-cognito-userpooldomain-managedloginversion */
        "ManagedLoginVersion"?: number | Intrinsic;
        /**
         * - The ID of the user pool that is associated with the domain you're updating.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[\w-]+_[0-9a-zA-Z]+`
         * - _Minimum_: `1`
         * - _Maximum_: `55`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooldomain.html#cfn-cognito-userpooldomain-userpoolid */
        "UserPoolId": string | Intrinsic;
    };
}