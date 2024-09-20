import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A key:value pair associated with an AWS resource. The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each AWS resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html */

export interface Tag {
  /**
   * - The part of the key:value pair that defines a tag. You can use a tag key to describe a category of information, such as "customer." Tag keys are case-sensitive.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^.*$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html#cfn-networkfirewall-tlsinspectionconfiguration-tag-key */
  Key: string | Intrinsic
  /**
   * - The part of the key:value pair that defines a tag. You can use a tag value to describe a specific value within a category, such as "companyA" or "companyB." Tag values are case-sensitive.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^.*$`
   * - _Minimum_: `0`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html#cfn-networkfirewall-tlsinspectionconfiguration-tag-value */
  Value: string | Intrinsic
}

/**
 * When enabled, Network Firewall checks if the server certificate presented by the server in the SSL/TLS connection has a revoked or unkown status. If the certificate has an unknown or revoked status, you must specify the actions that Network Firewall takes on outbound traffic. To check the certificate revocation status, you must also specify a `CertificateAuthorityArn` in [ServerCertificateConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-servercertificateconfiguration.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html */

export interface CheckCertificateRevocationStatus {
  /**
   * - Configures how Network Firewall processes traffic when it determines that the certificate presented by the server in the SSL/TLS connection has a revoked status.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `PASS | DROP | REJECT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html#cfn-networkfirewall-tlsinspectionconfiguration-checkcertificaterevocationstatus-revokedstatusaction */
  RevokedStatusAction?: string | Intrinsic
  /**
   * - Configures how Network Firewall processes traffic when it determines that the certificate presented by the server in the SSL/TLS connection has an unknown status, or a status that cannot be determined for any other reason, including when the service is unable to connect to the OCSP and CRL endpoints for the certificate.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `PASS | DROP | REJECT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html#cfn-networkfirewall-tlsinspectionconfiguration-checkcertificaterevocationstatus-unknownstatusaction */
  UnknownStatusAction?: string | Intrinsic
}

/**
 * Any AWS Certificate Manager (ACM) Secure Sockets Layer/Transport Layer Security (SSL/TLS) server certificate that's associated with a [ServerCertificateConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-servercertificateconfiguration.html). Used in a [TLSInspectionConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html) for inspection of inbound traffic to your firewall. You must request or import a SSL/TLS certificate into ACM for each domain Network Firewall needs to decrypt and inspect. AWS Network Firewall uses the SSL/TLS certificates to decrypt specified inbound SSL/TLS traffic going to your firewall. For information about working with certificates in AWS Certificate Manager, see [Request a public certificate](https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html) or [Importing certificates](https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html) in the _AWS Certificate Manager User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html */

export interface ServerCertificate {
  /**
   * - The Amazon Resource Name (ARN) of the AWS Certificate Manager SSL/TLS server certificate that's used for inbound SSL/TLS inspection.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(arn:aws.*)$`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html#cfn-networkfirewall-tlsinspectionconfiguration-servercertificate-resourcearn */
  ResourceArn?: string | Intrinsic
}

/**
 * A single port range specification. This is used for source and destination port ranges in the stateless rule [MatchAttributes](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-matchattributes.html), `SourcePorts`, and `DestinationPorts` settings.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html */

export interface PortRange {
  /**
   * - The lower limit of the port range. This must be less than or equal to the `ToPort` specification.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `65535`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html#cfn-networkfirewall-tlsinspectionconfiguration-portrange-fromport */
  FromPort: number | Intrinsic
  /**
   * - The upper limit of the port range. This must be greater than or equal to the `FromPort` specification.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `65535`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html#cfn-networkfirewall-tlsinspectionconfiguration-portrange-toport */
  ToPort: number | Intrinsic
}

/**
 * A single IP address specification. This is used in the [MatchAttributes](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-matchattributes.html) source and destination settings.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html */

export interface Address {
  /**
   * - Specify an IP address or a block of IP addresses in Classless Inter-Domain Routing (CIDR) notation. Network Firewall supports all address ranges for IPv4 and IPv6.
   * - Examples:
   * - For more information about CIDR notation, see the Wikipedia entry [Classless Inter-Domain Routing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing).
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^([a-fA-F\d:\.]+/\d{1,3})$`
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html#cfn-networkfirewall-tlsinspectionconfiguration-address-addressdefinition */
  AddressDefinition: string | Intrinsic
}

/**
 * Settings that define the Secure Sockets Layer/Transport Layer Security (SSL/TLS) traffic that Network Firewall should decrypt for inspection by the stateful rule engine.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html */

export interface ServerCertificateScope {
  /**
   * - The destination ports to decrypt for inspection, in Transmission Control Protocol (TCP) format. If not specified, this matches with any destination port.
   * - You can specify individual ports, for example `1994`, and you can specify port ranges, such as `1990:1994`.
   * - _Required_: No
   * - _Type_: Array of [PortRange](./aws-properties-networkfirewall-tlsinspectionconfiguration-portrange.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html#cfn-networkfirewall-tlsinspectionconfiguration-servercertificatescope-destinationports */
  DestinationPorts?: PortRange[]
  /**
   * - The destination IP addresses and address ranges to decrypt for inspection, in CIDR notation. If not specified, this matches with any destination address.
   * - _Required_: No
   * - _Type_: Array of [Address](./aws-properties-networkfirewall-tlsinspectionconfiguration-address.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html#cfn-networkfirewall-tlsinspectionconfiguration-servercertificatescope-destinations */
  Destinations?: Address[]
  /**
   * - The protocols to decrypt for inspection, specified using each protocol's assigned internet protocol number (IANA). Network Firewall currently supports only TCP.
   * - _Required_: No
   * - _Type_: Array of Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html#cfn-networkfirewall-tlsinspectionconfiguration-servercertificatescope-protocols */
  Protocols?: (number | Intrinsic)[]
  /**
   * - The source ports to decrypt for inspection, in Transmission Control Protocol (TCP) format. If not specified, this matches with any source port.
   * - You can specify individual ports, for example `1994`, and you can specify port ranges, such as `1990:1994`.
   * - _Required_: No
   * - _Type_: Array of [PortRange](./aws-properties-networkfirewall-tlsinspectionconfiguration-portrange.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html#cfn-networkfirewall-tlsinspectionconfiguration-servercertificatescope-sourceports */
  SourcePorts?: PortRange[]
  /**
   * - The source IP addresses and address ranges to decrypt for inspection, in CIDR notation. If not specified, this matches with any source address.
   * - _Required_: No
   * - _Type_: Array of [Address](./aws-properties-networkfirewall-tlsinspectionconfiguration-address.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html#cfn-networkfirewall-tlsinspectionconfiguration-servercertificatescope-sources */
  Sources?: Address[]
}

/**
 * Configures the AWS Certificate Manager certificates and scope that Network Firewall uses to decrypt and re-encrypt traffic using a [TLSInspectionConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html). You can configure `ServerCertificates` for inbound SSL/TLS inspection, a `CertificateAuthorityArn` for outbound SSL/TLS inspection, or both. For information about working with certificates for TLS inspection, see [Using SSL/TLS server certficiates with TLS inspection configurations](https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection-certificate-requirements.html) in the _AWS Network Firewall Developer Guide_.
 * ###### Note
 *
 * If a server certificate that's associated with your [TLSInspectionConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html) is revoked, deleted, or expired it can result in client-side TLS errors.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html */

export interface ServerCertificateConfiguration {
  /**
   * - The Amazon Resource Name (ARN) of the imported certificate authority (CA) certificate within AWS Certificate Manager (ACM) to use for outbound SSL/TLS inspection.
   * - The following limitations apply:
   * - For more information about configuring certificates for outbound inspection, see [Using SSL/TLS certificates with certificates with TLS inspection configurations](https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection-certificate-requirements.html) in the _AWS Network Firewall Developer Guide_.
   * - For information about working with certificates in ACM, see [Importing certificates](https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html) in the _AWS Certificate Manager User Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(arn:aws.*)$`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html#cfn-networkfirewall-tlsinspectionconfiguration-servercertificateconfiguration-certificateauthorityarn */
  CertificateAuthorityArn?: string | Intrinsic
  /**
   * - When enabled, Network Firewall checks if the server certificate presented by the server in the SSL/TLS connection has a revoked or unkown status. If the certificate has an unknown or revoked status, you must specify the actions that Network Firewall takes on outbound traffic. To check the certificate revocation status, you must also specify a `CertificateAuthorityArn` in [ServerCertificateConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-servercertificateconfiguration.html).
   * - _Required_: No
   * - _Type_: [CheckCertificateRevocationStatus](./aws-properties-networkfirewall-tlsinspectionconfiguration-checkcertificaterevocationstatus.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html#cfn-networkfirewall-tlsinspectionconfiguration-servercertificateconfiguration-checkcertificaterevocationstatus */
  CheckCertificateRevocationStatus?: CheckCertificateRevocationStatus
  /**
   * - A list of scopes.
   * - _Required_: No
   * - _Type_: Array of [ServerCertificateScope](./aws-properties-networkfirewall-tlsinspectionconfiguration-servercertificatescope.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html#cfn-networkfirewall-tlsinspectionconfiguration-servercertificateconfiguration-scopes */
  Scopes?: ServerCertificateScope[]
  /**
   * - The list of server certificates to use for inbound SSL/TLS inspection.
   * - _Required_: No
   * - _Type_: Array of [ServerCertificate](./aws-properties-networkfirewall-tlsinspectionconfiguration-servercertificate.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html#cfn-networkfirewall-tlsinspectionconfiguration-servercertificateconfiguration-servercertificates */
  ServerCertificates?: ServerCertificate[]
}

/**
 * The object that defines a TLS inspection configuration. This defines the TLS inspection configuration.
 * AWS Network Firewall uses a TLS inspection configuration to decrypt traffic. Network Firewall re-encrypts the traffic before sending it to its destination.
 * To use a TLS inspection configuration, you add it to a new Network Firewall firewall policy, then you apply the firewall policy to a firewall. Network Firewall acts as a proxy service to decrypt and inspect the traffic traveling through your firewalls. You can reference a TLS inspection configuration from more than one firewall policy, and you can use a firewall policy in more than one firewall. For more information about using TLS inspection configurations, see [Inspecting SSL/TLS traffic with TLS inspection configurations](https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection.html) in the _AWS Network Firewall Developer Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html */

export interface TLSInspectionConfiguration {
  /**
   * - Lists the server certificate configurations that are associated with the TLS configuration.
   * - _Required_: No
   * - _Type_: Array of [ServerCertificateConfiguration](./aws-properties-networkfirewall-tlsinspectionconfiguration-servercertificateconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html#cfn-networkfirewall-tlsinspectionconfiguration-tlsinspectionconfiguration-servercertificateconfigurations */
  ServerCertificateConfigurations?: ServerCertificateConfiguration[]
}

/**
 * The object that defines a TLS inspection configuration.
 * AWS Network Firewall uses a TLS inspection configuration to decrypt traffic. Network Firewall re-encrypts the traffic before sending it to its destination.
 * To use a TLS inspection configuration, you add it to a new Network Firewall firewall policy, then you apply the firewall policy to a firewall. Network Firewall acts as a proxy service to decrypt and inspect the traffic traveling through your firewalls. You can reference a TLS inspection configuration from more than one firewall policy, and you can use a firewall policy in more than one firewall. For more information about using TLS inspection configurations, see [Inspecting SSL/TLS traffic with TLS inspection configurations](https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection.html) in the _AWS Network Firewall Developer Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html */

export interface NetworkFirewallTLSInspectionConfiguration extends ResourceAttributes {
  Type: 'AWS::NetworkFirewall::TLSInspectionConfiguration'
  Properties: {
    /**
     * - A description of the TLS inspection configuration.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^.*$`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html#cfn-networkfirewall-tlsinspectionconfiguration-description */
    Description?: string | Intrinsic
    /**
     * - The key:value pairs to associate with the resource.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-networkfirewall-tlsinspectionconfiguration-tag.html)
     * - _Minimum_: `1`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html#cfn-networkfirewall-tlsinspectionconfiguration-tags */
    Tags?: Tag[]
    /**
     * - The object that defines a TLS inspection configuration. AWS Network Firewall uses TLS inspection configurations to decrypt your firewall's inbound and outbound SSL/TLS traffic. After decryption, AWS Network Firewall inspects the traffic according to your firewall policy's stateful rules, and then re-encrypts it before sending it to its destination. You can enable inspection of your firewall's inbound traffic, outbound traffic, or both. To use TLS inspection with your firewall, you must first import or provision certificates using AWS Certificate Manager, create a TLS inspection configuration, add that configuration to a new firewall policy, and then associate that policy with your firewall. For more information about using TLS inspection configurations, see [Inspecting SSL/TLS traffic with TLS inspection configurations](https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection.html) in the _AWS Network Firewall Developer Guide_.
     * - _Required_: Yes
     * - _Type_: [TLSInspectionConfiguration](./aws-properties-networkfirewall-tlsinspectionconfiguration-tlsinspectionconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html#cfn-networkfirewall-tlsinspectionconfiguration-tlsinspectionconfiguration */
    TLSInspectionConfiguration: TLSInspectionConfiguration
    /**
     * - The descriptive name of the TLS inspection configuration. You can't change the name of a TLS inspection configuration after you create it.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html#cfn-networkfirewall-tlsinspectionconfiguration-tlsinspectionconfigurationname */
    TLSInspectionConfigurationName: string | Intrinsic
  }
}
