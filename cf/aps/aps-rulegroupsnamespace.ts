import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A tag associated with a resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-rulegroupsnamespace.html */

export interface Tag {
  /**
   * - The key of the tag. Must not begin with `aws:`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-rulegroupsnamespace.html#cfn-aps-rulegroupsnamespace-tag-key */
  Key: string | Intrinsic
  /**
   * - The value of the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-rulegroupsnamespace.html#cfn-aps-rulegroupsnamespace-tag-value */
  Value: string | Intrinsic
}

/**
 * The definition of a rule groups namespace in an Amazon Managed Service for Prometheus workspace. A rule groups namespace is associated with exactly one rules file. A workspace can have multiple rule groups namespaces. For more information about rules files, see [Creating a rules file](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-ruler-rulesfile.html), in the _Amazon Managed Service for Prometheus User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-rulegroupsnamespace.html */

export interface APSRuleGroupsNamespace extends ResourceAttributes {
  Type: 'AWS::APS::RuleGroupsNamespace'
  Properties: {
    /**
     * - The rules file used in the namespace.
     * - For more details about the rules file, see [Creating a rules file](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-ruler-rulesfile.html) in the _Amazon Managed Service for Prometheus User Guide_.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-rulegroupsnamespace.html#cfn-aps-rulegroupsnamespace-data */
    Data: string | Intrinsic
    /**
     * - The name of the rule groups namespace.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-rulegroupsnamespace.html#cfn-aps-rulegroupsnamespace-name */
    Name: string | Intrinsic
    /**
     * - The list of tag keys and values that are associated with the rule groups namespace.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-aps-rulegroupsnamespace-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-rulegroupsnamespace.html#cfn-aps-rulegroupsnamespace-tags */
    Tags?: Tag[]
    /**
     * - The ID of the workspace to add the rule groups namespace.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:(aws|aws-us-gov|aws-cn):aps:[a-z0-9-]+:[0-9]+:workspace/[a-zA-Z0-9-]+$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-rulegroupsnamespace.html#cfn-aps-rulegroupsnamespace-workspace */
    Workspace: string | Intrinsic
  }
}
