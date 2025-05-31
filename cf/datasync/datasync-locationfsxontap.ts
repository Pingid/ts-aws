import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `Tag` property type specifies Property description not available. for an [AWS::DataSync::LocationFSxONTAP](./aws-resource-datasync-locationfsxontap.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html */

export interface Tag {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9\s+=._:/-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html#cfn-datasync-locationfsxontap-tag-key */
    "Key": string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9\s+=._:@/-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html#cfn-datasync-locationfsxontap-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Specifies how DataSync can access a location using the NFS protocol.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html */

export interface NfsMountOptions {
    /**
     * - Specifies the NFS version that you want DataSync to use when mounting your NFS share. If the server refuses to use the version specified, the task fails.
     * - You can specify the following options:
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `AUTOMATIC | NFS3 | NFS4_0 | NFS4_1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html#cfn-datasync-locationfsxontap-nfsmountoptions-version */
    "Version"?: string | Intrinsic;
}

/**
 * Specifies the Network File System (NFS) protocol configuration that AWS DataSync uses to access a storage virtual machine (SVM) on your Amazon FSx for NetApp ONTAP file system. For more information, see [Accessing FSx for ONTAP file systems](https://docs.aws.amazon.com/datasync/latest/userguide/create-ontap-location.html#create-ontap-location-access).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html */

export interface NFS {
    /**
     * - Specifies how DataSync can access a location using the NFS protocol.
     * - _Required_: Yes
     * - _Type_: [NfsMountOptions](./aws-properties-datasync-locationfsxontap-nfsmountoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html#cfn-datasync-locationfsxontap-nfs-mountoptions */
    "MountOptions": NfsMountOptions;
}

/**
 * Specifies the version of the Server Message Block (SMB) protocol that AWS DataSync uses to access an SMB file server.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html */

export interface SmbMountOptions {
    /**
     * - By default, DataSync automatically chooses an SMB protocol version based on negotiation with your SMB file server. You also can configure DataSync to use a specific SMB version, but we recommend doing this only if DataSync has trouble negotiating with the SMB file server automatically.
     * - These are the following options for configuring the SMB version:
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `AUTOMATIC | SMB2 | SMB3`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html#cfn-datasync-locationfsxontap-smbmountoptions-version */
    "Version"?: string | Intrinsic;
}

/**
 * Specifies the Server Message Block (SMB) protocol configuration that AWS DataSync uses to access a storage virtual machine (SVM) on your Amazon FSx for NetApp ONTAP file system. For more information, see [Accessing FSx for ONTAP file systems](https://docs.aws.amazon.com/datasync/latest/userguide/create-ontap-location.html#create-ontap-location-access).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html */

export interface SMB {
    /**
     * - Specifies the name of the Windows domain that your storage virtual machine (SVM) belongs to.
     * - If you have multiple domains in your environment, configuring this setting makes sure that DataSync connects to the right SVM.
     * - If you have multiple Active Directory domains in your environment, configuring this parameter makes sure that DataSync connects to the right SVM.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^([A-Za-z0-9]+[A-Za-z0-9-.]*)*[A-Za-z0-9-]*[A-Za-z0-9]$`
     * - _Maximum_: `253`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html#cfn-datasync-locationfsxontap-smb-domain */
    "Domain"?: string | Intrinsic;
    /**
     * - Specifies how DataSync can access a location using the SMB protocol.
     * - _Required_: Yes
     * - _Type_: [SmbMountOptions](./aws-properties-datasync-locationfsxontap-smbmountoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html#cfn-datasync-locationfsxontap-smb-mountoptions */
    "MountOptions": SmbMountOptions;
    /**
     * - Specifies the password of a user who has permission to access your SVM.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.{0,104}$`
     * - _Maximum_: `104`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html#cfn-datasync-locationfsxontap-smb-password */
    "Password": string | Intrinsic;
    /**
     * - Specifies a user name that can mount the location and access the files, folders, and metadata that you need in the SVM.
     * - If you provide a user in your Active Directory, note the following:
     * - Make sure that the user has the permissions it needs to copy the data you want:
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[^\x5B\x5D\\/:;|=,+*?]{1,104}$`
     * - _Maximum_: `104`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html#cfn-datasync-locationfsxontap-smb-user */
    "User": string | Intrinsic;
}

/**
 * Specifies the data transfer protocol that AWS DataSync uses to access your Amazon FSx file system.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html */

export interface Protocol {
    /**
     * - Specifies the Network File System (NFS) protocol configuration that DataSync uses to access your FSx for ONTAP file system's storage virtual machine (SVM).
     * - _Required_: No
     * - _Type_: [NFS](./aws-properties-datasync-locationfsxontap-nfs.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html#cfn-datasync-locationfsxontap-protocol-nfs */
    "NFS"?: NFS;
    /**
     * - Specifies the Server Message Block (SMB) protocol configuration that DataSync uses to access your FSx for ONTAP file system's SVM.
     * - _Required_: No
     * - _Type_: [SMB](./aws-properties-datasync-locationfsxontap-smb.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html#cfn-datasync-locationfsxontap-protocol-smb */
    "SMB"?: SMB;
}

/**
 * The `AWS::DataSync::LocationFSxONTAP` resource creates an endpoint for an Amazon FSx for NetApp ONTAP file system. AWS DataSync can access this endpoint as a source or destination location.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html */

export interface DataSyncLocationFSxONTAP extends ResourceAttributes {
    "Type": "AWS::DataSync::LocationFSxONTAP";
    "Properties": {
        /**
         * - Specifies the data transfer protocol that DataSync uses to access your Amazon FSx file system.
         * - _Required_: No
         * - _Type_: [Protocol](./aws-properties-datasync-locationfsxontap-protocol.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html#cfn-datasync-locationfsxontap-protocol */
        "Protocol"?: Protocol;
        /**
         * - Specifies the Amazon Resource Names (ARNs) of the security groups that DataSync can use to access your FSx for ONTAP file system. You must configure the security groups to allow outbound traffic on the following ports (depending on the protocol that you're using):
         * - Your file system's security groups must also allow inbound traffic on the same port.
         * - _Required_: Yes
         * - _Type_: Array of String
         * - _Minimum_: `1`
         * - _Maximum_: `128 | 5`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html#cfn-datasync-locationfsxontap-securitygrouparns */
        "SecurityGroupArns": (string | Intrinsic)[];
        /**
         * - Specifies the ARN of the storage virtual machine (SVM) in your file system where you want to copy data to or from.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):fsx:[a-z\-0-9]+:[0-9]{12}:storage-virtual-machine/fs-[0-9a-f]+/svm-[0-9a-f]{17,}$`
         * - _Maximum_: `162`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html#cfn-datasync-locationfsxontap-storagevirtualmachinearn */
        "StorageVirtualMachineArn": string | Intrinsic;
        /**
         * - Specifies a path to the file share in the SVM where you want to transfer data to or from.
         * - You can specify a junction path (also known as a mount point), qtree path (for NFS file shares), or share name (for SMB file shares). For example, your mount path might be `/vol1`, `/vol1/tree1`, or `/share1`.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9_\-\+\./\(\)\$\p{Zs}]+$`
         * - _Maximum_: `4096`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html#cfn-datasync-locationfsxontap-subdirectory */
        "Subdirectory"?: string | Intrinsic;
        /**
         * - Specifies labels that help you categorize, filter, and search for your AWS resources. We recommend creating at least a name tag for your location.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-datasync-locationfsxontap-tag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxontap.html#cfn-datasync-locationfsxontap-tags */
        "Tags"?: Tag[];
    };
}