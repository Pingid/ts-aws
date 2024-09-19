import type { Intrinsic } from '../intrinsic/index.js' /**
 * The source of the bridge. A network source originates at your premises.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgesource.html */

export interface BridgeNetworkSource {
  /**
   * - The network source multicast IP.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgesource.html#cfn-mediaconnect-bridgesource-bridgenetworksource-multicastip */
  MulticastIp: string | Intrinsic
  /**
   * - The network source's gateway network name.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgesource.html#cfn-mediaconnect-bridgesource-bridgenetworksource-networkname */
  NetworkName: string | Intrinsic
  /**
   * - The network source port.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgesource.html#cfn-mediaconnect-bridgesource-bridgenetworksource-port */
  Port: number | Intrinsic
  /**
   * - The network source protocol.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `rtp-fec | rtp | udp`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgesource.html#cfn-mediaconnect-bridgesource-bridgenetworksource-protocol */
  Protocol: string | Intrinsic
}

/**
 * The VPC interface that you want to send your output to.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgesource.html */

export interface VpcInterfaceAttachment {
  /**
   * - The name of the VPC interface that you want to send your output to.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgesource.html#cfn-mediaconnect-bridgesource-vpcinterfaceattachment-vpcinterfacename */
  VpcInterfaceName?: string | Intrinsic
}

/**
 * The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgesource.html */

export interface BridgeFlowSource {
  /**
   * - The ARN of the cloud flow used as a source of this bridge.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgesource.html#cfn-mediaconnect-bridgesource-bridgeflowsource-flowarn */
  FlowArn: string | Intrinsic
  /**
   * - The name of the VPC interface attachment to use for this source.
   * - _Required_: No
   * - _Type_: [VpcInterfaceAttachment](./aws-properties-mediaconnect-bridgesource-vpcinterfaceattachment.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgesource.html#cfn-mediaconnect-bridgesource-bridgeflowsource-flowvpcinterfaceattachment */
  FlowVpcInterfaceAttachment?: VpcInterfaceAttachment
}

/**
 * Adds sources to an existing bridge.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgesource.html */

export interface MediaConnectBridgeSource {
  Type: 'AWS::MediaConnect::BridgeSource'
  Properties: {
    /**
     * - The ARN of the bridge that you want to describe.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgesource.html#cfn-mediaconnect-bridgesource-bridgearn */
    BridgeArn: string | Intrinsic
    /**
     * - Add a flow source to an existing bridge.
     * - _Required_: No
     * - _Type_: [BridgeFlowSource](./aws-properties-mediaconnect-bridgesource-bridgeflowsource.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgesource.html#cfn-mediaconnect-bridgesource-flowsource */
    FlowSource?: BridgeFlowSource
    /**
     * - The name of the flow source. This name is used to reference the source and must be unique among sources in this bridge.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgesource.html#cfn-mediaconnect-bridgesource-name */
    Name: string | Intrinsic
    /**
     * - Add a network source to an existing bridge.
     * - _Required_: No
     * - _Type_: [BridgeNetworkSource](./aws-properties-mediaconnect-bridgesource-bridgenetworksource.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-bridgesource.html#cfn-mediaconnect-bridgesource-networksource */
    NetworkSource?: BridgeNetworkSource
  }
}
