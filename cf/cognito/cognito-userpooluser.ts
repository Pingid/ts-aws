import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The name and value of a user attribute.
 * This data type is a request parameter of [AdminUpdateUserAttributes](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUpdateUserAttributes.html) and [UpdateUserAttributes](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserAttributes.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluser.html */

export interface AttributeType {
  /**
   * - The name of the attribute.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[\p{L}\p{M}\p{S}\p{N}\p{P}]+`
   * - _Minimum_: `1`
   * - _Maximum_: `32`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluser.html#cfn-cognito-userpooluser-attributetype-name */
  Name?: string | Intrinsic
  /**
   * - The value of the attribute.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `2048`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluser.html#cfn-cognito-userpooluser-attributetype-value */
  Value?: string | Intrinsic
}

/**
 * The `AWS::Cognito::UserPoolUser` resource creates an Amazon Cognito user pool user.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluser.html */

export interface CognitoUserPoolUser extends ResourceAttributes {
  Type: 'AWS::Cognito::UserPoolUser'
  Properties: {
    /**
     * - A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers.
     * - You create custom workflows by assigning AWS Lambda functions to user pool triggers. When you use the AdminCreateUser API action, Amazon Cognito invokes the function that is assigned to the _pre sign-up_ trigger. When Amazon Cognito invokes this function, it passes a JSON payload, which the function receives as input. This payload contains a `clientMetadata` attribute, which provides the data that you assigned to the ClientMetadata parameter in your AdminCreateUser request. In your function code in AWS Lambda, you can process the `clientMetadata` value to enhance your workflow for your specific needs.
     * - For more information, see [Customizing user pool Workflows with Lambda Triggers](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html) in the _Amazon Cognito Developer Guide_.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluser.html#cfn-cognito-userpooluser-clientmetadata */
    ClientMetadata?: Record<string, string | Intrinsic>
    /**
     * - Specify `"EMAIL"` if email will be used to send the welcome message. Specify `"SMS"` if the phone number will be used. The default value is `"SMS"`. You can specify more than one value.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluser.html#cfn-cognito-userpooluser-desireddeliverymediums */
    DesiredDeliveryMediums?: (string | Intrinsic)[]
    /**
     * - This parameter is used only if the `phone_number_verified` or `email_verified` attribute is set to `True`. Otherwise, it is ignored.
     * - If this parameter is set to `True` and the phone number or email address specified in the UserAttributes parameter already exists as an alias with a different user, the API call will migrate the alias from the previous user to the newly created user. The previous user will no longer be able to log in using that alias.
     * - If this parameter is set to `False`, the API throws an `AliasExistsException` error if the alias already exists. The default value is `False`.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluser.html#cfn-cognito-userpooluser-forcealiascreation */
    ForceAliasCreation?: boolean | Intrinsic
    /**
     * - Set to `RESEND` to resend the invitation message to a user that already exists and reset the expiration limit on the user's account. Set to `SUPPRESS` to suppress sending the message. You can specify only one value.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `RESEND | SUPPRESS`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluser.html#cfn-cognito-userpooluser-messageaction */
    MessageAction?: string | Intrinsic
    /**
     * - An array of name-value pairs that contain user attributes and attribute values.
     * - _Required_: No
     * - _Type_: Array of [AttributeType](./aws-properties-cognito-userpooluser-attributetype.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluser.html#cfn-cognito-userpooluser-userattributes */
    UserAttributes?: AttributeType[]
    /**
     * - The value that you want to set as the username sign-in attribute. The following conditions apply to the username parameter.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluser.html#cfn-cognito-userpooluser-username */
    Username?: string | Intrinsic
    /**
     * - The user pool ID for the user pool where the user will be created.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\w-]+_[0-9a-zA-Z]+`
     * - _Minimum_: `1`
     * - _Maximum_: `55`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluser.html#cfn-cognito-userpooluser-userpoolid */
    UserPoolId: string | Intrinsic
    /**
     * - Temporary user attributes that contribute to the outcomes of your pre sign-up Lambda trigger. This set of key-value pairs are for custom validation of information that you collect from your users but don't need to retain.
     * - Your Lambda function can analyze this additional data and act on it. Your function might perform external API operations like logging user attributes and validation data to Amazon CloudWatch Logs. Validation data might also affect the response that your function returns to Amazon Cognito, like automatically confirming the user if they sign up from within your network.
     * - For more information about the pre sign-up Lambda trigger, see [Pre sign-up Lambda trigger](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-sign-up.html).
     * - _Required_: No
     * - _Type_: Array of [AttributeType](./aws-properties-cognito-userpooluser-attributetype.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluser.html#cfn-cognito-userpooluser-validationdata */
    ValidationData?: AttributeType[]
  }
}
