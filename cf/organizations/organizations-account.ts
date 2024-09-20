import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
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
 * *   Use the `Id` value of the `CreateAccountStatus` response element from the `CreateAccount` operation to provide as a parameter to the [`DescribeCreateAccountStatus`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeCreateAccountStatus.html) operation.
 *
 * *   Check the CloudTrail log for the `CreateAccountResult` event. For information on using CloudTrail with AWS Organizations, see [Logging and monitoring in AWS Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_security_incident-response.html#orgs_cloudtrail-integration) in the _AWS Organizations User Guide_.
 * The user who calls the API to create an account must have the `organizations:CreateAccount` permission. If you enabled all features in the organization, AWS Organizations creates the required service-linked role named `AWSServiceRoleForOrganizations`. For more information, see [AWS Organizations and service-linked roles](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html#orgs_integrate_services-using_slrs) in the _AWS Organizations User Guide_.
 * If the request includes tags, then the requester must have the `organizations:TagResource` permission.
 * AWS Organizations preconfigures the new member account with a role (named `OrganizationAccountAccessRole` by default) that grants users in the management account administrator permissions in the new member account. Principals in the management account can assume the role. AWS Organizations clones the company name and address information for the new account from the organization's management account.
 * For more information about creating accounts, see [Creating a member account in your organization](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_create.html) in the _AWS Organizations User Guide_.
 * This operation can be called only from the organization's management account.
 * **Deleting Account resources**
 * The default `DeletionPolicy` for resource `AWS::Organizations::Account` is `Retain`. For more information about how AWS CloudFormation deletes resources, see [DeletionPolicy Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html).
 * ###### Important
 *
 * *   If you include multiple accounts in a single template, you must use the `DependsOn` attribute on each account resource type so that the accounts are created sequentially. If you create multiple accounts at the same time, Organizations returns an error and the stack operation fails.
 *
 * *   You can't modify the following list of `Account` resource parameters using AWS CloudFormation updates.
 *
 *     *   AccountName
 *
 *     *   Email
 *
 *     *   RoleName
 *
 *
 *     If you attempt to update the listed parameters, CloudFormation will attempt the update, but you will receive an error message as those updates are not supported from an Organizations management account or a [registered delegated administrator](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-delegated-admin.html) account. Both the update and the update roll-back will fail, so you must skip the account resource update. To update parameters `AccountName` and `Email`, you must sign in to the AWS Management Console as the AWS account root user. For more information, see [Update the AWS account name, email address, or password for the root user](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-root-user.html) in the _AWS Account Management Reference Guide_.
 *
 * *   When you create an account in an organization using the AWS Organizations console, API, or AWS CLI commands, we don't automatically collect the information required for the account to operate as a standalone account. That includes collecting the payment method and signing the end user license agreement (EULA). If you must remove an account from your organization later, you can do so only after you provide the missing information. For more information, see [Considerations before removing an account from an organization](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_account-before-remove.html) in the _AWS Organizations User Guide_.
 *
 * *   When you create an account in an organization using AWS CloudFormation, you can't specify a value for the `CreateAccount` operation parameter `IamUserAccessToBilling`. The default value for parameter `IamUserAccessToBilling` is `ALLOW`, and IAM users and roles with the required permissions can access billing information for the new account.
 *
 * *   If you get an exception that indicates `DescribeCreateAccountStatus returns IN_PROGRESS state before time out`. You must check the account creation status using the [`DescribeCreateAccountStatus`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_DescribeCreateAccountStatus.html) operation. If the account state returns as `SUCCEEDED`, you can import the account into AWS CloudFormation management using [`resource import`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resource-import.html).
 *
 * *   If you get an exception that indicates you have exceeded your account quota for the organization, you can request an increase by using the [Service Quotas console](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_limits.html).
 *
 * *   If you get an exception that indicates the operation failed because your organization is still initializing, wait one hour and then try again. If the error persists, contact [AWS Support](https://console.aws.amazon.com/support/home#/).
 *
 * *   We don't recommend that you use the `CreateAccount` operation to create multiple temporary accounts. You can close accounts using the [`CloseAccount`](https://docs.aws.amazon.com/organizations/latest/APIReference/API_CloseAccount.html) operation or from the AWS Organizations console in the organization's management account. For information on the requirements and process for closing an account, see [Closing a member account in your organization](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_close.html) in the _AWS Organizations User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-organizations-account.html */

export interface OrganizationsAccount extends ResourceAttributes {
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
