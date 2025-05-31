import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The metadata that you apply to a resource to help you categorize and organize it. Each tag consists of a key and an optional value, both of which you define. For more information about tags, see [What is Tag Editor](https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html) in the _Tagging AWS Resources and Tag Editor User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-graph.html */

export interface Tag {
    /**
     * - One part of a key-value pair that makes up a tag. A key is a general label that acts like a category for more specific tag values.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-graph.html#cfn-detective-graph-tag-key */
    "Key"?: string | Intrinsic;
    /**
     * - The optional part of a key-value pair that makes up a tag. A value acts as a descriptor in a tag category (key).
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-graph.html#cfn-detective-graph-tag-value */
    "Value"?: string | Intrinsic;
}

/**
 * The `AWS::Detective::Graph` resource is an Amazon Detective resource type that creates a Detective behavior graph. The requesting account becomes the administrator account for the behavior graph.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-graph.html */

export interface DetectiveGraph extends ResourceAttributes {
    "Type": "AWS::Detective::Graph";
    "Properties": {
        /**
         * - Indicates whether to automatically enable new organization accounts as member accounts in the organization behavior graph.
         * - By default, this property is set to `false`. If you want to change the value of this property, you must be the Detective administrator for the organization. For more information on setting a Detective administrator account, see [AWS::Detective::OrganizationAdmin](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-organizationadmin.html).
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-graph.html#cfn-detective-graph-autoenablemembers */
        "AutoEnableMembers"?: boolean | Intrinsic;
        /**
         * - The tag values to assign to the new behavior graph.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-detective-graph-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-detective-graph.html#cfn-detective-graph-tags */
        "Tags"?: Tag[];
    };
}