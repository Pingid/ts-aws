import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A map of key-value pairs.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrcontainers-virtualcluster.html */

export interface Tag {
  /**
   * - The key to use in the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrcontainers-virtualcluster.html#cfn-emrcontainers-virtualcluster-tag-key */
  Key: string | Intrinsic
  /**
   * - The value of the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrcontainers-virtualcluster.html#cfn-emrcontainers-virtualcluster-tag-value */
  Value: string | Intrinsic
}

/**
 * The information about the Amazon EKS cluster.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrcontainers-virtualcluster.html */

export interface EksInfo {
  /**
   * - The namespaces of the EKS cluster.
   * - _Minimum_: 1
   * - _Maximum_: 63
   * - _Pattern_: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`
   * - _Minimum_: `1`
   * - _Maximum_: `63`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrcontainers-virtualcluster.html#cfn-emrcontainers-virtualcluster-eksinfo-namespace */
  Namespace: string | Intrinsic
}

/**
 * The information about the container used for a job run or a managed endpoint.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrcontainers-virtualcluster.html */

export interface ContainerInfo {
  /**
   * - The information about the Amazon EKS cluster.
   * - _Required_: Yes
   * - _Type_: [EksInfo](./aws-properties-emrcontainers-virtualcluster-eksinfo.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrcontainers-virtualcluster.html#cfn-emrcontainers-virtualcluster-containerinfo-eksinfo */
  EksInfo: EksInfo
}

/**
 * The information about the container provider.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrcontainers-virtualcluster.html */

export interface ContainerProvider {
  /**
   * - The ID of the container cluster.
   * - _Minimum_: 1
   * - _Maximum_: 100
   * - _Pattern_: `^[0-9A-Za-z][A-Za-z0-9\-_]*`
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[0-9A-Za-z][A-Za-z0-9\-_]*`
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrcontainers-virtualcluster.html#cfn-emrcontainers-virtualcluster-containerprovider-id */
  Id: string | Intrinsic
  /**
   * - The information about the container cluster.
   * - _Required_: Yes
   * - _Type_: [ContainerInfo](./aws-properties-emrcontainers-virtualcluster-containerinfo.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrcontainers-virtualcluster.html#cfn-emrcontainers-virtualcluster-containerprovider-info */
  Info: ContainerInfo
  /**
   * - The type of the container provider. Amazon EKS is the only supported type as of now.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `EKS`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrcontainers-virtualcluster.html#cfn-emrcontainers-virtualcluster-containerprovider-type */
  Type: string | Intrinsic
}

/**
 * The `AWS::EMRContainers::VirtualCluster` resource specifies a virtual cluster. A virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list, and delete virtual clusters. They do not consume any additional resources in your system. A single virtual cluster maps to a single Kubernetes namespace. Given this relationship, you can model virtual clusters the same way you model Kubernetes namespaces to meet your requirements.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrcontainers-virtualcluster.html */

export interface EMRContainersVirtualCluster extends ResourceAttributes {
  Type: 'AWS::EMRContainers::VirtualCluster'
  Properties: {
    /**
     * - The container provider of the virtual cluster.
     * - _Required_: Yes
     * - _Type_: [ContainerProvider](./aws-properties-emrcontainers-virtualcluster-containerprovider.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrcontainers-virtualcluster.html#cfn-emrcontainers-virtualcluster-containerprovider */
    ContainerProvider: ContainerProvider
    /**
     * - The name of the virtual cluster.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\.\-_/#A-Za-z0-9]+`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrcontainers-virtualcluster.html#cfn-emrcontainers-virtualcluster-name */
    Name: string | Intrinsic
    /**
     * - An array of key-value pairs to apply to this resource.
     * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-emrcontainers-virtualcluster-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrcontainers-virtualcluster.html#cfn-emrcontainers-virtualcluster-tags */
    Tags?: Tag[]
  }
}
