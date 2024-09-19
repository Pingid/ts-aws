import type { Intrinsic } from '../intrinsic/index.js' /**
 * Specifies whether the configuration recorder excludes certain resource types from being recorded. Use the `ResourceTypes` field to enter a comma-separated list of resource types you want to exclude from recording.
 * By default, when AWS Config adds support for a new resource type in the Region where you set up the configuration recorder, including global resource types, AWS Config starts recording resources of that type automatically.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html */

export interface ExclusionByResourceTypes {
  /**
   * - A comma-separated list of resource types to exclude from recording by the configuration recorder.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html#cfn-config-configurationrecorder-exclusionbyresourcetypes-resourcetypes */
  ResourceTypes: (string | Intrinsic)[]
}

/**
 * Specifies the recording strategy of the configuration recorder.
 * Valid values include: `ALL_SUPPORTED_RESOURCE_TYPES`, `INCLUSION_BY_RESOURCE_TYPES`, and `EXCLUSION_BY_RESOURCE_TYPES`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html */

export interface RecordingStrategy {
  /**
   * - The recording strategy for the configuration recorder.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html#cfn-config-configurationrecorder-recordingstrategy-useonly */
  UseOnly: string | Intrinsic
}

/**
 * An object for you to specify your overrides for the recording mode.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html */

export interface RecordingModeOverride {
  /**
   * - A description that you provide for the override.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html#cfn-config-configurationrecorder-recordingmodeoverride-description */
  Description?: string | Intrinsic
  /**
   * - The recording frequency that will be applied to all the resource types specified in the override.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `CONTINUOUS | DAILY`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html#cfn-config-configurationrecorder-recordingmodeoverride-recordingfrequency */
  RecordingFrequency: string | Intrinsic
  /**
   * - A comma-separated list that specifies which resource types AWS Config includes in the override.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html#cfn-config-configurationrecorder-recordingmodeoverride-resourcetypes */
  ResourceTypes: (string | Intrinsic)[]
}

/**
 * Specifies which resource types AWS Config records for configuration changes. By default, AWS Config records configuration changes for all current and future supported resource types in the AWS Region where you have enabled AWS Config, excluding the global IAM resource types: IAM users, groups, roles, and customer managed policies.
 * In the recording group, you specify whether you want to record all supported current and future supported resource types or to include or exclude specific resources types. For a list of supported resource types, see [Supported Resource Types](https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources) in the _AWS Config developer guide_.
 * If you don't want AWS Config to record all current and future supported resource types (excluding the global IAM resource types), use one of the following recording strategies:
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html */

export interface RecordingGroup {
  /**
   * - Specifies whether AWS Config records configuration changes for all supported resource types, excluding the global IAM resource types.
   * - If you set this field to `true`, when AWS Config adds support for a new resource type, AWS Config starts recording resources of that type automatically.
   * - If you set this field to `true`, you cannot enumerate specific resource types to record in the `resourceTypes` field of [RecordingGroup](https://docs.aws.amazon.com/config/latest/APIReference/API_RecordingGroup.html), or to exclude in the `resourceTypes` field of [ExclusionByResourceTypes](https://docs.aws.amazon.com/config/latest/APIReference/API_ExclusionByResourceTypes.html).
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html#cfn-config-configurationrecorder-recordinggroup-allsupported */
  AllSupported?: boolean | Intrinsic
  /**
   * - An object that specifies how AWS Config excludes resource types from being recorded by the configuration recorder.
   * - To use this option, you must set the `useOnly` field of [AWS::Config::ConfigurationRecorder RecordingStrategy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-config-configurationrecorder-recordingstrategy.html) to `EXCLUSION_BY_RESOURCE_TYPES`.
   * - _Required_: No
   * - _Type_: [ExclusionByResourceTypes](./aws-properties-config-configurationrecorder-exclusionbyresourcetypes.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html#cfn-config-configurationrecorder-recordinggroup-exclusionbyresourcetypes */
  ExclusionByResourceTypes?: ExclusionByResourceTypes
  /**
   * - This option is a bundle which only applies to the global IAM resource types: IAM users, groups, roles, and customer managed policies. These global IAM resource types can only be recorded by AWS Config in Regions where AWS Config was available before February 2022. You cannot be record the global IAM resouce types in Regions supported by AWS Config after February 2022. This list where you cannot record the global IAM resource types includes the following Regions:
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html#cfn-config-configurationrecorder-recordinggroup-includeglobalresourcetypes */
  IncludeGlobalResourceTypes?: boolean | Intrinsic
  /**
   * - An object that specifies the recording strategy for the configuration recorder.
   * - _Required_: No
   * - _Type_: [RecordingStrategy](./aws-properties-config-configurationrecorder-recordingstrategy.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html#cfn-config-configurationrecorder-recordinggroup-recordingstrategy */
  RecordingStrategy?: RecordingStrategy
  /**
   * - A comma-separated list that specifies which resource types AWS Config records.
   * - For a list of valid `ResourceTypes` values, see the **Resource Type Value** column in [Supported AWS resource Types](https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources) in the _AWS Config developer guide_.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html#cfn-config-configurationrecorder-recordinggroup-resourcetypes */
  ResourceTypes?: (string | Intrinsic)[]
}

/**
 * Specifies the default recording frequency that AWS Config uses to record configuration changes. AWS Config supports _Continuous recording_ and _Daily recording_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html */

export interface RecordingMode {
  /**
   * - The default recording frequency that AWS Config uses to record configuration changes.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `CONTINUOUS | DAILY`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html#cfn-config-configurationrecorder-recordingmode-recordingfrequency */
  RecordingFrequency: string | Intrinsic
  /**
   * - An array of `recordingModeOverride` objects for you to specify your overrides for the recording mode. The `recordingModeOverride` object in the `recordingModeOverrides` array consists of three fields: a `description`, the new `recordingFrequency`, and an array of `resourceTypes` to override.
   * - _Required_: No
   * - _Type_: Array of [RecordingModeOverride](./aws-properties-config-configurationrecorder-recordingmodeoverride.html)
   * - _Minimum_: `0`
   * - _Maximum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html#cfn-config-configurationrecorder-recordingmode-recordingmodeoverrides */
  RecordingModeOverrides?: RecordingModeOverride[]
}

/**
 * The `AWS::Config::ConfigurationRecorder` resource type describes the AWS resource types that AWS Config records for configuration changes.
 * The configuration recorder stores the configuration changes of the specified resources in your account as configuration items.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html */

export interface ConfigConfigurationRecorder {
  Type: 'AWS::Config::ConfigurationRecorder'
  Properties: {
    /**
     * - The name of the configuration recorder. AWS Config automatically assigns the name of "default" when creating the configuration recorder.
     * - You cannot change the name of the configuration recorder after it has been created. To change the configuration recorder name, you must delete it and create a new configuration recorder with a new name.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html#cfn-config-configurationrecorder-name */
    Name?: string | Intrinsic
    /**
     * - Specifies which resource types AWS Config records for configuration changes.
     * - _Required_: No
     * - _Type_: [RecordingGroup](./aws-properties-config-configurationrecorder-recordinggroup.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html#cfn-config-configurationrecorder-recordinggroup */
    RecordingGroup?: RecordingGroup
    /**
     * - Specifies the default recording frequency that AWS Config uses to record configuration changes. AWS Config supports _Continuous recording_ and _Daily recording_.
     * - You can also override the recording frequency for specific resource types.
     * - _Required_: No
     * - _Type_: [RecordingMode](./aws-properties-config-configurationrecorder-recordingmode.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html#cfn-config-configurationrecorder-recordingmode */
    RecordingMode?: RecordingMode
    /**
     * - Amazon Resource Name (ARN) of the IAM role assumed by AWS Config and used by the configuration recorder. For more information, see [Permissions for the IAM Role Assigned](https://docs.aws.amazon.com/config/latest/developerguide/iamrole-permissions.html) to AWS Config in the AWS Config Developer Guide.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-config-configurationrecorder.html#cfn-config-configurationrecorder-rolearn */
    RoleARN: string | Intrinsic
  }
}
