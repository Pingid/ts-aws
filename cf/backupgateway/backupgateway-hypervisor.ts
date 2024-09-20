import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A key-value pair you can use to manage, filter, and search for your resources. Allowed characters include UTF-8 letters, numbers, spaces, and the following characters: + - = . \_ : /.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backupgateway-hypervisor.html */

export interface Tag {
  /**
   * - The key part of a tag's key-value pair. The key can't start with `aws:`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backupgateway-hypervisor.html#cfn-backupgateway-hypervisor-tag-key */
  Key: string | Intrinsic
  /**
   * - The value part of a tag's key-value pair.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[^\x00]*$`
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backupgateway-hypervisor.html#cfn-backupgateway-hypervisor-tag-value */
  Value: string | Intrinsic
}

/**
 * Represents the hypervisor's permissions to which the gateway will connect.
 * A hypervisor is hardware, software, or firmware that creates and manages virtual machines, and allocates resources to them.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backupgateway-hypervisor.html */

export interface BackupGatewayHypervisor extends ResourceAttributes {
  Type: 'AWS::BackupGateway::Hypervisor'
  Properties: {
    /**
     * - The server host of the hypervisor. This can be either an IP address or a fully-qualified domain name (FQDN).
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^.+$`
     * - _Minimum_: `3`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backupgateway-hypervisor.html#cfn-backupgateway-hypervisor-host */
    Host?: string | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of the AWS Key Management Service used to encrypt the hypervisor.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^(^arn:(aws|aws-cn|aws-us-gov):kms:([a-zA-Z0-9-]+):([0-9]+):(key|alias)/(\S+)$)|(^alias/(\S+)$)$`
     * - _Minimum_: `50`
     * - _Maximum_: `500`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backupgateway-hypervisor.html#cfn-backupgateway-hypervisor-kmskeyarn */
    KmsKeyArn?: string | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of the group of gateways within the requested log.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^$|^arn:(aws|aws-cn|aws-us-gov):logs:([a-zA-Z0-9-]+):([0-9]+):log-group:[a-zA-Z0-9_\-\/\.]+:\*$`
     * - _Minimum_: `0`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backupgateway-hypervisor.html#cfn-backupgateway-hypervisor-loggrouparn */
    LogGroupArn?: string | Intrinsic
    /**
     * - The name of the hypervisor.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9-]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backupgateway-hypervisor.html#cfn-backupgateway-hypervisor-name */
    Name?: string | Intrinsic
    /**
     * - The password for the hypervisor.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[ -~]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backupgateway-hypervisor.html#cfn-backupgateway-hypervisor-password */
    Password?: string | Intrinsic
    /**
     * - The tags of the hypervisor configuration to import.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-backupgateway-hypervisor-tag.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backupgateway-hypervisor.html#cfn-backupgateway-hypervisor-tags */
    Tags?: Tag[]
    /**
     * - The username for the hypervisor.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[ -\.0-\[\]-~]*[!-\.0-\[\]-~][ -\.0-\[\]-~]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backupgateway-hypervisor.html#cfn-backupgateway-hypervisor-username */
    Username?: string | Intrinsic
  }
}
