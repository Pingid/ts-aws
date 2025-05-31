import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * An object that defines the email template to use for an email message, and the values to use for any message variables in that template. An _email template_ is a type of message template that contains content that you want to reuse in email messages that you send. You can specifiy the email template by providing the name or ARN of an _email template_ previously saved in your Amazon SES account or by providing the full template content.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-template.html */

export interface Template {
    /**
     * - The HTML body of the email.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-template.html#cfn-ses-template-template-htmlpart */
    "HtmlPart"?: string | Intrinsic;
    /**
     * - The subject line of the email.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-template.html#cfn-ses-template-template-subjectpart */
    "SubjectPart": string | Intrinsic;
    /**
     * - The name of the template. You will refer to this name when you send email using the `SendEmail` or `SendBulkEmail` operations.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_-]{1,64}$`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-template.html#cfn-ses-template-template-templatename */
    "TemplateName"?: string | Intrinsic;
    /**
     * - The email body that is visible to recipients whose email clients do not display HTML content.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-template.html#cfn-ses-template-template-textpart */
    "TextPart"?: string | Intrinsic;
}

/**
 * Specifies an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-template.html */

export interface SESTemplate extends ResourceAttributes {
    "Type": "AWS::SES::Template";
    "Properties": {
        /**
         * - The content of the email, composed of a subject line and either an HTML part or a text-only part.
         * - _Required_: No
         * - _Type_: [Template](./aws-properties-ses-template-template.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-template.html#cfn-ses-template-template */
        "Template"?: Template;
    };
}