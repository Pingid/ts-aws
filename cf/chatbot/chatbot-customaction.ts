import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * ###### Note
 * 
 * AWS Chatbot is now Amazon Q Developer. [Learn more](https://docs.aws.amazon.com/chatbot/latest/adminguide/service-rename.html)
 * 
 * `Type` attribute values remain unchanged.
 * The definition of the command to run when invoked as an alias or as an action button.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-customaction.html */

export interface CustomActionDefinition {
    /**
     * - The command string to run which may include variables by prefixing with a dollar sign ($).
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `5000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-customaction.html#cfn-chatbot-customaction-customactiondefinition-commandtext */
    "CommandText": string | Intrinsic;
}

/**
 * ###### Note
 * 
 * AWS Chatbot is now Amazon Q Developer. [Learn more](https://docs.aws.amazon.com/chatbot/latest/adminguide/service-rename.html)
 * 
 * `Type` attribute values remain unchanged.
 * A map of tags assigned to a resource. A tag is a string-to-string map of key-value pairs.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-customaction.html */

export interface Tag {
    /**
     * - A string used to identify this tag. You can specify a maximum of 128 characters for a tag key. Tags owned by Amazon Web Services (AWS) have the reserved prefix: `aws:`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-customaction.html#cfn-chatbot-customaction-tag-key */
    "Key": string | Intrinsic;
    /**
     * - A string containing the value for this tag. You can specify a maximum of 256 characters for a tag value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-customaction.html#cfn-chatbot-customaction-tag-value */
    "Value": string | Intrinsic;
}

/**
 * ###### Note
 * 
 * AWS Chatbot is now Amazon Q Developer. [Learn more](https://docs.aws.amazon.com/chatbot/latest/adminguide/service-rename.html)
 * 
 * `Type` attribute values remain unchanged.
 * A criteria for when a button should be shown based on values in the notification.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-customaction.html */

export interface CustomActionAttachmentCriteria {
    /**
     * - The operation to perform on the named variable.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `HAS_VALUE | EQUALS`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-customaction.html#cfn-chatbot-customaction-customactionattachmentcriteria-operator */
    "Operator": string | Intrinsic;
    /**
     * - A value that is compared with the actual value of the variable based on the behavior of the operator.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-customaction.html#cfn-chatbot-customaction-customactionattachmentcriteria-value */
    "Value"?: string | Intrinsic;
    /**
     * - The name of the variable to operate on.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-customaction.html#cfn-chatbot-customaction-customactionattachmentcriteria-variablename */
    "VariableName": string | Intrinsic;
}

/**
 * ###### Note
 * 
 * AWS Chatbot is now Amazon Q Developer. [Learn more](https://docs.aws.amazon.com/chatbot/latest/adminguide/service-rename.html)
 * 
 * `Type` attribute values remain unchanged.
 * Defines when a custom action button should be attached to a notification.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-customaction.html */

export interface CustomActionAttachment {
    /**
     * - The text of the button that appears on the notification.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\S\s]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-customaction.html#cfn-chatbot-customaction-customactionattachment-buttontext */
    "ButtonText"?: string | Intrinsic;
    /**
     * - The criteria for when a button should be shown based on values in the notification.
     * - _Required_: No
     * - _Type_: Array of [CustomActionAttachmentCriteria](./aws-properties-chatbot-customaction-customactionattachmentcriteria.html)
     * - _Minimum_: `1`
     * - _Maximum_: `5`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-customaction.html#cfn-chatbot-customaction-customactionattachment-criteria */
    "Criteria"?: CustomActionAttachmentCriteria[];
    /**
     * - The type of notification that the custom action should be attached to.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-customaction.html#cfn-chatbot-customaction-customactionattachment-notificationtype */
    "NotificationType"?: string | Intrinsic;
    /**
     * - The variables to extract from the notification.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `.+`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-customaction.html#cfn-chatbot-customaction-customactionattachment-variables */
    "Variables"?: Record<string, string | Intrinsic>;
}

/**
 * ###### Note
 * 
 * AWS Chatbot is now Amazon Q Developer. [Learn more](https://docs.aws.amazon.com/chatbot/latest/adminguide/service-rename.html)
 * 
 * `Type` attribute values remain unchanged.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-customaction.html */

export interface ChatbotCustomAction extends ResourceAttributes {
    "Type": "AWS::Chatbot::CustomAction";
    "Properties": {
        /**
         * - The name of the custom action. This name is included in the Amazon Resource Name (ARN).
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9_-]{1,64}$`
         * - _Minimum_: `1`
         * - _Maximum_: `64`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-customaction.html#cfn-chatbot-customaction-actionname */
        "ActionName": string | Intrinsic;
        /**
         * - The name used to invoke this action in a chat channel. For example, `@Amazon Q run my-alias`.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[A-Za-z0-9-_]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `30`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-customaction.html#cfn-chatbot-customaction-aliasname */
        "AliasName"?: string | Intrinsic;
        /**
         * - Defines when this custom action button should be attached to a notification.
         * - _Required_: No
         * - _Type_: Array of [CustomActionAttachment](./aws-properties-chatbot-customaction-customactionattachment.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-customaction.html#cfn-chatbot-customaction-attachments */
        "Attachments"?: CustomActionAttachment[];
        /**
         * - The definition of the command to run when invoked as an alias or as an action button.
         * - _Required_: Yes
         * - _Type_: [CustomActionDefinition](./aws-properties-chatbot-customaction-customactiondefinition.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-customaction.html#cfn-chatbot-customaction-definition */
        "Definition": CustomActionDefinition;
        /**
         * - The tags to add to the configuration.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-chatbot-customaction-tag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-customaction.html#cfn-chatbot-customaction-tags */
        "Tags"?: Tag[];
    };
}