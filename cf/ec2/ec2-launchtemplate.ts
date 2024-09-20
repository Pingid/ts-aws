import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Specifies the CPU options for an instance. For more information, see [Optimize CPU options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html) in the _Amazon Elastic Compute Cloud User Guide_.
 * `CpuOptions` is a property of [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface CpuOptions {
  /**
   * - Indicates whether to enable the instance for AMD SEV-SNP. AMD SEV-SNP is supported with M6a, R6a, and C6a instance types only. For more information, see [AMD SEV-SNP](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/sev-snp.html).
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `enabled | disabled`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-cpuoptions-amdsevsnp */
  AmdSevSnp?: string | Intrinsic
  /**
   * - The number of CPU cores for the instance.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-cpuoptions-corecount */
  CoreCount?: number | Intrinsic
  /**
   * - The number of threads per CPU core. To disable multithreading for the instance, specify a value of `1`. Otherwise, specify the default value of `2`.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-cpuoptions-threadspercore */
  ThreadsPerCore?: number | Intrinsic
}

/**
 * Specifies the credit option for CPU usage of a T2, T3, or T3a instance.
 * `CreditSpecification` is a property of [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface CreditSpecification {
  /**
   * - The credit option for CPU usage of a T instance.
   * - Valid values: `standard` | `unlimited`
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-creditspecification-cpucredits */
  CpuCredits?: string | Intrinsic
}

/**
 * ###### Note
 *
 * Amazon Elastic Graphics reached end of life on January 8, 2024. For workloads that require graphics acceleration, we recommend that you use Amazon EC2 G4ad, G4dn, or G5 instances.
 * Specifies a specification for an Elastic GPU for an Amazon EC2 launch template.
 * `ElasticGpuSpecification` is a property of [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface ElasticGpuSpecification {
  /**
   * - The type of Elastic Graphics accelerator.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-elasticgpuspecification-type */
  Type?: string | Intrinsic
}

/**
 * Specifies an elastic inference accelerator.
 * `LaunchTemplateElasticInferenceAccelerator` is a property of [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface LaunchTemplateElasticInferenceAccelerator {
  /**
   * - The number of elastic inference accelerators to attach to the instance.
   * - Default: 1
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplateelasticinferenceaccelerator-count */
  Count?: number | Intrinsic
  /**
   * - The type of elastic inference accelerator. The possible values are eia1.medium, eia1.large, and eia1.xlarge.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplateelasticinferenceaccelerator-type */
  Type?: string | Intrinsic
}

/**
 * Indicates whether the instance is enabled for AWS Nitro Enclaves.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface EnclaveOptions {
  /**
   * - If this parameter is set to `true`, the instance is enabled for AWS Nitro Enclaves; otherwise, it is not enabled for AWS Nitro Enclaves.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-enclaveoptions-enabled */
  Enabled?: boolean | Intrinsic
}

/**
 * Specifies whether your instance is configured for hibernation. This parameter is valid only if the instance meets the [hibernation prerequisites](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#hibernating-prerequisites). For more information, see [Hibernate Your Instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html) in the _Amazon EC2 User Guide_.
 * `HibernationOptions` is a property of [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface HibernationOptions {
  /**
   * - If you set this parameter to `true`, the instance is enabled for hibernation.
   * - Default: `false`
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-hibernationoptions-configured */
  Configured?: boolean | Intrinsic
}

/**
 * Specifies an IAM instance profile, which is a container for an IAM role for your instance. You can use an IAM role to distribute your AWS credentials to your instances.
 * If you are creating the launch template for use with an Amazon EC2 Auto Scaling group, you can specify either the name or the ARN of the instance profile, but not both.
 * `IamInstanceProfile` is a property of [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface IamInstanceProfile {
  /**
   * - The Amazon Resource Name (ARN) of the instance profile.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-iaminstanceprofile-arn */
  Arn?: string | Intrinsic
  /**
   * - The name of the instance profile.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-iaminstanceprofile-name */
  Name?: string | Intrinsic
}

/**
 * Specifies a license configuration for an instance.
 * `LicenseSpecification` is a property of [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface LicenseSpecification {
  /**
   * - The Amazon Resource Name (ARN) of the license configuration.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-licensespecification-licenseconfigurationarn */
  LicenseConfigurationArn?: string | Intrinsic
}

/**
 * The maintenance options of your instance.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface MaintenanceOptions {
  /**
   * - Disables the automatic recovery behavior of your instance or sets it to default.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `default | disabled`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-maintenanceoptions-autorecovery */
  AutoRecovery?: string | Intrinsic
}

/**
 * The metadata options for the instance. For more information, see [Instance metadata and user data](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html) in the _Amazon EC2 User Guide_.
 * `MetadataOptions` is a property of [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface MetadataOptions {
  /**
   * - Enables or disables the HTTP metadata endpoint on your instances. If the parameter is not specified, the default state is `enabled`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `disabled | enabled`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-metadataoptions-httpendpoint */
  HttpEndpoint?: string | Intrinsic
  /**
   * - Enables or disables the IPv6 endpoint for the instance metadata service.
   * - Default: `disabled`
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `disabled | enabled`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-metadataoptions-httpprotocolipv6 */
  HttpProtocolIpv6?: string | Intrinsic
  /**
   * - The desired HTTP PUT response hop limit for instance metadata requests. The larger the number, the further instance metadata requests can travel.
   * - Default: `1`
   * - Possible values: Integers from 1 to 64
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-metadataoptions-httpputresponsehoplimit */
  HttpPutResponseHopLimit?: number | Intrinsic
  /**
   * - Indicates whether IMDSv2 is required.
   * - Default: If the value of `ImdsSupport` for the Amazon Machine Image (AMI) for your instance is `v2.0`, the default is `required`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `optional | required`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-metadataoptions-httptokens */
  HttpTokens?: string | Intrinsic
  /**
   * - Set to `enabled` to allow access to instance tags from the instance metadata. Set to `disabled` to turn off access to instance tags from the instance metadata. For more information, see [Work with instance tags using the instance metadata](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html#work-with-tags-in-IMDS).
   * - Default: `disabled`
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `disabled | enabled`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-metadataoptions-instancemetadatatags */
  InstanceMetadataTags?: string | Intrinsic
}

/**
 * Specifies whether detailed monitoring is enabled for an instance. For more information about detailed monitoring, see [Enable or turn off detailed monitoring for your instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch-new.html) in the _Amazon EC2 User Guide_.
 * `Monitoring` is a property of [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface Monitoring {
  /**
   * - Specify `true` to enable detailed monitoring. Otherwise, basic monitoring is enabled.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-monitoring-enabled */
  Enabled?: boolean | Intrinsic
}

/**
 * Specifies the placement of an instance.
 * `Placement` is a property of [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface Placement {
  /**
   * - The affinity setting for an instance on a Dedicated Host.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-placement-affinity */
  Affinity?: string | Intrinsic
  /**
   * - The Availability Zone for the instance.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-placement-availabilityzone */
  AvailabilityZone?: string | Intrinsic
  /**
   * - The Group Id of a placement group. You must specify the Placement Group **Group Id** to launch an instance in a shared placement group.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-placement-groupid */
  GroupId?: string | Intrinsic
  /**
   * - The name of the placement group for the instance.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-placement-groupname */
  GroupName?: string | Intrinsic
  /**
   * - The ID of the Dedicated Host for the instance.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-placement-hostid */
  HostId?: string | Intrinsic
  /**
   * - The ARN of the host resource group in which to launch the instances. If you specify a host resource group ARN, omit the **Tenancy** parameter or set it to `host`.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-placement-hostresourcegrouparn */
  HostResourceGroupArn?: string | Intrinsic
  /**
   * - The number of the partition the instance should launch in. Valid only if the placement group strategy is set to `partition`.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-placement-partitionnumber */
  PartitionNumber?: number | Intrinsic
  /**
   * - Reserved for future use.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-placement-spreaddomain */
  SpreadDomain?: string | Intrinsic
  /**
   * - The tenancy of the instance. An instance with a tenancy of dedicated runs on single-tenant hardware.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `default | dedicated | host`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-placement-tenancy */
  Tenancy?: string | Intrinsic
}

/**
 * The hostname type for EC2 instances launched into this subnet and how DNS A and AAAA record queries should be handled. For more information, see [Amazon EC2 instance hostname types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the _Amazon Elastic Compute Cloud User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface PrivateDnsNameOptions {
  /**
   * - Indicates whether to respond to DNS queries for instance hostnames with DNS AAAA records.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-privatednsnameoptions-enableresourcenamednsaaaarecord */
  EnableResourceNameDnsAAAARecord?: boolean | Intrinsic
  /**
   * - Indicates whether to respond to DNS queries for instance hostnames with DNS A records.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-privatednsnameoptions-enableresourcenamednsarecord */
  EnableResourceNameDnsARecord?: boolean | Intrinsic
  /**
   * - The type of hostname for EC2 instances. For IPv4 only subnets, an instance DNS name must be based on the instance IPv4 address. For IPv6 only subnets, an instance DNS name must be based on the instance ID. For dual-stack subnets, you can specify whether DNS names use the instance IPv4 address or the instance ID. For more information, see [Amazon EC2 instance hostname types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the _Amazon Elastic Compute Cloud User Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ip-name | resource-name`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-privatednsnameoptions-hostnametype */
  HostnameType?: string | Intrinsic
}

/**
 * Specifies the tags to apply to resources that are created during instance launch.
 * `TagSpecification` is a property type of [`TagSpecifications`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html#cfn-ec2-launchtemplate-launchtemplatedata-tagspecifications). [`TagSpecifications`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html#cfn-ec2-launchtemplate-launchtemplatedata-tagspecifications) is a property of [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface TagSpecification {
  /**
   * - The type of resource to tag. You can specify tags for the following resource types only: `instance` | `volume` | `network-interface` | `spot-instances-request`. If the instance does not include the resource type that you specify, the instance launch fails. For example, not all instance types include a volume.
   * - To tag a resource after it has been created, see [CreateTags](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTags.html).
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-tagspecification-resourcetype */
  ResourceType?: string | Intrinsic
  /**
   * - The tags to apply to the resource.
   * - _Required_: No
   * - _Type_: Array of [Tag](./aws-properties-ec2-launchtemplate-tag.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-tagspecification-tags */
  Tags?: Tag[]
}

/**
 * Specifies a tag. For more information, see [Resource tags](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface Tag {
  /**
   * - The tag key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-tag-value */
  Value: string | Intrinsic
}

/**
 * Parameters for a block device for an EBS volume in an Amazon EC2 launch template.
 * `Ebs` is a property of [AWS::EC2::LaunchTemplate BlockDeviceMapping](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-blockdevicemapping.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface Ebs {
  /**
   * - Indicates whether the EBS volume is deleted on instance termination.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-ebs-deleteontermination */
  DeleteOnTermination?: boolean | Intrinsic
  /**
   * - Indicates whether the EBS volume is encrypted. Encrypted volumes can only be attached to instances that support Amazon EBS encryption. If you are creating a volume from a snapshot, you can't specify an encryption value.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-ebs-encrypted */
  Encrypted?: boolean | Intrinsic
  /**
   * - The number of I/O operations per second (IOPS). For `gp3`, `io1`, and `io2` volumes, this represents the number of IOPS that are provisioned for the volume. For `gp2` volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.
   * - The following are the supported values for each volume type:
   * - For `io2` volumes, you can achieve up to 256,000 IOPS on [instances built on the Nitro System](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances). On other instances, you can achieve performance up to 32,000 IOPS.
   * - This parameter is supported for `io1`, `io2`, and `gp3` volumes only.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-ebs-iops */
  Iops?: number | Intrinsic
  /**
   * - The ARN of the symmetric AWS Key Management Service (AWS KMS) CMK used for encryption.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-ebs-kmskeyid */
  KmsKeyId?: string | Intrinsic
  /**
   * - The ID of the snapshot.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-ebs-snapshotid */
  SnapshotId?: string | Intrinsic
  /**
   * - The throughput to provision for a `gp3` volume, with a maximum of 1,000 MiB/s.
   * - Valid Range: Minimum value of 125. Maximum value of 1000.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-ebs-throughput */
  Throughput?: number | Intrinsic
  /**
   * - The size of the volume, in GiBs. You must specify either a snapshot ID or a volume size. The following are the supported volumes sizes for each volume type:
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-ebs-volumesize */
  VolumeSize?: number | Intrinsic
  /**
   * - The volume type. For more information, see [Amazon EBS volume types](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html) in the _Amazon EBS User Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `standard | io1 | io2 | gp2 | sc1 | st1 | gp3`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-ebs-volumetype */
  VolumeType?: string | Intrinsic
}

/**
 * Specifies a target Capacity Reservation.
 * `CapacityReservationTarget` is a property of the [Amazon EC2 LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html) property type.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface CapacityReservationTarget {
  /**
   * - The ID of the Capacity Reservation in which to run the instance.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-capacityreservationtarget-capacityreservationid */
  CapacityReservationId?: string | Intrinsic
  /**
   * - The ARN of the Capacity Reservation resource group in which to run the instance.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-capacityreservationtarget-capacityreservationresourcegrouparn */
  CapacityReservationResourceGroupArn?: string | Intrinsic
}

/**
 * Specifies options for Spot Instances.
 * `SpotOptions` is a property of [AWS::EC2::LaunchTemplate InstanceMarketOptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata-instancemarketoptions.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface SpotOptions {
  /**
   * - Deprecated.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-spotoptions-blockdurationminutes */
  BlockDurationMinutes?: number | Intrinsic
  /**
   * - The behavior when a Spot Instance is interrupted. The default is `terminate`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `hibernate | stop | terminate`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-spotoptions-instanceinterruptionbehavior */
  InstanceInterruptionBehavior?: string | Intrinsic
  /**
   * - The maximum hourly price you're willing to pay for the Spot Instances. We do not recommend using this parameter because it can lead to increased interruptions. If you do not specify this parameter, you will pay the current Spot price.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-spotoptions-maxprice */
  MaxPrice?: string | Intrinsic
  /**
   * - The Spot Instance request type.
   * - If you are using Spot Instances with an Auto Scaling group, use `one-time` requests, as the Amazon EC2 Auto Scaling service handles requesting new Spot Instances whenever the group is below its desired capacity.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `one-time | persistent`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-spotoptions-spotinstancetype */
  SpotInstanceType?: string | Intrinsic
  /**
   * - The end date of the request, in UTC format (_YYYY-MM-DD_T_HH:MM:SS_Z). Supported only for persistent requests.
   * - Default: 7 days from the current date
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-spotoptions-validuntil */
  ValidUntil?: string | Intrinsic
}

/**
 * The minimum and maximum number of accelerators (GPUs, FPGAs, or AWS Inferentia chips) on an instance.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface AcceleratorCount {
  /**
   * - The maximum number of accelerators. To specify no maximum limit, omit this parameter. To exclude accelerator-enabled instance types, set `Max` to `0`.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-acceleratorcount-max */
  Max?: number | Intrinsic
  /**
   * - The minimum number of accelerators. To specify no minimum limit, omit this parameter.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-acceleratorcount-min */
  Min?: number | Intrinsic
}

/**
 * The minimum and maximum amount of total accelerator memory, in MiB.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface AcceleratorTotalMemoryMiB {
  /**
   * - The maximum amount of accelerator memory, in MiB. To specify no maximum limit, omit this parameter.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-acceleratortotalmemorymib-max */
  Max?: number | Intrinsic
  /**
   * - The minimum amount of accelerator memory, in MiB. To specify no minimum limit, omit this parameter.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-acceleratortotalmemorymib-min */
  Min?: number | Intrinsic
}

/**
 * The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see [Amazon EBS–optimized instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html) in the _Amazon EC2 User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface BaselineEbsBandwidthMbps {
  /**
   * - The maximum baseline bandwidth, in Mbps. To specify no maximum limit, omit this parameter.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-baselineebsbandwidthmbps-max */
  Max?: number | Intrinsic
  /**
   * - The minimum baseline bandwidth, in Mbps. To specify no minimum limit, omit this parameter.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-baselineebsbandwidthmbps-min */
  Min?: number | Intrinsic
}

/**
 * The minimum and maximum amount of memory per vCPU, in GiB.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface MemoryGiBPerVCpu {
  /**
   * - The maximum amount of memory per vCPU, in GiB. To specify no maximum limit, omit this parameter.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-memorygibpervcpu-max */
  Max?: number | Intrinsic
  /**
   * - The minimum amount of memory per vCPU, in GiB. To specify no minimum limit, omit this parameter.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-memorygibpervcpu-min */
  Min?: number | Intrinsic
}

/**
 * The minimum and maximum amount of memory, in MiB.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface MemoryMiB {
  /**
   * - The maximum amount of memory, in MiB. To specify no maximum limit, omit this parameter.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-memorymib-max */
  Max?: number | Intrinsic
  /**
   * - The minimum amount of memory, in MiB. To specify no minimum limit, specify `0`.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-memorymib-min */
  Min?: number | Intrinsic
}

/**
 * The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps).
 * ###### Note
 *
 * Setting the minimum bandwidth does not guarantee that your instance will achieve the minimum bandwidth. Amazon EC2 will identify instance types that support the specified minimum bandwidth, but the actual bandwidth of your instance might go below the specified minimum at times. For more information, see [Available instance bandwidth](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-network-bandwidth.html#available-instance-bandwidth) in the _Amazon EC2 User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface NetworkBandwidthGbps {
  /**
   * - The maximum amount of network bandwidth, in Gbps. To specify no maximum limit, omit this parameter.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-networkbandwidthgbps-max */
  Max?: number | Intrinsic
  /**
   * - The minimum amount of network bandwidth, in Gbps. If this parameter is not specified, there is no minimum limit.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-networkbandwidthgbps-min */
  Min?: number | Intrinsic
}

/**
 * The minimum and maximum number of network interfaces.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface NetworkInterfaceCount {
  /**
   * - The maximum number of network interfaces. To specify no maximum limit, omit this parameter.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-networkinterfacecount-max */
  Max?: number | Intrinsic
  /**
   * - The minimum number of network interfaces. To specify no minimum limit, omit this parameter.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-networkinterfacecount-min */
  Min?: number | Intrinsic
}

/**
 * The minimum and maximum amount of total local storage, in GB.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface TotalLocalStorageGB {
  /**
   * - The maximum amount of total local storage, in GB. To specify no maximum limit, omit this parameter.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-totallocalstoragegb-max */
  Max?: number | Intrinsic
  /**
   * - The minimum amount of total local storage, in GB. To specify no minimum limit, omit this parameter.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-totallocalstoragegb-min */
  Min?: number | Intrinsic
}

/**
 * The minimum and maximum number of vCPUs.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface VCpuCount {
  /**
   * - The maximum number of vCPUs. To specify no maximum limit, omit this parameter.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-vcpucount-max */
  Max?: number | Intrinsic
  /**
   * - The minimum number of vCPUs. To specify no minimum limit, specify `0`.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-vcpucount-min */
  Min?: number | Intrinsic
}

/**
 * A security group connection tracking specification that enables you to set the idle timeout for connection tracking on an Elastic network interface. For more information, see [Connection tracking timeouts](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-connection-tracking.html#connection-tracking-timeouts) in the _Amazon EC2 User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface ConnectionTrackingSpecification {
  /**
   * - Timeout (in seconds) for idle TCP connections in an established state. Min: 60 seconds. Max: 432000 seconds (5 days). Default: 432000 seconds. Recommended: Less than 432000 seconds.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-connectiontrackingspecification-tcpestablishedtimeout */
  TcpEstablishedTimeout?: number | Intrinsic
  /**
   * - Timeout (in seconds) for idle UDP flows classified as streams which have seen more than one request-response transaction. Min: 60 seconds. Max: 180 seconds (3 minutes). Default: 180 seconds.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-connectiontrackingspecification-udpstreamtimeout */
  UdpStreamTimeout?: number | Intrinsic
  /**
   * - Timeout (in seconds) for idle UDP flows that have seen traffic only in a single direction or a single request-response transaction. Min: 30 seconds. Max: 60 seconds. Default: 30 seconds.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-connectiontrackingspecification-udptimeout */
  UdpTimeout?: number | Intrinsic
}

/**
 * Specifies an IPv4 prefix for a network interface.
 * `Ipv4PrefixSpecification` is a property of [AWS::EC2::LaunchTemplate NetworkInterface](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-networkinterface.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface Ipv4PrefixSpecification {
  /**
   * - The IPv4 prefix. For information, see [Assigning prefixes to network interfaces](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-prefix-eni.html) in the _Amazon EC2 User Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-ipv4prefixspecification-ipv4prefix */
  Ipv4Prefix?: string | Intrinsic
}

/**
 * Specifies an IPv6 address in an Amazon EC2 launch template.
 * `Ipv6Add` is a property of [AWS::EC2::LaunchTemplate NetworkInterface](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-networkinterface.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface Ipv6Add {
  /**
   * - One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet. You can't use this option if you're specifying a number of IPv6 addresses.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-ipv6add-ipv6address */
  Ipv6Address?: string | Intrinsic
}

/**
 * Specifies an IPv6 prefix for a network interface.
 * `Ipv6PrefixSpecification` is a property of [AWS::EC2::LaunchTemplate NetworkInterface](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-networkinterface.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface Ipv6PrefixSpecification {
  /**
   * - The IPv6 prefix.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-ipv6prefixspecification-ipv6prefix */
  Ipv6Prefix?: string | Intrinsic
}

/**
 * Specifies a secondary private IPv4 address for a network interface.
 * `PrivateIpAdd` is a property of [AWS::EC2::LaunchTemplate NetworkInterface](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-networkinterface.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface PrivateIpAdd {
  /**
   * - Indicates whether the private IPv4 address is the primary private IPv4 address. Only one IPv4 address can be designated as primary.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-privateipadd-primary */
  Primary?: boolean | Intrinsic
  /**
   * - The private IPv4 address.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-privateipadd-privateipaddress */
  PrivateIpAddress?: string | Intrinsic
}

/**
 * ENA Express is compatible with both TCP and UDP transport protocols. When it's enabled, TCP traffic automatically uses it. However, some UDP-based applications are designed to handle network packets that are out of order, without a need for retransmission, such as live video broadcasting or other near-real-time applications. For UDP traffic, you can specify whether to use ENA Express, based on your application environment needs.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface EnaSrdUdpSpecification {
  /**
   * - Indicates whether UDP traffic to and from the instance uses ENA Express. To specify this setting, you must first enable ENA Express.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-enasrdudpspecification-enasrdudpenabled */
  EnaSrdUdpEnabled?: boolean | Intrinsic
}

/**
 * Specifies the tags to apply to the launch template during creation.
 * To specify the tags for the resources that are created during instance launch, use [AWS::EC2::LaunchTemplate TagSpecification](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-tagspecification.html).
 * `LaunchTemplateTagSpecification` is a property of [AWS::EC2::LaunchTemplate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface LaunchTemplateTagSpecification {
  /**
   * - The type of resource. To tag a launch template, `ResourceType` must be `launch-template`.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatetagspecification-resourcetype */
  ResourceType?: string | Intrinsic
  /**
   * - The tags for the resource.
   * - _Required_: No
   * - _Type_: Array of [Tag](./aws-properties-ec2-launchtemplate-tag.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatetagspecification-tags */
  Tags?: Tag[]
}

/**
 * Specifies a block device mapping for a launch template. You must specify `DeviceName` plus exactly one of the following properties: `Ebs`, `NoDevice`, or `VirtualName`.
 * `BlockDeviceMapping` is a property of [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface BlockDeviceMapping {
  /**
   * - The device name (for example, /dev/sdh or xvdh).
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-blockdevicemapping-devicename */
  DeviceName?: string | Intrinsic
  /**
   * - Parameters used to automatically set up EBS volumes when the instance is launched.
   * - _Required_: No
   * - _Type_: [Ebs](./aws-properties-ec2-launchtemplate-ebs.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-blockdevicemapping-ebs */
  Ebs?: Ebs
  /**
   * - To omit the device from the block device mapping, specify an empty string.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-blockdevicemapping-nodevice */
  NoDevice?: string | Intrinsic
  /**
   * - The virtual device name (ephemeralN). Instance store volumes are numbered starting from 0. An instance type with 2 available instance store volumes can specify mappings for ephemeral0 and ephemeral1. The number of available instance store volumes depends on the instance type. After you connect to the instance, you must mount the volume.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-blockdevicemapping-virtualname */
  VirtualName?: string | Intrinsic
}

/**
 * Specifies an instance's Capacity Reservation targeting option. You can specify only one option at a time.
 * `CapacityReservationSpecification` is a property of [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface CapacityReservationSpecification {
  /**
   * - Indicates the instance's Capacity Reservation preferences. Possible preferences include:
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `open | none`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-capacityreservationspecification-capacityreservationpreference */
  CapacityReservationPreference?: string | Intrinsic
  /**
   * - Information about the target Capacity Reservation or Capacity Reservation group.
   * - _Required_: No
   * - _Type_: [CapacityReservationTarget](./aws-properties-ec2-launchtemplate-capacityreservationtarget.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-capacityreservationspecification-capacityreservationtarget */
  CapacityReservationTarget?: CapacityReservationTarget
}

/**
 * Specifies the market (purchasing) option for an instance.
 * `InstanceMarketOptions` is a property of the [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface InstanceMarketOptions {
  /**
   * - The market type.
   * - _Required_: Conditional
   * - _Type_: String
   * - _Allowed values_: `spot | capacity-block`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-instancemarketoptions-markettype */
  MarketType?: string | Intrinsic
  /**
   * - The options for Spot Instances.
   * - _Required_: No
   * - _Type_: [SpotOptions](./aws-properties-ec2-launchtemplate-spotoptions.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-instancemarketoptions-spotoptions */
  SpotOptions?: SpotOptions
}

/**
 * The attributes for the instance types. When you specify instance attributes, Amazon EC2 will identify instance types with these attributes.
 * You must specify `VCpuCount` and `MemoryMiB`. All other attributes are optional. Any unspecified optional attribute is set to its default.
 * When you specify multiple attributes, you get instance types that satisfy all of the specified attributes. If you specify multiple values for an attribute, you get instance types that satisfy any of the specified values.
 * To limit the list of instance types from which Amazon EC2 can identify matching instance types, you can use one of the following parameters, but not both in the same request:
 * *   `AllowedInstanceTypes` - The instance types to include in the list. All other instance types are ignored, even if they match your specified attributes.
 *
 * *   `ExcludedInstanceTypes` - The instance types to exclude from the list, even if they match your specified attributes.
 * ###### Note
 *
 * If you specify `InstanceRequirements`, you can't specify `InstanceType`.
 *
 * Attribute-based instance type selection is only supported when using Auto Scaling groups, EC2 Fleet, and Spot Fleet to launch instances. If you plan to use the launch template in the [launch instance wizard](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-instance-wizard.html), or with the [RunInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html) API or [AWS::EC2::Instance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-instance.html) AWS CloudFormation resource, you can't specify `InstanceRequirements`.
 * For more information, see [Attribute-based instance type selection for EC2 Fleet](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html), [Attribute-based instance type selection for Spot Fleet](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-attribute-based-instance-type-selection.html), and [Spot placement score](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html) in the _Amazon EC2 User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface InstanceRequirements {
  /**
   * - The minimum and maximum number of accelerators (GPUs, FPGAs, or AWS Inferentia chips) on an instance.
   * - To exclude accelerator-enabled instance types, set `Max` to `0`.
   * - Default: No minimum or maximum limits
   * - _Required_: No
   * - _Type_: [AcceleratorCount](./aws-properties-ec2-launchtemplate-acceleratorcount.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-instancerequirements-acceleratorcount */
  AcceleratorCount?: AcceleratorCount
  /**
   * - Indicates whether instance types must have accelerators by specific manufacturers.
   * - Default: Any manufacturer
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-instancerequirements-acceleratormanufacturers */
  AcceleratorManufacturers?: (string | Intrinsic)[]
  /**
   * - The accelerators that must be on the instance type.
   * - Default: Any accelerator
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-instancerequirements-acceleratornames */
  AcceleratorNames?: (string | Intrinsic)[]
  /**
   * - The minimum and maximum amount of total accelerator memory, in MiB.
   * - Default: No minimum or maximum limits
   * - _Required_: No
   * - _Type_: [AcceleratorTotalMemoryMiB](./aws-properties-ec2-launchtemplate-acceleratortotalmemorymib.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-instancerequirements-acceleratortotalmemorymib */
  AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiB
  /**
   * - The accelerator types that must be on the instance type.
   * - Default: Any accelerator type
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-instancerequirements-acceleratortypes */
  AcceleratorTypes?: (string | Intrinsic)[]
  /**
   * - The instance types to apply your specified attributes against. All other instance types are ignored, even if they match your specified attributes.
   * - You can use strings with one or more wild cards, represented by an asterisk (`*`), to allow an instance type, size, or generation. The following are examples: `m5.8xlarge`, `c5*.*`, `m5a.*`, `r*`, `*3*`.
   * - For example, if you specify `c5*`,Amazon EC2 will allow the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.*`, Amazon EC2 will allow all the M5a instance types, but not the M5n instance types.
   * - Default: All instance types
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Maximum_: `400`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-instancerequirements-allowedinstancetypes */
  AllowedInstanceTypes?: (string | Intrinsic)[]
  /**
   * - Indicates whether bare metal instance types must be included, excluded, or required.
   * - Default: `excluded`
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `included | required | excluded`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-instancerequirements-baremetal */
  BareMetal?: string | Intrinsic
  /**
   * - The minimum and maximum baseline bandwidth to Amazon EBS, in Mbps. For more information, see [Amazon EBS–optimized instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html) in the _Amazon EC2 User Guide_.
   * - Default: No minimum or maximum limits
   * - _Required_: No
   * - _Type_: [BaselineEbsBandwidthMbps](./aws-properties-ec2-launchtemplate-baselineebsbandwidthmbps.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-instancerequirements-baselineebsbandwidthmbps */
  BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbps
  /**
   * - Indicates whether burstable performance T instance types are included, excluded, or required. For more information, see [Burstable performance instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html).
   * - Default: `excluded`
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `included | required | excluded`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-instancerequirements-burstableperformance */
  BurstablePerformance?: string | Intrinsic
  /**
   * - The CPU manufacturers to include.
   * - Default: Any manufacturer
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-instancerequirements-cpumanufacturers */
  CpuManufacturers?: (string | Intrinsic)[]
  /**
   * - The instance types to exclude.
   * - You can use strings with one or more wild cards, represented by an asterisk (`*`), to exclude an instance type, size, or generation. The following are examples: `m5.8xlarge`, `c5*.*`, `m5a.*`, `r*`, `*3*`.
   * - For example, if you specify `c5*`,Amazon EC2 will exclude the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.*`, Amazon EC2 will exclude all the M5a instance types, but not the M5n instance types.
   * - Default: No excluded instance types
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Maximum_: `400`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-instancerequirements-excludedinstancetypes */
  ExcludedInstanceTypes?: (string | Intrinsic)[]
  /**
   * - Indicates whether current or previous generation instance types are included. The current generation instance types are recommended for use. Current generation instance types are typically the latest two to three generations in each instance family. For more information, see [Instance types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) in the _Amazon EC2 User Guide_.
   * - For current generation instance types, specify `current`.
   * - For previous generation instance types, specify `previous`.
   * - Default: Current and previous generation instance types
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-instancerequirements-instancegenerations */
  InstanceGenerations?: (string | Intrinsic)[]
  /**
   * - Indicates whether instance types with instance store volumes are included, excluded, or required. For more information, [Amazon EC2 instance store](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html) in the _Amazon EC2 User Guide_.
   * - Default: `included`
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `included | required | excluded`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-instancerequirements-localstorage */
  LocalStorage?: string | Intrinsic
  /**
   * - The type of local storage that is required.
   * - Default: `hdd` and `ssd`
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-instancerequirements-localstoragetypes */
  LocalStorageTypes?: (string | Intrinsic)[]
  /**
   * - \[Price protection\] The price protection threshold for Spot Instances, as a percentage of an identified On-Demand price. The identified On-Demand price is the price of the lowest priced current generation C, M, or R instance type with your specified attributes. If no current generation C, M, or R instance type matches your attributes, then the identified price is from the lowest priced current generation instance types, and failing that, from the lowest priced previous generation instance types that match your attributes. When Amazon EC2 selects instance types with your attributes, it will exclude instance types whose price exceeds your specified threshold.
   * - The parameter accepts an integer, which Amazon EC2 interprets as a percentage.
   * - If you set `TargetCapacityUnitType` to `vcpu` or `memory-mib`, the price protection threshold is based on the per vCPU or per memory price instead of the per instance price.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-instancerequirements-maxspotpriceaspercentageofoptimalondemandprice */
  MaxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number | Intrinsic
  /**
   * - The minimum and maximum amount of memory per vCPU, in GiB.
   * - Default: No minimum or maximum limits
   * - _Required_: No
   * - _Type_: [MemoryGiBPerVCpu](./aws-properties-ec2-launchtemplate-memorygibpervcpu.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-instancerequirements-memorygibpervcpu */
  MemoryGiBPerVCpu?: MemoryGiBPerVCpu
  /**
   * - The minimum and maximum amount of memory, in MiB.
   * - _Required_: No
   * - _Type_: [MemoryMiB](./aws-properties-ec2-launchtemplate-memorymib.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-instancerequirements-memorymib */
  MemoryMiB?: MemoryMiB
  /**
   * - The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps).
   * - Default: No minimum or maximum limits
   * - _Required_: No
   * - _Type_: [NetworkBandwidthGbps](./aws-properties-ec2-launchtemplate-networkbandwidthgbps.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-instancerequirements-networkbandwidthgbps */
  NetworkBandwidthGbps?: NetworkBandwidthGbps
  /**
   * - The minimum and maximum number of network interfaces.
   * - Default: No minimum or maximum limits
   * - _Required_: No
   * - _Type_: [NetworkInterfaceCount](./aws-properties-ec2-launchtemplate-networkinterfacecount.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-instancerequirements-networkinterfacecount */
  NetworkInterfaceCount?: NetworkInterfaceCount
  /**
   * - \[Price protection\] The price protection threshold for On-Demand Instances, as a percentage higher than an identified On-Demand price. The identified On-Demand price is the price of the lowest priced current generation C, M, or R instance type with your specified attributes. When Amazon EC2 selects instance types with your attributes, it will exclude instance types whose price exceeds your specified threshold.
   * - The parameter accepts an integer, which Amazon EC2 interprets as a percentage.
   * - To turn off price protection, specify a high value, such as `999999`.
   * - This parameter is not supported for [GetSpotPlacementScores](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html) and [GetInstanceTypesFromInstanceRequirements](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceTypesFromInstanceRequirements.html).
   * - Default: `20`
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-instancerequirements-ondemandmaxpricepercentageoverlowestprice */
  OnDemandMaxPricePercentageOverLowestPrice?: number | Intrinsic
  /**
   * - Indicates whether instance types must support hibernation for On-Demand Instances.
   * - This parameter is not supported for [GetSpotPlacementScores](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html).
   * - Default: `false`
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-instancerequirements-requirehibernatesupport */
  RequireHibernateSupport?: boolean | Intrinsic
  /**
   * - \[Price protection\] The price protection threshold for Spot Instances, as a percentage higher than an identified Spot price. The identified Spot price is the Spot price of the lowest priced current generation C, M, or R instance type with your specified attributes. If no current generation C, M, or R instance type matches your attributes, then the identified Spot price is from the lowest priced current generation instance types, and failing that, from the lowest priced previous generation instance types that match your attributes. When Amazon EC2 selects instance types with your attributes, it will exclude instance types whose Spot price exceeds your specified threshold.
   * - The parameter accepts an integer, which Amazon EC2 interprets as a percentage.
   * - If you set `TargetCapacityUnitType` to `vcpu` or `memory-mib`, the price protection threshold is applied based on the per-vCPU or per-memory price instead of the per-instance price.
   * - This parameter is not supported for [GetSpotPlacementScores](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetSpotPlacementScores.html) and [GetInstanceTypesFromInstanceRequirements](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetInstanceTypesFromInstanceRequirements.html).
   * - Default: `100`
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-instancerequirements-spotmaxpricepercentageoverlowestprice */
  SpotMaxPricePercentageOverLowestPrice?: number | Intrinsic
  /**
   * - The minimum and maximum amount of total local storage, in GB.
   * - Default: No minimum or maximum limits
   * - _Required_: No
   * - _Type_: [TotalLocalStorageGB](./aws-properties-ec2-launchtemplate-totallocalstoragegb.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-instancerequirements-totallocalstoragegb */
  TotalLocalStorageGB?: TotalLocalStorageGB
  /**
   * - The minimum and maximum number of vCPUs.
   * - _Required_: No
   * - _Type_: [VCpuCount](./aws-properties-ec2-launchtemplate-vcpucount.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-instancerequirements-vcpucount */
  VCpuCount?: VCpuCount
}

/**
 * ENA Express uses AWS Scalable Reliable Datagram (SRD) technology to increase the maximum bandwidth used per stream and minimize tail latency of network traffic between EC2 instances. With ENA Express, you can communicate between two EC2 instances in the same subnet within the same account, or in different accounts. Both sending and receiving instances must have ENA Express enabled.
 * To improve the reliability of network packet delivery, ENA Express reorders network packets on the receiving end by default. However, some UDP-based applications are designed to handle network packets that are out of order to reduce the overhead for packet delivery at the network layer. When ENA Express is enabled, you can specify whether UDP network traffic uses it.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface EnaSrdSpecification {
  /**
   * - Indicates whether ENA Express is enabled for the network interface.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-enasrdspecification-enasrdenabled */
  EnaSrdEnabled?: boolean | Intrinsic
  /**
   * - Configures ENA Express for UDP network traffic.
   * - _Required_: No
   * - _Type_: [EnaSrdUdpSpecification](./aws-properties-ec2-launchtemplate-enasrdudpspecification.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-enasrdspecification-enasrdudpspecification */
  EnaSrdUdpSpecification?: EnaSrdUdpSpecification
}

/**
 * Specifies the parameters for a network interface.
 * `NetworkInterface` is a property of [AWS::EC2::LaunchTemplate LaunchTemplateData](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface NetworkInterface {
  /**
   * - Associates a Carrier IP address with eth0 for a new network interface.
   * - Use this option when you launch an instance in a Wavelength Zone and want to associate a Carrier IP address with the network interface. For more information about Carrier IP addresses, see [Carrier IP addresses](https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#provider-owned-ip) in the _AWS Wavelength Developer Guide_.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-networkinterface-associatecarrieripaddress */
  AssociateCarrierIpAddress?: boolean | Intrinsic
  /**
   * - Associates a public IPv4 address with eth0 for a new network interface.
   * - AWS charges for all public IPv4 addresses, including public IPv4 addresses associated with running instances and Elastic IP addresses. For more information, see the _Public IPv4 Address_ tab on the [Amazon VPC pricing page](https://aws.amazon.com/vpc/pricing/).
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-networkinterface-associatepublicipaddress */
  AssociatePublicIpAddress?: boolean | Intrinsic
  /**
   * - A connection tracking specification for the network interface.
   * - _Required_: No
   * - _Type_: [ConnectionTrackingSpecification](./aws-properties-ec2-launchtemplate-connectiontrackingspecification.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-networkinterface-connectiontrackingspecification */
  ConnectionTrackingSpecification?: ConnectionTrackingSpecification
  /**
   * - Indicates whether the network interface is deleted when the instance is terminated.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-networkinterface-deleteontermination */
  DeleteOnTermination?: boolean | Intrinsic
  /**
   * - A description for the network interface.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-networkinterface-description */
  Description?: string | Intrinsic
  /**
   * - The device index for the network interface attachment. Each network interface requires a device index. If you create a launch template that includes secondary network interfaces but not a primary network interface, then you must add a primary network interface as a launch parameter when you launch an instance from the template.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-networkinterface-deviceindex */
  DeviceIndex?: number | Intrinsic
  /**
   * - The ENA Express configuration for the network interface.
   * - _Required_: No
   * - _Type_: [EnaSrdSpecification](./aws-properties-ec2-launchtemplate-enasrdspecification.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-networkinterface-enasrdspecification */
  EnaSrdSpecification?: EnaSrdSpecification
  /**
   * - The IDs of one or more security groups.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-networkinterface-groups */
  Groups?: (string | Intrinsic)[]
  /**
   * - The type of network interface. To create an Elastic Fabric Adapter (EFA), specify `efa`. For more information, see [Elastic Fabric Adapter](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa.html) in the _Amazon EC2 User Guide_.
   * - If you are not creating an EFA, specify `interface` or omit this parameter.
   * - Valid values: `interface` | `efa`
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-networkinterface-interfacetype */
  InterfaceType?: string | Intrinsic
  /**
   * - The number of IPv4 prefixes to be automatically assigned to the network interface. You cannot use this option if you use the `Ipv4Prefix` option.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-networkinterface-ipv4prefixcount */
  Ipv4PrefixCount?: number | Intrinsic
  /**
   * - One or more IPv4 prefixes to be assigned to the network interface. You cannot use this option if you use the `Ipv4PrefixCount` option.
   * - _Required_: No
   * - _Type_: Array of [Ipv4PrefixSpecification](./aws-properties-ec2-launchtemplate-ipv4prefixspecification.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-networkinterface-ipv4prefixes */
  Ipv4Prefixes?: Ipv4PrefixSpecification[]
  /**
   * - The number of IPv6 addresses to assign to a network interface. Amazon EC2 automatically selects the IPv6 addresses from the subnet range. You can't use this option if specifying specific IPv6 addresses.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-networkinterface-ipv6addresscount */
  Ipv6AddressCount?: number | Intrinsic
  /**
   * - One or more specific IPv6 addresses from the IPv6 CIDR block range of your subnet. You can't use this option if you're specifying a number of IPv6 addresses.
   * - _Required_: No
   * - _Type_: Array of [Ipv6Add](./aws-properties-ec2-launchtemplate-ipv6add.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-networkinterface-ipv6addresses */
  Ipv6Addresses?: Ipv6Add[]
  /**
   * - The number of IPv6 prefixes to be automatically assigned to the network interface. You cannot use this option if you use the `Ipv6Prefix` option.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-networkinterface-ipv6prefixcount */
  Ipv6PrefixCount?: number | Intrinsic
  /**
   * - One or more IPv6 prefixes to be assigned to the network interface. You cannot use this option if you use the `Ipv6PrefixCount` option.
   * - _Required_: No
   * - _Type_: Array of [Ipv6PrefixSpecification](./aws-properties-ec2-launchtemplate-ipv6prefixspecification.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-networkinterface-ipv6prefixes */
  Ipv6Prefixes?: Ipv6PrefixSpecification[]
  /**
   * - The index of the network card. Some instance types support multiple network cards. The primary network interface must be assigned to network card index 0. The default is network card index 0.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-networkinterface-networkcardindex */
  NetworkCardIndex?: number | Intrinsic
  /**
   * - The ID of the network interface.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-networkinterface-networkinterfaceid */
  NetworkInterfaceId?: string | Intrinsic
  /**
   * - The primary IPv6 address of the network interface. When you enable an IPv6 GUA address to be a primary IPv6, the first IPv6 GUA will be made the primary IPv6 address until the instance is terminated or the network interface is detached. For more information about primary IPv6 addresses, see [RunInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_RunInstances.html).
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-networkinterface-primaryipv6 */
  PrimaryIpv6?: boolean | Intrinsic
  /**
   * - The primary private IPv4 address of the network interface.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-networkinterface-privateipaddress */
  PrivateIpAddress?: string | Intrinsic
  /**
   * - One or more private IPv4 addresses.
   * - _Required_: No
   * - _Type_: Array of [PrivateIpAdd](./aws-properties-ec2-launchtemplate-privateipadd.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-networkinterface-privateipaddresses */
  PrivateIpAddresses?: PrivateIpAdd[]
  /**
   * - The number of secondary private IPv4 addresses to assign to a network interface.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-networkinterface-secondaryprivateipaddresscount */
  SecondaryPrivateIpAddressCount?: number | Intrinsic
  /**
   * - The ID of the subnet for the network interface.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-networkinterface-subnetid */
  SubnetId?: string | Intrinsic
}

/**
 * The information to include in the launch template.
 * ###### Note
 *
 * You must specify at least one parameter for the launch template data.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface LaunchTemplateData {
  /**
   * - The block device mapping.
   * - _Required_: No
   * - _Type_: Array of [BlockDeviceMapping](./aws-properties-ec2-launchtemplate-blockdevicemapping.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatedata-blockdevicemappings */
  BlockDeviceMappings?: BlockDeviceMapping[]
  /**
   * - The Capacity Reservation targeting option. If you do not specify this parameter, the instance's Capacity Reservation preference defaults to `open`, which enables it to run in any open Capacity Reservation that has matching attributes (instance type, platform, Availability Zone).
   * - _Required_: No
   * - _Type_: [CapacityReservationSpecification](./aws-properties-ec2-launchtemplate-capacityreservationspecification.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatedata-capacityreservationspecification */
  CapacityReservationSpecification?: CapacityReservationSpecification
  /**
   * - The CPU options for the instance. For more information, see [Optimize CPU options](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html) in the _Amazon EC2 User Guide_.
   * - _Required_: No
   * - _Type_: [CpuOptions](./aws-properties-ec2-launchtemplate-cpuoptions.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatedata-cpuoptions */
  CpuOptions?: CpuOptions
  /**
   * - The credit option for CPU usage of the instance. Valid only for T instances.
   * - _Required_: No
   * - _Type_: [CreditSpecification](./aws-properties-ec2-launchtemplate-creditspecification.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatedata-creditspecification */
  CreditSpecification?: CreditSpecification
  /**
   * - Indicates whether to enable the instance for stop protection. For more information, see [Enable stop protection for your instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-stop-protection.html) in the _Amazon EC2 User Guide_.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatedata-disableapistop */
  DisableApiStop?: boolean | Intrinsic
  /**
   * - If you set this parameter to `true`, you can't terminate the instance using the Amazon EC2 console, CLI, or API; otherwise, you can. To change this attribute after launch, use [ModifyInstanceAttribute](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyInstanceAttribute.html). Alternatively, if you set `InstanceInitiatedShutdownBehavior` to `terminate`, you can terminate the instance by running the shutdown command from the instance.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatedata-disableapitermination */
  DisableApiTermination?: boolean | Intrinsic
  /**
   * - Indicates whether the instance is optimized for Amazon EBS I/O. This optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal Amazon EBS I/O performance. This optimization isn't available with all instance types. Additional usage charges apply when using an EBS-optimized instance.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatedata-ebsoptimized */
  EbsOptimized?: boolean | Intrinsic
  /**
   * - Deprecated.
   * - _Required_: No
   * - _Type_: Array of [ElasticGpuSpecification](./aws-properties-ec2-launchtemplate-elasticgpuspecification.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatedata-elasticgpuspecifications */
  ElasticGpuSpecifications?: ElasticGpuSpecification[]
  /**
   * - An elastic inference accelerator to associate with the instance. Elastic inference accelerators are a resource you can attach to your Amazon EC2 instances to accelerate your Deep Learning (DL) inference workloads.
   * - You cannot specify accelerators from different generations in the same request.
   * - _Required_: No
   * - _Type_: Array of [LaunchTemplateElasticInferenceAccelerator](./aws-properties-ec2-launchtemplate-launchtemplateelasticinferenceaccelerator.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatedata-elasticinferenceaccelerators */
  ElasticInferenceAccelerators?: LaunchTemplateElasticInferenceAccelerator[]
  /**
   * - Indicates whether the instance is enabled for AWS Nitro Enclaves. For more information, see [What is AWS Nitro Enclaves?](https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html) in the _AWS Nitro Enclaves User Guide_.
   * - You can't enable AWS Nitro Enclaves and hibernation on the same instance.
   * - _Required_: No
   * - _Type_: [EnclaveOptions](./aws-properties-ec2-launchtemplate-enclaveoptions.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatedata-enclaveoptions */
  EnclaveOptions?: EnclaveOptions
  /**
   * - Indicates whether an instance is enabled for hibernation. This parameter is valid only if the instance meets the [hibernation prerequisites](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hibernating-prerequisites.html). For more information, see [Hibernate your Amazon EC2 instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html) in the _Amazon EC2 User Guide_.
   * - _Required_: No
   * - _Type_: [HibernationOptions](./aws-properties-ec2-launchtemplate-hibernationoptions.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatedata-hibernationoptions */
  HibernationOptions?: HibernationOptions
  /**
   * - The name or Amazon Resource Name (ARN) of an IAM instance profile.
   * - _Required_: No
   * - _Type_: [IamInstanceProfile](./aws-properties-ec2-launchtemplate-iaminstanceprofile.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatedata-iaminstanceprofile */
  IamInstanceProfile?: IamInstanceProfile
  /**
   * - The ID of the AMI. Alternatively, you can specify a Systems Manager parameter, which will resolve to an AMI ID on launch.
   * - Valid formats:
   * - For more information, see [Use a Systems Manager parameter to find an AMI](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/finding-an-ami.html#using-systems-manager-parameter-to-find-AMI) in the _Amazon Elastic Compute Cloud User Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatedata-imageid */
  ImageId?: string | Intrinsic
  /**
   * - Indicates whether an instance stops or terminates when you initiate shutdown from the instance (using the operating system command for system shutdown).
   * - Default: `stop`
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `stop | terminate`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatedata-instanceinitiatedshutdownbehavior */
  InstanceInitiatedShutdownBehavior?: string | Intrinsic
  /**
   * - The market (purchasing) option for the instances.
   * - _Required_: No
   * - _Type_: [InstanceMarketOptions](./aws-properties-ec2-launchtemplate-instancemarketoptions.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatedata-instancemarketoptions */
  InstanceMarketOptions?: InstanceMarketOptions
  /**
   * - The attributes for the instance types. When you specify instance attributes, Amazon EC2 will identify instance types with these attributes.
   * - You must specify `VCpuCount` and `MemoryMiB`. All other attributes are optional. Any unspecified optional attribute is set to its default.
   * - When you specify multiple attributes, you get instance types that satisfy all of the specified attributes. If you specify multiple values for an attribute, you get instance types that satisfy any of the specified values.
   * - To limit the list of instance types from which Amazon EC2 can identify matching instance types, you can use one of the following parameters, but not both in the same request:
   * - For more information, see [Attribute-based instance type selection for EC2 Fleet](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html), [Attribute-based instance type selection for Spot Fleet](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet-attribute-based-instance-type-selection.html), and [Spot placement score](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-placement-score.html) in the _Amazon EC2 User Guide_.
   * - _Required_: No
   * - _Type_: [InstanceRequirements](./aws-properties-ec2-launchtemplate-instancerequirements.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatedata-instancerequirements */
  InstanceRequirements?: InstanceRequirements
  /**
   * - The instance type. For more information, see [Amazon EC2 instance types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) in the _Amazon EC2 User Guide_.
   * - If you specify `InstanceType`, you can't specify `InstanceRequirements`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `a1.medium | a1.large | a1.xlarge | a1.2xlarge | a1.4xlarge | a1.metal | c1.medium | c1.xlarge | c3.large | c3.xlarge | c3.2xlarge | c3.4xlarge | c3.8xlarge | c4.large | c4.xlarge | c4.2xlarge | c4.4xlarge | c4.8xlarge | c5.large | c5.xlarge | c5.2xlarge | c5.4xlarge | c5.9xlarge | c5.12xlarge | c5.18xlarge | c5.24xlarge | c5.metal | c5a.large | c5a.xlarge | c5a.2xlarge | c5a.4xlarge | c5a.8xlarge | c5a.12xlarge | c5a.16xlarge | c5a.24xlarge | c5ad.large | c5ad.xlarge | c5ad.2xlarge | c5ad.4xlarge | c5ad.8xlarge | c5ad.12xlarge | c5ad.16xlarge | c5ad.24xlarge | c5d.large | c5d.xlarge | c5d.2xlarge | c5d.4xlarge | c5d.9xlarge | c5d.12xlarge | c5d.18xlarge | c5d.24xlarge | c5d.metal | c5n.large | c5n.xlarge | c5n.2xlarge | c5n.4xlarge | c5n.9xlarge | c5n.18xlarge | c5n.metal | c6g.medium | c6g.large | c6g.xlarge | c6g.2xlarge | c6g.4xlarge | c6g.8xlarge | c6g.12xlarge | c6g.16xlarge | c6g.metal | c6gd.medium | c6gd.large | c6gd.xlarge | c6gd.2xlarge | c6gd.4xlarge | c6gd.8xlarge | c6gd.12xlarge | c6gd.16xlarge | c6gd.metal | c6gn.medium | c6gn.large | c6gn.xlarge | c6gn.2xlarge | c6gn.4xlarge | c6gn.8xlarge | c6gn.12xlarge | c6gn.16xlarge | c6i.large | c6i.xlarge | c6i.2xlarge | c6i.4xlarge | c6i.8xlarge | c6i.12xlarge | c6i.16xlarge | c6i.24xlarge | c6i.32xlarge | c6i.metal | cc1.4xlarge | cc2.8xlarge | cg1.4xlarge | cr1.8xlarge | d2.xlarge | d2.2xlarge | d2.4xlarge | d2.8xlarge | d3.xlarge | d3.2xlarge | d3.4xlarge | d3.8xlarge | d3en.xlarge | d3en.2xlarge | d3en.4xlarge | d3en.6xlarge | d3en.8xlarge | d3en.12xlarge | dl1.24xlarge | f1.2xlarge | f1.4xlarge | f1.16xlarge | g2.2xlarge | g2.8xlarge | g3.4xlarge | g3.8xlarge | g3.16xlarge | g3s.xlarge | g4ad.xlarge | g4ad.2xlarge | g4ad.4xlarge | g4ad.8xlarge | g4ad.16xlarge | g4dn.xlarge | g4dn.2xlarge | g4dn.4xlarge | g4dn.8xlarge | g4dn.12xlarge | g4dn.16xlarge | g4dn.metal | g5.xlarge | g5.2xlarge | g5.4xlarge | g5.8xlarge | g5.12xlarge | g5.16xlarge | g5.24xlarge | g5.48xlarge | g5g.xlarge | g5g.2xlarge | g5g.4xlarge | g5g.8xlarge | g5g.16xlarge | g5g.metal | hi1.4xlarge | hpc6a.48xlarge | hs1.8xlarge | h1.2xlarge | h1.4xlarge | h1.8xlarge | h1.16xlarge | i2.xlarge | i2.2xlarge | i2.4xlarge | i2.8xlarge | i3.large | i3.xlarge | i3.2xlarge | i3.4xlarge | i3.8xlarge | i3.16xlarge | i3.metal | i3en.large | i3en.xlarge | i3en.2xlarge | i3en.3xlarge | i3en.6xlarge | i3en.12xlarge | i3en.24xlarge | i3en.metal | im4gn.large | im4gn.xlarge | im4gn.2xlarge | im4gn.4xlarge | im4gn.8xlarge | im4gn.16xlarge | inf1.xlarge | inf1.2xlarge | inf1.6xlarge | inf1.24xlarge | is4gen.medium | is4gen.large | is4gen.xlarge | is4gen.2xlarge | is4gen.4xlarge | is4gen.8xlarge | m1.small | m1.medium | m1.large | m1.xlarge | m2.xlarge | m2.2xlarge | m2.4xlarge | m3.medium | m3.large | m3.xlarge | m3.2xlarge | m4.large | m4.xlarge | m4.2xlarge | m4.4xlarge | m4.10xlarge | m4.16xlarge | m5.large | m5.xlarge | m5.2xlarge | m5.4xlarge | m5.8xlarge | m5.12xlarge | m5.16xlarge | m5.24xlarge | m5.metal | m5a.large | m5a.xlarge | m5a.2xlarge | m5a.4xlarge | m5a.8xlarge | m5a.12xlarge | m5a.16xlarge | m5a.24xlarge | m5ad.large | m5ad.xlarge | m5ad.2xlarge | m5ad.4xlarge | m5ad.8xlarge | m5ad.12xlarge | m5ad.16xlarge | m5ad.24xlarge | m5d.large | m5d.xlarge | m5d.2xlarge | m5d.4xlarge | m5d.8xlarge | m5d.12xlarge | m5d.16xlarge | m5d.24xlarge | m5d.metal | m5dn.large | m5dn.xlarge | m5dn.2xlarge | m5dn.4xlarge | m5dn.8xlarge | m5dn.12xlarge | m5dn.16xlarge | m5dn.24xlarge | m5dn.metal | m5n.large | m5n.xlarge | m5n.2xlarge | m5n.4xlarge | m5n.8xlarge | m5n.12xlarge | m5n.16xlarge | m5n.24xlarge | m5n.metal | m5zn.large | m5zn.xlarge | m5zn.2xlarge | m5zn.3xlarge | m5zn.6xlarge | m5zn.12xlarge | m5zn.metal | m6a.large | m6a.xlarge | m6a.2xlarge | m6a.4xlarge | m6a.8xlarge | m6a.12xlarge | m6a.16xlarge | m6a.24xlarge | m6a.32xlarge | m6a.48xlarge | m6g.metal | m6g.medium | m6g.large | m6g.xlarge | m6g.2xlarge | m6g.4xlarge | m6g.8xlarge | m6g.12xlarge | m6g.16xlarge | m6gd.metal | m6gd.medium | m6gd.large | m6gd.xlarge | m6gd.2xlarge | m6gd.4xlarge | m6gd.8xlarge | m6gd.12xlarge | m6gd.16xlarge | m6i.large | m6i.xlarge | m6i.2xlarge | m6i.4xlarge | m6i.8xlarge | m6i.12xlarge | m6i.16xlarge | m6i.24xlarge | m6i.32xlarge | m6i.metal | mac1.metal | p2.xlarge | p2.8xlarge | p2.16xlarge | p3.2xlarge | p3.8xlarge | p3.16xlarge | p3dn.24xlarge | p4d.24xlarge | r3.large | r3.xlarge | r3.2xlarge | r3.4xlarge | r3.8xlarge | r4.large | r4.xlarge | r4.2xlarge | r4.4xlarge | r4.8xlarge | r4.16xlarge | r5.large | r5.xlarge | r5.2xlarge | r5.4xlarge | r5.8xlarge | r5.12xlarge | r5.16xlarge | r5.24xlarge | r5.metal | r5a.large | r5a.xlarge | r5a.2xlarge | r5a.4xlarge | r5a.8xlarge | r5a.12xlarge | r5a.16xlarge | r5a.24xlarge | r5ad.large | r5ad.xlarge | r5ad.2xlarge | r5ad.4xlarge | r5ad.8xlarge | r5ad.12xlarge | r5ad.16xlarge | r5ad.24xlarge | r5b.large | r5b.xlarge | r5b.2xlarge | r5b.4xlarge | r5b.8xlarge | r5b.12xlarge | r5b.16xlarge | r5b.24xlarge | r5b.metal | r5d.large | r5d.xlarge | r5d.2xlarge | r5d.4xlarge | r5d.8xlarge | r5d.12xlarge | r5d.16xlarge | r5d.24xlarge | r5d.metal | r5dn.large | r5dn.xlarge | r5dn.2xlarge | r5dn.4xlarge | r5dn.8xlarge | r5dn.12xlarge | r5dn.16xlarge | r5dn.24xlarge | r5dn.metal | r5n.large | r5n.xlarge | r5n.2xlarge | r5n.4xlarge | r5n.8xlarge | r5n.12xlarge | r5n.16xlarge | r5n.24xlarge | r5n.metal | r6g.medium | r6g.large | r6g.xlarge | r6g.2xlarge | r6g.4xlarge | r6g.8xlarge | r6g.12xlarge | r6g.16xlarge | r6g.metal | r6gd.medium | r6gd.large | r6gd.xlarge | r6gd.2xlarge | r6gd.4xlarge | r6gd.8xlarge | r6gd.12xlarge | r6gd.16xlarge | r6gd.metal | r6i.large | r6i.xlarge | r6i.2xlarge | r6i.4xlarge | r6i.8xlarge | r6i.12xlarge | r6i.16xlarge | r6i.24xlarge | r6i.32xlarge | r6i.metal | t1.micro | t2.nano | t2.micro | t2.small | t2.medium | t2.large | t2.xlarge | t2.2xlarge | t3.nano | t3.micro | t3.small | t3.medium | t3.large | t3.xlarge | t3.2xlarge | t3a.nano | t3a.micro | t3a.small | t3a.medium | t3a.large | t3a.xlarge | t3a.2xlarge | t4g.nano | t4g.micro | t4g.small | t4g.medium | t4g.large | t4g.xlarge | t4g.2xlarge | u-6tb1.56xlarge | u-6tb1.112xlarge | u-9tb1.112xlarge | u-12tb1.112xlarge | u-6tb1.metal | u-9tb1.metal | u-12tb1.metal | u-18tb1.metal | u-24tb1.metal | vt1.3xlarge | vt1.6xlarge | vt1.24xlarge | x1.16xlarge | x1.32xlarge | x1e.xlarge | x1e.2xlarge | x1e.4xlarge | x1e.8xlarge | x1e.16xlarge | x1e.32xlarge | x2iezn.2xlarge | x2iezn.4xlarge | x2iezn.6xlarge | x2iezn.8xlarge | x2iezn.12xlarge | x2iezn.metal | x2gd.medium | x2gd.large | x2gd.xlarge | x2gd.2xlarge | x2gd.4xlarge | x2gd.8xlarge | x2gd.12xlarge | x2gd.16xlarge | x2gd.metal | z1d.large | z1d.xlarge | z1d.2xlarge | z1d.3xlarge | z1d.6xlarge | z1d.12xlarge | z1d.metal | x2idn.16xlarge | x2idn.24xlarge | x2idn.32xlarge | x2iedn.xlarge | x2iedn.2xlarge | x2iedn.4xlarge | x2iedn.8xlarge | x2iedn.16xlarge | x2iedn.24xlarge | x2iedn.32xlarge | c6a.large | c6a.xlarge | c6a.2xlarge | c6a.4xlarge | c6a.8xlarge | c6a.12xlarge | c6a.16xlarge | c6a.24xlarge | c6a.32xlarge | c6a.48xlarge | c6a.metal | m6a.metal | i4i.large | i4i.xlarge | i4i.2xlarge | i4i.4xlarge | i4i.8xlarge | i4i.16xlarge | i4i.32xlarge | i4i.metal | x2idn.metal | x2iedn.metal | c7g.medium | c7g.large | c7g.xlarge | c7g.2xlarge | c7g.4xlarge | c7g.8xlarge | c7g.12xlarge | c7g.16xlarge | mac2.metal | c6id.large | c6id.xlarge | c6id.2xlarge | c6id.4xlarge | c6id.8xlarge | c6id.12xlarge | c6id.16xlarge | c6id.24xlarge | c6id.32xlarge | c6id.metal | m6id.large | m6id.xlarge | m6id.2xlarge | m6id.4xlarge | m6id.8xlarge | m6id.12xlarge | m6id.16xlarge | m6id.24xlarge | m6id.32xlarge | m6id.metal | r6id.large | r6id.xlarge | r6id.2xlarge | r6id.4xlarge | r6id.8xlarge | r6id.12xlarge | r6id.16xlarge | r6id.24xlarge | r6id.32xlarge | r6id.metal | r6a.large | r6a.xlarge | r6a.2xlarge | r6a.4xlarge | r6a.8xlarge | r6a.12xlarge | r6a.16xlarge | r6a.24xlarge | r6a.32xlarge | r6a.48xlarge | r6a.metal | p4de.24xlarge | u-3tb1.56xlarge | u-18tb1.112xlarge | u-24tb1.112xlarge | trn1.2xlarge | trn1.32xlarge | hpc6id.32xlarge | c6in.large | c6in.xlarge | c6in.2xlarge | c6in.4xlarge | c6in.8xlarge | c6in.12xlarge | c6in.16xlarge | c6in.24xlarge | c6in.32xlarge | m6in.large | m6in.xlarge | m6in.2xlarge | m6in.4xlarge | m6in.8xlarge | m6in.12xlarge | m6in.16xlarge | m6in.24xlarge | m6in.32xlarge | m6idn.large | m6idn.xlarge | m6idn.2xlarge | m6idn.4xlarge | m6idn.8xlarge | m6idn.12xlarge | m6idn.16xlarge | m6idn.24xlarge | m6idn.32xlarge | r6in.large | r6in.xlarge | r6in.2xlarge | r6in.4xlarge | r6in.8xlarge | r6in.12xlarge | r6in.16xlarge | r6in.24xlarge | r6in.32xlarge | r6idn.large | r6idn.xlarge | r6idn.2xlarge | r6idn.4xlarge | r6idn.8xlarge | r6idn.12xlarge | r6idn.16xlarge | r6idn.24xlarge | r6idn.32xlarge | c7g.metal | m7g.medium | m7g.large | m7g.xlarge | m7g.2xlarge | m7g.4xlarge | m7g.8xlarge | m7g.12xlarge | m7g.16xlarge | m7g.metal | r7g.medium | r7g.large | r7g.xlarge | r7g.2xlarge | r7g.4xlarge | r7g.8xlarge | r7g.12xlarge | r7g.16xlarge | r7g.metal | c6in.metal | m6in.metal | m6idn.metal | r6in.metal | r6idn.metal | inf2.xlarge | inf2.8xlarge | inf2.24xlarge | inf2.48xlarge | trn1n.32xlarge | i4g.large | i4g.xlarge | i4g.2xlarge | i4g.4xlarge | i4g.8xlarge | i4g.16xlarge | hpc7g.4xlarge | hpc7g.8xlarge | hpc7g.16xlarge | c7gn.medium | c7gn.large | c7gn.xlarge | c7gn.2xlarge | c7gn.4xlarge | c7gn.8xlarge | c7gn.12xlarge | c7gn.16xlarge | p5.48xlarge | m7i.large | m7i.xlarge | m7i.2xlarge | m7i.4xlarge | m7i.8xlarge | m7i.12xlarge | m7i.16xlarge | m7i.24xlarge | m7i.48xlarge | m7i-flex.large | m7i-flex.xlarge | m7i-flex.2xlarge | m7i-flex.4xlarge | m7i-flex.8xlarge | m7a.medium | m7a.large | m7a.xlarge | m7a.2xlarge | m7a.4xlarge | m7a.8xlarge | m7a.12xlarge | m7a.16xlarge | m7a.24xlarge | m7a.32xlarge | m7a.48xlarge | m7a.metal-48xl | hpc7a.12xlarge | hpc7a.24xlarge | hpc7a.48xlarge | hpc7a.96xlarge | c7gd.medium | c7gd.large | c7gd.xlarge | c7gd.2xlarge | c7gd.4xlarge | c7gd.8xlarge | c7gd.12xlarge | c7gd.16xlarge | m7gd.medium | m7gd.large | m7gd.xlarge | m7gd.2xlarge | m7gd.4xlarge | m7gd.8xlarge | m7gd.12xlarge | m7gd.16xlarge | r7gd.medium | r7gd.large | r7gd.xlarge | r7gd.2xlarge | r7gd.4xlarge | r7gd.8xlarge | r7gd.12xlarge | r7gd.16xlarge | r7a.medium | r7a.large | r7a.xlarge | r7a.2xlarge | r7a.4xlarge | r7a.8xlarge | r7a.12xlarge | r7a.16xlarge | r7a.24xlarge | r7a.32xlarge | r7a.48xlarge | c7i.large | c7i.xlarge | c7i.2xlarge | c7i.4xlarge | c7i.8xlarge | c7i.12xlarge | c7i.16xlarge | c7i.24xlarge | c7i.48xlarge | mac2-m2pro.metal | r7iz.large | r7iz.xlarge | r7iz.2xlarge | r7iz.4xlarge | r7iz.8xlarge | r7iz.12xlarge | r7iz.16xlarge | r7iz.32xlarge | c7a.medium | c7a.large | c7a.xlarge | c7a.2xlarge | c7a.4xlarge | c7a.8xlarge | c7a.12xlarge | c7a.16xlarge | c7a.24xlarge | c7a.32xlarge | c7a.48xlarge | c7a.metal-48xl | r7a.metal-48xl | r7i.large | r7i.xlarge | r7i.2xlarge | r7i.4xlarge | r7i.8xlarge | r7i.12xlarge | r7i.16xlarge | r7i.24xlarge | r7i.48xlarge | dl2q.24xlarge | mac2-m2.metal | i4i.12xlarge | i4i.24xlarge | c7i.metal-24xl | c7i.metal-48xl | m7i.metal-24xl | m7i.metal-48xl | r7i.metal-24xl | r7i.metal-48xl | r7iz.metal-16xl | r7iz.metal-32xl | c7gd.metal | m7gd.metal | r7gd.metal | g6.xlarge | g6.2xlarge | g6.4xlarge | g6.8xlarge | g6.12xlarge | g6.16xlarge | g6.24xlarge | g6.48xlarge | gr6.4xlarge | gr6.8xlarge | c7i-flex.large | c7i-flex.xlarge | c7i-flex.2xlarge | c7i-flex.4xlarge | c7i-flex.8xlarge | u7i-12tb.224xlarge | u7in-16tb.224xlarge | u7in-24tb.224xlarge | u7in-32tb.224xlarge | u7ib-12tb.224xlarge | c7gn.metal | r8g.medium | r8g.large | r8g.xlarge | r8g.2xlarge | r8g.4xlarge | r8g.8xlarge | r8g.12xlarge | r8g.16xlarge | r8g.24xlarge | r8g.48xlarge | r8g.metal-24xl | r8g.metal-48xl | mac2-m1ultra.metal`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatedata-instancetype */
  InstanceType?: string | Intrinsic
  /**
   * - The ID of the kernel.
   * - We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see [User Provided Kernels](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedkernels.html) in the _Amazon EC2 User Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatedata-kernelid */
  KernelId?: string | Intrinsic
  /**
   * - The name of the key pair. You can create a key pair using [CreateKeyPair](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateKeyPair.html) or [ImportKeyPair](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportKeyPair.html).
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatedata-keyname */
  KeyName?: string | Intrinsic
  /**
   * - The license configurations.
   * - _Required_: No
   * - _Type_: Array of [LicenseSpecification](./aws-properties-ec2-launchtemplate-licensespecification.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatedata-licensespecifications */
  LicenseSpecifications?: LicenseSpecification[]
  /**
   * - The maintenance options of your instance.
   * - _Required_: No
   * - _Type_: [MaintenanceOptions](./aws-properties-ec2-launchtemplate-maintenanceoptions.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatedata-maintenanceoptions */
  MaintenanceOptions?: MaintenanceOptions
  /**
   * - The metadata options for the instance. For more information, see [Instance metadata and user data](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html) in the _Amazon EC2 User Guide_.
   * - _Required_: No
   * - _Type_: [MetadataOptions](./aws-properties-ec2-launchtemplate-metadataoptions.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatedata-metadataoptions */
  MetadataOptions?: MetadataOptions
  /**
   * - The monitoring for the instance.
   * - _Required_: No
   * - _Type_: [Monitoring](./aws-properties-ec2-launchtemplate-monitoring.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatedata-monitoring */
  Monitoring?: Monitoring
  /**
   * - The network interfaces for the instance.
   * - _Required_: No
   * - _Type_: Array of [NetworkInterface](./aws-properties-ec2-launchtemplate-networkinterface.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatedata-networkinterfaces */
  NetworkInterfaces?: NetworkInterface[]
  /**
   * - The placement for the instance.
   * - _Required_: No
   * - _Type_: [Placement](./aws-properties-ec2-launchtemplate-placement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatedata-placement */
  Placement?: Placement
  /**
   * - The hostname type for EC2 instances launched into this subnet and how DNS A and AAAA record queries should be handled. For more information, see [Amazon EC2 instance hostname types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-naming.html) in the _Amazon Elastic Compute Cloud User Guide_.
   * - _Required_: No
   * - _Type_: [PrivateDnsNameOptions](./aws-properties-ec2-launchtemplate-privatednsnameoptions.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatedata-privatednsnameoptions */
  PrivateDnsNameOptions?: PrivateDnsNameOptions
  /**
   * - The ID of the RAM disk.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatedata-ramdiskid */
  RamDiskId?: string | Intrinsic
  /**
   * - The IDs of the security groups. You can specify the IDs of existing security groups and references to resources created by the stack template.
   * - If you specify a network interface, you must specify any security groups as part of the network interface instead.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatedata-securitygroupids */
  SecurityGroupIds?: (string | Intrinsic)[]
  /**
   * - The names of the security groups. For a nondefault VPC, you must use security group IDs instead.
   * - If you specify a network interface, you must specify any security groups as part of the network interface instead of using this parameter.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatedata-securitygroups */
  SecurityGroups?: (string | Intrinsic)[]
  /**
   * - The tags to apply to resources that are created during instance launch.
   * - To tag the launch template itself, use [TagSpecifications](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-tagspecifications).
   * - _Required_: No
   * - _Type_: Array of [TagSpecification](./aws-properties-ec2-launchtemplate-tagspecification.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatedata-tagspecifications */
  TagSpecifications?: TagSpecification[]
  /**
   * - The user data to make available to the instance. You must provide base64-encoded text. User data is limited to 16 KB. For more information, see [Run commands on your Amazon EC2 instance at launch](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html) in the _Amazon EC2 User Guide_.
   * - If you are creating the launch template for use with AWS Batch, the user data must be provided in the [MIME multi-part archive format](https://cloudinit.readthedocs.io/en/latest/topics/format.html#mime-multi-part-archive). For more information, see [Amazon EC2 user data in launch templates](https://docs.aws.amazon.com/batch/latest/userguide/launch-templates.html) in the _AWS Batch User Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatedata-userdata */
  UserData?: string | Intrinsic
}

/**
 * Specifies the properties for creating a launch template.
 * The minimum required properties for specifying a launch template are as follows:
 * *   You must specify at least one property for the launch template data.
 *
 * *   You can optionally specify a name for the launch template. If you do not specify a name, AWS CloudFormation creates a name for you.
 * A launch template can contain some or all of the configuration information to launch an instance. When you launch an instance using a launch template, instance properties that are not specified in the launch template use default values, except the `ImageId` property, which has no default value. If you do not specify an AMI ID for the launch template `ImageId` property, you must specify an AMI ID for the instance `ImageId` property.
 * For more information, see [Launch an instance from a launch template](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-launch-templates.html) in the _Amazon EC2 User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html */

export interface EC2LaunchTemplate extends ResourceAttributes {
  Type: 'AWS::EC2::LaunchTemplate'
  Properties: {
    /**
     * - The information for the launch template.
     * - _Required_: Yes
     * - _Type_: [LaunchTemplateData](./aws-properties-ec2-launchtemplate-launchtemplatedata.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatedata */
    LaunchTemplateData: LaunchTemplateData
    /**
     * - A name for the launch template.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9\(\)\.\-/_]+`
     * - _Minimum_: `3`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-launchtemplatename */
    LaunchTemplateName?: string | Intrinsic
    /**
     * - The tags to apply to the launch template on creation. To tag the launch template, the resource type must be `launch-template`.
     * - To specify the tags for resources that are created during instance launch, use [TagSpecifications](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-launchtemplate-launchtemplatedata.html#cfn-ec2-launchtemplate-launchtemplatedata-tagspecifications).
     * - _Required_: No
     * - _Type_: Array of [LaunchTemplateTagSpecification](./aws-properties-ec2-launchtemplate-launchtemplatetagspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-tagspecifications */
    TagSpecifications?: LaunchTemplateTagSpecification[]
    /**
     * - A description for the first version of the launch template.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-launchtemplate.html#cfn-ec2-launchtemplate-versiondescription */
    VersionDescription?: string | Intrinsic
  }
}
