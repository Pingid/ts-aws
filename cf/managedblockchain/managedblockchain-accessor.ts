import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `Tag` property type specifies Property description not available. for an [AWS::ManagedBlockchain::Accessor](./aws-resource-managedblockchain-accessor.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-accessor.html */

export interface Tag {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `127`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-accessor.html#cfn-managedblockchain-accessor-tag-key */
  Key: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-accessor.html#cfn-managedblockchain-accessor-tag-value */
  Value: string | Intrinsic
}

/**
 * Creates a new accessor for use with Amazon Managed Blockchain service that supports token based access. The accessor contains information required for token based access.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-accessor.html */

export interface ManagedBlockchainAccessor extends ResourceAttributes {
  Type: 'AWS::ManagedBlockchain::Accessor'
  Properties: {
    /**
     * - The type of the accessor.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `BILLING_TOKEN`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-accessor.html#cfn-managedblockchain-accessor-accessortype */
    AccessorType: string | Intrinsic
    /**
     * - The blockchain network that the `Accessor` token is created for.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ETHEREUM_GOERLI | ETHEREUM_MAINNET | ETHEREUM_MAINNET_AND_GOERLI | POLYGON_MAINNET | POLYGON_MUMBAI`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-accessor.html#cfn-managedblockchain-accessor-networktype */
    NetworkType?: string | Intrinsic
    /**
     * - The tags assigned to the Accessor.
     * - For more information about tags, see [Tagging Resources](https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html) in the _Amazon Managed Blockchain Ethereum Developer Guide_, or [Tagging Resources](https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html) in the _Amazon Managed Blockchain Hyperledger Fabric Developer Guide_.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-managedblockchain-accessor-tag.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-accessor.html#cfn-managedblockchain-accessor-tags */
    Tags?: Tag[]
  }
}
