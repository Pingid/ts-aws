import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `AWS::MSK::VpcConnection` resource Property description not available. for MSK.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-vpcconnection.html */

export interface MSKVpcConnection extends ResourceAttributes {
  Type: 'AWS::MSK::VpcConnection'
  Properties: {
    /**
     * - The type of private link authentication.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `SASL_IAM | SASL_SCRAM | TLS`
     * - _Minimum_: `3`
     * - _Maximum_: `10`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-vpcconnection.html#cfn-msk-vpcconnection-authentication */
    Authentication: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-vpcconnection.html#cfn-msk-vpcconnection-clientsubnets */
    ClientSubnets: (string | Intrinsic)[]
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-vpcconnection.html#cfn-msk-vpcconnection-securitygroups */
    SecurityGroups: (string | Intrinsic)[]
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-vpcconnection.html#cfn-msk-vpcconnection-tags */
    Tags?: Record<string, string | Intrinsic>
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:[\w-]+:kafka:[\w-]+:\d+:cluster.*\Z`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-vpcconnection.html#cfn-msk-vpcconnection-targetclusterarn */
    TargetClusterArn: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(vpc-)([a-z0-9]+)\Z`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-vpcconnection.html#cfn-msk-vpcconnection-vpcid */
    VpcId: string | Intrinsic
  }
}
