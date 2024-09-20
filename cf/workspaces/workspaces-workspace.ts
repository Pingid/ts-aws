import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Describes a tag.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html */

export interface Tag {
  /**
   * - The key of the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `127`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html#cfn-workspaces-workspace-tag-key */
  Key: string | Intrinsic
  /**
   * - The value of the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html#cfn-workspaces-workspace-tag-value */
  Value: string | Intrinsic
}

/**
 * Information about a WorkSpace.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html */

export interface WorkspaceProperties {
  /**
   * - The compute type. For more information, see [Amazon WorkSpaces Bundles](https://aws.amazon.com/workspaces/details/#Amazon_WorkSpaces_Bundles).
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `VALUE | STANDARD | PERFORMANCE | POWER | GRAPHICS | POWERPRO | GRAPHICSPRO | GRAPHICS_G4DN | GRAPHICSPRO_G4DN`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html#cfn-workspaces-workspace-workspaceproperties-computetypename */
  ComputeTypeName?: string | Intrinsic
  /**
   * - The size of the root volume. For important information about how to modify the size of the root and user volumes, see [Modify a WorkSpace](https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html).
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html#cfn-workspaces-workspace-workspaceproperties-rootvolumesizegib */
  RootVolumeSizeGib?: number | Intrinsic
  /**
   * - The running mode. For more information, see [Manage the WorkSpace Running Mode](https://docs.aws.amazon.com/workspaces/latest/adminguide/running-mode.html).
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `AUTO_STOP | ALWAYS_ON | MANUAL`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html#cfn-workspaces-workspace-workspaceproperties-runningmode */
  RunningMode?: string | Intrinsic
  /**
   * - The time after a user logs off when WorkSpaces are automatically stopped. Configured in 60-minute intervals.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html#cfn-workspaces-workspace-workspaceproperties-runningmodeautostoptimeoutinminutes */
  RunningModeAutoStopTimeoutInMinutes?: number | Intrinsic
  /**
   * - The size of the user storage. For important information about how to modify the size of the root and user volumes, see [Modify a WorkSpace](https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html).
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html#cfn-workspaces-workspace-workspaceproperties-uservolumesizegib */
  UserVolumeSizeGib?: number | Intrinsic
}

/**
 * The `AWS::WorkSpaces::Workspace` resource specifies a WorkSpace.
 * Updates are not supported for the `BundleId`, `RootVolumeEncryptionEnabled`, `UserVolumeEncryptionEnabled`, or `VolumeEncryptionKey` properties. To update these properties, you must also update a property that triggers a replacement, such as the `UserName` property.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html */

export interface WorkSpacesWorkspace extends ResourceAttributes {
  Type: 'AWS::WorkSpaces::Workspace'
  Properties: {
    /**
     * - The identifier of the bundle for the WorkSpace.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^wsb-[0-9a-z]{8,63}$`
     * - _Update requires_: Updates are not supported.
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html#cfn-workspaces-workspace-bundleid */
    BundleId: string | Intrinsic
    /**
     * - The identifier of the AWS Directory Service directory for the WorkSpace.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(d-[0-9a-f]{8,63}$)|(wsd-[0-9a-z]{8,63}$)`
     * - _Minimum_: `10`
     * - _Maximum_: `65`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html#cfn-workspaces-workspace-directoryid */
    DirectoryId: string | Intrinsic
    /**
     * - Indicates whether the data stored on the root volume is encrypted.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: Updates are not supported.
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html#cfn-workspaces-workspace-rootvolumeencryptionenabled */
    RootVolumeEncryptionEnabled?: boolean | Intrinsic
    /**
     * - The tags for the WorkSpace.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-workspaces-workspace-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html#cfn-workspaces-workspace-tags */
    Tags?: Tag[]
    /**
     * - The user name of the user for the WorkSpace. This user name must exist in the AWS Directory Service directory for the WorkSpace.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html#cfn-workspaces-workspace-username */
    UserName: string | Intrinsic
    /**
     * - Indicates whether the data stored on the user volume is encrypted.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: Updates are not supported.
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html#cfn-workspaces-workspace-uservolumeencryptionenabled */
    UserVolumeEncryptionEnabled?: boolean | Intrinsic
    /**
     * - The symmetric AWS KMS key used to encrypt data stored on your WorkSpace. Amazon WorkSpaces does not support asymmetric KMS keys.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: Updates are not supported.
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html#cfn-workspaces-workspace-volumeencryptionkey */
    VolumeEncryptionKey?: string | Intrinsic
    /**
     * - The WorkSpace properties.
     * - _Required_: No
     * - _Type_: [WorkspaceProperties](./aws-properties-workspaces-workspace-workspaceproperties.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspace.html#cfn-workspaces-workspace-workspaceproperties */
    WorkspaceProperties?: WorkspaceProperties
  }
}
