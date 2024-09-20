import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Sidewalk-related information about a wireless device import task.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdeviceimporttask.html */

export interface Sidewalk {
  /**
   * - The CSV file contained in an S3 bucket that's used for adding devices to an import task.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdeviceimporttask.html#cfn-iotwireless-wirelessdeviceimporttask-sidewalk-devicecreationfile */
  DeviceCreationFile?: string | Intrinsic
  /**
   * - List of Sidewalk devices that are added to the import task.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdeviceimporttask.html#cfn-iotwireless-wirelessdeviceimporttask-sidewalk-devicecreationfilelist */
  DeviceCreationFileList?: (string | Intrinsic)[]
  /**
   * - The IAM role that allows AWS IoT Wireless to access the CSV file in the S3 bucket.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdeviceimporttask.html#cfn-iotwireless-wirelessdeviceimporttask-sidewalk-role */
  Role?: string | Intrinsic
  /**
   * - The Sidewalk manufacturing serial number (SMSN) of the Sidewalk device.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdeviceimporttask.html#cfn-iotwireless-wirelessdeviceimporttask-sidewalk-sidewalkmanufacturingsn */
  SidewalkManufacturingSn?: string | Intrinsic
}

/**
 * The tags to attach to the wireless device. Tags are metadata that you can use to manage a resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdeviceimporttask.html */

export interface Tag {
  /**
   * - The tag's key value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdeviceimporttask.html#cfn-iotwireless-wirelessdeviceimporttask-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag's value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdeviceimporttask.html#cfn-iotwireless-wirelessdeviceimporttask-tag-value */
  Value: string | Intrinsic
}

/**
 * Information about an import task for wireless devices. When creating the resource, either create a single wireless device import task using the Sidewalk manufacturing serial number (SMSN) of the wireless device, or create an import task for multiple devices by specifying both the `DeviceCreationFile` and the `Role`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdeviceimporttask.html */

export interface IoTWirelessWirelessDeviceImportTask extends ResourceAttributes {
  Type: 'AWS::IoTWireless::WirelessDeviceImportTask'
  Properties: {
    /**
     * - The name of the destination that describes the IoT rule to route messages from the Sidewalk devices in the import task to other applications.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9-_]+`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdeviceimporttask.html#cfn-iotwireless-wirelessdeviceimporttask-destinationname */
    DestinationName: string | Intrinsic
    /**
     * - The Sidewalk-related information of the wireless device import task.
     * - _Required_: Yes
     * - _Type_: [Sidewalk](./aws-properties-iotwireless-wirelessdeviceimporttask-sidewalk.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdeviceimporttask.html#cfn-iotwireless-wirelessdeviceimporttask-sidewalk */
    Sidewalk: Sidewalk
    /**
     * - Adds to or modifies the tags of the given resource. Tags are metadata that you can use to manage a resource.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-iotwireless-wirelessdeviceimporttask-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-wirelessdeviceimporttask.html#cfn-iotwireless-wirelessdeviceimporttask-tags */
    Tags?: Tag[]
  }
}
