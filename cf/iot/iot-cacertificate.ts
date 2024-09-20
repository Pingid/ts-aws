import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The registration configuration.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-cacertificate.html */

export interface RegistrationConfig {
  /**
   * - The ARN of the role.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `arn:(aws[a-zA-Z-]*)?:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+`
   * - _Minimum_: `20`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-cacertificate.html#cfn-iot-cacertificate-registrationconfig-rolearn */
  RoleArn?: string | Intrinsic
  /**
   * - The template body.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[\s\S]*`
   * - _Minimum_: `0`
   * - _Maximum_: `10240`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-cacertificate.html#cfn-iot-cacertificate-registrationconfig-templatebody */
  TemplateBody?: string | Intrinsic
  /**
   * - The name of the provisioning template.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[0-9A-Za-z_-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `36`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-cacertificate.html#cfn-iot-cacertificate-registrationconfig-templatename */
  TemplateName?: string | Intrinsic
}

/**
 * A set of key/value pairs that are used to manage the resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-cacertificate.html */

export interface Tag {
  /**
   * - The tag's key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `127`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-cacertificate.html#cfn-iot-cacertificate-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag's value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-cacertificate.html#cfn-iot-cacertificate-tag-value */
  Value: string | Intrinsic
}

/**
 * Specifies a CA certificate.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-cacertificate.html */

export interface IoTCACertificate extends ResourceAttributes {
  Type: 'AWS::IoT::CACertificate'
  Properties: {
    /**
     * - Whether the CA certificate is configured for auto registration of device certificates. Valid values are "ENABLE" and "DISABLE".
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ENABLE | DISABLE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-cacertificate.html#cfn-iot-cacertificate-autoregistrationstatus */
    AutoRegistrationStatus?: string | Intrinsic
    /**
     * - The certificate data in PEM format.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\s\S]*`
     * - _Minimum_: `1`
     * - _Maximum_: `65536`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-cacertificate.html#cfn-iot-cacertificate-cacertificatepem */
    CACertificatePem: string | Intrinsic
    /**
     * - The mode of the CA.
     * - All the device certificates that are registered using this CA will be registered in the same mode as the CA. For more information about certificate mode for device certificates, see [certificate mode](https://docs.aws.amazon.com/iot/latest/apireference/API_CertificateDescription.html#iot-Type-CertificateDescription-certificateMode).
     * - Valid values are "DEFAULT" and "SNI\_ONLY".
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DEFAULT | SNI_ONLY`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-cacertificate.html#cfn-iot-cacertificate-certificatemode */
    CertificateMode?: string | Intrinsic
    /**
     * - Information about the registration configuration.
     * - _Required_: No
     * - _Type_: [RegistrationConfig](./aws-properties-iot-cacertificate-registrationconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-cacertificate.html#cfn-iot-cacertificate-registrationconfig */
    RegistrationConfig?: RegistrationConfig
    /**
     * - If true, removes auto registration.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-cacertificate.html#cfn-iot-cacertificate-removeautoregistration */
    RemoveAutoRegistration?: boolean | Intrinsic
    /**
     * - The status of the CA certificate.
     * - Valid values are "ACTIVE" and "INACTIVE".
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ACTIVE | INACTIVE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-cacertificate.html#cfn-iot-cacertificate-status */
    Status: string | Intrinsic
    /**
     * - An array of key-value pairs to apply to this resource.
     * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-iot-cacertificate-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-cacertificate.html#cfn-iot-cacertificate-tags */
    Tags?: Tag[]
    /**
     * - The private key verification certificate.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[\s\S]*`
     * - _Minimum_: `1`
     * - _Maximum_: `65536`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-cacertificate.html#cfn-iot-cacertificate-verificationcertificatepem */
    VerificationCertificatePem?: string | Intrinsic
  }
}
