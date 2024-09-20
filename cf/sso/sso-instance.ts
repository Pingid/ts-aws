import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A set of key-value pairs that are used to manage the resource. Tags can only be applied to permission sets and cannot be applied to corresponding roles that IAM Identity Center creates in AWS accounts.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-instance.html */

export interface Tag {
  /**
   * - The key for the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[\w+=,.@-]+`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-instance.html#cfn-sso-instance-tag-key */
  Key: string | Intrinsic
  /**
   * - The value of the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[\w+=,.@-]+`
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-instance.html#cfn-sso-instance-tag-value */
  Value: string | Intrinsic
}

/**
 * Creates an instance of IAM Identity Center for a standalone AWS account that is not managed by AWS Organizations or a member AWS account in an organization. You can create only one instance per account and across all AWS Regions.
 * The CreateInstance request is rejected if the following apply:
 * *   The instance is created within the organization management account.
 *
 * *   An instance already exists in the same account.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-instance.html */

export interface SSOInstance extends ResourceAttributes {
  Type: 'AWS::SSO::Instance'
  Properties: {
    /**
     * - The name of the Identity Center instance.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\w+=,.@-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `32`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-instance.html#cfn-sso-instance-name */
    Name?: string | Intrinsic
    /**
     * - Specifies tags to be attached to the instance of IAM Identity Center.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-sso-instance-tag.html)
     * - _Maximum_: `75`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-instance.html#cfn-sso-instance-tags */
    Tags?: Tag[]
  }
}
