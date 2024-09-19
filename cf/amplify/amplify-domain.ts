import type { Intrinsic } from '../intrinsic/index.js' /**
 * The type of SSL/TLS certificate to use for your custom domain. If a certificate type isn't specified, Amplify uses the default `AMPLIFY_MANAGED` certificate.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html */

export interface CertificateSettings {
  /**
   * - The certificate type.
   * - Specify `AMPLIFY_MANAGED` to use the default certificate that Amplify provisions for you.
   * - Specify `CUSTOM` to use your own certificate that you have already added to AWS Certificate Manager in your AWS account. Make sure you request (or import) the certificate in the US East (N. Virginia) Region (us-east-1). For more information about using ACM, see [Importing certificates into AWS Certificate Manager](https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html) in the _ACM User guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `AMPLIFY_MANAGED | CUSTOM`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html#cfn-amplify-domain-certificatesettings-certificatetype */
  CertificateType?: string | Intrinsic
  /**
   * - The Amazon resource name (ARN) for the custom certificate that you have already added to AWS Certificate Manager in your AWS account.
   * - This field is required only when the certificate type is `CUSTOM`.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:aws:acm:[a-z0-9-]+:\d{12}:certificate\/.+$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html#cfn-amplify-domain-certificatesettings-customcertificatearn */
  CustomCertificateArn?: string | Intrinsic
}

/**
 * The SubDomainSetting property type enables you to connect a subdomain (for example, example.exampledomain.com) to a specific branch.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html */

export interface SubDomainSetting {
  /**
   * - The branch name setting for the subdomain.
   * - _Length Constraints:_ Minimum length of 1. Maximum length of 255.
   * - _Pattern:_ (?s).+
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `(?s).+`
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html#cfn-amplify-domain-subdomainsetting-branchname */
  BranchName: string | Intrinsic
  /**
   * - The prefix setting for the subdomain.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `(?s).*`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html#cfn-amplify-domain-subdomainsetting-prefix */
  Prefix: string | Intrinsic
}

/**
 * Specifies the AWS::Amplify::Domain resource that enables you to connect a custom domain to your app.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html */

export interface AmplifyDomain {
  Type: 'AWS::Amplify::Domain'
  Properties: {
    /**
     * - The unique ID for an Amplify app.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `d[a-z0-9]+`
     * - _Minimum_: `1`
     * - _Maximum_: `20`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html#cfn-amplify-domain-appid */
    AppId: string | Intrinsic
    /**
     * - Sets the branch patterns for automatic subdomain creation.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html#cfn-amplify-domain-autosubdomaincreationpatterns */
    AutoSubDomainCreationPatterns?: (string | Intrinsic)[]
    /**
     * - The required AWS Identity and Access Management (IAMlong) service role for the Amazon Resource Name (ARN) for automatically creating subdomains.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^$|^arn:.+:iam::\d{12}:role.+`
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html#cfn-amplify-domain-autosubdomainiamrole */
    AutoSubDomainIAMRole?: string | Intrinsic
    /**
     * - The type of SSL/TLS certificate to use for your custom domain. If you don't specify a certificate type, Amplify uses the default certificate that it provisions and manages for you.
     * - _Required_: No
     * - _Type_: [CertificateSettings](./aws-properties-amplify-domain-certificatesettings.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html#cfn-amplify-domain-certificatesettings */
    CertificateSettings?: CertificateSettings
    /**
     * - The domain name for the domain association.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(((?!-)[A-Za-z0-9-]{0,62}[A-Za-z0-9])\.)+((?!-)[A-Za-z0-9-]{1,62}[A-Za-z0-9])(\.)?$`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html#cfn-amplify-domain-domainname */
    DomainName: string | Intrinsic
    /**
     * - Enables the automated creation of subdomains for branches.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html#cfn-amplify-domain-enableautosubdomain */
    EnableAutoSubDomain?: boolean | Intrinsic
    /**
     * - The setting for the subdomain.
     * - _Required_: Yes
     * - _Type_: Array of [SubDomainSetting](./aws-properties-amplify-domain-subdomainsetting.html)
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-domain.html#cfn-amplify-domain-subdomainsettings */
    SubDomainSettings: SubDomainSetting[]
  }
}
