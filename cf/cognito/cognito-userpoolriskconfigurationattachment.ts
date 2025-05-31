import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Exceptions to the risk evaluation configuration, including always-allow and always-block IP address ranges.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html */

export interface RiskExceptionConfigurationType {
    /**
     * - An always-block IP address list. Overrides the risk decision and always blocks authentication requests. This parameter is displayed and set in CIDR notation.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html#cfn-cognito-userpoolriskconfigurationattachment-riskexceptionconfigurationtype-blockediprangelist */
    "BlockedIPRangeList"?: (string | Intrinsic)[];
    /**
     * - An always-allow IP address list. Risk detection isn't performed on the IP addresses in this range list. This parameter is displayed and set in CIDR notation.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html#cfn-cognito-userpoolriskconfigurationattachment-riskexceptionconfigurationtype-skippediprangelist */
    "SkippedIPRangeList"?: (string | Intrinsic)[];
}

/**
 * Settings for user pool actions when Amazon Cognito detects compromised credentials with advanced security features in full-function `ENFORCED` mode.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html */

export interface CompromisedCredentialsActionsType {
    /**
     * - The action that Amazon Cognito takes when it detects compromised credentials.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `BLOCK | NO_ACTION`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html#cfn-cognito-userpoolriskconfigurationattachment-compromisedcredentialsactionstype-eventaction */
    "EventAction": string | Intrinsic;
}

/**
 * Settings for compromised-credentials actions and authentication-event sources with advanced security features in full-function `ENFORCED` mode.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html */

export interface CompromisedCredentialsRiskConfigurationType {
    /**
     * - Settings for the actions that you want your user pool to take when Amazon Cognito detects compromised credentials.
     * - _Required_: Yes
     * - _Type_: [CompromisedCredentialsActionsType](./aws-properties-cognito-userpoolriskconfigurationattachment-compromisedcredentialsactionstype.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html#cfn-cognito-userpoolriskconfigurationattachment-compromisedcredentialsriskconfigurationtype-actions */
    "Actions": CompromisedCredentialsActionsType;
    /**
     * - Settings for the sign-in activity where you want to configure compromised-credentials actions. Defaults to all events.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html#cfn-cognito-userpoolriskconfigurationattachment-compromisedcredentialsriskconfigurationtype-eventfilter */
    "EventFilter"?: (string | Intrinsic)[];
}

/**
 * The automated response to a risk level for adaptive authentication in full-function, or `ENFORCED`, mode. You can assign an action to each risk level that advanced security features evaluates.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html */

export interface AccountTakeoverActionType {
    /**
     * - The action to take for the attempted account takeover action for the associated risk level. Valid values are as follows:
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `BLOCK | MFA_IF_CONFIGURED | MFA_REQUIRED | NO_ACTION`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html#cfn-cognito-userpoolriskconfigurationattachment-accounttakeoveractiontype-eventaction */
    "EventAction": string | Intrinsic;
    /**
     * - Determines whether Amazon Cognito sends a user a notification message when your user pools assesses a user's session at the associated risk level.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html#cfn-cognito-userpoolriskconfigurationattachment-accounttakeoveractiontype-notify */
    "Notify": boolean | Intrinsic;
}

/**
 * A list of account-takeover actions for each level of risk that Amazon Cognito might assess with advanced security features.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html */

export interface AccountTakeoverActionsType {
    /**
     * - The action that you assign to a high-risk assessment by threat protection.
     * - _Required_: No
     * - _Type_: [AccountTakeoverActionType](./aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoveractiontype.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html#cfn-cognito-userpoolriskconfigurationattachment-accounttakeoveractionstype-highaction */
    "HighAction"?: AccountTakeoverActionType;
    /**
     * - The action that you assign to a low-risk assessment by threat protection.
     * - _Required_: No
     * - _Type_: [AccountTakeoverActionType](./aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoveractiontype.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html#cfn-cognito-userpoolriskconfigurationattachment-accounttakeoveractionstype-lowaction */
    "LowAction"?: AccountTakeoverActionType;
    /**
     * - The action that you assign to a medium-risk assessment by threat protection.
     * - _Required_: No
     * - _Type_: [AccountTakeoverActionType](./aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoveractiontype.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html#cfn-cognito-userpoolriskconfigurationattachment-accounttakeoveractionstype-mediumaction */
    "MediumAction"?: AccountTakeoverActionType;
}

/**
 * The template for email messages that advanced security features sends to a user when your threat protection automated response has a _Notify_ action.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html */

export interface NotifyEmailType {
    /**
     * - The body of an email notification formatted in HTML. Choose an `HtmlBody` or a `TextBody` to send an HTML-formatted or plaintext message, respectively.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[\p{L}\p{M}\p{S}\p{N}\p{P}\s*]+`
     * - _Minimum_: `6`
     * - _Maximum_: `20000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html#cfn-cognito-userpoolriskconfigurationattachment-notifyemailtype-htmlbody */
    "HtmlBody"?: string | Intrinsic;
    /**
     * - The subject of the threat protection email notification.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\p{L}\p{M}\p{S}\p{N}\p{P}\s]+`
     * - _Minimum_: `1`
     * - _Maximum_: `140`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html#cfn-cognito-userpoolriskconfigurationattachment-notifyemailtype-subject */
    "Subject": string | Intrinsic;
    /**
     * - The body of an email notification formatted in plaintext. Choose an `HtmlBody` or a `TextBody` to send an HTML-formatted or plaintext message, respectively.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[\p{L}\p{M}\p{S}\p{N}\p{P}\s*]+`
     * - _Minimum_: `6`
     * - _Maximum_: `20000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html#cfn-cognito-userpoolriskconfigurationattachment-notifyemailtype-textbody */
    "TextBody"?: string | Intrinsic;
}

/**
 * The configuration for Amazon SES email messages that advanced security features sends to a user when your adaptive authentication automated response has a _Notify_ action.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html */

export interface NotifyConfigurationType {
    /**
     * - The template for the email message that your user pool sends when a detected risk event is blocked.
     * - _Required_: No
     * - _Type_: [NotifyEmailType](./aws-properties-cognito-userpoolriskconfigurationattachment-notifyemailtype.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html#cfn-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-blockemail */
    "BlockEmail"?: NotifyEmailType;
    /**
     * - The email address that sends the email message. The address must be either individually verified with Amazon Simple Email Service, or from a domain that has been verified with Amazon SES.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `131072`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html#cfn-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-from */
    "From"?: string | Intrinsic;
    /**
     * - The template for the email message that your user pool sends when MFA is challenged in response to a detected risk.
     * - _Required_: No
     * - _Type_: [NotifyEmailType](./aws-properties-cognito-userpoolriskconfigurationattachment-notifyemailtype.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html#cfn-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-mfaemail */
    "MfaEmail"?: NotifyEmailType;
    /**
     * - The template for the email message that your user pool sends when no action is taken in response to a detected risk.
     * - _Required_: No
     * - _Type_: [NotifyEmailType](./aws-properties-cognito-userpoolriskconfigurationattachment-notifyemailtype.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html#cfn-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-noactionemail */
    "NoActionEmail"?: NotifyEmailType;
    /**
     * - The reply-to email address of an email template.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `131072`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html#cfn-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-replyto */
    "ReplyTo"?: string | Intrinsic;
    /**
     * - The Amazon Resource Name (ARN) of the identity that is associated with the sending authorization policy. This identity permits Amazon Cognito to send for the email address specified in the `From` parameter.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `arn:[\w+=/,.@-]+:[\w+=/,.@-]+:([\w+=/,.@-]*)?:[0-9]+:[\w+=/,.@-]+(:[\w+=/,.@-]+)?(:[\w+=/,.@-]+)?`
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html#cfn-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype-sourcearn */
    "SourceArn": string | Intrinsic;
}

/**
 * The settings for automated responses and notification templates for adaptive authentication with advanced security features.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html */

export interface AccountTakeoverRiskConfigurationType {
    /**
     * - A list of account-takeover actions for each level of risk that Amazon Cognito might assess with threat protection.
     * - _Required_: Yes
     * - _Type_: [AccountTakeoverActionsType](./aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoveractionstype.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html#cfn-cognito-userpoolriskconfigurationattachment-accounttakeoverriskconfigurationtype-actions */
    "Actions": AccountTakeoverActionsType;
    /**
     * - The settings for composing and sending an email message when threat protection assesses a risk level with adaptive authentication. When you choose to notify users in `AccountTakeoverRiskConfiguration`, Amazon Cognito sends an email message using the method and template that you set with this data type.
     * - _Required_: No
     * - _Type_: [NotifyConfigurationType](./aws-properties-cognito-userpoolriskconfigurationattachment-notifyconfigurationtype.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html#cfn-cognito-userpoolriskconfigurationattachment-accounttakeoverriskconfigurationtype-notifyconfiguration */
    "NotifyConfiguration"?: NotifyConfigurationType;
}

/**
 * The `AWS::Cognito::UserPoolRiskConfigurationAttachment` resource sets the risk configuration that is used for Amazon Cognito advanced security features.
 * You can specify risk configuration for a single client (with a specific `clientId`) or for all clients (by setting the `clientId` to `ALL`). If you specify `ALL`, the default configuration is used for every client that has had no risk configuration set previously. If you specify risk configuration for a particular client, it no longer falls back to the `ALL` configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html */

export interface CognitoUserPoolRiskConfigurationAttachment extends ResourceAttributes {
    "Type": "AWS::Cognito::UserPoolRiskConfigurationAttachment";
    "Properties": {
        /**
         * - The settings for automated responses and notification templates for adaptive authentication with threat protection.
         * - _Required_: No
         * - _Type_: [AccountTakeoverRiskConfigurationType](./aws-properties-cognito-userpoolriskconfigurationattachment-accounttakeoverriskconfigurationtype.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html#cfn-cognito-userpoolriskconfigurationattachment-accounttakeoverriskconfiguration */
        "AccountTakeoverRiskConfiguration"?: AccountTakeoverRiskConfigurationType;
        /**
         * - The app client where this configuration is applied. When this parameter isn't present, the risk configuration applies to all user pool app clients that don't have client-level settings.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[\w+]+`
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html#cfn-cognito-userpoolriskconfigurationattachment-clientid */
        "ClientId": string | Intrinsic;
        /**
         * - Settings for compromised-credentials actions and authentication types with threat protection in full-function `ENFORCED` mode.
         * - _Required_: No
         * - _Type_: [CompromisedCredentialsRiskConfigurationType](./aws-properties-cognito-userpoolriskconfigurationattachment-compromisedcredentialsriskconfigurationtype.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html#cfn-cognito-userpoolriskconfigurationattachment-compromisedcredentialsriskconfiguration */
        "CompromisedCredentialsRiskConfiguration"?: CompromisedCredentialsRiskConfigurationType;
        /**
         * - Exceptions to the risk evaluation configuration, including always-allow and always-block IP address ranges.
         * - _Required_: No
         * - _Type_: [RiskExceptionConfigurationType](./aws-properties-cognito-userpoolriskconfigurationattachment-riskexceptionconfigurationtype.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html#cfn-cognito-userpoolriskconfigurationattachment-riskexceptionconfiguration */
        "RiskExceptionConfiguration"?: RiskExceptionConfigurationType;
        /**
         * - The ID of the user pool that has the risk configuration applied.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[\w-]+_[0-9a-zA-Z]+`
         * - _Minimum_: `1`
         * - _Maximum_: `55`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolriskconfigurationattachment.html#cfn-cognito-userpoolriskconfigurationattachment-userpoolid */
        "UserPoolId": string | Intrinsic;
    };
}