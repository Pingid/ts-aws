import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Describes a tag key and optional value assigned to an Amazon Lightsail resource.
 * For more information about tags in Lightsail, see the [Amazon Lightsail Developer Guide](https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-tags).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html */

export interface Tag {
    /**
     * - The key of the tag.
     * - Constraints: Tag keys accept a maximum of 128 letters, numbers, spaces in UTF-8, or the following characters: + - = . \_ : / @
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html#cfn-lightsail-disk-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value of the tag.
     * - Constraints: Tag values accept a maximum of 256 letters, numbers, spaces in UTF-8, or the following characters: + - = . \_ : / @
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html#cfn-lightsail-disk-tag-value */
    "Value"?: string | Intrinsic;
}

/**
 * The AWS Region and Availability Zone where the disk is located.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html */

export interface Location {
    /**
     * - The Availability Zone where the disk is located.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html#cfn-lightsail-disk-location-availabilityzone */
    "AvailabilityZone"?: string | Intrinsic;
    /**
     * - The AWS Region where the disk is located.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html#cfn-lightsail-disk-location-regionname */
    "RegionName"?: string | Intrinsic;
}

/**
 * `AutoSnapshotAddOn` is a property of the [AddOn](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-disk-addon.html) property. It describes the automatic snapshot add-on for a disk.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html */

export interface AutoSnapshotAddOn {
    /**
     * - The daily time when an automatic snapshot will be created.
     * - Constraints:
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[0-9]{2}:00$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html#cfn-lightsail-disk-autosnapshotaddon-snapshottimeofday */
    "SnapshotTimeOfDay"?: string | Intrinsic;
}

/**
 * `AddOn` is a property of the [AWS::Lightsail::Disk](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html) resource. It describes the add-ons for a disk.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html */

export interface AddOn {
    /**
     * - The add-on type (for example, `AutoSnapshot`).
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html#cfn-lightsail-disk-addon-addontype */
    "AddOnType": string | Intrinsic;
    /**
     * - The parameters for the automatic snapshot add-on, such as the daily time when an automatic snapshot will be created.
     * - _Required_: No
     * - _Type_: [AutoSnapshotAddOn](./aws-properties-lightsail-disk-autosnapshotaddon.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html#cfn-lightsail-disk-addon-autosnapshotaddonrequest */
    "AutoSnapshotAddOnRequest"?: AutoSnapshotAddOn;
    /**
     * - The status of the add-on.
     * - Valid Values: `Enabled` | `Disabled`
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `Enabling | Disabling | Enabled | Terminating | Terminated | Disabled | Failed`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html#cfn-lightsail-disk-addon-status */
    "Status"?: string | Intrinsic;
}

/**
 * The `AWS::Lightsail::Disk` resource specifies a disk that can be attached to an Amazon Lightsail instance that is in the same AWS Region and Availability Zone.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html */

export interface LightsailDisk extends ResourceAttributes {
    "Type": "AWS::Lightsail::Disk";
    "Properties": {
        /**
         * - An array of add-ons for the disk.
         * - _Required_: No
         * - _Type_: Array of [AddOn](./aws-properties-lightsail-disk-addon.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html#cfn-lightsail-disk-addons */
        "AddOns"?: AddOn[];
        /**
         * - The AWS Region and Availability Zone location for the disk (for example, `us-east-1a`).
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: Updates are not supported.
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html#cfn-lightsail-disk-availabilityzone */
        "AvailabilityZone"?: string | Intrinsic;
        /**
         * - The name of the disk.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9][\w\-.]*[a-zA-Z0-9]$`
         * - _Minimum_: `1`
         * - _Maximum_: `254`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html#cfn-lightsail-disk-diskname */
        "DiskName": string | Intrinsic;
        /**
         * - The AWS Region and Availability Zone where the disk is located.
         * - _Required_: No
         * - _Type_: [Location](./aws-properties-lightsail-disk-location.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html#cfn-lightsail-disk-location */
        "Location"?: Location;
        /**
         * - The size of the disk in GB.
         * - _Required_: Yes
         * - _Type_: Integer
         * - _Update requires_: Updates are not supported.
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html#cfn-lightsail-disk-sizeingb */
        "SizeInGb": number | Intrinsic;
        /**
         * - An array of key-value pairs to apply to this resource.
         * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the _AWS CloudFormation User Guide_.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-lightsail-disk-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-disk.html#cfn-lightsail-disk-tags */
        "Tags"?: Tag[];
    };
}