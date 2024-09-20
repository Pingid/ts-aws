import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The details of the file system location for the resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-storageprofile.html */

export interface FileSystemLocation {
  /**
   * - The location name.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[0-9A-Za-z ]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-storageprofile.html#cfn-deadline-storageprofile-filesystemlocation-name */
  Name: string | Intrinsic
  /**
   * - The file path.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-storageprofile.html#cfn-deadline-storageprofile-filesystemlocation-path */
  Path: string | Intrinsic
  /**
   * - The type of file.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `SHARED | LOCAL`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-storageprofile.html#cfn-deadline-storageprofile-filesystemlocation-type */
  Type: string | Intrinsic
}

/**
 * Creates a storage profile that specifies the operating system, file type, and file location of resources used on a farm.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-storageprofile.html */

export interface DeadlineStorageProfile extends ResourceAttributes {
  Type: 'AWS::Deadline::StorageProfile'
  Properties: {
    /**
     * - The display name of the storage profile summary to update.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-storageprofile.html#cfn-deadline-storageprofile-displayname */
    DisplayName: string | Intrinsic
    /**
     * - The unique identifier of the farm that contains the storage profile.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^farm-[0-9a-f]{32}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-storageprofile.html#cfn-deadline-storageprofile-farmid */
    FarmId: string | Intrinsic
    /**
     * - Operating system specific file system path to the storage location.
     * - _Required_: No
     * - _Type_: Array of [FileSystemLocation](./aws-properties-deadline-storageprofile-filesystemlocation.html)
     * - _Minimum_: `0`
     * - _Maximum_: `20`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-storageprofile.html#cfn-deadline-storageprofile-filesystemlocations */
    FileSystemLocations?: FileSystemLocation[]
    /**
     * - The operating system (OS) family.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `WINDOWS | LINUX | MACOS`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-storageprofile.html#cfn-deadline-storageprofile-osfamily */
    OsFamily: string | Intrinsic
  }
}
