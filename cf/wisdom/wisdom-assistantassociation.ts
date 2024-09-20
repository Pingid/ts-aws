import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A union type that currently has a single argument, which is the knowledge base ID.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistantassociation.html */

export interface AssociationData {
  /**
   * - The identifier of the knowledge base.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistantassociation.html#cfn-wisdom-assistantassociation-associationdata-knowledgebaseid */
  KnowledgeBaseId: string | Intrinsic
}

/**
 * Metadata to assign to the Wisdom assistant association. Tags help organize and categorize your Amazon Connect Wisdom resources. Each tag consists of a key and an optional value, both of which you define.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistantassociation.html */

export interface Tag {
  /**
   * - The key-value string map. The valid character set is `[a-zA-Z+-=._:/]`. The tag key can be up to 128 characters and must not start with `aws:`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^(?!aws:)[a-zA-Z+-=._:/]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistantassociation.html#cfn-wisdom-assistantassociation-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag value can be up to 256 characters.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistantassociation.html#cfn-wisdom-assistantassociation-tag-value */
  Value: string | Intrinsic
}

/**
 * Specifies an association between an Amazon Connect Wisdom assistant and another resource. Currently, the only supported association is with a knowledge base. An assistant can have only a single association.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistantassociation.html */

export interface WisdomAssistantAssociation extends ResourceAttributes {
  Type: 'AWS::Wisdom::AssistantAssociation'
  Properties: {
    /**
     * - The identifier of the Wisdom assistant.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistantassociation.html#cfn-wisdom-assistantassociation-assistantid */
    AssistantId: string | Intrinsic
    /**
     * - The identifier of the associated resource.
     * - _Required_: Yes
     * - _Type_: [AssociationData](./aws-properties-wisdom-assistantassociation-associationdata.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistantassociation.html#cfn-wisdom-assistantassociation-association */
    Association: AssociationData
    /**
     * - The type of association.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `KNOWLEDGE_BASE`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistantassociation.html#cfn-wisdom-assistantassociation-associationtype */
    AssociationType: string | Intrinsic
    /**
     * - The tags used to organize, track, or control access for this resource.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-wisdom-assistantassociation-tag.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-assistantassociation.html#cfn-wisdom-assistantassociation-tags */
    Tags?: Tag[]
  }
}
