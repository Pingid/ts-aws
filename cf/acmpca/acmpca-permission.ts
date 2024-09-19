import type { Intrinsic } from '../intrinsic/index.js' /**
 * Grants permissions to the AWS Certificate Manager (ACM) service principal (`acm.amazonaws.com`) to perform [IssueCertificate](https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html), [GetCertificate](https://docs.aws.amazon.com/privateca/latest/APIReference/API_GetCertificate.html), and [ListPermissions](https://docs.aws.amazon.com/privateca/latest/APIReference/API_ListPermissions.html) actions on a CA. These actions are needed for the ACM principal to renew private PKI certificates requested through ACM and residing in the same AWS account as the CA.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-permission.html */

export interface ACMPCAPermission {
  Type: 'AWS::ACMPCA::Permission'
  Properties: {
    /**
     * - The private CA actions that can be performed by the designated AWS service. Supported actions are `IssueCertificate`, `GetCertificate`, and `ListPermissions`.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `3`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-permission.html#cfn-acmpca-permission-actions */
    Actions: (string | Intrinsic)[]
    /**
     * - The Amazon Resource Number (ARN) of the private CA from which the permission was issued.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `arn:[\w+=/,.@-]+:acm-pca:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=,.@-]+)*`
     * - _Minimum_: `5`
     * - _Maximum_: `200`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-permission.html#cfn-acmpca-permission-certificateauthorityarn */
    CertificateAuthorityArn: string | Intrinsic
    /**
     * - The AWS service or entity that holds the permission. At this time, the only valid principal is `acm.amazonaws.com`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[^*]+`
     * - _Minimum_: `0`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-permission.html#cfn-acmpca-permission-principal */
    Principal: string | Intrinsic
    /**
     * - The ID of the account that assigned the permission.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[0-9]+`
     * - _Minimum_: `12`
     * - _Maximum_: `12`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-permission.html#cfn-acmpca-permission-sourceaccount */
    SourceAccount?: string | Intrinsic
  }
}
