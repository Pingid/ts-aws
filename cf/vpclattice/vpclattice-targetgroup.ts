import type { Intrinsic } from '../intrinsic/index.js' /**
 * Specifies a tag for a target group.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html */

export interface Tag {
  /**
   * - The tag key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html#cfn-vpclattice-targetgroup-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html#cfn-vpclattice-targetgroup-tag-value */
  Value: string | Intrinsic
}

/**
 * Describes a target.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html */

export interface Target {
  /**
   * - The ID of the target. If the target group type is `INSTANCE`, this is an instance ID. If the target group type is `IP`, this is an IP address. If the target group type is `LAMBDA`, this is the ARN of a Lambda function. If the target group type is `ALB`, this is the ARN of an Application Load Balancer.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html#cfn-vpclattice-targetgroup-target-id */
  Id: string | Intrinsic
  /**
   * - The port on which the target is listening. For HTTP, the default is 80. For HTTPS, the default is 443.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `65535`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html#cfn-vpclattice-targetgroup-target-port */
  Port?: number | Intrinsic
}

/**
 * Describes the codes to use when checking for a successful response from a target for health checks.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html */

export interface Matcher {
  /**
   * - The HTTP code to use when checking for a successful response from a target.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[0-9-,]+$`
   * - _Minimum_: `3`
   * - _Maximum_: `2000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html#cfn-vpclattice-targetgroup-matcher-httpcode */
  HttpCode: string | Intrinsic
}

/**
 * Describes the health check configuration of a target group. Health check configurations aren't used for target groups of type `LAMBDA` or `ALB`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html */

export interface HealthCheckConfig {
  /**
   * - Indicates whether health checking is enabled.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html#cfn-vpclattice-targetgroup-healthcheckconfig-enabled */
  Enabled?: boolean | Intrinsic
  /**
   * - The approximate amount of time, in seconds, between health checks of an individual target. The range is 5–300 seconds. The default is 30 seconds.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `5`
   * - _Maximum_: `300`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html#cfn-vpclattice-targetgroup-healthcheckconfig-healthcheckintervalseconds */
  HealthCheckIntervalSeconds?: number | Intrinsic
  /**
   * - The amount of time, in seconds, to wait before reporting a target as unhealthy. The range is 1–120 seconds. The default is 5 seconds.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `120`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html#cfn-vpclattice-targetgroup-healthcheckconfig-healthchecktimeoutseconds */
  HealthCheckTimeoutSeconds?: number | Intrinsic
  /**
   * - The number of consecutive successful health checks required before considering an unhealthy target healthy. The range is 2–10. The default is 5.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `2`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html#cfn-vpclattice-targetgroup-healthcheckconfig-healthythresholdcount */
  HealthyThresholdCount?: number | Intrinsic
  /**
   * - The codes to use when checking for a successful response from a target.
   * - _Required_: No
   * - _Type_: [Matcher](./aws-properties-vpclattice-targetgroup-matcher.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html#cfn-vpclattice-targetgroup-healthcheckconfig-matcher */
  Matcher?: Matcher
  /**
   * - The destination for health checks on the targets. If the protocol version is `HTTP/1.1` or `HTTP/2`, specify a valid URI (for example, `/path?query`). The default path is `/`. Health checks are not supported if the protocol version is `gRPC`, however, you can choose `HTTP/1.1` or `HTTP/2` and specify a valid URI.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `(^/[a-zA-Z0-9@:%_+.~#?&/=-]*$|(^$))`
   * - _Minimum_: `0`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html#cfn-vpclattice-targetgroup-healthcheckconfig-path */
  Path?: string | Intrinsic
  /**
   * - The port used when performing health checks on targets. The default setting is the port that a target receives traffic on.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `65535`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html#cfn-vpclattice-targetgroup-healthcheckconfig-port */
  Port?: number | Intrinsic
  /**
   * - The protocol used when performing health checks on targets. The possible protocols are `HTTP` and `HTTPS`. The default is `HTTP`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `HTTP | HTTPS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html#cfn-vpclattice-targetgroup-healthcheckconfig-protocol */
  Protocol?: string | Intrinsic
  /**
   * - The protocol version used when performing health checks on targets. The possible protocol versions are `HTTP1` and `HTTP2`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `HTTP1 | HTTP2`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html#cfn-vpclattice-targetgroup-healthcheckconfig-protocolversion */
  ProtocolVersion?: string | Intrinsic
  /**
   * - The number of consecutive failed health checks required before considering a target unhealthy. The range is 2–10. The default is 2.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `2`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html#cfn-vpclattice-targetgroup-healthcheckconfig-unhealthythresholdcount */
  UnhealthyThresholdCount?: number | Intrinsic
}

/**
 * Describes the configuration of a target group.
 * For more information, see [Target groups](https://docs.aws.amazon.com/vpc-lattice/latest/ug/target-groups.html) in the _Amazon VPC Lattice User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html */

export interface TargetGroupConfig {
  /**
   * - The health check configuration. Not supported if the target group type is `LAMBDA` or `ALB`.
   * - _Required_: No
   * - _Type_: [HealthCheckConfig](./aws-properties-vpclattice-targetgroup-healthcheckconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html#cfn-vpclattice-targetgroup-targetgroupconfig-healthcheck */
  HealthCheck?: HealthCheckConfig
  /**
   * - The type of IP address used for the target group. Supported only if the target group type is `IP`. The default is `IPV4`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `IPV4 | IPV6`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html#cfn-vpclattice-targetgroup-targetgroupconfig-ipaddresstype */
  IpAddressType?: string | Intrinsic
  /**
   * - The version of the event structure that your Lambda function receives. Supported only if the target group type is `LAMBDA`. The default is `V1`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `V1 | V2`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html#cfn-vpclattice-targetgroup-targetgroupconfig-lambdaeventstructureversion */
  LambdaEventStructureVersion?: string | Intrinsic
  /**
   * - The port on which the targets are listening. For HTTP, the default is 80. For HTTPS, the default is 443. Not supported if the target group type is `LAMBDA`.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `65535`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html#cfn-vpclattice-targetgroup-targetgroupconfig-port */
  Port?: number | Intrinsic
  /**
   * - The protocol to use for routing traffic to the targets. The default is the protocol of the target group. Not supported if the target group type is `LAMBDA`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `HTTP | HTTPS | TCP`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html#cfn-vpclattice-targetgroup-targetgroupconfig-protocol */
  Protocol?: string | Intrinsic
  /**
   * - The protocol version. The default is `HTTP1`. Not supported if the target group type is `LAMBDA`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `HTTP1 | HTTP2 | GRPC`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html#cfn-vpclattice-targetgroup-targetgroupconfig-protocolversion */
  ProtocolVersion?: string | Intrinsic
  /**
   * - The ID of the VPC. Not supported if the target group type is `LAMBDA`.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^vpc-(([0-9a-z]{8})|([0-9a-z]{17}))$`
   * - _Minimum_: `5`
   * - _Maximum_: `2048`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html#cfn-vpclattice-targetgroup-targetgroupconfig-vpcidentifier */
  VpcIdentifier?: string | Intrinsic
}

/**
 * Creates a target group. A target group is a collection of targets, or compute resources, that run your application or service. A target group can only be used by a single service.
 * For more information, see [Target groups](https://docs.aws.amazon.com/vpc-lattice/latest/ug/target-groups.html) in the _Amazon VPC Lattice User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html */

export interface VpcLatticeTargetGroup {
  Type: 'AWS::VpcLattice::TargetGroup'
  Properties: {
    /**
     * - The target group configuration.
     * - _Required_: No
     * - _Type_: [TargetGroupConfig](./aws-properties-vpclattice-targetgroup-targetgroupconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html#cfn-vpclattice-targetgroup-config */
    Config?: TargetGroupConfig
    /**
     * - The name of the target group. The name must be unique within the account. The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.
     * - If you don't specify a name, CloudFormation generates one. However, if you specify a name, and later want to replace the resource, you must specify a new name.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^(?!tg-)(?![-])(?!.*[-]$)(?!.*[-]{2})[a-z0-9-]+$`
     * - _Minimum_: `3`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html#cfn-vpclattice-targetgroup-name */
    Name?: string | Intrinsic
    /**
     * - The tags for the target group.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-vpclattice-targetgroup-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html#cfn-vpclattice-targetgroup-tags */
    Tags?: Tag[]
    /**
     * - Describes a target.
     * - _Required_: No
     * - _Type_: Array of [Target](./aws-properties-vpclattice-targetgroup-target.html)
     * - _Minimum_: `0`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html#cfn-vpclattice-targetgroup-targets */
    Targets?: Target[]
    /**
     * - The type of target group.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `IP | LAMBDA | INSTANCE | ALB`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-targetgroup.html#cfn-vpclattice-targetgroup-type */
    Type: string | Intrinsic
  }
}
