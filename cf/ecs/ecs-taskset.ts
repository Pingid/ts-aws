import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The load balancer configuration to use with a service or task set.
 * When you add, update, or remove a load balancer configuration, Amazon ECS starts a new deployment with the updated Elastic Load Balancing configuration. This causes tasks to register to and deregister from load balancers.
 * We recommend that you verify this on a test environment before you update the Elastic Load Balancing configuration.
 * A service-linked role is required for services that use multiple target groups. For more information, see [Using service-linked roles](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html) in the _Amazon Elastic Container Service Developer Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html */

export interface LoadBalancer {
  /**
   * - The name of the container (as it appears in a container definition) to associate with the load balancer.
   * - You need to specify the container name when configuring the target group for an Amazon ECS load balancer.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-loadbalancer-containername */
  ContainerName?: string | Intrinsic
  /**
   * - The port on the container to associate with the load balancer. This port must correspond to a `containerPort` in the task definition the tasks in the service are using. For tasks that use the EC2 launch type, the container instance they're launched on must allow ingress traffic on the `hostPort` of the port mapping.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-loadbalancer-containerport */
  ContainerPort?: number | Intrinsic
  /**
   * - The full Amazon Resource Name (ARN) of the Elastic Load Balancing target group or groups associated with a service or task set.
   * - A target group ARN is only specified when using an Application Load Balancer or Network Load Balancer.
   * - For services using the `ECS` deployment controller, you can specify one or multiple target groups. For more information, see [Registering multiple target groups with a service](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/register-multiple-targetgroups.html) in the _Amazon Elastic Container Service Developer Guide_.
   * - For services using the `CODE_DEPLOY` deployment controller, you're required to define two target groups for the load balancer. For more information, see [Blue/green deployment with CodeDeploy](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-bluegreen.html) in the _Amazon Elastic Container Service Developer Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-loadbalancer-targetgrouparn */
  TargetGroupArn?: string | Intrinsic
}

/**
 * A floating-point percentage of the desired number of tasks to place and keep running in the task set.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html */

export interface Scale {
  /**
   * - The unit of measure for the scale value.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `PERCENT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-scale-unit */
  Unit?: string | Intrinsic
  /**
   * - The value, specified as a percent total of a service's `desiredCount`, to scale the task set. Accepted values are numbers between 0 and 100.
   * - _Required_: No
   * - _Type_: Number
   * - _Minimum_: `0`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-scale-value */
  Value?: number | Intrinsic
}

/**
 * The details for the service registry.
 * Each service may be associated with one service registry. Multiple service registries for each service are not supported.
 * When you add, update, or remove the service registries configuration, Amazon ECS starts a new deployment. New tasks are registered and deregistered to the updated service registry configuration.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html */

export interface ServiceRegistry {
  /**
   * - The container name value to be used for your service discovery service. It's already specified in the task definition. If the task definition that your service task specifies uses the `bridge` or `host` network mode, you must specify a `containerName` and `containerPort` combination from the task definition. If the task definition that your service task specifies uses the `awsvpc` network mode and a type SRV DNS record is used, you must specify either a `containerName` and `containerPort` combination or a `port` value. However, you can't specify both.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-serviceregistry-containername */
  ContainerName?: string | Intrinsic
  /**
   * - The port value to be used for your service discovery service. It's already specified in the task definition. If the task definition your service task specifies uses the `bridge` or `host` network mode, you must specify a `containerName` and `containerPort` combination from the task definition. If the task definition your service task specifies uses the `awsvpc` network mode and a type SRV DNS record is used, you must specify either a `containerName` and `containerPort` combination or a `port` value. However, you can't specify both.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-serviceregistry-containerport */
  ContainerPort?: number | Intrinsic
  /**
   * - The port value used if your service discovery service specified an SRV record. This field might be used if both the `awsvpc` network mode and SRV records are used.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-serviceregistry-port */
  Port?: number | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of the service registry. The currently supported service registry is AWS Cloud Map. For more information, see [CreateService](https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html).
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-serviceregistry-registryarn */
  RegistryArn?: string | Intrinsic
}

/**
 * The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value. You define them.
 * The following basic restrictions apply to tags:
 * *   Maximum number of tags per resource - 50
 *
 * *   For each resource, each tag key must be unique, and each tag key can have only one value.
 *
 * *   Maximum key length - 128 Unicode characters in UTF-8
 *
 * *   Maximum value length - 256 Unicode characters in UTF-8
 *
 * *   If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . \_ : / @.
 *
 * *   Tag keys and values are case-sensitive.
 *
 * *   Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html */

export interface Tag {
  /**
   * - One part of a key-value pair that make up a tag. A `key` is a general label that acts like a category for more specific tag values.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-tag-key */
  Key?: string | Intrinsic
  /**
   * - The optional part of a key-value pair that make up a tag. A `value` acts as a descriptor within a tag category (key).
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-tag-value */
  Value?: string | Intrinsic
}

/**
 * An object representing the networking details for a task or service. For example `awsVpcConfiguration={subnets=["subnet-12344321"],securityGroups=["sg-12344321"]}`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html */

export interface AwsVpcConfiguration {
  /**
   * - Whether the task's elastic network interface receives a public IP address. The default value is `DISABLED`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `DISABLED | ENABLED`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-awsvpcconfiguration-assignpublicip */
  AssignPublicIp?: string | Intrinsic
  /**
   * - The IDs of the security groups associated with the task or service. If you don't specify a security group, the default security group for the VPC is used. There's a limit of 5 security groups that can be specified per `awsvpcConfiguration`.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `5`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-awsvpcconfiguration-securitygroups */
  SecurityGroups?: (string | Intrinsic)[]
  /**
   * - The IDs of the subnets associated with the task or service. There's a limit of 16 subnets that can be specified per `awsvpcConfiguration`.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Maximum_: `16`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-awsvpcconfiguration-subnets */
  Subnets: (string | Intrinsic)[]
}

/**
 * The network configuration for a task or service.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html */

export interface NetworkConfiguration {
  /**
   * - The VPC subnets and security groups that are associated with a task.
   * - _Required_: No
   * - _Type_: [AwsVpcConfiguration](./aws-properties-ecs-taskset-awsvpcconfiguration.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-networkconfiguration-awsvpcconfiguration */
  AwsVpcConfiguration?: AwsVpcConfiguration
}

/**
 * Create a task set in the specified cluster and service. This is used when a service uses the `EXTERNAL` deployment controller type. For more information, see [Amazon ECS deployment types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html) in the _Amazon Elastic Container Service Developer Guide_.
 * ###### Note
 *
 * On March 21, 2024, a change was made to resolve the task definition revision before authorization. When a task definition revision is not specified, authorization will occur using the latest revision of a task definition.
 * For information about the maximum number of task sets and other quotas, see [Amazon ECS service quotas](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-quotas.html) in the _Amazon Elastic Container Service Developer Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html */

export interface ECSTaskSet extends ResourceAttributes {
  Type: 'AWS::ECS::TaskSet'
  Properties: {
    /**
     * - The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to create the task set in.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-cluster */
    Cluster: string | Intrinsic
    /**
     * - An optional non-unique tag that identifies this task set in external systems. If the task set is associated with a service discovery registry, the tasks in this task set will have the `ECS_TASK_SET_EXTERNAL_ID` AWS Cloud Map attribute set to the provided value.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-externalid */
    ExternalId?: string | Intrinsic
    /**
     * - The launch type that new tasks in the task set uses. For more information, see [Amazon ECS launch types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) in the _Amazon Elastic Container Service Developer Guide_.
     * - If a `launchType` is specified, the `capacityProviderStrategy` parameter must be omitted.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `EC2 | FARGATE`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-launchtype */
    LaunchType?: string | Intrinsic
    /**
     * - A load balancer object representing the load balancer to use with the task set. The supported load balancer types are either an Application Load Balancer or a Network Load Balancer.
     * - _Required_: No
     * - _Type_: Array of [LoadBalancer](./aws-properties-ecs-taskset-loadbalancer.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-loadbalancers */
    LoadBalancers?: LoadBalancer[]
    /**
     * - The network configuration for the task set.
     * - _Required_: No
     * - _Type_: [NetworkConfiguration](./aws-properties-ecs-taskset-networkconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-networkconfiguration */
    NetworkConfiguration?: NetworkConfiguration
    /**
     * - The platform version that the tasks in the task set uses. A platform version is specified only for tasks using the Fargate launch type. If one isn't specified, the `LATEST` platform version is used.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-platformversion */
    PlatformVersion?: string | Intrinsic
    /**
     * - A floating-point percentage of your desired number of tasks to place and keep running in the task set.
     * - _Required_: No
     * - _Type_: [Scale](./aws-properties-ecs-taskset-scale.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-scale */
    Scale?: Scale
    /**
     * - The short name or full Amazon Resource Name (ARN) of the service to create the task set in.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-service */
    Service: string | Intrinsic
    /**
     * - The details of the service discovery registries to assign to this task set. For more information, see [Service discovery](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html).
     * - _Required_: No
     * - _Type_: Array of [ServiceRegistry](./aws-properties-ecs-taskset-serviceregistry.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-serviceregistries */
    ServiceRegistries?: ServiceRegistry[]
    /**
     * - The metadata that you apply to the task set to help you categorize and organize them. Each tag consists of a key and an optional value. You define both.
     * - The following basic restrictions apply to tags:
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-ecs-taskset-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-tags */
    Tags?: Tag[]
    /**
     * - The task definition for the tasks in the task set to use. If a revision isn't specified, the latest `ACTIVE` revision is used.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-taskdefinition */
    TaskDefinition: string | Intrinsic
  }
}
