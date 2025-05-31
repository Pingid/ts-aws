import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Authentication for the relay destination server—specify the secretARN where the SMTP credentials are stored, or specify an empty NoAuthentication structure if the relay destination server does not require SMTP credential authentication.
 * ###### Important
 * 
 * This data type is a UNION, so only one of the following members can be specified when used or returned.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerrelay.html */

export interface RelayAuthentication {
    /**
     * - Keep an empty structure if the relay destination server does not require SMTP credential authentication.
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerrelay.html#cfn-ses-mailmanagerrelay-relayauthentication-noauthentication */
    "NoAuthentication"?: any | Intrinsic;
    /**
     * - The ARN of the secret created in secrets manager where the relay server's SMTP credentials are stored.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:(aws|aws-cn|aws-us-gov):secretsmanager:[a-z0-9-]+:\d{12}:secret:[a-zA-Z0-9/_+=,.@-]+$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerrelay.html#cfn-ses-mailmanagerrelay-relayauthentication-secretarn */
    "SecretArn"?: string | Intrinsic;
}

/**
 * A key-value pair (the value is optional), that you can define and assign to AWS resources.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerrelay.html */

export interface Tag {
    /**
     * - The key of the key-value tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9/_\+=\.:@\-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerrelay.html#cfn-ses-mailmanagerrelay-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value of the key-value tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9/_\+=\.:@\-]*$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerrelay.html#cfn-ses-mailmanagerrelay-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Resource to create an SMTP relay, which can be used within a Mail Manager rule set to forward incoming emails to defined relay destinations.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerrelay.html */

export interface SESMailManagerRelay extends ResourceAttributes {
    "Type": "AWS::SES::MailManagerRelay";
    "Properties": {
        /**
         * - Authentication for the relay destination server—specify the secretARN where the SMTP credentials are stored.
         * - _Required_: Yes
         * - _Type_: [RelayAuthentication](./aws-properties-ses-mailmanagerrelay-relayauthentication.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerrelay.html#cfn-ses-mailmanagerrelay-authentication */
        "Authentication": RelayAuthentication;
        /**
         * - The unique relay name.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9-_]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `100`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerrelay.html#cfn-ses-mailmanagerrelay-relayname */
        "RelayName"?: string | Intrinsic;
        /**
         * - The destination relay server address.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9-\.]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `100`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerrelay.html#cfn-ses-mailmanagerrelay-servername */
        "ServerName": string | Intrinsic;
        /**
         * - The destination relay server port.
         * - _Required_: Yes
         * - _Type_: Number
         * - _Minimum_: `1`
         * - _Maximum_: `65535`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerrelay.html#cfn-ses-mailmanagerrelay-serverport */
        "ServerPort": number | Intrinsic;
        /**
         * - The tags used to organize, track, or control access for the resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-ses-mailmanagerrelay-tag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerrelay.html#cfn-ses-mailmanagerrelay-tags */
        "Tags"?: Tag[];
    };
}