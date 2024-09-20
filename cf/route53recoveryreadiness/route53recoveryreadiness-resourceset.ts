import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `Tag` property type specifies Property description not available. for an [AWS::Route53RecoveryReadiness::ResourceSet](./aws-resource-route53recoveryreadiness-resourceset.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html */

export interface Tag {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html#cfn-route53recoveryreadiness-resourceset-tag-key */
  Key: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html#cfn-route53recoveryreadiness-resourceset-tag-value */
  Value: string | Intrinsic
}

/**
 * The Network Load Balancer resource that a DNS target resource points to.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html */

export interface NLBResource {
  /**
   * - The Network Load Balancer resource Amazon Resource Name (ARN).
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html#cfn-route53recoveryreadiness-resourceset-nlbresource-arn */
  Arn?: string | Intrinsic
}

/**
 * The Amazon Route 53 resource that a DNS target resource record points to.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html */

export interface R53ResourceRecord {
  /**
   * - The DNS target domain name.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html#cfn-route53recoveryreadiness-resourceset-r53resourcerecord-domainname */
  DomainName?: string | Intrinsic
  /**
   * - The Amazon Route 53 Resource Record Set ID.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html#cfn-route53recoveryreadiness-resourceset-r53resourcerecord-recordsetid */
  RecordSetId?: string | Intrinsic
}

/**
 * The target resource that the Route 53 record points to.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html */

export interface TargetResource {
  /**
   * - The Network Load Balancer resource that a DNS target resource points to.
   * - _Required_: No
   * - _Type_: [NLBResource](./aws-properties-route53recoveryreadiness-resourceset-nlbresource.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html#cfn-route53recoveryreadiness-resourceset-targetresource-nlbresource */
  NLBResource?: NLBResource
  /**
   * - The Route 53 resource that a DNS target resource record points to.
   * - _Required_: No
   * - _Type_: [R53ResourceRecord](./aws-properties-route53recoveryreadiness-resourceset-r53resourcerecord.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html#cfn-route53recoveryreadiness-resourceset-targetresource-r53resource */
  R53Resource?: R53ResourceRecord
}

/**
 * A component for DNS/routing control readiness checks and architecture checks.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html */

export interface DNSTargetResource {
  /**
   * - The domain name that acts as an ingress point to a portion of the customer application.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html#cfn-route53recoveryreadiness-resourceset-dnstargetresource-domainname */
  DomainName?: string | Intrinsic
  /**
   * - The hosted zone Amazon Resource Name (ARN) that contains the DNS record with the provided name of the target resource.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html#cfn-route53recoveryreadiness-resourceset-dnstargetresource-hostedzonearn */
  HostedZoneArn?: string | Intrinsic
  /**
   * - The Amazon Route 53 record set ID that uniquely identifies a DNS record, given a name and a type.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html#cfn-route53recoveryreadiness-resourceset-dnstargetresource-recordsetid */
  RecordSetId?: string | Intrinsic
  /**
   * - The type of DNS record of the target resource.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html#cfn-route53recoveryreadiness-resourceset-dnstargetresource-recordtype */
  RecordType?: string | Intrinsic
  /**
   * - The target resource that the Route 53 record points to.
   * - _Required_: No
   * - _Type_: [TargetResource](./aws-properties-route53recoveryreadiness-resourceset-targetresource.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html#cfn-route53recoveryreadiness-resourceset-dnstargetresource-targetresource */
  TargetResource?: TargetResource
}

/**
 * The resource element of a resource set.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html */

export interface Resource {
  /**
   * - The component identifier of the resource, generated when DNS target resource is used.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html#cfn-route53recoveryreadiness-resourceset-resource-componentid */
  ComponentId?: string | Intrinsic
  /**
   * - A component for DNS/routing control readiness checks. This is a required setting when `ResourceSet` `ResourceSetType` is set to `AWS::Route53RecoveryReadiness::DNSTargetResource`. Do not set it for any other `ResourceSetType` setting.
   * - _Required_: Conditional
   * - _Type_: [DNSTargetResource](./aws-properties-route53recoveryreadiness-resourceset-dnstargetresource.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html#cfn-route53recoveryreadiness-resourceset-resource-dnstargetresource */
  DnsTargetResource?: DNSTargetResource
  /**
   * - The recovery group Amazon Resource Name (ARN) or the cell ARN that the readiness checks for this resource set are scoped to.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html#cfn-route53recoveryreadiness-resourceset-resource-readinessscopes */
  ReadinessScopes?: (string | Intrinsic)[]
  /**
   * - The Amazon Resource Name (ARN) of the AWS resource. This is a required setting for all `ResourceSet` `ResourceSetType` settings except `AWS::Route53RecoveryReadiness::DNSTargetResource`. Do not set this when `ResourceSetType` is set to `AWS::Route53RecoveryReadiness::DNSTargetResource`.
   * - _Required_: Conditional
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html#cfn-route53recoveryreadiness-resourceset-resource-resourcearn */
  ResourceArn?: string | Intrinsic
}

/**
 * Creates a resource set in Amazon Route 53 Application Recovery Controller. A resource set is a set of resources of one type, such as Network Load Balancers, that span multiple cells. You can associate a resource set with a readiness check to have Route 53 ARC continually monitor the resources in the set for failover readiness.
 * You typically create a resource set and a readiness check for each supported type of AWS resource in your application.
 * For more information, see [Readiness checks, resource sets, and readiness scopes](https://docs.aws.amazon.com/r53recovery/latest/dg/recovery-readiness.recovery-groups.readiness-scope.html) in the Amazon Route 53 Application Recovery Controller Developer Guide.
 * Route 53 ARC Readiness supports us-east-1 and us-west-2 AWS Regions only.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html */

export interface Route53RecoveryReadinessResourceSet extends ResourceAttributes {
  Type: 'AWS::Route53RecoveryReadiness::ResourceSet'
  Properties: {
    /**
     * - A list of resource objects in the resource set.
     * - _Required_: Yes
     * - _Type_: Array of [Resource](./aws-properties-route53recoveryreadiness-resourceset-resource.html)
     * - _Minimum_: `1`
     * - _Maximum_: `6`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html#cfn-route53recoveryreadiness-resourceset-resources */
    Resources: Resource[]
    /**
     * - The name of the resource set to create.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html#cfn-route53recoveryreadiness-resourceset-resourcesetname */
    ResourceSetName?: string | Intrinsic
    /**
     * - The resource type of the resources in the resource set. Enter one of the following values for resource type:
     * - AWS::ApiGateway::Stage, AWS::ApiGatewayV2::Stage, AWS::AutoScaling::AutoScalingGroup, AWS::CloudWatch::Alarm, AWS::EC2::CustomerGateway, AWS::DynamoDB::Table, AWS::EC2::Volume, AWS::ElasticLoadBalancing::LoadBalancer, AWS::ElasticLoadBalancingV2::LoadBalancer, AWS::Lambda::Function, AWS::MSK::Cluster, AWS::RDS::DBCluster, AWS::Route53::HealthCheck, AWS::SQS::Queue, AWS::SNS::Topic, AWS::SNS::Subscription, AWS::EC2::VPC, AWS::EC2::VPNConnection, AWS::EC2::VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource.
     * - Note that AWS::Route53RecoveryReadiness::DNSTargetResource is only used for this setting. It isn't an actual AWS CloudFormation resource type.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html#cfn-route53recoveryreadiness-resourceset-resourcesettype */
    ResourceSetType: string | Intrinsic
    /**
     * - A tag to associate with the parameters for a resource set.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-route53recoveryreadiness-resourceset-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-resourceset.html#cfn-route53recoveryreadiness-resourceset-tags */
    Tags?: Tag[]
  }
}
