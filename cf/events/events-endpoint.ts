import type { Intrinsic } from '../intrinsic/index.js' /**
 * The event buses the endpoint is associated with.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html */

export interface EndpointEventBus {
  /**
   * - The ARN of the event bus the endpoint is associated with.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:aws[a-z-]*:events:[a-z]{2}-[a-z-]+-\d+:\d{12}:event-bus/[\w.-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html#cfn-events-endpoint-endpointeventbus-eventbusarn */
  EventBusArn: string | Intrinsic
}

/**
 * Endpoints can replicate all events to the secondary Region.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html */

export interface ReplicationConfig {
  /**
   * - The state of event replication.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `ENABLED | DISABLED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html#cfn-events-endpoint-replicationconfig-state */
  State: string | Intrinsic
}

/**
 * The primary Region of the endpoint.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html */

export interface Primary {
  /**
   * - The ARN of the health check used by the endpoint to determine whether failover is triggered.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:aws([a-z]|\-)*:route53:::healthcheck/[\-a-z0-9]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `1600`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html#cfn-events-endpoint-primary-healthcheck */
  HealthCheck: string | Intrinsic
}

/**
 * The secondary Region that processes events when failover is triggered or replication is enabled.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html */

export interface Secondary {
  /**
   * - Defines the secondary Region.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[\-a-z0-9]+$`
   * - _Minimum_: `9`
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html#cfn-events-endpoint-secondary-route */
  Route: string | Intrinsic
}

/**
 * The failover configuration for an endpoint. This includes what triggers failover and what happens when it's triggered.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html */

export interface FailoverConfig {
  /**
   * - The main Region of the endpoint.
   * - _Required_: Yes
   * - _Type_: [Primary](./aws-properties-events-endpoint-primary.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html#cfn-events-endpoint-failoverconfig-primary */
  Primary: Primary
  /**
   * - The Region that events are routed to when failover is triggered or event replication is enabled.
   * - _Required_: Yes
   * - _Type_: [Secondary](./aws-properties-events-endpoint-secondary.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html#cfn-events-endpoint-failoverconfig-secondary */
  Secondary: Secondary
}

/**
 * The routing configuration of the endpoint.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html */

export interface RoutingConfig {
  /**
   * - The failover configuration for an endpoint. This includes what triggers failover and what happens when it's triggered.
   * - _Required_: Yes
   * - _Type_: [FailoverConfig](./aws-properties-events-endpoint-failoverconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html#cfn-events-endpoint-routingconfig-failoverconfig */
  FailoverConfig: FailoverConfig
}

/**
 * A global endpoint used to improve your application's availability by making it regional-fault tolerant. For more information about global endpoints, see [Making applications Regional-fault tolerant with global endpoints and event replication](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-global-endpoints.html) in the __Amazon EventBridge User Guide__ .
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html */

export interface EventsEndpoint {
  Type: 'AWS::Events::Endpoint'
  Properties: {
    /**
     * - A description for the endpoint.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html#cfn-events-endpoint-description */
    Description?: string | Intrinsic
    /**
     * - The event buses being used by the endpoint.
     * - _Exactly_: `2`
     * - _Required_: Yes
     * - _Type_: Array of [EndpointEventBus](./aws-properties-events-endpoint-endpointeventbus.html)
     * - _Minimum_: `2`
     * - _Maximum_: `2`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html#cfn-events-endpoint-eventbuses */
    EventBuses: EndpointEventBus[]
    /**
     * - The name of the endpoint.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\.\-_A-Za-z0-9]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html#cfn-events-endpoint-name */
    Name?: string | Intrinsic
    /**
     * - Whether event replication was enabled or disabled for this endpoint. The default state is `ENABLED` which means you must supply a `RoleArn`. If you don't have a `RoleArn` or you don't want event replication enabled, set the state to `DISABLED`.
     * - _Required_: No
     * - _Type_: [ReplicationConfig](./aws-properties-events-endpoint-replicationconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html#cfn-events-endpoint-replicationconfig */
    ReplicationConfig?: ReplicationConfig
    /**
     * - The ARN of the role used by event replication for the endpoint.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:aws[a-z-]*:iam::\d{12}:role\/[\w+=,.@/-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html#cfn-events-endpoint-rolearn */
    RoleArn?: string | Intrinsic
    /**
     * - The routing configuration of the endpoint.
     * - _Required_: Yes
     * - _Type_: [RoutingConfig](./aws-properties-events-endpoint-routingconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-endpoint.html#cfn-events-endpoint-routingconfig */
    RoutingConfig: RoutingConfig
  }
}
