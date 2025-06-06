import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
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
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-podidentityassociation.html */

export interface Tag {
    /**
     * - One part of a key-value pair that make up a tag. A `key` is a general label that acts like a category for more specific tag values.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-podidentityassociation.html#cfn-eks-podidentityassociation-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The optional part of a key-value pair that make up a tag. A `value` acts as a descriptor within a tag category (key).
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-podidentityassociation.html#cfn-eks-podidentityassociation-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Amazon EKS Pod Identity associations provide the ability to manage credentials for your applications, similar to the way that Amazon EC2 instance profiles provide credentials to Amazon EC2 instances.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-podidentityassociation.html */

export interface EKSPodIdentityAssociation extends ResourceAttributes {
    "Type": "AWS::EKS::PodIdentityAssociation";
    "Properties": {
        /**
         * - The name of the cluster that the association is in.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-podidentityassociation.html#cfn-eks-podidentityassociation-clustername */
        "ClusterName": string | Intrinsic;
        /**
         * - The name of the Kubernetes namespace inside the cluster to create the association in. The service account and the pods that use the service account must be in this namespace.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-podidentityassociation.html#cfn-eks-podidentityassociation-namespace */
        "Namespace": string | Intrinsic;
        /**
         * - The Amazon Resource Name (ARN) of the IAM role to associate with the service account. The EKS Pod Identity agent manages credentials to assume this role for applications in the containers in the pods that use this service account.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-podidentityassociation.html#cfn-eks-podidentityassociation-rolearn */
        "RoleArn": string | Intrinsic;
        /**
         * - The name of the Kubernetes service account inside the cluster to associate the IAM credentials with.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-podidentityassociation.html#cfn-eks-podidentityassociation-serviceaccount */
        "ServiceAccount": string | Intrinsic;
        /**
         * - Metadata that assists with categorization and organization. Each tag consists of a key and an optional value. You define both. Tags don't propagate to any other cluster or AWS resources.
         * - The following basic restrictions apply to tags:
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-eks-podidentityassociation-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-podidentityassociation.html#cfn-eks-podidentityassociation-tags */
        "Tags"?: Tag[];
    };
}