import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Use the `AWS::IoT::Certificate` resource to declare an AWS IoT X.509 certificate. For information about working with X.509 certificates, see [X.509 Client Certificates](https://docs.aws.amazon.com/iot/latest/developerguide/x509-client-certs.html) in the _AWS IoT Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificate.html */

export interface IoTCertificate extends ResourceAttributes {
    "Type": "AWS::IoT::Certificate";
    "Properties": {
        /**
         * - The CA certificate used to sign the device certificate being registered, not available when CertificateMode is SNI\_ONLY.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `65536`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificate.html#cfn-iot-certificate-cacertificatepem */
        "CACertificatePem"?: string | Intrinsic;
        /**
         * - Specifies which mode of certificate registration to use with this resource. Valid options are DEFAULT with CaCertificatePem and CertificatePem, SNI\_ONLY with CertificatePem, and Default with CertificateSigningRequest.
         * - `DEFAULT`: A certificate in `DEFAULT` mode is either generated by AWS IoT Core or registered with an issuer certificate authority (CA). Devices with certificates in `DEFAULT` mode aren't required to send the Server Name Indication (SNI) extension when connecting to AWS IoT Core. However, to use features such as custom domains and VPC endpoints, we recommend that you use the SNI extension when connecting to AWS IoT Core.
         * - `SNI_ONLY`: A certificate in `SNI_ONLY` mode is registered without an issuer CA. Devices with certificates in `SNI_ONLY` mode must send the SNI extension when connecting to AWS IoT Core.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `DEFAULT | SNI_ONLY`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificate.html#cfn-iot-certificate-certificatemode */
        "CertificateMode"?: string | Intrinsic;
        /**
         * - The certificate data in PEM format. Requires SNI\_ONLY for the certificate mode or the accompanying CACertificatePem for registration.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `65536`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificate.html#cfn-iot-certificate-certificatepem */
        "CertificatePem"?: string | Intrinsic;
        /**
         * - The certificate signing request (CSR).
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[\s\S]*`
         * - _Minimum_: `1`
         * - _Maximum_: `4096`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificate.html#cfn-iot-certificate-certificatesigningrequest */
        "CertificateSigningRequest"?: string | Intrinsic;
        /**
         * - The status of the certificate.
         * - Valid values are ACTIVE, INACTIVE, REVOKED, PENDING\_TRANSFER, and PENDING\_ACTIVATION.
         * - The status value REGISTER\_INACTIVE is deprecated and should not be used.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `ACTIVE | INACTIVE | REVOKED | PENDING_TRANSFER | PENDING_ACTIVATION`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-certificate.html#cfn-iot-certificate-status */
        "Status": string | Intrinsic;
    };
}