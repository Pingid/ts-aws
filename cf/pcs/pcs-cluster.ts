import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * TThe networking configuration for the cluster's control plane.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-cluster.html */

export interface Networking {
    /**
     * - The list of security group IDs associated with the Elastic Network Interface (ENI) created in subnets.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-cluster.html#cfn-pcs-cluster-networking-securitygroupids */
    "SecurityGroupIds"?: (string | Intrinsic)[];
    /**
     * - The list of subnet IDs where AWS PCS creates an Elastic Network Interface (ENI) to enable communication between managed controllers and AWS PCS resources. The subnet must have an available IP address, cannot reside in AWS Outposts, AWS Wavelength, or an AWS Local Zone. AWS PCS currently supports only 1 subnet in this list.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-cluster.html#cfn-pcs-cluster-networking-subnetids */
    "SubnetIds"?: (string | Intrinsic)[];
}

/**
 * The cluster management and job scheduling software associated with the cluster.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-cluster.html */

export interface Scheduler {
    /**
     * - The software AWS PCS uses to manage cluster scaling and job scheduling.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `SLURM`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-cluster.html#cfn-pcs-cluster-scheduler-type */
    "Type": string | Intrinsic;
    /**
     * - The version of the specified scheduling software that AWS PCS uses to manage cluster scaling and job scheduling.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-cluster.html#cfn-pcs-cluster-scheduler-version */
    "Version": string | Intrinsic;
}

/**
 * The accounting configuration includes configurable settings for Slurm accounting. It's a property of the `ClusterSlurmConfiguration` object.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-cluster.html */

export interface Accounting {
    /**
     * - The default value for all purge settings for `slurmdbd.conf`. For more information, see the [slurmdbd.conf documentation at SchedMD](https://slurm.schedmd.com/slurmdbd.conf.html).
     * - The default value `-1` means there is no purge time and records persist as long as the cluster exists.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `-1`
     * - _Maximum_: `10000`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-cluster.html#cfn-pcs-cluster-accounting-defaultpurgetimeindays */
    "DefaultPurgeTimeInDays"?: number | Intrinsic;
    /**
     * - The default value for `mode` is `STANDARD`. A value of `STANDARD` means Slurm accounting is enabled.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `STANDARD | NONE`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-cluster.html#cfn-pcs-cluster-accounting-mode */
    "Mode": string | Intrinsic;
}

/**
 * The shared Slurm key for authentication, also known as the **cluster secret**.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-cluster.html */

export interface AuthKey {
    /**
     * - The Amazon Resource Name (ARN) of the shared Slurm key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-cluster.html#cfn-pcs-cluster-authkey-secretarn */
    "SecretArn": string | Intrinsic;
    /**
     * - The version of the shared Slurm key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-cluster.html#cfn-pcs-cluster-authkey-secretversion */
    "SecretVersion": string | Intrinsic;
}

/**
 * Additional settings that directly map to Slurm settings.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-cluster.html */

export interface SlurmCustomSetting {
    /**
     * - AWS PCS supports configuration of the following Slurm parameters:
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-cluster.html#cfn-pcs-cluster-slurmcustomsetting-parametername */
    "ParameterName": string | Intrinsic;
    /**
     * - The values for the configured Slurm settings.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-cluster.html#cfn-pcs-cluster-slurmcustomsetting-parametervalue */
    "ParameterValue": string | Intrinsic;
}

/**
 * Additional options related to the Slurm scheduler.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-cluster.html */

export interface SlurmConfiguration {
    /**
     * - The accounting configuration includes configurable settings for Slurm accounting.
     * - _Required_: No
     * - _Type_: [Accounting](./aws-properties-pcs-cluster-accounting.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-cluster.html#cfn-pcs-cluster-slurmconfiguration-accounting */
    "Accounting"?: Accounting;
    /**
     * - The shared Slurm key for authentication, also known as the cluster secret.
     * - _Required_: No
     * - _Type_: [AuthKey](./aws-properties-pcs-cluster-authkey.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-cluster.html#cfn-pcs-cluster-slurmconfiguration-authkey */
    "AuthKey"?: AuthKey;
    /**
     * - The time before an idle node is scaled down.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-cluster.html#cfn-pcs-cluster-slurmconfiguration-scaledownidletimeinseconds */
    "ScaleDownIdleTimeInSeconds"?: number | Intrinsic;
    /**
     * - Additional Slurm-specific configuration that directly maps to Slurm settings.
     * - _Required_: No
     * - _Type_: Array of [SlurmCustomSetting](./aws-properties-pcs-cluster-slurmcustomsetting.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-cluster.html#cfn-pcs-cluster-slurmconfiguration-slurmcustomsettings */
    "SlurmCustomSettings"?: SlurmCustomSetting[];
}

/**
 * The `AWS::PCS::Cluster` resource creates an AWS PCS cluster.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-cluster.html */

export interface PCSCluster extends ResourceAttributes {
    "Type": "AWS::PCS::Cluster";
    "Properties": {
        /**
         * - The name that identifies the cluster.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-cluster.html#cfn-pcs-cluster-name */
        "Name"?: string | Intrinsic;
        /**
         * - The networking configuration for the cluster's control plane.
         * - _Required_: Yes
         * - _Type_: [Networking](./aws-properties-pcs-cluster-networking.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-cluster.html#cfn-pcs-cluster-networking */
        "Networking": Networking;
        /**
         * - The cluster management and job scheduling software associated with the cluster.
         * - _Required_: Yes
         * - _Type_: [Scheduler](./aws-properties-pcs-cluster-scheduler.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-cluster.html#cfn-pcs-cluster-scheduler */
        "Scheduler": Scheduler;
        /**
         * - The size of the cluster.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `SMALL | MEDIUM | LARGE`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-cluster.html#cfn-pcs-cluster-size */
        "Size": string | Intrinsic;
        /**
         * - Additional options related to the Slurm scheduler.
         * - _Required_: No
         * - _Type_: [SlurmConfiguration](./aws-properties-pcs-cluster-slurmconfiguration.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-cluster.html#cfn-pcs-cluster-slurmconfiguration */
        "SlurmConfiguration"?: SlurmConfiguration;
        /**
         * - 1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^.+$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcs-cluster.html#cfn-pcs-cluster-tags */
        "Tags"?: string | Intrinsic;
    };
}