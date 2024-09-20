import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Creates a routing control in Amazon Route 53 Application Recovery Controller. Routing control states are maintained on the highly reliable cluster data plane.
 * To get or update the state of the routing control, you must specify a cluster endpoint, which is an endpoint URL and an AWS Region. For more information, see [Code examples](https://docs.aws.amazon.com/r53recovery/latest/dg/service_code_examples.html) in the Amazon Route 53 Application Recovery Controller Developer Guide.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-routingcontrol.html */

export interface Route53RecoveryControlRoutingControl extends ResourceAttributes {
  Type: 'AWS::Route53RecoveryControl::RoutingControl'
  Properties: {
    /**
     * - The Amazon Resource Name (ARN) of the cluster that hosts the routing control.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[A-Za-z0-9:\/_-]*$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-routingcontrol.html#cfn-route53recoverycontrol-routingcontrol-clusterarn */
    ClusterArn?: string | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of the control panel that includes the routing control.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[A-Za-z0-9:\/_-]*$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-routingcontrol.html#cfn-route53recoverycontrol-routingcontrol-controlpanelarn */
    ControlPanelArn?: string | Intrinsic
    /**
     * - The name of the routing control. You can use any non-white space character in the name.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-routingcontrol.html#cfn-route53recoverycontrol-routingcontrol-name */
    Name: string | Intrinsic
  }
}
