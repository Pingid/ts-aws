import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Specifies the CPU options for the instance. When you specify CPU options, you must specify both the number of CPU cores and threads per core.
 * Modifying the CPU options for an instance results in instance [replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement).
 * For more information, see [Optimize CPU options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html) in the _Amazon Elastic Compute Cloud User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html */

export interface CpuOptions {
  /**
   * - The number of CPU cores for the instance.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-cpuoptions-corecount */
  CoreCount?: number | Intrinsic
  /**
   * - The number of threads per CPU core.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-cpuoptions-threadspercore */
  ThreadsPerCore?: number | Intrinsic
}

/**
 * Specifies the credit option for CPU usage of a T instance.
 * `CreditSpecification` is a property of the [AWS::EC2::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html) resource.
 * For more information, see [Burstable performance instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html) in the _Amazon EC2 User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html */

export interface CreditSpecification {
  /**
   * - The credit option for CPU usage of the instance.
   * - Valid values: `standard` | `unlimited`
   * - T3 instances with `host` tenancy do not support the `unlimited` CPU credit option.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-creditspecification-cpucredits */
  CPUCredits?: string | Intrinsic
}

/**
 * ###### Note
 *
 * Amazon Elastic Graphics reached end of life on January 8, 2024. For workloads that require graphics acceleration, we recommend that you use Amazon EC2 G4ad, G4dn, or G5 instances.
 * Specifies the type of Elastic GPU. An Elastic GPU is a GPU resource that you can attach to your Amazon EC2 instance to accelerate the graphics performance of your applications.
 * `ElasticGpuSpecification` is a property of the [AWS::EC2::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html) resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html */

export interface ElasticGpuSpecification {
  /**
   * - The type of Elastic Graphics accelerator.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-elasticgpuspecification-type */
  Type: string | Intrinsic
}

/**
 * Specifies the Elastic Inference Accelerator for the instance.
 * `ElasticInferenceAccelerator` is a property of the [AWS::EC2::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html) resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html */

export interface ElasticInferenceAccelerator {
  /**
   * - The number of elastic inference accelerators to attach to the instance.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-elasticinferenceaccelerator-count */
  Count?: number | Intrinsic
  /**
   * - The type of elastic inference accelerator. The possible values are `eia1.medium`, `eia1.large`, `eia1.xlarge`, `eia2.medium`, `eia2.large`, and `eia2.xlarge`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-elasticinferenceaccelerator-type */
  Type: string | Intrinsic
}

/**
 * Indicates whether the instance is enabled for AWS Nitro Enclaves.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html */

export interface EnclaveOptions {
  /**
   * - If this parameter is set to `true`, the instance is enabled for AWS Nitro Enclaves; otherwise, it is not enabled for AWS Nitro Enclaves.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-enclaveoptions-enabled */
  Enabled?: boolean | Intrinsic
}

/**
 * Specifies the hibernation options for the instance.
 * `HibernationOptions` is a property of the [AWS::EC2::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html) resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html */

export interface HibernationOptions {
  /**
   * - Set to `true` to enable your instance for hibernation.
   * - For Spot Instances, if you set `Configured` to `true`, either omit the `InstanceInterruptionBehavior` parameter (for [`SpotMarketOptions`](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SpotMarketOptions.html)), or set it to `hibernate`. When `Configured` is true:
   * - Default: `false`
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-hibernationoptions-configured */
  Configured?: boolean | Intrinsic
}

/**
 * Specifies the IPv6 address for the instance.
 * `InstanceIpv6Address` is a property of the [AWS::EC2::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html) resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html */

export interface InstanceIpv6Address {
  /**
   * - The IPv6 address.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-instanceipv6address-ipv6address */
  Ipv6Address: string | Intrinsic
}

/**
 * Specifies a launch template to use when launching an Amazon EC2 instance.
 * You must specify the following:
 * *   The ID or the name of the launch template, but not both.
 *
 * *   The version of the launch template.
 * For information about creating a launch template, see [AWS::EC2::LaunchTemplate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html) and [Create a launch template](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html#create-launch-template) in the _Amazon EC2 User Guide_. For example launch templates, see the [Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#aws-resource-ec2-launchtemplate--examples) for `AWS::EC2::LaunchTemplate`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html */

export interface LaunchTemplateSpecification {
  /**
   * - The ID of the launch template.
   * - You must specify either the launch template ID or the launch template name, but not both.
   * - _Required_: Conditional
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-launchtemplatespecification-launchtemplateid */
  LaunchTemplateId?: string | Intrinsic
  /**
   * - The name of the launch template.
   * - You must specify either the launch template ID or the launch template name, but not both.
   * - _Required_: Conditional
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-launchtemplatespecification-launchtemplatename */
  LaunchTemplateName?: string | Intrinsic
  /**
   * - The version number of the launch template. You must specify this property.
   * - To specify the default version of the template, use the `Fn::GetAtt` intrinsic function to retrieve the `DefaultVersionNumber` attribute of the launch template. To specify the latest version of the template, use `Fn::GetAtt` to retrieve the `LatestVersionNumber` attribute. For more information, see [AWS::EC2:LaunchTemplate return values for Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#aws-resource-ec2-launchtemplate-return-values-fn--getatt).
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-launchtemplatespecification-version */
  Version?: string | Intrinsic
}

/**
 * Specifies the license configuration to use.
 * `LicenseSpecification` is a property of the [AWS::EC2::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html) resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html */

export interface LicenseSpecification {
  /**
   * - The Amazon Resource Name (ARN) of the license configuration.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-licensespecification-licenseconfigurationarn */
  LicenseConfigurationArn: string | Intrinsic
}

/**
 * The type of hostnames to assign to instances in the subnet at launch. For IPv4 only subnets, an instance DNS name must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name must be based on the instance ID. For dual-stack subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. For more information, see [Amazon EC2 instance hostname types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the _Amazon Elastic Compute Cloud User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html */

export interface PrivateDnsNameOptions {
  /**
   * - Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records. For more information, see [Amazon EC2 instance hostname types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the _Amazon Elastic Compute Cloud User Guide_.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-privatednsnameoptions-enableresourcenamednsaaaarecord */
  EnableResourceNameDnsAAAARecord?: boolean | Intrinsic
  /**
   * - Indicates whether to respond to DNS queries for instance hostnames with DNS A records. For more information, see [Amazon EC2 instance hostname types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the _Amazon Elastic Compute Cloud User Guide_.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-privatednsnameoptions-enableresourcenamednsarecord */
  EnableResourceNameDnsARecord?: boolean | Intrinsic
  /**
   * - The type of hostnames to assign to instances in the subnet at launch. For IPv4 only subnets, an instance DNS name must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name must be based on the instance ID. For dual-stack subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. For more information, see [Amazon EC2 instance hostname types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the _Amazon Elastic Compute Cloud User Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ip-name | resource-name`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-privatednsnameoptions-hostnametype */
  HostnameType?: string | Intrinsic
}

/**
 * Specifies a tag. For more information, see [Resource tags](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html */

export interface Tag {
  /**
   * - The tag key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-tag-value */
  Value: string | Intrinsic
}

/**
 * Specifies a volume to attach to an instance.
 * `Volume` is an embedded property of the [AWS::EC2::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html) resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html */

export interface Volume {
  /**
   * - The device name (for example, `/dev/sdh` or `xvdh`).
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-volume-device */
  Device: string | Intrinsic
  /**
   * - The ID of the EBS volume. The volume and instance must be within the same Availability Zone.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-volume-volumeid */
  VolumeId: string | Intrinsic
}

/**
 * Specifies a block device for an EBS volume.
 * `Ebs` is a property of the [BlockDeviceMapping](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-blockdevicemapping.html) property type.
 * ###### Important
 *
 * After the instance is running, you can modify only the `DeleteOnTermination` parameters for the attached volumes without interrupting the instance. Modifying any other parameter results in instance [replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html */

export interface Ebs {
  /**
   * - Indicates whether the EBS volume is deleted on instance termination. For more information, see [Preserving Amazon EBS volumes on instance termination](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/terminating-instances.html#preserving-volumes-on-termination) in the _Amazon EC2 User Guide_.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-ebs-deleteontermination */
  DeleteOnTermination?: boolean | Intrinsic
  /**
   * - Indicates whether the volume should be encrypted. The effect of setting the encryption state to `true` depends on the volume origin (new or from a snapshot), starting encryption state, ownership, and whether encryption by default is enabled. For more information, see [Encryption by default](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default) in the _Amazon Elastic Compute Cloud User Guide_.
   * - Encrypted Amazon EBS volumes must be attached to instances that support Amazon EBS encryption. For more information, see [Supported instance types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#EBSEncryption_supported_instances).
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-ebs-encrypted */
  Encrypted?: boolean | Intrinsic
  /**
   * - The number of I/O operations per second (IOPS). For `gp3`, `io1`, and `io2` volumes, this represents the number of IOPS that are provisioned for the volume. For `gp2` volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.
   * - The following are the supported values for each volume type:
   * - For `io1` and `io2` volumes, we guarantee 64,000 IOPS only for [Instances built on the Nitro System](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances). Other instance families guarantee performance up to 32,000 IOPS.
   * - This parameter is required for `io1` and `io2` volumes. The default for `gp3` volumes is 3,000 IOPS. This parameter is not supported for `gp2`, `st1`, `sc1`, or `standard` volumes.
   * - _Required_: Conditional
   * - _Type_: Integer
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-ebs-iops */
  Iops?: number | Intrinsic
  /**
   * - The identifier of the AWS KMS key to use for Amazon EBS encryption. If `KmsKeyId` is specified, the encrypted state must be `true`. If the encrypted state is `true` but you do not specify `KmsKeyId`, your KMS key for EBS is used.
   * - You can specify the KMS key using any of the following:
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-ebs-kmskeyid */
  KmsKeyId?: string | Intrinsic
  /**
   * - The ID of the snapshot.
   * - If you specify both `SnapshotId` and `VolumeSize`, `VolumeSize` must be equal or greater than the size of the snapshot.
   * - _Required_: Conditional
   * - _Type_: String
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-ebs-snapshotid */
  SnapshotId?: string | Intrinsic
  /**
   * - The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size. If you specify a snapshot, the default is the snapshot size. You can specify a volume size that is equal to or larger than the snapshot size.
   * - The following are the supported volumes sizes for each volume type:
   * - _Required_: Conditional
   * - _Type_: Integer
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-ebs-volumesize */
  VolumeSize?: number | Intrinsic
  /**
   * - The volume type. For more information, see [Amazon EBS volume types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html) in the _Amazon EC2 User Guide_. If the volume type is `io1` or `io2`, you must specify the IOPS that the volume supports.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `standard | io1 | io2 | gp2 | sc1 | st1 | gp3`
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-ebs-volumetype */
  VolumeType?: string | Intrinsic
}

/**
 * Specifies a secondary private IPv4 address for a network interface.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html */

export interface PrivateIpAddressSpecification {
  /**
   * - Indicates whether the private IPv4 address is the primary private IPv4 address. Only one IPv4 address can be designated as primary.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-privateipaddressspecification-primary */
  Primary: boolean | Intrinsic
  /**
   * - The private IPv4 address.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-privateipaddressspecification-privateipaddress */
  PrivateIpAddress: string | Intrinsic
}

/**
 * Specifies input parameter values for an SSM document in AWS Systems Manager.
 * `AssociationParameter` is a property of the [SsmAssociation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance-ssmassociation.html) property type.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html */

export interface AssociationParameter {
  /**
   * - The name of an input parameter that is in the associated SSM document.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-associationparameter-key */
  Key: string | Intrinsic
  /**
   * - The value of an input parameter.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-associationparameter-value */
  Value: (string | Intrinsic)[]
}

/**
 * Specifies a block device mapping for an instance. You must specify exactly one of the following properties: `VirtualName`, `Ebs`, or `NoDevice`.
 * `BlockDeviceMapping` is a property of the [AWS::EC2::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html) resource.
 * ###### Important
 *
 * After the instance is running, you can modify only the `DeleteOnTermination` parameter for the attached volumes without interrupting the instance. Modifying any other parameter results in instance [replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html */

export interface BlockDeviceMapping {
  /**
   * - The device name (for example, `/dev/sdh` or `xvdh`).
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-blockdevicemapping-devicename */
  DeviceName: string | Intrinsic
  /**
   * - Parameters used to automatically set up EBS volumes when the instance is launched.
   * - _Required_: Conditional
   * - _Type_: [Ebs](./aws-properties-ec2-instance-ebs.html)
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-blockdevicemapping-ebs */
  Ebs?: Ebs
  /**
   * - To omit the device from the block device mapping, specify an empty string.
   * - _Required_: Conditional
   * - _Type_: Json
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-blockdevicemapping-nodevice */
  NoDevice?: any | Intrinsic
  /**
   * - The virtual device name (`ephemeral`N). The name must be in the form `ephemeral` _X_ where _X_ is a number starting from zero (0). For example, an instance type with 2 available instance store volumes can specify mappings for `ephemeral0` and `ephemeral1`. The number of available instance store volumes depends on the instance type. After you connect to the instance, you must mount the volume.
   * - NVMe instance store volumes are automatically enumerated and assigned a device name. Including them in your block device mapping has no effect.
   * - _Constraints_: For M3 instances, you must specify instance store volumes in the block device mapping for the instance. When you launch an M3 instance, we ignore any instance store volumes specified in the block device mapping for the AMI.
   * - _Required_: Conditional
   * - _Type_: String
   * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-blockdevicemapping-virtualname */
  VirtualName?: string | Intrinsic
}

/**
 * Specifies a network interface that is to be attached to an instance.
 * You can create a network interface when launching an instance. For an example, see the [AWS::EC2::Instance examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html#aws-properties-ec2-instance--examples--Automatically_assign_a_public_IP_address).
 * Alternatively, you can attach an existing network interface when launching an instance. For an example, see the [AWS::EC2:NetworkInterface examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterface.html#aws-resource-ec2-networkinterface--examples).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html */

export interface NetworkInterface {
  /**
   * - Indicates whether to assign a carrier IP address to the network interface.
   * - You can only assign a carrier IP address to a network interface that is in a subnet in a Wavelength Zone. For more information about carrier IP addresses, see [Carrier IP address](https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#provider-owned-ip) in the _AWS Wavelength Developer Guide_.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-networkinterface-associatecarrieripaddress */
  AssociateCarrierIpAddress?: boolean | Intrinsic
  /**
   * - Indicates whether to assign a public IPv4 address to an instance. Applies only if creating a network interface when launching an instance. The network interface must be the primary network interface. If launching into a default subnet, the default value is `true`.
   * - AWS charges for all public IPv4 addresses, including public IPv4 addresses associated with running instances and Elastic IP addresses. For more information, see the _Public IPv4 Address_ tab on the [VPC pricing page](https://aws.amazon.com/vpc/pricing/).
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-networkinterface-associatepublicipaddress */
  AssociatePublicIpAddress?: boolean | Intrinsic
  /**
   * - Indicates whether the network interface is deleted when the instance is terminated. Applies only if creating a network interface when launching an instance.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-networkinterface-deleteontermination */
  DeleteOnTermination?: boolean | Intrinsic
  /**
   * - The description of the network interface. Applies only if creating a network interface when launching an instance.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-networkinterface-description */
  Description?: string | Intrinsic
  /**
   * - The position of the network interface in the attachment order. A primary network interface has a device index of 0.
   * - If you create a network interface when launching an instance, you must specify the device index.
   * - _Required_: Conditional
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-networkinterface-deviceindex */
  DeviceIndex?: string | Intrinsic
  /**
   * - The IDs of the security groups for the network interface. Applies only if creating a network interface when launching an instance.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-networkinterface-groupset */
  GroupSet?: (string | Intrinsic)[]
  /**
   * - A number of IPv6 addresses to assign to the network interface. Amazon EC2 chooses the IPv6 addresses from the range of the subnet. You cannot specify this option and the option to assign specific IPv6 addresses in the same request. You can specify this option if you've specified a minimum number of instances to launch.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-networkinterface-ipv6addresscount */
  Ipv6AddressCount?: number | Intrinsic
  /**
   * - The IPv6 addresses to assign to the network interface. You cannot specify this option and the option to assign a number of IPv6 addresses in the same request. You cannot specify this option if you've specified a minimum number of instances to launch.
   * - _Required_: No
   * - _Type_: Array of [InstanceIpv6Address](./aws-properties-ec2-instance-instanceipv6address.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-networkinterface-ipv6addresses */
  Ipv6Addresses?: InstanceIpv6Address[]
  /**
   * - The ID of the network interface, when attaching an existing network interface.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-networkinterface-networkinterfaceid */
  NetworkInterfaceId?: string | Intrinsic
  /**
   * - The private IPv4 address of the network interface. Applies only if creating a network interface when launching an instance.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-networkinterface-privateipaddress */
  PrivateIpAddress?: string | Intrinsic
  /**
   * - One or more private IPv4 addresses to assign to the network interface. Only one private IPv4 address can be designated as primary.
   * - _Required_: No
   * - _Type_: Array of [PrivateIpAddressSpecification](./aws-properties-ec2-instance-privateipaddressspecification.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-networkinterface-privateipaddresses */
  PrivateIpAddresses?: PrivateIpAddressSpecification[]
  /**
   * - The number of secondary private IPv4 addresses. You can't specify this option and specify more than one private IP address using the private IP addresses option.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-networkinterface-secondaryprivateipaddresscount */
  SecondaryPrivateIpAddressCount?: number | Intrinsic
  /**
   * - The ID of the subnet associated with the network interface.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-networkinterface-subnetid */
  SubnetId?: string | Intrinsic
}

/**
 * Specifies the SSM document and parameter values in AWS Systems Manager to associate with an instance.
 * `SsmAssociations` is a property of the [AWS::EC2::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html) resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html */

export interface SsmAssociation {
  /**
   * - The input parameter values to use with the associated SSM document.
   * - _Required_: No
   * - _Type_: Array of [AssociationParameter](./aws-properties-ec2-instance-associationparameter.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-ssmassociation-associationparameters */
  AssociationParameters?: AssociationParameter[]
  /**
   * - The name of an SSM document to associate with the instance.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-ssmassociation-documentname */
  DocumentName: string | Intrinsic
}

/**
 * Specifies an EC2 instance.
 * If an Elastic IP address is attached to your instance, AWS CloudFormation reattaches the Elastic IP address after it updates the instance. For more information about updating stacks, see [AWS CloudFormation Stacks Updates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html */

export interface EC2Instance extends ResourceAttributes {
  Type: 'AWS::EC2::Instance'
  Properties: {
    /**
     * - This property is reserved for internal use. If you use it, the stack fails with this error: `Bad property set: [Testing this property] (Service: AmazonEC2; Status Code: 400; Error Code: InvalidParameterCombination; Request ID: 0XXXXXX-49c7-4b40-8bcc-76885dcXXXXX)`.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-additionalinfo */
    AdditionalInfo?: string | Intrinsic
    /**
     * - Indicates whether the instance is associated with a dedicated host. If you want the instance to always restart on the same host on which it was launched, specify `host`. If you want the instance to restart on any available host, but try to launch onto the last host it ran on (on a best-effort basis), specify `default`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `default | host`
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-affinity */
    Affinity?: string | Intrinsic
    /**
     * - The Availability Zone of the instance.
     * - If not specified, an Availability Zone will be automatically chosen for you based on the load balancing criteria for the Region.
     * - This parameter is not supported by [DescribeImageAttribute](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeImageAttribute.html).
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-availabilityzone */
    AvailabilityZone?: string | Intrinsic
    /**
     * - The block device mapping entries that defines the block devices to attach to the instance at launch.
     * - By default, the block devices specified in the block device mapping for the AMI are used. You can override the AMI block device mapping using the instance block device mapping. For the root volume, you can override only the volume size, volume type, volume encryption settings, and the `DeleteOnTermination` setting.
     * - _Required_: No
     * - _Type_: Array of [BlockDeviceMapping](./aws-properties-ec2-instance-blockdevicemapping.html)
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-blockdevicemappings */
    BlockDeviceMappings?: BlockDeviceMapping[]
    /**
     * - The CPU options for the instance. For more information, see [Optimize CPU options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html) in the _Amazon Elastic Compute Cloud User Guide_.
     * - _Required_: No
     * - _Type_: [CpuOptions](./aws-properties-ec2-instance-cpuoptions.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-cpuoptions */
    CpuOptions?: CpuOptions
    /**
     * - The credit option for CPU usage of the burstable performance instance. Valid values are `standard` and `unlimited`. To change this attribute after launch, use [ModifyInstanceCreditSpecification](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceCreditSpecification.html). For more information, see [Burstable performance instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html) in the _Amazon EC2 User Guide_.
     * - Default: `standard` (T2 instances) or `unlimited` (T3/T3a/T4g instances)
     * - For T3 instances with `host` tenancy, only `standard` is supported.
     * - _Required_: No
     * - _Type_: [CreditSpecification](./aws-properties-ec2-instance-creditspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-creditspecification */
    CreditSpecification?: CreditSpecification
    /**
     * - If you set this parameter to `true`, you can't terminate the instance using the Amazon EC2 console, CLI, or API; otherwise, you can. To change this attribute after launch, use [ModifyInstanceAttribute](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceAttribute.html). Alternatively, if you set `InstanceInitiatedShutdownBehavior` to `terminate`, you can terminate the instance by running the shutdown command from the instance.
     * - Default: `false`
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-disableapitermination */
    DisableApiTermination?: boolean | Intrinsic
    /**
     * - Indicates whether the instance is optimized for Amazon EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal Amazon EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS-optimized instance.
     * - Default: `false`
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-ebsoptimized */
    EbsOptimized?: boolean | Intrinsic
    /**
     * - An elastic GPU to associate with the instance.
     * - _Required_: No
     * - _Type_: Array of [ElasticGpuSpecification](./aws-properties-ec2-instance-elasticgpuspecification.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-elasticgpuspecifications */
    ElasticGpuSpecifications?: ElasticGpuSpecification[]
    /**
     * - An elastic inference accelerator to associate with the instance.
     * - _Required_: No
     * - _Type_: Array of [ElasticInferenceAccelerator](./aws-properties-ec2-instance-elasticinferenceaccelerator.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-elasticinferenceaccelerators */
    ElasticInferenceAccelerators?: ElasticInferenceAccelerator[]
    /**
     * - Indicates whether the instance is enabled for AWS Nitro Enclaves.
     * - _Required_: No
     * - _Type_: [EnclaveOptions](./aws-properties-ec2-instance-enclaveoptions.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-enclaveoptions */
    EnclaveOptions?: EnclaveOptions
    /**
     * - Indicates whether an instance is enabled for hibernation. This parameter is valid only if the instance meets the [hibernation prerequisites](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html). For more information, see [Hibernate your Amazon EC2 instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html) in the _Amazon EC2 User Guide_.
     * - You can't enable hibernation and AWS Nitro Enclaves on the same instance.
     * - _Required_: No
     * - _Type_: [HibernationOptions](./aws-properties-ec2-instance-hibernationoptions.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-hibernationoptions */
    HibernationOptions?: HibernationOptions
    /**
     * - If you specify host for the `Affinity` property, the ID of a dedicated host that the instance is associated with. If you don't specify an ID, Amazon EC2 launches the instance onto any available, compatible dedicated host in your account. This type of launch is called an untargeted launch. Note that for untargeted launches, you must have a compatible, dedicated host available to successfully launch instances.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-hostid */
    HostId?: string | Intrinsic
    /**
     * - The ARN of the host resource group in which to launch the instances. If you specify a host resource group ARN, omit the **Tenancy** parameter or set it to `host`.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-hostresourcegrouparn */
    HostResourceGroupArn?: string | Intrinsic
    /**
     * - The name of an IAM instance profile. To create a new IAM instance profile, use the [AWS::IAM::InstanceProfile](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-instanceprofile.html) resource.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-iaminstanceprofile */
    IamInstanceProfile?: string | Intrinsic
    /**
     * - The ID of the AMI. An AMI ID is required to launch an instance and must be specified here or in a launch template.
     * - _Required_: Conditional
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-imageid */
    ImageId?: string | Intrinsic
    /**
     * - Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).
     * - Default: `stop`
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `stop | terminate`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-instanceinitiatedshutdownbehavior */
    InstanceInitiatedShutdownBehavior?: string | Intrinsic
    /**
     * - The instance type. For more information, see [Instance types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) in the _Amazon EC2 User Guide_.
     * - When you change your EBS-backed instance type, instance restart or replacement behavior depends on the instance type compatibility between the old and new types. An instance with an instance store volume as the root volume is always replaced. For more information, see [Change the instance type](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-resize.html) in the _Amazon EC2 User Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `a1.medium | a1.large | a1.xlarge | a1.2xlarge | a1.4xlarge | a1.metal | c1.medium | c1.xlarge | c3.large | c3.xlarge | c3.2xlarge | c3.4xlarge | c3.8xlarge | c4.large | c4.xlarge | c4.2xlarge | c4.4xlarge | c4.8xlarge | c5.large | c5.xlarge | c5.2xlarge | c5.4xlarge | c5.9xlarge | c5.12xlarge | c5.18xlarge | c5.24xlarge | c5.metal | c5a.large | c5a.xlarge | c5a.2xlarge | c5a.4xlarge | c5a.8xlarge | c5a.12xlarge | c5a.16xlarge | c5a.24xlarge | c5ad.large | c5ad.xlarge | c5ad.2xlarge | c5ad.4xlarge | c5ad.8xlarge | c5ad.12xlarge | c5ad.16xlarge | c5ad.24xlarge | c5d.large | c5d.xlarge | c5d.2xlarge | c5d.4xlarge | c5d.9xlarge | c5d.12xlarge | c5d.18xlarge | c5d.24xlarge | c5d.metal | c5n.large | c5n.xlarge | c5n.2xlarge | c5n.4xlarge | c5n.9xlarge | c5n.18xlarge | c5n.metal | c6g.medium | c6g.large | c6g.xlarge | c6g.2xlarge | c6g.4xlarge | c6g.8xlarge | c6g.12xlarge | c6g.16xlarge | c6g.metal | c6gd.medium | c6gd.large | c6gd.xlarge | c6gd.2xlarge | c6gd.4xlarge | c6gd.8xlarge | c6gd.12xlarge | c6gd.16xlarge | c6gd.metal | c6gn.medium | c6gn.large | c6gn.xlarge | c6gn.2xlarge | c6gn.4xlarge | c6gn.8xlarge | c6gn.12xlarge | c6gn.16xlarge | c6i.large | c6i.xlarge | c6i.2xlarge | c6i.4xlarge | c6i.8xlarge | c6i.12xlarge | c6i.16xlarge | c6i.24xlarge | c6i.32xlarge | c6i.metal | cc1.4xlarge | cc2.8xlarge | cg1.4xlarge | cr1.8xlarge | d2.xlarge | d2.2xlarge | d2.4xlarge | d2.8xlarge | d3.xlarge | d3.2xlarge | d3.4xlarge | d3.8xlarge | d3en.xlarge | d3en.2xlarge | d3en.4xlarge | d3en.6xlarge | d3en.8xlarge | d3en.12xlarge | dl1.24xlarge | f1.2xlarge | f1.4xlarge | f1.16xlarge | g2.2xlarge | g2.8xlarge | g3.4xlarge | g3.8xlarge | g3.16xlarge | g3s.xlarge | g4ad.xlarge | g4ad.2xlarge | g4ad.4xlarge | g4ad.8xlarge | g4ad.16xlarge | g4dn.xlarge | g4dn.2xlarge | g4dn.4xlarge | g4dn.8xlarge | g4dn.12xlarge | g4dn.16xlarge | g4dn.metal | g5.xlarge | g5.2xlarge | g5.4xlarge | g5.8xlarge | g5.12xlarge | g5.16xlarge | g5.24xlarge | g5.48xlarge | g5g.xlarge | g5g.2xlarge | g5g.4xlarge | g5g.8xlarge | g5g.16xlarge | g5g.metal | hi1.4xlarge | hpc6a.48xlarge | hs1.8xlarge | h1.2xlarge | h1.4xlarge | h1.8xlarge | h1.16xlarge | i2.xlarge | i2.2xlarge | i2.4xlarge | i2.8xlarge | i3.large | i3.xlarge | i3.2xlarge | i3.4xlarge | i3.8xlarge | i3.16xlarge | i3.metal | i3en.large | i3en.xlarge | i3en.2xlarge | i3en.3xlarge | i3en.6xlarge | i3en.12xlarge | i3en.24xlarge | i3en.metal | im4gn.large | im4gn.xlarge | im4gn.2xlarge | im4gn.4xlarge | im4gn.8xlarge | im4gn.16xlarge | inf1.xlarge | inf1.2xlarge | inf1.6xlarge | inf1.24xlarge | is4gen.medium | is4gen.large | is4gen.xlarge | is4gen.2xlarge | is4gen.4xlarge | is4gen.8xlarge | m1.small | m1.medium | m1.large | m1.xlarge | m2.xlarge | m2.2xlarge | m2.4xlarge | m3.medium | m3.large | m3.xlarge | m3.2xlarge | m4.large | m4.xlarge | m4.2xlarge | m4.4xlarge | m4.10xlarge | m4.16xlarge | m5.large | m5.xlarge | m5.2xlarge | m5.4xlarge | m5.8xlarge | m5.12xlarge | m5.16xlarge | m5.24xlarge | m5.metal | m5a.large | m5a.xlarge | m5a.2xlarge | m5a.4xlarge | m5a.8xlarge | m5a.12xlarge | m5a.16xlarge | m5a.24xlarge | m5ad.large | m5ad.xlarge | m5ad.2xlarge | m5ad.4xlarge | m5ad.8xlarge | m5ad.12xlarge | m5ad.16xlarge | m5ad.24xlarge | m5d.large | m5d.xlarge | m5d.2xlarge | m5d.4xlarge | m5d.8xlarge | m5d.12xlarge | m5d.16xlarge | m5d.24xlarge | m5d.metal | m5dn.large | m5dn.xlarge | m5dn.2xlarge | m5dn.4xlarge | m5dn.8xlarge | m5dn.12xlarge | m5dn.16xlarge | m5dn.24xlarge | m5dn.metal | m5n.large | m5n.xlarge | m5n.2xlarge | m5n.4xlarge | m5n.8xlarge | m5n.12xlarge | m5n.16xlarge | m5n.24xlarge | m5n.metal | m5zn.large | m5zn.xlarge | m5zn.2xlarge | m5zn.3xlarge | m5zn.6xlarge | m5zn.12xlarge | m5zn.metal | m6a.large | m6a.xlarge | m6a.2xlarge | m6a.4xlarge | m6a.8xlarge | m6a.12xlarge | m6a.16xlarge | m6a.24xlarge | m6a.32xlarge | m6a.48xlarge | m6g.metal | m6g.medium | m6g.large | m6g.xlarge | m6g.2xlarge | m6g.4xlarge | m6g.8xlarge | m6g.12xlarge | m6g.16xlarge | m6gd.metal | m6gd.medium | m6gd.large | m6gd.xlarge | m6gd.2xlarge | m6gd.4xlarge | m6gd.8xlarge | m6gd.12xlarge | m6gd.16xlarge | m6i.large | m6i.xlarge | m6i.2xlarge | m6i.4xlarge | m6i.8xlarge | m6i.12xlarge | m6i.16xlarge | m6i.24xlarge | m6i.32xlarge | m6i.metal | mac1.metal | p2.xlarge | p2.8xlarge | p2.16xlarge | p3.2xlarge | p3.8xlarge | p3.16xlarge | p3dn.24xlarge | p4d.24xlarge | r3.large | r3.xlarge | r3.2xlarge | r3.4xlarge | r3.8xlarge | r4.large | r4.xlarge | r4.2xlarge | r4.4xlarge | r4.8xlarge | r4.16xlarge | r5.large | r5.xlarge | r5.2xlarge | r5.4xlarge | r5.8xlarge | r5.12xlarge | r5.16xlarge | r5.24xlarge | r5.metal | r5a.large | r5a.xlarge | r5a.2xlarge | r5a.4xlarge | r5a.8xlarge | r5a.12xlarge | r5a.16xlarge | r5a.24xlarge | r5ad.large | r5ad.xlarge | r5ad.2xlarge | r5ad.4xlarge | r5ad.8xlarge | r5ad.12xlarge | r5ad.16xlarge | r5ad.24xlarge | r5b.large | r5b.xlarge | r5b.2xlarge | r5b.4xlarge | r5b.8xlarge | r5b.12xlarge | r5b.16xlarge | r5b.24xlarge | r5b.metal | r5d.large | r5d.xlarge | r5d.2xlarge | r5d.4xlarge | r5d.8xlarge | r5d.12xlarge | r5d.16xlarge | r5d.24xlarge | r5d.metal | r5dn.large | r5dn.xlarge | r5dn.2xlarge | r5dn.4xlarge | r5dn.8xlarge | r5dn.12xlarge | r5dn.16xlarge | r5dn.24xlarge | r5dn.metal | r5n.large | r5n.xlarge | r5n.2xlarge | r5n.4xlarge | r5n.8xlarge | r5n.12xlarge | r5n.16xlarge | r5n.24xlarge | r5n.metal | r6g.medium | r6g.large | r6g.xlarge | r6g.2xlarge | r6g.4xlarge | r6g.8xlarge | r6g.12xlarge | r6g.16xlarge | r6g.metal | r6gd.medium | r6gd.large | r6gd.xlarge | r6gd.2xlarge | r6gd.4xlarge | r6gd.8xlarge | r6gd.12xlarge | r6gd.16xlarge | r6gd.metal | r6i.large | r6i.xlarge | r6i.2xlarge | r6i.4xlarge | r6i.8xlarge | r6i.12xlarge | r6i.16xlarge | r6i.24xlarge | r6i.32xlarge | r6i.metal | t1.micro | t2.nano | t2.micro | t2.small | t2.medium | t2.large | t2.xlarge | t2.2xlarge | t3.nano | t3.micro | t3.small | t3.medium | t3.large | t3.xlarge | t3.2xlarge | t3a.nano | t3a.micro | t3a.small | t3a.medium | t3a.large | t3a.xlarge | t3a.2xlarge | t4g.nano | t4g.micro | t4g.small | t4g.medium | t4g.large | t4g.xlarge | t4g.2xlarge | u-6tb1.56xlarge | u-6tb1.112xlarge | u-9tb1.112xlarge | u-12tb1.112xlarge | u-6tb1.metal | u-9tb1.metal | u-12tb1.metal | u-18tb1.metal | u-24tb1.metal | vt1.3xlarge | vt1.6xlarge | vt1.24xlarge | x1.16xlarge | x1.32xlarge | x1e.xlarge | x1e.2xlarge | x1e.4xlarge | x1e.8xlarge | x1e.16xlarge | x1e.32xlarge | x2iezn.2xlarge | x2iezn.4xlarge | x2iezn.6xlarge | x2iezn.8xlarge | x2iezn.12xlarge | x2iezn.metal | x2gd.medium | x2gd.large | x2gd.xlarge | x2gd.2xlarge | x2gd.4xlarge | x2gd.8xlarge | x2gd.12xlarge | x2gd.16xlarge | x2gd.metal | z1d.large | z1d.xlarge | z1d.2xlarge | z1d.3xlarge | z1d.6xlarge | z1d.12xlarge | z1d.metal | x2idn.16xlarge | x2idn.24xlarge | x2idn.32xlarge | x2iedn.xlarge | x2iedn.2xlarge | x2iedn.4xlarge | x2iedn.8xlarge | x2iedn.16xlarge | x2iedn.24xlarge | x2iedn.32xlarge | c6a.large | c6a.xlarge | c6a.2xlarge | c6a.4xlarge | c6a.8xlarge | c6a.12xlarge | c6a.16xlarge | c6a.24xlarge | c6a.32xlarge | c6a.48xlarge | c6a.metal | m6a.metal | i4i.large | i4i.xlarge | i4i.2xlarge | i4i.4xlarge | i4i.8xlarge | i4i.16xlarge | i4i.32xlarge | i4i.metal | x2idn.metal | x2iedn.metal | c7g.medium | c7g.large | c7g.xlarge | c7g.2xlarge | c7g.4xlarge | c7g.8xlarge | c7g.12xlarge | c7g.16xlarge | mac2.metal | c6id.large | c6id.xlarge | c6id.2xlarge | c6id.4xlarge | c6id.8xlarge | c6id.12xlarge | c6id.16xlarge | c6id.24xlarge | c6id.32xlarge | c6id.metal | m6id.large | m6id.xlarge | m6id.2xlarge | m6id.4xlarge | m6id.8xlarge | m6id.12xlarge | m6id.16xlarge | m6id.24xlarge | m6id.32xlarge | m6id.metal | r6id.large | r6id.xlarge | r6id.2xlarge | r6id.4xlarge | r6id.8xlarge | r6id.12xlarge | r6id.16xlarge | r6id.24xlarge | r6id.32xlarge | r6id.metal | r6a.large | r6a.xlarge | r6a.2xlarge | r6a.4xlarge | r6a.8xlarge | r6a.12xlarge | r6a.16xlarge | r6a.24xlarge | r6a.32xlarge | r6a.48xlarge | r6a.metal | p4de.24xlarge | u-3tb1.56xlarge | u-18tb1.112xlarge | u-24tb1.112xlarge | trn1.2xlarge | trn1.32xlarge | hpc6id.32xlarge | c6in.large | c6in.xlarge | c6in.2xlarge | c6in.4xlarge | c6in.8xlarge | c6in.12xlarge | c6in.16xlarge | c6in.24xlarge | c6in.32xlarge | m6in.large | m6in.xlarge | m6in.2xlarge | m6in.4xlarge | m6in.8xlarge | m6in.12xlarge | m6in.16xlarge | m6in.24xlarge | m6in.32xlarge | m6idn.large | m6idn.xlarge | m6idn.2xlarge | m6idn.4xlarge | m6idn.8xlarge | m6idn.12xlarge | m6idn.16xlarge | m6idn.24xlarge | m6idn.32xlarge | r6in.large | r6in.xlarge | r6in.2xlarge | r6in.4xlarge | r6in.8xlarge | r6in.12xlarge | r6in.16xlarge | r6in.24xlarge | r6in.32xlarge | r6idn.large | r6idn.xlarge | r6idn.2xlarge | r6idn.4xlarge | r6idn.8xlarge | r6idn.12xlarge | r6idn.16xlarge | r6idn.24xlarge | r6idn.32xlarge | c7g.metal | m7g.medium | m7g.large | m7g.xlarge | m7g.2xlarge | m7g.4xlarge | m7g.8xlarge | m7g.12xlarge | m7g.16xlarge | m7g.metal | r7g.medium | r7g.large | r7g.xlarge | r7g.2xlarge | r7g.4xlarge | r7g.8xlarge | r7g.12xlarge | r7g.16xlarge | r7g.metal | c6in.metal | m6in.metal | m6idn.metal | r6in.metal | r6idn.metal | inf2.xlarge | inf2.8xlarge | inf2.24xlarge | inf2.48xlarge | trn1n.32xlarge | i4g.large | i4g.xlarge | i4g.2xlarge | i4g.4xlarge | i4g.8xlarge | i4g.16xlarge | hpc7g.4xlarge | hpc7g.8xlarge | hpc7g.16xlarge | c7gn.medium | c7gn.large | c7gn.xlarge | c7gn.2xlarge | c7gn.4xlarge | c7gn.8xlarge | c7gn.12xlarge | c7gn.16xlarge | p5.48xlarge | m7i.large | m7i.xlarge | m7i.2xlarge | m7i.4xlarge | m7i.8xlarge | m7i.12xlarge | m7i.16xlarge | m7i.24xlarge | m7i.48xlarge | m7i-flex.large | m7i-flex.xlarge | m7i-flex.2xlarge | m7i-flex.4xlarge | m7i-flex.8xlarge | m7a.medium | m7a.large | m7a.xlarge | m7a.2xlarge | m7a.4xlarge | m7a.8xlarge | m7a.12xlarge | m7a.16xlarge | m7a.24xlarge | m7a.32xlarge | m7a.48xlarge | m7a.metal-48xl | hpc7a.12xlarge | hpc7a.24xlarge | hpc7a.48xlarge | hpc7a.96xlarge | c7gd.medium | c7gd.large | c7gd.xlarge | c7gd.2xlarge | c7gd.4xlarge | c7gd.8xlarge | c7gd.12xlarge | c7gd.16xlarge | m7gd.medium | m7gd.large | m7gd.xlarge | m7gd.2xlarge | m7gd.4xlarge | m7gd.8xlarge | m7gd.12xlarge | m7gd.16xlarge | r7gd.medium | r7gd.large | r7gd.xlarge | r7gd.2xlarge | r7gd.4xlarge | r7gd.8xlarge | r7gd.12xlarge | r7gd.16xlarge | r7a.medium | r7a.large | r7a.xlarge | r7a.2xlarge | r7a.4xlarge | r7a.8xlarge | r7a.12xlarge | r7a.16xlarge | r7a.24xlarge | r7a.32xlarge | r7a.48xlarge | c7i.large | c7i.xlarge | c7i.2xlarge | c7i.4xlarge | c7i.8xlarge | c7i.12xlarge | c7i.16xlarge | c7i.24xlarge | c7i.48xlarge | mac2-m2pro.metal | r7iz.large | r7iz.xlarge | r7iz.2xlarge | r7iz.4xlarge | r7iz.8xlarge | r7iz.12xlarge | r7iz.16xlarge | r7iz.32xlarge | c7a.medium | c7a.large | c7a.xlarge | c7a.2xlarge | c7a.4xlarge | c7a.8xlarge | c7a.12xlarge | c7a.16xlarge | c7a.24xlarge | c7a.32xlarge | c7a.48xlarge | c7a.metal-48xl | r7a.metal-48xl | r7i.large | r7i.xlarge | r7i.2xlarge | r7i.4xlarge | r7i.8xlarge | r7i.12xlarge | r7i.16xlarge | r7i.24xlarge | r7i.48xlarge | dl2q.24xlarge | mac2-m2.metal | i4i.12xlarge | i4i.24xlarge | c7i.metal-24xl | c7i.metal-48xl | m7i.metal-24xl | m7i.metal-48xl | r7i.metal-24xl | r7i.metal-48xl | r7iz.metal-16xl | r7iz.metal-32xl | c7gd.metal | m7gd.metal | r7gd.metal | g6.xlarge | g6.2xlarge | g6.4xlarge | g6.8xlarge | g6.12xlarge | g6.16xlarge | g6.24xlarge | g6.48xlarge | gr6.4xlarge | gr6.8xlarge | c7i-flex.large | c7i-flex.xlarge | c7i-flex.2xlarge | c7i-flex.4xlarge | c7i-flex.8xlarge | u7i-12tb.224xlarge | u7in-16tb.224xlarge | u7in-24tb.224xlarge | u7in-32tb.224xlarge | u7ib-12tb.224xlarge | c7gn.metal | r8g.medium | r8g.large | r8g.xlarge | r8g.2xlarge | r8g.4xlarge | r8g.8xlarge | r8g.12xlarge | r8g.16xlarge | r8g.24xlarge | r8g.48xlarge | r8g.metal-24xl | r8g.metal-48xl | mac2-m1ultra.metal`
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-instancetype */
    InstanceType?: string | Intrinsic
    /**
     * - The number of IPv6 addresses to associate with the primary network interface. Amazon EC2 chooses the IPv6 addresses from the range of your subnet. You cannot specify this option and the option to assign specific IPv6 addresses in the same request. You can specify this option if you've specified a minimum number of instances to launch.
     * - You cannot specify this option and the network interfaces option in the same request.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-ipv6addresscount */
    Ipv6AddressCount?: number | Intrinsic
    /**
     * - The IPv6 addresses from the range of the subnet to associate with the primary network interface. You cannot specify this option and the option to assign a number of IPv6 addresses in the same request. You cannot specify this option if you've specified a minimum number of instances to launch.
     * - You cannot specify this option and the network interfaces option in the same request.
     * - _Required_: No
     * - _Type_: Array of [InstanceIpv6Address](./aws-properties-ec2-instance-instanceipv6address.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-ipv6addresses */
    Ipv6Addresses?: InstanceIpv6Address[]
    /**
     * - The ID of the kernel.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-kernelid */
    KernelId?: string | Intrinsic
    /**
     * - The name of the key pair. You can create a key pair using [CreateKeyPair](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateKeyPair.html) or [ImportKeyPair](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportKeyPair.html).
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-keyname */
    KeyName?: string | Intrinsic
    /**
     * - The launch template. Any additional parameters that you specify for the new instance overwrite the corresponding parameters included in the launch template.
     * - _Required_: No
     * - _Type_: [LaunchTemplateSpecification](./aws-properties-ec2-instance-launchtemplatespecification.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-launchtemplate */
    LaunchTemplate?: LaunchTemplateSpecification
    /**
     * - The license configurations.
     * - _Required_: No
     * - _Type_: Array of [LicenseSpecification](./aws-properties-ec2-instance-licensespecification.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-licensespecifications */
    LicenseSpecifications?: LicenseSpecification[]
    /**
     * - Specifies whether detailed monitoring is enabled for the instance. Specify `true` to enable detailed monitoring. Otherwise, basic monitoring is enabled. For more information about detailed monitoring, see [Enable or turn off detailed monitoring for your instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch-new.html) in the _Amazon EC2 User Guide_.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-monitoring */
    Monitoring?: boolean | Intrinsic
    /**
     * - The network interfaces to associate with the instance.
     * - _Required_: No
     * - _Type_: Array of [NetworkInterface](./aws-properties-ec2-instance-networkinterface.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-networkinterfaces */
    NetworkInterfaces?: NetworkInterface[]
    /**
     * - The name of an existing placement group that you want to launch the instance into (cluster | partition | spread).
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-placementgroupname */
    PlacementGroupName?: string | Intrinsic
    /**
     * - The options for the instance hostname.
     * - _Required_: No
     * - _Type_: [PrivateDnsNameOptions](./aws-properties-ec2-instance-privatednsnameoptions.html)
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-privatednsnameoptions */
    PrivateDnsNameOptions?: PrivateDnsNameOptions
    /**
     * - The primary IPv4 address. You must specify a value from the IPv4 address range of the subnet.
     * - Only one private IP address can be designated as primary. You can't specify this option if you've specified the option to designate a private IP address as the primary IP address in a network interface specification. You cannot specify this option if you're launching more than one instance in the request.
     * - You cannot specify this option and the network interfaces option in the same request.
     * - If you make an update to an instance that requires replacement, you must assign a new private IP address. During a replacement, AWS CloudFormation creates a new instance but doesn't delete the old instance until the stack has successfully updated. If the stack update fails, AWS CloudFormation uses the old instance to roll back the stack to the previous working state. The old and new instances cannot have the same private IP address.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-privateipaddress */
    PrivateIpAddress?: string | Intrinsic
    /**
     * - Indicates whether to assign the tags from the instance to all of the volumes attached to the instance at launch. If you specify `true` and you assign tags to the instance, those tags are automatically assigned to all of the volumes that you attach to the instance at launch. If you specify `false`, those tags are not assigned to the attached volumes.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-propagatetagstovolumeoncreation */
    PropagateTagsToVolumeOnCreation?: boolean | Intrinsic
    /**
     * - The ID of the RAM disk to select. Some kernels require additional drivers at launch. Check the kernel requirements for information about whether you need to specify a RAM disk. To find kernel requirements, go to the AWS Resource Center and search for the kernel ID.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-ramdiskid */
    RamdiskId?: string | Intrinsic
    /**
     * - The IDs of the security groups. You can specify the IDs of existing security groups and references to resources created by the stack template.
     * - If you specify a network interface, you must specify any security groups as part of the network interface.
     * - _Required_: Conditional
     * - _Type_: Array of String
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-securitygroupids */
    SecurityGroupIds?: (string | Intrinsic)[]
    /**
     * - \[Default VPC\] The names of the security groups. For a nondefault VPC, you must use security group IDs instead.
     * - You cannot specify this option and the network interfaces option in the same request. The list can contain both the name of existing Amazon EC2 security groups or references to AWS::EC2::SecurityGroup resources created in the template.
     * - Default: Amazon EC2 uses the default security group.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-securitygroups */
    SecurityGroups?: (string | Intrinsic)[]
    /**
     * - Enable or disable source/destination checks, which ensure that the instance is either the source or the destination of any traffic that it receives. If the value is `true`, source/destination checks are enabled; otherwise, they are disabled. The default value is `true`. You must disable source/destination checks if the instance runs services such as network address translation, routing, or firewalls.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-sourcedestcheck */
    SourceDestCheck?: boolean | Intrinsic
    /**
     * - The SSM [document](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-document.html) and parameter values in AWS Systems Manager to associate with this instance. To use this property, you must specify an IAM instance profile role for the instance. For more information, see [Create an IAM instance profile for Systems Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-configuring-access-role.html) in the _AWS Systems Manager User Guide_.
     * - _Required_: No
     * - _Type_: Array of [SsmAssociation](./aws-properties-ec2-instance-ssmassociation.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-ssmassociations */
    SsmAssociations?: SsmAssociation[]
    /**
     * - The ID of the subnet to launch the instance into.
     * - If you specify a network interface, you must specify any subnets as part of the network interface instead of using this parameter.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-subnetid */
    SubnetId?: string | Intrinsic
    /**
     * - The tags to add to the instance. These tags are not applied to the EBS volumes, such as the root volume, unless [PropagateTagsToVolumeOnCreation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html#cfn-ec2-instance-propagatetagstovolumeoncreation) is `true`.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-ec2-instance-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-tags */
    Tags?: Tag[]
    /**
     * - The tenancy of the instance. An instance with a tenancy of `dedicated` runs on single-tenant hardware.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `default | dedicated | host`
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-tenancy */
    Tenancy?: string | Intrinsic
    /**
     * - The parameters or scripts to store as user data. Any scripts in user data are run when you launch the instance. User data is limited to 16 KB. You must provide base64-encoded text. For more information, see [Fn::Base64](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-base64.html).
     * - If the root volume is an EBS volume and you update user data, CloudFormation restarts the instance. If the root volume is an instance store volume and you update user data, the instance is replaced.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-userdata */
    UserData?: string | Intrinsic
    /**
     * - The volumes to attach to the instance.
     * - _Required_: No
     * - _Type_: Array of [Volume](./aws-properties-ec2-instance-volume.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-instance.html#cfn-ec2-instance-volumes */
    Volumes?: Volume[]
  }
}
