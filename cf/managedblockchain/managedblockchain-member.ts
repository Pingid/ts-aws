import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Configuration properties for Hyperledger Fabric for a member in a Managed Blockchain network that is using the Hyperledger Fabric framework.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html */

export interface MemberFabricConfiguration {
    /**
     * - The password for the member's initial administrative user. The `AdminPassword` must be at least 8 characters long and no more than 32 characters. It must contain at least one uppercase letter, one lowercase letter, and one digit. It cannot have a single quotation mark (‘), a double quotation marks (“), a forward slash(/), a backward slash(\\), @, or a space.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*[@'\\"/])[a-zA-Z0-9\S]*$`
     * - _Minimum_: `8`
     * - _Maximum_: `32`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html#cfn-managedblockchain-member-memberfabricconfiguration-adminpassword */
    "AdminPassword": string | Intrinsic;
    /**
     * - The user name for the member's initial administrative user.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z][a-zA-Z0-9]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `16`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html#cfn-managedblockchain-member-memberfabricconfiguration-adminusername */
    "AdminUsername": string | Intrinsic;
}

/**
 * Configuration properties relevant to a member for the blockchain framework that the Managed Blockchain network uses.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html */

export interface MemberFrameworkConfiguration {
    /**
     * - Configuration properties for Hyperledger Fabric.
     * - _Required_: No
     * - _Type_: [MemberFabricConfiguration](./aws-properties-managedblockchain-member-memberfabricconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html#cfn-managedblockchain-member-memberframeworkconfiguration-memberfabricconfiguration */
    "MemberFabricConfiguration"?: MemberFabricConfiguration;
}

/**
 * Configuration properties of the member.
 * Applies only to Hyperledger Fabric.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html */

export interface MemberConfiguration {
    /**
     * - An optional description of the member.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html#cfn-managedblockchain-member-memberconfiguration-description */
    "Description"?: string | Intrinsic;
    /**
     * - Configuration properties of the blockchain framework relevant to the member.
     * - _Required_: No
     * - _Type_: [MemberFrameworkConfiguration](./aws-properties-managedblockchain-member-memberframeworkconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html#cfn-managedblockchain-member-memberconfiguration-memberframeworkconfiguration */
    "MemberFrameworkConfiguration"?: MemberFrameworkConfiguration;
    /**
     * - The name of the member.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?!-|[0-9])(?!.*-$)(?!.*?--)[a-zA-Z0-9-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html#cfn-managedblockchain-member-memberconfiguration-name */
    "Name": string | Intrinsic;
}

/**
 * Hyperledger Fabric configuration properties for the network.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html */

export interface NetworkFabricConfiguration {
    /**
     * - The edition of Amazon Managed Blockchain that the network uses. Valid values are `standard` and `starter`. For more information, see [Amazon Managed Blockchain Pricing](https://aws.amazon.com/managed-blockchain/pricing/)
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `STARTER | STANDARD`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html#cfn-managedblockchain-member-networkfabricconfiguration-edition */
    "Edition": string | Intrinsic;
}

/**
 * Configuration properties relevant to the network for the blockchain framework that the network uses.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html */

export interface NetworkFrameworkConfiguration {
    /**
     * - Configuration properties for Hyperledger Fabric for a member in a Managed Blockchain network that is using the Hyperledger Fabric framework.
     * - _Required_: No
     * - _Type_: [NetworkFabricConfiguration](./aws-properties-managedblockchain-member-networkfabricconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html#cfn-managedblockchain-member-networkframeworkconfiguration-networkfabricconfiguration */
    "NetworkFabricConfiguration"?: NetworkFabricConfiguration;
}

/**
 * A policy type that defines the voting rules for the network. The rules decide if a proposal is approved. Approval may be based on criteria such as the percentage of `YES` votes and the duration of the proposal. The policy applies to all proposals and is specified when the network is created.
 * Applies only to Hyperledger Fabric.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html */

export interface ApprovalThresholdPolicy {
    /**
     * - The duration from the time that a proposal is created until it expires. If members cast neither the required number of `YES` votes to approve the proposal nor the number of `NO` votes required to reject it before the duration expires, the proposal is `EXPIRED` and `ProposalActions` aren't carried out.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `168`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html#cfn-managedblockchain-member-approvalthresholdpolicy-proposaldurationinhours */
    "ProposalDurationInHours"?: number | Intrinsic;
    /**
     * - Determines whether the vote percentage must be greater than the `ThresholdPercentage` or must be greater than or equal to the `ThresholdPercentage` to be approved.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `GREATER_THAN | GREATER_THAN_OR_EQUAL_TO`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html#cfn-managedblockchain-member-approvalthresholdpolicy-thresholdcomparator */
    "ThresholdComparator"?: string | Intrinsic;
    /**
     * - The percentage of votes among all members that must be `YES` for a proposal to be approved. For example, a `ThresholdPercentage` value of `50` indicates 50%. The `ThresholdComparator` determines the precise comparison. If a `ThresholdPercentage` value of `50` is specified on a network with 10 members, along with a `ThresholdComparator` value of `GREATER_THAN`, this indicates that 6 `YES` votes are required for the proposal to be approved.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html#cfn-managedblockchain-member-approvalthresholdpolicy-thresholdpercentage */
    "ThresholdPercentage"?: number | Intrinsic;
}

/**
 * The voting rules for the network to decide if a proposal is accepted
 * Applies only to Hyperledger Fabric.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html */

export interface VotingPolicy {
    /**
     * - Defines the rules for the network for voting on proposals, such as the percentage of `YES` votes required for the proposal to be approved and the duration of the proposal. The policy applies to all proposals and is specified when the network is created.
     * - _Required_: No
     * - _Type_: [ApprovalThresholdPolicy](./aws-properties-managedblockchain-member-approvalthresholdpolicy.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html#cfn-managedblockchain-member-votingpolicy-approvalthresholdpolicy */
    "ApprovalThresholdPolicy"?: ApprovalThresholdPolicy;
}

/**
 * Configuration properties of the network to which the member belongs.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html */

export interface NetworkConfiguration {
    /**
     * - Attributes of the blockchain framework for the network.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html#cfn-managedblockchain-member-networkconfiguration-description */
    "Description"?: string | Intrinsic;
    /**
     * - The blockchain framework that the network uses.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `HYPERLEDGER_FABRIC | ETHEREUM`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html#cfn-managedblockchain-member-networkconfiguration-framework */
    "Framework": string | Intrinsic;
    /**
     * - The version of the blockchain framework that the network uses.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `8`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html#cfn-managedblockchain-member-networkconfiguration-frameworkversion */
    "FrameworkVersion": string | Intrinsic;
    /**
     * - The name of the network.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `.*\S.*`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html#cfn-managedblockchain-member-networkconfiguration-name */
    "Name": string | Intrinsic;
    /**
     * - Configuration properties relevant to the network for the blockchain framework that the network uses.
     * - _Required_: No
     * - _Type_: [NetworkFrameworkConfiguration](./aws-properties-managedblockchain-member-networkframeworkconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html#cfn-managedblockchain-member-networkconfiguration-networkframeworkconfiguration */
    "NetworkFrameworkConfiguration"?: NetworkFrameworkConfiguration;
    /**
     * - The voting rules that the network uses to decide if a proposal is accepted.
     * - _Required_: Yes
     * - _Type_: [VotingPolicy](./aws-properties-managedblockchain-member-votingpolicy.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html#cfn-managedblockchain-member-networkconfiguration-votingpolicy */
    "VotingPolicy": VotingPolicy;
}

/**
 * Creates a member within a Managed Blockchain network.
 * Applies only to Hyperledger Fabric.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html */

export interface ManagedBlockchainMember extends ResourceAttributes {
    "Type": "AWS::ManagedBlockchain::Member";
    "Properties": {
        /**
         * - The unique identifier of the invitation to join the network sent to the account that creates the member.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `32`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html#cfn-managedblockchain-member-invitationid */
        "InvitationId"?: string | Intrinsic;
        /**
         * - Configuration properties of the member.
         * - _Required_: Yes
         * - _Type_: [MemberConfiguration](./aws-properties-managedblockchain-member-memberconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html#cfn-managedblockchain-member-memberconfiguration */
        "MemberConfiguration": MemberConfiguration;
        /**
         * - Configuration properties of the network to which the member belongs.
         * - _Required_: No
         * - _Type_: [NetworkConfiguration](./aws-properties-managedblockchain-member-networkconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html#cfn-managedblockchain-member-networkconfiguration */
        "NetworkConfiguration"?: NetworkConfiguration;
        /**
         * - The unique identifier of the network to which the member belongs.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html#cfn-managedblockchain-member-networkid */
        "NetworkId"?: string | Intrinsic;
    };
}