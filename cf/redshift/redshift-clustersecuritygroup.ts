import type { Intrinsic } from '../intrinsic/index.js' /**
 * A tag consisting of a name/value pair for a resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroup.html */

export interface Tag {
  /**
   * - The key, or name, for the resource tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Maximum_: `2147483647`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroup.html#cfn-redshift-clustersecuritygroup-tag-key */
  Key: string | Intrinsic
  /**
   * - The value for the resource tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Maximum_: `2147483647`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroup.html#cfn-redshift-clustersecuritygroup-tag-value */
  Value: string | Intrinsic
}

/**
 * Specifies a new Amazon Redshift security group. You use security groups to control access to non-VPC clusters.
 * For information about managing security groups, go to [Amazon Redshift Cluster Security Groups](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html) in the _Amazon Redshift Cluster Management Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroup.html */

export interface RedshiftClusterSecurityGroup {
  Type: 'AWS::Redshift::ClusterSecurityGroup'
  Properties: {
    /**
     * - A description for the security group.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `2147483647`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroup.html#cfn-redshift-clustersecuritygroup-description */
    Description: string | Intrinsic
    /**
     * - Specifies an arbitrary set of tags (key–value pairs) to associate with this security group. Use tags to manage your resources.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-redshift-clustersecuritygroup-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroup.html#cfn-redshift-clustersecuritygroup-tags */
    Tags?: Tag[]
  }
}
