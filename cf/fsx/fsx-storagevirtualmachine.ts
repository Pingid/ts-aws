import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Specifies a key-value pair for a resource tag.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-storagevirtualmachine.html */

export interface Tag {
  /**
   * - A value that specifies the `TagKey`, the name of the tag. Tag keys must be unique for the resource to which they are attached.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-storagevirtualmachine.html#cfn-fsx-storagevirtualmachine-tag-key */
  Key: string | Intrinsic
  /**
   * - A value that specifies the `TagValue`, the value assigned to the corresponding tag key. Tag values can be null and don't have to be unique in a tag set. For example, you can have a key-value pair in a tag set of `finances : April` and also of `payroll : April`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-storagevirtualmachine.html#cfn-fsx-storagevirtualmachine-tag-value */
  Value: string | Intrinsic
}

/**
 * The configuration that Amazon FSx uses to join the ONTAP storage virtual machine (SVM) to your self-managed (including on-premises) Microsoft Active Directory directory.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-storagevirtualmachine.html */

export interface SelfManagedActiveDirectoryConfiguration {
  /**
   * - A list of up to three IP addresses of DNS servers or domain controllers in the self-managed AD directory.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `3`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-storagevirtualmachine.html#cfn-fsx-storagevirtualmachine-selfmanagedactivedirectoryconfiguration-dnsips */
  DnsIps?: (string | Intrinsic)[]
  /**
   * - The fully qualified domain name of the self-managed AD directory, such as `corp.example.com`.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[^\u0000\u0085\u2028\u2029\r\n]{1,255}$`
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-storagevirtualmachine.html#cfn-fsx-storagevirtualmachine-selfmanagedactivedirectoryconfiguration-domainname */
  DomainName?: string | Intrinsic
  /**
   * - (Optional) The name of the domain group whose members are granted administrative privileges for the file system. Administrative privileges include taking ownership of files and folders, setting audit controls (audit ACLs) on files and folders, and administering the file system remotely by using the FSx Remote PowerShell. The group that you specify must already exist in your domain. If you don't provide one, your AD domain's Domain Admins group is used.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[^\u0000\u0085\u2028\u2029\r\n]{1,256}$`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-storagevirtualmachine.html#cfn-fsx-storagevirtualmachine-selfmanagedactivedirectoryconfiguration-filesystemadministratorsgroup */
  FileSystemAdministratorsGroup?: string | Intrinsic
  /**
   * - (Optional) The fully qualified distinguished name of the organizational unit within your self-managed AD directory. Amazon FSx only accepts OU as the direct parent of the file system. An example is `OU=FSx,DC=yourdomain,DC=corp,DC=com`. To learn more, see [RFC 2253](https://tools.ietf.org/html/rfc2253). If none is provided, the FSx file system is created in the default location of your self-managed AD directory.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[^\u0000\u0085\u2028\u2029\r\n]{1,2000}$`
   * - _Minimum_: `1`
   * - _Maximum_: `2000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-storagevirtualmachine.html#cfn-fsx-storagevirtualmachine-selfmanagedactivedirectoryconfiguration-organizationalunitdistinguishedname */
  OrganizationalUnitDistinguishedName?: string | Intrinsic
  /**
   * - The password for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^.{1,256}$`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-storagevirtualmachine.html#cfn-fsx-storagevirtualmachine-selfmanagedactivedirectoryconfiguration-password */
  Password?: string | Intrinsic
  /**
   * - The user name for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain. This account must have the permission to join computers to the domain in the organizational unit provided in `OrganizationalUnitDistinguishedName`, or in the default location of your AD domain.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[^\u0000\u0085\u2028\u2029\r\n]{1,256}$`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-storagevirtualmachine.html#cfn-fsx-storagevirtualmachine-selfmanagedactivedirectoryconfiguration-username */
  UserName?: string | Intrinsic
}

/**
 * Describes the self-managed Microsoft Active Directory to which you want to join the SVM. Joining an Active Directory provides user authentication and access control for SMB clients, including Microsoft Windows and macOS clients accessing the file system.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-storagevirtualmachine.html */

export interface ActiveDirectoryConfiguration {
  /**
   * - The NetBIOS name of the Active Directory computer object that will be created for your SVM.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[^\u0000\u0085\u2028\u2029\r\n]{1,255}$`
   * - _Minimum_: `1`
   * - _Maximum_: `15`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-storagevirtualmachine.html#cfn-fsx-storagevirtualmachine-activedirectoryconfiguration-netbiosname */
  NetBiosName?: string | Intrinsic
  /**
   * - The configuration that Amazon FSx uses to join the ONTAP storage virtual machine (SVM) to your self-managed (including on-premises) Microsoft Active Directory directory.
   * - _Required_: No
   * - _Type_: [SelfManagedActiveDirectoryConfiguration](./aws-properties-fsx-storagevirtualmachine-selfmanagedactivedirectoryconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-storagevirtualmachine.html#cfn-fsx-storagevirtualmachine-activedirectoryconfiguration-selfmanagedactivedirectoryconfiguration */
  SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration
}

/**
 * Creates a storage virtual machine (SVM) for an Amazon FSx for ONTAP file system.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-storagevirtualmachine.html */

export interface FSxStorageVirtualMachine extends ResourceAttributes {
  Type: 'AWS::FSx::StorageVirtualMachine'
  Properties: {
    /**
     * - Describes the Microsoft Active Directory configuration to which the SVM is joined, if applicable.
     * - _Required_: No
     * - _Type_: [ActiveDirectoryConfiguration](./aws-properties-fsx-storagevirtualmachine-activedirectoryconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-storagevirtualmachine.html#cfn-fsx-storagevirtualmachine-activedirectoryconfiguration */
    ActiveDirectoryConfiguration?: ActiveDirectoryConfiguration
    /**
     * - Specifies the FSx for ONTAP file system on which to create the SVM.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-storagevirtualmachine.html#cfn-fsx-storagevirtualmachine-filesystemid */
    FileSystemId: string | Intrinsic
    /**
     * - The name of the SVM.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[^\u0000\u0085\u2028\u2029\r\n]{1,47}$`
     * - _Minimum_: `1`
     * - _Maximum_: `47`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-storagevirtualmachine.html#cfn-fsx-storagevirtualmachine-name */
    Name: string | Intrinsic
    /**
     * - The security style of the root volume of the SVM. Specify one of the following values:
     * -
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `UNIX | NTFS | MIXED`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-storagevirtualmachine.html#cfn-fsx-storagevirtualmachine-rootvolumesecuritystyle */
    RootVolumeSecurityStyle?: string | Intrinsic
    /**
     * - Specifies the password to use when logging on to the SVM using a secure shell (SSH) connection to the SVM's management endpoint. Doing so enables you to manage the SVM using the NetApp ONTAP CLI or REST API. If you do not specify a password, you can still use the file system's `fsxadmin` user to manage the SVM. For more information, see [Managing SVMs using the NetApp ONTAP CLI](https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/managing-resources-ontap-apps.html#vsadmin-ontap-cli) in the _FSx for ONTAP User Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-storagevirtualmachine.html#cfn-fsx-storagevirtualmachine-svmadminpassword */
    SvmAdminPassword?: string | Intrinsic
    /**
     * - A list of `Tag` values, with a maximum of 50 elements.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-fsx-storagevirtualmachine-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fsx-storagevirtualmachine.html#cfn-fsx-storagevirtualmachine-tags */
    Tags?: Tag[]
  }
}
