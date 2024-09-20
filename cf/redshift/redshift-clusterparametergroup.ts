import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Describes a parameter in a cluster parameter group.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clusterparametergroup.html */

export interface Parameter {
  /**
   * - The name of the parameter.
   * - _Required_: Yes
   * - _Type_: String
   * - _Maximum_: `2147483647`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clusterparametergroup.html#cfn-redshift-clusterparametergroup-parameter-parametername */
  ParameterName: string | Intrinsic
  /**
   * - The value of the parameter. If `ParameterName` is `wlm_json_configuration`, then the maximum size of `ParameterValue` is 8000 characters.
   * - _Required_: Yes
   * - _Type_: String
   * - _Maximum_: `2147483647`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clusterparametergroup.html#cfn-redshift-clusterparametergroup-parameter-parametervalue */
  ParameterValue: string | Intrinsic
}

/**
 * A tag consisting of a name/value pair for a resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clusterparametergroup.html */

export interface Tag {
  /**
   * - The key, or name, for the resource tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clusterparametergroup.html#cfn-redshift-clusterparametergroup-tag-key */
  Key: string | Intrinsic
  /**
   * - The value for the resource tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clusterparametergroup.html#cfn-redshift-clusterparametergroup-tag-value */
  Value: string | Intrinsic
}

/**
 * Describes a parameter group.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clusterparametergroup.html */

export interface RedshiftClusterParameterGroup extends ResourceAttributes {
  Type: 'AWS::Redshift::ClusterParameterGroup'
  Properties: {
    /**
     * - The description of the parameter group.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `2147483647`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clusterparametergroup.html#cfn-redshift-clusterparametergroup-description */
    Description: string | Intrinsic
    /**
     * - The name of the cluster parameter group family that this cluster parameter group is compatible with. You can create a custom parameter group and then associate your cluster with it. For more information, see [Amazon Redshift parameter groups](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html).
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `2147483647`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clusterparametergroup.html#cfn-redshift-clusterparametergroup-parametergroupfamily */
    ParameterGroupFamily: string | Intrinsic
    /**
     * - The name of the cluster parameter group.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clusterparametergroup.html#cfn-redshift-clusterparametergroup-parametergroupname */
    ParameterGroupName?: string | Intrinsic
    /**
     * - An array of parameters to be modified. A maximum of 20 parameters can be modified in a single request.
     * - For each parameter to be modified, you must supply at least the parameter name and parameter value; other name-value pairs of the parameter are optional.
     * - For the workload management (WLM) configuration, you must supply all the name-value pairs in the wlm\_json\_configuration parameter.
     * - _Required_: No
     * - _Type_: Array of [Parameter](./aws-properties-redshift-clusterparametergroup-parameter.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clusterparametergroup.html#cfn-redshift-clusterparametergroup-parameters */
    Parameters?: Parameter[]
    /**
     * - The list of tags for the cluster parameter group.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-redshift-clusterparametergroup-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clusterparametergroup.html#cfn-redshift-clusterparametergroup-tags */
    Tags?: Tag[]
  }
}
