import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A custom key-value pair associated with a resource within your organization.
 * You can attach tags to any of the following organization resources.
 * *   AWS account
 *     
 * *   Organizational unit (OU)
 *     
 * *   Organization root
 *     
 * *   Policy
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-resourcepolicy.html */

export interface Tag {
    /**
     * - The key identifier, or name, of the tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-resourcepolicy.html#cfn-organizations-resourcepolicy-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The string value that's associated with the key of the tag. You can set the value of a tag to an empty string, but you can't set the value of a tag to null.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-resourcepolicy.html#cfn-organizations-resourcepolicy-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Creates or updates a resource-based delegation policy that can be used to delegate policy management for AWS Organizations to specified member accounts to perform policy actions that are by default available only to the management account.
 * For more information about delegated policy management, see [Delegated administrator for AWS Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_delegate_policies.html) in the _AWS Organizations User Guide_.
 * You can only call this operation from the organization's management account.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-resourcepolicy.html */

export interface OrganizationsResourcePolicy extends ResourceAttributes {
    "Type": "AWS::Organizations::ResourcePolicy";
    "Properties": {
        /**
         * - The policy text of the organization resource policy. You can specify the resource policy content as a JSON object or a JSON string.
         * - _Required_: Yes
         * - _Type_: Json
         * - _Pattern_: `[\s\S]*`
         * - _Minimum_: `1`
         * - _Maximum_: `40000`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-resourcepolicy.html#cfn-organizations-resourcepolicy-content */
        "Content": any | Intrinsic;
        /**
         * - A list of tags that you want to attach to the newly created resource policy. For each tag in the list, you must specify both a tag key and a value. You can set the value to an empty string, but you can't set it to `null`. For more information about tagging, see [Tagging AWS Organizations resources](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html) in the _AWS Organizations User Guide_.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-organizations-resourcepolicy-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-resourcepolicy.html#cfn-organizations-resourcepolicy-tags */
        "Tags"?: Tag[];
    };
}