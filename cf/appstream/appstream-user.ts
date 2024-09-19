import type { Intrinsic } from '../intrinsic/index.js' /**
 * The `AWS::AppStream::User` resource creates a new user in the AppStream 2.0 user pool.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-user.html */

export interface AppStreamUser {
  Type: 'AWS::AppStream::User'
  Properties: {
    /**
     * - The authentication type for the user. You must specify USERPOOL.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `API | SAML | USERPOOL | AWS_AD`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-user.html#cfn-appstream-user-authenticationtype */
    AuthenticationType: string | Intrinsic
    /**
     * - The first name, or given name, of the user.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[A-Za-z0-9_\-\s]+$`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-user.html#cfn-appstream-user-firstname */
    FirstName?: string | Intrinsic
    /**
     * - The last name, or surname, of the user.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[A-Za-z0-9_\-\s]+$`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-user.html#cfn-appstream-user-lastname */
    LastName?: string | Intrinsic
    /**
     * - The action to take for the welcome email that is sent to a user after the user is created in the user pool. If you specify SUPPRESS, no email is sent. If you specify RESEND, do not specify the first name or last name of the user. If the value is null, the email is sent.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `SUPPRESS | RESEND`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-user.html#cfn-appstream-user-messageaction */
    MessageAction?: string | Intrinsic
    /**
     * - The email address of the user.
     * - Users' email addresses are case-sensitive. During login, if they specify an email address that doesn't use the same capitalization as the email address specified when their user pool account was created, a "user does not exist" error message displays.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\p{L}\p{M}\p{S}\p{N}\p{P}]+`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-user.html#cfn-appstream-user-username */
    UserName: string | Intrinsic
  }
}
