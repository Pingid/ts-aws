import type { Intrinsic } from '../intrinsic/index.js' /**
 * Contains information about a component dependency for a Lambda function component.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html */

export interface ComponentDependencyRequirement {
  /**
   * - The type of this dependency. Choose from the following options:
   * - Default: `HARD`
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `SOFT | HARD`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-componentdependencyrequirement-dependencytype */
  DependencyType?: string | Intrinsic
  /**
   * - The component version requirement for the component dependency.
   * - AWS IoT Greengrass uses semantic version constraints. For more information, see [Semantic Versioning](https://semver.org/).
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-componentdependencyrequirement-versionrequirement */
  VersionRequirement?: string | Intrinsic
}

/**
 * Contains information about a platform that a component supports.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html */

export interface ComponentPlatform {
  /**
   * - A dictionary of attributes for the platform. The AWS IoT Greengrass Core software defines the `os` and `platform` by default. You can specify additional platform attributes for a core device when you deploy the AWS IoT Greengrass nucleus component. For more information, see the [AWS IoT Greengrass nucleus component](https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-nucleus-component.html) in the _AWS IoT Greengrass V2 Developer Guide_.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `.+`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-componentplatform-attributes */
  Attributes?: Record<string, string | Intrinsic>
  /**
   * - The friendly name of the platform. This name helps you identify the platform.
   * - If you omit this parameter, AWS IoT Greengrass creates a friendly name from the `os` and `architecture` of the platform.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-componentplatform-name */
  Name?: string | Intrinsic
}

/**
 * Contains information about an event source for an AWS Lambda function. The event source defines the topics on which this Lambda function subscribes to receive messages that run the function.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html */

export interface LambdaEventSource {
  /**
   * - The topic to which to subscribe to receive event messages.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-lambdaeventsource-topic */
  Topic?: string | Intrinsic
  /**
   * - The type of event source. Choose from the following options:
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `PUB_SUB | IOT_CORE`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-lambdaeventsource-type */
  Type?: string | Intrinsic
}

/**
 * Contains information about a device that Linux processes in a container can access.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html */

export interface LambdaDeviceMount {
  /**
   * - Whether or not to add the component's system user as an owner of the device.
   * - Default: `false`
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-lambdadevicemount-addgroupowner */
  AddGroupOwner?: boolean | Intrinsic
  /**
   * - The mount path for the device in the file system.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-lambdadevicemount-path */
  Path?: string | Intrinsic
  /**
   * - The permission to access the device: read/only (`ro`) or read/write (`rw`).
   * - Default: `ro`
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ro | rw`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-lambdadevicemount-permission */
  Permission?: string | Intrinsic
}

/**
 * Contains information about a volume that Linux processes in a container can access. When you define a volume, the AWS IoT Greengrass Core software mounts the source files to the destination inside the container.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html */

export interface LambdaVolumeMount {
  /**
   * - Whether or not to add the AWS IoT Greengrass user group as an owner of the volume.
   * - Default: `false`
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-lambdavolumemount-addgroupowner */
  AddGroupOwner?: boolean | Intrinsic
  /**
   * - The path to the logical volume in the file system.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-lambdavolumemount-destinationpath */
  DestinationPath?: string | Intrinsic
  /**
   * - The permission to access the volume: read/only (`ro`) or read/write (`rw`).
   * - Default: `ro`
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ro | rw`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-lambdavolumemount-permission */
  Permission?: string | Intrinsic
  /**
   * - The path to the physical volume in the file system.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-lambdavolumemount-sourcepath */
  SourcePath?: string | Intrinsic
}

/**
 * Contains information about a container in which AWS Lambda functions run on AWS IoT Greengrass core devices.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html */

export interface LambdaContainerParams {
  /**
   * - The list of system devices that the container can access.
   * - _Required_: No
   * - _Type_: Array of [LambdaDeviceMount](./aws-properties-greengrassv2-componentversion-lambdadevicemount.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-lambdacontainerparams-devices */
  Devices?: LambdaDeviceMount[]
  /**
   * - The memory size of the container, expressed in kilobytes.
   * - Default: `16384` (16 MB)
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-lambdacontainerparams-memorysizeinkb */
  MemorySizeInKB?: number | Intrinsic
  /**
   * - Whether or not the container can read information from the device's `/sys` folder.
   * - Default: `false`
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-lambdacontainerparams-mountrosysfs */
  MountROSysfs?: boolean | Intrinsic
  /**
   * - The list of volumes that the container can access.
   * - _Required_: No
   * - _Type_: Array of [LambdaVolumeMount](./aws-properties-greengrassv2-componentversion-lambdavolumemount.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-lambdacontainerparams-volumes */
  Volumes?: LambdaVolumeMount[]
}

/**
 * Contains parameters for a Linux process that contains an AWS Lambda function.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html */

export interface LambdaLinuxProcessParams {
  /**
   * - The parameters for the container in which the Lambda function runs.
   * - _Required_: No
   * - _Type_: [LambdaContainerParams](./aws-properties-greengrassv2-componentversion-lambdacontainerparams.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-lambdalinuxprocessparams-containerparams */
  ContainerParams?: LambdaContainerParams
  /**
   * - The isolation mode for the process that contains the Lambda function. The process can run in an isolated runtime environment inside the AWS IoT Greengrass container, or as a regular process outside any container.
   * - Default: `GreengrassContainer`
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `GreengrassContainer | NoContainer`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-lambdalinuxprocessparams-isolationmode */
  IsolationMode?: string | Intrinsic
}

/**
 * Contains parameters for a Lambda function that runs on AWS IoT Greengrass.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html */

export interface LambdaExecutionParameters {
  /**
   * - The map of environment variables that are available to the Lambda function when it runs.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `.+`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-lambdaexecutionparameters-environmentvariables */
  EnvironmentVariables?: Record<string, string | Intrinsic>
  /**
   * - The list of event sources to which to subscribe to receive work messages. The Lambda function runs when it receives a message from an event source. You can subscribe this function to local publish/subscribe messages and AWS IoT Core MQTT messages.
   * - _Required_: No
   * - _Type_: Array of [LambdaEventSource](./aws-properties-greengrassv2-componentversion-lambdaeventsource.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-lambdaexecutionparameters-eventsources */
  EventSources?: LambdaEventSource[]
  /**
   * - The list of arguments to pass to the Lambda function when it runs.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-lambdaexecutionparameters-execargs */
  ExecArgs?: (string | Intrinsic)[]
  /**
   * - The encoding type that the Lambda function supports.
   * - Default: `json`
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `json | binary`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-lambdaexecutionparameters-inputpayloadencodingtype */
  InputPayloadEncodingType?: string | Intrinsic
  /**
   * - The parameters for the Linux process that contains the Lambda function.
   * - _Required_: No
   * - _Type_: [LambdaLinuxProcessParams](./aws-properties-greengrassv2-componentversion-lambdalinuxprocessparams.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-lambdaexecutionparameters-linuxprocessparams */
  LinuxProcessParams?: LambdaLinuxProcessParams
  /**
   * - The maximum amount of time in seconds that a non-pinned Lambda function can idle before the AWS IoT Greengrass Core software stops its process.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-lambdaexecutionparameters-maxidletimeinseconds */
  MaxIdleTimeInSeconds?: number | Intrinsic
  /**
   * - The maximum number of instances that a non-pinned Lambda function can run at the same time.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-lambdaexecutionparameters-maxinstancescount */
  MaxInstancesCount?: number | Intrinsic
  /**
   * - The maximum size of the message queue for the Lambda function component. The AWS IoT Greengrass core device stores messages in a FIFO (first-in-first-out) queue until it can run the Lambda function to consume each message.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-lambdaexecutionparameters-maxqueuesize */
  MaxQueueSize?: number | Intrinsic
  /**
   * - Whether or not the Lambda function is pinned, or long-lived.
   * - Default: `true`
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-lambdaexecutionparameters-pinned */
  Pinned?: boolean | Intrinsic
  /**
   * - The interval in seconds at which a pinned (also known as long-lived) Lambda function component sends status updates to the Lambda manager component.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-lambdaexecutionparameters-statustimeoutinseconds */
  StatusTimeoutInSeconds?: number | Intrinsic
  /**
   * - The maximum amount of time in seconds that the Lambda function can process a work item.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-lambdaexecutionparameters-timeoutinseconds */
  TimeoutInSeconds?: number | Intrinsic
}

/**
 * Contains information about an AWS Lambda function to import to create a component.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html */

export interface LambdaFunctionRecipeSource {
  /**
   * - The component versions on which this Lambda function component depends.
   * - _Required_: No
   * - _Type_: Object of [ComponentDependencyRequirement](./aws-properties-greengrassv2-componentversion-componentdependencyrequirement.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-lambdafunctionrecipesource-componentdependencies */
  ComponentDependencies?: Record<string, ComponentDependencyRequirement>
  /**
   * - The system and runtime parameters for the Lambda function as it runs on the AWS IoT Greengrass core device.
   * - _Required_: No
   * - _Type_: [LambdaExecutionParameters](./aws-properties-greengrassv2-componentversion-lambdaexecutionparameters.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-lambdafunctionrecipesource-componentlambdaparameters */
  ComponentLambdaParameters?: LambdaExecutionParameters
  /**
   * - The name of the component.
   * - Defaults to the name of the Lambda function.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-lambdafunctionrecipesource-componentname */
  ComponentName?: string | Intrinsic
  /**
   * - The platforms that the component version supports.
   * - _Required_: No
   * - _Type_: Array of [ComponentPlatform](./aws-properties-greengrassv2-componentversion-componentplatform.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-lambdafunctionrecipesource-componentplatforms */
  ComponentPlatforms?: ComponentPlatform[]
  /**
   * - The version of the component.
   * - Defaults to the version of the Lambda function as a semantic version. For example, if your function version is `3`, the component version becomes `3.0.0`.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-lambdafunctionrecipesource-componentversion */
  ComponentVersion?: string | Intrinsic
  /**
   * - The ARN of the Lambda function. The ARN must include the version of the function to import. You can't use version aliases like `$LATEST`.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:[^:]*:lambda:(([a-z]+-)+[0-9])?:([0-9]{12})?:[^.]+$`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-lambdafunctionrecipesource-lambdaarn */
  LambdaArn?: string | Intrinsic
}

/**
 * Creates a component. Components are software that run on AWS IoT Greengrass core devices. After you develop and test a component on your core device, you can use this operation to upload your component to AWS IoT Greengrass. Then, you can deploy the component to other core devices.
 * You can use this operation to do the following:
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html */

export interface GreengrassV2ComponentVersion {
  Type: 'AWS::GreengrassV2::ComponentVersion'
  Properties: {
    /**
     * - The recipe to use to create the component. The recipe defines the component's metadata, parameters, dependencies, lifecycle, artifacts, and platform compatibility.
     * - You must specify either `InlineRecipe` or `LambdaFunction`.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-inlinerecipe */
    InlineRecipe?: string | Intrinsic
    /**
     * - The parameters to create a component from a Lambda function.
     * - You must specify either `InlineRecipe` or `LambdaFunction`.
     * - _Required_: No
     * - _Type_: [LambdaFunctionRecipeSource](./aws-properties-greengrassv2-componentversion-lambdafunctionrecipesource.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-lambdafunction */
    LambdaFunction?: LambdaFunctionRecipeSource
    /**
     * - Application-specific metadata to attach to the component version. You can use tags in IAM policies to control access to AWS IoT Greengrass resources. You can also use tags to categorize your resources. For more information, see [Tag your AWS IoT Greengrass Version 2 resources](https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html) in the _AWS IoT Greengrass V2 Developer Guide_.
     * - This `Json` property type is processed as a map of key-value pairs. It uses the following format, which is different from most `Tags` implementations in AWS CloudFormation templates.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `^(?!aws:)[a-zA-Z+-=._:/]{1,128}$`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrassv2-componentversion.html#cfn-greengrassv2-componentversion-tags */
    Tags?: Record<string, string | Intrinsic>
  }
}
