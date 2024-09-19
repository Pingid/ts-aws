import type { Intrinsic } from '../intrinsic/index.js' /**
 * Template configurations for v2 template schema.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html */

export interface EnrollmentFlagsV2 {
  /**
   * - Allow renewal using the same key.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-enrollmentflagsv2-enablekeyreuseonnttokenkeysetstoragefull */
  EnableKeyReuseOnNtTokenKeysetStorageFull?: boolean | Intrinsic
  /**
   * - Include symmetric algorithms allowed by the subject.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-enrollmentflagsv2-includesymmetricalgorithms */
  IncludeSymmetricAlgorithms?: boolean | Intrinsic
  /**
   * - This flag instructs the CA to not include the security extension szOID\_NTDS\_CA\_SECURITY\_EXT (OID:1.3.6.1.4.1.311.25.2), as specified in \[MS-WCCE\] sections 2.2.2.7.7.4 and 3.2.2.6.2.1.4.5.9, in the issued certificate. This addresses a Windows Kerberos elevation-of-privilege vulnerability.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-enrollmentflagsv2-nosecurityextension */
  NoSecurityExtension?: boolean | Intrinsic
  /**
   * - Delete expired or revoked certificates instead of archiving them.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-enrollmentflagsv2-removeinvalidcertificatefrompersonalstore */
  RemoveInvalidCertificateFromPersonalStore?: boolean | Intrinsic
  /**
   * - Require user interaction when the subject is enrolled and the private key associated with the certificate is used.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-enrollmentflagsv2-userinteractionrequired */
  UserInteractionRequired?: boolean | Intrinsic
}

/**
 * General flags for v2 template schema that defines if the template is for a machine or a user and if the template can be issued using autoenrollment.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html */

export interface GeneralFlagsV2 {
  /**
   * - Allows certificate issuance using autoenrollment. Set to TRUE to allow autoenrollment.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-generalflagsv2-autoenrollment */
  AutoEnrollment?: boolean | Intrinsic
  /**
   * - Defines if the template is for machines or users. Set to TRUE if the template is for machines. Set to FALSE if the template is for users.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-generalflagsv2-machinetype */
  MachineType?: boolean | Intrinsic
}

/**
 * Defines the attributes of the private key.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html */

export interface PrivateKeyAttributesV2 {
  /**
   * - Defines the cryptographic providers used to generate the private key.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `100 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-privatekeyattributesv2-cryptoproviders */
  CryptoProviders?: (string | Intrinsic)[]
  /**
   * - Defines the purpose of the private key. Set it to "KEY\_EXCHANGE" or "SIGNATURE" value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `KEY_EXCHANGE | SIGNATURE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-privatekeyattributesv2-keyspec */
  KeySpec: string | Intrinsic
  /**
   * - Set the minimum key length of the private key.
   * - _Required_: Yes
   * - _Type_: Number
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-privatekeyattributesv2-minimalkeylength */
  MinimalKeyLength: number | Intrinsic
}

/**
 * Private key flags for v2 templates specify the client compatibility, if the private key can be exported, and if user input is required when using a private key.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html */

export interface PrivateKeyFlagsV2 {
  /**
   * - Defines the minimum client compatibility.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `WINDOWS_SERVER_2003 | WINDOWS_SERVER_2008 | WINDOWS_SERVER_2008_R2 | WINDOWS_SERVER_2012 | WINDOWS_SERVER_2012_R2 | WINDOWS_SERVER_2016`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-privatekeyflagsv2-clientversion */
  ClientVersion: string | Intrinsic
  /**
   * - Allows the private key to be exported.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-privatekeyflagsv2-exportablekey */
  ExportableKey?: boolean | Intrinsic
  /**
   * - Require user input when using the private key for enrollment.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-privatekeyflagsv2-strongkeyprotectionrequired */
  StrongKeyProtectionRequired?: boolean | Intrinsic
}

/**
 * Information to include in the subject name and alternate subject name of the certificate. The subject name can be common name, directory path, DNS as common name, or left blank. You can optionally include email to the subject name for user templates. If you leave the subject name blank then you must set a subject alternate name. The subject alternate name (SAN) can include globally unique identifier (GUID), DNS, domain DNS, email, service principal name (SPN), and user principal name (UPN). You can leave the SAN blank. If you leave the SAN blank, then you must set a subject name.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html */

export interface SubjectNameFlagsV2 {
  /**
   * - Include the common name in the subject name.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-subjectnameflagsv2-requirecommonname */
  RequireCommonName?: boolean | Intrinsic
  /**
   * - Include the directory path in the subject name.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-subjectnameflagsv2-requiredirectorypath */
  RequireDirectoryPath?: boolean | Intrinsic
  /**
   * - Include the DNS as common name in the subject name.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-subjectnameflagsv2-requirednsascn */
  RequireDnsAsCn?: boolean | Intrinsic
  /**
   * - Include the subject's email in the subject name.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-subjectnameflagsv2-requireemail */
  RequireEmail?: boolean | Intrinsic
  /**
   * - Include the globally unique identifier (GUID) in the subject alternate name.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-subjectnameflagsv2-sanrequiredirectoryguid */
  SanRequireDirectoryGuid?: boolean | Intrinsic
  /**
   * - Include the DNS in the subject alternate name.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-subjectnameflagsv2-sanrequiredns */
  SanRequireDns?: boolean | Intrinsic
  /**
   * - Include the domain DNS in the subject alternate name.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-subjectnameflagsv2-sanrequiredomaindns */
  SanRequireDomainDns?: boolean | Intrinsic
  /**
   * - Include the subject's email in the subject alternate name.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-subjectnameflagsv2-sanrequireemail */
  SanRequireEmail?: boolean | Intrinsic
  /**
   * - Include the service principal name (SPN) in the subject alternate name.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-subjectnameflagsv2-sanrequirespn */
  SanRequireSpn?: boolean | Intrinsic
  /**
   * - Include the user principal name (UPN) in the subject alternate name.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-subjectnameflagsv2-sanrequireupn */
  SanRequireUpn?: boolean | Intrinsic
}

/**
 * Template configurations for v3 template schema.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html */

export interface EnrollmentFlagsV3 {
  /**
   * - Allow renewal using the same key.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-enrollmentflagsv3-enablekeyreuseonnttokenkeysetstoragefull */
  EnableKeyReuseOnNtTokenKeysetStorageFull?: boolean | Intrinsic
  /**
   * - Include symmetric algorithms allowed by the subject.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-enrollmentflagsv3-includesymmetricalgorithms */
  IncludeSymmetricAlgorithms?: boolean | Intrinsic
  /**
   * - This flag instructs the CA to not include the security extension szOID\_NTDS\_CA\_SECURITY\_EXT (OID:1.3.6.1.4.1.311.25.2), as specified in \[MS-WCCE\] sections 2.2.2.7.7.4 and 3.2.2.6.2.1.4.5.9, in the issued certificate. This addresses a Windows Kerberos elevation-of-privilege vulnerability.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-enrollmentflagsv3-nosecurityextension */
  NoSecurityExtension?: boolean | Intrinsic
  /**
   * - Delete expired or revoked certificates instead of archiving them.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-enrollmentflagsv3-removeinvalidcertificatefrompersonalstore */
  RemoveInvalidCertificateFromPersonalStore?: boolean | Intrinsic
  /**
   * - Require user interaction when the subject is enrolled and the private key associated with the certificate is used.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-enrollmentflagsv3-userinteractionrequired */
  UserInteractionRequired?: boolean | Intrinsic
}

/**
 * Certificate extensions for v3 template schema
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html */

export interface ExtensionsV3 {
  /**
   * - Application policies specify what the certificate is used for and its purpose.
   * - _Required_: No
   * - _Type_: [ApplicationPolicies](./aws-properties-pcaconnectorad-template-applicationpolicies.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-extensionsv3-applicationpolicies */
  ApplicationPolicies?: ApplicationPolicies
  /**
   * - The key usage extension defines the purpose (e.g., encipherment, signature, certificate signing) of the key contained in the certificate.
   * - _Required_: Yes
   * - _Type_: [KeyUsage](./aws-properties-pcaconnectorad-template-keyusage.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-extensionsv3-keyusage */
  KeyUsage: KeyUsage
}

/**
 * General flags for v3 template schema that defines if the template is for a machine or a user and if the template can be issued using autoenrollment.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html */

export interface GeneralFlagsV3 {
  /**
   * - Allows certificate issuance using autoenrollment. Set to TRUE to allow autoenrollment.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-generalflagsv3-autoenrollment */
  AutoEnrollment?: boolean | Intrinsic
  /**
   * - Defines if the template is for machines or users. Set to TRUE if the template is for machines. Set to FALSE if the template is for users
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-generalflagsv3-machinetype */
  MachineType?: boolean | Intrinsic
}

/**
 * Private key flags for v3 templates specify the client compatibility, if the private key can be exported, if user input is required when using a private key, and if an alternate signature algorithm should be used.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html */

export interface PrivateKeyFlagsV3 {
  /**
   * - Defines the minimum client compatibility.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `WINDOWS_SERVER_2008 | WINDOWS_SERVER_2008_R2 | WINDOWS_SERVER_2012 | WINDOWS_SERVER_2012_R2 | WINDOWS_SERVER_2016`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-privatekeyflagsv3-clientversion */
  ClientVersion: string | Intrinsic
  /**
   * - Allows the private key to be exported.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-privatekeyflagsv3-exportablekey */
  ExportableKey?: boolean | Intrinsic
  /**
   * - Reguires the PKCS #1 v2.1 signature format for certificates. You should verify that your CA, objects, and applications can accept this signature format.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-privatekeyflagsv3-requirealternatesignaturealgorithm */
  RequireAlternateSignatureAlgorithm?: boolean | Intrinsic
  /**
   * - Requirer user input when using the private key for enrollment.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-privatekeyflagsv3-strongkeyprotectionrequired */
  StrongKeyProtectionRequired?: boolean | Intrinsic
}

/**
 * Information to include in the subject name and alternate subject name of the certificate. The subject name can be common name, directory path, DNS as common name, or left blank. You can optionally include email to the subject name for user templates. If you leave the subject name blank then you must set a subject alternate name. The subject alternate name (SAN) can include globally unique identifier (GUID), DNS, domain DNS, email, service principal name (SPN), and user principal name (UPN). You can leave the SAN blank. If you leave the SAN blank, then you must set a subject name.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html */

export interface SubjectNameFlagsV3 {
  /**
   * - Include the common name in the subject name.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-subjectnameflagsv3-requirecommonname */
  RequireCommonName?: boolean | Intrinsic
  /**
   * - Include the directory path in the subject name.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-subjectnameflagsv3-requiredirectorypath */
  RequireDirectoryPath?: boolean | Intrinsic
  /**
   * - Include the DNS as common name in the subject name.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-subjectnameflagsv3-requirednsascn */
  RequireDnsAsCn?: boolean | Intrinsic
  /**
   * - Include the subject's email in the subject name.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-subjectnameflagsv3-requireemail */
  RequireEmail?: boolean | Intrinsic
  /**
   * - Include the globally unique identifier (GUID) in the subject alternate name.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-subjectnameflagsv3-sanrequiredirectoryguid */
  SanRequireDirectoryGuid?: boolean | Intrinsic
  /**
   * - Include the DNS in the subject alternate name.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-subjectnameflagsv3-sanrequiredns */
  SanRequireDns?: boolean | Intrinsic
  /**
   * - Include the domain DNS in the subject alternate name.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-subjectnameflagsv3-sanrequiredomaindns */
  SanRequireDomainDns?: boolean | Intrinsic
  /**
   * - Include the subject's email in the subject alternate name.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-subjectnameflagsv3-sanrequireemail */
  SanRequireEmail?: boolean | Intrinsic
  /**
   * - Include the service principal name (SPN) in the subject alternate name.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-subjectnameflagsv3-sanrequirespn */
  SanRequireSpn?: boolean | Intrinsic
  /**
   * - Include the user principal name (UPN) in the subject alternate name.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-subjectnameflagsv3-sanrequireupn */
  SanRequireUpn?: boolean | Intrinsic
}

/**
 * Template configurations for v4 template schema.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html */

export interface EnrollmentFlagsV4 {
  /**
   * - Allow renewal using the same key.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-enrollmentflagsv4-enablekeyreuseonnttokenkeysetstoragefull */
  EnableKeyReuseOnNtTokenKeysetStorageFull?: boolean | Intrinsic
  /**
   * - Include symmetric algorithms allowed by the subject.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-enrollmentflagsv4-includesymmetricalgorithms */
  IncludeSymmetricAlgorithms?: boolean | Intrinsic
  /**
   * - This flag instructs the CA to not include the security extension szOID\_NTDS\_CA\_SECURITY\_EXT (OID:1.3.6.1.4.1.311.25.2), as specified in \[MS-WCCE\] sections 2.2.2.7.7.4 and 3.2.2.6.2.1.4.5.9, in the issued certificate. This addresses a Windows Kerberos elevation-of-privilege vulnerability.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-enrollmentflagsv4-nosecurityextension */
  NoSecurityExtension?: boolean | Intrinsic
  /**
   * - Delete expired or revoked certificates instead of archiving them.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-enrollmentflagsv4-removeinvalidcertificatefrompersonalstore */
  RemoveInvalidCertificateFromPersonalStore?: boolean | Intrinsic
  /**
   * - Require user interaction when the subject is enrolled and the private key associated with the certificate is used.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-enrollmentflagsv4-userinteractionrequired */
  UserInteractionRequired?: boolean | Intrinsic
}

/**
 * Certificate extensions for v4 template schema
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html */

export interface ExtensionsV4 {
  /**
   * - Application policies specify what the certificate is used for and its purpose.
   * - _Required_: No
   * - _Type_: [ApplicationPolicies](./aws-properties-pcaconnectorad-template-applicationpolicies.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-extensionsv4-applicationpolicies */
  ApplicationPolicies?: ApplicationPolicies
  /**
   * - The key usage extension defines the purpose (e.g., encipherment, signature) of the key contained in the certificate.
   * - _Required_: Yes
   * - _Type_: [KeyUsage](./aws-properties-pcaconnectorad-template-keyusage.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-extensionsv4-keyusage */
  KeyUsage: KeyUsage
}

/**
 * General flags for v4 template schema that defines if the template is for a machine or a user and if the template can be issued using autoenrollment.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html */

export interface GeneralFlagsV4 {
  /**
   * - Allows certificate issuance using autoenrollment. Set to TRUE to allow autoenrollment.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-generalflagsv4-autoenrollment */
  AutoEnrollment?: boolean | Intrinsic
  /**
   * - Defines if the template is for machines or users. Set to TRUE if the template is for machines. Set to FALSE if the template is for users
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-generalflagsv4-machinetype */
  MachineType?: boolean | Intrinsic
}

/**
 * Defines the attributes of the private key.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html */

export interface PrivateKeyAttributesV4 {
  /**
   * - Defines the algorithm used to generate the private key.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `RSA | ECDH_P256 | ECDH_P384 | ECDH_P521`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-privatekeyattributesv4-algorithm */
  Algorithm?: string | Intrinsic
  /**
   * - Defines the cryptographic providers used to generate the private key.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `100 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-privatekeyattributesv4-cryptoproviders */
  CryptoProviders?: (string | Intrinsic)[]
  /**
   * - Defines the purpose of the private key. Set it to "KEY\_EXCHANGE" or "SIGNATURE" value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `KEY_EXCHANGE | SIGNATURE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-privatekeyattributesv4-keyspec */
  KeySpec: string | Intrinsic
  /**
   * - The key usage property defines the purpose of the private key contained in the certificate. You can specify specific purposes using property flags or all by using property type ALL.
   * - _Required_: No
   * - _Type_: [KeyUsageProperty](./aws-properties-pcaconnectorad-template-keyusageproperty.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-privatekeyattributesv4-keyusageproperty */
  KeyUsageProperty?: KeyUsageProperty
  /**
   * - Set the minimum key length of the private key.
   * - _Required_: Yes
   * - _Type_: Number
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-privatekeyattributesv4-minimalkeylength */
  MinimalKeyLength: number | Intrinsic
}

/**
 * Private key flags for v4 templates specify the client compatibility, if the private key can be exported, if user input is required when using a private key, if an alternate signature algorithm should be used, and if certificates are renewed using the same private key.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html */

export interface PrivateKeyFlagsV4 {
  /**
   * - Defines the minimum client compatibility.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `WINDOWS_SERVER_2012 | WINDOWS_SERVER_2012_R2 | WINDOWS_SERVER_2016`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-privatekeyflagsv4-clientversion */
  ClientVersion: string | Intrinsic
  /**
   * - Allows the private key to be exported.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-privatekeyflagsv4-exportablekey */
  ExportableKey?: boolean | Intrinsic
  /**
   * - Requires the PKCS #1 v2.1 signature format for certificates. You should verify that your CA, objects, and applications can accept this signature format.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-privatekeyflagsv4-requirealternatesignaturealgorithm */
  RequireAlternateSignatureAlgorithm?: boolean | Intrinsic
  /**
   * - Renew certificate using the same private key.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-privatekeyflagsv4-requiresamekeyrenewal */
  RequireSameKeyRenewal?: boolean | Intrinsic
  /**
   * - Require user input when using the private key for enrollment.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-privatekeyflagsv4-strongkeyprotectionrequired */
  StrongKeyProtectionRequired?: boolean | Intrinsic
  /**
   * - Specifies the cryptographic service provider category used to generate private keys. Set to TRUE to use Legacy Cryptographic Service Providers and FALSE to use Key Storage Providers.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-privatekeyflagsv4-uselegacyprovider */
  UseLegacyProvider?: boolean | Intrinsic
}

/**
 * Information to include in the subject name and alternate subject name of the certificate. The subject name can be common name, directory path, DNS as common name, or left blank. You can optionally include email to the subject name for user templates. If you leave the subject name blank then you must set a subject alternate name. The subject alternate name (SAN) can include globally unique identifier (GUID), DNS, domain DNS, email, service principal name (SPN), and user principal name (UPN). You can leave the SAN blank. If you leave the SAN blank, then you must set a subject name.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html */

export interface SubjectNameFlagsV4 {
  /**
   * - Include the common name in the subject name.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-subjectnameflagsv4-requirecommonname */
  RequireCommonName?: boolean | Intrinsic
  /**
   * - Include the directory path in the subject name.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-subjectnameflagsv4-requiredirectorypath */
  RequireDirectoryPath?: boolean | Intrinsic
  /**
   * - Include the DNS as common name in the subject name.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-subjectnameflagsv4-requirednsascn */
  RequireDnsAsCn?: boolean | Intrinsic
  /**
   * - Include the subject's email in the subject name.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-subjectnameflagsv4-requireemail */
  RequireEmail?: boolean | Intrinsic
  /**
   * - Include the globally unique identifier (GUID) in the subject alternate name.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-subjectnameflagsv4-sanrequiredirectoryguid */
  SanRequireDirectoryGuid?: boolean | Intrinsic
  /**
   * - Include the DNS in the subject alternate name.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-subjectnameflagsv4-sanrequiredns */
  SanRequireDns?: boolean | Intrinsic
  /**
   * - Include the domain DNS in the subject alternate name.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-subjectnameflagsv4-sanrequiredomaindns */
  SanRequireDomainDns?: boolean | Intrinsic
  /**
   * - Include the subject's email in the subject alternate name.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-subjectnameflagsv4-sanrequireemail */
  SanRequireEmail?: boolean | Intrinsic
  /**
   * - Include the service principal name (SPN) in the subject alternate name.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-subjectnameflagsv4-sanrequirespn */
  SanRequireSpn?: boolean | Intrinsic
  /**
   * - Include the user principal name (UPN) in the subject alternate name.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-subjectnameflagsv4-sanrequireupn */
  SanRequireUpn?: boolean | Intrinsic
}

/**
 * Information describing the end of the validity period of the certificate. This parameter sets the “Not After” date for the certificate. Certificate validity is the period of time during which a certificate is valid. Validity can be expressed as an explicit date and time when the certificate expires, or as a span of time after issuance, stated in hours, days, months, or years. For more information, see Validity in RFC 5280. This value is unaffected when ValidityNotBefore is also specified. For example, if Validity is set to 20 days in the future, the certificate will expire 20 days from issuance time regardless of the ValidityNotBefore value.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html */

export interface ValidityPeriod {
  /**
   * - The numeric value for the validity period.
   * - _Required_: Yes
   * - _Type_: Number
   * - _Minimum_: `1`
   * - _Maximum_: `8766000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-validityperiod-period */
  Period: number | Intrinsic
  /**
   * - The unit of time. You can select hours, days, weeks, months, and years.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `HOURS | DAYS | WEEKS | MONTHS | YEARS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-validityperiod-periodtype */
  PeriodType: string | Intrinsic
}

/**
 * Application policies describe what the certificate can be used for.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html */

export interface ApplicationPolicy {
  /**
   * - The object identifier (OID) of an application policy.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^([0-2])\.([0-9]|([0-3][0-9]))(\.([0-9]+)){0,126}$`
   * - _Minimum_: `1`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-applicationpolicy-policyobjectidentifier */
  PolicyObjectIdentifier?: string | Intrinsic
  /**
   * - The type of application policy
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ALL_APPLICATION_POLICIES | ANY_PURPOSE | ATTESTATION_IDENTITY_KEY_CERTIFICATE | CERTIFICATE_REQUEST_AGENT | CLIENT_AUTHENTICATION | CODE_SIGNING | CTL_USAGE | DIGITAL_RIGHTS | DIRECTORY_SERVICE_EMAIL_REPLICATION | DISALLOWED_LIST | DNS_SERVER_TRUST | DOCUMENT_ENCRYPTION | DOCUMENT_SIGNING | DYNAMIC_CODE_GENERATOR | EARLY_LAUNCH_ANTIMALWARE_DRIVER | EMBEDDED_WINDOWS_SYSTEM_COMPONENT_VERIFICATION | ENCLAVE | ENCRYPTING_FILE_SYSTEM | ENDORSEMENT_KEY_CERTIFICATE | FILE_RECOVERY | HAL_EXTENSION | IP_SECURITY_END_SYSTEM | IP_SECURITY_IKE_INTERMEDIATE | IP_SECURITY_TUNNEL_TERMINATION | IP_SECURITY_USER | ISOLATED_USER_MODE | KDC_AUTHENTICATION | KERNEL_MODE_CODE_SIGNING | KEY_PACK_LICENSES | KEY_RECOVERY | KEY_RECOVERY_AGENT | LICENSE_SERVER_VERIFICATION | LIFETIME_SIGNING | MICROSOFT_PUBLISHER | MICROSOFT_TIME_STAMPING | MICROSOFT_TRUST_LIST_SIGNING | OCSP_SIGNING | OEM_WINDOWS_SYSTEM_COMPONENT_VERIFICATION | PLATFORM_CERTIFICATE | PREVIEW_BUILD_SIGNING | PRIVATE_KEY_ARCHIVAL | PROTECTED_PROCESS_LIGHT_VERIFICATION | PROTECTED_PROCESS_VERIFICATION | QUALIFIED_SUBORDINATION | REVOKED_LIST_SIGNER | ROOT_PROGRAM_AUTO_UPDATE_CA_REVOCATION | ROOT_PROGRAM_AUTO_UPDATE_END_REVOCATION | ROOT_PROGRAM_NO_OSCP_FAILOVER_TO_CRL | ROOT_LIST_SIGNER | SECURE_EMAIL | SERVER_AUTHENTICATION | SMART_CARD_LOGIN | SPC_ENCRYPTED_DIGEST_RETRY_COUNT | SPC_RELAXED_PE_MARKER_CHECK | TIME_STAMPING | WINDOWS_HARDWARE_DRIVER_ATTESTED_VERIFICATION | WINDOWS_HARDWARE_DRIVER_EXTENDED_VERIFICATION | WINDOWS_HARDWARE_DRIVER_VERIFICATION | WINDOWS_HELLO_RECOVERY_KEY_ENCRYPTION | WINDOWS_KITS_COMPONENT | WINDOWS_RT_VERIFICATION | WINDOWS_SOFTWARE_EXTENSION_VERIFICATION | WINDOWS_STORE | WINDOWS_SYSTEM_COMPONENT_VERIFICATION | WINDOWS_TCB_COMPONENT | WINDOWS_THIRD_PARTY_APPLICATION_COMPONENT | WINDOWS_UPDATE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-applicationpolicy-policytype */
  PolicyType?: string | Intrinsic
}

/**
 * The key usage flags represent the purpose (e.g., encipherment, signature) of the key contained in the certificate.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html */

export interface KeyUsageFlags {
  /**
   * - DataEncipherment is asserted when the subject public key is used for directly enciphering raw user data without the use of an intermediate symmetric cipher.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-keyusageflags-dataencipherment */
  DataEncipherment?: boolean | Intrinsic
  /**
   * - The digitalSignature is asserted when the subject public key is used for verifying digital signatures.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-keyusageflags-digitalsignature */
  DigitalSignature?: boolean | Intrinsic
  /**
   * - KeyAgreement is asserted when the subject public key is used for key agreement.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-keyusageflags-keyagreement */
  KeyAgreement?: boolean | Intrinsic
  /**
   * - KeyEncipherment is asserted when the subject public key is used for enciphering private or secret keys, i.e., for key transport.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-keyusageflags-keyencipherment */
  KeyEncipherment?: boolean | Intrinsic
  /**
   * - NonRepudiation is asserted when the subject public key is used to verify digital signatures.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-keyusageflags-nonrepudiation */
  NonRepudiation?: boolean | Intrinsic
}

/**
 * Specifies key usage.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html */

export interface KeyUsagePropertyFlags {
  /**
   * - Allows key for encryption and decryption.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-keyusagepropertyflags-decrypt */
  Decrypt?: boolean | Intrinsic
  /**
   * - Allows key exchange without encryption.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-keyusagepropertyflags-keyagreement */
  KeyAgreement?: boolean | Intrinsic
  /**
   * - Allow key use for digital signature.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-keyusagepropertyflags-sign */
  Sign?: boolean | Intrinsic
}

/**
 * v4 template schema that can use either Legacy Cryptographic Providers or Key Storage Providers.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html */

export interface TemplateV4 {
  /**
   * - Certificate validity describes the validity and renewal periods of a certificate.
   * - _Required_: Yes
   * - _Type_: [CertificateValidity](./aws-properties-pcaconnectorad-template-certificatevalidity.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-templatev4-certificatevalidity */
  CertificateValidity: CertificateValidity
  /**
   * - Enrollment flags describe the enrollment settings for certificates using the existing private key and deleting expired or revoked certificates.
   * - _Required_: Yes
   * - _Type_: [EnrollmentFlagsV4](./aws-properties-pcaconnectorad-template-enrollmentflagsv4.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-templatev4-enrollmentflags */
  EnrollmentFlags: EnrollmentFlagsV4
  /**
   * - Extensions describe the key usage extensions and application policies for a template.
   * - _Required_: Yes
   * - _Type_: [ExtensionsV4](./aws-properties-pcaconnectorad-template-extensionsv4.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-templatev4-extensions */
  Extensions: ExtensionsV4
  /**
   * - General flags describe whether the template is used for computers or users and if the template can be used with autoenrollment.
   * - _Required_: Yes
   * - _Type_: [GeneralFlagsV4](./aws-properties-pcaconnectorad-template-generalflagsv4.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-templatev4-generalflags */
  GeneralFlags: GeneralFlagsV4
  /**
   * - Specifies the hash algorithm used to hash the private key. Hash algorithm can only be specified when using Key Storage Providers.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `SHA256 | SHA384 | SHA512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-templatev4-hashalgorithm */
  HashAlgorithm?: string | Intrinsic
  /**
   * - Private key attributes allow you to specify the minimal key length, key spec, key usage, and cryptographic providers for the private key of a certificate for v4 templates. V4 templates allow you to use either Key Storage Providers or Legacy Cryptographic Service Providers. You specify the cryptography provider category in private key flags.
   * - _Required_: Yes
   * - _Type_: [PrivateKeyAttributesV4](./aws-properties-pcaconnectorad-template-privatekeyattributesv4.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-templatev4-privatekeyattributes */
  PrivateKeyAttributes: PrivateKeyAttributesV4
  /**
   * - Private key flags for v4 templates specify the client compatibility, if the private key can be exported, if user input is required when using a private key, if an alternate signature algorithm should be used, and if certificates are renewed using the same private key.
   * - _Required_: Yes
   * - _Type_: [PrivateKeyFlagsV4](./aws-properties-pcaconnectorad-template-privatekeyflagsv4.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-templatev4-privatekeyflags */
  PrivateKeyFlags: PrivateKeyFlagsV4
  /**
   * - Subject name flags describe the subject name and subject alternate name that is included in a certificate.
   * - _Required_: Yes
   * - _Type_: [SubjectNameFlagsV4](./aws-properties-pcaconnectorad-template-subjectnameflagsv4.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-templatev4-subjectnameflags */
  SubjectNameFlags: SubjectNameFlagsV4
  /**
   * - List of templates in Active Directory that are superseded by this template.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `64 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-templatev4-supersededtemplates */
  SupersededTemplates?: (string | Intrinsic)[]
}

/**
 * Information describing the end of the validity period of the certificate. This parameter sets the “Not After” date for the certificate. Certificate validity is the period of time during which a certificate is valid. Validity can be expressed as an explicit date and time when the certificate expires, or as a span of time after issuance, stated in days, months, or years. For more information, see Validity in RFC 5280. This value is unaffected when ValidityNotBefore is also specified. For example, if Validity is set to 20 days in the future, the certificate will expire 20 days from issuance time regardless of the ValidityNotBefore value.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html */

export interface CertificateValidity {
  /**
   * - Renewal period is the period of time before certificate expiration when a new certificate will be requested.
   * - _Required_: Yes
   * - _Type_: [ValidityPeriod](./aws-properties-pcaconnectorad-template-validityperiod.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-certificatevalidity-renewalperiod */
  RenewalPeriod: ValidityPeriod
  /**
   * - Information describing the end of the validity period of the certificate. This parameter sets the “Not After” date for the certificate. Certificate validity is the period of time during which a certificate is valid. Validity can be expressed as an explicit date and time when the certificate expires, or as a span of time after issuance, stated in days, months, or years. For more information, see Validity in RFC 5280. This value is unaffected when ValidityNotBefore is also specified. For example, if Validity is set to 20 days in the future, the certificate will expire 20 days from issuance time regardless of the ValidityNotBefore value.
   * - _Required_: Yes
   * - _Type_: [ValidityPeriod](./aws-properties-pcaconnectorad-template-validityperiod.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-certificatevalidity-validityperiod */
  ValidityPeriod: ValidityPeriod
}

/**
 * Application policies describe what the certificate can be used for.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html */

export interface ApplicationPolicies {
  /**
   * - Marks the application policy extension as critical.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-applicationpolicies-critical */
  Critical?: boolean | Intrinsic
  /**
   * - Application policies describe what the certificate can be used for.
   * - _Required_: Yes
   * - _Type_: Array of [ApplicationPolicy](./aws-properties-pcaconnectorad-template-applicationpolicy.html)
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-applicationpolicies-policies */
  Policies: ApplicationPolicy[]
}

/**
 * The key usage extension defines the purpose (e.g., encipherment, signature) of the key contained in the certificate.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html */

export interface KeyUsage {
  /**
   * - Sets the key usage extension to critical.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-keyusage-critical */
  Critical?: boolean | Intrinsic
  /**
   * - The key usage flags represent the purpose (e.g., encipherment, signature) of the key contained in the certificate.
   * - _Required_: Yes
   * - _Type_: [KeyUsageFlags](./aws-properties-pcaconnectorad-template-keyusageflags.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-keyusage-usageflags */
  UsageFlags: KeyUsageFlags
}

/**
 * The key usage property defines the purpose of the private key contained in the certificate. You can specify specific purposes using property flags or all by using property type ALL.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html */

export interface KeyUsageProperty {
  /**
   * - You can specify key usage for encryption, key agreement, and signature. You can use property flags or property type but not both.
   * - _Required_: No
   * - _Type_: [KeyUsagePropertyFlags](./aws-properties-pcaconnectorad-template-keyusagepropertyflags.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-keyusageproperty-propertyflags */
  PropertyFlags?: KeyUsagePropertyFlags
  /**
   * - You can specify all key usages using property type ALL. You can use property type or property flags but not both.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ALL`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-keyusageproperty-propertytype */
  PropertyType?: string | Intrinsic
}

/**
 * Certificate extensions for v2 template schema
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html */

export interface ExtensionsV2 {
  /**
   * - Application policies specify what the certificate is used for and its purpose.
   * - _Required_: No
   * - _Type_: [ApplicationPolicies](./aws-properties-pcaconnectorad-template-applicationpolicies.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-extensionsv2-applicationpolicies */
  ApplicationPolicies?: ApplicationPolicies
  /**
   * - The key usage extension defines the purpose (e.g., encipherment, signature, certificate signing) of the key contained in the certificate.
   * - _Required_: Yes
   * - _Type_: [KeyUsage](./aws-properties-pcaconnectorad-template-keyusage.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-extensionsv2-keyusage */
  KeyUsage: KeyUsage
}

/**
 * Defines the attributes of the private key.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html */

export interface PrivateKeyAttributesV3 {
  /**
   * - Defines the algorithm used to generate the private key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `RSA | ECDH_P256 | ECDH_P384 | ECDH_P521`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-privatekeyattributesv3-algorithm */
  Algorithm: string | Intrinsic
  /**
   * - Defines the cryptographic providers used to generate the private key.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `100 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-privatekeyattributesv3-cryptoproviders */
  CryptoProviders?: (string | Intrinsic)[]
  /**
   * - Defines the purpose of the private key. Set it to "KEY\_EXCHANGE" or "SIGNATURE" value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `KEY_EXCHANGE | SIGNATURE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-privatekeyattributesv3-keyspec */
  KeySpec: string | Intrinsic
  /**
   * - The key usage property defines the purpose of the private key contained in the certificate. You can specify specific purposes using property flags or all by using property type ALL.
   * - _Required_: Yes
   * - _Type_: [KeyUsageProperty](./aws-properties-pcaconnectorad-template-keyusageproperty.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-privatekeyattributesv3-keyusageproperty */
  KeyUsageProperty: KeyUsageProperty
  /**
   * - Set the minimum key length of the private key.
   * - _Required_: Yes
   * - _Type_: Number
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-privatekeyattributesv3-minimalkeylength */
  MinimalKeyLength: number | Intrinsic
}

/**
 * v2 template schema that uses Legacy Cryptographic Providers.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html */

export interface TemplateV2 {
  /**
   * - Certificate validity describes the validity and renewal periods of a certificate.
   * - _Required_: Yes
   * - _Type_: [CertificateValidity](./aws-properties-pcaconnectorad-template-certificatevalidity.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-templatev2-certificatevalidity */
  CertificateValidity: CertificateValidity
  /**
   * - Enrollment flags describe the enrollment settings for certificates such as using the existing private key and deleting expired or revoked certificates.
   * - _Required_: Yes
   * - _Type_: [EnrollmentFlagsV2](./aws-properties-pcaconnectorad-template-enrollmentflagsv2.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-templatev2-enrollmentflags */
  EnrollmentFlags: EnrollmentFlagsV2
  /**
   * - Extensions describe the key usage extensions and application policies for a template.
   * - _Required_: Yes
   * - _Type_: [ExtensionsV2](./aws-properties-pcaconnectorad-template-extensionsv2.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-templatev2-extensions */
  Extensions: ExtensionsV2
  /**
   * - General flags describe whether the template is used for computers or users and if the template can be used with autoenrollment.
   * - _Required_: Yes
   * - _Type_: [GeneralFlagsV2](./aws-properties-pcaconnectorad-template-generalflagsv2.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-templatev2-generalflags */
  GeneralFlags: GeneralFlagsV2
  /**
   * - Private key attributes allow you to specify the minimal key length, key spec, and cryptographic providers for the private key of a certificate for v2 templates. V2 templates allow you to use Legacy Cryptographic Service Providers.
   * - _Required_: Yes
   * - _Type_: [PrivateKeyAttributesV2](./aws-properties-pcaconnectorad-template-privatekeyattributesv2.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-templatev2-privatekeyattributes */
  PrivateKeyAttributes: PrivateKeyAttributesV2
  /**
   * - Private key flags for v2 templates specify the client compatibility, if the private key can be exported, and if user input is required when using a private key.
   * - _Required_: Yes
   * - _Type_: [PrivateKeyFlagsV2](./aws-properties-pcaconnectorad-template-privatekeyflagsv2.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-templatev2-privatekeyflags */
  PrivateKeyFlags: PrivateKeyFlagsV2
  /**
   * - Subject name flags describe the subject name and subject alternate name that is included in a certificate.
   * - _Required_: Yes
   * - _Type_: [SubjectNameFlagsV2](./aws-properties-pcaconnectorad-template-subjectnameflagsv2.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-templatev2-subjectnameflags */
  SubjectNameFlags: SubjectNameFlagsV2
  /**
   * - List of templates in Active Directory that are superseded by this template.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `64 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-templatev2-supersededtemplates */
  SupersededTemplates?: (string | Intrinsic)[]
}

/**
 * v3 template schema that uses Key Storage Providers.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html */

export interface TemplateV3 {
  /**
   * - Certificate validity describes the validity and renewal periods of a certificate.
   * - _Required_: Yes
   * - _Type_: [CertificateValidity](./aws-properties-pcaconnectorad-template-certificatevalidity.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-templatev3-certificatevalidity */
  CertificateValidity: CertificateValidity
  /**
   * - Enrollment flags describe the enrollment settings for certificates such as using the existing private key and deleting expired or revoked certificates.
   * - _Required_: Yes
   * - _Type_: [EnrollmentFlagsV3](./aws-properties-pcaconnectorad-template-enrollmentflagsv3.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-templatev3-enrollmentflags */
  EnrollmentFlags: EnrollmentFlagsV3
  /**
   * - Extensions describe the key usage extensions and application policies for a template.
   * - _Required_: Yes
   * - _Type_: [ExtensionsV3](./aws-properties-pcaconnectorad-template-extensionsv3.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-templatev3-extensions */
  Extensions: ExtensionsV3
  /**
   * - General flags describe whether the template is used for computers or users and if the template can be used with autoenrollment.
   * - _Required_: Yes
   * - _Type_: [GeneralFlagsV3](./aws-properties-pcaconnectorad-template-generalflagsv3.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-templatev3-generalflags */
  GeneralFlags: GeneralFlagsV3
  /**
   * - Specifies the hash algorithm used to hash the private key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `SHA256 | SHA384 | SHA512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-templatev3-hashalgorithm */
  HashAlgorithm: string | Intrinsic
  /**
   * - Private key attributes allow you to specify the algorithm, minimal key length, key spec, key usage, and cryptographic providers for the private key of a certificate for v3 templates. V3 templates allow you to use Key Storage Providers.
   * - _Required_: Yes
   * - _Type_: [PrivateKeyAttributesV3](./aws-properties-pcaconnectorad-template-privatekeyattributesv3.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-templatev3-privatekeyattributes */
  PrivateKeyAttributes: PrivateKeyAttributesV3
  /**
   * - Private key flags for v3 templates specify the client compatibility, if the private key can be exported, if user input is required when using a private key, and if an alternate signature algorithm should be used.
   * - _Required_: Yes
   * - _Type_: [PrivateKeyFlagsV3](./aws-properties-pcaconnectorad-template-privatekeyflagsv3.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-templatev3-privatekeyflags */
  PrivateKeyFlags: PrivateKeyFlagsV3
  /**
   * - Subject name flags describe the subject name and subject alternate name that is included in a certificate.
   * - _Required_: Yes
   * - _Type_: [SubjectNameFlagsV3](./aws-properties-pcaconnectorad-template-subjectnameflagsv3.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-templatev3-subjectnameflags */
  SubjectNameFlags: SubjectNameFlagsV3
  /**
   * - List of templates in Active Directory that are superseded by this template.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `64 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-templatev3-supersededtemplates */
  SupersededTemplates?: (string | Intrinsic)[]
}

/**
 * Template configuration to define the information included in certificates. Define certificate validity and renewal periods, certificate request handling and enrollment options, key usage extensions, application policies, and cryptography settings.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html */

export interface TemplateDefinition {
  /**
   * - Template configuration to define the information included in certificates. Define certificate validity and renewal periods, certificate request handling and enrollment options, key usage extensions, application policies, and cryptography settings.
   * - _Required_: No
   * - _Type_: [TemplateV2](./aws-properties-pcaconnectorad-template-templatev2.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-templatedefinition-templatev2 */
  TemplateV2?: TemplateV2
  /**
   * - Template configuration to define the information included in certificates. Define certificate validity and renewal periods, certificate request handling and enrollment options, key usage extensions, application policies, and cryptography settings.
   * - _Required_: No
   * - _Type_: [TemplateV3](./aws-properties-pcaconnectorad-template-templatev3.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-templatedefinition-templatev3 */
  TemplateV3?: TemplateV3
  /**
   * - Template configuration to define the information included in certificates. Define certificate validity and renewal periods, certificate request handling and enrollment options, key usage extensions, application policies, and cryptography settings.
   * - _Required_: No
   * - _Type_: [TemplateV4](./aws-properties-pcaconnectorad-template-templatev4.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-templatedefinition-templatev4 */
  TemplateV4?: TemplateV4
}

/**
 * Creates an Active Directory compatible certificate template. The connectors issues certificates using these templates based on the requester’s Active Directory group membership.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html */

export interface PCAConnectorADTemplate {
  Type: 'AWS::PCAConnectorAD::Template'
  Properties: {
    /**
     * - The Amazon Resource Name (ARN) that was returned when you called [CreateConnector](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector.html).
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:[\w-]+:pca-connector-ad:[\w-]+:[0-9]+:connector\/[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$`
     * - _Minimum_: `5`
     * - _Maximum_: `200`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-connectorarn */
    ConnectorArn: string | Intrinsic
    /**
     * - Template configuration to define the information included in certificates. Define certificate validity and renewal periods, certificate request handling and enrollment options, key usage extensions, application policies, and cryptography settings.
     * - _Required_: Yes
     * - _Type_: [TemplateDefinition](./aws-properties-pcaconnectorad-template-templatedefinition.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-definition */
    Definition: TemplateDefinition
    /**
     * - Name of the templates. Template names must be unique.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?!^\s+$)((?![\x5c'\x2b,;<=>#\x22])([\x20-\x7E]))+$`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-name */
    Name: string | Intrinsic
    /**
     * - This setting allows the major version of a template to be increased automatically. All members of Active Directory groups that are allowed to enroll with a template will receive a new certificate issued using that template.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-reenrollallcertificateholders */
    ReenrollAllCertificateHolders?: boolean | Intrinsic
    /**
     * - Metadata assigned to a template consisting of a key-value pair.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `.+`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-template.html#cfn-pcaconnectorad-template-tags */
    Tags?: Record<string, string | Intrinsic>
  }
}
