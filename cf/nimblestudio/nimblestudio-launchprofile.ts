import type { Intrinsic } from '../intrinsic/index.js' /**
 * Configures how streaming sessions are backed up when launched from this launch profile.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html */

export interface StreamConfigurationSessionBackup {
  /**
   * - The maximum number of backups that each streaming session created from this launch profile can have.
   * - _Required_: No
   * - _Type_: Number
   * - _Minimum_: `0`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-streamconfigurationsessionbackup-maxbackupstoretain */
  MaxBackupsToRetain?: number | Intrinsic
  /**
   * - Specifies how artists sessions are backed up.
   * - Configures backups for streaming sessions launched with this launch profile. The default value is `DEACTIVATED`, which means that backups are deactivated. To allow backups, set this value to `AUTOMATIC`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `AUTOMATIC | DEACTIVATED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-streamconfigurationsessionbackup-mode */
  Mode?: string | Intrinsic
}

/**
 * Custom volume configuration for the root volumes that are attached to streaming sessions.
 * This parameter is only allowed when `sessionPersistenceMode` is `ACTIVATED`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html */

export interface VolumeConfiguration {
  /**
   * - The number of I/O operations per second for the root volume that is attached to streaming session.
   * - _Required_: No
   * - _Type_: Number
   * - _Minimum_: `3000`
   * - _Maximum_: `16000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-volumeconfiguration-iops */
  Iops?: number | Intrinsic
  /**
   * - The size of the root volume that is attached to the streaming session. The root volume size is measured in GiBs.
   * - _Required_: No
   * - _Type_: Number
   * - _Minimum_: `100`
   * - _Maximum_: `16000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-volumeconfiguration-size */
  Size?: number | Intrinsic
  /**
   * - The throughput to provision for the root volume that is attached to the streaming session. The throughput is measured in MiB/s.
   * - _Required_: No
   * - _Type_: Number
   * - _Minimum_: `125`
   * - _Maximum_: `1000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-volumeconfiguration-throughput */
  Throughput?: number | Intrinsic
}

/**
 * The upload storage root location (folder) on streaming workstations where files are uploaded.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html */

export interface StreamingSessionStorageRoot {
  /**
   * - The folder path in Linux workstations where files are uploaded.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(\$HOME|/)[/]?([A-Za-z0-9-_]+/)*([A-Za-z0-9_-]+)$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-streamingsessionstorageroot-linux */
  Linux?: string | Intrinsic
  /**
   * - The folder path in Windows workstations where files are uploaded.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^((\%HOMEPATH\%)|[a-zA-Z]:)[\\/](?:[a-zA-Z0-9_-]+[\\/])*[a-zA-Z0-9_-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-streamingsessionstorageroot-windows */
  Windows?: string | Intrinsic
}

/**
 * The configuration for a streaming session’s upload storage.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html */

export interface StreamConfigurationSessionStorage {
  /**
   * - Allows artists to upload files to their workstations. The only valid option is `UPLOAD`.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-streamconfigurationsessionstorage-mode */
  Mode: (string | Intrinsic)[]
  /**
   * - The configuration for the upload storage root of the streaming session.
   * - _Required_: No
   * - _Type_: [StreamingSessionStorageRoot](./aws-properties-nimblestudio-launchprofile-streamingsessionstorageroot.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-streamconfigurationsessionstorage-root */
  Root?: StreamingSessionStorageRoot
}

/**
 * A configuration for a streaming session.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html */

export interface StreamConfiguration {
  /**
   * - Indicates if a streaming session created from this launch profile should be terminated automatically or retained without termination after being in a `STOPPED` state.
   * - This parameter is only allowed when `sessionPersistenceMode` is `ACTIVATED`. When allowed, the default value for this parameter is `DEACTIVATED`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `DEACTIVATED | ACTIVATED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-streamconfiguration-automaticterminationmode */
  AutomaticTerminationMode?: string | Intrinsic
  /**
   * - Allows or deactivates the use of the system clipboard to copy and paste between the streaming session and streaming client.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `ENABLED | DISABLED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-streamconfiguration-clipboardmode */
  ClipboardMode: string | Intrinsic
  /**
   * - The EC2 instance types that users can select from when launching a streaming session with this launch profile.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-streamconfiguration-ec2instancetypes */
  Ec2InstanceTypes: (string | Intrinsic)[]
  /**
   * - The length of time, in minutes, that a streaming session can be active before it is stopped or terminated. After this point, Nimble Studio automatically terminates or stops the session. The default length of time is 690 minutes, and the maximum length of time is 30 days.
   * - _Required_: No
   * - _Type_: Number
   * - _Minimum_: `1`
   * - _Maximum_: `43200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-streamconfiguration-maxsessionlengthinminutes */
  MaxSessionLengthInMinutes?: number | Intrinsic
  /**
   * - Integer that determines if you can start and stop your sessions and how long a session can stay in the `STOPPED` state. The default value is 0. The maximum value is 5760.
   * - This field is allowed only when `sessionPersistenceMode` is `ACTIVATED` and `automaticTerminationMode` is `ACTIVATED`.
   * - If the value is set to 0, your sessions can’t be `STOPPED`. If you then call `StopStreamingSession`, the session fails. If the time that a session stays in the `READY` state exceeds the `maxSessionLengthInMinutes` value, the session will automatically be terminated (instead of `STOPPED`).
   * - If the value is set to a positive number, the session can be stopped. You can call `StopStreamingSession` to stop sessions in the `READY` state. If the time that a session stays in the `READY` state exceeds the `maxSessionLengthInMinutes` value, the session will automatically be stopped (instead of terminated).
   * - _Required_: No
   * - _Type_: Number
   * - _Minimum_: `0`
   * - _Maximum_: `5760`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-streamconfiguration-maxstoppedsessionlengthinminutes */
  MaxStoppedSessionLengthInMinutes?: number | Intrinsic
  /**
   * - Information about the streaming session backup.
   * - _Required_: No
   * - _Type_: [StreamConfigurationSessionBackup](./aws-properties-nimblestudio-launchprofile-streamconfigurationsessionbackup.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-streamconfiguration-sessionbackup */
  SessionBackup?: StreamConfigurationSessionBackup
  /**
   * - Determine if a streaming session created from this launch profile can configure persistent storage. This means that `volumeConfiguration` and `automaticTerminationMode` are configured.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `DEACTIVATED | ACTIVATED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-streamconfiguration-sessionpersistencemode */
  SessionPersistenceMode?: string | Intrinsic
  /**
   * - The upload storage for a streaming session.
   * - _Required_: No
   * - _Type_: [StreamConfigurationSessionStorage](./aws-properties-nimblestudio-launchprofile-streamconfigurationsessionstorage.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-streamconfiguration-sessionstorage */
  SessionStorage?: StreamConfigurationSessionStorage
  /**
   * - The streaming images that users can select from when launching a streaming session with this launch profile.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `0 | 1`
   * - _Maximum_: `22 | 20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-streamconfiguration-streamingimageids */
  StreamingImageIds: (string | Intrinsic)[]
  /**
   * - Custom volume configuration for the root volumes that are attached to streaming sessions.
   * - This parameter is only allowed when `sessionPersistenceMode` is `ACTIVATED`.
   * - _Required_: No
   * - _Type_: [VolumeConfiguration](./aws-properties-nimblestudio-launchprofile-volumeconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-streamconfiguration-volumeconfiguration */
  VolumeConfiguration?: VolumeConfiguration
}

/**
 * The `AWS::NimbleStudio::LaunchProfile` resource represents access permissions for a set of studio components, including types of workstations, render farms, and shared file systems. Launch profiles are shared with studio users to give them access to the set of studio components.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html */

export interface NimbleStudioLaunchProfile {
  Type: 'AWS::NimbleStudio::LaunchProfile'
  Properties: {
    /**
     * - A human-readable description of the launch profile.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-description */
    Description?: string | Intrinsic
    /**
     * - Unique identifiers for a collection of EC2 subnets.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `0`
     * - _Maximum_: `6`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-ec2subnetids */
    Ec2SubnetIds: (string | Intrinsic)[]
    /**
     * - The version number of the protocol that is used by the launch profile. The only valid version is "2021-03-31".
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `0`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-launchprofileprotocolversions */
    LaunchProfileProtocolVersions: (string | Intrinsic)[]
    /**
     * - A friendly name for the launch profile.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-name */
    Name: string | Intrinsic
    /**
     * - A configuration for a streaming session.
     * - _Required_: Yes
     * - _Type_: [StreamConfiguration](./aws-properties-nimblestudio-launchprofile-streamconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-streamconfiguration */
    StreamConfiguration: StreamConfiguration
    /**
     * - Unique identifiers for a collection of studio components that can be used with this launch profile.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-studiocomponentids */
    StudioComponentIds: (string | Intrinsic)[]
    /**
     * - The unique identifier for a studio resource. In Nimble Studio, all other resources are contained in a studio resource.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-studioid */
    StudioId: string | Intrinsic
    /**
     * - An array of key-value pairs to apply to this resource.
     * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `.+`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-nimblestudio-launchprofile.html#cfn-nimblestudio-launchprofile-tags */
    Tags?: Record<string, string | Intrinsic>
  }
}
