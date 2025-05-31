import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `CustomDirectories` property type specifies Property description not available. for an [AWS::Transfer::Agreement](./aws-resource-transfer-agreement.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html */

export interface CustomDirectories {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `(|/.*)`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html#cfn-transfer-agreement-customdirectories-failedfilesdirectory */
    "FailedFilesDirectory": string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `(|/.*)`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html#cfn-transfer-agreement-customdirectories-mdnfilesdirectory */
    "MdnFilesDirectory": string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `(|/.*)`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html#cfn-transfer-agreement-customdirectories-payloadfilesdirectory */
    "PayloadFilesDirectory": string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `(|/.*)`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html#cfn-transfer-agreement-customdirectories-statusfilesdirectory */
    "StatusFilesDirectory": string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `(|/.*)`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html#cfn-transfer-agreement-customdirectories-temporaryfilesdirectory */
    "TemporaryFilesDirectory": string | Intrinsic;
}

/**
 * Creates a key-value pair for a specific resource. Tags are metadata that you can use to search for and group a resource for various purposes. You can apply tags to servers, users, and roles. A tag key can take more than one value. For example, to group servers for accounting purposes, you might create a tag called `Group` and assign the values `Research` and `Accounting` to that group.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html */

export interface Tag {
    /**
     * - The name assigned to the tag that you create.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html#cfn-transfer-agreement-tag-key */
    "Key": string | Intrinsic;
    /**
     * - Contains one or more values that you assigned to the key name you create.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html#cfn-transfer-agreement-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Creates an agreement. An agreement is a bilateral trading partner agreement, or partnership, between an AWS Transfer Family server and an AS2 process. The agreement defines the file and message transfer relationship between the server and the AS2 process. To define an agreement, Transfer Family combines a server, local profile, partner profile, certificate, and other attributes.
 * The partner is identified with the `PartnerProfileId`, and the AS2 process is identified with the `LocalProfileId`.
 * ###### Note
 * 
 * Specify _either_`BaseDirectory` or `CustomDirectories`, but not both. Specifying both causes the command to fail.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html */

export interface TransferAgreement extends ResourceAttributes {
    "Type": "AWS::Transfer::Agreement";
    "Properties": {
        /**
         * - Connectors are used to send files using either the AS2 or SFTP protocol. For the access role, provide the Amazon Resource Name (ARN) of the AWS Identity and Access Management role to use.
         * - **For AS2 connectors**
         * - With AS2, you can send files by calling `StartFileTransfer` and specifying the file paths in the request parameter, `SendFilePaths`. We use the file’s parent directory (for example, for `--send-file-paths /bucket/dir/file.txt`, parent directory is `/bucket/dir/`) to temporarily store a processed AS2 message file, store the MDN when we receive them from the partner, and write a final JSON file containing relevant metadata of the transmission. So, the `AccessRole` needs to provide read and write access to the parent directory of the file location used in the `StartFileTransfer` request. Additionally, you need to provide read and write access to the parent directory of the files that you intend to send with `StartFileTransfer`.
         * - If you are using Basic authentication for your AS2 connector, the access role requires the `secretsmanager:GetSecretValue` permission for the secret. If the secret is encrypted using a customer-managed key instead of the AWS managed key in Secrets Manager, then the role also needs the `kms:Decrypt` permission for that key.
         * - **For SFTP connectors**
         * - Make sure that the access role provides read and write access to the parent directory of the file location that's used in the `StartFileTransfer` request. Additionally, make sure that the role provides `secretsmanager:GetSecretValue` permission to AWS Secrets Manager.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `arn:.*role/.*`
         * - _Minimum_: `20`
         * - _Maximum_: `2048`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html#cfn-transfer-agreement-accessrole */
        "AccessRole": string | Intrinsic;
        /**
         * - The landing directory (folder) for files that are transferred by using the AS2 protocol.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^(|/.*)$`
         * - _Maximum_: `1024`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html#cfn-transfer-agreement-basedirectory */
        "BaseDirectory"?: string | Intrinsic;
        /**
         * - A `CustomDirectoriesType` structure. This structure specifies custom directories for storing various AS2 message files. You can specify directories for the following types of files.
         * - _Required_: No
         * - _Type_: [CustomDirectories](./aws-properties-transfer-agreement-customdirectories.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html#cfn-transfer-agreement-customdirectories */
        "CustomDirectories"?: CustomDirectories;
        /**
         * - The name or short description that's used to identify the agreement.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[\u0021-\u007E]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html#cfn-transfer-agreement-description */
        "Description"?: string | Intrinsic;
        /**
         * - Determines whether or not unsigned messages from your trading partners will be accepted.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `ENABLED | DISABLED`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html#cfn-transfer-agreement-enforcemessagesigning */
        "EnforceMessageSigning"?: string | Intrinsic;
        /**
         * - A unique identifier for the AS2 local profile.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^p-([0-9a-f]{17})$`
         * - _Minimum_: `19`
         * - _Maximum_: `19`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html#cfn-transfer-agreement-localprofileid */
        "LocalProfileId": string | Intrinsic;
        /**
         * - A unique identifier for the partner profile used in the agreement.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^p-([0-9a-f]{17})$`
         * - _Minimum_: `19`
         * - _Maximum_: `19`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html#cfn-transfer-agreement-partnerprofileid */
        "PartnerProfileId": string | Intrinsic;
        /**
         * - Determines whether or not Transfer Family appends a unique string of characters to the end of the AS2 message payload filename when saving it.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `ENABLED | DISABLED`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html#cfn-transfer-agreement-preservefilename */
        "PreserveFilename"?: string | Intrinsic;
        /**
         * - A system-assigned unique identifier for a server instance. This identifier indicates the specific server that the agreement uses.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^s-([0-9a-f]{17})$`
         * - _Minimum_: `19`
         * - _Maximum_: `19`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html#cfn-transfer-agreement-serverid */
        "ServerId": string | Intrinsic;
        /**
         * - The current status of the agreement, either `ACTIVE` or `INACTIVE`.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `ACTIVE | INACTIVE`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html#cfn-transfer-agreement-status */
        "Status"?: string | Intrinsic;
        /**
         * - Key-value pairs that can be used to group and search for agreements.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-transfer-agreement-tag.html)
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-agreement.html#cfn-transfer-agreement-tags */
        "Tags"?: Tag[];
    };
}