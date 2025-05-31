import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Specifies where and how access logs are stored for your Classic Load Balancer.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html */

export interface AccessLoggingPolicy {
    /**
     * - The interval for publishing the access logs. You can specify an interval of either 5 minutes or 60 minutes.
     * - Default: 60 minutes
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-accessloggingpolicy-emitinterval */
    "EmitInterval"?: number | Intrinsic;
    /**
     * - Specifies whether access logs are enabled for the load balancer.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-accessloggingpolicy-enabled */
    "Enabled": boolean | Intrinsic;
    /**
     * - The name of the Amazon S3 bucket where the access logs are stored.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-accessloggingpolicy-s3bucketname */
    "S3BucketName": string | Intrinsic;
    /**
     * - The logical hierarchy you created for your Amazon S3 bucket, for example `my-bucket-prefix/prod`. If the prefix is not provided, the log is placed at the root level of the bucket.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-accessloggingpolicy-s3bucketprefix */
    "S3BucketPrefix"?: string | Intrinsic;
}

/**
 * Specifies the connection draining settings for your Classic Load Balancer.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html */

export interface ConnectionDrainingPolicy {
    /**
     * - Specifies whether connection draining is enabled for the load balancer.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-connectiondrainingpolicy-enabled */
    "Enabled": boolean | Intrinsic;
    /**
     * - The maximum time, in seconds, to keep the existing connections open before deregistering the instances.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-connectiondrainingpolicy-timeout */
    "Timeout"?: number | Intrinsic;
}

/**
 * Specifies the idle timeout value for your Classic Load Balancer.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html */

export interface ConnectionSettings {
    /**
     * - The time, in seconds, that the connection is allowed to be idle (no data has been sent over the connection) before it is closed by the load balancer.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `3600`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-connectionsettings-idletimeout */
    "IdleTimeout": number | Intrinsic;
}

/**
 * Specifies a policy for application-controlled session stickiness for your Classic Load Balancer.
 * To associate a policy with a listener, use the [PolicyNames](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb-listener.html#cfn-ec2-elb-listener-policynames) property for the listener.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html */

export interface AppCookieStickinessPolicy {
    /**
     * - The name of the application cookie used for stickiness.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-appcookiestickinesspolicy-cookiename */
    "CookieName": string | Intrinsic;
    /**
     * - The mnemonic name for the policy being created. The name must be unique within a set of policies for this load balancer.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-appcookiestickinesspolicy-policyname */
    "PolicyName": string | Intrinsic;
}

/**
 * Specifies health check settings for your Classic Load Balancer.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html */

export interface HealthCheck {
    /**
     * - The number of consecutive health checks successes required before moving the instance to the `Healthy` state.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `2`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-healthcheck-healthythreshold */
    "HealthyThreshold": string | Intrinsic;
    /**
     * - The approximate interval, in seconds, between health checks of an individual instance.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `5`
     * - _Maximum_: `300`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-healthcheck-interval */
    "Interval": string | Intrinsic;
    /**
     * - The instance being checked. The protocol is either TCP, HTTP, HTTPS, or SSL. The range of valid ports is one (1) through 65535.
     * - TCP is the default, specified as a TCP: port pair, for example "TCP:5000". In this case, a health check simply attempts to open a TCP connection to the instance on the specified port. Failure to connect within the configured timeout is considered unhealthy.
     * - SSL is also specified as SSL: port pair, for example, SSL:5000.
     * - For HTTP/HTTPS, you must include a ping path in the string. HTTP is specified as a HTTP:port;/;PathToPing; grouping, for example "HTTP:80/weather/us/wa/seattle". In this case, a HTTP GET request is issued to the instance on the given port and path. Any answer other than "200 OK" within the timeout period is considered unhealthy.
     * - The total length of the HTTP ping target must be 1024 16-bit Unicode characters or less.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-healthcheck-target */
    "Target": string | Intrinsic;
    /**
     * - The amount of time, in seconds, during which no response means a failed health check.
     * - This value must be less than the `Interval` value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `2`
     * - _Maximum_: `60`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-healthcheck-timeout */
    "Timeout": string | Intrinsic;
    /**
     * - The number of consecutive health check failures required before moving the instance to the `Unhealthy` state.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `2`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-healthcheck-unhealthythreshold */
    "UnhealthyThreshold": string | Intrinsic;
}

/**
 * Specifies a policy for duration-based session stickiness for your Classic Load Balancer.
 * To associate a policy with a listener, use the [PolicyNames](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb-listener.html#cfn-ec2-elb-listener-policynames) property for the listener.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html */

export interface LBCookieStickinessPolicy {
    /**
     * - The time period, in seconds, after which the cookie should be considered stale. If this parameter is not specified, the stickiness session lasts for the duration of the browser session.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-lbcookiestickinesspolicy-cookieexpirationperiod */
    "CookieExpirationPeriod"?: string | Intrinsic;
    /**
     * - The name of the policy. This name must be unique within the set of policies for this load balancer.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-lbcookiestickinesspolicy-policyname */
    "PolicyName"?: string | Intrinsic;
}

/**
 * Information about a tag.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html */

export interface Tag {
    /**
     * - The key of the tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value of the tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Specifies policies for your Classic Load Balancer.
 * To associate policies with a listener, use the [PolicyNames](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb-listener.html#cfn-ec2-elb-listener-policynames) property for the listener.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html */

export interface Policies {
    /**
     * - The policy attributes.
     * - _Required_: Yes
     * - _Type_: Array of Object
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-policies-attributes */
    "Attributes": Record<string, any | Intrinsic>[];
    /**
     * - The instance ports for the policy. Required only for some policy types.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-policies-instanceports */
    "InstancePorts"?: (string | Intrinsic)[];
    /**
     * - The load balancer ports for the policy. Required only for some policy types.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-policies-loadbalancerports */
    "LoadBalancerPorts"?: (string | Intrinsic)[];
    /**
     * - The name of the policy.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-policies-policyname */
    "PolicyName": string | Intrinsic;
    /**
     * - The name of the policy type.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-policies-policytype */
    "PolicyType": string | Intrinsic;
}

/**
 * Specifies a listener for your Classic Load Balancer.
 * Modifying any property replaces the listener.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html */

export interface Listeners {
    /**
     * - The port on which the instance is listening.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `65535`
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-listeners-instanceport */
    "InstancePort": string | Intrinsic;
    /**
     * - The protocol to use for routing traffic to instances: HTTP, HTTPS, TCP, or SSL.
     * - If the front-end protocol is TCP or SSL, the back-end protocol must be TCP or SSL. If the front-end protocol is HTTP or HTTPS, the back-end protocol must be HTTP or HTTPS.
     * - If there is another listener with the same `InstancePort` whose `InstanceProtocol` is secure, (HTTPS or SSL), the listener's `InstanceProtocol` must also be secure.
     * - If there is another listener with the same `InstancePort` whose `InstanceProtocol` is HTTP or TCP, the listener's `InstanceProtocol` must be HTTP or TCP.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-listeners-instanceprotocol */
    "InstanceProtocol"?: string | Intrinsic;
    /**
     * - The port on which the load balancer is listening. On EC2-VPC, you can specify any port from the range 1-65535. On EC2-Classic, you can specify any port from the following list: 25, 80, 443, 465, 587, 1024-65535.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-listeners-loadbalancerport */
    "LoadBalancerPort": string | Intrinsic;
    /**
     * - The names of the policies to associate with the listener.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-listeners-policynames */
    "PolicyNames"?: (string | Intrinsic)[];
    /**
     * - The load balancer transport protocol to use for routing: HTTP, HTTPS, TCP, or SSL.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-listeners-protocol */
    "Protocol": string | Intrinsic;
    /**
     * - The Amazon Resource Name (ARN) of the server certificate.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-listeners-sslcertificateid */
    "SSLCertificateId"?: string | Intrinsic;
}

/**
 * Specifies a Classic Load Balancer.
 * If this resource has a public IP address and is also in a VPC that is defined in the same template, you must use the [DependsOn attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) to declare a dependency on the VPC-gateway attachment.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html */

export interface ElasticLoadBalancingLoadBalancer extends ResourceAttributes {
    "Type": "AWS::ElasticLoadBalancing::LoadBalancer";
    "Properties": {
        /**
         * - Information about where and how access logs are stored for the load balancer.
         * - _Required_: No
         * - _Type_: [AccessLoggingPolicy](./aws-properties-elasticloadbalancing-loadbalancer-accessloggingpolicy.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-accessloggingpolicy */
        "AccessLoggingPolicy"?: AccessLoggingPolicy;
        /**
         * - Information about a policy for application-controlled session stickiness.
         * - _Required_: No
         * - _Type_: [Array](./aws-properties-elasticloadbalancing-loadbalancer-appcookiestickinesspolicy.html) of [AppCookieStickinessPolicy](./aws-properties-elasticloadbalancing-loadbalancer-appcookiestickinesspolicy.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-appcookiestickinesspolicy */
        "AppCookieStickinessPolicy"?: AppCookieStickinessPolicy[];
        /**
         * - The Availability Zones for a load balancer in a default VPC. For a load balancer in a nondefault VPC, specify `Subnets` instead.
         * - Update requires replacement if you did not previously specify an Availability Zone or if you are removing all Availability Zones. Otherwise, update requires no interruption.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-availabilityzones */
        "AvailabilityZones"?: (string | Intrinsic)[];
        /**
         * - If enabled, the load balancer allows existing requests to complete before the load balancer shifts traffic away from a deregistered or unhealthy instance.
         * - For more information, see [Configure connection draining](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-conn-drain.html) in the _User Guide for Classic Load Balancers_.
         * - _Required_: No
         * - _Type_: [ConnectionDrainingPolicy](./aws-properties-elasticloadbalancing-loadbalancer-connectiondrainingpolicy.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-connectiondrainingpolicy */
        "ConnectionDrainingPolicy"?: ConnectionDrainingPolicy;
        /**
         * - If enabled, the load balancer allows the connections to remain idle (no data is sent over the connection) for the specified duration.
         * - By default, Elastic Load Balancing maintains a 60-second idle connection timeout for both front-end and back-end connections of your load balancer. For more information, see [Configure idle connection timeout](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-idle-timeout.html) in the _User Guide for Classic Load Balancers_.
         * - _Required_: No
         * - _Type_: [ConnectionSettings](./aws-properties-elasticloadbalancing-loadbalancer-connectionsettings.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-connectionsettings */
        "ConnectionSettings"?: ConnectionSettings;
        /**
         * - If enabled, the load balancer routes the request traffic evenly across all instances regardless of the Availability Zones.
         * - For more information, see [Configure cross-zone load balancing](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-crosszone-lb.html) in the _User Guide for Classic Load Balancers_.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-crosszone */
        "CrossZone"?: boolean | Intrinsic;
        /**
         * - The health check settings to use when evaluating the health of your EC2 instances.
         * - Update requires replacement if you did not previously specify health check settings or if you are removing the health check settings. Otherwise, update requires no interruption.
         * - _Required_: No
         * - _Type_: [HealthCheck](./aws-properties-elasticloadbalancing-loadbalancer-healthcheck.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-healthcheck */
        "HealthCheck"?: HealthCheck;
        /**
         * - The IDs of the instances for the load balancer.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-instances */
        "Instances"?: (string | Intrinsic)[];
        /**
         * - Information about a policy for duration-based session stickiness.
         * - _Required_: No
         * - _Type_: [Array](./aws-properties-elasticloadbalancing-loadbalancer-lbcookiestickinesspolicy.html) of [LBCookieStickinessPolicy](./aws-properties-elasticloadbalancing-loadbalancer-lbcookiestickinesspolicy.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-lbcookiestickinesspolicy */
        "LBCookieStickinessPolicy"?: LBCookieStickinessPolicy[];
        /**
         * - The listeners for the load balancer. You can specify at most one listener per port.
         * - If you update the properties for a listener, AWS CloudFormation deletes the existing listener and creates a new one with the specified properties. While the new listener is being created, clients cannot connect to the load balancer.
         * - _Required_: Yes
         * - _Type_: [Array](./aws-properties-elasticloadbalancing-loadbalancer-listeners.html) of [Listeners](./aws-properties-elasticloadbalancing-loadbalancer-listeners.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-listeners */
        "Listeners": Listeners[];
        /**
         * - The name of the load balancer. This name must be unique within your set of load balancers for the region.
         * - If you don't specify a name, AWS CloudFormation generates a unique physical ID for the load balancer. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html). If you specify a name, you cannot perform updates that require replacement of this resource, but you can perform other updates. To replace the resource, specify a new name.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-loadbalancername */
        "LoadBalancerName"?: string | Intrinsic;
        /**
         * - The policies defined for your Classic Load Balancer. Specify only back-end server policies.
         * - _Required_: No
         * - _Type_: [Array](./aws-properties-elasticloadbalancing-loadbalancer-policies.html) of [Policies](./aws-properties-elasticloadbalancing-loadbalancer-policies.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-policies */
        "Policies"?: Policies[];
        /**
         * - The type of load balancer. Valid only for load balancers in a VPC.
         * - If `Scheme` is `internet-facing`, the load balancer has a public DNS name that resolves to a public IP address.
         * - If `Scheme` is `internal`, the load balancer has a public DNS name that resolves to a private IP address.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-scheme */
        "Scheme"?: string | Intrinsic;
        /**
         * - The security groups for the load balancer. Valid only for load balancers in a VPC.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-securitygroups */
        "SecurityGroups"?: (string | Intrinsic)[];
        /**
         * - The IDs of the subnets for the load balancer. You can specify at most one subnet per Availability Zone.
         * - Update requires replacement if you did not previously specify a subnet or if you are removing all subnets. Otherwise, update requires no interruption. To update to a different subnet in the current Availability Zone, you must first update to a subnet in a different Availability Zone, then update to the new subnet in the original Availability Zone.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-subnets */
        "Subnets"?: (string | Intrinsic)[];
        /**
         * - The tags associated with a load balancer.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-elasticloadbalancing-loadbalancer-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-tags */
        "Tags"?: Tag[];
    };
}