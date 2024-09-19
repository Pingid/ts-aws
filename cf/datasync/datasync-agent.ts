import type { Intrinsic } from '../intrinsic/index.js' /**
 * Specifies labels that help you categorize, filter, and search for your AWS resources. We recommend creating at least one tag for your agent.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html */

export interface Tag {
  /**
   * - The key for an AWS resource tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9\s+=._:/-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html#cfn-datasync-agent-tag-key */
  Key: string | Intrinsic
  /**
   * - The value for an AWS resource tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9\s+=._:@/-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html#cfn-datasync-agent-tag-value */
  Value: string | Intrinsic
}

/**
 * The `AWS::DataSync::Agent` resource activates an AWS DataSync agent that you've deployed for storage discovery or data transfers. The activation process associates the agent with your AWS account.
 * For more information, see the following topics in the _AWS DataSync User Guide_:
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html */

export interface DataSyncAgent {
  Type: 'AWS::DataSync::Agent'
  Properties: {
    /**
     * - Specifies your DataSync agent's activation key. If you don't have an activation key, see [Activating your agent](https://docs.aws.amazon.com/datasync/latest/userguide/activate-agent.html).
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[A-Z0-9]{5}(-[A-Z0-9]{5}){4}`
     * - _Maximum_: `29`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html#cfn-datasync-agent-activationkey */
    ActivationKey?: string | Intrinsic
    /**
     * - Specifies a name for your agent. We recommend specifying a name that you can remember.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9\s+=._:@/-]+$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html#cfn-datasync-agent-agentname */
    AgentName?: string | Intrinsic
    /**
     * - The Amazon Resource Names (ARNs) of the security groups used to protect your data transfer task subnets. See [SecurityGroupArns](https://docs.aws.amazon.com/datasync/latest/userguide/API_Ec2Config.html#DataSync-Type-Ec2Config-SecurityGroupArns).
     * - _Pattern_: `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):ec2:[a-z\-0-9]*:[0-9]{12}:security-group/.*$`
     * - _Required_: No
     * - _Type_: Array of String
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html#cfn-datasync-agent-securitygrouparns */
    SecurityGroupArns?: (string | Intrinsic)[]
    /**
     * - Specifies the ARN of the subnet where your VPC service endpoint is located. You can only specify one ARN.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html#cfn-datasync-agent-subnetarns */
    SubnetArns?: (string | Intrinsic)[]
    /**
     * - Specifies labels that help you categorize, filter, and search for your AWS resources. We recommend creating at least one tag for your agent.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-datasync-agent-tag.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html#cfn-datasync-agent-tags */
    Tags?: Tag[]
    /**
     * - The ID of the virtual private cloud (VPC) endpoint that the agent has access to. This is the client-side VPC endpoint, powered by AWS PrivateLink. If you don't have an AWS PrivateLink VPC endpoint, see [AWS PrivateLink and VPC endpoints](https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-services-overview.html) in the _Amazon VPC User Guide_.
     * - For more information about activating your agent in a private network based on a VPC, see [Using AWS DataSync in a Virtual Private Cloud](https://docs.aws.amazon.com/datasync/latest/userguide/datasync-in-vpc.html) in the _AWS DataSync User Guide._
     * - A VPC endpoint ID looks like this: `vpce-01234d5aff67890e1`.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^vpce-[0-9a-f]{17}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-agent.html#cfn-datasync-agent-vpcendpointid */
    VpcEndpointId?: string | Intrinsic
  }
}
