import type { Intrinsic } from '../intrinsic/index.js' /**
 * Creates or updates the auth policy. The policy string in JSON must not contain newlines or blank lines.
 * For more information, see [Auth policies](https://docs.aws.amazon.com/vpc-lattice/latest/ug/auth-policies.html) in the _Amazon VPC Lattice User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-authpolicy.html */

export interface VpcLatticeAuthPolicy {
  Type: 'AWS::VpcLattice::AuthPolicy'
  Properties: {
    /**
     * - The auth policy.
     * - _Required_: Yes
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-authpolicy.html#cfn-vpclattice-authpolicy-policy */
    Policy: any | Intrinsic
    /**
     * - The ID or Amazon Resource Name (ARN) of the service network or service for which the policy is created.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^((((sn)|(svc))-[0-9a-z]{17})|(arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:((servicenetwork/sn)|(service/svc))-[0-9a-z]{17}))$`
     * - _Minimum_: `17`
     * - _Maximum_: `200`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-authpolicy.html#cfn-vpclattice-authpolicy-resourceidentifier */
    ResourceIdentifier: string | Intrinsic
  }
}
