import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * You can use the Resource Tags property to apply tags to resources, which can help you identify and categorize those resources. You can tag only resources for which AWS CloudFormation supports tagging. For information about which resources you can tag with CloudFormation, see the individual resources in [AWS resource and property types reference](./aws-template-resource-type-ref.html).
 * ###### Note
 *
 * Tagging implementations might vary by resource. For example, `AWS::AutoScaling::AutoScalingGroup` provides an additional, required `PropagateAtLaunch` property as part of its tagging scheme.
 * In addition to any tags you define, CloudFormation automatically creates the following stack-level tags with the prefix `aws:`:
 * *   `` aws:cloudformation:`logical-id` ``
 *
 * *   `` aws:cloudformation:`stack-id` ``
 *
 * *   `` aws:cloudformation:`stack-name` ``
 * The `aws:` prefix is reserved for AWS use. This prefix is case-insensitive. If you use this prefix in the `Key` or `Value` property, you can't update or delete the tag. Tags with this prefix don't count toward the number of tags per resource.
 * Propagation of stack-level tags to resources, including automatically created tags, can vary by resource. For example, tags aren't propagated to Amazon EBS volumes that are created from block device mappings.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html */

export interface Tag {
  /**
   * - The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with `aws:`. You can use any of the following characters: the set of Unicode letters, digits, whitespace, `_`, `.`, `:`, `/`, `=`, `+`, `@`, `-`, and `"`.
   * - _Required_: Yes
   * - _Type_: String
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-resource-tags-key */
  Key: string | Intrinsic
  /**
   * - The value for the tag. You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, `_`, `.`, `/`, `=`, `+`, and `-`.
   * - _Required_: Yes
   * - _Type_: String
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-resource-tags-value */
  Value: string | Intrinsic
}

/**
 * Settings for a local volume resource, which represents a file or directory on the root file system. For more information, see [Access Local Resources with Lambda Functions](https://docs.aws.amazon.com/greengrass/v1/developerguide/access-local-resources.html) in the _AWS IoT Greengrass Version 1 Developer Guide_ .
 * In an AWS CloudFormation template, `LocalVolumeResourceData` can be used in the [`ResourceDataContainer`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourcedatacontainer.html) property type.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html */

export interface LocalVolumeResourceData {
  /**
   * - The absolute local path of the resource in the Lambda environment.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-greengrass-resourcedefinition-localvolumeresourcedata-destinationpath */
  DestinationPath: string | Intrinsic
  /**
   * - Settings that define additional Linux OS group permissions to give to the Lambda function process.
   * - _Required_: No
   * - _Type_: [GroupOwnerSetting](./aws-properties-greengrass-resourcedefinition-groupownersetting.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-greengrass-resourcedefinition-localvolumeresourcedata-groupownersetting */
  GroupOwnerSetting?: GroupOwnerSetting
  /**
   * - The local absolute path of the volume resource on the host. The source path for a volume resource type cannot start with `/sys`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-greengrass-resourcedefinition-localvolumeresourcedata-sourcepath */
  SourcePath: string | Intrinsic
}

/**
 * Settings for an Secrets Manager machine learning resource. For more information, see [Perform Machine Learning Inference](https://docs.aws.amazon.com/greengrass/v1/developerguide/ml-inference.html) in the _AWS IoT Greengrass Version 1 Developer Guide_ .
 * In an AWS CloudFormation template, `SageMakerMachineLearningModelResourceData` can be used in the [`ResourceDataContainer`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourcedatacontainer.html) property type.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html */

export interface SageMakerMachineLearningModelResourceData {
  /**
   * - The absolute local path of the resource inside the Lambda environment.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-greengrass-resourcedefinition-sagemakermachinelearningmodelresourcedata-destinationpath */
  DestinationPath: string | Intrinsic
  /**
   * - The owner setting for the downloaded machine learning resource. For more information, see [Access Machine Learning Resources from Lambda Functions](https://docs.aws.amazon.com/greengrass/v1/developerguide/access-ml-resources.html) in the _AWS IoT Greengrass Version 1 Developer Guide_ .
   * - _Required_: No
   * - _Type_: [ResourceDownloadOwnerSetting](./aws-properties-greengrass-resourcedefinition-resourcedownloadownersetting.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-greengrass-resourcedefinition-sagemakermachinelearningmodelresourcedata-ownersetting */
  OwnerSetting?: ResourceDownloadOwnerSetting
  /**
   * - The Amazon Resource Name (ARN) of the Amazon SageMaker training job that represents the source model.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-greengrass-resourcedefinition-sagemakermachinelearningmodelresourcedata-sagemakerjobarn */
  SageMakerJobArn: string | Intrinsic
}

/**
 * Settings for a secret resource, which references a secret from AWS Secrets Manager. AWS IoT Greengrass stores a local, encrypted copy of the secret on the Greengrass core, where it can be securely accessed by connectors and Lambda functions. For more information, see [Deploy Secrets to the AWS IoT Greengrass Core](https://docs.aws.amazon.com/greengrass/v1/developerguide/secrets.html) in the _AWS IoT Greengrass Version 1 Developer Guide_ .
 * In an AWS CloudFormation template, `SecretsManagerSecretResourceData` can be used in the [`ResourceDataContainer`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourcedatacontainer.html) property type.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html */

export interface SecretsManagerSecretResourceData {
  /**
   * - The staging labels whose values you want to make available on the core, in addition to `AWSCURRENT`.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-greengrass-resourcedefinition-secretsmanagersecretresourcedata-additionalstaginglabelstodownload */
  AdditionalStagingLabelsToDownload?: (string | Intrinsic)[]
  /**
   * - The Amazon Resource Name (ARN) of the Secrets Manager secret to make available on the core. The value of the secret's latest version (represented by the `AWSCURRENT` staging label) is included by default.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-greengrass-resourcedefinition-secretsmanagersecretresourcedata-arn */
  ARN: string | Intrinsic
}

/**
 * Settings that define additional Linux OS group permissions to give to the Lambda function process. You can give the permissions of the Linux group that owns the resource or choose another Linux group. These permissions are in addition to the function's `RunAs` permissions.
 * In an AWS CloudFormation template, `GroupOwnerSetting` is a property of the [`LocalDeviceResourceData`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-localdeviceresourcedata.html) and [`LocalVolumeResourceData`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-localvolumeresourcedata.html) property types.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html */

export interface GroupOwnerSetting {
  /**
   * - Indicates whether to give the privileges of the Linux group that owns the resource to the Lambda process. This gives the Lambda process the file access permissions of the Linux group.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-greengrass-resourcedefinition-groupownersetting-autoaddgroupowner */
  AutoAddGroupOwner: boolean | Intrinsic
  /**
   * - The name of the Linux group whose privileges you want to add to the Lambda process. This value is ignored if `AutoAddGroupOwner` is true.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-greengrass-resourcedefinition-groupownersetting-groupowner */
  GroupOwner?: string | Intrinsic
}

/**
 * The owner setting for a downloaded machine learning resource. For more information, see [Access Machine Learning Resources from Lambda Functions](https://docs.aws.amazon.com/greengrass/v1/developerguide/access-ml-resources.html) in the _AWS IoT Greengrass Version 1 Developer Guide_ .
 * In an AWS CloudFormation template, `ResourceDownloadOwnerSetting` is the property type of the `OwnerSetting` property for the [`S3MachineLearningModelResourceData`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-s3machinelearningmodelresourcedata.html) and [`SageMakerMachineLearningModelResourceData`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-sagemakermachinelearningmodelresourcedata.html) property types.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html */

export interface ResourceDownloadOwnerSetting {
  /**
   * - The group owner of the machine learning resource. This is the group ID (GID) of an existing Linux OS group on the system. The group's permissions are added to the Lambda process.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-greengrass-resourcedefinition-resourcedownloadownersetting-groupowner */
  GroupOwner: string | Intrinsic
  /**
   * - The permissions that the group owner has to the machine learning resource. Valid values are `rw` (read-write) or `ro` (read-only).
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-greengrass-resourcedefinition-resourcedownloadownersetting-grouppermission */
  GroupPermission: string | Intrinsic
}

/**
 * Settings for a local device resource, which represents a file under `/dev`. For more information, see [Access Local Resources with Lambda Functions](https://docs.aws.amazon.com/greengrass/v1/developerguide/access-local-resources.html) in the _AWS IoT Greengrass Version 1 Developer Guide_ .
 * In an AWS CloudFormation template, `LocalDeviceResourceData` can be used in the [`ResourceDataContainer`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourcedatacontainer.html) property type.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html */

export interface LocalDeviceResourceData {
  /**
   * - Settings that define additional Linux OS group permissions to give to the Lambda function process.
   * - _Required_: No
   * - _Type_: [GroupOwnerSetting](./aws-properties-greengrass-resourcedefinition-groupownersetting.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-greengrass-resourcedefinition-localdeviceresourcedata-groupownersetting */
  GroupOwnerSetting?: GroupOwnerSetting
  /**
   * - The local absolute path of the device resource. The source path for a device resource can refer only to a character device or block device under `/dev`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-greengrass-resourcedefinition-localdeviceresourcedata-sourcepath */
  SourcePath: string | Intrinsic
}

/**
 * Settings for an Amazon S3 machine learning resource. For more information, see [Perform Machine Learning Inference](https://docs.aws.amazon.com/greengrass/v1/developerguide/ml-inference.html) in the _AWS IoT Greengrass Version 1 Developer Guide_ .
 * In an AWS CloudFormation template, `S3MachineLearningModelResourceData` can be used in the [`ResourceDataContainer`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourcedatacontainer.html) property type.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html */

export interface S3MachineLearningModelResourceData {
  /**
   * - The absolute local path of the resource inside the Lambda environment.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-greengrass-resourcedefinition-s3machinelearningmodelresourcedata-destinationpath */
  DestinationPath: string | Intrinsic
  /**
   * - The owner setting for the downloaded machine learning resource. For more information, see [Access Machine Learning Resources from Lambda Functions](https://docs.aws.amazon.com/greengrass/v1/developerguide/access-ml-resources.html) in the _AWS IoT Greengrass Version 1 Developer Guide_ .
   * - _Required_: No
   * - _Type_: [ResourceDownloadOwnerSetting](./aws-properties-greengrass-resourcedefinition-resourcedownloadownersetting.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-greengrass-resourcedefinition-s3machinelearningmodelresourcedata-ownersetting */
  OwnerSetting?: ResourceDownloadOwnerSetting
  /**
   * - The URI of the source model in an Amazon S3 bucket. The model package must be in `tar.gz` or `.zip` format.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-greengrass-resourcedefinition-s3machinelearningmodelresourcedata-s3uri */
  S3Uri: string | Intrinsic
}

/**
 * A container for resource data, which defines the resource type. The container takes only one of the following supported resource data types: `LocalDeviceResourceData`, `LocalVolumeResourceData`, `SageMakerMachineLearningModelResourceData`, `S3MachineLearningModelResourceData`, or `SecretsManagerSecretResourceData`.
 * ###### Note
 *
 * Only one resource type can be defined for a `ResourceDataContainer` instance.
 * In an AWS CloudFormation template, `ResourceDataContainer` is a property of the [`ResourceInstance`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourceinstance.html) property type.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html */

export interface ResourceDataContainer {
  /**
   * - Settings for a local device resource.
   * - _Required_: No
   * - _Type_: [LocalDeviceResourceData](./aws-properties-greengrass-resourcedefinition-localdeviceresourcedata.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-greengrass-resourcedefinition-resourcedatacontainer-localdeviceresourcedata */
  LocalDeviceResourceData?: LocalDeviceResourceData
  /**
   * - Settings for a local volume resource.
   * - _Required_: No
   * - _Type_: [LocalVolumeResourceData](./aws-properties-greengrass-resourcedefinition-localvolumeresourcedata.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-greengrass-resourcedefinition-resourcedatacontainer-localvolumeresourcedata */
  LocalVolumeResourceData?: LocalVolumeResourceData
  /**
   * - Settings for a machine learning resource stored in Amazon S3.
   * - _Required_: No
   * - _Type_: [S3MachineLearningModelResourceData](./aws-properties-greengrass-resourcedefinition-s3machinelearningmodelresourcedata.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-greengrass-resourcedefinition-resourcedatacontainer-s3machinelearningmodelresourcedata */
  S3MachineLearningModelResourceData?: S3MachineLearningModelResourceData
  /**
   * - Settings for a machine learning resource saved as an SageMaker training job.
   * - _Required_: No
   * - _Type_: [SageMakerMachineLearningModelResourceData](./aws-properties-greengrass-resourcedefinition-sagemakermachinelearningmodelresourcedata.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-greengrass-resourcedefinition-resourcedatacontainer-sagemakermachinelearningmodelresourcedata */
  SageMakerMachineLearningModelResourceData?: SageMakerMachineLearningModelResourceData
  /**
   * - Settings for a secret resource.
   * - _Required_: No
   * - _Type_: [SecretsManagerSecretResourceData](./aws-properties-greengrass-resourcedefinition-secretsmanagersecretresourcedata.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-greengrass-resourcedefinition-resourcedatacontainer-secretsmanagersecretresourcedata */
  SecretsManagerSecretResourceData?: SecretsManagerSecretResourceData
}

/**
 * A local resource, machine learning resource, or secret resource. For more information, see [Access Local Resources with Lambda Functions](https://docs.aws.amazon.com/greengrass/v1/developerguide/access-local-resources.html), [Perform Machine Learning Inference](https://docs.aws.amazon.com/greengrass/v1/developerguide/ml-inference.html), and [Deploy Secrets to the AWS IoT Greengrass Core](https://docs.aws.amazon.com/greengrass/v1/developerguide/secrets.html) in the _AWS IoT Greengrass Version 1 Developer Guide_ .
 * In an AWS CloudFormation template, the `Resources` property of the [`AWS::Greengrass::ResourceDefinition`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html) resource contains a list of `ResourceInstance` property types.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html */

export interface ResourceInstance {
  /**
   * - A descriptive or arbitrary ID for the resource. This value must be unique within the resource definition version. Maximum length is 128 characters with pattern `[a-zA-Z0-9:_-]+`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-greengrass-resourcedefinition-resourceinstance-id */
  Id: string | Intrinsic
  /**
   * - The descriptive resource name, which is displayed on the AWS IoT Greengrass console. Maximum length 128 characters with pattern \[a-zA-Z0-9:\_-\]+. This must be unique within a Greengrass group.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-greengrass-resourcedefinition-resourceinstance-name */
  Name: string | Intrinsic
  /**
   * - A container for resource data. The container takes only one of the following supported resource data types: `LocalDeviceResourceData`, `LocalVolumeResourceData`, `SageMakerMachineLearningModelResourceData`, `S3MachineLearningModelResourceData`, or `SecretsManagerSecretResourceData`.
   * - _Required_: Yes
   * - _Type_: [ResourceDataContainer](./aws-properties-greengrass-resourcedefinition-resourcedatacontainer.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-greengrass-resourcedefinition-resourceinstance-resourcedatacontainer */
  ResourceDataContainer: ResourceDataContainer
}

/**
 * A resource definition version contains a list of resources. (In AWS CloudFormation, resources are named _resource instances_.)
 * ###### Note
 *
 * After you create a resource definition version that contains the resources you want to deploy, you must add it to your group version. For more information, see [`AWS::Greengrass::Group`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html).
 * In an AWS CloudFormation template, `ResourceDefinitionVersion` is the property type of the `InitialVersion` property in the [`AWS::Greengrass::ResourceDefinition`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html) resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html */

export interface ResourceDefinitionVersion {
  /**
   * - The resources in this version.
   * - _Required_: Yes
   * - _Type_: Array of [ResourceInstance](./aws-properties-greengrass-resourcedefinition-resourceinstance.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-greengrass-resourcedefinition-resourcedefinitionversion-resources */
  Resources: ResourceInstance[]
}

/**
 * The `AWS::Greengrass::ResourceDefinition` resource represents a resource definition for AWS IoT Greengrass. Resource definitions are used to organize your resource definition versions.
 * Resource definitions can reference multiple resource definition versions. All resource definition versions must be associated with a resource definition. Each resource definition version can contain one or more resources. (In AWS CloudFormation, resources are named _resource instances_.)
 * ###### Note
 *
 * When you create a resource definition, you can optionally include an initial resource definition version. To associate a resource definition version later, create an [`AWS::Greengrass::ResourceDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinitionversion.html) resource and specify the ID of this resource definition.
 *
 * After you create the resource definition version that contains the resources you want to deploy, you must add it to your group version. For more information, see [`AWS::Greengrass::Group`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html */

export interface GreengrassResourceDefinition extends ResourceAttributes {
  Type: 'AWS::Greengrass::ResourceDefinition'
  Properties: {
    /**
     * - The resource definition version to include when the resource definition is created. A resource definition version contains a list of [`resource instance`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinition-resourceinstance.html) property types.
     * - _Required_: No
     * - _Type_: [ResourceDefinitionVersion](./aws-properties-greengrass-resourcedefinition-resourcedefinitionversion.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-greengrass-resourcedefinition-initialversion */
    InitialVersion?: ResourceDefinitionVersion
    /**
     * - The name of the resource definition.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-greengrass-resourcedefinition-name */
    Name: string | Intrinsic
    /**
     * - Application-specific metadata to attach to the resource definition. You can use tags in IAM policies to control access to AWS IoT Greengrass resources. You can also use tags to categorize your resources. For more information, see [Tagging Your AWS IoT Greengrass Resources](https://docs.aws.amazon.com/greengrass/v1/developerguide/tagging.html) in the _AWS IoT Greengrass Version 1 Developer Guide_ .
     * - This `Json` property type is processed as a map of key-value pairs. It uses the following format, which is different from most `Tags` implementations in AWS CloudFormation templates.
     * - _Required_: No
     * - _Type_: Array of [`Tag`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-resourcedefinition.html#cfn-greengrass-resourcedefinition-tags */
    Tags?: Tag[]
  }
}
