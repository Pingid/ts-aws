import type { Intrinsic } from '../intrinsic/index.js' /**
 * A tag object that consists of a key and an optional value, used to manage metadata for SageMaker AWS resources.
 * You can add tags to notebook instances, training jobs, hyperparameter tuning jobs, batch transform jobs, models, labeling jobs, work teams, endpoint configurations, and endpoints. For more information on adding tags to SageMaker resources, see [AddTags](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AddTags.html).
 * For more information on adding metadata to your AWS resources with tagging, see [Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html). For advice on best practices for managing AWS resources with tagging, see [Tagging Best Practices: Implement an Effective AWS Resource Tagging Strategy](https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html */

export interface Tag {
  /**
   * - The tag key. Tag keys must be unique per resource.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-tag-value */
  Value: string | Intrinsic
}

/**
 * Details about the POSIX identity that is used for file system operations.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html */

export interface CustomPosixUserConfig {
  /**
   * - The POSIX group ID.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1001`
   * - _Maximum_: `4000000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-customposixuserconfig-gid */
  Gid: number | Intrinsic
  /**
   * - The POSIX user ID.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `10000`
   * - _Maximum_: `4000000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-customposixuserconfig-uid */
  Uid: number | Intrinsic
}

/**
 * The JupyterServer app settings.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html */

export interface JupyterServerAppSettings {
  /**
   * - The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the JupyterServer app.
   * - _Required_: No
   * - _Type_: [ResourceSpec](./aws-properties-sagemaker-userprofile-resourcespec.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-jupyterserverappsettings-defaultresourcespec */
  DefaultResourceSpec?: ResourceSpec
  /**
   * - The Amazon Resource Name (ARN) of the Lifecycle Configurations attached to the JupyterServerApp. If you use this parameter, the `DefaultResourceSpec` parameter is also required.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-jupyterserverappsettings-lifecycleconfigarns */
  LifecycleConfigArns?: (string | Intrinsic)[]
}

/**
 * The KernelGateway app settings.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html */

export interface KernelGatewayAppSettings {
  /**
   * - A list of custom SageMaker images that are configured to run as a KernelGateway app.
   * - _Required_: No
   * - _Type_: Array of [CustomImage](./aws-properties-sagemaker-userprofile-customimage.html)
   * - _Minimum_: `0`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-kernelgatewayappsettings-customimages */
  CustomImages?: CustomImage[]
  /**
   * - The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the KernelGateway app.
   * - _Required_: No
   * - _Type_: [ResourceSpec](./aws-properties-sagemaker-userprofile-resourcespec.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-kernelgatewayappsettings-defaultresourcespec */
  DefaultResourceSpec?: ResourceSpec
  /**
   * - The Amazon Resource Name (ARN) of the Lifecycle Configurations attached to the the user profile or domain.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-kernelgatewayappsettings-lifecycleconfigarns */
  LifecycleConfigArns?: (string | Intrinsic)[]
}

/**
 * A collection of settings that configure user interaction with the `RStudioServerPro` app.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html */

export interface RStudioServerProAppSettings {
  /**
   * - Indicates whether the current user has access to the `RStudioServerPro` app.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ENABLED | DISABLED`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-rstudioserverproappsettings-accessstatus */
  AccessStatus?: string | Intrinsic
  /**
   * - The level of permissions that the user has within the `RStudioServerPro` app. This value defaults to \`User\`. The \`Admin\` value allows the user access to the RStudio Administrative Dashboard.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `R_STUDIO_ADMIN | R_STUDIO_USER`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-rstudioserverproappsettings-usergroup */
  UserGroup?: string | Intrinsic
}

/**
 * Specifies options when sharing an Amazon SageMaker Studio notebook. These settings are specified as part of `DefaultUserSettings` when the [CreateDomain](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateDomain.html) API is called, and as part of `UserSettings` when the [CreateUserProfile](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateUserProfile.html) API is called.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html */

export interface SharingSettings {
  /**
   * - Whether to include the notebook cell output when sharing the notebook. The default is `Disabled`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `Allowed | Disabled`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-sharingsettings-notebookoutputoption */
  NotebookOutputOption?: string | Intrinsic
  /**
   * - When `NotebookOutputOption` is `Allowed`, the AWS Key Management Service (KMS) encryption key ID used to encrypt the notebook cell output in the Amazon S3 bucket.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `.*`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-sharingsettings-s3kmskeyid */
  S3KmsKeyId?: string | Intrinsic
  /**
   * - When `NotebookOutputOption` is `Allowed`, the Amazon S3 bucket used to store the shared notebook snapshots.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(https|s3)://([^/]+)/?(.*)$`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-sharingsettings-s3outputpath */
  S3OutputPath?: string | Intrinsic
}

/**
 * Studio settings. If these settings are applied on a user level, they take priority over the settings applied on a domain level.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html */

export interface StudioWebPortalSettings {
  /**
   * - The [Applications supported in Studio](https://docs.aws.amazon.com/sagemaker/latest/dg/studio-updated-apps.html) that are hidden from the Studio left navigation pane.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-studiowebportalsettings-hiddenapptypes */
  HiddenAppTypes?: (string | Intrinsic)[]
  /**
   * - The machine learning tools that are hidden from the Studio left navigation pane.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-studiowebportalsettings-hiddenmltools */
  HiddenMlTools?: (string | Intrinsic)[]
}

/**
 * A custom SageMaker image. For more information, see [Bring your own SageMaker image](https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html */

export interface CustomImage {
  /**
   * - The name of the AppImageConfig.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-customimage-appimageconfigname */
  AppImageConfigName: string | Intrinsic
  /**
   * - The name of the CustomImage. Must be unique to your account.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9]([-.]?[a-zA-Z0-9]){0,62}$`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-customimage-imagename */
  ImageName: string | Intrinsic
  /**
   * - The version number of the CustomImage.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-customimage-imageversionnumber */
  ImageVersionNumber?: number | Intrinsic
}

/**
 * Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that the version runs on.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html */

export interface ResourceSpec {
  /**
   * - The instance type that the image version runs on.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `system | ml.t3.micro | ml.t3.small | ml.t3.medium | ml.t3.large | ml.t3.xlarge | ml.t3.2xlarge | ml.m5.large | ml.m5.xlarge | ml.m5.2xlarge | ml.m5.4xlarge | ml.m5.8xlarge | ml.m5.12xlarge | ml.m5.16xlarge | ml.m5.24xlarge | ml.c5.large | ml.c5.xlarge | ml.c5.2xlarge | ml.c5.4xlarge | ml.c5.9xlarge | ml.c5.12xlarge | ml.c5.18xlarge | ml.c5.24xlarge | ml.p3.2xlarge | ml.p3.8xlarge | ml.p3.16xlarge | ml.g4dn.xlarge | ml.g4dn.2xlarge | ml.g4dn.4xlarge | ml.g4dn.8xlarge | ml.g4dn.12xlarge | ml.g4dn.16xlarge | ml.r5.large | ml.r5.xlarge | ml.r5.2xlarge | ml.r5.4xlarge | ml.r5.8xlarge | ml.r5.12xlarge | ml.r5.16xlarge | ml.r5.24xlarge | ml.p3dn.24xlarge | ml.m5d.large | ml.m5d.xlarge | ml.m5d.2xlarge | ml.m5d.4xlarge | ml.m5d.8xlarge | ml.m5d.12xlarge | ml.m5d.16xlarge | ml.m5d.24xlarge | ml.g5.xlarge | ml.g5.2xlarge | ml.g5.4xlarge | ml.g5.8xlarge | ml.g5.12xlarge | ml.g5.16xlarge | ml.g5.24xlarge | ml.g5.48xlarge | ml.p4d.24xlarge | ml.p4de.24xlarge | ml.geospatial.interactive | ml.trn1.2xlarge | ml.trn1.32xlarge | ml.trn1n.32xlarge`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-resourcespec-instancetype */
  InstanceType?: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of the Lifecycle Configuration attached to the Resource.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:studio-lifecycle-config/.*`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-resourcespec-lifecycleconfigarn */
  LifecycleConfigArn?: string | Intrinsic
  /**
   * - The ARN of the SageMaker image that the image version belongs to.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:aws(-[\w]+)*:sagemaker:.+:[0-9]{12}:image/[a-z0-9]([-.]?[a-z0-9])*$`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-resourcespec-sagemakerimagearn */
  SageMakerImageArn?: string | Intrinsic
  /**
   * - The ARN of the image version created on the instance.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:aws(-[\w]+)*:sagemaker:.+:[0-9]{12}:image-version/[a-z0-9]([-.]?[a-z0-9])*[0-9]+$`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-resourcespec-sagemakerimageversionarn */
  SageMakerImageVersionArn?: string | Intrinsic
}

/**
 * The settings for assigning a custom Amazon EFS file system to a user profile or space for an Amazon SageMaker Domain.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html */

export interface EFSFileSystemConfig {
  /**
   * - The ID of your Amazon EFS file system.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^(fs-[0-9a-f]{8,})$`
   * - _Minimum_: `11`
   * - _Maximum_: `21`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-efsfilesystemconfig-filesystemid */
  FileSystemId: string | Intrinsic
  /**
   * - The path to the file system directory that is accessible in Amazon SageMaker Studio. Permitted users can access only this directory and below.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^\/\S*$`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-efsfilesystemconfig-filesystempath */
  FileSystemPath?: string | Intrinsic
}

/**
 * A Git repository that SageMaker automatically displays to users for cloning in the JupyterServer application.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html */

export interface CodeRepository {
  /**
   * - The URL of the Git repository.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^https://([.\-_a-zA-Z0-9]+/?){3,1016}$`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-coderepository-repositoryurl */
  RepositoryUrl: string | Intrinsic
}

/**
 * A collection of default EBS storage settings that apply to spaces created within a domain or user profile.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html */

export interface DefaultEbsStorageSettings {
  /**
   * - The default size of the EBS storage volume for a space.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `5`
   * - _Maximum_: `16384`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-defaultebsstoragesettings-defaultebsvolumesizeingb */
  DefaultEbsVolumeSizeInGb: number | Intrinsic
  /**
   * - The maximum size of the EBS storage volume for a space.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `5`
   * - _Maximum_: `16384`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-defaultebsstoragesettings-maximumebsvolumesizeingb */
  MaximumEbsVolumeSizeInGb: number | Intrinsic
}

/**
 * Settings related to idle shutdown of Studio applications.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html */

export interface IdleSettings {
  /**
   * - The time that SageMaker waits after the application becomes idle before shutting it down.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `60`
   * - _Maximum_: `525600`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-idlesettings-idletimeoutinminutes */
  IdleTimeoutInMinutes?: number | Intrinsic
  /**
   * - Indicates whether idle shutdown is activated for the application type.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ENABLED | DISABLED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-idlesettings-lifecyclemanagement */
  LifecycleManagement?: string | Intrinsic
  /**
   * - The maximum value in minutes that custom idle shutdown can be set to by the user.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `60`
   * - _Maximum_: `525600`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-idlesettings-maxidletimeoutinminutes */
  MaxIdleTimeoutInMinutes?: number | Intrinsic
  /**
   * - The minimum value in minutes that custom idle shutdown can be set to by the user.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `60`
   * - _Maximum_: `525600`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-idlesettings-minidletimeoutinminutes */
  MinIdleTimeoutInMinutes?: number | Intrinsic
}

/**
 * The settings for assigning a custom file system to a user profile or space for an Amazon SageMaker Domain. Permitted users can access this file system in Amazon SageMaker Studio.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html */

export interface CustomFileSystemConfig {
  /**
   * - The settings for a custom Amazon EFS file system.
   * - _Required_: No
   * - _Type_: [EFSFileSystemConfig](./aws-properties-sagemaker-userprofile-efsfilesystemconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-customfilesystemconfig-efsfilesystemconfig */
  EFSFileSystemConfig?: EFSFileSystemConfig
}

/**
 * The settings for the JupyterLab application.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html */

export interface JupyterLabAppSettings {
  /**
   * - Indicates whether idle shutdown is activated for JupyterLab applications.
   * - _Required_: No
   * - _Type_: [AppLifecycleManagement](./aws-properties-sagemaker-userprofile-applifecyclemanagement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-jupyterlabappsettings-applifecyclemanagement */
  AppLifecycleManagement?: AppLifecycleManagement
  /**
   * - A list of Git repositories that SageMaker automatically displays to users for cloning in the JupyterLab application.
   * - _Required_: No
   * - _Type_: Array of [CodeRepository](./aws-properties-sagemaker-userprofile-coderepository.html)
   * - _Minimum_: `0`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-jupyterlabappsettings-coderepositories */
  CodeRepositories?: CodeRepository[]
  /**
   * - A list of custom SageMaker images that are configured to run as a JupyterLab app.
   * - _Required_: No
   * - _Type_: Array of [CustomImage](./aws-properties-sagemaker-userprofile-customimage.html)
   * - _Minimum_: `0`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-jupyterlabappsettings-customimages */
  CustomImages?: CustomImage[]
  /**
   * - The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the JupyterLab app.
   * - _Required_: No
   * - _Type_: [ResourceSpec](./aws-properties-sagemaker-userprofile-resourcespec.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-jupyterlabappsettings-defaultresourcespec */
  DefaultResourceSpec?: ResourceSpec
  /**
   * - The Amazon Resource Name (ARN) of the lifecycle configurations attached to the user profile or domain. To remove a lifecycle config, you must set `LifecycleConfigArns` to an empty list.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-jupyterlabappsettings-lifecycleconfigarns */
  LifecycleConfigArns?: (string | Intrinsic)[]
}

/**
 * The default storage settings for a space.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html */

export interface DefaultSpaceStorageSettings {
  /**
   * - The default EBS storage settings for a space.
   * - _Required_: No
   * - _Type_: [DefaultEbsStorageSettings](./aws-properties-sagemaker-userprofile-defaultebsstoragesettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-defaultspacestoragesettings-defaultebsstoragesettings */
  DefaultEbsStorageSettings?: DefaultEbsStorageSettings
}

/**
 * Settings that are used to configure and manage the lifecycle of Amazon SageMaker Studio applications.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html */

export interface AppLifecycleManagement {
  /**
   * - Settings related to idle shutdown of Studio applications.
   * - _Required_: No
   * - _Type_: [IdleSettings](./aws-properties-sagemaker-userprofile-idlesettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-applifecyclemanagement-idlesettings */
  IdleSettings?: IdleSettings
}

/**
 * The Code Editor application settings.
 * For more information about Code Editor, see [Get started with Code Editor in Amazon SageMaker](https://docs.aws.amazon.com/sagemaker/latest/dg/code-editor.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html */

export interface CodeEditorAppSettings {
  /**
   * - Settings that are used to configure and manage the lifecycle of CodeEditor applications.
   * - _Required_: No
   * - _Type_: [AppLifecycleManagement](./aws-properties-sagemaker-userprofile-applifecyclemanagement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-codeeditorappsettings-applifecyclemanagement */
  AppLifecycleManagement?: AppLifecycleManagement
  /**
   * - A list of custom SageMaker images that are configured to run as a Code Editor app.
   * - _Required_: No
   * - _Type_: Array of [CustomImage](./aws-properties-sagemaker-userprofile-customimage.html)
   * - _Minimum_: `0`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-codeeditorappsettings-customimages */
  CustomImages?: CustomImage[]
  /**
   * - The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the Code Editor app.
   * - _Required_: No
   * - _Type_: [ResourceSpec](./aws-properties-sagemaker-userprofile-resourcespec.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-codeeditorappsettings-defaultresourcespec */
  DefaultResourceSpec?: ResourceSpec
  /**
   * - The Amazon Resource Name (ARN) of the Code Editor application lifecycle configuration.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-codeeditorappsettings-lifecycleconfigarns */
  LifecycleConfigArns?: (string | Intrinsic)[]
}

/**
 * A collection of settings that apply to users of Amazon SageMaker Studio. These settings are specified when the [CreateUserProfile](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateUserProfile.html) API is called, and as `DefaultUserSettings` when the [CreateDomain](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateDomain.html) API is called.
 * `SecurityGroups` is aggregated when specified in both calls. For all other settings in `UserSettings`, the values specified in `CreateUserProfile` take precedence over those specified in `CreateDomain`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html */

export interface UserSettings {
  /**
   * - The Code Editor application settings.
   * - _Required_: No
   * - _Type_: [CodeEditorAppSettings](./aws-properties-sagemaker-userprofile-codeeditorappsettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-usersettings-codeeditorappsettings */
  CodeEditorAppSettings?: CodeEditorAppSettings
  /**
   * - The settings for assigning a custom file system to a user profile. Permitted users can access this file system in Amazon SageMaker Studio.
   * - _Required_: No
   * - _Type_: Array of [CustomFileSystemConfig](./aws-properties-sagemaker-userprofile-customfilesystemconfig.html)
   * - _Minimum_: `0`
   * - _Maximum_: `2`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-usersettings-customfilesystemconfigs */
  CustomFileSystemConfigs?: CustomFileSystemConfig[]
  /**
   * - Details about the POSIX identity that is used for file system operations.
   * - _Required_: No
   * - _Type_: [CustomPosixUserConfig](./aws-properties-sagemaker-userprofile-customposixuserconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-usersettings-customposixuserconfig */
  CustomPosixUserConfig?: CustomPosixUserConfig
  /**
   * - The default experience that the user is directed to when accessing the domain. The supported values are:
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `1023`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-usersettings-defaultlandinguri */
  DefaultLandingUri?: string | Intrinsic
  /**
   * - The execution role for the user.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
   * - _Minimum_: `20`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-usersettings-executionrole */
  ExecutionRole?: string | Intrinsic
  /**
   * - The settings for the JupyterLab application.
   * - _Required_: No
   * - _Type_: [JupyterLabAppSettings](./aws-properties-sagemaker-userprofile-jupyterlabappsettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-usersettings-jupyterlabappsettings */
  JupyterLabAppSettings?: JupyterLabAppSettings
  /**
   * - The Jupyter server's app settings.
   * - _Required_: No
   * - _Type_: [JupyterServerAppSettings](./aws-properties-sagemaker-userprofile-jupyterserverappsettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-usersettings-jupyterserverappsettings */
  JupyterServerAppSettings?: JupyterServerAppSettings
  /**
   * - The kernel gateway app settings.
   * - _Required_: No
   * - _Type_: [KernelGatewayAppSettings](./aws-properties-sagemaker-userprofile-kernelgatewayappsettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-usersettings-kernelgatewayappsettings */
  KernelGatewayAppSettings?: KernelGatewayAppSettings
  /**
   * - A collection of settings that configure user interaction with the `RStudioServerPro` app.
   * - _Required_: No
   * - _Type_: [RStudioServerProAppSettings](./aws-properties-sagemaker-userprofile-rstudioserverproappsettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-usersettings-rstudioserverproappsettings */
  RStudioServerProAppSettings?: RStudioServerProAppSettings
  /**
   * - The security groups for the Amazon Virtual Private Cloud (VPC) that the domain uses for communication.
   * - Optional when the `CreateDomain.AppNetworkAccessType` parameter is set to `PublicInternetOnly`.
   * - Required when the `CreateDomain.AppNetworkAccessType` parameter is set to `VpcOnly`, unless specified as part of the `DefaultUserSettings` for the domain.
   * - Amazon SageMaker adds a security group to allow NFS traffic from Amazon SageMaker Studio. Therefore, the number of security groups that you can specify is one less than the maximum number shown.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Maximum_: `32 | 5`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-usersettings-securitygroups */
  SecurityGroups?: (string | Intrinsic)[]
  /**
   * - Specifies options for sharing Amazon SageMaker Studio notebooks.
   * - _Required_: No
   * - _Type_: [SharingSettings](./aws-properties-sagemaker-userprofile-sharingsettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-usersettings-sharingsettings */
  SharingSettings?: SharingSettings
  /**
   * - The storage settings for a space.
   * - _Required_: No
   * - _Type_: [DefaultSpaceStorageSettings](./aws-properties-sagemaker-userprofile-defaultspacestoragesettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-usersettings-spacestoragesettings */
  SpaceStorageSettings?: DefaultSpaceStorageSettings
  /**
   * - Whether the user can access Studio. If this value is set to `DISABLED`, the user cannot access Studio, even if that is the default experience for the domain.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ENABLED | DISABLED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-usersettings-studiowebportal */
  StudioWebPortal?: string | Intrinsic
  /**
   * - Studio settings. If these settings are applied on a user level, they take priority over the settings applied on a domain level.
   * - _Required_: No
   * - _Type_: [StudioWebPortalSettings](./aws-properties-sagemaker-userprofile-studiowebportalsettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-usersettings-studiowebportalsettings */
  StudioWebPortalSettings?: StudioWebPortalSettings
}

/**
 * Creates a user profile. A user profile represents a single user within a domain, and is the main way to reference a "person" for the purposes of sharing, reporting, and other user-oriented features. This entity is created when a user onboards to Amazon SageMaker Studio. If an administrator invites a person by email or imports them from IAM Identity Center, a user profile is automatically created. A user profile is the primary holder of settings for an individual user and has a reference to the user's private Amazon Elastic File System (EFS) home directory.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html */

export interface SageMakerUserProfile {
  Type: 'AWS::SageMaker::UserProfile'
  Properties: {
    /**
     * - The domain ID.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-domainid */
    DomainId: string | Intrinsic
    /**
     * - A specifier for the type of value specified in SingleSignOnUserValue. Currently, the only supported value is "UserName". If the Domain's AuthMode is IAM Identity Center, this field is required. If the Domain's AuthMode is not IAM Identity Center, this field cannot be specified.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `UserName`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-singlesignonuseridentifier */
    SingleSignOnUserIdentifier?: string | Intrinsic
    /**
     * - The username of the associated AWS Single Sign-On User for this UserProfile. If the Domain's AuthMode is IAM Identity Center, this field is required, and must match a valid username of a user in your directory. If the Domain's AuthMode is not IAM Identity Center, this field cannot be specified.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-singlesignonuservalue */
    SingleSignOnUserValue?: string | Intrinsic
    /**
     * - An array of key-value pairs to apply to this resource.
     * - Tags that you specify for the User Profile are also added to all apps that the User Profile launches.
     * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-sagemaker-userprofile-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `50`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-tags */
    Tags?: Tag[]
    /**
     * - The user profile name.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-userprofilename */
    UserProfileName: string | Intrinsic
    /**
     * - A collection of settings that apply to users of Amazon SageMaker Studio.
     * - _Required_: No
     * - _Type_: [UserSettings](./aws-properties-sagemaker-userprofile-usersettings.html)
     * - _Minimum_: `0`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-userprofile.html#cfn-sagemaker-userprofile-usersettings */
    UserSettings?: UserSettings
  }
}
