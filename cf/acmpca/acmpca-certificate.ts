import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Length of time for which the certificate issued by your private certificate authority (CA), or by the private CA itself, is valid in days, months, or years. You can issue a certificate by calling the `IssueCertificate` operation.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html */

export interface Validity {
    /**
     * - Specifies whether the `Value` parameter represents days, months, or years.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `END_DATE | ABSOLUTE | DAYS | MONTHS | YEARS`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-validity-type */
    "Type": string | Intrinsic;
    /**
     * - A long integer interpreted according to the value of `Type`, below.
     * - _Required_: Yes
     * - _Type_: Number
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-validity-value */
    "Value": number | Intrinsic;
}

/**
 * 
 * Specifies the X.509 extension information for a certificate.
 * Extensions present in `CustomExtensions` follow the `ApiPassthrough`[template rules](https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html#template-order-of-operations).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html */

export interface CustomExtension {
    /**
     * - 
     * - Specifies the critical flag of the X.509 extension.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-customextension-critical */
    "Critical"?: boolean | Intrinsic;
    /**
     * - 
     * - Specifies the object identifier (OID) of the X.509 extension. For more information, see the [Global OID reference database.](https://oidref.com/2.5.29)
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `([0-2])\.([0-9]|([0-3][0-9]))((\.([0-9]+)){0,126})`
     * - _Minimum_: `0`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-customextension-objectidentifier */
    "ObjectIdentifier": string | Intrinsic;
    /**
     * - 
     * - Specifies the base64-encoded value of the X.509 extension.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?`
     * - _Minimum_: `1`
     * - _Maximum_: `4096`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-customextension-value */
    "Value": string | Intrinsic;
}

/**
 * Specifies additional purposes for which the certified public key may be used other than basic purposes indicated in the `KeyUsage` extension.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html */

export interface ExtendedKeyUsage {
    /**
     * - Specifies a custom `ExtendedKeyUsage` with an object identifier (OID).
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `([0-2])\.([0-9]|([0-3][0-9]))((\.([0-9]+)){0,126})`
     * - _Minimum_: `0`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-extendedkeyusage-extendedkeyusageobjectidentifier */
    "ExtendedKeyUsageObjectIdentifier"?: string | Intrinsic;
    /**
     * - Specifies a standard `ExtendedKeyUsage` as defined as in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.12).
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `SERVER_AUTH | CLIENT_AUTH | CODE_SIGNING | EMAIL_PROTECTION | TIME_STAMPING | OCSP_SIGNING | SMART_CARD_LOGIN | DOCUMENT_SIGNING | CERTIFICATE_TRANSPARENCY`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-extendedkeyusage-extendedkeyusagetype */
    "ExtendedKeyUsageType"?: string | Intrinsic;
}

/**
 * Defines one or more purposes for which the key contained in the certificate can be used. Default value for each option is false.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html */

export interface KeyUsage {
    /**
     * - Key can be used to sign CRLs.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-keyusage-crlsign */
    "CRLSign"?: boolean | Intrinsic;
    /**
     * - Key can be used to decipher data.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-keyusage-dataencipherment */
    "DataEncipherment"?: boolean | Intrinsic;
    /**
     * - Key can be used only to decipher data.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-keyusage-decipheronly */
    "DecipherOnly"?: boolean | Intrinsic;
    /**
     * - Key can be used for digital signing.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-keyusage-digitalsignature */
    "DigitalSignature"?: boolean | Intrinsic;
    /**
     * - Key can be used only to encipher data.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-keyusage-encipheronly */
    "EncipherOnly"?: boolean | Intrinsic;
    /**
     * - Key can be used in a key-agreement protocol.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-keyusage-keyagreement */
    "KeyAgreement"?: boolean | Intrinsic;
    /**
     * - Key can be used to sign certificates.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-keyusage-keycertsign */
    "KeyCertSign"?: boolean | Intrinsic;
    /**
     * - Key can be used to encipher data.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-keyusage-keyencipherment */
    "KeyEncipherment"?: boolean | Intrinsic;
    /**
     * - Key can be used for non-repudiation.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-keyusage-nonrepudiation */
    "NonRepudiation"?: boolean | Intrinsic;
}

/**
 * Defines the X.500 relative distinguished name (RDN).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html */

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
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-customattribute-objectidentifier */
    "ObjectIdentifier": string | Intrinsic;
    /**
     * - 
     * - Specifies the attribute value of relative distinguished name (RDN).
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-customattribute-value */
    "Value": string | Intrinsic;
}

/**
 * Contains information about the certificate subject. The `Subject` field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The `Subject` must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html */

export interface Subject {
    /**
     * - For CA and end-entity certificates in a private PKI, the common name (CN) can be any string within the length limit.
     * - Note: In publicly trusted certificates, the common name must be a fully qualified domain name (FQDN) associated with the certificate subject.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-subject-commonname */
    "CommonName"?: string | Intrinsic;
    /**
     * - Two-digit code that specifies the country in which the certificate subject located.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[A-Za-z]{2}`
     * - _Minimum_: `2`
     * - _Maximum_: `2`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-subject-country */
    "Country"?: string | Intrinsic;
    /**
     * - 
     * - Contains a sequence of one or more X.500 relative distinguished names (RDNs), each of which consists of an object identifier (OID) and a value. For more information, see NIST’s definition of [Object Identifier (OID)](https://csrc.nist.gov/glossary/term/Object_Identifier).
     * - _Required_: No
     * - _Type_: Array of [CustomAttribute](./aws-properties-acmpca-certificate-customattribute.html)
     * - _Minimum_: `1`
     * - _Maximum_: `150`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-subject-customattributes */
    "CustomAttributes"?: CustomAttribute[];
    /**
     * - Disambiguating information for the certificate subject.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9'()+-.?:/= ]*`
     * - _Minimum_: `0`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-subject-distinguishednamequalifier */
    "DistinguishedNameQualifier"?: string | Intrinsic;
    /**
     * - Typically a qualifier appended to the name of an individual. Examples include Jr. for junior, Sr. for senior, and III for third.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `3`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-subject-generationqualifier */
    "GenerationQualifier"?: string | Intrinsic;
    /**
     * - First name.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `16`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-subject-givenname */
    "GivenName"?: string | Intrinsic;
    /**
     * - Concatenation that typically contains the first letter of the **GivenName**, the first letter of the middle name if one exists, and the first letter of the **Surname**.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `5`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-subject-initials */
    "Initials"?: string | Intrinsic;
    /**
     * - The locality (such as a city or town) in which the certificate subject is located.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-subject-locality */
    "Locality"?: string | Intrinsic;
    /**
     * - Legal name of the organization with which the certificate subject is affiliated.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-subject-organization */
    "Organization"?: string | Intrinsic;
    /**
     * - A subdivision or unit of the organization (such as sales or finance) with which the certificate subject is affiliated.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-subject-organizationalunit */
    "OrganizationalUnit"?: string | Intrinsic;
    /**
     * - Typically a shortened version of a longer **GivenName**. For example, Jonathan is often shortened to John. Elizabeth is often shortened to Beth, Liz, or Eliza.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-subject-pseudonym */
    "Pseudonym"?: string | Intrinsic;
    /**
     * - The certificate serial number.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9'()+-.?:/= ]*`
     * - _Minimum_: `0`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-subject-serialnumber */
    "SerialNumber"?: string | Intrinsic;
    /**
     * - State in which the subject of the certificate is located.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-subject-state */
    "State"?: string | Intrinsic;
    /**
     * - Family name. In the US and the UK, for example, the surname of an individual is ordered last. In Asian cultures the surname is typically ordered first.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `40`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-subject-surname */
    "Surname"?: string | Intrinsic;
    /**
     * - A title such as Mr. or Ms., which is pre-pended to the name to refer formally to the certificate subject.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-subject-title */
    "Title"?: string | Intrinsic;
}

/**
 * Describes an Electronic Data Interchange (EDI) entity as described in as defined in [Subject Alternative Name](https://datatracker.ietf.org/doc/html/rfc5280) in RFC 5280.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html */

export interface EdiPartyName {
    /**
     * - Specifies the name assigner.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-edipartyname-nameassigner */
    "NameAssigner": string | Intrinsic;
    /**
     * - Specifies the party name.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-edipartyname-partyname */
    "PartyName": string | Intrinsic;
}

/**
 * Defines a custom ASN.1 X.400 `GeneralName` using an object identifier (OID) and value. The OID must satisfy the regular expression shown below. For more information, see NIST's definition of [Object Identifier (OID)](https://csrc.nist.gov/glossary/term/Object_Identifier).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html */

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
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-othername-typeid */
    "TypeId": string | Intrinsic;
    /**
     * - Specifies an OID value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-othername-value */
    "Value": string | Intrinsic;
}

/**
 * Describes an ASN.1 X.400 `GeneralName` as defined in [RFC 5280](https://datatracker.ietf.org/doc/html/rfc5280). Only one of the following naming options should be provided. Providing more than one option results in an `InvalidArgsException` error.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html */

export interface GeneralName {
    /**
     * - Contains information about the certificate subject. The certificate can be one issued by your private certificate authority (CA) or it can be your private CA certificate. The Subject field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The Subject must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate. The DN must be unique for each entity, but your private CA can issue more than one certificate with the same DN to the same entity.
     * - _Required_: No
     * - _Type_: [Subject](./aws-properties-acmpca-certificate-subject.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-generalname-directoryname */
    "DirectoryName"?: Subject;
    /**
     * - Represents `GeneralName` as a DNS name.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `253`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-generalname-dnsname */
    "DnsName"?: string | Intrinsic;
    /**
     * - Represents `GeneralName` as an `EdiPartyName` object.
     * - _Required_: No
     * - _Type_: [EdiPartyName](./aws-properties-acmpca-certificate-edipartyname.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-generalname-edipartyname */
    "EdiPartyName"?: EdiPartyName;
    /**
     * - Represents `GeneralName` as an IPv4 or IPv6 address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `39`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-generalname-ipaddress */
    "IpAddress"?: string | Intrinsic;
    /**
     * - Represents `GeneralName` using an `OtherName` object.
     * - _Required_: No
     * - _Type_: [OtherName](./aws-properties-acmpca-certificate-othername.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-generalname-othername */
    "OtherName"?: OtherName;
    /**
     * - Represents `GeneralName` as an object identifier (OID).
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `([0-2])\.([0-9]|([0-3][0-9]))((\.([0-9]+)){0,126})`
     * - _Minimum_: `0`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-generalname-registeredid */
    "RegisteredId"?: string | Intrinsic;
    /**
     * - Represents `GeneralName` as an [RFC 822](https://datatracker.ietf.org/doc/html/rfc822) email address.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-generalname-rfc822name */
    "Rfc822Name"?: string | Intrinsic;
    /**
     * - Represents `GeneralName` as a URI.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `253`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-generalname-uniformresourceidentifier */
    "UniformResourceIdentifier"?: string | Intrinsic;
}

/**
 * Defines a `PolicyInformation` qualifier. AWS Private CA supports the [certification practice statement (CPS) qualifier](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.4) defined in RFC 5280.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html */

export interface Qualifier {
    /**
     * - Contains a pointer to a certification practice statement (CPS) published by the CA.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-qualifier-cpsuri */
    "CpsUri": string | Intrinsic;
}

/**
 * Modifies the `CertPolicyId` of a `PolicyInformation` object with a qualifier. AWS Private CA supports the certification practice statement (CPS) qualifier.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html */

export interface PolicyQualifierInfo {
    /**
     * - Identifies the qualifier modifying a `CertPolicyId`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `CPS`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-policyqualifierinfo-policyqualifierid */
    "PolicyQualifierId": string | Intrinsic;
    /**
     * - Defines the qualifier type. AWS Private CA supports the use of a URI for a CPS qualifier in this field.
     * - _Required_: Yes
     * - _Type_: [Qualifier](./aws-properties-acmpca-certificate-qualifier.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-policyqualifierinfo-qualifier */
    "Qualifier": Qualifier;
}

/**
 * Defines the X.509 `CertificatePolicies` extension.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html */

export interface PolicyInformation {
    /**
     * - Specifies the object identifier (OID) of the certificate policy under which the certificate was issued. For more information, see NIST's definition of [Object Identifier (OID)](https://csrc.nist.gov/glossary/term/Object_Identifier).
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `([0-2])\.([0-9]|([0-3][0-9]))((\.([0-9]+)){0,126})`
     * - _Minimum_: `0`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-policyinformation-certpolicyid */
    "CertPolicyId": string | Intrinsic;
    /**
     * - Modifies the given `CertPolicyId` with a qualifier. AWS Private CA supports the certification practice statement (CPS) qualifier.
     * - _Required_: No
     * - _Type_: Array of [PolicyQualifierInfo](./aws-properties-acmpca-certificate-policyqualifierinfo.html)
     * - _Minimum_: `1`
     * - _Maximum_: `20`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-policyinformation-policyqualifiers */
    "PolicyQualifiers"?: PolicyQualifierInfo[];
}

/**
 * Contains X.509 extension information for a certificate.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html */

export interface Extensions {
    /**
     * - Contains a sequence of one or more policy information terms, each of which consists of an object identifier (OID) and optional qualifiers. For more information, see NIST's definition of [Object Identifier (OID)](https://csrc.nist.gov/glossary/term/Object_Identifier).
     * - In an end-entity certificate, these terms indicate the policy under which the certificate was issued and the purposes for which it may be used. In a CA certificate, these terms limit the set of policies for certification paths that include this certificate.
     * - _Required_: No
     * - _Type_: Array of [PolicyInformation](./aws-properties-acmpca-certificate-policyinformation.html)
     * - _Minimum_: `1`
     * - _Maximum_: `20`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-extensions-certificatepolicies */
    "CertificatePolicies"?: PolicyInformation[];
    /**
     * - 
     * - Contains a sequence of one or more X.509 extensions, each of which consists of an object identifier (OID), a base64-encoded value, and the critical flag. For more information, see the [Global OID reference database.](https://oidref.com/2.5.29)
     * - _Required_: No
     * - _Type_: Array of [CustomExtension](./aws-properties-acmpca-certificate-customextension.html)
     * - _Minimum_: `1`
     * - _Maximum_: `150`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-extensions-customextensions */
    "CustomExtensions"?: CustomExtension[];
    /**
     * - Specifies additional purposes for which the certified public key may be used other than basic purposes indicated in the `KeyUsage` extension.
     * - _Required_: No
     * - _Type_: [Array](./aws-properties-acmpca-certificate-extendedkeyusage.html) of [ExtendedKeyUsage](./aws-properties-acmpca-certificate-extendedkeyusage.html)
     * - _Minimum_: `1`
     * - _Maximum_: `20`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-extensions-extendedkeyusage */
    "ExtendedKeyUsage"?: ExtendedKeyUsage[];
    /**
     * - Defines one or more purposes for which the key contained in the certificate can be used. Default value for each option is false.
     * - _Required_: No
     * - _Type_: [KeyUsage](./aws-properties-acmpca-certificate-keyusage.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-extensions-keyusage */
    "KeyUsage"?: KeyUsage;
    /**
     * - The subject alternative name extension allows identities to be bound to the subject of the certificate. These identities may be included in addition to or in place of the identity in the subject field of the certificate.
     * - _Required_: No
     * - _Type_: Array of [GeneralName](./aws-properties-acmpca-certificate-generalname.html)
     * - _Minimum_: `1`
     * - _Maximum_: `150`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-extensions-subjectalternativenames */
    "SubjectAlternativeNames"?: GeneralName[];
}

/**
 * Contains X.509 certificate information to be placed in an issued certificate. An `APIPassthrough` or `APICSRPassthrough` template variant must be selected, or else this parameter is ignored.
 * If conflicting or duplicate certificate information is supplied from other sources, AWS Private CA applies [order of operation rules](https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html#template-order-of-operations) to determine what information is used.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html */

export interface ApiPassthrough {
    /**
     * - Specifies X.509 extension information for a certificate.
     * - _Required_: No
     * - _Type_: [Extensions](./aws-properties-acmpca-certificate-extensions.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-apipassthrough-extensions */
    "Extensions"?: Extensions;
    /**
     * - Contains information about the certificate subject. The Subject field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The Subject must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.
     * - _Required_: No
     * - _Type_: [Subject](./aws-properties-acmpca-certificate-subject.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-apipassthrough-subject */
    "Subject"?: Subject;
}

/**
 * The `AWS::ACMPCA::Certificate` resource is used to issue a certificate using your private certificate authority. For more information, see the [IssueCertificate](https://docs.aws.amazon.com/privateca/latest/APIReference/API_IssueCertificate.html) action.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html */

export interface ACMPCACertificate extends ResourceAttributes {
    "Type": "AWS::ACMPCA::Certificate";
    "Properties": {
        /**
         * - Specifies X.509 certificate information to be included in the issued certificate. An `APIPassthrough` or `APICSRPassthrough` template variant must be selected, or else this parameter is ignored.
         * - _Required_: No
         * - _Type_: [ApiPassthrough](./aws-properties-acmpca-certificate-apipassthrough.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-apipassthrough */
        "ApiPassthrough"?: ApiPassthrough;
        /**
         * - The Amazon Resource Name (ARN) for the private CA issues the certificate.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-certificateauthorityarn */
        "CertificateAuthorityArn": string | Intrinsic;
        /**
         * - The certificate signing request (CSR) for the certificate.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-certificatesigningrequest */
        "CertificateSigningRequest": string | Intrinsic;
        /**
         * - The name of the algorithm that will be used to sign the certificate to be issued.
         * - This parameter should not be confused with the `SigningAlgorithm` parameter used to sign a CSR in the `CreateCertificateAuthority` action.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `SHA256WITHECDSA | SHA384WITHECDSA | SHA512WITHECDSA | SHA256WITHRSA | SHA384WITHRSA | SHA512WITHRSA | SM3WITHSM2`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-signingalgorithm */
        "SigningAlgorithm": string | Intrinsic;
        /**
         * - Specifies a custom configuration template to use when issuing a certificate. If this parameter is not provided, AWS Private CA defaults to the `EndEntityCertificate/V1` template. For more information about AWS Private CA templates, see [Using Templates](https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html).
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-templatearn */
        "TemplateArn"?: string | Intrinsic;
        /**
         * - The period of time during which the certificate will be valid.
         * - _Required_: Yes
         * - _Type_: [Validity](./aws-properties-acmpca-certificate-validity.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-validity */
        "Validity": Validity;
        /**
         * - Information describing the start of the validity period of the certificate. This parameter sets the “Not Before" date for the certificate.
         * - By default, when issuing a certificate, AWS Private CA sets the "Not Before" date to the issuance time minus 60 minutes. This compensates for clock inconsistencies across computer systems. The `ValidityNotBefore` parameter can be used to customize the “Not Before” value.
         * - Unlike the `Validity` parameter, the `ValidityNotBefore` parameter is optional.
         * - The `ValidityNotBefore` value is expressed as an explicit date and time, using the `Validity` type value `ABSOLUTE`.
         * - _Required_: No
         * - _Type_: [Validity](./aws-properties-acmpca-certificate-validity.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-acmpca-certificate.html#cfn-acmpca-certificate-validitynotbefore */
        "ValidityNotBefore"?: Validity;
    };
}