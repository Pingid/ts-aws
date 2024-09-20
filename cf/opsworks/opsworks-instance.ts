import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html */

export interface TimeBasedAutoScaling {
  /**
   * - The schedule for Friday.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `[a-zA-Z0-9]+`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-timebasedautoscaling-friday */
  Friday?: Record<string, string | Intrinsic>
  /**
   * - The schedule for Monday.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `[a-zA-Z0-9]+`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-timebasedautoscaling-monday */
  Monday?: Record<string, string | Intrinsic>
  /**
   * - The schedule for Saturday.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `[a-zA-Z0-9]+`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-timebasedautoscaling-saturday */
  Saturday?: Record<string, string | Intrinsic>
  /**
   * - The schedule for Sunday.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `[a-zA-Z0-9]+`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-timebasedautoscaling-sunday */
  Sunday?: Record<string, string | Intrinsic>
  /**
   * - The schedule for Thursday.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `[a-zA-Z0-9]+`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-timebasedautoscaling-thursday */
  Thursday?: Record<string, string | Intrinsic>
  /**
   * - The schedule for Tuesday.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `[a-zA-Z0-9]+`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-timebasedautoscaling-tuesday */
  Tuesday?: Record<string, string | Intrinsic>
  /**
   * - The schedule for Wednesday.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `[a-zA-Z0-9]+`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-timebasedautoscaling-wednesday */
  Wednesday?: Record<string, string | Intrinsic>
}

/**
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html */

export interface EbsBlockDevice {
  /**
   * - Whether the volume is deleted on instance termination.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-ebsblockdevice-deleteontermination */
  DeleteOnTermination?: boolean | Intrinsic
  /**
   * - The number of I/O operations per second (IOPS) that the volume supports. For more information, see [EbsBlockDevice](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html).
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-ebsblockdevice-iops */
  Iops?: number | Intrinsic
  /**
   * - The snapshot ID.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-ebsblockdevice-snapshotid */
  SnapshotId?: string | Intrinsic
  /**
   * - The volume size, in GiB. For more information, see [EbsBlockDevice](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html).
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-ebsblockdevice-volumesize */
  VolumeSize?: number | Intrinsic
  /**
   * - The volume type. `gp2` for General Purpose (SSD) volumes, `io1` for Provisioned IOPS (SSD) volumes, `st1` for Throughput Optimized hard disk drives (HDD), `sc1` for Cold HDD,and `standard` for Magnetic volumes.
   * - If you specify the `io1` volume type, you must also specify a value for the `Iops` attribute. The maximum ratio of provisioned IOPS to requested volume size (in GiB) is 50:1. AWS uses the default volume size (in GiB) specified in the AMI attributes to set IOPS to 50 x (volume size).
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `gp2 | io1 | standard`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-ebsblockdevice-volumetype */
  VolumeType?: string | Intrinsic
}

/**
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html */

export interface BlockDeviceMapping {
  /**
   * - The device name that is exposed to the instance, such as `/dev/sdh`. For the root device, you can use the explicit device name or you can set this parameter to `ROOT_DEVICE` and AWS OpsWorks Stacks will provide the correct device name.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-blockdevicemapping-devicename */
  DeviceName?: string | Intrinsic
  /**
   * - An `EBSBlockDevice` that defines how to configure an Amazon EBS volume when the instance is launched. You can specify either the `VirtualName` or `Ebs`, but not both.
   * - _Required_: Conditional
   * - _Type_: [EbsBlockDevice](./aws-properties-opsworks-instance-ebsblockdevice.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-blockdevicemapping-ebs */
  Ebs?: EbsBlockDevice
  /**
   * - Suppresses the specified device included in the AMI's block device mapping.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-blockdevicemapping-nodevice */
  NoDevice?: string | Intrinsic
  /**
   * - The virtual device name. For more information, see [BlockDeviceMapping](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_BlockDeviceMapping.html). You can specify either the `VirtualName` or `Ebs`, but not both.
   * - _Required_: Conditional
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-blockdevicemapping-virtualname */
  VirtualName?: string | Intrinsic
}

/**
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html */

export interface OpsWorksInstance extends ResourceAttributes {
  Type: 'AWS::OpsWorks::Instance'
  Properties: {
    /**
     * - The default AWS OpsWorks Stacks agent version. You have the following options:
     * - The default setting is `INHERIT`. To specify an agent version, you must use the complete version number, not the abbreviated number shown on the console. For a list of available agent version numbers, call DescribeAgentVersions. AgentVersion cannot be set to Chef 12.2.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-agentversion */
    AgentVersion?: string | Intrinsic
    /**
     * - A custom AMI ID to be used to create the instance. The AMI should be based on one of the supported operating systems. For more information, see [Using Custom AMIs](https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-custom-ami.html).
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-amiid */
    AmiId?: string | Intrinsic
    /**
     * - The instance architecture. The default option is `x86_64`. Instance types do not necessarily support both architectures. For a list of the architectures that are supported by the different instance types, see [Instance Families and Types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html).
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `x86_64 | i386`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-architecture */
    Architecture?: string | Intrinsic
    /**
     * - For load-based or time-based instances, the type. Windows stacks can use only time-based instances.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `load | timer`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-autoscalingtype */
    AutoScalingType?: string | Intrinsic
    /**
     * - The Availability Zone of the AWS OpsWorks instance, such as `us-east-2a`.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-availabilityzone */
    AvailabilityZone?: string | Intrinsic
    /**
     * - An array of `BlockDeviceMapping` objects that specify the instance's block devices. For more information, see [Block Device Mapping](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html). Note that block device mappings are not supported for custom AMIs.
     * - _Required_: No
     * - _Type_: Array of [BlockDeviceMapping](./aws-properties-opsworks-instance-blockdevicemapping.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-blockdevicemappings */
    BlockDeviceMappings?: BlockDeviceMapping[]
    /**
     * - Whether to create an Amazon EBS-optimized instance.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-ebsoptimized */
    EbsOptimized?: boolean | Intrinsic
    /**
     * - A list of Elastic IP addresses to associate with the instance.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-elasticips */
    ElasticIps?: (string | Intrinsic)[]
    /**
     * - The instance host name. The following are character limits for instance host names.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-hostname */
    Hostname?: string | Intrinsic
    /**
     * - Whether to install operating system and package updates when the instance boots. The default value is `true`. To control when updates are installed, set this value to `false`. You must then update your instances manually by using CreateDeployment to run the `update_dependencies` stack command or by manually running `yum` (Amazon Linux) or `apt-get` (Ubuntu) on the instances.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-installupdatesonboot */
    InstallUpdatesOnBoot?: boolean | Intrinsic
    /**
     * - The instance type, such as `t2.micro`. For a list of supported instance types, open the stack in the console, choose **Instances**, and choose **\+ Instance**. The **Size** list contains the currently supported types. For more information, see [Instance Families and Types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html). The parameter values that you use to specify the various types are in the **API Name** column of the **Available Instance Types** table.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-instancetype */
    InstanceType: string | Intrinsic
    /**
     * - An array that contains the instance's layer IDs.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-layerids */
    LayerIds: (string | Intrinsic)[]
    /**
     * - The instance's operating system, which must be set to one of the following.
     * - Not all operating systems are supported with all versions of Chef. For more information about the supported operating systems, see [AWS OpsWorks Stacks Operating Systems](https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-os.html).
     * - The default option is the current Amazon Linux version. If you set this parameter to `Custom`, you must use the CreateInstance action's AmiId parameter to specify the custom AMI that you want to use. Block device mappings are not supported if the value is `Custom`. For more information about how to use custom AMIs with AWS OpsWorks Stacks, see [Using Custom AMIs](https://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-custom-ami.html).
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-os */
    Os?: string | Intrinsic
    /**
     * - The instance root device type. For more information, see [Storage for the Root Device](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ComponentsAMIs.html#storage-for-the-root-device).
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ebs | instance-store`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-rootdevicetype */
    RootDeviceType?: string | Intrinsic
    /**
     * - The instance's Amazon EC2 key-pair name.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-sshkeyname */
    SshKeyName?: string | Intrinsic
    /**
     * - The stack ID.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-stackid */
    StackId: string | Intrinsic
    /**
     * - The ID of the instance's subnet. If the stack is running in a VPC, you can use this parameter to override the stack's default subnet ID value and direct AWS OpsWorks Stacks to launch the instance in a different subnet.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-subnetid */
    SubnetId?: string | Intrinsic
    /**
     * - The instance's tenancy option. The default option is no tenancy, or if the instance is running in a VPC, inherit tenancy settings from the VPC. The following are valid values for this parameter: `dedicated`, `default`, or `host`. Because there are costs associated with changes in tenancy options, we recommend that you research tenancy options before choosing them for your instances. For more information about dedicated hosts, see [Dedicated Hosts Overview](https://aws.amazon.com/ec2/dedicated-hosts/) and [Amazon EC2 Dedicated Hosts](https://aws.amazon.com/ec2/dedicated-hosts/). For more information about dedicated instances, see [Dedicated Instances](https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/dedicated-instance.html) and [Amazon EC2 Dedicated Instances](https://aws.amazon.com/ec2/purchasing-options/dedicated-instances/).
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-tenancy */
    Tenancy?: string | Intrinsic
    /**
     * - The time-based scaling configuration for the instance.
     * - _Required_: No
     * - _Type_: [TimeBasedAutoScaling](./aws-properties-opsworks-instance-timebasedautoscaling.html)
     * - _Allowed values_: `load | timer`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-timebasedautoscaling */
    TimeBasedAutoScaling?: TimeBasedAutoScaling
    /**
     * - The instance's virtualization type, `paravirtual` or `hvm`.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-virtualizationtype */
    VirtualizationType?: string | Intrinsic
    /**
     * - A list of AWS OpsWorks volume IDs to associate with the instance. For more information, see [`AWS::OpsWorks::Volume`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-volume.html).
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opsworks-instance.html#cfn-opsworks-instance-volumes */
    Volumes?: (string | Intrinsic)[]
  }
}
