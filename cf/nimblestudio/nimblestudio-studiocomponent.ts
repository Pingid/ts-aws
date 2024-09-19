import type { Intrinsic } from '../intrinsic/index.js' /**
 * Initialization scripts for studio components.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html */

export interface StudioComponentInitializationScript {
  /**
   * - The version number of the protocol that is used by the launch profile. The only valid version is "2021-03-31".
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^2021\-03\-31$`
   * - _Minimum_: `0`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-studiocomponentinitializationscript-launchprofileprotocolversion */
  LaunchProfileProtocolVersion?: string | Intrinsic
  /**
   * - The platform of the initialization script, either Windows or Linux.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `LINUX | WINDOWS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-studiocomponentinitializationscript-platform */
  Platform?: string | Intrinsic
  /**
   * - The method to use when running the initialization script.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `SYSTEM_INITIALIZATION | USER_INITIALIZATION`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-studiocomponentinitializationscript-runcontext */
  RunContext?: string | Intrinsic
  /**
   * - The initialization script.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `5120`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-studiocomponentinitializationscript-script */
  Script?: string | Intrinsic
}

/**
 * A parameter for a studio component script, in the form of a key-value pair.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html */

export interface ScriptParameterKeyValue {
  /**
   * - A script parameter key.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z_][a-zA-Z0-9_]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-scriptparameterkeyvalue-key */
  Key?: string | Intrinsic
  /**
   * - A script parameter value.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-scriptparameterkeyvalue-value */
  Value?: string | Intrinsic
}

/**
 * The configuration for a render farm that is associated with a studio resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html */

export interface ComputeFarmConfiguration {
  /**
   * - The name of an Active Directory user that is used on ComputeFarm worker instances.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-computefarmconfiguration-activedirectoryuser */
  ActiveDirectoryUser?: string | Intrinsic
  /**
   * - The endpoint of the ComputeFarm that is accessed by the studio component resource.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-computefarmconfiguration-endpoint */
  Endpoint?: string | Intrinsic
}

/**
 * The configuration for a license service that is associated with a studio resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html */

export interface LicenseServiceConfiguration {
  /**
   * - The endpoint of the license service that is accessed by the studio component resource.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-licenseserviceconfiguration-endpoint */
  Endpoint?: string | Intrinsic
}

/**
 * The configuration for a shared file storage system that is associated with a studio resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html */

export interface SharedFileSystemConfiguration {
  /**
   * - The endpoint of the shared file system that is accessed by the studio component resource.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-sharedfilesystemconfiguration-endpoint */
  Endpoint?: string | Intrinsic
  /**
   * - The unique identifier for a file system.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-sharedfilesystemconfiguration-filesystemid */
  FileSystemId?: string | Intrinsic
  /**
   * - The mount location for a shared file system on a Linux virtual workstation.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(/?|(\$HOME)?(/[^/\n\s\\]+)*)$`
   * - _Minimum_: `0`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-sharedfilesystemconfiguration-linuxmountpoint */
  LinuxMountPoint?: string | Intrinsic
  /**
   * - The name of the file share.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-sharedfilesystemconfiguration-sharename */
  ShareName?: string | Intrinsic
  /**
   * - The mount location for a shared file system on a Windows virtual workstation.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[A-Z]$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-sharedfilesystemconfiguration-windowsmountdrive */
  WindowsMountDrive?: string | Intrinsic
}

/**
 * An LDAP attribute of an Active Directory computer account, in the form of a name:value pair.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html */

export interface ActiveDirectoryComputerAttribute {
  /**
   * - The name for the LDAP attribute.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `40`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-activedirectorycomputerattribute-name */
  Name?: string | Intrinsic
  /**
   * - The value for the LDAP attribute.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-activedirectorycomputerattribute-value */
  Value?: string | Intrinsic
}

/**
 * The configuration for a AWS Directory Service for Microsoft Active Directory studio resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html */

export interface ActiveDirectoryConfiguration {
  /**
   * - A collection of custom attributes for an Active Directory computer.
   * - _Required_: No
   * - _Type_: Array of [ActiveDirectoryComputerAttribute](./aws-properties-nimblestudio-studiocomponent-activedirectorycomputerattribute.html)
   * - _Minimum_: `0`
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-activedirectoryconfiguration-computerattributes */
  ComputerAttributes?: ActiveDirectoryComputerAttribute[]
  /**
   * - The directory ID of the AWS Directory Service for Microsoft Active Directory to access using this studio component.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-activedirectoryconfiguration-directoryid */
  DirectoryId?: string | Intrinsic
  /**
   * - The distinguished name (DN) and organizational unit (OU) of an Active Directory computer.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `2000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-activedirectoryconfiguration-organizationalunitdistinguishedname */
  OrganizationalUnitDistinguishedName?: string | Intrinsic
}

/**
 * The configuration of the studio component, based on component type.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html */

export interface StudioComponentConfiguration {
  /**
   * - The configuration for a AWS Directory Service for Microsoft Active Directory studio resource.
   * - _Required_: No
   * - _Type_: [ActiveDirectoryConfiguration](./aws-properties-nimblestudio-studiocomponent-activedirectoryconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-studiocomponentconfiguration-activedirectoryconfiguration */
  ActiveDirectoryConfiguration?: ActiveDirectoryConfiguration
  /**
   * - The configuration for a render farm that is associated with a studio resource.
   * - _Required_: No
   * - _Type_: [ComputeFarmConfiguration](./aws-properties-nimblestudio-studiocomponent-computefarmconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-studiocomponentconfiguration-computefarmconfiguration */
  ComputeFarmConfiguration?: ComputeFarmConfiguration
  /**
   * - The configuration for a license service that is associated with a studio resource.
   * - _Required_: No
   * - _Type_: [LicenseServiceConfiguration](./aws-properties-nimblestudio-studiocomponent-licenseserviceconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-studiocomponentconfiguration-licenseserviceconfiguration */
  LicenseServiceConfiguration?: LicenseServiceConfiguration
  /**
   * - The configuration for a shared file storage system that is associated with a studio resource.
   * - _Required_: No
   * - _Type_: [SharedFileSystemConfiguration](./aws-properties-nimblestudio-studiocomponent-sharedfilesystemconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-studiocomponentconfiguration-sharedfilesystemconfiguration */
  SharedFileSystemConfiguration?: SharedFileSystemConfiguration
}

/**
 * The `AWS::NimbleStudio::StudioComponent` resource represents a network resource that is used by a studio's users and workflows. A typical studio contains studio components for the following: a render farm, an Active Directory, a licensing service, and a shared file system.
 * Access to a studio component is managed by specifying security groups for the resource, as well as its endpoint.
 * A studio component also has a set of initialization scripts, which are returned by `GetLaunchProfileInitialization`. These initialization scripts run on streaming sessions when they start. They provide users with flexibility in controlling how studio resources are configured on a streaming session.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html */

export interface NimbleStudioStudioComponent {
  Type: 'AWS::NimbleStudio::StudioComponent'
  Properties: {
    /**
     * - The configuration of the studio component, based on component type.
     * - _Required_: No
     * - _Type_: [StudioComponentConfiguration](./aws-properties-nimblestudio-studiocomponent-studiocomponentconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-configuration */
    Configuration?: StudioComponentConfiguration
    /**
     * - A human-readable description for the studio component resource.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-description */
    Description?: string | Intrinsic
    /**
     * - The EC2 security groups that control access to the studio component.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `0`
     * - _Maximum_: `30`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-ec2securitygroupids */
    Ec2SecurityGroupIds?: (string | Intrinsic)[]
    /**
     * - Initialization scripts for studio components.
     * - _Required_: No
     * - _Type_: Array of [StudioComponentInitializationScript](./aws-properties-nimblestudio-studiocomponent-studiocomponentinitializationscript.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-initializationscripts */
    InitializationScripts?: StudioComponentInitializationScript[]
    /**
     * - A friendly name for the studio component resource.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-name */
    Name: string | Intrinsic
    /**
     * - An IAM role attached to a Studio Component that gives the studio component access to AWS resources at anytime while the instance is running.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-runtimerolearn */
    RuntimeRoleArn?: string | Intrinsic
    /**
     * - Parameters for the studio component scripts.
     * - _Required_: No
     * - _Type_: Array of [ScriptParameterKeyValue](./aws-properties-nimblestudio-studiocomponent-scriptparameterkeyvalue.html)
     * - _Minimum_: `0`
     * - _Maximum_: `30`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-scriptparameters */
    ScriptParameters?: ScriptParameterKeyValue[]
    /**
     * - An IAM role attached to Studio Component when the system initialization script runs which give the studio component access to AWS resources when the system initialization script runs.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-secureinitializationrolearn */
    SecureInitializationRoleArn?: string | Intrinsic
    /**
     * - The unique identifier for a studio resource. In Nimble Studio, all other resources are contained in a studio resource.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-studioid */
    StudioId: string | Intrinsic
    /**
     * - The specific subtype of a studio component.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `AWS_MANAGED_MICROSOFT_AD | AMAZON_FSX_FOR_WINDOWS | AMAZON_FSX_FOR_LUSTRE | CUSTOM`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-subtype */
    Subtype?: string | Intrinsic
    /**
     * - An array of key-value pairs to apply to this resource.
     * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `.+`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-tags */
    Tags?: Record<string, string | Intrinsic>
    /**
     * - The type of the studio component.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ACTIVE_DIRECTORY | SHARED_FILE_SYSTEM | COMPUTE_FARM | LICENSE_SERVICE | CUSTOM`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-studiocomponent.html#cfn-nimblestudio-studiocomponent-type */
    Type: string | Intrinsic
  }
}
