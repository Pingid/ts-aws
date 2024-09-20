import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Creates a VPC endpoint service configuration to which service consumers (AWS accounts, users, and IAM roles) can connect.
 * To create an endpoint service configuration, you must first create one of the following for your service:
 * *   A [Network Load Balancer](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html). Service consumers connect to your service using an interface endpoint.
 *
 * *   A [Gateway Load Balancer](https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/introduction.html). Service consumers connect to your service using a Gateway Load Balancer endpoint.
 * For more information, see the [AWS PrivateLink User Guide](https://docs.aws.amazon.com/vpc/latest/privatelink/).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservice.html */

export interface EC2VPCEndpointService extends ResourceAttributes {
  Type: 'AWS::EC2::VPCEndpointService'
  Properties: {
    /**
     * - Indicates whether requests from service consumers to create an endpoint to your service must be accepted.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservice.html#cfn-ec2-vpcendpointservice-acceptancerequired */
    AcceptanceRequired?: boolean | Intrinsic
    /**
     * - Indicates whether to enable the built-in Contributor Insights rules provided by AWS PrivateLink.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservice.html#cfn-ec2-vpcendpointservice-contributorinsightsenabled */
    ContributorInsightsEnabled?: boolean | Intrinsic
    /**
     * - The Amazon Resource Names (ARNs) of the Gateway Load Balancers.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservice.html#cfn-ec2-vpcendpointservice-gatewayloadbalancerarns */
    GatewayLoadBalancerArns?: (string | Intrinsic)[]
    /**
     * - The Amazon Resource Names (ARNs) of the Network Load Balancers.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservice.html#cfn-ec2-vpcendpointservice-networkloadbalancerarns */
    NetworkLoadBalancerArns?: (string | Intrinsic)[]
    /**
     * - The entity that is responsible for the endpoint costs. The default is the endpoint owner. If you set the payer responsibility to the service owner, you cannot set it back to the endpoint owner.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ServiceOwner`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpcendpointservice.html#cfn-ec2-vpcendpointservice-payerresponsibility */
    PayerResponsibility?: string | Intrinsic
  }
}
