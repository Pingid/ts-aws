import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The tags to add to your fleet. Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html */

export interface Tag {
  /**
   * - The key name of the tag. You can specify a value that's 1 to 127 Unicode characters in length and can't be prefixed with `aws:`. digits, whitespace, `_`, `.`, `:`, `/`, `=`, `+`, `@`, `-`, and `"`.
   * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `127`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-tag-key */
  Key: string | Intrinsic
  /**
   * - The value for the tag. You can specify a value that's 1 to 255 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, `_`, `.`, `/`, `=`, `+`, and `-`.
   * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-tag-value */
  Value: string | Intrinsic
}

/**
 * The details of the Amazon EC2 instance market options for a service managed fleet.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html */

export interface ServiceManagedEc2InstanceMarketOptions {
  /**
   * - The Amazon EC2 instance type.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `on-demand | spot`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-servicemanagedec2instancemarketoptions-type */
  Type: string | Intrinsic
}

/**
 * The range for the GPU fleet acceleration.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html */

export interface AcceleratorCountRange {
  /**
   * - The maximum GPU for the accelerator.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `2147483647`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-acceleratorcountrange-max */
  Max?: number | Intrinsic
  /**
   * - The minimum GPU for the accelerator.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `2147483647`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-acceleratorcountrange-min */
  Min: number | Intrinsic
}

/**
 * The range for memory, in MiB, to use for the accelerator.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html */

export interface AcceleratorTotalMemoryMiBRange {
  /**
   * - The maximum amount of memory to use for the accelerator, measured in MiB.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `2147483647`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-acceleratortotalmemorymibrange-max */
  Max?: number | Intrinsic
  /**
   * - The minimum amount of memory to use for the accelerator, measured in MiB.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `2147483647`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-acceleratortotalmemorymibrange-min */
  Min: number | Intrinsic
}

/**
 * The fleet amount and attribute capabilities.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html */

export interface FleetAmountCapability {
  /**
   * - The maximum amount of the fleet worker capability.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-fleetamountcapability-max */
  Max?: number | Intrinsic
  /**
   * - The minimum amount of fleet worker capability.
   * - _Required_: Yes
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-fleetamountcapability-min */
  Min: number | Intrinsic
  /**
   * - The name of the fleet capability.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^([a-zA-Z][a-zA-Z0-9]{0,63}:)?amount(\.[a-zA-Z][a-zA-Z0-9]{0,63})+$`
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-fleetamountcapability-name */
  Name: string | Intrinsic
}

/**
 * Defines the fleet's capability name, minimum, and maximum.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html */

export interface FleetAttributeCapability {
  /**
   * - The name of the fleet attribute capability for the worker.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^([a-zA-Z][a-zA-Z0-9]{0,63}:)?attr(\.[a-zA-Z][a-zA-Z0-9]{0,63})+$`
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-fleetattributecapability-name */
  Name: string | Intrinsic
  /**
   * - The number of fleet attribute capabilities.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `100 | 10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-fleetattributecapability-values */
  Values: (string | Intrinsic)[]
}

/**
 * The range of memory in MiB.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html */

export interface MemoryMiBRange {
  /**
   * - The maximum amount of memory (in MiB).
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `512`
   * - _Maximum_: `2147483647`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-memorymibrange-max */
  Max?: number | Intrinsic
  /**
   * - The minimum amount of memory (in MiB).
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `512`
   * - _Maximum_: `2147483647`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-memorymibrange-min */
  Min: number | Intrinsic
}

/**
 * The allowable range of vCPU processing power for the fleet.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html */

export interface VCpuCountRange {
  /**
   * - The maximum amount of vCPU.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `10000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-vcpucountrange-max */
  Max?: number | Intrinsic
  /**
   * - The minimum amount of vCPU.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `10000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-vcpucountrange-min */
  Min: number | Intrinsic
}

/**
 * Specifies the EBS volume.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html */

export interface Ec2EbsVolume {
  /**
   * - The IOPS per volume.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `3000`
   * - _Maximum_: `16000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-ec2ebsvolume-iops */
  Iops?: number | Intrinsic
  /**
   * - The EBS volume size in GiB.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-ec2ebsvolume-sizegib */
  SizeGiB?: number | Intrinsic
  /**
   * - The throughput per volume in MiB.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `125`
   * - _Maximum_: `1000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-ec2ebsvolume-throughputmib */
  ThroughputMiB?: number | Intrinsic
}

/**
 * The worker capabilities for a customer managed workflow.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html */

export interface CustomerManagedWorkerCapabilities {
  /**
   * - The range of the accelerator.
   * - _Required_: No
   * - _Type_: [AcceleratorCountRange](./aws-properties-deadline-fleet-acceleratorcountrange.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-customermanagedworkercapabilities-acceleratorcount */
  AcceleratorCount?: AcceleratorCountRange
  /**
   * - The total memory (MiB) for the customer managed worker capabilities.
   * - _Required_: No
   * - _Type_: [AcceleratorTotalMemoryMiBRange](./aws-properties-deadline-fleet-acceleratortotalmemorymibrange.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-customermanagedworkercapabilities-acceleratortotalmemorymib */
  AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRange
  /**
   * - The accelerator types for the customer managed worker capabilities.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-customermanagedworkercapabilities-acceleratortypes */
  AcceleratorTypes?: (string | Intrinsic)[]
  /**
   * - The CPU architecture type for the customer managed worker capabilities.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `x86_64 | arm64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-customermanagedworkercapabilities-cpuarchitecturetype */
  CpuArchitectureType: string | Intrinsic
  /**
   * - Custom requirement ranges for customer managed worker capabilities.
   * - _Required_: No
   * - _Type_: Array of [FleetAmountCapability](./aws-properties-deadline-fleet-fleetamountcapability.html)
   * - _Minimum_: `1`
   * - _Maximum_: `15`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-customermanagedworkercapabilities-customamounts */
  CustomAmounts?: FleetAmountCapability[]
  /**
   * - Custom attributes for the customer manged worker capabilities.
   * - _Required_: No
   * - _Type_: Array of [FleetAttributeCapability](./aws-properties-deadline-fleet-fleetattributecapability.html)
   * - _Minimum_: `1`
   * - _Maximum_: `15`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-customermanagedworkercapabilities-customattributes */
  CustomAttributes?: FleetAttributeCapability[]
  /**
   * - The memory (MiB).
   * - _Required_: Yes
   * - _Type_: [MemoryMiBRange](./aws-properties-deadline-fleet-memorymibrange.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-customermanagedworkercapabilities-memorymib */
  MemoryMiB: MemoryMiBRange
  /**
   * - The operating system (OS) family.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `WINDOWS | LINUX | MACOS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-customermanagedworkercapabilities-osfamily */
  OsFamily: string | Intrinsic
  /**
   * - The vCPU count for the customer manged worker capabilities.
   * - _Required_: Yes
   * - _Type_: [VCpuCountRange](./aws-properties-deadline-fleet-vcpucountrange.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-customermanagedworkercapabilities-vcpucount */
  VCpuCount: VCpuCountRange
}

/**
 * The Amazon EC2 instance capabilities.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html */

export interface ServiceManagedEc2InstanceCapabilities {
  /**
   * - The allowable Amazon EC2 instance types.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-servicemanagedec2instancecapabilities-allowedinstancetypes */
  AllowedInstanceTypes?: (string | Intrinsic)[]
  /**
   * - The CPU architecture type.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `x86_64 | arm64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-servicemanagedec2instancecapabilities-cpuarchitecturetype */
  CpuArchitectureType: string | Intrinsic
  /**
   * - The custom capability amounts to require for instances in this fleet.
   * - _Required_: No
   * - _Type_: Array of [FleetAmountCapability](./aws-properties-deadline-fleet-fleetamountcapability.html)
   * - _Minimum_: `1`
   * - _Maximum_: `15`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-servicemanagedec2instancecapabilities-customamounts */
  CustomAmounts?: FleetAmountCapability[]
  /**
   * - The custom capability attributes to require for instances in this fleet.
   * - _Required_: No
   * - _Type_: Array of [FleetAttributeCapability](./aws-properties-deadline-fleet-fleetattributecapability.html)
   * - _Minimum_: `1`
   * - _Maximum_: `15`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-servicemanagedec2instancecapabilities-customattributes */
  CustomAttributes?: FleetAttributeCapability[]
  /**
   * - The instance types to exclude from the fleet.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-servicemanagedec2instancecapabilities-excludedinstancetypes */
  ExcludedInstanceTypes?: (string | Intrinsic)[]
  /**
   * - The memory, as MiB, for the Amazon EC2 instance type.
   * - _Required_: Yes
   * - _Type_: [MemoryMiBRange](./aws-properties-deadline-fleet-memorymibrange.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-servicemanagedec2instancecapabilities-memorymib */
  MemoryMiB: MemoryMiBRange
  /**
   * - The operating system (OS) family.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `LINUX | WINDOWS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-servicemanagedec2instancecapabilities-osfamily */
  OsFamily: string | Intrinsic
  /**
   * - The root EBS volume.
   * - _Required_: No
   * - _Type_: [Ec2EbsVolume](./aws-properties-deadline-fleet-ec2ebsvolume.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-servicemanagedec2instancecapabilities-rootebsvolume */
  RootEbsVolume?: Ec2EbsVolume
  /**
   * - The amount of vCPU to require for instances in this fleet.
   * - _Required_: Yes
   * - _Type_: [VCpuCountRange](./aws-properties-deadline-fleet-vcpucountrange.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-servicemanagedec2instancecapabilities-vcpucount */
  VCpuCount: VCpuCountRange
}

/**
 * The details of a customer managed fleet configuration.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html */

export interface CustomerManagedFleetConfiguration {
  /**
   * - The AWS Auto Scaling mode for the customer managed fleet configuration.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `NO_SCALING | EVENT_BASED_AUTO_SCALING`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-customermanagedfleetconfiguration-mode */
  Mode: string | Intrinsic
  /**
   * - The storage profile ID.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^sp-[0-9a-f]{32}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-customermanagedfleetconfiguration-storageprofileid */
  StorageProfileId?: string | Intrinsic
  /**
   * - The worker capabilities for a customer managed fleet configuration.
   * - _Required_: Yes
   * - _Type_: [CustomerManagedWorkerCapabilities](./aws-properties-deadline-fleet-customermanagedworkercapabilities.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-customermanagedfleetconfiguration-workercapabilities */
  WorkerCapabilities: CustomerManagedWorkerCapabilities
}

/**
 * The configuration details for a service managed Amazon EC2 fleet.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html */

export interface ServiceManagedEc2FleetConfiguration {
  /**
   * - The Amazon EC2 instance capabilities.
   * - _Required_: Yes
   * - _Type_: [ServiceManagedEc2InstanceCapabilities](./aws-properties-deadline-fleet-servicemanagedec2instancecapabilities.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-servicemanagedec2fleetconfiguration-instancecapabilities */
  InstanceCapabilities: ServiceManagedEc2InstanceCapabilities
  /**
   * - The Amazon EC2 market type.
   * - _Required_: Yes
   * - _Type_: [ServiceManagedEc2InstanceMarketOptions](./aws-properties-deadline-fleet-servicemanagedec2instancemarketoptions.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-servicemanagedec2fleetconfiguration-instancemarketoptions */
  InstanceMarketOptions: ServiceManagedEc2InstanceMarketOptions
}

/**
 * Fleet configuration details.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html */

export interface FleetConfiguration {
  /**
   * - The customer managed fleets within a fleet configuration.
   * - _Required_: No
   * - _Type_: [CustomerManagedFleetConfiguration](./aws-properties-deadline-fleet-customermanagedfleetconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-fleetconfiguration-customermanaged */
  CustomerManaged?: CustomerManagedFleetConfiguration
  /**
   * - The service managed Amazon EC2 instances for a fleet configuration.
   * - _Required_: No
   * - _Type_: [ServiceManagedEc2FleetConfiguration](./aws-properties-deadline-fleet-servicemanagedec2fleetconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-fleetconfiguration-servicemanagedec2 */
  ServiceManagedEc2?: ServiceManagedEc2FleetConfiguration
}

/**
 * Creates a fleet. Fleets gather information relating to compute, or capacity, for renders within your farms. You can choose to manage your own capacity or opt to have fleets fully managed by Deadline Cloud.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html */

export interface DeadlineFleet extends ResourceAttributes {
  Type: 'AWS::Deadline::Fleet'
  Properties: {
    /**
     * - The configuration details for the fleet.
     * - _Required_: Yes
     * - _Type_: [FleetConfiguration](./aws-properties-deadline-fleet-fleetconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-configuration */
    Configuration: FleetConfiguration
    /**
     * - A description that helps identify what the fleet is used for.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-description */
    Description?: string | Intrinsic
    /**
     * - The display name of the fleet summary to update.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-displayname */
    DisplayName: string | Intrinsic
    /**
     * - The farm ID.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^farm-[0-9a-f]{32}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-farmid */
    FarmId: string | Intrinsic
    /**
     * - The maximum number of workers specified in the fleet.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `2147483647`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-maxworkercount */
    MaxWorkerCount: number | Intrinsic
    /**
     * - The minimum number of workers in the fleet.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `2147483647`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-minworkercount */
    MinWorkerCount?: number | Intrinsic
    /**
     * - The IAM role that workers in the fleet use when processing jobs.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:(aws[a-zA-Z-]*):iam::\d{12}:role(/[!-.0-~]+)*[\w+=,.@-]+$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-rolearn */
    RoleArn: string | Intrinsic
    /**
     * - The tags to add to your fleet. Each tag consists of a tag key and a tag value. Tag keys and values are both required, but tag values can be empty strings.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-deadline-fleet-tag.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-fleet.html#cfn-deadline-fleet-tags */
    Tags?: Tag[]
  }
}
