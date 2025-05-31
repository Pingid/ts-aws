import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Defines the details of a high availability configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html */

export interface HighAvailabilityConfig {
    /**
     * - The number of instances in a high availability configuration. The minimum possible value is 1 and the maximum is 100.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-highavailabilityconfig-desiredcapacity */
    "DesiredCapacity": number | Intrinsic;
}

/**
 * Defines the storage configuration for an Amazon EFS file system.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html */

export interface EfsStorageConfiguration {
    /**
     * - The file system identifier.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^\S{1,200}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-efsstorageconfiguration-filesystemid */
    "FileSystemId": string | Intrinsic;
    /**
     * - The mount point for the file system.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^\S{1,200}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-efsstorageconfiguration-mountpoint */
    "MountPoint": string | Intrinsic;
}

/**
 * Defines the storage configuration for an Amazon FSx file system.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html */

export interface FsxStorageConfiguration {
    /**
     * - The file system identifier.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^\S{1,200}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-fsxstorageconfiguration-filesystemid */
    "FileSystemId": string | Intrinsic;
    /**
     * - The mount point for the file system.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^\S{1,200}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-fsxstorageconfiguration-mountpoint */
    "MountPoint": string | Intrinsic;
}

/**
 * Defines the storage configuration for a runtime environment.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html */

export interface StorageConfiguration {
    /**
     * - Defines the storage configuration for an Amazon EFS file system.
     * - _Required_: No
     * - _Type_: [EfsStorageConfiguration](./aws-properties-m2-environment-efsstorageconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-storageconfiguration-efs */
    "Efs"?: EfsStorageConfiguration;
    /**
     * - Defines the storage configuration for an Amazon FSx file system.
     * - _Required_: No
     * - _Type_: [FsxStorageConfiguration](./aws-properties-m2-environment-fsxstorageconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-storageconfiguration-fsx */
    "Fsx"?: FsxStorageConfiguration;
}

/**
 * Specifies a runtime environment for a given runtime engine.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html */

export interface M2Environment extends ResourceAttributes {
    "Type": "AWS::M2::Environment";
    "Properties": {
        /**
         * - The description of the runtime environment.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `0`
         * - _Maximum_: `500`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-description */
        "Description"?: string | Intrinsic;
        /**
         * - The target platform for the runtime environment.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `microfocus | bluage`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-enginetype */
        "EngineType": string | Intrinsic;
        /**
         * - The version of the runtime engine.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^\S{1,10}$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-engineversion */
        "EngineVersion"?: string | Intrinsic;
        /**
         * - Defines the details of a high availability configuration.
         * - _Required_: No
         * - _Type_: [HighAvailabilityConfig](./aws-properties-m2-environment-highavailabilityconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-highavailabilityconfig */
        "HighAvailabilityConfig"?: HighAvailabilityConfig;
        /**
         * - The instance type of the runtime environment.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^\S{1,20}$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-instancetype */
        "InstanceType": string | Intrinsic;
        /**
         * - The identifier of a customer managed key.
         * - _Required_: No
         * - _Type_: String
         * - _Maximum_: `2048`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-kmskeyid */
        "KmsKeyId"?: string | Intrinsic;
        /**
         * - The name of the runtime environment.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[A-Za-z0-9][A-Za-z0-9_\-]{1,59}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-name */
        "Name": string | Intrinsic;
        /**
         * - The network type supported by the runtime environment.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `ipv4 | dual`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-networktype */
        "NetworkType"?: string | Intrinsic;
        /**
         * - Configures the maintenance window that you want for the runtime environment. The maintenance window must have the format `ddd:hh24:mi-ddd:hh24:mi` and must be less than 24 hours. The following two examples are valid maintenance windows: `sun:23:45-mon:00:15` or `sat:01:00-sat:03:00`.
         * - If you do not provide a value, a random system-generated value will be assigned.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^\S{1,50}$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-preferredmaintenancewindow */
        "PreferredMaintenanceWindow"?: string | Intrinsic;
        /**
         * - Specifies whether the runtime environment is publicly accessible.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-publiclyaccessible */
        "PubliclyAccessible"?: boolean | Intrinsic;
        /**
         * - The list of security groups for the VPC associated with this runtime environment.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-securitygroupids */
        "SecurityGroupIds"?: (string | Intrinsic)[];
        /**
         * - Defines the storage configuration for a runtime environment.
         * - _Required_: No
         * - _Type_: Array of [StorageConfiguration](./aws-properties-m2-environment-storageconfiguration.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-storageconfigurations */
        "StorageConfigurations"?: StorageConfiguration[];
        /**
         * - The list of subnets associated with the VPC for this runtime environment.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-subnetids */
        "SubnetIds"?: (string | Intrinsic)[];
        /**
         * - An array of key-value pairs to apply to this resource.
         * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `^(?!aws:).+$`
         * - _Minimum_: `0`
         * - _Maximum_: `256`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-environment.html#cfn-m2-environment-tags */
        "Tags"?: Record<string, string | Intrinsic>;
    };
}