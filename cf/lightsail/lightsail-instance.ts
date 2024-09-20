import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * `Location` is a property of the [AWS::Lightsail::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html) resource. It describes the location for an instance.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html */

export interface Location {
  /**
   * - The Availability Zone for the instance.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-location-availabilityzone */
  AvailabilityZone?: string | Intrinsic
  /**
   * - The name of the AWS Region for the instance.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-location-regionname */
  RegionName?: string | Intrinsic
}

/**
 * `State` is a property of the [AWS::Lightsail::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html) resource. It describes the status code and the state (for example, `running`) of an instance.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html */

export interface State {
  /**
   * - The status code of the instance.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-state-code */
  Code?: number | Intrinsic
  /**
   * - The state of the instance (for example, `running` or `pending`).
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-state-name */
  Name?: string | Intrinsic
}

/**
 * Describes a tag key and optional value assigned to an Amazon Lightsail resource.
 * For more information about tags in Lightsail, see the [Amazon Lightsail Developer Guide](https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-tags).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html */

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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-tag-key */
  Key: string | Intrinsic
  /**
   * - The value of the tag.
   * - Constraints: Tag values accept a maximum of 256 letters, numbers, spaces in UTF-8, or the following characters: + - = . \_ : / @
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-tag-value */
  Value?: string | Intrinsic
}

/**
 * `AutoSnapshotAddOn` is a property of the [AddOn](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-addon.html) property. It describes the automatic snapshot add-on for an instance.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html */

export interface AutoSnapshotAddOn {
  /**
   * - The daily time when an automatic snapshot will be created.
   * - Constraints:
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[0-9]{2}:00$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-autosnapshotaddon-snapshottimeofday */
  SnapshotTimeOfDay?: string | Intrinsic
}

/**
 * `Disk` is a property of the [Hardware](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-hardware.html) property. It describes a disk attached to an instance.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html */

export interface Disk {
  /**
   * - The resources to which the disk is attached.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: Updates are not supported.
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-disk-attachedto */
  AttachedTo?: string | Intrinsic
  /**
   * - (Deprecated) The attachment state of the disk.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: Updates are not supported.
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-disk-attachmentstate */
  AttachmentState?: string | Intrinsic
  /**
   * - The unique name of the disk.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9][\w\-.]*[a-zA-Z0-9]$`
   * - _Minimum_: `1`
   * - _Maximum_: `254`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-disk-diskname */
  DiskName: string | Intrinsic
  /**
   * - The input/output operations per second (IOPS) of the disk.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: Updates are not supported.
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-disk-iops */
  IOPS?: number | Intrinsic
  /**
   * - A Boolean value indicating whether this disk is a system disk (has an operating system loaded on it).
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: Updates are not supported.
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-disk-issystemdisk */
  IsSystemDisk?: boolean | Intrinsic
  /**
   * - The disk path.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: Updates are not supported.
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-disk-path */
  Path: string | Intrinsic
  /**
   * - The size of the disk in GB.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: Updates are not supported.
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-disk-sizeingb */
  SizeInGb?: string | Intrinsic
}

/**
 * `MonthlyTransfer` is a property of the [Networking](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-networking.html) property. It describes the amount of allocated monthly data transfer (in GB) for an instance.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html */

export interface MonthlyTransfer {
  /**
   * - The amount of allocated monthly data transfer (in GB) for an instance.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-monthlytransfer-gbpermonthallocated */
  GbPerMonthAllocated?: string | Intrinsic
}

/**
 * `Port` is a property of the [Networking](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lightsail-instance-networking.html) property. It describes information about ports for an instance.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html */

export interface Port {
  /**
   * - The access direction (`inbound` or `outbound`).
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-port-accessdirection */
  AccessDirection?: string | Intrinsic
  /**
   * - The location from which access is allowed. For example, `Anywhere (0.0.0.0/0)`, or `Custom` if a specific IP address or range of IP addresses is allowed.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-port-accessfrom */
  AccessFrom?: string | Intrinsic
  /**
   * - The type of access (`Public` or `Private`).
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-port-accesstype */
  AccessType?: string | Intrinsic
  /**
   * - An alias that defines access for a preconfigured range of IP addresses.
   * - The only alias currently supported is `lightsail-connect`, which allows IP addresses of the browser-based RDP/SSH client in the Lightsail console to connect to your instance.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-port-cidrlistaliases */
  CidrListAliases?: (string | Intrinsic)[]
  /**
   * - The IPv4 address, or range of IPv4 addresses (in CIDR notation) that are allowed to connect to an instance through the ports, and the protocol.
   * - Examples:
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-port-cidrs */
  Cidrs?: (string | Intrinsic)[]
  /**
   * - The common name of the port information.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-port-commonname */
  CommonName?: string | Intrinsic
  /**
   * - The first port in a range of open ports on an instance.
   * - Allowed ports:
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-port-fromport */
  FromPort?: number | Intrinsic
  /**
   * - The IPv6 address, or range of IPv6 addresses (in CIDR notation) that are allowed to connect to an instance through the ports, and the protocol. Only devices with an IPv6 address can connect to an instance through IPv6; otherwise, IPv4 should be used.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-port-ipv6cidrs */
  Ipv6Cidrs?: (string | Intrinsic)[]
  /**
   * - The IP protocol name.
   * - The name can be one of the following:
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-port-protocol */
  Protocol?: string | Intrinsic
  /**
   * - The last port in a range of open ports on an instance.
   * - Allowed ports:
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-port-toport */
  ToPort?: number | Intrinsic
}

/**
 * `AddOn` is a property of the [AWS::Lightsail::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html) resource. It describes the add-ons for an instance.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html */

export interface AddOn {
  /**
   * - The add-on type (for example, `AutoSnapshot`).
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-addon-addontype */
  AddOnType: string | Intrinsic
  /**
   * - The parameters for the automatic snapshot add-on, such as the daily time when an automatic snapshot will be created.
   * - _Required_: No
   * - _Type_: [AutoSnapshotAddOn](./aws-properties-lightsail-instance-autosnapshotaddon.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-addon-autosnapshotaddonrequest */
  AutoSnapshotAddOnRequest?: AutoSnapshotAddOn
  /**
   * - The status of the add-on.
   * - Valid Values: `Enabled` | `Disabled`
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `Enabling | Disabling | Enabled | Terminating | Terminated | Disabled | Failed`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-addon-status */
  Status?: string | Intrinsic
}

/**
 * `Hardware` is a property of the [AWS::Lightsail::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html) resource. It describes the hardware properties for the instance, such as the vCPU count, attached disks, and amount of RAM.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html */

export interface Hardware {
  /**
   * - The number of vCPUs the instance has.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: Updates are not supported.
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-hardware-cpucount */
  CpuCount?: number | Intrinsic
  /**
   * - The disks attached to the instance.
   * - The instance restarts when performing an attach disk or detach disk request. This resets the public IP address of your instance if a static IP isn't attached to it.
   * - _Required_: No
   * - _Type_: Array of [Disk](./aws-properties-lightsail-instance-disk.html)
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-hardware-disks */
  Disks?: Disk[]
  /**
   * - The amount of RAM in GB on the instance (for example, `1.0`).
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: Updates are not supported.
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-hardware-ramsizeingb */
  RamSizeInGb?: number | Intrinsic
}

/**
 * `Networking` is a property of the [AWS::Lightsail::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html) resource. It describes the public ports and the monthly amount of data transfer allocated for the instance.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html */

export interface Networking {
  /**
   * - The monthly amount of data transfer, in GB, allocated for the instance
   * - _Required_: No
   * - _Type_: [MonthlyTransfer](./aws-properties-lightsail-instance-monthlytransfer.html)
   * - _Update requires_: Updates are not supported.
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-networking-monthlytransfer */
  MonthlyTransfer?: MonthlyTransfer
  /**
   * - An array of ports to open on the instance.
   * - _Required_: Yes
   * - _Type_: Array of [Port](./aws-properties-lightsail-instance-port.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-networking-ports */
  Ports: Port[]
}

/**
 * The `AWS::Lightsail::Instance` resource specifies an Amazon Lightsail instance.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html */

export interface LightsailInstance extends ResourceAttributes {
  Type: 'AWS::Lightsail::Instance'
  Properties: {
    /**
     * - An array of add-ons for the instance.
     * - _Required_: No
     * - _Type_: Array of [AddOn](./aws-properties-lightsail-instance-addon.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-addons */
    AddOns?: AddOn[]
    /**
     * - The Availability Zone for the instance.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: Updates are not supported.
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-availabilityzone */
    AvailabilityZone?: string | Intrinsic
    /**
     * - The blueprint ID for the instance (for example, `os_amlinux_2016_03`).
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: Updates are not supported.
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-blueprintid */
    BlueprintId: string | Intrinsic
    /**
     * - The bundle ID for the instance (for example, `micro_1_0`).
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: Updates are not supported.
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-bundleid */
    BundleId: string | Intrinsic
    /**
     * - The hardware properties for the instance, such as the vCPU count, attached disks, and amount of RAM.
     * - _Required_: No
     * - _Type_: [Hardware](./aws-properties-lightsail-instance-hardware.html)
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-hardware */
    Hardware?: Hardware
    /**
     * - The name of the instance.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9][\w\-.]*[a-zA-Z0-9]$`
     * - _Minimum_: `1`
     * - _Maximum_: `254`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-instancename */
    InstanceName: string | Intrinsic
    /**
     * - The name of the key pair to use for the instance.
     * - If no key pair name is specified, the Regional Lightsail default key pair is used.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-keypairname */
    KeyPairName?: string | Intrinsic
    /**
     * - The location for the instance, such as the AWS Region and Availability Zone.
     * - _Required_: No
     * - _Type_: [Location](./aws-properties-lightsail-instance-location.html)
     * - _Update requires_: Updates are not supported.
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-location */
    Location?: Location
    /**
     * - The public ports and the monthly amount of data transfer allocated for the instance.
     * - _Required_: No
     * - _Type_: [Networking](./aws-properties-lightsail-instance-networking.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-networking */
    Networking?: Networking
    /**
     * - The status code and the state (for example, `running`) of the instance.
     * - _Required_: No
     * - _Type_: [State](./aws-properties-lightsail-instance-state.html)
     * - _Update requires_: Updates are not supported.
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-state */
    State?: State
    /**
     * - An array of key-value pairs to apply to this resource.
     * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) in the _AWS CloudFormation User Guide_.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-lightsail-instance-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-tags */
    Tags?: Tag[]
    /**
     * - The optional launch script for the instance.
     * - Specify a launch script to configure an instance with additional user data. For example, you might want to specify `apt-get -y update` as a launch script.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-instance.html#cfn-lightsail-instance-userdata */
    UserData?: string | Intrinsic
  }
}
