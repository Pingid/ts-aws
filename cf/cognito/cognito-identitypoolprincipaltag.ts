import type { Intrinsic } from '../intrinsic/index.js' /**
 * A list of the identity pool principal tag assignments for attributes for access control.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolprincipaltag.html */

export interface CognitoIdentityPoolPrincipalTag {
  Type: 'AWS::Cognito::IdentityPoolPrincipalTag'
  Properties: {
    /**
     * - The identity pool that you want to associate with this principal tag map.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolprincipaltag.html#cfn-cognito-identitypoolprincipaltag-identitypoolid */
    IdentityPoolId: string | Intrinsic
    /**
     * - The identity pool identity provider (IdP) that you want to associate with this principal tag map.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolprincipaltag.html#cfn-cognito-identitypoolprincipaltag-identityprovidername */
    IdentityProviderName: string | Intrinsic
    /**
     * - A JSON-formatted list of user claims and the principal tags that you want to associate with them. When Amazon Cognito requests credentials, it sets the value of the principal tag to the value of the user's claim.
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolprincipaltag.html#cfn-cognito-identitypoolprincipaltag-principaltags */
    PrincipalTags?: any | Intrinsic
    /**
     * - Use a default set of mappings between claims and tags for this provider, instead of a custom map.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-identitypoolprincipaltag.html#cfn-cognito-identitypoolprincipaltag-usedefaults */
    UseDefaults?: boolean | Intrinsic
  }
}
