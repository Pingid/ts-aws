import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A device is an AWS IoT device (thing) that's added to a Greengrass group. Greengrass devices can communicate with the Greengrass core in the same group. For more information, see [What Is AWS IoT Greengrass?](https://docs.aws.amazon.com/greengrass/v1/developerguide/what-is-gg.html) in the _AWS IoT Greengrass Version 1 Developer Guide_ .
 * In an AWS CloudFormation template, the `Devices` property of the [`AWS::Greengrass::DeviceDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinitionversion.html) resource contains a list of `Device` property types.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinitionversion.html */

export interface Device {
    /**
     * - The ARN of the device certificate for the device. This X.509 certificate is used to authenticate the device with AWS IoT and AWS IoT Greengrass services.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinitionversion.html#cfn-greengrass-devicedefinitionversion-device-certificatearn */
    "CertificateArn": string | Intrinsic;
    /**
     * - A descriptive or arbitrary ID for the device. This value must be unique within the device definition version. Maximum length is 128 characters with pattern `[a-zA-Z0-9:_-]+`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinitionversion.html#cfn-greengrass-devicedefinitionversion-device-id */
    "Id": string | Intrinsic;
    /**
     * - Indicates whether the device's local shadow is synced with the cloud automatically.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinitionversion.html#cfn-greengrass-devicedefinitionversion-device-syncshadow */
    "SyncShadow"?: boolean | Intrinsic;
    /**
     * - The Amazon Resource Name (ARN) of the device, which is an AWS IoT device (thing).
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinitionversion.html#cfn-greengrass-devicedefinitionversion-device-thingarn */
    "ThingArn": string | Intrinsic;
}

/**
 * The `AWS::Greengrass::DeviceDefinitionVersion` resource represents a device definition version for AWS IoT Greengrass. A device definition version contains a list of devices.
 * ###### Note
 * 
 * To create a device definition version, you must specify the ID of the device definition that you want to associate with the version. For information about creating a device definition, see [`AWS::Greengrass::DeviceDefinition`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinition.html).
 * 
 * After you create a device definition version that contains the devices you want to deploy, you must add it to your group version. For more information, see [`AWS::Greengrass::Group`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinitionversion.html */

export interface GreengrassDeviceDefinitionVersion extends ResourceAttributes {
    "Type": "AWS::Greengrass::DeviceDefinitionVersion";
    "Properties": {
        /**
         * - The ID of the device definition associated with this version. This value is a GUID.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinitionversion.html#cfn-greengrass-devicedefinitionversion-devicedefinitionid */
        "DeviceDefinitionId": string | Intrinsic;
        /**
         * - The devices in this version.
         * - _Required_: Yes
         * - _Type_: Array of [Device](./aws-properties-greengrass-devicedefinitionversion-device.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-devicedefinitionversion.html#cfn-greengrass-devicedefinitionversion-devices */
        "Devices": Device[];
    };
}