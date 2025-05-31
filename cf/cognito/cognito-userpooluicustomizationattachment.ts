import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A container for the UI customization information for the hosted UI in a user pool.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluicustomizationattachment.html */

export interface CognitoUserPoolUICustomizationAttachment extends ResourceAttributes {
    "Type": "AWS::Cognito::UserPoolUICustomizationAttachment";
    "Properties": {
        /**
         * - The app client ID for your UI customization. When this value isn't present, the customization applies to all user pool app clients that don't have client-level settings..
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[\w+]+`
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluicustomizationattachment.html#cfn-cognito-userpooluicustomizationattachment-clientid */
        "ClientId": string | Intrinsic;
        /**
         * - A plaintext CSS file that contains the custom fields that you want to apply to your user pool or app client. To download a template, go to the Amazon Cognito console. Navigate to your user pool _App clients_ tab, select _Login pages_, edit _Hosted UI (classic) style_, and select the link to `CSS template.css`.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `0`
         * - _Maximum_: `131072`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluicustomizationattachment.html#cfn-cognito-userpooluicustomizationattachment-css */
        "CSS"?: string | Intrinsic;
        /**
         * - The ID of the user pool where you want to apply branding to the classic hosted UI.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[\w-]+_[0-9a-zA-Z]+`
         * - _Minimum_: `1`
         * - _Maximum_: `55`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooluicustomizationattachment.html#cfn-cognito-userpooluicustomizationattachment-userpoolid */
        "UserPoolId": string | Intrinsic;
    };
}