import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The access configuration for the cluster.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html */

export interface AccessConfig {
  /**
   * - The desired authentication mode for the cluster. If you create a cluster by using the EKS API, AWS SDKs, or AWS CloudFormation, the default is `CONFIG_MAP`. If you create the cluster by using the AWS Management Console, the default value is `API_AND_CONFIG_MAP`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `CONFIG_MAP | API_AND_CONFIG_MAP | API`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-accessconfig-authenticationmode */
  AuthenticationMode?: string | Intrinsic
  /**
   * - Specifies whether or not the cluster creator IAM principal was set as a cluster admin access entry during cluster creation time. The default value is `true`.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-accessconfig-bootstrapclustercreatoradminpermissions */
  BootstrapClusterCreatorAdminPermissions?: boolean | Intrinsic
}

/**
 * The Kubernetes network configuration for the cluster.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html */

export interface KubernetesNetworkConfig {
  /**
   * - Specify which IP family is used to assign Kubernetes pod and service IP addresses. If you don't specify a value, `ipv4` is used by default. You can only specify an IP family when you create a cluster and can't change this value once the cluster is created. If you specify `ipv6`, the VPC and subnets that you specify for cluster creation must have both `IPv4` and `IPv6` CIDR blocks assigned to them. You can't specify `ipv6` for clusters in China Regions.
   * - You can only specify `ipv6` for `1.21` and later clusters that use version `1.10.1` or later of the Amazon VPC CNI add-on. If you specify `ipv6`, then ensure that your VPC meets the requirements listed in the considerations listed in [Assigning IPv6 addresses to pods and services](https://docs.aws.amazon.com/eks/latest/userguide/cni-ipv6.html) in the Amazon EKS User Guide. Kubernetes assigns services `IPv6` addresses from the unique local address range `(fc00::/7)`. You can't specify a custom `IPv6` CIDR block. Pod addresses are assigned from the subnet's `IPv6` CIDR.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ipv4 | ipv6`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-kubernetesnetworkconfig-ipfamily */
  IpFamily?: string | Intrinsic
  /**
   * - Don't specify a value if you select `ipv6` for **ipFamily**. The CIDR block to assign Kubernetes service IP addresses from. If you don't specify a block, Kubernetes assigns addresses from either the `10.100.0.0/16` or `172.20.0.0/16` CIDR blocks. We recommend that you specify a block that does not overlap with resources in other networks that are peered or connected to your VPC. The block must meet the following requirements:
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-kubernetesnetworkconfig-serviceipv4cidr */
  ServiceIpv4Cidr?: string | Intrinsic
  /**
   * - The CIDR block that Kubernetes pod and service IP addresses are assigned from if you created a 1.21 or later cluster with version 1.10.1 or later of the Amazon VPC CNI add-on and specified `ipv6` for **ipFamily** when you created the cluster. Kubernetes assigns service addresses from the unique local address range (`fc00::/7`) because you can't specify a custom IPv6 CIDR block when you create the cluster.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-kubernetesnetworkconfig-serviceipv6cidr */
  ServiceIpv6Cidr?: string | Intrinsic
}

/**
 * An object representing the VPC configuration to use for an Amazon EKS cluster.
 * ###### Important
 *
 * When updating a resource, you must include these properties if the previous CloudFormation template of the resource had them:
 *
 * *   `EndpointPublicAccess`
 *
 * *   `EndpointPrivateAccess`
 *
 * *   `PublicAccessCidrs`
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html */

export interface ResourcesVpcConfig {
  /**
   * - Set this value to `true` to enable private access for your cluster's Kubernetes API server endpoint. If you enable private access, Kubernetes API requests from within your cluster's VPC use the private VPC endpoint. The default value for this parameter is `false`, which disables private access for your Kubernetes API server. If you disable private access and you have nodes or AWS Fargate pods in the cluster, then ensure that `publicAccessCidrs` includes the necessary CIDR blocks for communication with the nodes or Fargate pods. For more information, see [Amazon EKS cluster endpoint access control](https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html) in the __Amazon EKS User Guide__ .
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-resourcesvpcconfig-endpointprivateaccess */
  EndpointPrivateAccess?: boolean | Intrinsic
  /**
   * - Set this value to `false` to disable public access to your cluster's Kubernetes API server endpoint. If you disable public access, your cluster's Kubernetes API server can only receive requests from within the cluster VPC. The default value for this parameter is `true`, which enables public access for your Kubernetes API server. For more information, see [Amazon EKS cluster endpoint access control](https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html) in the __Amazon EKS User Guide__ .
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-resourcesvpcconfig-endpointpublicaccess */
  EndpointPublicAccess?: boolean | Intrinsic
  /**
   * - The CIDR blocks that are allowed access to your cluster's public Kubernetes API server endpoint. Communication to the endpoint from addresses outside of the CIDR blocks that you specify is denied. The default value is `0.0.0.0/0`. If you've disabled private endpoint access, make sure that you specify the necessary CIDR blocks for every node and AWS Fargate `Pod` in the cluster. For more information, see [Amazon EKS cluster endpoint access control](https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html) in the __Amazon EKS User Guide__ .
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-resourcesvpcconfig-publicaccesscidrs */
  PublicAccessCidrs?: (string | Intrinsic)[]
  /**
   * - Specify one or more security groups for the cross-account elastic network interfaces that Amazon EKS creates to use that allow communication between your nodes and the Kubernetes control plane. If you don't specify any security groups, then familiarize yourself with the difference between Amazon EKS defaults for clusters deployed with Kubernetes. For more information, see [Amazon EKS security group considerations](https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html) in the __Amazon EKS User Guide__ .
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-resourcesvpcconfig-securitygroupids */
  SecurityGroupIds?: (string | Intrinsic)[]
  /**
   * - Specify subnets for your Amazon EKS nodes. Amazon EKS creates cross-account elastic network interfaces in these subnets to allow communication between your nodes and the Kubernetes control plane.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-resourcesvpcconfig-subnetids */
  SubnetIds: (string | Intrinsic)[]
}

/**
 * The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value. You define them.
 * The following basic restrictions apply to tags:
 * *   Maximum number of tags per resource – 50
 *
 * *   For each resource, each tag key must be unique, and each tag key can have only one value.
 *
 * *   Maximum key length – 128 Unicode characters in UTF-8
 *
 * *   Maximum value length – 256 Unicode characters in UTF-8
 *
 * *   If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . \_ : / @.
 *
 * *   Tag keys and values are case-sensitive.
 *
 * *   Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html */

export interface Tag {
  /**
   * - One part of a key-value pair that make up a tag. A `key` is a general label that acts like a category for more specific tag values.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-tag-key */
  Key: string | Intrinsic
  /**
   * - The optional part of a key-value pair that make up a tag. A `value` acts as a descriptor within a tag category (key).
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-tag-value */
  Value: string | Intrinsic
}

/**
 * The `UpgradePolicy` property type specifies Property description not available. for an [AWS::EKS::Cluster](./aws-resource-eks-cluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html */

export interface UpgradePolicy {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `STANDARD | EXTENDED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-upgradepolicy-supporttype */
  SupportType?: string | Intrinsic
}

/**
 * Identifies the AWS Key Management Service (AWS KMS) key used to encrypt the secrets.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html */

export interface Provider {
  /**
   * - Amazon Resource Name (ARN) or alias of the KMS key. The KMS key must be symmetric and created in the same AWS Region as the cluster. If the KMS key was created in a different account, the [IAM principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) must have access to the KMS key. For more information, see [Allowing users in other accounts to use a KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html) in the _AWS Key Management Service Developer Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-provider-keyarn */
  KeyArn?: string | Intrinsic
}

/**
 * The placement configuration for all the control plane instances of your local Amazon EKS cluster on an AWS Outpost. For more information, see [Capacity considerations](https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html) in the Amazon EKS User Guide.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html */

export interface ControlPlanePlacement {
  /**
   * - The name of the placement group for the Kubernetes control plane instances. This property is only used for a local cluster on an AWS Outpost.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-controlplaneplacement-groupname */
  GroupName?: string | Intrinsic
}

/**
 * The enabled logging type. For a list of the valid logging types, see the [`types` property of `LogSetup`](https://docs.aws.amazon.com/eks/latest/APIReference/API_LogSetup.html#AmazonEKS-Type-LogSetup-types) in the _Amazon EKS API Reference_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html */

export interface LoggingTypeConfig {
  /**
   * - The name of the log type.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `api | audit | authenticator | controllerManager | scheduler`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-loggingtypeconfig-type */
  Type?: string | Intrinsic
}

/**
 * The encryption configuration for the cluster.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html */

export interface EncryptionConfig {
  /**
   * - The encryption provider for the cluster.
   * - _Required_: No
   * - _Type_: [Provider](./aws-properties-eks-cluster-provider.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-encryptionconfig-provider */
  Provider?: Provider
  /**
   * - Specifies the resources to be encrypted. The only supported value is `secrets`.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-encryptionconfig-resources */
  Resources?: (string | Intrinsic)[]
}

/**
 * The configuration of your local Amazon EKS cluster on an AWS Outpost. Before creating a cluster on an Outpost, review [Creating a local cluster on an Outpost](https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-local-cluster-create.html) in the _Amazon EKS User Guide_. This API isn't available for Amazon EKS clusters on the AWS cloud.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html */

export interface OutpostConfig {
  /**
   * - The Amazon EC2 instance type that you want to use for your local Amazon EKS cluster on Outposts. Choose an instance type based on the number of nodes that your cluster will have. For more information, see [Capacity considerations](https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html) in the _Amazon EKS User Guide_.
   * - The instance type that you specify is used for all Kubernetes control plane instances. The instance type can't be changed after cluster creation. The control plane is not automatically scaled by Amazon EKS.
   * -
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-outpostconfig-controlplaneinstancetype */
  ControlPlaneInstanceType: string | Intrinsic
  /**
   * - An object representing the placement configuration for all the control plane instances of your local Amazon EKS cluster on an AWS Outpost. For more information, see [Capacity considerations](https://docs.aws.amazon.com/eks/latest/userguide/eks-outposts-capacity-considerations.html) in the _Amazon EKS User Guide_.
   * - _Required_: No
   * - _Type_: [ControlPlanePlacement](./aws-properties-eks-cluster-controlplaneplacement.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-outpostconfig-controlplaneplacement */
  ControlPlanePlacement?: ControlPlanePlacement
  /**
   * - The ARN of the Outpost that you want to use for your local Amazon EKS cluster on Outposts. Only a single Outpost ARN is supported.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-outpostconfig-outpostarns */
  OutpostArns: (string | Intrinsic)[]
}

/**
 * The cluster control plane logging configuration for your cluster.
 * ###### Important
 *
 * When updating a resource, you must include this `ClusterLogging` property if the previous CloudFormation template of the resource had it.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html */

export interface ClusterLogging {
  /**
   * - The enabled control plane logs for your cluster. All log types are disabled if the array is empty.
   * - _Required_: No
   * - _Type_: Array of [LoggingTypeConfig](./aws-properties-eks-cluster-loggingtypeconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-clusterlogging-enabledtypes */
  EnabledTypes?: LoggingTypeConfig[]
}

/**
 * Enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see [Amazon EKS Cluster control plane logs](https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html) in the __Amazon EKS User Guide__ .
 * ###### Important
 *
 * When updating a resource, you must include this `Logging` property if the previous CloudFormation template of the resource had it.
 * ###### Note
 *
 * CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see [CloudWatch Pricing](https://aws.amazon.com/cloudwatch/pricing/).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html */

export interface Logging {
  /**
   * - The cluster control plane logging configuration for your cluster.
   * - _Required_: No
   * - _Type_: [ClusterLogging](./aws-properties-eks-cluster-clusterlogging.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-logging-clusterlogging */
  ClusterLogging?: ClusterLogging
}

/**
 * Creates an Amazon EKS control plane.
 * The Amazon EKS control plane consists of control plane instances that run the Kubernetes software, such as `etcd` and the API server. The control plane runs in an account managed by AWS, and the Kubernetes API is exposed by the Amazon EKS API server endpoint. Each Amazon EKS cluster control plane is single tenant and unique. It runs on its own set of Amazon EC2 instances.
 * The cluster control plane is provisioned across multiple Availability Zones and fronted by an Elastic Load Balancing Network Load Balancer. Amazon EKS also provisions elastic network interfaces in your VPC subnets to provide connectivity from the control plane instances to the nodes (for example, to support `kubectl exec`, `logs`, and `proxy` data flows).
 * Amazon EKS nodes run in your AWS account and connect to your cluster's control plane over the Kubernetes API server endpoint and a certificate file that is created for your cluster.
 * You can use the `endpointPublicAccess` and `endpointPrivateAccess` parameters to enable or disable public and private access to your cluster's Kubernetes API server endpoint. By default, public access is enabled, and private access is disabled. For more information, see [Amazon EKS Cluster Endpoint Access Control](https://docs.aws.amazon.com/eks/latest/userguide/cluster-endpoint.html) in the __Amazon EKS User Guide__ .
 * You can use the `logging` parameter to enable or disable exporting the Kubernetes control plane logs for your cluster to CloudWatch Logs. By default, cluster control plane logs aren't exported to CloudWatch Logs. For more information, see [Amazon EKS Cluster Control Plane Logs](https://docs.aws.amazon.com/eks/latest/userguide/control-plane-logs.html) in the __Amazon EKS User Guide__ .
 * ###### Note
 *
 * CloudWatch Logs ingestion, archive storage, and data scanning rates apply to exported control plane logs. For more information, see [CloudWatch Pricing](https://aws.amazon.com/cloudwatch/pricing/).
 * In most cases, it takes several minutes to create a cluster. After you create an Amazon EKS cluster, you must configure your Kubernetes tooling to communicate with the API server and launch nodes into your cluster. For more information, see [Allowing users to access your cluster](https://docs.aws.amazon.com/eks/latest/userguide/cluster-auth.html) and [Launching Amazon EKS nodes](https://docs.aws.amazon.com/eks/latest/userguide/launch-workers.html) in the _Amazon EKS User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html */

export interface EKSCluster extends ResourceAttributes {
  Type: 'AWS::EKS::Cluster'
  Properties: {
    /**
     * - The access configuration for the cluster.
     * - _Required_: No
     * - _Type_: [AccessConfig](./aws-properties-eks-cluster-accessconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-accessconfig */
    AccessConfig?: AccessConfig
    /**
     * - If you set this value to `False` when creating a cluster, the default networking add-ons will not be installed.
     * - The default networking addons include vpc-cni, coredns, and kube-proxy.
     * - Use this option when you plan to install third-party alternative add-ons or self-manage the default networking add-ons.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-bootstrapselfmanagedaddons */
    BootstrapSelfManagedAddons?: boolean | Intrinsic
    /**
     * - The encryption configuration for the cluster.
     * - _Required_: No
     * - _Type_: [Array](./aws-properties-eks-cluster-encryptionconfig.html) of [EncryptionConfig](./aws-properties-eks-cluster-encryptionconfig.html)
     * - _Maximum_: `1`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-encryptionconfig */
    EncryptionConfig?: EncryptionConfig[]
    /**
     * - The Kubernetes network configuration for the cluster.
     * - _Required_: No
     * - _Type_: [KubernetesNetworkConfig](./aws-properties-eks-cluster-kubernetesnetworkconfig.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-kubernetesnetworkconfig */
    KubernetesNetworkConfig?: KubernetesNetworkConfig
    /**
     * - The logging configuration for your cluster.
     * - _Required_: No
     * - _Type_: [Logging](./aws-properties-eks-cluster-logging.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-logging */
    Logging?: Logging
    /**
     * - The unique name to give to your cluster.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[0-9A-Za-z][A-Za-z0-9\-_]*`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-name */
    Name?: string | Intrinsic
    /**
     * - An object representing the configuration of your local Amazon EKS cluster on an AWS Outpost. This object isn't available for clusters on the AWS cloud.
     * - _Required_: No
     * - _Type_: [OutpostConfig](./aws-properties-eks-cluster-outpostconfig.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-outpostconfig */
    OutpostConfig?: OutpostConfig
    /**
     * - The VPC configuration that's used by the cluster control plane. Amazon EKS VPC resources have specific requirements to work properly with Kubernetes. For more information, see [Cluster VPC Considerations](https://docs.aws.amazon.com/eks/latest/userguide/network_reqs.html) and [Cluster Security Group Considerations](https://docs.aws.amazon.com/eks/latest/userguide/sec-group-reqs.html) in the _Amazon EKS User Guide_. You must specify at least two subnets. You can specify up to five security groups, but we recommend that you use a dedicated security group for your cluster control plane.
     * - _Required_: Yes
     * - _Type_: [ResourcesVpcConfig](./aws-properties-eks-cluster-resourcesvpcconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-resourcesvpcconfig */
    ResourcesVpcConfig: ResourcesVpcConfig
    /**
     * - The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to AWS API operations on your behalf. For more information, see [Amazon EKS Service IAM Role](https://docs.aws.amazon.com/eks/latest/userguide/service_IAM_role.html) in the __Amazon EKS User Guide__ .
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-rolearn */
    RoleArn: string | Intrinsic
    /**
     * - The metadata that you apply to the cluster to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Cluster tags don't propagate to any other resources associated with the cluster.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-eks-cluster-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-tags */
    Tags?: Tag[]
    /**
     * - This value indicates if extended support is enabled or disabled for the cluster.
     * - [Learn more about EKS Extended Support in the EKS User Guide.](https://docs.aws.amazon.com/eks/latest/userguide/extended-support-control.html)
     * - _Required_: No
     * - _Type_: [UpgradePolicy](./aws-properties-eks-cluster-upgradepolicy.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-upgradepolicy */
    UpgradePolicy?: UpgradePolicy
    /**
     * - The desired Kubernetes version for your cluster. If you don't specify a value here, the default version available in Amazon EKS is used.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `1\.\d\d`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html#cfn-eks-cluster-version */
    Version?: string | Intrinsic
  }
}
