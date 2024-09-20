import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The collection of ownership settings for a space.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html */

export interface OwnershipSettings {
  /**
   * - The user profile who is the owner of the space.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`
   * - _Maximum_: `63`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-ownershipsettings-owneruserprofilename */
  OwnerUserProfileName: string | Intrinsic
}

/**
 * A collection of space sharing settings.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html */

export interface SpaceSharingSettings {
  /**
   * - Specifies the sharing type of the space.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `Private | Shared`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-spacesharingsettings-sharingtype */
  SharingType: string | Intrinsic
}

/**
 * A tag object that consists of a key and an optional value, used to manage metadata for SageMaker AWS resources.
 * You can add tags to notebook instances, training jobs, hyperparameter tuning jobs, batch transform jobs, models, labeling jobs, work teams, endpoint configurations, and endpoints. For more information on adding tags to SageMaker resources, see [AddTags](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AddTags.html).
 * For more information on adding metadata to your AWS resources with tagging, see [Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html). For advice on best practices for managing AWS resources with tagging, see [Tagging Best Practices: Implement an Effective AWS Resource Tagging Strategy](https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html */

export interface Tag {
  /**
   * - The tag key. Tag keys must be unique per resource.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-tag-value */
  Value: string | Intrinsic
}

/**
 * The JupyterServer app settings.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html */

export interface JupyterServerAppSettings {
  /**
   * - The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the JupyterServer app. If you use the `LifecycleConfigArns` parameter, then this parameter is also required.
   * - _Required_: No
   * - _Type_: [ResourceSpec](./aws-properties-sagemaker-space-resourcespec.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-jupyterserverappsettings-defaultresourcespec */
  DefaultResourceSpec?: ResourceSpec
  /**
   * - The Amazon Resource Name (ARN) of the Lifecycle Configurations attached to the JupyterServerApp. If you use this parameter, the `DefaultResourceSpec` parameter is also required.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-jupyterserverappsettings-lifecycleconfigarns */
  LifecycleConfigArns?: (string | Intrinsic)[]
}

/**
 * Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that the version runs on.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html */

export interface ResourceSpec {
  /**
   * - The instance type that the image version runs on.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `system | ml.t3.micro | ml.t3.small | ml.t3.medium | ml.t3.large | ml.t3.xlarge | ml.t3.2xlarge | ml.m5.large | ml.m5.xlarge | ml.m5.2xlarge | ml.m5.4xlarge | ml.m5.8xlarge | ml.m5.12xlarge | ml.m5.16xlarge | ml.m5.24xlarge | ml.c5.large | ml.c5.xlarge | ml.c5.2xlarge | ml.c5.4xlarge | ml.c5.9xlarge | ml.c5.12xlarge | ml.c5.18xlarge | ml.c5.24xlarge | ml.p3.2xlarge | ml.p3.8xlarge | ml.p3.16xlarge | ml.g4dn.xlarge | ml.g4dn.2xlarge | ml.g4dn.4xlarge | ml.g4dn.8xlarge | ml.g4dn.12xlarge | ml.g4dn.16xlarge | ml.r5.large | ml.r5.xlarge | ml.r5.2xlarge | ml.r5.4xlarge | ml.r5.8xlarge | ml.r5.12xlarge | ml.r5.16xlarge | ml.r5.24xlarge | ml.p3dn.24xlarge | ml.m5d.large | ml.m5d.xlarge | ml.m5d.2xlarge | ml.m5d.4xlarge | ml.m5d.8xlarge | ml.m5d.12xlarge | ml.m5d.16xlarge | ml.m5d.24xlarge | ml.g5.xlarge | ml.g5.2xlarge | ml.g5.4xlarge | ml.g5.8xlarge | ml.g5.12xlarge | ml.g5.16xlarge | ml.g5.24xlarge | ml.g5.48xlarge | ml.p4d.24xlarge | ml.p4de.24xlarge | ml.geospatial.interactive | ml.trn1.2xlarge | ml.trn1.32xlarge | ml.trn1n.32xlarge`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-resourcespec-instancetype */
  InstanceType?: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of the Lifecycle Configuration attached to the Resource.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:studio-lifecycle-config/.*`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-resourcespec-lifecycleconfigarn */
  LifecycleConfigArn?: string | Intrinsic
  /**
   * - The ARN of the SageMaker image that the image version belongs to.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:aws(-[\w]+)*:sagemaker:.+:[0-9]{12}:image/[a-z0-9]([-.]?[a-z0-9])*$`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-resourcespec-sagemakerimagearn */
  SageMakerImageArn?: string | Intrinsic
  /**
   * - The ARN of the image version created on the instance.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:aws(-[\w]+)*:sagemaker:.+:[0-9]{12}:image-version/[a-z0-9]([-.]?[a-z0-9])*[0-9]+$`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-resourcespec-sagemakerimageversionarn */
  SageMakerImageVersionArn?: string | Intrinsic
}

/**
 * A file system, created by you in Amazon EFS, that you assign to a user profile or space for an Amazon SageMaker Domain. Permitted users can access this file system in Amazon SageMaker Studio.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html */

export interface EFSFileSystem {
  /**
   * - The ID of your Amazon EFS file system.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^(fs-[0-9a-f]{8,})$`
   * - _Minimum_: `11`
   * - _Maximum_: `21`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-efsfilesystem-filesystemid */
  FileSystemId: string | Intrinsic
}

/**
 * A Git repository that SageMaker automatically displays to users for cloning in the JupyterServer application.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html */

export interface CodeRepository {
  /**
   * - The URL of the Git repository.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^https://([.\-_a-zA-Z0-9]+/?){3,1016}$`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-coderepository-repositoryurl */
  RepositoryUrl: string | Intrinsic
}

/**
 * A custom SageMaker image. For more information, see [Bring your own SageMaker image](https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html */

export interface CustomImage {
  /**
   * - The name of the AppImageConfig.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-customimage-appimageconfigname */
  AppImageConfigName: string | Intrinsic
  /**
   * - The name of the CustomImage. Must be unique to your account.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9]([-.]?[a-zA-Z0-9]){0,62}$`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-customimage-imagename */
  ImageName: string | Intrinsic
  /**
   * - The version number of the CustomImage.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-customimage-imageversionnumber */
  ImageVersionNumber?: number | Intrinsic
}

/**
 * A collection of EBS storage settings that apply to both private and shared spaces.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html */

export interface EbsStorageSettings {
  /**
   * - The size of an EBS storage volume for a space.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `5`
   * - _Maximum_: `16384`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-ebsstoragesettings-ebsvolumesizeingb */
  EbsVolumeSizeInGb: number | Intrinsic
}

/**
 * Settings related to idle shutdown of Studio applications in a space.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html */

export interface SpaceIdleSettings {
  /**
   * - The time that SageMaker waits after the application becomes idle before shutting it down.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `60`
   * - _Maximum_: `525600`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-spaceidlesettings-idletimeoutinminutes */
  IdleTimeoutInMinutes?: number | Intrinsic
}

/**
 * A file system, created by you, that you assign to a user profile or space for an Amazon SageMaker Domain. Permitted users can access this file system in Amazon SageMaker Studio.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html */

export interface CustomFileSystem {
  /**
   * - A custom file system in Amazon EFS.
   * - _Required_: No
   * - _Type_: [EFSFileSystem](./aws-properties-sagemaker-space-efsfilesystem.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-customfilesystem-efsfilesystem */
  EFSFileSystem?: EFSFileSystem
}

/**
 * The settings for the JupyterLab application within a space.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html */

export interface SpaceJupyterLabAppSettings {
  /**
   * - Settings that are used to configure and manage the lifecycle of JupyterLab applications in a space.
   * - _Required_: No
   * - _Type_: [SpaceAppLifecycleManagement](./aws-properties-sagemaker-space-spaceapplifecyclemanagement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-spacejupyterlabappsettings-applifecyclemanagement */
  AppLifecycleManagement?: SpaceAppLifecycleManagement
  /**
   * - A list of Git repositories that SageMaker automatically displays to users for cloning in the JupyterLab application.
   * - _Required_: No
   * - _Type_: Array of [CodeRepository](./aws-properties-sagemaker-space-coderepository.html)
   * - _Minimum_: `0`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-spacejupyterlabappsettings-coderepositories */
  CodeRepositories?: CodeRepository[]
  /**
   * - Specifies the ARNs of a SageMaker image and SageMaker image version, and the instance type that the version runs on.
   * - _Required_: No
   * - _Type_: [ResourceSpec](./aws-properties-sagemaker-space-resourcespec.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-spacejupyterlabappsettings-defaultresourcespec */
  DefaultResourceSpec?: ResourceSpec
}

/**
 * The KernelGateway app settings.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html */

export interface KernelGatewayAppSettings {
  /**
   * - A list of custom SageMaker images that are configured to run as a KernelGateway app.
   * - _Required_: No
   * - _Type_: Array of [CustomImage](./aws-properties-sagemaker-space-customimage.html)
   * - _Minimum_: `0`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-kernelgatewayappsettings-customimages */
  CustomImages?: CustomImage[]
  /**
   * - The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the KernelGateway app.
   * - _Required_: No
   * - _Type_: [ResourceSpec](./aws-properties-sagemaker-space-resourcespec.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-kernelgatewayappsettings-defaultresourcespec */
  DefaultResourceSpec?: ResourceSpec
  /**
   * - The Amazon Resource Name (ARN) of the Lifecycle Configurations attached to the the user profile or domain.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-kernelgatewayappsettings-lifecycleconfigarns */
  LifecycleConfigArns?: (string | Intrinsic)[]
}

/**
 * The storage settings for a space.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html */

export interface SpaceStorageSettings {
  /**
   * - A collection of EBS storage settings for a space.
   * - _Required_: No
   * - _Type_: [EbsStorageSettings](./aws-properties-sagemaker-space-ebsstoragesettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-spacestoragesettings-ebsstoragesettings */
  EbsStorageSettings?: EbsStorageSettings
}

/**
 * Settings that are used to configure and manage the lifecycle of Amazon SageMaker Studio applications in a space.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html */

export interface SpaceAppLifecycleManagement {
  /**
   * - Settings related to idle shutdown of Studio applications.
   * - _Required_: No
   * - _Type_: [SpaceIdleSettings](./aws-properties-sagemaker-space-spaceidlesettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-spaceapplifecyclemanagement-idlesettings */
  IdleSettings?: SpaceIdleSettings
}

/**
 * The application settings for a Code Editor space.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html */

export interface SpaceCodeEditorAppSettings {
  /**
   * - Settings that are used to configure and manage the lifecycle of CodeEditor applications in a space.
   * - _Required_: No
   * - _Type_: [SpaceAppLifecycleManagement](./aws-properties-sagemaker-space-spaceapplifecyclemanagement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-spacecodeeditorappsettings-applifecyclemanagement */
  AppLifecycleManagement?: SpaceAppLifecycleManagement
  /**
   * - Specifies the ARNs of a SageMaker image and SageMaker image version, and the instance type that the version runs on.
   * - _Required_: No
   * - _Type_: [ResourceSpec](./aws-properties-sagemaker-space-resourcespec.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-spacecodeeditorappsettings-defaultresourcespec */
  DefaultResourceSpec?: ResourceSpec
}

/**
 * A collection of space settings.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html */

export interface SpaceSettings {
  /**
   * - The type of app created within the space.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `JupyterServer | KernelGateway | TensorBoard | RStudioServerPro | RSessionGateway | JupyterLab | CodeEditor`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-spacesettings-apptype */
  AppType?: string | Intrinsic
  /**
   * - The Code Editor application settings.
   * - _Required_: No
   * - _Type_: [SpaceCodeEditorAppSettings](./aws-properties-sagemaker-space-spacecodeeditorappsettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-spacesettings-codeeditorappsettings */
  CodeEditorAppSettings?: SpaceCodeEditorAppSettings
  /**
   * - A file system, created by you, that you assign to a space for an Amazon SageMaker Domain. Permitted users can access this file system in Amazon SageMaker Studio.
   * - _Required_: No
   * - _Type_: Array of [CustomFileSystem](./aws-properties-sagemaker-space-customfilesystem.html)
   * - _Minimum_: `0`
   * - _Maximum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-spacesettings-customfilesystems */
  CustomFileSystems?: CustomFileSystem[]
  /**
   * - The settings for the JupyterLab application.
   * - _Required_: No
   * - _Type_: [SpaceJupyterLabAppSettings](./aws-properties-sagemaker-space-spacejupyterlabappsettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-spacesettings-jupyterlabappsettings */
  JupyterLabAppSettings?: SpaceJupyterLabAppSettings
  /**
   * - The JupyterServer app settings.
   * - _Required_: No
   * - _Type_: [JupyterServerAppSettings](./aws-properties-sagemaker-space-jupyterserverappsettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-spacesettings-jupyterserverappsettings */
  JupyterServerAppSettings?: JupyterServerAppSettings
  /**
   * - The KernelGateway app settings.
   * - _Required_: No
   * - _Type_: [KernelGatewayAppSettings](./aws-properties-sagemaker-space-kernelgatewayappsettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-spacesettings-kernelgatewayappsettings */
  KernelGatewayAppSettings?: KernelGatewayAppSettings
  /**
   * - The storage settings for a space.
   * - _Required_: No
   * - _Type_: [SpaceStorageSettings](./aws-properties-sagemaker-space-spacestoragesettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-spacesettings-spacestoragesettings */
  SpaceStorageSettings?: SpaceStorageSettings
}

/**
 * Creates a private space or a space used for real time collaboration in a domain.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html */

export interface SageMakerSpace extends ResourceAttributes {
  Type: 'AWS::SageMaker::Space'
  Properties: {
    /**
     * - The ID of the associated domain.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-domainid */
    DomainId: string | Intrinsic
    /**
     * - The collection of ownership settings for a space.
     * - _Required_: No
     * - _Type_: [OwnershipSettings](./aws-properties-sagemaker-space-ownershipsettings.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-ownershipsettings */
    OwnershipSettings?: OwnershipSettings
    /**
     * - The name of the space that appears in the Studio UI.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^(?!\s*$).+`
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-spacedisplayname */
    SpaceDisplayName?: string | Intrinsic
    /**
     * - The name of the space.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-spacename */
    SpaceName: string | Intrinsic
    /**
     * - A collection of space settings.
     * - _Required_: No
     * - _Type_: [SpaceSettings](./aws-properties-sagemaker-space-spacesettings.html)
     * - _Minimum_: `0`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-spacesettings */
    SpaceSettings?: SpaceSettings
    /**
     * - A collection of space sharing settings.
     * - _Required_: No
     * - _Type_: [SpaceSharingSettings](./aws-properties-sagemaker-space-spacesharingsettings.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-spacesharingsettings */
    SpaceSharingSettings?: SpaceSharingSettings
    /**
     * - An array of key-value pairs to apply to this resource.
     * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-sagemaker-space-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-space.html#cfn-sagemaker-space-tags */
    Tags?: Tag[]
  }
}
