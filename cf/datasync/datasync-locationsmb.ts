import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Specifies the version of the SMB protocol that DataSync uses to access your SMB file server.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html */

export interface MountOptions {
  /**
   * - By default, DataSync automatically chooses an SMB protocol version based on negotiation with your SMB file server. You also can configure DataSync to use a specific SMB version, but we recommend doing this only if DataSync has trouble negotiating with the SMB file server automatically.
   * - These are the following options for configuring the SMB version:
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `AUTOMATIC | SMB1 | SMB2_0 | SMB2 | SMB3`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html#cfn-datasync-locationsmb-mountoptions-version */
  Version?: string | Intrinsic
}

/**
 * Specifies labels that help you categorize, filter, and search for your AWS resources. We recommend creating at least a name tag for your location.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html */

export interface Tag {
  /**
   * - The key for an AWS resource tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9\s+=._:/-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html#cfn-datasync-locationsmb-tag-key */
  Key: string | Intrinsic
  /**
   * - The value for an AWS resource tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9\s+=._:@/-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html#cfn-datasync-locationsmb-tag-value */
  Value: string | Intrinsic
}

/**
 * The `AWS::DataSync::LocationSMB` resource specifies a Server Message Block (SMB) location.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html */

export interface DataSyncLocationSMB extends ResourceAttributes {
  Type: 'AWS::DataSync::LocationSMB'
  Properties: {
    /**
     * - The Amazon Resource Names (ARNs) of agents to use for a Server Message Block (SMB) location.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `128 | 4`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html#cfn-datasync-locationsmb-agentarns */
    AgentArns: (string | Intrinsic)[]
    /**
     * - Specifies the name of the Active Directory domain that your SMB file server belongs to.
     * - If you have multiple Active Directory domains in your environment, configuring this parameter makes sure that DataSync connects to the right file server.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^([A-Za-z0-9]+[A-Za-z0-9-.]*)*[A-Za-z0-9-]*[A-Za-z0-9]$`
     * - _Maximum_: `253`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html#cfn-datasync-locationsmb-domain */
    Domain?: string | Intrinsic
    /**
     * - Specifies the version of the SMB protocol that DataSync uses to access your SMB file server.
     * - _Required_: No
     * - _Type_: [MountOptions](./aws-properties-datasync-locationsmb-mountoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html#cfn-datasync-locationsmb-mountoptions */
    MountOptions?: MountOptions
    /**
     * - The password of the user who can mount the share and has the permissions to access files and folders in the SMB share.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^.{0,104}$`
     * - _Maximum_: `104`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html#cfn-datasync-locationsmb-password */
    Password?: string | Intrinsic
    /**
     * - Specifies the Domain Name Service (DNS) name or IP address of the SMB file server that your DataSync agent will mount.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^(([a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9\-]*[A-Za-z0-9])$`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html#cfn-datasync-locationsmb-serverhostname */
    ServerHostname?: string | Intrinsic
    /**
     * - The subdirectory in the SMB file system that is used to read data from the SMB source location or write data to the SMB destination. The SMB path should be a path that's exported by the SMB server, or a subdirectory of that path. The path should be such that it can be mounted by other SMB clients in your network.
     * - To transfer all the data in the folder you specified, DataSync must have permissions to mount the SMB share, as well as to access all the data in that share. To ensure this, either make sure that the user name and password specified belongs to the user who can mount the share, and who has the appropriate permissions for all of the files and directories that you want DataSync to access, or use credentials of a member of the Backup Operators group to mount the share. Doing either one enables the agent to access the data. For the agent to access directories, you must additionally enable all execute access.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_\-\+\./\(\)\$\p{Zs}]+$`
     * - _Maximum_: `4096`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html#cfn-datasync-locationsmb-subdirectory */
    Subdirectory?: string | Intrinsic
    /**
     * - Specifies labels that help you categorize, filter, and search for your AWS resources. We recommend creating at least a name tag for your location.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-datasync-locationsmb-tag.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html#cfn-datasync-locationsmb-tags */
    Tags?: Tag[]
    /**
     * - The user who can mount the share and has the permissions to access files and folders in the SMB share.
     * - For information about choosing a user name that ensures sufficient permissions to files, folders, and metadata, see [user](https://docs.aws.amazon.com/datasync/latest/userguide/create-smb-location.html#SMBuser).
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[^\x5B\x5D\\/:;|=,+*?]{1,104}$`
     * - _Maximum_: `104`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationsmb.html#cfn-datasync-locationsmb-user */
    User: string | Intrinsic
  }
}
