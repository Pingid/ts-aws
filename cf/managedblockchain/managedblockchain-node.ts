import type { Intrinsic } from '../intrinsic/index.js' /**
 * Configuration properties of a peer node within a membership.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-node.html */

export interface NodeConfiguration {
  /**
   * - The Availability Zone in which the node exists. Required for Ethereum nodes.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-node.html#cfn-managedblockchain-node-nodeconfiguration-availabilityzone */
  AvailabilityZone: string | Intrinsic
  /**
   * - The Amazon Managed Blockchain instance type for the node.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-node.html#cfn-managedblockchain-node-nodeconfiguration-instancetype */
  InstanceType: string | Intrinsic
}

/**
 * Creates a node on the specified blockchain network.
 * Applies to Hyperledger Fabric and Ethereum.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-node.html */

export interface ManagedBlockchainNode {
  Type: 'AWS::ManagedBlockchain::Node'
  Properties: {
    /**
     * - The unique identifier of the member to which the node belongs. Applies only to Hyperledger Fabric.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-node.html#cfn-managedblockchain-node-memberid */
    MemberId?: string | Intrinsic
    /**
     * - The unique identifier of the network for the node.
     * - Ethereum public networks have the following `NetworkId`s:
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-node.html#cfn-managedblockchain-node-networkid */
    NetworkId: string | Intrinsic
    /**
     * - Configuration properties of a peer node.
     * - _Required_: Yes
     * - _Type_: [NodeConfiguration](./aws-properties-managedblockchain-node-nodeconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-node.html#cfn-managedblockchain-node-nodeconfiguration */
    NodeConfiguration: NodeConfiguration
  }
}
