import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Metadata assigned to an Amazon Neptune resource consisting of a key-value pair.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html */

export interface Tag {
  /**
   * - A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain the set of Unicode letters, digits, white-space, '\_', '.', '/', '=', '+', '-' (Java regex: "^(\[\\\\p{L}\\\\p{Z}\\\\p{N}\_.:/=+\\\\-\]\*)$").
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html#cfn-neptune-dbclusterparametergroup-tag-key */
  Key: string | Intrinsic
  /**
   * - A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain the set of Unicode letters, digits, white-space, '\_', '.', '/', '=', '+', '-' (Java regex: "^(\[\\\\p{L}\\\\p{Z}\\\\p{N}\_.:/=+\\\\-\]\*)$").
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html#cfn-neptune-dbclusterparametergroup-tag-value */
  Value: string | Intrinsic
}

/**
 * The `AWS::Neptune::DBClusterParameterGroup` resource creates a new Amazon Neptune DB cluster parameter group.
 * ###### Note
 *
 * Applying a parameter group to a DB cluster might require instances to reboot, resulting in a database outage while the instances reboot.
 * ###### Note
 *
 * If you provide a custom `DBClusterParameterGroup` that you associate with the `DBCluster`, it is best to specify an `EngineVersion` property in the `DBCluster`. That `EngineVersion` needs to be compatible with the value of the `Family` property in the `DBClusterParameterGroup`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html */

export interface NeptuneDBClusterParameterGroup extends ResourceAttributes {
  Type: 'AWS::Neptune::DBClusterParameterGroup'
  Properties: {
    /**
     * - Provides the customer-specified description for this DB cluster parameter group.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html#cfn-neptune-dbclusterparametergroup-description */
    Description: string | Intrinsic
    /**
     * - Must be `neptune1` for engine versions prior to [1.2.0.0](https://docs.aws.amazon.com/neptune/latest/userguide/engine-releases-1.2.0.0.html), or `neptune1.2` for engine version `1.2.0.0` and higher.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html#cfn-neptune-dbclusterparametergroup-family */
    Family: string | Intrinsic
    /**
     * - Provides the name of the DB cluster parameter group.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html#cfn-neptune-dbclusterparametergroup-name */
    Name?: string | Intrinsic
    /**
     * - The parameters to set for this DB cluster parameter group.
     * - The parameters are expressed as a JSON object consisting of key-value pairs.
     * - If you update the parameters, some interruption may occur depending on which parameters you update.
     * - _Required_: Yes
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html#cfn-neptune-dbclusterparametergroup-parameters */
    Parameters: any | Intrinsic
    /**
     * - The tags that you want to attach to this parameter group.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-neptune-dbclusterparametergroup-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html#cfn-neptune-dbclusterparametergroup-tags */
    Tags?: Tag[]
  }
}
