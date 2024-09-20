import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * An array of tags to add to the replication set.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-replicationset.html */

export interface Tag {
  /**
   * - The tag key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^(?!aws:)[a-zA-Z+-=._:/]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-replicationset.html#cfn-ssmincidents-replicationset-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-replicationset.html#cfn-ssmincidents-replicationset-tag-value */
  Value: string | Intrinsic
}

/**
 * The `RegionConfiguration` property specifies the Region and AWS Key Management Service key to add to the replication set.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-replicationset.html */

export interface RegionConfiguration {
  /**
   * - The AWS Key Management Service key ID to use to encrypt your replication set.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:aws(-(cn|us-gov|iso(-b)?))?:[a-z-]+:(([a-z]+-)+[0-9])?:([0-9]{12})?:[^.]+$`
   * - _Maximum_: `1000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-replicationset.html#cfn-ssmincidents-replicationset-regionconfiguration-ssekmskeyid */
  SseKmsKeyId: string | Intrinsic
}

/**
 * The `ReplicationRegion` property type specifies the Region and AWS Key Management Service key to add to the replication set.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-replicationset.html */

export interface ReplicationRegion {
  /**
   * - Specifies the Region configuration.
   * - _Required_: No
   * - _Type_: [RegionConfiguration](./aws-properties-ssmincidents-replicationset-regionconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-replicationset.html#cfn-ssmincidents-replicationset-replicationregion-regionconfiguration */
  RegionConfiguration?: RegionConfiguration
  /**
   * - Specifies the region name to add to the replication set.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-replicationset.html#cfn-ssmincidents-replicationset-replicationregion-regionname */
  RegionName?: string | Intrinsic
}

/**
 * The `AWS::SSMIncidents::ReplicationSet` resource specifies a set of AWS Regions that Incident Manager data is replicated to and the AWS Key Management Service (AWS KMS key used to encrypt the data.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-replicationset.html */

export interface SSMIncidentsReplicationSet extends ResourceAttributes {
  Type: 'AWS::SSMIncidents::ReplicationSet'
  Properties: {
    /**
     * - Determines if the replication set deletion protection is enabled or not. If deletion protection is enabled, you can't delete the last Region in the replication set.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-replicationset.html#cfn-ssmincidents-replicationset-deletionprotected */
    DeletionProtected?: boolean | Intrinsic
    /**
     * - Specifies the Regions of the replication set.
     * - _Required_: Yes
     * - _Type_: Array of [ReplicationRegion](./aws-properties-ssmincidents-replicationset-replicationregion.html)
     * - _Minimum_: `1`
     * - _Maximum_: `3`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-replicationset.html#cfn-ssmincidents-replicationset-regions */
    Regions: ReplicationRegion[]
    /**
     * - A list of tags to add to the replication set.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-ssmincidents-replicationset-tag.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmincidents-replicationset.html#cfn-ssmincidents-replicationset-tags */
    Tags?: Tag[]
  }
}
