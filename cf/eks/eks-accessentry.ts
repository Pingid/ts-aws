import type { Intrinsic } from '../intrinsic/index.js' /**
 * The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value. You define them.
 * The following basic restrictions apply to tags:
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-accessentry.html */

export interface Tag {
  /**
   * - One part of a key-value pair that make up a tag. A `key` is a general label that acts like a category for more specific tag values.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-accessentry.html#cfn-eks-accessentry-tag-key */
  Key: string | Intrinsic
  /**
   * - The optional part of a key-value pair that make up a tag. A `value` acts as a descriptor within a tag category (key).
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-accessentry.html#cfn-eks-accessentry-tag-value */
  Value: string | Intrinsic
}

/**
 * The scope of an `AccessPolicy` that's associated to an `AccessEntry`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-accessentry.html */

export interface AccessScope {
  /**
   * - A Kubernetes `namespace` that an access policy is scoped to. A value is required if you specified `namespace` for `Type`.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-accessentry.html#cfn-eks-accessentry-accessscope-namespaces */
  Namespaces?: (string | Intrinsic)[]
  /**
   * - The scope type of an access policy.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `namespace | cluster`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-accessentry.html#cfn-eks-accessentry-accessscope-type */
  Type: string | Intrinsic
}

/**
 * An access policy includes permissions that allow Amazon EKS to authorize an IAM principal to work with Kubernetes objects on your cluster. The policies are managed by Amazon EKS, but they're not IAM policies. You can't view the permissions in the policies using the API. The permissions for many of the policies are similar to the Kubernetes `cluster-admin`, `admin`, `edit`, and `view` cluster roles. For more information about these cluster roles, see [User-facing roles](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles) in the Kubernetes documentation. To view the contents of the policies, see [Access policy permissions](https://docs.aws.amazon.com/eks/latest/userguide/access-policies.html#access-policy-permissions) in the _Amazon EKS User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-accessentry.html */

export interface AccessPolicy {
  /**
   * - The scope of an `AccessPolicy` that's associated to an `AccessEntry`.
   * - _Required_: Yes
   * - _Type_: [AccessScope](./aws-properties-eks-accessentry-accessscope.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-accessentry.html#cfn-eks-accessentry-accesspolicy-accessscope */
  AccessScope: AccessScope
  /**
   * - The ARN of the access policy.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-accessentry.html#cfn-eks-accessentry-accesspolicy-policyarn */
  PolicyArn: string | Intrinsic
}

/**
 * Creates an access entry.
 * An access entry allows an IAM principal to access your cluster. Access entries can replace the need to maintain entries in the `aws-auth` `ConfigMap` for authentication. You have the following options for authorizing an IAM principal to access Kubernetes objects on your cluster: Kubernetes role-based access control (RBAC), Amazon EKS, or both. Kubernetes RBAC authorization requires you to create and manage Kubernetes `Role`, `ClusterRole`, `RoleBinding`, and `ClusterRoleBinding` objects, in addition to managing access entries. If you use Amazon EKS authorization exclusively, you don't need to create and manage Kubernetes `Role`, `ClusterRole`, `RoleBinding`, and `ClusterRoleBinding` objects.
 * For more information about access entries, see [Access entries](https://docs.aws.amazon.com/eks/latest/userguide/access-entries.html) in the _Amazon EKS User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-accessentry.html */

export interface EKSAccessEntry {
  Type: 'AWS::EKS::AccessEntry'
  Properties: {
    /**
     * - The access policies to associate to the access entry.
     * - _Required_: No
     * - _Type_: Array of [AccessPolicy](./aws-properties-eks-accessentry-accesspolicy.html)
     * - _Maximum_: `20`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-accessentry.html#cfn-eks-accessentry-accesspolicies */
    AccessPolicies?: AccessPolicy[]
    /**
     * - The name of your cluster.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-accessentry.html#cfn-eks-accessentry-clustername */
    ClusterName: string | Intrinsic
    /**
     * - The value for `name` that you've specified for `kind: Group` as a `subject` in a Kubernetes `RoleBinding` or `ClusterRoleBinding` object. Amazon EKS doesn't confirm that the value for `name` exists in any bindings on your cluster. You can specify one or more names.
     * - Kubernetes authorizes the `principalArn` of the access entry to access any cluster objects that you've specified in a Kubernetes `Role` or `ClusterRole` object that is also specified in a binding's `roleRef`. For more information about creating Kubernetes `RoleBinding`, `ClusterRoleBinding`, `Role`, or `ClusterRole` objects, see [Using RBAC Authorization in the Kubernetes documentation](https://kubernetes.io/docs/reference/access-authn-authz/rbac/).
     * - If you want Amazon EKS to authorize the `principalArn` (instead of, or in addition to Kubernetes authorizing the `principalArn`), you can associate one or more access policies to the access entry using `AssociateAccessPolicy`. If you associate any access policies, the `principalARN` has all permissions assigned in the associated access policies and all permissions in any Kubernetes `Role` or `ClusterRole` objects that the group names are bound to.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-accessentry.html#cfn-eks-accessentry-kubernetesgroups */
    KubernetesGroups?: (string | Intrinsic)[]
    /**
     * - The ARN of the IAM principal for the `AccessEntry`. You can specify one ARN for each access entry. You can't specify the same ARN in more than one access entry. This value can't be changed after access entry creation.
     * - The valid principals differ depending on the type of the access entry in the `type` field. The only valid ARN is IAM roles for the types of access entries for nodes: . You can use every IAM principal type for `STANDARD` access entries. You can't use the STS session principal type with access entries because this is a temporary principal for each session and not a permanent identity that can be assigned permissions.
     * - [IAM best practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#bp-users-federation-idp) recommend using IAM roles with temporary credentials, rather than IAM users with long-term credentials.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-accessentry.html#cfn-eks-accessentry-principalarn */
    PrincipalArn: string | Intrinsic
    /**
     * - Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or AWS resources.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-eks-accessentry-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-accessentry.html#cfn-eks-accessentry-tags */
    Tags?: Tag[]
    /**
     * - The type of the new access entry. Valid values are `Standard`, `FARGATE_LINUX`, `EC2_LINUX`, and `EC2_WINDOWS`.
     * - If the `principalArn` is for an IAM role that's used for self-managed Amazon EC2 nodes, specify `EC2_LINUX` or `EC2_WINDOWS`. Amazon EKS grants the necessary permissions to the node for you. If the `principalArn` is for any other purpose, specify `STANDARD`. If you don't specify a value, Amazon EKS sets the value to `STANDARD`. It's unnecessary to create access entries for IAM roles used with Fargate profiles or managed Amazon EC2 nodes, because Amazon EKS creates entries in the `aws-auth` `ConfigMap` for the roles. You can't change this value once you've created the access entry.
     * - If you set the value to `EC2_LINUX` or `EC2_WINDOWS`, you can't specify values for `kubernetesGroups`, or associate an `AccessPolicy` to the access entry.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-accessentry.html#cfn-eks-accessentry-type */
    Type?: string | Intrinsic
    /**
     * - The username to authenticate to Kubernetes with. We recommend not specifying a username and letting Amazon EKS specify it for you. For more information about the value Amazon EKS specifies for you, or constraints before specifying your own username, see [Creating access entries](https://docs.aws.amazon.com/eks/latest/userguide/access-entries.html#creating-access-entries) in the _Amazon EKS User Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-accessentry.html#cfn-eks-accessentry-username */
    Username?: string | Intrinsic
  }
}
