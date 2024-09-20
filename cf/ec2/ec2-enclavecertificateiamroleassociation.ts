import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Associates an AWS Identity and Access Management (IAM) role with an AWS Certificate Manager (ACM) certificate. This enables the certificate to be used by the ACM for Nitro Enclaves application inside an enclave. For more information, see [AWS Certificate Manager for Nitro Enclaves](https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave-refapp.html) in the _AWS Nitro Enclaves User Guide_.
 * When the IAM role is associated with the ACM certificate, the certificate, certificate chain, and encrypted private key are placed in an Amazon S3 location that only the associated IAM role can access. The private key of the certificate is encrypted with an AWS managed key that has an attached attestation-based key policy.
 * To enable the IAM role to access the Amazon S3 object, you must grant it permission to call `s3:GetObject` on the Amazon S3 bucket returned by the command. To enable the IAM role to access the KMS key, you must grant it permission to call `kms:Decrypt` on the KMS key returned by the command. For more information, see [Grant the role permission to access the certificate and encryption key](https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave-refapp.html#add-policy) in the _AWS Nitro Enclaves User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-enclavecertificateiamroleassociation.html */

export interface EC2EnclaveCertificateIamRoleAssociation extends ResourceAttributes {
  Type: 'AWS::EC2::EnclaveCertificateIamRoleAssociation'
  Properties: {
    /**
     * - The ARN of the ACM certificate with which to associate the IAM role.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws[A-Za-z0-9-]{0,64}:acm:[A-Za-z0-9-]{1,64}:([0-9]{12})?:certificate/.+$`
     * - _Minimum_: `1`
     * - _Maximum_: `1283`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-enclavecertificateiamroleassociation.html#cfn-ec2-enclavecertificateiamroleassociation-certificatearn */
    CertificateArn: string | Intrinsic
    /**
     * - The ARN of the IAM role to associate with the ACM certificate. You can associate up to 16 IAM roles with an ACM certificate.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws[A-Za-z0-9-]{0,64}:iam:.*:([0-9]{12})?:role/.+$`
     * - _Minimum_: `1`
     * - _Maximum_: `1283`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-enclavecertificateiamroleassociation.html#cfn-ec2-enclavecertificateiamroleassociation-rolearn */
    RoleArn: string | Intrinsic
  }
}
