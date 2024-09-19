import type { Intrinsic } from '../intrinsic/index.js' /**
 * Optional metadata that you can apply to the virtual gateway to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html */

export interface Tag {
  /**
   * - One part of a key-value pair that make up a tag. A `key` is a general label that acts like a category for more specific tag values.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-tag-key */
  Key: string | Intrinsic
  /**
   * - The optional part of a key-value pair that make up a tag. A `value` acts as a descriptor within a tag category (key).
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-tag-value */
  Value: string | Intrinsic
}

/**
 * An object that represents the health check policy for a virtual gateway's listener.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html */

export interface VirtualGatewayHealthCheckPolicy {
  /**
   * - The number of consecutive successful health checks that must occur before declaring the listener healthy.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `2`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewayhealthcheckpolicy-healthythreshold */
  HealthyThreshold: number | Intrinsic
  /**
   * - The time period in milliseconds between each health check execution.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewayhealthcheckpolicy-intervalmillis */
  IntervalMillis: number | Intrinsic
  /**
   * - The destination path for the health check request. This value is only used if the specified protocol is HTTP or HTTP/2. For any other protocol, this value is ignored.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewayhealthcheckpolicy-path */
  Path?: string | Intrinsic
  /**
   * - The destination port for the health check request. This port must match the port defined in the [PortMapping](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listener.html#cfn-appmesh-virtualnode-listener-portmapping) for the listener.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `65535`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewayhealthcheckpolicy-port */
  Port?: number | Intrinsic
  /**
   * - The protocol for the health check request. If you specify `grpc`, then your service must conform to the [GRPC Health Checking Protocol](https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `http | http2 | grpc`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewayhealthcheckpolicy-protocol */
  Protocol: string | Intrinsic
  /**
   * - The amount of time to wait when receiving a response from the health check, in milliseconds.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewayhealthcheckpolicy-timeoutmillis */
  TimeoutMillis: number | Intrinsic
  /**
   * - The number of consecutive failed health checks that must occur before declaring a virtual gateway unhealthy.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `2`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewayhealthcheckpolicy-unhealthythreshold */
  UnhealthyThreshold: number | Intrinsic
}

/**
 * An object that represents a port mapping.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html */

export interface VirtualGatewayPortMapping {
  /**
   * - The port used for the port mapping. Specify one protocol.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `65535`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewayportmapping-port */
  Port: number | Intrinsic
  /**
   * - The protocol used for the port mapping.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `http | http2 | grpc`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewayportmapping-protocol */
  Protocol: string | Intrinsic
}

/**
 * An object that represents a type of connection pool.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html */

export interface VirtualGatewayGrpcConnectionPool {
  /**
   * - Maximum number of inflight requests Envoy can concurrently support across hosts in upstream cluster.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewaygrpcconnectionpool-maxrequests */
  MaxRequests: number | Intrinsic
}

/**
 * An object that represents a type of connection pool.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html */

export interface VirtualGatewayHttpConnectionPool {
  /**
   * - Maximum number of outbound TCP connections Envoy can establish concurrently with all hosts in upstream cluster.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewayhttpconnectionpool-maxconnections */
  MaxConnections: number | Intrinsic
  /**
   * - Number of overflowing requests after `max_connections` Envoy will queue to upstream cluster.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewayhttpconnectionpool-maxpendingrequests */
  MaxPendingRequests?: number | Intrinsic
}

/**
 * An object that represents a type of connection pool.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html */

export interface VirtualGatewayHttp2ConnectionPool {
  /**
   * - Maximum number of inflight requests Envoy can concurrently support across hosts in upstream cluster.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewayhttp2connectionpool-maxrequests */
  MaxRequests: number | Intrinsic
}

/**
 * An object that represents the virtual gateway's client's Transport Layer Security (TLS) certificate.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html */

export interface VirtualGatewayClientTlsCertificate {
  /**
   * - An object that represents a local file certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see [Transport Layer Security (TLS)](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html) .
   * - _Required_: No
   * - _Type_: [VirtualGatewayListenerTlsFileCertificate](./aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsfilecertificate.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewayclienttlscertificate-file */
  File?: VirtualGatewayListenerTlsFileCertificate
  /**
   * - A reference to an object that represents a virtual gateway's client's Secret Discovery Service certificate.
   * - _Required_: No
   * - _Type_: [VirtualGatewayListenerTlsSdsCertificate](./aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlssdscertificate.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewayclienttlscertificate-sds */
  SDS?: VirtualGatewayListenerTlsSdsCertificate
}

/**
 * An object that represents an AWS Certificate Manager certificate.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html */

export interface VirtualGatewayListenerTlsAcmCertificate {
  /**
   * - The Amazon Resource Name (ARN) for the certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see [Transport Layer Security (TLS)](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites).
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewaylistenertlsacmcertificate-certificatearn */
  CertificateArn: string | Intrinsic
}

/**
 * An object that represents a local file certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see [Transport Layer Security (TLS)](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html */

export interface VirtualGatewayListenerTlsFileCertificate {
  /**
   * - The certificate chain for the certificate.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewaylistenertlsfilecertificate-certificatechain */
  CertificateChain: string | Intrinsic
  /**
   * - The private key for a certificate stored on the file system of the mesh endpoint that the proxy is running on.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewaylistenertlsfilecertificate-privatekey */
  PrivateKey: string | Intrinsic
}

/**
 * An object that represents the virtual gateway's listener's Secret Discovery Service certificate.The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh[TLS documentation](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html) for more info.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html */

export interface VirtualGatewayListenerTlsSdsCertificate {
  /**
   * - A reference to an object that represents the name of the secret secret requested from the Secret Discovery Service provider representing Transport Layer Security (TLS) materials like a certificate or certificate chain.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewaylistenertlssdscertificate-secretname */
  SecretName: string | Intrinsic
}

/**
 * An object that represents the methods by which a subject alternative name on a peer Transport Layer Security (TLS) certificate can be matched.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html */

export interface SubjectAlternativeNameMatchers {
  /**
   * - The values sent must match the specified values exactly.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-subjectalternativenamematchers-exact */
  Exact?: (string | Intrinsic)[]
}

/**
 * An object that represents a Transport Layer Security (TLS) validation context trust for a local file.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html */

export interface VirtualGatewayTlsValidationContextFileTrust {
  /**
   * - The certificate trust chain for a certificate stored on the file system of the virtual node that the proxy is running on.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextfiletrust-certificatechain */
  CertificateChain: string | Intrinsic
}

/**
 * An object that represents a virtual gateway's listener's Transport Layer Security (TLS) Secret Discovery Service validation context trust. The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh [TLS documentation](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html) for more info.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html */

export interface VirtualGatewayTlsValidationContextSdsTrust {
  /**
   * - A reference to an object that represents the name of the secret for a virtual gateway's Transport Layer Security (TLS) Secret Discovery Service validation context trust.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextsdstrust-secretname */
  SecretName: string | Intrinsic
}

/**
 * An object that represents the key value pairs for the JSON.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html */

export interface JsonFormatRef {
  /**
   * - The specified key for the JSON.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-jsonformatref-key */
  Key: string | Intrinsic
  /**
   * - The specified value for the JSON.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-jsonformatref-value */
  Value: string | Intrinsic
}

/**
 * An object that represents a Transport Layer Security (TLS) validation context trust for an AWS Certificate Manager certificate.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html */

export interface VirtualGatewayTlsValidationContextAcmTrust {
  /**
   * - One or more ACM Amazon Resource Name (ARN)s.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `3`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextacmtrust-certificateauthorityarns */
  CertificateAuthorityArns: (string | Intrinsic)[]
}

/**
 * An object that represents the type of virtual gateway connection pool.
 * Only one protocol is used at a time and should be the same protocol as the one chosen under port mapping.
 * If not present the default value for `maxPendingRequests` is `2147483647`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html */

export interface VirtualGatewayConnectionPool {
  /**
   * - An object that represents a type of connection pool.
   * - _Required_: No
   * - _Type_: [VirtualGatewayGrpcConnectionPool](./aws-properties-appmesh-virtualgateway-virtualgatewaygrpcconnectionpool.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewayconnectionpool-grpc */
  GRPC?: VirtualGatewayGrpcConnectionPool
  /**
   * - An object that represents a type of connection pool.
   * - _Required_: No
   * - _Type_: [VirtualGatewayHttpConnectionPool](./aws-properties-appmesh-virtualgateway-virtualgatewayhttpconnectionpool.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewayconnectionpool-http */
  HTTP?: VirtualGatewayHttpConnectionPool
  /**
   * - An object that represents a type of connection pool.
   * - _Required_: No
   * - _Type_: [VirtualGatewayHttp2ConnectionPool](./aws-properties-appmesh-virtualgateway-virtualgatewayhttp2connectionpool.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewayconnectionpool-http2 */
  HTTP2?: VirtualGatewayHttp2ConnectionPool
}

/**
 * An object that represents a listener's Transport Layer Security (TLS) certificate.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html */

export interface VirtualGatewayListenerTlsCertificate {
  /**
   * - A reference to an object that represents an AWS Certificate Manager certificate.
   * - _Required_: No
   * - _Type_: [VirtualGatewayListenerTlsAcmCertificate](./aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsacmcertificate.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewaylistenertlscertificate-acm */
  ACM?: VirtualGatewayListenerTlsAcmCertificate
  /**
   * - A reference to an object that represents a local file certificate.
   * - _Required_: No
   * - _Type_: [VirtualGatewayListenerTlsFileCertificate](./aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsfilecertificate.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewaylistenertlscertificate-file */
  File?: VirtualGatewayListenerTlsFileCertificate
  /**
   * - A reference to an object that represents a virtual gateway's listener's Secret Discovery Service certificate.
   * - _Required_: No
   * - _Type_: [VirtualGatewayListenerTlsSdsCertificate](./aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlssdscertificate.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewaylistenertlscertificate-sds */
  SDS?: VirtualGatewayListenerTlsSdsCertificate
}

/**
 * An object that represents the subject alternative names secured by the certificate.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html */

export interface SubjectAlternativeNames {
  /**
   * - An object that represents the criteria for determining a SANs match.
   * - _Required_: Yes
   * - _Type_: [SubjectAlternativeNameMatchers](./aws-properties-appmesh-virtualgateway-subjectalternativenamematchers.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-subjectalternativenames-match */
  Match: SubjectAlternativeNameMatchers
}

/**
 * An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context trust.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html */

export interface VirtualGatewayListenerTlsValidationContextTrust {
  /**
   * - An object that represents a Transport Layer Security (TLS) validation context trust for a local file.
   * - _Required_: No
   * - _Type_: [VirtualGatewayTlsValidationContextFileTrust](./aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextfiletrust.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewaylistenertlsvalidationcontexttrust-file */
  File?: VirtualGatewayTlsValidationContextFileTrust
  /**
   * - A reference to an object that represents a virtual gateway's listener's Transport Layer Security (TLS) Secret Discovery Service validation context trust.
   * - _Required_: No
   * - _Type_: [VirtualGatewayTlsValidationContextSdsTrust](./aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextsdstrust.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewaylistenertlsvalidationcontexttrust-sds */
  SDS?: VirtualGatewayTlsValidationContextSdsTrust
}

/**
 * An object that represents the format for the logs.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html */

export interface LoggingFormat {
  /**
   * - The logging format for JSON.
   * - _Required_: No
   * - _Type_: Array of [JsonFormatRef](./aws-properties-appmesh-virtualgateway-jsonformatref.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-loggingformat-json */
  Json?: JsonFormatRef[]
  /**
   * - The logging format for text.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `1000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-loggingformat-text */
  Text?: string | Intrinsic
}

/**
 * An object that represents a Transport Layer Security (TLS) validation context trust.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html */

export interface VirtualGatewayTlsValidationContextTrust {
  /**
   * - A reference to an object that represents a Transport Layer Security (TLS) validation context trust for an AWS Certificate Manager certificate.
   * - _Required_: No
   * - _Type_: [VirtualGatewayTlsValidationContextAcmTrust](./aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextacmtrust.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewaytlsvalidationcontexttrust-acm */
  ACM?: VirtualGatewayTlsValidationContextAcmTrust
  /**
   * - An object that represents a Transport Layer Security (TLS) validation context trust for a local file.
   * - _Required_: No
   * - _Type_: [VirtualGatewayTlsValidationContextFileTrust](./aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextfiletrust.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewaytlsvalidationcontexttrust-file */
  File?: VirtualGatewayTlsValidationContextFileTrust
  /**
   * - A reference to an object that represents a virtual gateway's Transport Layer Security (TLS) Secret Discovery Service validation context trust.
   * - _Required_: No
   * - _Type_: [VirtualGatewayTlsValidationContextSdsTrust](./aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontextsdstrust.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewaytlsvalidationcontexttrust-sds */
  SDS?: VirtualGatewayTlsValidationContextSdsTrust
}

/**
 * An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html */

export interface VirtualGatewayListenerTlsValidationContext {
  /**
   * - A reference to an object that represents the SANs for a virtual gateway listener's Transport Layer Security (TLS) validation context.
   * - _Required_: No
   * - _Type_: [SubjectAlternativeNames](./aws-properties-appmesh-virtualgateway-subjectalternativenames.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewaylistenertlsvalidationcontext-subjectalternativenames */
  SubjectAlternativeNames?: SubjectAlternativeNames
  /**
   * - A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS) certificate.
   * - _Required_: Yes
   * - _Type_: [VirtualGatewayListenerTlsValidationContextTrust](./aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsvalidationcontexttrust.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewaylistenertlsvalidationcontext-trust */
  Trust: VirtualGatewayListenerTlsValidationContextTrust
}

/**
 * An object that represents an access log file.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html */

export interface VirtualGatewayFileAccessLog {
  /**
   * - The specified format for the virtual gateway access logs. It can be either `json_format` or `text_format`.
   * - _Required_: No
   * - _Type_: [LoggingFormat](./aws-properties-appmesh-virtualgateway-loggingformat.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewayfileaccesslog-format */
  Format?: LoggingFormat
  /**
   * - The file path to write access logs to. You can use `/dev/stdout` to send access logs to standard out and configure your Envoy container to use a log driver, such as `awslogs`, to export the access logs to a log storage service such as Amazon CloudWatch Logs. You can also specify a path in the Envoy container's file system to write the files to disk.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewayfileaccesslog-path */
  Path: string | Intrinsic
}

/**
 * An object that represents a Transport Layer Security (TLS) validation context.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html */

export interface VirtualGatewayTlsValidationContext {
  /**
   * - A reference to an object that represents the SANs for a virtual gateway's listener's Transport Layer Security (TLS) validation context.
   * - _Required_: No
   * - _Type_: [SubjectAlternativeNames](./aws-properties-appmesh-virtualgateway-subjectalternativenames.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewaytlsvalidationcontext-subjectalternativenames */
  SubjectAlternativeNames?: SubjectAlternativeNames
  /**
   * - A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS) certificate.
   * - _Required_: Yes
   * - _Type_: [VirtualGatewayTlsValidationContextTrust](./aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontexttrust.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewaytlsvalidationcontext-trust */
  Trust: VirtualGatewayTlsValidationContextTrust
}

/**
 * An object that represents the Transport Layer Security (TLS) properties for a listener.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html */

export interface VirtualGatewayListenerTls {
  /**
   * - An object that represents a Transport Layer Security (TLS) certificate.
   * - _Required_: Yes
   * - _Type_: [VirtualGatewayListenerTlsCertificate](./aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlscertificate.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewaylistenertls-certificate */
  Certificate: VirtualGatewayListenerTlsCertificate
  /**
   * - Specify one of the following modes.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `STRICT | PERMISSIVE | DISABLED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewaylistenertls-mode */
  Mode: string | Intrinsic
  /**
   * - A reference to an object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context.
   * - _Required_: No
   * - _Type_: [VirtualGatewayListenerTlsValidationContext](./aws-properties-appmesh-virtualgateway-virtualgatewaylistenertlsvalidationcontext.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewaylistenertls-validation */
  Validation?: VirtualGatewayListenerTlsValidationContext
}

/**
 * The access log configuration for a virtual gateway.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html */

export interface VirtualGatewayAccessLog {
  /**
   * - The file object to send virtual gateway access logs to.
   * - _Required_: No
   * - _Type_: [VirtualGatewayFileAccessLog](./aws-properties-appmesh-virtualgateway-virtualgatewayfileaccesslog.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewayaccesslog-file */
  File?: VirtualGatewayFileAccessLog
}

/**
 * An object that represents a Transport Layer Security (TLS) client policy.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html */

export interface VirtualGatewayClientPolicyTls {
  /**
   * - A reference to an object that represents a virtual gateway's client's Transport Layer Security (TLS) certificate.
   * - _Required_: No
   * - _Type_: [VirtualGatewayClientTlsCertificate](./aws-properties-appmesh-virtualgateway-virtualgatewayclienttlscertificate.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewayclientpolicytls-certificate */
  Certificate?: VirtualGatewayClientTlsCertificate
  /**
   * - Whether the policy is enforced. The default is `True`, if a value isn't specified.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewayclientpolicytls-enforce */
  Enforce?: boolean | Intrinsic
  /**
   * - One or more ports that the policy is enforced for.
   * - _Required_: No
   * - _Type_: Array of Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewayclientpolicytls-ports */
  Ports?: (number | Intrinsic)[]
  /**
   * - A reference to an object that represents a Transport Layer Security (TLS) validation context.
   * - _Required_: Yes
   * - _Type_: [VirtualGatewayTlsValidationContext](./aws-properties-appmesh-virtualgateway-virtualgatewaytlsvalidationcontext.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewayclientpolicytls-validation */
  Validation: VirtualGatewayTlsValidationContext
}

/**
 * An object that represents a listener for a virtual gateway.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html */

export interface VirtualGatewayListener {
  /**
   * - The connection pool information for the listener.
   * - _Required_: No
   * - _Type_: [VirtualGatewayConnectionPool](./aws-properties-appmesh-virtualgateway-virtualgatewayconnectionpool.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewaylistener-connectionpool */
  ConnectionPool?: VirtualGatewayConnectionPool
  /**
   * - The health check information for the listener.
   * - _Required_: No
   * - _Type_: [VirtualGatewayHealthCheckPolicy](./aws-properties-appmesh-virtualgateway-virtualgatewayhealthcheckpolicy.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewaylistener-healthcheck */
  HealthCheck?: VirtualGatewayHealthCheckPolicy
  /**
   * - The port mapping information for the listener.
   * - _Required_: Yes
   * - _Type_: [VirtualGatewayPortMapping](./aws-properties-appmesh-virtualgateway-virtualgatewayportmapping.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewaylistener-portmapping */
  PortMapping: VirtualGatewayPortMapping
  /**
   * - A reference to an object that represents the Transport Layer Security (TLS) properties for the listener.
   * - _Required_: No
   * - _Type_: [VirtualGatewayListenerTls](./aws-properties-appmesh-virtualgateway-virtualgatewaylistenertls.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewaylistener-tls */
  TLS?: VirtualGatewayListenerTls
}

/**
 * An object that represents logging information.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html */

export interface VirtualGatewayLogging {
  /**
   * - The access log configuration.
   * - _Required_: No
   * - _Type_: [VirtualGatewayAccessLog](./aws-properties-appmesh-virtualgateway-virtualgatewayaccesslog.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewaylogging-accesslog */
  AccessLog?: VirtualGatewayAccessLog
}

/**
 * An object that represents a client policy.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html */

export interface VirtualGatewayClientPolicy {
  /**
   * - A reference to an object that represents a Transport Layer Security (TLS) client policy.
   * - _Required_: No
   * - _Type_: [VirtualGatewayClientPolicyTls](./aws-properties-appmesh-virtualgateway-virtualgatewayclientpolicytls.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewayclientpolicy-tls */
  TLS?: VirtualGatewayClientPolicyTls
}

/**
 * An object that represents the default properties for a backend.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html */

export interface VirtualGatewayBackendDefaults {
  /**
   * - A reference to an object that represents a client policy.
   * - _Required_: No
   * - _Type_: [VirtualGatewayClientPolicy](./aws-properties-appmesh-virtualgateway-virtualgatewayclientpolicy.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewaybackenddefaults-clientpolicy */
  ClientPolicy?: VirtualGatewayClientPolicy
}

/**
 * An object that represents the specification of a service mesh resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html */

export interface VirtualGatewaySpec {
  /**
   * - A reference to an object that represents the defaults for backends.
   * - _Required_: No
   * - _Type_: [VirtualGatewayBackendDefaults](./aws-properties-appmesh-virtualgateway-virtualgatewaybackenddefaults.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewayspec-backenddefaults */
  BackendDefaults?: VirtualGatewayBackendDefaults
  /**
   * - The listeners that the mesh endpoint is expected to receive inbound traffic from. You can specify one listener.
   * - _Required_: Yes
   * - _Type_: Array of [VirtualGatewayListener](./aws-properties-appmesh-virtualgateway-virtualgatewaylistener.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewayspec-listeners */
  Listeners: VirtualGatewayListener[]
  /**
   * - An object that represents logging information.
   * - _Required_: No
   * - _Type_: [VirtualGatewayLogging](./aws-properties-appmesh-virtualgateway-virtualgatewaylogging.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewayspec-logging */
  Logging?: VirtualGatewayLogging
}

/**
 * Creates a virtual gateway.
 * A virtual gateway allows resources outside your mesh to communicate to resources that are inside your mesh. The virtual gateway represents an Envoy proxy running in an Amazon ECS task, in a Kubernetes service, or on an Amazon EC2 instance. Unlike a virtual node, which represents an Envoy running with an application, a virtual gateway represents Envoy deployed by itself.
 * For more information about virtual gateways, see [Virtual gateways](https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html */

export interface AppMeshVirtualGateway {
  Type: 'AWS::AppMesh::VirtualGateway'
  Properties: {
    /**
     * - The name of the service mesh that the virtual gateway resides in.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-meshname */
    MeshName: string | Intrinsic
    /**
     * - The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `12`
     * - _Maximum_: `12`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-meshowner */
    MeshOwner?: string | Intrinsic
    /**
     * - The specifications of the virtual gateway.
     * - _Required_: Yes
     * - _Type_: [VirtualGatewaySpec](./aws-properties-appmesh-virtualgateway-virtualgatewayspec.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-spec */
    Spec: VirtualGatewaySpec
    /**
     * - Optional metadata that you can apply to the virtual gateway to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-appmesh-virtualgateway-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-tags */
    Tags?: Tag[]
    /**
     * - The name of the virtual gateway.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualgateway.html#cfn-appmesh-virtualgateway-virtualgatewayname */
    VirtualGatewayName?: string | Intrinsic
  }
}
