import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A structure that contains the parameters for an AS2 connector object.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html */

export interface As2Config {
    /**
     * - Provides Basic authentication support to the AS2 Connectors API. To use Basic authentication, you must provide the name or Amazon Resource Name (ARN) of a secret in AWS Secrets Manager.
     * - The default value for this parameter is `null`, which indicates that Basic authentication is not enabled for the connector.
     * - If the connector should use Basic authentication, the secret needs to be in the following format:
     * - `{ "Username": "user-name", "Password": "user-password" }`
     * - Replace `user-name` and `user-password` with the credentials for the actual user that is being authenticated.
     * - Note the following:
     * - If you have previously enabled Basic authentication for a connector, you can disable it by using the `UpdateConnector` API call. For example, if you are using the CLI, you can run the following command to remove Basic authentication:
     * - `update-connector --connector-id my-connector-id --as2-config 'BasicAuthSecretId=""'`
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html#cfn-transfer-connector-as2config-basicauthsecretid */
    "BasicAuthSecretId"?: string | Intrinsic;
    /**
     * - Specifies whether the AS2 file is compressed.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ZLIB | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html#cfn-transfer-connector-as2config-compression */
    "Compression"?: string | Intrinsic;
    /**
     * - The algorithm that is used to encrypt the file.
     * - Note the following:
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `AES128_CBC | AES192_CBC | AES256_CBC | NONE | DES_EDE3_CBC`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html#cfn-transfer-connector-as2config-encryptionalgorithm */
    "EncryptionAlgorithm"?: string | Intrinsic;
    /**
     * - A unique identifier for the AS2 local profile.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^p-([0-9a-f]{17})$`
     * - _Minimum_: `19`
     * - _Maximum_: `19`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html#cfn-transfer-connector-as2config-localprofileid */
    "LocalProfileId"?: string | Intrinsic;
    /**
     * - Used for outbound requests (from an AWS Transfer Family connector to a partner AS2 server) to determine whether the partner response for transfers is synchronous or asynchronous. Specify either of the following values:
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `SYNC | NONE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html#cfn-transfer-connector-as2config-mdnresponse */
    "MdnResponse"?: string | Intrinsic;
    /**
     * - The signing algorithm for the MDN response.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `SHA256 | SHA384 | SHA512 | SHA1 | NONE | DEFAULT`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html#cfn-transfer-connector-as2config-mdnsigningalgorithm */
    "MdnSigningAlgorithm"?: string | Intrinsic;
    /**
     * - Used as the `Subject` HTTP header attribute in AS2 messages that are being sent with the connector.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\u0020-\u007E\t]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html#cfn-transfer-connector-as2config-messagesubject */
    "MessageSubject"?: string | Intrinsic;
    /**
     * - A unique identifier for the partner profile for the connector.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^p-([0-9a-f]{17})$`
     * - _Minimum_: `19`
     * - _Maximum_: `19`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html#cfn-transfer-connector-as2config-partnerprofileid */
    "PartnerProfileId"?: string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html#cfn-transfer-connector-as2config-preservecontenttype */
    "PreserveContentType"?: string | Intrinsic;
    /**
     * - The algorithm that is used to sign the AS2 messages sent with the connector.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `SHA256 | SHA384 | SHA512 | SHA1 | NONE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html#cfn-transfer-connector-as2config-signingalgorithm */
    "SigningAlgorithm"?: string | Intrinsic;
}

/**
 * A structure that contains the parameters for an SFTP connector object.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html */

export interface SftpConfig {
    /**
     * - The public portion of the host key, or keys, that are used to identify the external server to which you are connecting. You can use the `ssh-keyscan` command against the SFTP server to retrieve the necessary key.
     * - The three standard SSH public key format elements are `<key type>`, `<body base64>`, and an optional `<comment>`, with spaces between each element. Specify only the `<key type>` and `<body base64>`: do not enter the `<comment>` portion of the key.
     * - For the trusted host key, AWS Transfer Family accepts RSA and ECDSA keys.
     * - Run this command to retrieve the SFTP server host key, where your SFTP server name is `ftp.host.com`.
     * - `ssh-keyscan ftp.host.com`
     * - This prints the public host key to standard output.
     * - `ftp.host.com ssh-rsa AAAAB3Nza...<long-string-for-public-key`
     * - Copy and paste this string into the `TrustedHostKeys` field for the `create-connector` command or into the **Trusted host keys** field in the console.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html#cfn-transfer-connector-sftpconfig-trustedhostkeys */
    "TrustedHostKeys"?: (string | Intrinsic)[];
    /**
     * - The identifier for the secret (in AWS Secrets Manager) that contains the SFTP user's private key, password, or both. The identifier must be the Amazon Resource Name (ARN) of the secret.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html#cfn-transfer-connector-sftpconfig-usersecretid */
    "UserSecretId"?: string | Intrinsic;
}

/**
 * Creates a key-value pair for a specific resource. Tags are metadata that you can use to search for and group a resource for various purposes. You can apply tags to servers, users, and roles. A tag key can take more than one value. For example, to group servers for accounting purposes, you might create a tag called `Group` and assign the values `Research` and `Accounting` to that group.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html */

export interface Tag {
    /**
     * - The name assigned to the tag that you create.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html#cfn-transfer-connector-tag-key */
    "Key": string | Intrinsic;
    /**
     * - Contains one or more values that you assigned to the key name you create.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html#cfn-transfer-connector-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Creates the connector, which captures the parameters for a connection for the AS2 or SFTP protocol. For AS2, the connector is required for sending files to an externally hosted AS2 server. For SFTP, the connector is required when sending files to an SFTP server or receiving files from an SFTP server. For more details about connectors, see [Configure AS2 connectors](https://docs.aws.amazon.com/transfer/latest/userguide/configure-as2-connector.html) and [Create SFTP connectors](https://docs.aws.amazon.com/transfer/latest/userguide/configure-sftp-connector.html).
 * ###### Note
 * 
 * You must specify exactly one configuration object: either for AS2 (`As2Config`) or SFTP (`SftpConfig`).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html */

export interface TransferConnector extends ResourceAttributes {
    "Type": "AWS::Transfer::Connector";
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
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html#cfn-transfer-connector-accessrole */
        "AccessRole": string | Intrinsic;
        /**
         * - A structure that contains the parameters for an AS2 connector object.
         * - _Required_: No
         * - _Type_: [As2Config](./aws-properties-transfer-connector-as2config.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html#cfn-transfer-connector-as2config */
        "As2Config"?: As2Config;
        /**
         * - The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that allows a connector to turn on CloudWatch logging for Amazon S3 events. When set, you can view connector activity in your CloudWatch logs.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `arn:.*role/.*`
         * - _Minimum_: `20`
         * - _Maximum_: `2048`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html#cfn-transfer-connector-loggingrole */
        "LoggingRole"?: string | Intrinsic;
        /**
         * - The text name of the security policy for the specified connector.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `TransferSFTPConnectorSecurityPolicy-[A-Za-z0-9-]+`
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html#cfn-transfer-connector-securitypolicyname */
        "SecurityPolicyName"?: string | Intrinsic;
        /**
         * - A structure that contains the parameters for an SFTP connector object.
         * - _Required_: No
         * - _Type_: [SftpConfig](./aws-properties-transfer-connector-sftpconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html#cfn-transfer-connector-sftpconfig */
        "SftpConfig"?: SftpConfig;
        /**
         * - Key-value pairs that can be used to group and search for connectors.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-transfer-connector-tag.html)
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html#cfn-transfer-connector-tags */
        "Tags"?: Tag[];
        /**
         * - The URL of the partner's AS2 or SFTP endpoint.
         * - _Required_: Yes
         * - _Type_: String
         * - _Maximum_: `255`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-transfer-connector.html#cfn-transfer-connector-url */
        "Url": string | Intrinsic;
    };
}