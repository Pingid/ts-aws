import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Tags are labels that you can use to identify and organize your private CAs. Each tag consists of a key and an optional value. You can associate up to 50 tags with a private CA. To add one or more tags to a private CA, call the [TagCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_TagCertificateAuthority.html) action. To remove a tag, call the [UntagCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_UntagCertificateAuthority.html) action.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html */

export interface Tag {
  /**
   * - Key (name) of the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `([\p{L}\p{Z}\p{N}_.:/=+\-@]*)`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-tag-key */
  Key: string | Intrinsic
  /**
   * - Value of the tag.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `([\p{L}\p{Z}\p{N}_.:/=+\-@]*)`
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-tag-value */
  Value?: string | Intrinsic
}

/**
 * Defines one or more purposes for which the key contained in the certificate can be used. Default value for each option is false.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html */

export interface KeyUsage {
  /**
   * - Key can be used to sign CRLs.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-keyusage-crlsign */
  CRLSign?: boolean | Intrinsic
  /**
   * - Key can be used to decipher data.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-keyusage-dataencipherment */
  DataEncipherment?: boolean | Intrinsic
  /**
   * - Key can be used only to decipher data.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-keyusage-decipheronly */
  DecipherOnly?: boolean | Intrinsic
  /**
   * - Key can be used for digital signing.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-keyusage-digitalsignature */
  DigitalSignature?: boolean | Intrinsic
  /**
   * - Key can be used only to encipher data.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-keyusage-encipheronly */
  EncipherOnly?: boolean | Intrinsic
  /**
   * - Key can be used in a key-agreement protocol.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-keyusage-keyagreement */
  KeyAgreement?: boolean | Intrinsic
  /**
   * - Key can be used to sign certificates.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-keyusage-keycertsign */
  KeyCertSign?: boolean | Intrinsic
  /**
   * - Key can be used to encipher data.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-keyusage-keyencipherment */
  KeyEncipherment?: boolean | Intrinsic
  /**
   * - Key can be used for non-repudiation.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-keyusage-nonrepudiation */
  NonRepudiation?: boolean | Intrinsic
}

/**
 * Contains information to enable and configure Online Certificate Status Protocol (OCSP) for validating certificate revocation status.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html */

export interface OcspConfiguration {
  /**
   * - Flag enabling use of the Online Certificate Status Protocol (OCSP) for validating certificate revocation status.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-ocspconfiguration-enabled */
  Enabled: boolean | Intrinsic
  /**
   * - By default, AWS Private CA injects an Amazon domain into certificates being validated by the Online Certificate Status Protocol (OCSP). A customer can alternatively use this object to define a CNAME specifying a customized OCSP domain.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[-a-zA-Z0-9;/?:@&=+$,%_.!~*()']*`
   * - _Minimum_: `0`
   * - _Maximum_: `253`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-ocspconfiguration-ocspcustomcname */
  OcspCustomCname?: string | Intrinsic
}

/**
 * Defines the X.500 relative distinguished name (RDN).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html */

export interface CustomAttribute {
  /**
   * - Specifies the object identifier (OID) of the attribute type of the relative distinguished name (RDN).
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `([0-2])\.([0-9]|([0-3][0-9]))((\.([0-9]+)){0,126})`
   * - _Minimum_: `0`
   * - _Maximum_: `64`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-customattribute-objectidentifier */
  ObjectIdentifier: string | Intrinsic
  /**
   * -
   * - Specifies the attribute value of relative distinguished name (RDN).
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-customattribute-value */
  Value: string | Intrinsic
}

/**
 * Describes the type and format of extension access. Only one of `CustomObjectIdentifier` or `AccessMethodType` may be provided. Providing both results in `InvalidArgsException`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html */

export interface AccessMethod {
  /**
   * - Specifies the `AccessMethod`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `CA_REPOSITORY | RESOURCE_PKI_MANIFEST | RESOURCE_PKI_NOTIFY`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-accessmethod-accessmethodtype */
  AccessMethodType?: string | Intrinsic
  /**
   * - An object identifier (OID) specifying the `AccessMethod`. The OID must satisfy the regular expression shown below. For more information, see NIST's definition of [Object Identifier (OID)](https://csrc.nist.gov/glossary/term/Object_Identifier).
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `([0-2])\.([0-9]|([0-3][0-9]))((\.([0-9]+)){0,126})`
   * - _Minimum_: `0`
   * - _Maximum_: `64`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-accessmethod-customobjectidentifier */
  CustomObjectIdentifier?: string | Intrinsic
}

/**
 * Contains configuration information for the default behavior of the CRL Distribution Point (CDP) extension in certificates issued by your CA. This extension contains a link to download the CRL, so you can check whether a certificate has been revoked. To choose whether you want this extension omitted or not in certificates issued by your CA, you can set the **OmitExtension** parameter.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html */

export interface CrlDistributionPointExtensionConfiguration {
  /**
   * - Configures whether the CRL Distribution Point extension should be populated with the default URL to the CRL. If set to `true`, then the CDP extension will not be present in any certificates issued by that CA unless otherwise specified through CSR or API passthrough.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-crldistributionpointextensionconfiguration-omitextension */
  OmitExtension: boolean | Intrinsic
}

/**
 * Describes an Electronic Data Interchange (EDI) entity as described in as defined in [Subject Alternative Name](https://datatracker.ietf.org/doc/html/rfc5280) in RFC 5280.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html */

export interface EdiPartyName {
  /**
   * - Specifies the name assigner.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-edipartyname-nameassigner */
  NameAssigner?: string | Intrinsic
  /**
   * - Specifies the party name.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-edipartyname-partyname */
  PartyName: string | Intrinsic
}

/**
 * Defines a custom ASN.1 X.400 `GeneralName` using an object identifier (OID) and value. The OID must satisfy the regular expression shown below. For more information, see NIST's definition of [Object Identifier (OID)](https://csrc.nist.gov/glossary/term/Object_Identifier).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html */

export interface OtherName {
  /**
   * - Specifies an OID.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `([0-2])\.([0-9]|([0-3][0-9]))((\.([0-9]+)){0,126})`
   * - _Minimum_: `0`
   * - _Maximum_: `64`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-othername-typeid */
  TypeId: string | Intrinsic
  /**
   * - Specifies an OID value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-othername-value */
  Value: string | Intrinsic
}

/**
 * ASN1 subject for the certificate authority.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html */

export interface Subject {
  /**
   * - Fully qualified domain name (FQDN) associated with the certificate subject.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-subject-commonname */
  CommonName?: string | Intrinsic
  /**
   * - Two-digit code that specifies the country in which the certificate subject located.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-subject-country */
  Country?: string | Intrinsic
  /**
   * -
   * - Contains a sequence of one or more X.500 relative distinguished names (RDNs), each of which consists of an object identifier (OID) and a value. For more information, see NIST’s definition of [Object Identifier (OID)](https://csrc.nist.gov/glossary/term/Object_Identifier).
   * - _Required_: No
   * - _Type_: Array of [CustomAttribute](./aws-properties-acmpca-certificateauthority-customattribute.html)
   * - _Minimum_: `1`
   * - _Maximum_: `150`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-subject-customattributes */
  CustomAttributes?: CustomAttribute[]
  /**
   * - Disambiguating information for the certificate subject.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-subject-distinguishednamequalifier */
  DistinguishedNameQualifier?: string | Intrinsic
  /**
   * - Typically a qualifier appended to the name of an individual. Examples include Jr. for junior, Sr. for senior, and III for third.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-subject-generationqualifier */
  GenerationQualifier?: string | Intrinsic
  /**
   * - First name.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-subject-givenname */
  GivenName?: string | Intrinsic
  /**
   * - Concatenation that typically contains the first letter of the GivenName, the first letter of the middle name if one exists, and the first letter of the SurName.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-subject-initials */
  Initials?: string | Intrinsic
  /**
   * - The locality (such as a city or town) in which the certificate subject is located.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-subject-locality */
  Locality?: string | Intrinsic
  /**
   * - Legal name of the organization with which the certificate subject is affiliated.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-subject-organization */
  Organization?: string | Intrinsic
  /**
   * - A subdivision or unit of the organization (such as sales or finance) with which the certificate subject is affiliated.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-subject-organizationalunit */
  OrganizationalUnit?: string | Intrinsic
  /**
   * - Typically a shortened version of a longer GivenName. For example, Jonathan is often shortened to John. Elizabeth is often shortened to Beth, Liz, or Eliza.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-subject-pseudonym */
  Pseudonym?: string | Intrinsic
  /**
   * - The certificate serial number.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-subject-serialnumber */
  SerialNumber?: string | Intrinsic
  /**
   * - State in which the subject of the certificate is located.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-subject-state */
  State?: string | Intrinsic
  /**
   * - Family name.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-subject-surname */
  Surname?: string | Intrinsic
  /**
   * - A personal title such as Mr.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-subject-title */
  Title?: string | Intrinsic
}

/**
 * Contains configuration information for a certificate revocation list (CRL). Your private certificate authority (CA) creates base CRLs. Delta CRLs are not supported. You can enable CRLs for your new or an existing private CA by setting the **Enabled** parameter to `true`. Your private CA writes CRLs to an S3 bucket that you specify in the **S3BucketName** parameter. You can hide the name of your bucket by specifying a value for the **CustomCname** parameter. Your private CA by default copies the CNAME or the S3 bucket name to the **CRL Distribution Points** extension of each certificate it issues. If you want to configure this default behavior to be something different, you can set the **CrlDistributionPointExtensionConfiguration** parameter. Your S3 bucket policy must give write permission to AWS Private CA.
 * AWS Private CA assets that are stored in Amazon S3 can be protected with encryption. For more information, see [Encrypting Your CRLs](https://docs.aws.amazon.com/privateca/latest/userguide/PcaCreateCa.html#crl-encryption).
 * Your private CA uses the value in the **ExpirationInDays** parameter to calculate the **nextUpdate** field in the CRL. The CRL is refreshed prior to a certificate's expiration date or when a certificate is revoked. When a certificate is revoked, it appears in the CRL until the certificate expires, and then in one additional CRL after expiration, and it always appears in the audit report.
 * A CRL is typically updated approximately 30 minutes after a certificate is revoked. If for any reason a CRL update fails, AWS Private CA makes further attempts every 15 minutes.
 * CRLs contain the following fields:
 * *   **Version**: The current version number defined in RFC 5280 is V2. The integer value is 0x1.
 *
 * *   **Signature Algorithm**: The name of the algorithm used to sign the CRL.
 *
 * *   **Issuer**: The X.500 distinguished name of your private CA that issued the CRL.
 *
 * *   **Last Update**: The issue date and time of this CRL.
 *
 * *   **Next Update**: The day and time by which the next CRL will be issued.
 *
 * *   **Revoked Certificates**: List of revoked certificates. Each list item contains the following information.
 *
 *     *   **Serial Number**: The serial number, in hexadecimal format, of the revoked certificate.
 *
 *     *   **Revocation Date**: Date and time the certificate was revoked.
 *
 *     *   **CRL Entry Extensions**: Optional extensions for the CRL entry.
 *
 *         *   **X509v3 CRL Reason Code**: Reason the certificate was revoked.
 *
 *
 *
 * *   **CRL Extensions**: Optional extensions for the CRL.
 *
 *     *   **X509v3 Authority Key Identifier**: Identifies the public key associated with the private key used to sign the certificate.
 *
 *     *   **X509v3 CRL Number:**: Decimal sequence number for the CRL.
 *
 *
 * *   **Signature Algorithm**: Algorithm used by your private CA to sign the CRL.
 *
 * *   **Signature Value**: Signature computed over the CRL.
 * Certificate revocation lists created by AWS Private CA are DER-encoded. You can use the following OpenSSL command to list a CRL.
 * `openssl crl -inform DER -text -in _crl_path_ -noout`
 * For more information, see [Planning a certificate revocation list (CRL)](https://docs.aws.amazon.com/privateca/latest/userguide/crl-planning.html) in the _AWS Private Certificate Authority User Guide_
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html */

export interface CrlConfiguration {
  /**
   * - Configures the default behavior of the CRL Distribution Point extension for certificates issued by your CA. If this field is not provided, then the CRL Distribution Point extension will be present and contain the default CRL URL.
   * - _Required_: No
   * - _Type_: [CrlDistributionPointExtensionConfiguration](./aws-properties-acmpca-certificateauthority-crldistributionpointextensionconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-crlconfiguration-crldistributionpointextensionconfiguration */
  CrlDistributionPointExtensionConfiguration?: CrlDistributionPointExtensionConfiguration
  /**
   * - Name inserted into the certificate **CRL Distribution Points** extension that enables the use of an alias for the CRL distribution point. Use this value if you don't want the name of your S3 bucket to be public.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[-a-zA-Z0-9;/?:@&=+$,%_.!~*()']*`
   * - _Minimum_: `0`
   * - _Maximum_: `253`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-crlconfiguration-customcname */
  CustomCname?: string | Intrinsic
  /**
   * - Boolean value that specifies whether certificate revocation lists (CRLs) are enabled. You can use this value to enable certificate revocation for a new CA when you call the `CreateCertificateAuthority` operation or for an existing CA when you call the `UpdateCertificateAuthority` operation.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-crlconfiguration-enabled */
  Enabled: boolean | Intrinsic
  /**
   * - Validity period of the CRL in days.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `5000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-crlconfiguration-expirationindays */
  ExpirationInDays?: number | Intrinsic
  /**
   * - Name of the S3 bucket that contains the CRL. If you do not provide a value for the **CustomCname** argument, the name of your S3 bucket is placed into the **CRL Distribution Points** extension of the issued certificate. You can change the name of your bucket by calling the [UpdateCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html) operation. You must specify a [bucket policy](https://docs.aws.amazon.com/privateca/latest/userguide/PcaCreateCa.html#s3-policies) that allows AWS Private CA to write the CRL to your bucket.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[-a-zA-Z0-9._/]+`
   * - _Minimum_: `3`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-crlconfiguration-s3bucketname */
  S3BucketName?: string | Intrinsic
  /**
   * - Determines whether the CRL will be publicly readable or privately held in the CRL Amazon S3 bucket. If you choose PUBLIC\_READ, the CRL will be accessible over the public internet. If you choose BUCKET\_OWNER\_FULL\_CONTROL, only the owner of the CRL S3 bucket can access the CRL, and your PKI clients may need an alternative method of access.
   * - If no value is specified, the default is PUBLIC\_READ.
   * - _Note:_ This default can cause CA creation to fail in some circumstances. If you have have enabled the Block Public Access (BPA) feature in your S3 account, then you must specify the value of this parameter as `BUCKET_OWNER_FULL_CONTROL`, and not doing so results in an error. If you have disabled BPA in S3, then you can specify either `BUCKET_OWNER_FULL_CONTROL` or `PUBLIC_READ` as the value.
   * - For more information, see [Blocking public access to the S3 bucket](https://docs.aws.amazon.com/privateca/latest/userguide/PcaCreateCa.html#s3-bpa).
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-crlconfiguration-s3objectacl */
  S3ObjectAcl?: string | Intrinsic
}

/**
 * Describes an ASN.1 X.400 `GeneralName` as defined in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280). Only one of the following naming options should be provided. Providing more than one option results in an `InvalidArgsException` error.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html */

export interface GeneralName {
  /**
   * - Contains information about the certificate subject. The certificate can be one issued by your private certificate authority (CA) or it can be your private CA certificate. The Subject field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The Subject must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate. The DN must be unique for each entity, but your private CA can issue more than one certificate with the same DN to the same entity.
   * - _Required_: No
   * - _Type_: [Subject](./aws-properties-acmpca-certificateauthority-subject.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-generalname-directoryname */
  DirectoryName?: Subject
  /**
   * - Represents `GeneralName` as a DNS name.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `253`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-generalname-dnsname */
  DnsName?: string | Intrinsic
  /**
   * - Represents `GeneralName` as an `EdiPartyName` object.
   * - _Required_: No
   * - _Type_: [EdiPartyName](./aws-properties-acmpca-certificateauthority-edipartyname.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-generalname-edipartyname */
  EdiPartyName?: EdiPartyName
  /**
   * - Represents `GeneralName` as an IPv4 or IPv6 address.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `39`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-generalname-ipaddress */
  IpAddress?: string | Intrinsic
  /**
   * - Represents `GeneralName` using an `OtherName` object.
   * - _Required_: No
   * - _Type_: [OtherName](./aws-properties-acmpca-certificateauthority-othername.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-generalname-othername */
  OtherName?: OtherName
  /**
   * - Represents `GeneralName` as an object identifier (OID).
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `([0-2])\.([0-9]|([0-3][0-9]))((\.([0-9]+)){0,126})`
   * - _Minimum_: `0`
   * - _Maximum_: `64`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-generalname-registeredid */
  RegisteredId?: string | Intrinsic
  /**
   * - Represents `GeneralName` as an [RFC 822](https://datatracker.ietf.org/doc/html/rfc822) email address.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-generalname-rfc822name */
  Rfc822Name?: string | Intrinsic
  /**
   * - Represents `GeneralName` as a URI.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `253`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-generalname-uniformresourceidentifier */
  UniformResourceIdentifier?: string | Intrinsic
}

/**
 * Certificate revocation information used by the [CreateCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html) and [UpdateCertificateAuthority](https://docs.aws.amazon.com/privateca/latest/APIReference/API_UpdateCertificateAuthority.html) actions. Your private certificate authority (CA) can configure Online Certificate Status Protocol (OCSP) support and/or maintain a certificate revocation list (CRL). OCSP returns validation information about certificates as requested by clients, and a CRL contains an updated list of certificates revoked by your CA. For more information, see [RevokeCertificate](https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html) in the _AWS Private CA API Reference_ and [Setting up a certificate revocation method](https://docs.aws.amazon.com/privateca/latest/userguide/revocation-setup.html) in the _AWS Private CA User Guide_.
 * The following requirements and constraints apply to revocation configurations.
 * *   A configuration disabling CRLs or OCSP must contain only the `Enabled=False` parameter, and will fail if other parameters such as `CustomCname` or `ExpirationInDays` are included.
 *
 * *   In a CRL configuration, the `S3BucketName` parameter must conform to the [Amazon S3 bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html).
 *
 * *   A configuration containing a custom Canonical Name (CNAME) parameter for CRLs or OCSP must conform to [RFC2396](https://www.ietf.org/rfc/rfc2396.txt) restrictions on the use of special characters in a CNAME.
 *
 * *   In a CRL or OCSP configuration, the value of a CNAME parameter must not include a protocol prefix such as "http://" or "https://".
 *
 * *   To revoke a certificate, delete the resource from your template, and call the AWS Private CA [RevokeCertificate](https://docs.aws.amazon.com/privateca/latest/APIReference/API_RevokeCertificate.html) API and specify the resource's certificate authority ARN.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html */

export interface RevocationConfiguration {
  /**
   * - Configuration of the certificate revocation list (CRL), if any, maintained by your private CA.
   * - _Required_: No
   * - _Type_: [CrlConfiguration](./aws-properties-acmpca-certificateauthority-crlconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-revocationconfiguration-crlconfiguration */
  CrlConfiguration?: CrlConfiguration
  /**
   * - Configuration of Online Certificate Status Protocol (OCSP) support, if any, maintained by your private CA.
   * - _Required_: No
   * - _Type_: [OcspConfiguration](./aws-properties-acmpca-certificateauthority-ocspconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-revocationconfiguration-ocspconfiguration */
  OcspConfiguration?: OcspConfiguration
}

/**
 * Provides access information used by the `authorityInfoAccess` and `subjectInfoAccess` extensions described in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html */

export interface AccessDescription {
  /**
   * - The location of `AccessDescription` information.
   * - _Required_: Yes
   * - _Type_: [GeneralName](./aws-properties-acmpca-certificateauthority-generalname.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-accessdescription-accesslocation */
  AccessLocation: GeneralName
  /**
   * - The type and format of `AccessDescription` information.
   * - _Required_: Yes
   * - _Type_: [AccessMethod](./aws-properties-acmpca-certificateauthority-accessmethod.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-accessdescription-accessmethod */
  AccessMethod: AccessMethod
}

/**
 * Describes the certificate extensions to be added to the certificate signing request (CSR).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html */

export interface CsrExtensions {
  /**
   * - Indicates the purpose of the certificate and of the key contained in the certificate.
   * - _Required_: No
   * - _Type_: [KeyUsage](./aws-properties-acmpca-certificateauthority-keyusage.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-csrextensions-keyusage */
  KeyUsage?: KeyUsage
  /**
   * - For CA certificates, provides a path to additional information pertaining to the CA, such as revocation and policy. For more information, see [Subject Information Access](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.2.2) in RFC 5280.
   * - _Required_: No
   * - _Type_: Array of [AccessDescription](./aws-properties-acmpca-certificateauthority-accessdescription.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-csrextensions-subjectinformationaccess */
  SubjectInformationAccess?: AccessDescription[]
}

/**
 * Use the `AWS::ACMPCA::CertificateAuthority` resource to create a private CA. Once the CA exists, you can use the `AWS::ACMPCA::Certificate` resource to issue a new CA certificate. Alternatively, you can issue a CA certificate using an on-premises CA, and then use the `AWS::ACMPCA::CertificateAuthorityActivation` resource to import the new CA certificate and activate the CA.
 * ###### Note
 *
 * Before removing a `AWS::ACMPCA::CertificateAuthority` resource from the CloudFormation stack, disable the affected CA. Otherwise, the action will fail. You can disable the CA by removing its associated `AWS::ACMPCA::CertificateAuthorityActivation` resource from CloudFormation.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html */

export interface ACMPCACertificateAuthority extends ResourceAttributes {
  Type: 'AWS::ACMPCA::CertificateAuthority'
  Properties: {
    /**
     * - Specifies information to be added to the extension section of the certificate signing request (CSR).
     * - _Required_: No
     * - _Type_: [CsrExtensions](./aws-properties-acmpca-certificateauthority-csrextensions.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-csrextensions */
    CsrExtensions?: CsrExtensions
    /**
     * - Type of the public key algorithm and size, in bits, of the key pair that your CA creates when it issues a certificate. When you create a subordinate CA, you must use a key algorithm supported by the parent CA.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `RSA_2048 | RSA_4096 | EC_prime256v1 | EC_secp384r1 | SM2`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-keyalgorithm */
    KeyAlgorithm: string | Intrinsic
    /**
     * - Specifies a cryptographic key management compliance standard used for handling CA keys.
     * - Default: FIPS\_140\_2\_LEVEL\_3\_OR\_HIGHER
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `FIPS_140_2_LEVEL_2_OR_HIGHER | FIPS_140_2_LEVEL_3_OR_HIGHER | CCPC_LEVEL_1_OR_HIGHER`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-keystoragesecuritystandard */
    KeyStorageSecurityStandard?: string | Intrinsic
    /**
     * - Information about the Online Certificate Status Protocol (OCSP) configuration or certificate revocation list (CRL) created and maintained by your private CA.
     * - _Required_: No
     * - _Type_: [RevocationConfiguration](./aws-properties-acmpca-certificateauthority-revocationconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-revocationconfiguration */
    RevocationConfiguration?: RevocationConfiguration
    /**
     * - Name of the algorithm your private CA uses to sign certificate requests.
     * - This parameter should not be confused with the `SigningAlgorithm` parameter used to sign certificates when they are issued.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `SHA256WITHECDSA | SHA384WITHECDSA | SHA512WITHECDSA | SHA256WITHRSA | SHA384WITHRSA | SHA512WITHRSA | SM3WITHSM2`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-signingalgorithm */
    SigningAlgorithm: string | Intrinsic
    /**
     * - Structure that contains X.500 distinguished name information for your private CA.
     * - _Required_: Yes
     * - _Type_: [Subject](./aws-properties-acmpca-certificateauthority-subject.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-subject */
    Subject: Subject
    /**
     * - Key-value pairs that will be attached to the new private CA. You can associate up to 50 tags with a private CA. For information using tags with IAM to manage permissions, see [Controlling Access Using IAM Tags](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html).
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-acmpca-certificateauthority-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-tags */
    Tags?: Tag[]
    /**
     * - Type of your private CA.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ROOT | SUBORDINATE`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-type */
    Type: string | Intrinsic
    /**
     * - Specifies whether the CA issues general-purpose certificates that typically require a revocation mechanism, or short-lived certificates that may optionally omit revocation because they expire quickly. Short-lived certificate validity is limited to seven days.
     * - The default value is GENERAL\_PURPOSE.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `GENERAL_PURPOSE | SHORT_LIVED_CERTIFICATE`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificateauthority.html#cfn-acmpca-certificateauthority-usagemode */
    UsageMode?: string | Intrinsic
  }
}
