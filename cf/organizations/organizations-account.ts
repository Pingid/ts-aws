import type { Intrinsic } from '../intrinsic/index.js' /**
 * A custom key-value pair associated with a resource within your organization.
 * You can attach tags to any of the following organization resources.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-account.html */

export interface Tag {
  /**
   * - The key identifier, or name, of the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[\s\S]*`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-account.html#cfn-organizations-account-tag-key */
  Key: string | Intrinsic
  /**
   * - The string value that's associated with the key of the tag. You can set the value of a tag to an empty string, but you can't set the value of a tag to null.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[\s\S]*`
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-account.html#cfn-organizations-account-tag-value */
  Value: string | Intrinsic
}

/**
 * Creates an AWS account that is automatically a member of the organization whose credentials made the request.
 * AWS CloudFormation uses the [`CreateAccount`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_CreateAccount.html) operation to create accounts. This is an asynchronous request that AWS performs in the background. Because `CreateAccount` operates asynchronously, it can return a successful completion message even though account initialization might still be in progress. You might need to wait a few minutes before you can successfully access the account. To check the status of the request, do one of the following:
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-account.html */

export interface OrganizationsAccount {
  Type: 'AWS::Organizations::Account'
  Properties: {
    /**
     * - The account name given to the account when it was created.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\u0020-\u007E]+`
     * - _Minimum_: `1`
     * - _Maximum_: `50`
     * - _Update requires_: Updates are not supported.
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-account.html#cfn-organizations-account-accountname */
    AccountName: string | Intrinsic
    /**
     * - The email address associated with the AWS account.
     * - The [regex pattern](http://wikipedia.org/wiki/regex) for this parameter is a string of characters that represents a standard internet email address.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[^\s@]+@[^\s@]+\.[^\s@]+`
     * - _Minimum_: `6`
     * - _Maximum_: `64`
     * - _Update requires_: Updates are not supported.
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-account.html#cfn-organizations-account-email */
    Email: string | Intrinsic
    /**
     * - The unique identifier (ID) of the root or organizational unit (OU) that you want to create the new account in. If you don't specify this parameter, the `ParentId` defaults to the root ID.
     * - This parameter only accepts a string array with one string value.
     * - The [regex pattern](http://wikipedia.org/wiki/regex) for a parent ID string requires one of the following:
     * - _Required_: No
     * - _Type_: Array of String
     * - _Pattern_: `^(r-[0-9a-z]{4,32})|(ou-[0-9a-z]{4,32}-[a-z0-9]{8,32})$`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-account.html#cfn-organizations-account-parentids */
    ParentIds?: (string | Intrinsic)[]
    /**
     * - The name of an IAM role that AWS Organizations automatically preconfigures in the new member account. This role trusts the management account, allowing users in the management account to assume the role, as permitted by the management account administrator. The role has administrator permissions in the new member account.
     * - If you don't specify this parameter, the role name defaults to `OrganizationAccountAccessRole`.
     * - For more information about how to use this role to access the member account, see the following links:
     * - The [regex pattern](http://wikipedia.org/wiki/regex) that is used to validate this parameter. The pattern can include uppercase letters, lowercase letters, digits with no spaces, and any of the following characters: =,.@-
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[\w+=,.@-]{1,64}`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: Updates are not supported.
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-account.html#cfn-organizations-account-rolename */
    RoleName?: string | Intrinsic
    /**
     * - A list of tags that you want to attach to the newly created account. For each tag in the list, you must specify both a tag key and a value. You can set the value to an empty string, but you can't set it to `null`. For more information about tagging, see [Tagging AWS Organizations resources](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_tagging.html) in the AWS Organizations User Guide.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-organizations-account-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-account.html#cfn-organizations-account-tags */
    Tags?: Tag[]
  }
}
