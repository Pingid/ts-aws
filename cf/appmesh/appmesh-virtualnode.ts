import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Optional metadata that you can apply to the virtual node to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface Tag {
    /**
     * - One part of a key-value pair that make up a tag. A `key` is a general label that acts like a category for more specific tag values.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The optional part of a key-value pair that make up a tag. A `value` acts as a descriptor within a tag category (key).
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-tag-value */
    "Value": string | Intrinsic;
}

/**
 * An object that represents the health check policy for a virtual node's listener.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface HealthCheck {
    /**
     * - The number of consecutive successful health checks that must occur before declaring listener healthy.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `2`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-healthcheck-healthythreshold */
    "HealthyThreshold": number | Intrinsic;
    /**
     * - The time period in milliseconds between each health check execution.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-healthcheck-intervalmillis */
    "IntervalMillis": number | Intrinsic;
    /**
     * - The destination path for the health check request. This value is only used if the specified protocol is HTTP or HTTP/2. For any other protocol, this value is ignored.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-healthcheck-path */
    "Path"?: string | Intrinsic;
    /**
     * - The destination port for the health check request. This port must match the port defined in the [PortMapping](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-appmesh-virtualnode-listener.html#cfn-appmesh-virtualnode-listener-portmapping) for the listener.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `65535`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-healthcheck-port */
    "Port"?: number | Intrinsic;
    /**
     * - The protocol for the health check request. If you specify `grpc`, then your service must conform to the [GRPC Health Checking Protocol](https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `http | tcp | http2 | grpc`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-healthcheck-protocol */
    "Protocol": string | Intrinsic;
    /**
     * - The amount of time to wait when receiving a response from the health check, in milliseconds.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-healthcheck-timeoutmillis */
    "TimeoutMillis": number | Intrinsic;
    /**
     * - The number of consecutive failed health checks that must occur before declaring a virtual node unhealthy.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `2`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-healthcheck-unhealthythreshold */
    "UnhealthyThreshold": number | Intrinsic;
}

/**
 * An object representing a virtual node or virtual router listener port mapping.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface PortMapping {
    /**
     * - The port used for the port mapping.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `65535`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-portmapping-port */
    "Port": number | Intrinsic;
    /**
     * - The protocol used for the port mapping. Specify `http`, `http2`, `grpc`, or `tcp`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `http | tcp | http2 | grpc`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-portmapping-protocol */
    "Protocol": string | Intrinsic;
}

/**
 * An object that represents a virtual service backend for a virtual node.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface VirtualServiceBackend {
    /**
     * - A reference to an object that represents the client policy for a backend.
     * - _Required_: No
     * - _Type_: [ClientPolicy](./aws-properties-appmesh-virtualnode-clientpolicy.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-virtualservicebackend-clientpolicy */
    "ClientPolicy"?: ClientPolicy;
    /**
     * - The name of the virtual service that is acting as a virtual node backend.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-virtualservicebackend-virtualservicename */
    "VirtualServiceName": string | Intrinsic;
}

/**
 * An object that represents the backends that a virtual node is expected to send outbound traffic to.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface Backend {
    /**
     * - Specifies a virtual service to use as a backend.
     * - _Required_: No
     * - _Type_: [VirtualServiceBackend](./aws-properties-appmesh-virtualnode-virtualservicebackend.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-backend-virtualservice */
    "VirtualService"?: VirtualServiceBackend;
}

/**
 * An object that represents the DNS service discovery information for your virtual node.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface DnsServiceDiscovery {
    /**
     * - Specifies the DNS service discovery hostname for the virtual node.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-dnsservicediscovery-hostname */
    "Hostname": string | Intrinsic;
    /**
     * - The preferred IP version that this virtual node uses. Setting the IP preference on the virtual node only overrides the IP preference set for the mesh on this specific node.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `IPv6_PREFERRED | IPv4_PREFERRED | IPv4_ONLY | IPv6_ONLY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-dnsservicediscovery-ippreference */
    "IpPreference"?: string | Intrinsic;
    /**
     * - Specifies the DNS response type for the virtual node.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `LOADBALANCER | ENDPOINTS`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-dnsservicediscovery-responsetype */
    "ResponseType"?: string | Intrinsic;
}

/**
 * An object that represents a type of connection pool.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface VirtualNodeGrpcConnectionPool {
    /**
     * - Maximum number of inflight requests Envoy can concurrently support across hosts in upstream cluster.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-virtualnodegrpcconnectionpool-maxrequests */
    "MaxRequests": number | Intrinsic;
}

/**
 * An object that represents a duration of time.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface Duration {
    /**
     * - A unit of time.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `s | ms`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-duration-unit */
    "Unit": string | Intrinsic;
    /**
     * - A number of time units.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-duration-value */
    "Value": number | Intrinsic;
}

/**
 * An object that represents the outlier detection for a virtual node's listener.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface OutlierDetection {
    /**
     * - The base amount of time for which a host is ejected.
     * - _Required_: Yes
     * - _Type_: [Duration](./aws-properties-appmesh-virtualnode-duration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-outlierdetection-baseejectionduration */
    "BaseEjectionDuration": Duration;
    /**
     * - The time interval between ejection sweep analysis.
     * - _Required_: Yes
     * - _Type_: [Duration](./aws-properties-appmesh-virtualnode-duration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-outlierdetection-interval */
    "Interval": Duration;
    /**
     * - Maximum percentage of hosts in load balancing pool for upstream service that can be ejected. Will eject at least one host regardless of the value.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-outlierdetection-maxejectionpercent */
    "MaxEjectionPercent": number | Intrinsic;
    /**
     * - Number of consecutive `5xx` errors required for ejection.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-outlierdetection-maxservererrors */
    "MaxServerErrors": number | Intrinsic;
}

/**
 * An object that represents types of timeouts.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface GrpcTimeout {
    /**
     * - An object that represents an idle timeout. An idle timeout bounds the amount of time that a connection may be idle. The default value is none.
     * - _Required_: No
     * - _Type_: [Duration](./aws-properties-appmesh-virtualnode-duration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-grpctimeout-idle */
    "Idle"?: Duration;
    /**
     * - An object that represents a per request timeout. The default value is 15 seconds. If you set a higher timeout, then make sure that the higher value is set for each App Mesh resource in a conversation. For example, if a virtual node backend uses a virtual router provider to route to another virtual node, then the timeout should be greater than 15 seconds for the source and destination virtual node and the route.
     * - _Required_: No
     * - _Type_: [Duration](./aws-properties-appmesh-virtualnode-duration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-grpctimeout-perrequest */
    "PerRequest"?: Duration;
}

/**
 * An object that represents types of timeouts.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface HttpTimeout {
    /**
     * - An object that represents an idle timeout. An idle timeout bounds the amount of time that a connection may be idle. The default value is none.
     * - _Required_: No
     * - _Type_: [Duration](./aws-properties-appmesh-virtualnode-duration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-httptimeout-idle */
    "Idle"?: Duration;
    /**
     * - An object that represents a per request timeout. The default value is 15 seconds. If you set a higher timeout, then make sure that the higher value is set for each App Mesh resource in a conversation. For example, if a virtual node backend uses a virtual router provider to route to another virtual node, then the timeout should be greater than 15 seconds for the source and destination virtual node and the route.
     * - _Required_: No
     * - _Type_: [Duration](./aws-properties-appmesh-virtualnode-duration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-httptimeout-perrequest */
    "PerRequest"?: Duration;
}

/**
 * An object that represents types of timeouts.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface TcpTimeout {
    /**
     * - An object that represents an idle timeout. An idle timeout bounds the amount of time that a connection may be idle. The default value is none.
     * - _Required_: No
     * - _Type_: [Duration](./aws-properties-appmesh-virtualnode-duration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-tcptimeout-idle */
    "Idle"?: Duration;
}

/**
 * An object that represents timeouts for different protocols.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface ListenerTimeout {
    /**
     * - An object that represents types of timeouts.
     * - _Required_: No
     * - _Type_: [GrpcTimeout](./aws-properties-appmesh-virtualnode-grpctimeout.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-listenertimeout-grpc */
    "GRPC"?: GrpcTimeout;
    /**
     * - An object that represents types of timeouts.
     * - _Required_: No
     * - _Type_: [HttpTimeout](./aws-properties-appmesh-virtualnode-httptimeout.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-listenertimeout-http */
    "HTTP"?: HttpTimeout;
    /**
     * - An object that represents types of timeouts.
     * - _Required_: No
     * - _Type_: [HttpTimeout](./aws-properties-appmesh-virtualnode-httptimeout.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-listenertimeout-http2 */
    "HTTP2"?: HttpTimeout;
    /**
     * - An object that represents types of timeouts.
     * - _Required_: No
     * - _Type_: [TcpTimeout](./aws-properties-appmesh-virtualnode-tcptimeout.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-listenertimeout-tcp */
    "TCP"?: TcpTimeout;
}

/**
 * An object that represents a type of connection pool.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface VirtualNodeHttp2ConnectionPool {
    /**
     * - Maximum number of inflight requests Envoy can concurrently support across hosts in upstream cluster.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-virtualnodehttp2connectionpool-maxrequests */
    "MaxRequests": number | Intrinsic;
}

/**
 * An object that represents a type of connection pool.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface VirtualNodeHttpConnectionPool {
    /**
     * - Maximum number of outbound TCP connections Envoy can establish concurrently with all hosts in upstream cluster.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-virtualnodehttpconnectionpool-maxconnections */
    "MaxConnections": number | Intrinsic;
    /**
     * - Number of overflowing requests after `max_connections` Envoy will queue to upstream cluster.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-virtualnodehttpconnectionpool-maxpendingrequests */
    "MaxPendingRequests"?: number | Intrinsic;
}

/**
 * An object that represents a type of connection pool.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface VirtualNodeTcpConnectionPool {
    /**
     * - Maximum number of outbound TCP connections Envoy can establish concurrently with all hosts in upstream cluster.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-virtualnodetcpconnectionpool-maxconnections */
    "MaxConnections": number | Intrinsic;
}

/**
 * An object that represents the type of virtual node connection pool.
 * Only one protocol is used at a time and should be the same protocol as the one chosen under port mapping.
 * If not present the default value for `maxPendingRequests` is `2147483647`.
 * 
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface VirtualNodeConnectionPool {
    /**
     * - An object that represents a type of connection pool.
     * - _Required_: No
     * - _Type_: [VirtualNodeGrpcConnectionPool](./aws-properties-appmesh-virtualnode-virtualnodegrpcconnectionpool.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-virtualnodeconnectionpool-grpc */
    "GRPC"?: VirtualNodeGrpcConnectionPool;
    /**
     * - An object that represents a type of connection pool.
     * - _Required_: No
     * - _Type_: [VirtualNodeHttpConnectionPool](./aws-properties-appmesh-virtualnode-virtualnodehttpconnectionpool.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-virtualnodeconnectionpool-http */
    "HTTP"?: VirtualNodeHttpConnectionPool;
    /**
     * - An object that represents a type of connection pool.
     * - _Required_: No
     * - _Type_: [VirtualNodeHttp2ConnectionPool](./aws-properties-appmesh-virtualnode-virtualnodehttp2connectionpool.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-virtualnodeconnectionpool-http2 */
    "HTTP2"?: VirtualNodeHttp2ConnectionPool;
    /**
     * - An object that represents a type of connection pool.
     * - _Required_: No
     * - _Type_: [VirtualNodeTcpConnectionPool](./aws-properties-appmesh-virtualnode-virtualnodetcpconnectionpool.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-virtualnodeconnectionpool-tcp */
    "TCP"?: VirtualNodeTcpConnectionPool;
}

/**
 * An object that represents the AWS Cloud Map attribute information for your virtual node.
 * ###### Note
 * 
 * AWS Cloud Map is not available in the eu-south-1 Region.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface AwsCloudMapInstanceAttribute {
    /**
     * - The name of an AWS Cloud Map service instance attribute key. Any AWS Cloud Map service instance that contains the specified key and value is returned.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9!-~]+`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-awscloudmapinstanceattribute-key */
    "Key": string | Intrinsic;
    /**
     * - The value of an AWS Cloud Map service instance attribute key. Any AWS Cloud Map service instance that contains the specified key and value is returned.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `([a-zA-Z0-9!-~][ a-zA-Z0-9!-~]*){0,1}[a-zA-Z0-9!-~]{0,1}`
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-awscloudmapinstanceattribute-value */
    "Value": string | Intrinsic;
}

/**
 * An object that represents the AWS Cloud Map service discovery information for your virtual node.
 * ###### Note
 * 
 * AWS Cloud Map is not available in the eu-south-1 Region.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface AwsCloudMapServiceDiscovery {
    /**
     * - A string map that contains attributes with values that you can use to filter instances by any custom attribute that you specified when you registered the instance. Only instances that match all of the specified key/value pairs will be returned.
     * - _Required_: No
     * - _Type_: Array of [AwsCloudMapInstanceAttribute](./aws-properties-appmesh-virtualnode-awscloudmapinstanceattribute.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-awscloudmapservicediscovery-attributes */
    "Attributes"?: AwsCloudMapInstanceAttribute[];
    /**
     * - The preferred IP version that this virtual node uses. Setting the IP preference on the virtual node only overrides the IP preference set for the mesh on this specific node.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `IPv6_PREFERRED | IPv4_PREFERRED | IPv4_ONLY | IPv6_ONLY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-awscloudmapservicediscovery-ippreference */
    "IpPreference"?: string | Intrinsic;
    /**
     * - The HTTP name of the AWS Cloud Map namespace to use.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-awscloudmapservicediscovery-namespacename */
    "NamespaceName": string | Intrinsic;
    /**
     * - The name of the AWS Cloud Map service to use.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-awscloudmapservicediscovery-servicename */
    "ServiceName": string | Intrinsic;
}

/**
 * An object that represents the service discovery information for a virtual node.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface ServiceDiscovery {
    /**
     * - Specifies any AWS Cloud Map information for the virtual node.
     * - _Required_: No
     * - _Type_: [AwsCloudMapServiceDiscovery](./aws-properties-appmesh-virtualnode-awscloudmapservicediscovery.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-servicediscovery-awscloudmap */
    "AWSCloudMap"?: AwsCloudMapServiceDiscovery;
    /**
     * - Specifies the DNS information for the virtual node.
     * - _Required_: No
     * - _Type_: [DnsServiceDiscovery](./aws-properties-appmesh-virtualnode-dnsservicediscovery.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-servicediscovery-dns */
    "DNS"?: DnsServiceDiscovery;
}

/**
 * An object that represents an AWS Certificate Manager certificate.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface ListenerTlsAcmCertificate {
    /**
     * - The Amazon Resource Name (ARN) for the certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see [Transport Layer Security (TLS)](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites).
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-listenertlsacmcertificate-certificatearn */
    "CertificateArn": string | Intrinsic;
}

/**
 * An object that represents a local file certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see [Transport Layer Security (TLS)](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface ListenerTlsFileCertificate {
    /**
     * - The certificate chain for the certificate.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-listenertlsfilecertificate-certificatechain */
    "CertificateChain": string | Intrinsic;
    /**
     * - The private key for a certificate stored on the file system of the virtual node that the proxy is running on.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-listenertlsfilecertificate-privatekey */
    "PrivateKey": string | Intrinsic;
}

/**
 * An object that represents the listener's Secret Discovery Service certificate. The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh [TLS documentation](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html) for more info.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface ListenerTlsSdsCertificate {
    /**
     * - A reference to an object that represents the name of the secret requested from the Secret Discovery Service provider representing Transport Layer Security (TLS) materials like a certificate or certificate chain.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-listenertlssdscertificate-secretname */
    "SecretName": string | Intrinsic;
}

/**
 * An object that represents a listener's Transport Layer Security (TLS) certificate.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface ListenerTlsCertificate {
    /**
     * - A reference to an object that represents an AWS Certificate Manager certificate.
     * - _Required_: No
     * - _Type_: [ListenerTlsAcmCertificate](./aws-properties-appmesh-virtualnode-listenertlsacmcertificate.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-listenertlscertificate-acm */
    "ACM"?: ListenerTlsAcmCertificate;
    /**
     * - A reference to an object that represents a local file certificate.
     * - _Required_: No
     * - _Type_: [ListenerTlsFileCertificate](./aws-properties-appmesh-virtualnode-listenertlsfilecertificate.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-listenertlscertificate-file */
    "File"?: ListenerTlsFileCertificate;
    /**
     * - A reference to an object that represents a listener's Secret Discovery Service certificate.
     * - _Required_: No
     * - _Type_: [ListenerTlsSdsCertificate](./aws-properties-appmesh-virtualnode-listenertlssdscertificate.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-listenertlscertificate-sds */
    "SDS"?: ListenerTlsSdsCertificate;
}

/**
 * An object that represents the client's certificate.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface ClientTlsCertificate {
    /**
     * - An object that represents a local file certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see [Transport Layer Security (TLS)](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html).
     * - _Required_: No
     * - _Type_: [ListenerTlsFileCertificate](./aws-properties-appmesh-virtualnode-listenertlsfilecertificate.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-clienttlscertificate-file */
    "File"?: ListenerTlsFileCertificate;
    /**
     * - A reference to an object that represents a client's TLS Secret Discovery Service certificate.
     * - _Required_: No
     * - _Type_: [ListenerTlsSdsCertificate](./aws-properties-appmesh-virtualnode-listenertlssdscertificate.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-clienttlscertificate-sds */
    "SDS"?: ListenerTlsSdsCertificate;
}

/**
 * An object that represents the methods by which a subject alternative name on a peer Transport Layer Security (TLS) certificate can be matched.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface SubjectAlternativeNameMatchers {
    /**
     * - The values sent must match the specified values exactly.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-subjectalternativenamematchers-exact */
    "Exact"?: (string | Intrinsic)[];
}

/**
 * An object that represents the subject alternative names secured by the certificate.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface SubjectAlternativeNames {
    /**
     * - An object that represents the criteria for determining a SANs match.
     * - _Required_: Yes
     * - _Type_: [SubjectAlternativeNameMatchers](./aws-properties-appmesh-virtualnode-subjectalternativenamematchers.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-subjectalternativenames-match */
    "Match": SubjectAlternativeNameMatchers;
}

/**
 * An object that represents a Transport Layer Security (TLS) validation context trust for a local file.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface TlsValidationContextFileTrust {
    /**
     * - The certificate trust chain for a certificate stored on the file system of the virtual node that the proxy is running on.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-tlsvalidationcontextfiletrust-certificatechain */
    "CertificateChain": string | Intrinsic;
}

/**
 * An object that represents the key value pairs for the JSON.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface JsonFormatRef {
    /**
     * - The specified key for the JSON.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-jsonformatref-key */
    "Key": string | Intrinsic;
    /**
     * - The specified value for the JSON.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-jsonformatref-value */
    "Value": string | Intrinsic;
}

/**
 * An object that represents the format for the logs.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface LoggingFormat {
    /**
     * - The logging format for JSON.
     * - _Required_: No
     * - _Type_: Array of [JsonFormatRef](./aws-properties-appmesh-virtualnode-jsonformatref.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-loggingformat-json */
    "Json"?: JsonFormatRef[];
    /**
     * - The logging format for text.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-loggingformat-text */
    "Text"?: string | Intrinsic;
}

/**
 * An object that represents an access log file.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface FileAccessLog {
    /**
     * - The specified format for the logs. The format is either `json_format` or `text_format`.
     * - _Required_: No
     * - _Type_: [LoggingFormat](./aws-properties-appmesh-virtualnode-loggingformat.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-fileaccesslog-format */
    "Format"?: LoggingFormat;
    /**
     * - The file path to write access logs to. You can use `/dev/stdout` to send access logs to standard out and configure your Envoy container to use a log driver, such as `awslogs`, to export the access logs to a log storage service such as Amazon CloudWatch Logs. You can also specify a path in the Envoy container's file system to write the files to disk.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-fileaccesslog-path */
    "Path": string | Intrinsic;
}

/**
 * An object that represents the access logging information for a virtual node.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface AccessLog {
    /**
     * - The file object to send virtual node access logs to.
     * - _Required_: No
     * - _Type_: [FileAccessLog](./aws-properties-appmesh-virtualnode-fileaccesslog.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-accesslog-file */
    "File"?: FileAccessLog;
}

/**
 * An object that represents the logging information for a virtual node.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface Logging {
    /**
     * - The access log configuration for a virtual node.
     * - _Required_: No
     * - _Type_: [AccessLog](./aws-properties-appmesh-virtualnode-accesslog.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-logging-accesslog */
    "AccessLog"?: AccessLog;
}

/**
 * An object that represents a Transport Layer Security (TLS) Secret Discovery Service validation context trust. The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh [TLS documentation](https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html) for more info.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface TlsValidationContextSdsTrust {
    /**
     * - A reference to an object that represents the name of the secret for a Transport Layer Security (TLS) Secret Discovery Service validation context trust.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-tlsvalidationcontextsdstrust-secretname */
    "SecretName": string | Intrinsic;
}

/**
 * An object that represents a listener's Transport Layer Security (TLS) validation context trust.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface ListenerTlsValidationContextTrust {
    /**
     * - An object that represents a Transport Layer Security (TLS) validation context trust for a local file.
     * - _Required_: No
     * - _Type_: [TlsValidationContextFileTrust](./aws-properties-appmesh-virtualnode-tlsvalidationcontextfiletrust.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-listenertlsvalidationcontexttrust-file */
    "File"?: TlsValidationContextFileTrust;
    /**
     * - A reference to an object that represents a listener's Transport Layer Security (TLS) Secret Discovery Service validation context trust.
     * - _Required_: No
     * - _Type_: [TlsValidationContextSdsTrust](./aws-properties-appmesh-virtualnode-tlsvalidationcontextsdstrust.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-listenertlsvalidationcontexttrust-sds */
    "SDS"?: TlsValidationContextSdsTrust;
}

/**
 * An object that represents a listener's Transport Layer Security (TLS) validation context.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface ListenerTlsValidationContext {
    /**
     * - A reference to an object that represents the SANs for a listener's Transport Layer Security (TLS) validation context.
     * - _Required_: No
     * - _Type_: [SubjectAlternativeNames](./aws-properties-appmesh-virtualnode-subjectalternativenames.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-listenertlsvalidationcontext-subjectalternativenames */
    "SubjectAlternativeNames"?: SubjectAlternativeNames;
    /**
     * - A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS) certificate.
     * - _Required_: Yes
     * - _Type_: [ListenerTlsValidationContextTrust](./aws-properties-appmesh-virtualnode-listenertlsvalidationcontexttrust.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-listenertlsvalidationcontext-trust */
    "Trust": ListenerTlsValidationContextTrust;
}

/**
 * An object that represents the Transport Layer Security (TLS) properties for a listener.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface ListenerTls {
    /**
     * - A reference to an object that represents a listener's Transport Layer Security (TLS) certificate.
     * - _Required_: Yes
     * - _Type_: [ListenerTlsCertificate](./aws-properties-appmesh-virtualnode-listenertlscertificate.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-listenertls-certificate */
    "Certificate": ListenerTlsCertificate;
    /**
     * - Specify one of the following modes.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `STRICT | PERMISSIVE | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-listenertls-mode */
    "Mode": string | Intrinsic;
    /**
     * - A reference to an object that represents a listener's Transport Layer Security (TLS) validation context.
     * - _Required_: No
     * - _Type_: [ListenerTlsValidationContext](./aws-properties-appmesh-virtualnode-listenertlsvalidationcontext.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-listenertls-validation */
    "Validation"?: ListenerTlsValidationContext;
}

/**
 * An object that represents a listener for a virtual node.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface Listener {
    /**
     * - The connection pool information for the listener.
     * - _Required_: No
     * - _Type_: [VirtualNodeConnectionPool](./aws-properties-appmesh-virtualnode-virtualnodeconnectionpool.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-listener-connectionpool */
    "ConnectionPool"?: VirtualNodeConnectionPool;
    /**
     * - The health check information for the listener.
     * - _Required_: No
     * - _Type_: [HealthCheck](./aws-properties-appmesh-virtualnode-healthcheck.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-listener-healthcheck */
    "HealthCheck"?: HealthCheck;
    /**
     * - The outlier detection information for the listener.
     * - _Required_: No
     * - _Type_: [OutlierDetection](./aws-properties-appmesh-virtualnode-outlierdetection.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-listener-outlierdetection */
    "OutlierDetection"?: OutlierDetection;
    /**
     * - The port mapping information for the listener.
     * - _Required_: Yes
     * - _Type_: [PortMapping](./aws-properties-appmesh-virtualnode-portmapping.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-listener-portmapping */
    "PortMapping": PortMapping;
    /**
     * - An object that represents timeouts for different protocols.
     * - _Required_: No
     * - _Type_: [ListenerTimeout](./aws-properties-appmesh-virtualnode-listenertimeout.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-listener-timeout */
    "Timeout"?: ListenerTimeout;
    /**
     * - A reference to an object that represents the Transport Layer Security (TLS) properties for a listener.
     * - _Required_: No
     * - _Type_: [ListenerTls](./aws-properties-appmesh-virtualnode-listenertls.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-listener-tls */
    "TLS"?: ListenerTls;
}

/**
 * An object that represents a Transport Layer Security (TLS) validation context trust for an AWS Certificate Manager certificate.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface TlsValidationContextAcmTrust {
    /**
     * - One or more ACM Amazon Resource Name (ARN)s.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `3`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-tlsvalidationcontextacmtrust-certificateauthorityarns */
    "CertificateAuthorityArns": (string | Intrinsic)[];
}

/**
 * An object that represents a Transport Layer Security (TLS) validation context trust.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface TlsValidationContextTrust {
    /**
     * - A reference to an object that represents a Transport Layer Security (TLS) validation context trust for an AWS Certificate Manager certificate.
     * - _Required_: No
     * - _Type_: [TlsValidationContextAcmTrust](./aws-properties-appmesh-virtualnode-tlsvalidationcontextacmtrust.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-tlsvalidationcontexttrust-acm */
    "ACM"?: TlsValidationContextAcmTrust;
    /**
     * - An object that represents a Transport Layer Security (TLS) validation context trust for a local file.
     * - _Required_: No
     * - _Type_: [TlsValidationContextFileTrust](./aws-properties-appmesh-virtualnode-tlsvalidationcontextfiletrust.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-tlsvalidationcontexttrust-file */
    "File"?: TlsValidationContextFileTrust;
    /**
     * - A reference to an object that represents a Transport Layer Security (TLS) Secret Discovery Service validation context trust.
     * - _Required_: No
     * - _Type_: [TlsValidationContextSdsTrust](./aws-properties-appmesh-virtualnode-tlsvalidationcontextsdstrust.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-tlsvalidationcontexttrust-sds */
    "SDS"?: TlsValidationContextSdsTrust;
}

/**
 * An object that represents how the proxy will validate its peer during Transport Layer Security (TLS) negotiation.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface TlsValidationContext {
    /**
     * - A reference to an object that represents the SANs for a Transport Layer Security (TLS) validation context. If you don't specify SANs on the _terminating_ mesh endpoint, the Envoy proxy for that node doesn't verify the SAN on a peer client certificate. If you don't specify SANs on the _originating_ mesh endpoint, the SAN on the certificate provided by the terminating endpoint must match the mesh endpoint service discovery configuration. Since SPIRE vended certificates have a SPIFFE ID as a name, you must set the SAN since the name doesn't match the service discovery name.
     * - _Required_: No
     * - _Type_: [SubjectAlternativeNames](./aws-properties-appmesh-virtualnode-subjectalternativenames.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-tlsvalidationcontext-subjectalternativenames */
    "SubjectAlternativeNames"?: SubjectAlternativeNames;
    /**
     * - A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS) certificate.
     * - _Required_: Yes
     * - _Type_: [TlsValidationContextTrust](./aws-properties-appmesh-virtualnode-tlsvalidationcontexttrust.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-tlsvalidationcontext-trust */
    "Trust": TlsValidationContextTrust;
}

/**
 * A reference to an object that represents a Transport Layer Security (TLS) client policy.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface ClientPolicyTls {
    /**
     * - A reference to an object that represents a client's TLS certificate.
     * - _Required_: No
     * - _Type_: [ClientTlsCertificate](./aws-properties-appmesh-virtualnode-clienttlscertificate.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-clientpolicytls-certificate */
    "Certificate"?: ClientTlsCertificate;
    /**
     * - Whether the policy is enforced. The default is `True`, if a value isn't specified.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-clientpolicytls-enforce */
    "Enforce"?: boolean | Intrinsic;
    /**
     * - One or more ports that the policy is enforced for.
     * - _Required_: No
     * - _Type_: Array of Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-clientpolicytls-ports */
    "Ports"?: (number | Intrinsic)[];
    /**
     * - A reference to an object that represents a TLS validation context.
     * - _Required_: Yes
     * - _Type_: [TlsValidationContext](./aws-properties-appmesh-virtualnode-tlsvalidationcontext.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-clientpolicytls-validation */
    "Validation": TlsValidationContext;
}

/**
 * An object that represents a client policy.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface ClientPolicy {
    /**
     * - A reference to an object that represents a Transport Layer Security (TLS) client policy.
     * - _Required_: No
     * - _Type_: [ClientPolicyTls](./aws-properties-appmesh-virtualnode-clientpolicytls.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-clientpolicy-tls */
    "TLS"?: ClientPolicyTls;
}

/**
 * An object that represents the default properties for a backend.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface BackendDefaults {
    /**
     * - A reference to an object that represents a client policy.
     * - _Required_: No
     * - _Type_: [ClientPolicy](./aws-properties-appmesh-virtualnode-clientpolicy.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-backenddefaults-clientpolicy */
    "ClientPolicy"?: ClientPolicy;
}

/**
 * An object that represents the specification of a virtual node.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface VirtualNodeSpec {
    /**
     * - A reference to an object that represents the defaults for backends.
     * - _Required_: No
     * - _Type_: [BackendDefaults](./aws-properties-appmesh-virtualnode-backenddefaults.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-virtualnodespec-backenddefaults */
    "BackendDefaults"?: BackendDefaults;
    /**
     * - The backends that the virtual node is expected to send outbound traffic to.
     * - _Required_: No
     * - _Type_: Array of [Backend](./aws-properties-appmesh-virtualnode-backend.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-virtualnodespec-backends */
    "Backends"?: Backend[];
    /**
     * - The listener that the virtual node is expected to receive inbound traffic from. You can specify one listener.
     * - _Required_: No
     * - _Type_: Array of [Listener](./aws-properties-appmesh-virtualnode-listener.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-virtualnodespec-listeners */
    "Listeners"?: Listener[];
    /**
     * - The inbound and outbound access logging information for the virtual node.
     * - _Required_: No
     * - _Type_: [Logging](./aws-properties-appmesh-virtualnode-logging.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-virtualnodespec-logging */
    "Logging"?: Logging;
    /**
     * - The service discovery information for the virtual node. If your virtual node does not expect ingress traffic, you can omit this parameter. If you specify a `listener`, then you must specify service discovery information.
     * - _Required_: No
     * - _Type_: [ServiceDiscovery](./aws-properties-appmesh-virtualnode-servicediscovery.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-virtualnodespec-servicediscovery */
    "ServiceDiscovery"?: ServiceDiscovery;
}

/**
 * Creates a virtual node within a service mesh.
 * A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS service or a Kubernetes deployment. When you create a virtual node, you can specify the service discovery information for your task group, and whether the proxy running in a task group will communicate with other proxies using Transport Layer Security (TLS).
 * You define a `listener` for any inbound traffic that your virtual node expects. Any virtual service that your virtual node expects to communicate to is specified as a `backend`.
 * The response metadata for your new virtual node contains the `arn` that is associated with the virtual node. Set this value to the full ARN; for example, `arn:aws:appmesh:us-west-2:123456789012:myMesh/default/virtualNode/myApp`) as the `APPMESH_RESOURCE_ARN` environment variable for your task group's Envoy proxy container in your task definition or pod spec. This is then mapped to the `node.id` and `node.cluster` Envoy parameters.
 * ###### Note
 * 
 * By default, App Mesh uses the name of the resource you specified in `APPMESH_RESOURCE_ARN` when Envoy is referring to itself in metrics and traces. You can override this behavior by setting the `APPMESH_RESOURCE_CLUSTER` environment variable with your own name.
 * For more information about virtual nodes, see [Virtual nodes](https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_nodes.html). You must be using `1.15.0` or later of the Envoy image when setting these variables. For more information aboutApp Mesh Envoy variables, see [Envoy image](https://docs.aws.amazon.com/app-mesh/latest/userguide/envoy.html) in the AWS App Mesh User Guide.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html */

export interface AppMeshVirtualNode extends ResourceAttributes {
    "Type": "AWS::AppMesh::VirtualNode";
    "Properties": {
        /**
         * - The name of the service mesh to create the virtual node in.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-meshname */
        "MeshName": string | Intrinsic;
        /**
         * - The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `12`
         * - _Maximum_: `12`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-meshowner */
        "MeshOwner"?: string | Intrinsic;
        /**
         * - The virtual node specification to apply.
         * - _Required_: Yes
         * - _Type_: [VirtualNodeSpec](./aws-properties-appmesh-virtualnode-virtualnodespec.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-spec */
        "Spec": VirtualNodeSpec;
        /**
         * - Optional metadata that you can apply to the virtual node to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-appmesh-virtualnode-tag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-tags */
        "Tags"?: Tag[];
        /**
         * - The name to use for the virtual node.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-virtualnode.html#cfn-appmesh-virtualnode-virtualnodename */
        "VirtualNodeName"?: string | Intrinsic;
    };
}