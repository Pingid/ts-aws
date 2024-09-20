import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Describes an endpoint authorization for authorizing Redshift-managed VPC endpoint access to a cluster across AWS accounts.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointauthorization.html */

export interface RedshiftEndpointAuthorization extends ResourceAttributes {
  Type: 'AWS::Redshift::EndpointAuthorization'
  Properties: {
    /**
     * - The AWS account ID of either the cluster owner (grantor) or grantee. If `Grantee` parameter is true, then the `Account` value is of the grantor.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^\d{12}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointauthorization.html#cfn-redshift-endpointauthorization-account */
    Account: string | Intrinsic
    /**
     * - The cluster identifier.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?=^[a-z][a-z0-9]*(-[a-z0-9]+)*$).{1,63}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointauthorization.html#cfn-redshift-endpointauthorization-clusteridentifier */
    ClusterIdentifier: string | Intrinsic
    /**
     * - Indicates whether to force the revoke action. If true, the Redshift-managed VPC endpoints associated with the endpoint authorization are also deleted.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointauthorization.html#cfn-redshift-endpointauthorization-force */
    Force?: boolean | Intrinsic
    /**
     * - The virtual private cloud (VPC) identifiers to grant access to.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-endpointauthorization.html#cfn-redshift-endpointauthorization-vpcids */
    VpcIds?: (string | Intrinsic)[]
  }
}
