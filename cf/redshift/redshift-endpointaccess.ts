import type { Intrinsic } from '../intrinsic/index.js' /**
 * Creates a Redshift-managed VPC endpoint.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html */

export interface RedshiftEndpointAccess {
  Type: 'AWS::Redshift::EndpointAccess'
  Properties: {
    /**
     * - The cluster identifier of the cluster associated with the endpoint.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `2147483647`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html#cfn-redshift-endpointaccess-clusteridentifier */
    ClusterIdentifier: string | Intrinsic
    /**
     * - The name of the endpoint.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?=^[a-z][a-z0-9]*(-[a-z0-9]+)*$).{1,30}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html#cfn-redshift-endpointaccess-endpointname */
    EndpointName: string | Intrinsic
    /**
     * - The AWS account ID of the owner of the cluster.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^\d{12}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html#cfn-redshift-endpointaccess-resourceowner */
    ResourceOwner?: string | Intrinsic
    /**
     * - The subnet group name where Amazon Redshift chooses to deploy the endpoint.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?=^[a-zA-Z0-9-]+$).{1,255}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html#cfn-redshift-endpointaccess-subnetgroupname */
    SubnetGroupName: string | Intrinsic
    /**
     * - The security group that defines the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointaccess.html#cfn-redshift-endpointaccess-vpcsecuritygroupids */
    VpcSecurityGroupIds: (string | Intrinsic)[]
  }
}
