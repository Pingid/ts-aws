import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Contains compute attributes. These attributes only need be specified when your project's or fleet's `computeType` is set to `ATTRIBUTE_BASED_COMPUTE` or `CUSTOM_INSTANCE_TYPE`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html */

export interface ComputeConfiguration {
    /**
     * - The amount of disk space of the instance type included in your fleet.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-computeconfiguration-disk */
    "disk"?: number | Intrinsic;
    /**
     * - The EC2 instance type to be launched in your fleet.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-computeconfiguration-instancetype */
    "instanceType"?: string | Intrinsic;
    /**
     * - The machine type of the instance type included in your fleet.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `GENERAL | NVME`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-computeconfiguration-machinetype */
    "machineType"?: string | Intrinsic;
    /**
     * - The amount of memory of the instance type included in your fleet.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-computeconfiguration-memory */
    "memory"?: number | Intrinsic;
    /**
     * - The number of vCPUs of the instance type included in your fleet.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-computeconfiguration-vcpu */
    "vCpu"?: number | Intrinsic;
}

/**
 * Information about the VPC configuration that AWS CodeBuild accesses.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html */

export interface VpcConfig {
    /**
     * - A list of one or more security groups IDs in your Amazon VPC.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Maximum_: `5`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-vpcconfig-securitygroupids */
    "SecurityGroupIds"?: (string | Intrinsic)[];
    /**
     * - A list of one or more subnet IDs in your Amazon VPC.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Maximum_: `16`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-vpcconfig-subnets */
    "Subnets"?: (string | Intrinsic)[];
    /**
     * - The ID of the Amazon VPC.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-vpcconfig-vpcid */
    "VpcId"?: string | Intrinsic;
}

/**
 * A tag, consisting of a key and a value.
 * This tag is available for use by AWS services that support tags in AWS CodeBuild.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html */

export interface Tag {
    /**
     * - The tag's key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?!aws:)[a-zA-Z+-=._:/]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The tag's value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z+-=._:/]+$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Defines when a new instance is auto-scaled into the compute fleet.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html */

export interface TargetTrackingScalingConfiguration {
    /**
     * - The metric type to determine auto-scaling.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `FLEET_UTILIZATION_RATE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-targettrackingscalingconfiguration-metrictype */
    "MetricType"?: string | Intrinsic;
    /**
     * - The value of `metricType` when to start scaling.
     * - _Required_: No
     * - _Type_: Number
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-targettrackingscalingconfiguration-targetvalue */
    "TargetValue"?: number | Intrinsic;
}

/**
 * The scaling configuration input of a compute fleet.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html */

export interface ScalingConfigurationInput {
    /**
     * - The maximum number of instances in the ﬂeet when auto-scaling.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-scalingconfigurationinput-maxcapacity */
    "MaxCapacity"?: number | Intrinsic;
    /**
     * - The scaling type for a compute fleet.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `TARGET_TRACKING_SCALING`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-scalingconfigurationinput-scalingtype */
    "ScalingType"?: string | Intrinsic;
    /**
     * - A list of `TargetTrackingScalingConfiguration` objects.
     * - _Required_: No
     * - _Type_: Array of [TargetTrackingScalingConfiguration](./aws-properties-codebuild-fleet-targettrackingscalingconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-scalingconfigurationinput-targettrackingscalingconfigs */
    "TargetTrackingScalingConfigs"?: TargetTrackingScalingConfiguration[];
}

/**
 * Information about the proxy rule for your reserved capacity instances.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html */

export interface FleetProxyRule {
    /**
     * - The behavior of the proxy rule.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ALLOW | DENY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-fleetproxyrule-effect */
    "Effect"?: string | Intrinsic;
    /**
     * - The destination of the proxy rule.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-fleetproxyrule-entities */
    "Entities"?: (string | Intrinsic)[];
    /**
     * - The type of proxy rule.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DOMAIN | IP`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-fleetproxyrule-type */
    "Type"?: string | Intrinsic;
}

/**
 * Information about the proxy configurations that apply network access control to your reserved capacity instances.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html */

export interface ProxyConfiguration {
    /**
     * - The default behavior of outgoing traffic.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ALLOW_ALL | DENY_ALL`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-proxyconfiguration-defaultbehavior */
    "DefaultBehavior"?: string | Intrinsic;
    /**
     * - An array of `FleetProxyRule` objects that represent the specified destination domains or IPs to allow or deny network access control to.
     * - _Required_: No
     * - _Type_: Array of [FleetProxyRule](./aws-properties-codebuild-fleet-fleetproxyrule.html)
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-proxyconfiguration-orderedproxyrules */
    "OrderedProxyRules"?: FleetProxyRule[];
}

/**
 * The `AWS::CodeBuild::Fleet` resource configures a compute fleet, a set of dedicated instances for your build environment.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html */

export interface CodeBuildFleet extends ResourceAttributes {
    "Type": "AWS::CodeBuild::Fleet";
    "Properties": {
        /**
         * - The initial number of machines allocated to the compute ﬂeet, which deﬁnes the number of builds that can run in parallel.
         * - _Required_: No
         * - _Type_: Integer
         * - _Minimum_: `1`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-basecapacity */
        "BaseCapacity"?: number | Intrinsic;
        /**
         * - The compute configuration of the compute fleet. This is only required if `computeType` is set to `ATTRIBUTE_BASED_COMPUTE` or `CUSTOM_INSTANCE_TYPE`.
         * - _Required_: No
         * - _Type_: [ComputeConfiguration](./aws-properties-codebuild-fleet-computeconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-computeconfiguration */
        "ComputeConfiguration"?: ComputeConfiguration;
        /**
         * - Information about the compute resources the compute fleet uses. Available values include:
         * - If you use `BUILD_GENERAL1_SMALL`:
         * - If you use `BUILD_GENERAL1_LARGE`:
         * - For more information, see [On-demand environment types](https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html#environment.types) in the _AWS CodeBuild User Guide._
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `BUILD_GENERAL1_SMALL | BUILD_GENERAL1_MEDIUM | BUILD_GENERAL1_LARGE | BUILD_GENERAL1_XLARGE | BUILD_GENERAL1_2XLARGE | ATTRIBUTE_BASED_COMPUTE | CUSTOM_INSTANCE_TYPE`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-computetype */
        "ComputeType"?: string | Intrinsic;
        /**
         * - The environment type of the compute fleet.
         * - For more information, see [Build environment compute types](https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html) in the _AWS CodeBuild user guide_.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `WINDOWS_SERVER_2019_CONTAINER | WINDOWS_SERVER_2022_CONTAINER | LINUX_CONTAINER | LINUX_GPU_CONTAINER | ARM_CONTAINER | MAC_ARM | LINUX_EC2 | ARM_EC2 | WINDOWS_EC2`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-environmenttype */
        "EnvironmentType"?: string | Intrinsic;
        /**
         * - Information about the proxy configurations that apply network access control to your reserved capacity instances.
         * - _Required_: No
         * - _Type_: [ProxyConfiguration](./aws-properties-codebuild-fleet-proxyconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-fleetproxyconfiguration */
        "FleetProxyConfiguration"?: ProxyConfiguration;
        /**
         * - The service role associated with the compute fleet. For more information, see [Allow a user to add a permission policy for a fleet service role](https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#customer-managed-policies-example-permission-policy-fleet-service-role.html) in the _AWS CodeBuild User Guide_.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^(?:arn:)[a-zA-Z+-=,._:/@]+$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-fleetservicerole */
        "FleetServiceRole"?: string | Intrinsic;
        /**
         * - Information about the VPC configuration that AWS CodeBuild accesses.
         * - _Required_: No
         * - _Type_: [VpcConfig](./aws-properties-codebuild-fleet-vpcconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-fleetvpcconfig */
        "FleetVpcConfig"?: VpcConfig;
        /**
         * - The Amazon Machine Image (AMI) of the compute fleet.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^((aws/codebuild/[A-Za-z-]+:[0-9]+(-[0-9._]+)?)|ami-[a-z0-9]{1,1020})$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-imageid */
        "ImageId"?: string | Intrinsic;
        /**
         * - The name of the compute fleet.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `2`
         * - _Maximum_: `128`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-name */
        "Name"?: string | Intrinsic;
        /**
         * - The compute fleet overflow behavior.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `QUEUE | ON_DEMAND`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-overflowbehavior */
        "OverflowBehavior"?: string | Intrinsic;
        /**
         * - The scaling configuration of the compute fleet.
         * - _Required_: No
         * - _Type_: [ScalingConfigurationInput](./aws-properties-codebuild-fleet-scalingconfigurationinput.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-scalingconfiguration */
        "ScalingConfiguration"?: ScalingConfigurationInput;
        /**
         * - A list of tag key and value pairs associated with this compute fleet.
         * - These tags are available for use by AWS services that support AWS CodeBuild compute fleet tags.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-codebuild-fleet-tag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-tags */
        "Tags"?: Tag[];
    };
}