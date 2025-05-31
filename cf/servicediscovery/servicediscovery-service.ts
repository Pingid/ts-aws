import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A complex type that contains information about an optional custom health check. A custom health check, which requires that you use a third-party health checker to evaluate the health of your resources, is useful in the following circumstances:
 * *   You can't use a health check that's defined by `HealthCheckConfig` because the resource isn't available over the internet. For example, you can use a custom health check when the instance is in an Amazon VPC. (To check the health of resources in a VPC, the health checker must also be in the VPC.)
 *     
 * *   You want to use a third-party health checker regardless of where your resources are located.
 * ###### Important
 * 
 * If you specify a health check configuration, you can specify either `HealthCheckCustomConfig` or `HealthCheckConfig` but not both.
 * To change the status of a custom health check, submit an `UpdateInstanceCustomHealthStatus` request. AWS Cloud Map doesn't monitor the status of the resource, it just keeps a record of the status specified in the most recent `UpdateInstanceCustomHealthStatus` request.
 * Here's how custom health checks work:
 * 1.  You create a service.
 *     
 * 2.  You register an instance.
 *     
 * 3.  You configure a third-party health checker to monitor the resource that's associated with the new instance.
 *     
 *     ###### Note
 *     
 *     AWS Cloud Map doesn't check the health of the resource directly.
 *     
 * 4.  The third-party health-checker determines that the resource is unhealthy and notifies your application.
 *     
 * 5.  Your application submits an `UpdateInstanceCustomHealthStatus` request.
 *     
 * 6.  AWS Cloud Map waits for 30 seconds.
 *     
 * 7.  If another `UpdateInstanceCustomHealthStatus` request doesn't arrive during that time to change the status back to healthy, AWS Cloud Map stops routing traffic to the resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-service.html */

export interface HealthCheckCustomConfig {
    /**
     * - The number of 30-second intervals that you want AWS Cloud Map to wait after receiving an `UpdateInstanceCustomHealthStatus` request before it changes the health status of a service instance.
     * - Sending a second or subsequent `UpdateInstanceCustomHealthStatus` request with the same value before 30 seconds has passed doesn't accelerate the change. AWS Cloud Map still waits `30` seconds after the first request to make the change.
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `1`
     * - _Maximum_: `10`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-service.html#cfn-servicediscovery-service-healthcheckcustomconfig-failurethreshold */
    "FailureThreshold"?: number | Intrinsic;
}

/**
 * _Public DNS and HTTP namespaces only._ A complex type that contains settings for an optional health check. If you specify settings for a health check, AWS Cloud Map associates the health check with the records that you specify in `DnsConfig`.
 * ###### Important
 * 
 * If you specify a health check configuration, you can specify either `HealthCheckCustomConfig` or `HealthCheckConfig` but not both.
 * Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for health checks, see [Amazon Route 53 Pricing](https://aws.amazon.com/route53/pricing/).
 * Note the following about configuring health checks.
 * A and AAAA records
 * 
 * If `DnsConfig` includes configurations for both `A` and `AAAA` records, AWS Cloud Map creates a health check that uses the IPv4 address to check the health of the resource. If the endpoint tthat's specified by the IPv4 address is unhealthy, Route 53 considers both the `A` and `AAAA` records to be unhealthy.
 * 
 * CNAME records
 * 
 * You can't specify settings for `HealthCheckConfig` when the `DNSConfig` includes `CNAME` for the value of `Type`. If you do, the `CreateService` request will fail with an `InvalidInput` error.
 * 
 * Request interval
 * 
 * A Route 53 health checker in each health-checking AWS Region sends a health check request to an endpoint every 30 seconds. On average, your endpoint receives a health check request about every two seconds. However, health checkers don't coordinate with one another. Therefore, you might sometimes see several requests in one second that's followed by a few seconds with no health checks at all.
 * 
 * Health checking regions
 * 
 * Health checkers perform checks from all Route 53 health-checking Regions. For a list of the current Regions, see [Regions](https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html#Route53-Type-HealthCheckConfig-Regions).
 * 
 * Alias records
 * 
 * When you register an instance, if you include the `AWS_ALIAS_DNS_NAME` attribute, AWS Cloud Map creates a Route 53 alias record. Note the following:
 * 
 * *   Route 53 automatically sets `EvaluateTargetHealth` to true for alias records. When `EvaluateTargetHealth` is true, the alias record inherits the health of the referenced AWS resource. such as an ELB load balancer. For more information, see [EvaluateTargetHealth](https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html#Route53-Type-AliasTarget-EvaluateTargetHealth).
 *     
 * *   If you include `HealthCheckConfig` and then use the service to register an instance that creates an alias record, Route 53 doesn't create the health check.
 *     
 * 
 * Charges for health checks
 * 
 * Health checks are basic Route 53 health checks that monitor an AWS endpoint. For information about pricing for health checks, see [Amazon Route 53 Pricing](https://aws.amazon.com/route53/pricing/).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-service.html */

export interface HealthCheckConfig {
    /**
     * - The number of consecutive health checks that an endpoint must pass or fail for Route 53 to change the current status of the endpoint from unhealthy to healthy or the other way around. For more information, see [How Route 53 Determines Whether an Endpoint Is Healthy](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-determining-health-of-endpoints.html) in the _Route 53 Developer Guide_.
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `1`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-service.html#cfn-servicediscovery-service-healthcheckconfig-failurethreshold */
    "FailureThreshold"?: number | Intrinsic;
    /**
     * - The path that you want Route 53 to request when performing health checks. The path can be any value that your endpoint returns an HTTP status code of a 2xx or 3xx format for when the endpoint is healthy. An example file is `/docs/route53-health-check.html`. Route 53 automatically adds the DNS name for the service. If you don't specify a value for `ResourcePath`, the default value is `/`.
     * - If you specify `TCP` for `Type`, you must _not_ specify a value for `ResourcePath`.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-service.html#cfn-servicediscovery-service-healthcheckconfig-resourcepath */
    "ResourcePath"?: string | Intrinsic;
    /**
     * - The type of health check that you want to create, which indicates how Route 53 determines whether an endpoint is healthy.
     * - You can create the following types of health checks:
     * - For more information, see [How Route 53 Determines Whether an Endpoint Is Healthy](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-determining-health-of-endpoints.html) in the _Route 53 Developer Guide_.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `HTTP | HTTPS | TCP`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-service.html#cfn-servicediscovery-service-healthcheckconfig-type */
    "Type": string | Intrinsic;
}

/**
 * A custom key-value pair that's associated with a resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-service.html */

export interface Tag {
    /**
     * - The key identifier, or name, of the tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-service.html#cfn-servicediscovery-service-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The string value that's associated with the key of the tag. You can set the value of a tag to an empty string, but you can't set the value of a tag to null.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-service.html#cfn-servicediscovery-service-tag-value */
    "Value": string | Intrinsic;
}

/**
 * A complex type that contains information about the Route 53 DNS records that you want AWS Cloud Map to create when you register an instance.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-service.html */

export interface DnsRecord {
    /**
     * - The amount of time, in seconds, that you want DNS resolvers to cache the settings for this record.
     * - _Required_: Yes
     * - _Type_: Number
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-service.html#cfn-servicediscovery-service-dnsrecord-ttl */
    "TTL": number | Intrinsic;
    /**
     * - The type of the resource, which indicates the type of value that Route 53 returns in response to DNS queries. You can specify values for `Type` in the following combinations:
     * - If you want AWS Cloud Map to create a Route 53 alias record when you register an instance, specify `A` or `AAAA` for `Type`.
     * - You specify other settings, such as the IP address for `A` and `AAAA` records, when you register an instance. For more information, see [RegisterInstance](https://docs.aws.amazon.com/cloud-map/latest/api/API_RegisterInstance.html).
     * - The following values are supported:
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `SRV | A | AAAA | CNAME`
     * - _Update requires_: Updates are not supported.
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-service.html#cfn-servicediscovery-service-dnsrecord-type */
    "Type": string | Intrinsic;
}

/**
 * A complex type that contains information about the Amazon Route 53 DNS records that you want AWS Cloud Map to create when you register an instance.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-service.html */

export interface DnsConfig {
    /**
     * - An array that contains one `DnsRecord` object for each Route 53 DNS record that you want AWS Cloud Map to create when you register an instance.
     * - _Required_: Yes
     * - _Type_: Array of [DnsRecord](./aws-properties-servicediscovery-service-dnsrecord.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-service.html#cfn-servicediscovery-service-dnsconfig-dnsrecords */
    "DnsRecords": DnsRecord[];
    /**
     * - The ID of the namespace to use for DNS configuration.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-service.html#cfn-servicediscovery-service-dnsconfig-namespaceid */
    "NamespaceId"?: string | Intrinsic;
    /**
     * - The routing policy that you want to apply to all Route 53 DNS records that AWS Cloud Map creates when you register an instance and specify this service.
     * - You can specify the following values:
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `MULTIVALUE | WEIGHTED`
     * - _Update requires_: Updates are not supported.
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-service.html#cfn-servicediscovery-service-dnsconfig-routingpolicy */
    "RoutingPolicy"?: string | Intrinsic;
}

/**
 * A complex type that contains information about a service, which defines the configuration of the following entities:
 * *   For public and private DNS namespaces, one of the following combinations of DNS records in Amazon Route 53:
 *     
 *     *   A
 *         
 *     *   AAAA
 *         
 *     *   A and AAAA
 *         
 *     *   SRV
 *         
 *     *   CNAME
 *         
 *     
 * *   Optionally, a health check
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-service.html */

export interface ServiceDiscoveryService extends ResourceAttributes {
    "Type": "AWS::ServiceDiscovery::Service";
    "Properties": {
        /**
         * - The description of the service.
         * - _Required_: No
         * - _Type_: String
         * - _Maximum_: `1024`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-service.html#cfn-servicediscovery-service-description */
        "Description"?: string | Intrinsic;
        /**
         * - A complex type that contains information about the Route 53 DNS records that you want AWS Cloud Map to create when you register an instance.
         * - _Required_: No
         * - _Type_: [DnsConfig](./aws-properties-servicediscovery-service-dnsconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-service.html#cfn-servicediscovery-service-dnsconfig */
        "DnsConfig"?: DnsConfig;
        /**
         * - _Public DNS and HTTP namespaces only._ A complex type that contains settings for an optional health check. If you specify settings for a health check, AWS Cloud Map associates the health check with the records that you specify in `DnsConfig`.
         * - For information about the charges for health checks, see [Amazon Route 53 Pricing](https://aws.amazon.com/route53/pricing/).
         * - _Required_: No
         * - _Type_: [HealthCheckConfig](./aws-properties-servicediscovery-service-healthcheckconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-service.html#cfn-servicediscovery-service-healthcheckconfig */
        "HealthCheckConfig"?: HealthCheckConfig;
        /**
         * - A complex type that contains information about an optional custom health check.
         * - _Required_: No
         * - _Type_: [HealthCheckCustomConfig](./aws-properties-servicediscovery-service-healthcheckcustomconfig.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-service.html#cfn-servicediscovery-service-healthcheckcustomconfig */
        "HealthCheckCustomConfig"?: HealthCheckCustomConfig;
        /**
         * - The name of the service.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `((?=^.{1,127}$)^([a-zA-Z0-9_][a-zA-Z0-9-_]{0,61}[a-zA-Z0-9_]|[a-zA-Z0-9])(\.([a-zA-Z0-9_][a-zA-Z0-9-_]{0,61}[a-zA-Z0-9_]|[a-zA-Z0-9]))*$)|(^\.$)`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-service.html#cfn-servicediscovery-service-name */
        "Name"?: string | Intrinsic;
        /**
         * - The ID of the namespace that was used to create the service.
         * - _Required_: No
         * - _Type_: String
         * - _Maximum_: `64`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-service.html#cfn-servicediscovery-service-namespaceid */
        "NamespaceId"?: string | Intrinsic;
        /**
         * - A string map that contains the following information for the service:
         * - You can specify a total of 30 attributes.
         * - _Required_: No
         * - _Type_: Json
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-service.html#cfn-servicediscovery-service-serviceattributes */
        "ServiceAttributes"?: any | Intrinsic;
        /**
         * - The tags for the service. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-servicediscovery-service-tag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `200`
         * - _Update requires_: Updates are not supported.
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-service.html#cfn-servicediscovery-service-tags */
        "Tags"?: Tag[];
        /**
         * - If present, specifies that the service instances are only discoverable using the `DiscoverInstances` API operation. No DNS records is registered for the service instances. The only valid value is `HTTP`.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `HTTP`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-service.html#cfn-servicediscovery-service-type */
        "Type"?: string | Intrinsic;
    };
}