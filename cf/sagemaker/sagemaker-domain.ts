import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A tag object that consists of a key and an optional value, used to manage metadata for SageMaker AWS resources.
 * You can add tags to notebook instances, training jobs, hyperparameter tuning jobs, batch transform jobs, models, labeling jobs, work teams, endpoint configurations, and endpoints. For more information on adding tags to SageMaker resources, see [AddTags](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AddTags.html).
 * For more information on adding metadata to your AWS resources with tagging, see [Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html). For advice on best practices for managing AWS resources with tagging, see [Tagging Best Practices: Implement an Effective AWS Resource Tagging Strategy](https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html */

export interface Tag {
  /**
   * - The tag key. Tag keys must be unique per resource.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-tag-value */
  Value: string | Intrinsic
}

/**
 * Details about the POSIX identity that is used for file system operations.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html */

export interface CustomPosixUserConfig {
  /**
   * - The POSIX group ID.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1001`
   * - _Maximum_: `4000000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-customposixuserconfig-gid */
  Gid: number | Intrinsic
  /**
   * - The POSIX user ID.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `10000`
   * - _Maximum_: `4000000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-customposixuserconfig-uid */
  Uid: number | Intrinsic
}

/**
 * The JupyterServer app settings.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html */

export interface JupyterServerAppSettings {
  /**
   * - The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the JupyterServer app.
   * - _Required_: No
   * - _Type_: [ResourceSpec](./aws-properties-sagemaker-domain-resourcespec.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-jupyterserverappsettings-defaultresourcespec */
  DefaultResourceSpec?: ResourceSpec
  /**
   * - The Amazon Resource Name (ARN) of the Lifecycle Configurations attached to the JupyterServerApp. If you use this parameter, the `DefaultResourceSpec` parameter is also required.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-jupyterserverappsettings-lifecycleconfigarns */
  LifecycleConfigArns?: (string | Intrinsic)[]
}

/**
 * The KernelGateway app settings.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html */

export interface KernelGatewayAppSettings {
  /**
   * - A list of custom SageMaker images that are configured to run as a KernelGateway app.
   * - _Required_: No
   * - _Type_: Array of [CustomImage](./aws-properties-sagemaker-domain-customimage.html)
   * - _Minimum_: `0`
   * - _Maximum_: `200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-kernelgatewayappsettings-customimages */
  CustomImages?: CustomImage[]
  /**
   * - The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the KernelGateway app.
   * - _Required_: No
   * - _Type_: [ResourceSpec](./aws-properties-sagemaker-domain-resourcespec.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-kernelgatewayappsettings-defaultresourcespec */
  DefaultResourceSpec?: ResourceSpec
  /**
   * - The Amazon Resource Name (ARN) of the Lifecycle Configurations attached to the the user profile or domain.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-kernelgatewayappsettings-lifecycleconfigarns */
  LifecycleConfigArns?: (string | Intrinsic)[]
}

/**
 * The Code Editor application settings.
 * For more information about Code Editor, see [Get started with Code Editor in Amazon SageMaker](https://docs.aws.amazon.com/sagemaker/latest/dg/code-editor.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html */

export interface CodeEditorAppSettings {
  /**
   * - Settings that are used to configure and manage the lifecycle of CodeEditor applications.
   * - _Required_: No
   * - _Type_: [AppLifecycleManagement](./aws-properties-sagemaker-domain-applifecyclemanagement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-codeeditorappsettings-applifecyclemanagement */
  AppLifecycleManagement?: AppLifecycleManagement
  /**
   * - A list of custom SageMaker images that are configured to run as a Code Editor app.
   * - _Required_: No
   * - _Type_: Array of [CustomImage](./aws-properties-sagemaker-domain-customimage.html)
   * - _Minimum_: `0`
   * - _Maximum_: `200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-codeeditorappsettings-customimages */
  CustomImages?: CustomImage[]
  /**
   * - The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the Code Editor app.
   * - _Required_: No
   * - _Type_: [ResourceSpec](./aws-properties-sagemaker-domain-resourcespec.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-codeeditorappsettings-defaultresourcespec */
  DefaultResourceSpec?: ResourceSpec
  /**
   * - The Amazon Resource Name (ARN) of the Code Editor application lifecycle configuration.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-codeeditorappsettings-lifecycleconfigarns */
  LifecycleConfigArns?: (string | Intrinsic)[]
}

/**
 * A collection of settings that apply to an `RSessionGateway` app.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html */

export interface RSessionAppSettings {
  /**
   * - A list of custom SageMaker images that are configured to run as a RSession app.
   * - _Required_: No
   * - _Type_: Array of [CustomImage](./aws-properties-sagemaker-domain-customimage.html)
   * - _Minimum_: `0`
   * - _Maximum_: `200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-rsessionappsettings-customimages */
  CustomImages?: CustomImage[]
  /**
   * - Specifies the ARNs of a SageMaker image and SageMaker image version, and the instance type that the version runs on.
   * - _Required_: No
   * - _Type_: [ResourceSpec](./aws-properties-sagemaker-domain-resourcespec.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-rsessionappsettings-defaultresourcespec */
  DefaultResourceSpec?: ResourceSpec
}

/**
 * A collection of settings that configure user interaction with the `RStudioServerPro` app.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html */

export interface RStudioServerProAppSettings {
  /**
   * - Indicates whether the current user has access to the `RStudioServerPro` app.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ENABLED | DISABLED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-rstudioserverproappsettings-accessstatus */
  AccessStatus?: string | Intrinsic
  /**
   * - The level of permissions that the user has within the `RStudioServerPro` app. This value defaults to \`User\`. The \`Admin\` value allows the user access to the RStudio Administrative Dashboard.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `R_STUDIO_ADMIN | R_STUDIO_USER`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-rstudioserverproappsettings-usergroup */
  UserGroup?: string | Intrinsic
}

/**
 * Specifies options when sharing an Amazon SageMaker Studio notebook. These settings are specified as part of `DefaultUserSettings` when the [CreateDomain](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateDomain.html) API is called, and as part of `UserSettings` when the [CreateUserProfile](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateUserProfile.html) API is called.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html */

export interface SharingSettings {
  /**
   * - Whether to include the notebook cell output when sharing the notebook. The default is `Disabled`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `Allowed | Disabled`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-sharingsettings-notebookoutputoption */
  NotebookOutputOption?: string | Intrinsic
  /**
   * - When `NotebookOutputOption` is `Allowed`, the AWS Key Management Service (KMS) encryption key ID used to encrypt the notebook cell output in the Amazon S3 bucket.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `.*`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-sharingsettings-s3kmskeyid */
  S3KmsKeyId?: string | Intrinsic
  /**
   * - When `NotebookOutputOption` is `Allowed`, the Amazon S3 bucket used to store the shared notebook snapshots.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(https|s3)://([^/]+)/?(.*)$`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-sharingsettings-s3outputpath */
  S3OutputPath?: string | Intrinsic
}

/**
 * Studio settings. If these settings are applied on a user level, they take priority over the settings applied on a domain level.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html */

export interface StudioWebPortalSettings {
  /**
   * - The [Applications supported in Studio](https://docs.aws.amazon.com/sagemaker/latest/dg/studio-updated-apps.html) that are hidden from the Studio left navigation pane.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-studiowebportalsettings-hiddenapptypes */
  HiddenAppTypes?: (string | Intrinsic)[]
  /**
   * - The machine learning tools that are hidden from the Studio left navigation pane.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-studiowebportalsettings-hiddenmltools */
  HiddenMlTools?: (string | Intrinsic)[]
}

/**
 * A collection of settings that configure the domain's Docker interaction.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html */

export interface DockerSettings {
  /**
   * - Indicates whether the domain can access Docker.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ENABLED | DISABLED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-dockersettings-enabledockeraccess */
  EnableDockerAccess?: string | Intrinsic
  /**
   * - The list of AWS accounts that are trusted when the domain is created in VPC-only mode.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `12 | 0`
   * - _Maximum_: `12 | 20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-dockersettings-vpconlytrustedaccounts */
  VpcOnlyTrustedAccounts?: (string | Intrinsic)[]
}

/**
 * A collection of settings that configure the `RStudioServerPro` Domain-level app.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html */

export interface RStudioServerProDomainSettings {
  /**
   * - A collection that defines the default `InstanceType`, `SageMakerImageArn`, and `SageMakerImageVersionArn` for the Domain.
   * - _Required_: No
   * - _Type_: [ResourceSpec](./aws-properties-sagemaker-domain-resourcespec.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-rstudioserverprodomainsettings-defaultresourcespec */
  DefaultResourceSpec?: ResourceSpec
  /**
   * - The ARN of the execution role for the `RStudioServerPro` Domain-level app.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
   * - _Minimum_: `20`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-rstudioserverprodomainsettings-domainexecutionrolearn */
  DomainExecutionRoleArn: string | Intrinsic
  /**
   * - A URL pointing to an RStudio Connect server.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(https:|http:|www\.)\S*`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-rstudioserverprodomainsettings-rstudioconnecturl */
  RStudioConnectUrl?: string | Intrinsic
  /**
   * - A URL pointing to an RStudio Package Manager server.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(https:|http:|www\.)\S*`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-rstudioserverprodomainsettings-rstudiopackagemanagerurl */
  RStudioPackageManagerUrl?: string | Intrinsic
}

/**
 * The settings for assigning a custom Amazon EFS file system to a user profile or space for an Amazon SageMaker Domain.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html */

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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-efsfilesystemconfig-filesystemid */
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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-efsfilesystemconfig-filesystempath */
  FileSystemPath?: string | Intrinsic
}

/**
 * A Git repository that SageMaker automatically displays to users for cloning in the JupyterServer application.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html */

export interface CodeRepository {
  /**
   * - The URL of the Git repository.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^https://([.\-_a-zA-Z0-9]+/?){3,1016}$`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-coderepository-repositoryurl */
  RepositoryUrl: string | Intrinsic
}

/**
 * A custom SageMaker image. For more information, see [Bring your own SageMaker image](https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html */

export interface CustomImage {
  /**
   * - The name of the AppImageConfig.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-customimage-appimageconfigname */
  AppImageConfigName: string | Intrinsic
  /**
   * - The name of the CustomImage. Must be unique to your account.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9]([-.]?[a-zA-Z0-9]){0,62}$`
   * - _Maximum_: `63`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-customimage-imagename */
  ImageName: string | Intrinsic
  /**
   * - The version number of the CustomImage.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-customimage-imageversionnumber */
  ImageVersionNumber?: number | Intrinsic
}

/**
 * Specifies the ARN's of a SageMaker image and SageMaker image version, and the instance type that the version runs on.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html */

export interface ResourceSpec {
  /**
   * - The instance type that the image version runs on.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `system | ml.t3.micro | ml.t3.small | ml.t3.medium | ml.t3.large | ml.t3.xlarge | ml.t3.2xlarge | ml.m5.large | ml.m5.xlarge | ml.m5.2xlarge | ml.m5.4xlarge | ml.m5.8xlarge | ml.m5.12xlarge | ml.m5.16xlarge | ml.m5.24xlarge | ml.c5.large | ml.c5.xlarge | ml.c5.2xlarge | ml.c5.4xlarge | ml.c5.9xlarge | ml.c5.12xlarge | ml.c5.18xlarge | ml.c5.24xlarge | ml.p3.2xlarge | ml.p3.8xlarge | ml.p3.16xlarge | ml.g4dn.xlarge | ml.g4dn.2xlarge | ml.g4dn.4xlarge | ml.g4dn.8xlarge | ml.g4dn.12xlarge | ml.g4dn.16xlarge | ml.r5.large | ml.r5.xlarge | ml.r5.2xlarge | ml.r5.4xlarge | ml.r5.8xlarge | ml.r5.12xlarge | ml.r5.16xlarge | ml.r5.24xlarge | ml.p3dn.24xlarge | ml.m5d.large | ml.m5d.xlarge | ml.m5d.2xlarge | ml.m5d.4xlarge | ml.m5d.8xlarge | ml.m5d.12xlarge | ml.m5d.16xlarge | ml.m5d.24xlarge | ml.g5.xlarge | ml.g5.2xlarge | ml.g5.4xlarge | ml.g5.8xlarge | ml.g5.12xlarge | ml.g5.16xlarge | ml.g5.24xlarge | ml.g5.48xlarge | ml.p4d.24xlarge | ml.p4de.24xlarge | ml.geospatial.interactive | ml.trn1.2xlarge | ml.trn1.32xlarge | ml.trn1n.32xlarge`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-resourcespec-instancetype */
  InstanceType?: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of the Lifecycle Configuration attached to the Resource.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `arn:aws[a-z\-]*:sagemaker:[a-z0-9\-]*:[0-9]{12}:studio-lifecycle-config/.*`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-resourcespec-lifecycleconfigarn */
  LifecycleConfigArn?: string | Intrinsic
  /**
   * - The ARN of the SageMaker image that the image version belongs to.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:aws(-[\w]+)*:sagemaker:.+:[0-9]{12}:image/[a-z0-9]([-.]?[a-z0-9])*$`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-resourcespec-sagemakerimagearn */
  SageMakerImageArn?: string | Intrinsic
  /**
   * - The ARN of the image version created on the instance.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:aws(-[\w]+)*:sagemaker:.+:[0-9]{12}:image-version/[a-z0-9]([-.]?[a-z0-9])*[0-9]+$`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-resourcespec-sagemakerimageversionarn */
  SageMakerImageVersionArn?: string | Intrinsic
}

/**
 * A collection of default EBS storage settings that apply to spaces created within a domain or user profile.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html */

export interface DefaultEbsStorageSettings {
  /**
   * - The default size of the EBS storage volume for a space.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `5`
   * - _Maximum_: `16384`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-defaultebsstoragesettings-defaultebsvolumesizeingb */
  DefaultEbsVolumeSizeInGb: number | Intrinsic
  /**
   * - The maximum size of the EBS storage volume for a space.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `5`
   * - _Maximum_: `16384`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-defaultebsstoragesettings-maximumebsvolumesizeingb */
  MaximumEbsVolumeSizeInGb: number | Intrinsic
}

/**
 * Settings related to idle shutdown of Studio applications.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html */

export interface IdleSettings {
  /**
   * - The time that SageMaker waits after the application becomes idle before shutting it down.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `60`
   * - _Maximum_: `525600`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-idlesettings-idletimeoutinminutes */
  IdleTimeoutInMinutes?: number | Intrinsic
  /**
   * - Indicates whether idle shutdown is activated for the application type.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ENABLED | DISABLED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-idlesettings-lifecyclemanagement */
  LifecycleManagement?: string | Intrinsic
  /**
   * - The maximum value in minutes that custom idle shutdown can be set to by the user.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `60`
   * - _Maximum_: `525600`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-idlesettings-maxidletimeoutinminutes */
  MaxIdleTimeoutInMinutes?: number | Intrinsic
  /**
   * - The minimum value in minutes that custom idle shutdown can be set to by the user.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `60`
   * - _Maximum_: `525600`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-idlesettings-minidletimeoutinminutes */
  MinIdleTimeoutInMinutes?: number | Intrinsic
}

/**
 * A collection of settings that apply to users of Amazon SageMaker Studio. These settings are specified when the [CreateUserProfile](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateUserProfile.html) API is called, and as `DefaultUserSettings` when the [CreateDomain](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateDomain.html) API is called.
 * `SecurityGroups` is aggregated when specified in both calls. For all other settings in `UserSettings`, the values specified in `CreateUserProfile` take precedence over those specified in `CreateDomain`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html */

export interface UserSettings {
  /**
   * - The Code Editor application settings.
   * - _Required_: No
   * - _Type_: [CodeEditorAppSettings](./aws-properties-sagemaker-domain-codeeditorappsettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-usersettings-codeeditorappsettings */
  CodeEditorAppSettings?: CodeEditorAppSettings
  /**
   * - The settings for assigning a custom file system to a user profile. Permitted users can access this file system in Amazon SageMaker Studio.
   * - _Required_: No
   * - _Type_: Array of [CustomFileSystemConfig](./aws-properties-sagemaker-domain-customfilesystemconfig.html)
   * - _Minimum_: `0`
   * - _Maximum_: `2`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-usersettings-customfilesystemconfigs */
  CustomFileSystemConfigs?: CustomFileSystemConfig[]
  /**
   * - Details about the POSIX identity that is used for file system operations.
   * - _Required_: No
   * - _Type_: [CustomPosixUserConfig](./aws-properties-sagemaker-domain-customposixuserconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-usersettings-customposixuserconfig */
  CustomPosixUserConfig?: CustomPosixUserConfig
  /**
   * - The default experience that the user is directed to when accessing the domain. The supported values are:
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `1023`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-usersettings-defaultlandinguri */
  DefaultLandingUri?: string | Intrinsic
  /**
   * - The execution role for the user.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
   * - _Minimum_: `20`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-usersettings-executionrole */
  ExecutionRole: string | Intrinsic
  /**
   * - The settings for the JupyterLab application.
   * - _Required_: No
   * - _Type_: [JupyterLabAppSettings](./aws-properties-sagemaker-domain-jupyterlabappsettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-usersettings-jupyterlabappsettings */
  JupyterLabAppSettings?: JupyterLabAppSettings
  /**
   * - The Jupyter server's app settings.
   * - _Required_: No
   * - _Type_: [JupyterServerAppSettings](./aws-properties-sagemaker-domain-jupyterserverappsettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-usersettings-jupyterserverappsettings */
  JupyterServerAppSettings?: JupyterServerAppSettings
  /**
   * - The kernel gateway app settings.
   * - _Required_: No
   * - _Type_: [KernelGatewayAppSettings](./aws-properties-sagemaker-domain-kernelgatewayappsettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-usersettings-kernelgatewayappsettings */
  KernelGatewayAppSettings?: KernelGatewayAppSettings
  /**
   * - A collection of settings that configure the `RSessionGateway` app.
   * - _Required_: No
   * - _Type_: [RSessionAppSettings](./aws-properties-sagemaker-domain-rsessionappsettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-usersettings-rsessionappsettings */
  RSessionAppSettings?: RSessionAppSettings
  /**
   * - A collection of settings that configure user interaction with the `RStudioServerPro` app.
   * - _Required_: No
   * - _Type_: [RStudioServerProAppSettings](./aws-properties-sagemaker-domain-rstudioserverproappsettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-usersettings-rstudioserverproappsettings */
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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-usersettings-securitygroups */
  SecurityGroups?: (string | Intrinsic)[]
  /**
   * - Specifies options for sharing Amazon SageMaker Studio notebooks.
   * - _Required_: No
   * - _Type_: [SharingSettings](./aws-properties-sagemaker-domain-sharingsettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-usersettings-sharingsettings */
  SharingSettings?: SharingSettings
  /**
   * - The storage settings for a space.
   * - _Required_: No
   * - _Type_: [DefaultSpaceStorageSettings](./aws-properties-sagemaker-domain-defaultspacestoragesettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-usersettings-spacestoragesettings */
  SpaceStorageSettings?: DefaultSpaceStorageSettings
  /**
   * - Whether the user can access Studio. If this value is set to `DISABLED`, the user cannot access Studio, even if that is the default experience for the domain.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ENABLED | DISABLED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-usersettings-studiowebportal */
  StudioWebPortal?: string | Intrinsic
  /**
   * - Studio settings. If these settings are applied on a user level, they take priority over the settings applied on a domain level.
   * - _Required_: No
   * - _Type_: [StudioWebPortalSettings](./aws-properties-sagemaker-domain-studiowebportalsettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-usersettings-studiowebportalsettings */
  StudioWebPortalSettings?: StudioWebPortalSettings
}

/**
 * A collection of settings that apply to the `SageMaker Domain`. These settings are specified through the `CreateDomain` API call.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html */

export interface DomainSettings {
  /**
   * - A collection of settings that configure the domain's Docker interaction.
   * - _Required_: No
   * - _Type_: [DockerSettings](./aws-properties-sagemaker-domain-dockersettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-domainsettings-dockersettings */
  DockerSettings?: DockerSettings
  /**
   * - A collection of settings that configure the `RStudioServerPro` Domain-level app.
   * - _Required_: No
   * - _Type_: [RStudioServerProDomainSettings](./aws-properties-sagemaker-domain-rstudioserverprodomainsettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-domainsettings-rstudioserverprodomainsettings */
  RStudioServerProDomainSettings?: RStudioServerProDomainSettings
  /**
   * - The security groups for the Amazon Virtual Private Cloud that the `Domain` uses for communication between Domain-level apps and user apps.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `32 | 3`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-domainsettings-securitygroupids */
  SecurityGroupIds?: (string | Intrinsic)[]
}

/**
 * The settings for assigning a custom file system to a user profile or space for an Amazon SageMaker Domain. Permitted users can access this file system in Amazon SageMaker Studio.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html */

export interface CustomFileSystemConfig {
  /**
   * - The settings for a custom Amazon EFS file system.
   * - _Required_: No
   * - _Type_: [EFSFileSystemConfig](./aws-properties-sagemaker-domain-efsfilesystemconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-customfilesystemconfig-efsfilesystemconfig */
  EFSFileSystemConfig?: EFSFileSystemConfig
}

/**
 * The default storage settings for a space.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html */

export interface DefaultSpaceStorageSettings {
  /**
   * - The default EBS storage settings for a space.
   * - _Required_: No
   * - _Type_: [DefaultEbsStorageSettings](./aws-properties-sagemaker-domain-defaultebsstoragesettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-defaultspacestoragesettings-defaultebsstoragesettings */
  DefaultEbsStorageSettings?: DefaultEbsStorageSettings
}

/**
 * Settings that are used to configure and manage the lifecycle of Amazon SageMaker Studio applications.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html */

export interface AppLifecycleManagement {
  /**
   * - Settings related to idle shutdown of Studio applications.
   * - _Required_: No
   * - _Type_: [IdleSettings](./aws-properties-sagemaker-domain-idlesettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-applifecyclemanagement-idlesettings */
  IdleSettings?: IdleSettings
}

/**
 * The settings for the JupyterLab application.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html */

export interface JupyterLabAppSettings {
  /**
   * - Indicates whether idle shutdown is activated for JupyterLab applications.
   * - _Required_: No
   * - _Type_: [AppLifecycleManagement](./aws-properties-sagemaker-domain-applifecyclemanagement.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-jupyterlabappsettings-applifecyclemanagement */
  AppLifecycleManagement?: AppLifecycleManagement
  /**
   * - A list of Git repositories that SageMaker automatically displays to users for cloning in the JupyterLab application.
   * - _Required_: No
   * - _Type_: Array of [CodeRepository](./aws-properties-sagemaker-domain-coderepository.html)
   * - _Minimum_: `0`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-jupyterlabappsettings-coderepositories */
  CodeRepositories?: CodeRepository[]
  /**
   * - A list of custom SageMaker images that are configured to run as a JupyterLab app.
   * - _Required_: No
   * - _Type_: Array of [CustomImage](./aws-properties-sagemaker-domain-customimage.html)
   * - _Minimum_: `0`
   * - _Maximum_: `200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-jupyterlabappsettings-customimages */
  CustomImages?: CustomImage[]
  /**
   * - The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the JupyterLab app.
   * - _Required_: No
   * - _Type_: [ResourceSpec](./aws-properties-sagemaker-domain-resourcespec.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-jupyterlabappsettings-defaultresourcespec */
  DefaultResourceSpec?: ResourceSpec
  /**
   * - The Amazon Resource Name (ARN) of the lifecycle configurations attached to the user profile or domain. To remove a lifecycle config, you must set `LifecycleConfigArns` to an empty list.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-jupyterlabappsettings-lifecycleconfigarns */
  LifecycleConfigArns?: (string | Intrinsic)[]
}

/**
 * A collection of settings that apply to spaces created in the domain.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html */

export interface DefaultSpaceSettings {
  /**
   * - The settings for assigning a custom file system to a domain. Permitted users can access this file system in Amazon SageMaker Studio.
   * - _Required_: No
   * - _Type_: Array of [CustomFileSystemConfig](./aws-properties-sagemaker-domain-customfilesystemconfig.html)
   * - _Minimum_: `0`
   * - _Maximum_: `2`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-defaultspacesettings-customfilesystemconfigs */
  CustomFileSystemConfigs?: CustomFileSystemConfig[]
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [CustomPosixUserConfig](./aws-properties-sagemaker-domain-customposixuserconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-defaultspacesettings-customposixuserconfig */
  CustomPosixUserConfig?: CustomPosixUserConfig
  /**
   * - The ARN of the execution role for the space.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
   * - _Minimum_: `20`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-defaultspacesettings-executionrole */
  ExecutionRole: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [JupyterLabAppSettings](./aws-properties-sagemaker-domain-jupyterlabappsettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-defaultspacesettings-jupyterlabappsettings */
  JupyterLabAppSettings?: JupyterLabAppSettings
  /**
   * - The JupyterServer app settings.
   * - _Required_: No
   * - _Type_: [JupyterServerAppSettings](./aws-properties-sagemaker-domain-jupyterserverappsettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-defaultspacesettings-jupyterserverappsettings */
  JupyterServerAppSettings?: JupyterServerAppSettings
  /**
   * - The KernelGateway app settings.
   * - _Required_: No
   * - _Type_: [KernelGatewayAppSettings](./aws-properties-sagemaker-domain-kernelgatewayappsettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-defaultspacesettings-kernelgatewayappsettings */
  KernelGatewayAppSettings?: KernelGatewayAppSettings
  /**
   * - The security group IDs for the Amazon VPC that the space uses for communication.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0`
   * - _Maximum_: `32 | 5`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-defaultspacesettings-securitygroups */
  SecurityGroups?: (string | Intrinsic)[]
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [DefaultSpaceStorageSettings](./aws-properties-sagemaker-domain-defaultspacestoragesettings.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-defaultspacesettings-spacestoragesettings */
  SpaceStorageSettings?: DefaultSpaceStorageSettings
}

/**
 * Creates a `Domain`. A domain consists of an associated Amazon Elastic File System volume, a list of authorized users, and a variety of security, application, policy, and Amazon Virtual Private Cloud (VPC) configurations. Users within a domain can share notebook files and other artifacts with each other.
 * **EFS storage**
 * When a domain is created, an EFS volume is created for use by all of the users within the domain. Each user receives a private home directory within the EFS volume for notebooks, Git repositories, and data files.
 * SageMaker uses the AWS Key Management Service (AWS KMS) to encrypt the EFS volume attached to the domain with an AWS managed key by default. For more control, you can specify a customer managed key. For more information, see [Protect Data at Rest Using Encryption](https://docs.aws.amazon.com/sagemaker/latest/dg/encryption-at-rest.html).
 * **VPC configuration**
 * All traffic between the domain and the Amazon EFS volume is through the specified VPC and subnets. For other traffic, you can specify the `AppNetworkAccessType` parameter. `AppNetworkAccessType` corresponds to the network access type that you choose when you onboard to the domain. The following options are available:
 * *   `PublicInternetOnly` - Non-EFS traffic goes through a VPC managed by Amazon SageMaker, which allows internet access. This is the default value.
 *
 * *   `VpcOnly` - All traffic is through the specified VPC and subnets. Internet access is disabled by default. To allow internet access, you must specify a NAT gateway.
 *
 *     When internet access is disabled, you won't be able to run a Amazon SageMaker Studio notebook or to train or host models unless your VPC has an interface endpoint to the SageMaker API and runtime or a NAT gateway and your security groups allow outbound connections.
 * ###### Important
 *
 * NFS traffic over TCP on port 2049 needs to be allowed in both inbound and outbound rules in order to launch a Amazon SageMaker Studio app successfully.
 * For more information, see [Connect Amazon SageMaker Studio Notebooks to Resources in a VPC](https://docs.aws.amazon.com/sagemaker/latest/dg/studio-notebooks-and-internet-access.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html */

export interface SageMakerDomain extends ResourceAttributes {
  Type: 'AWS::SageMaker::Domain'
  Properties: {
    /**
     * - Specifies the VPC used for non-EFS traffic. The default value is `PublicInternetOnly`.
     * - _Valid Values_: `PublicInternetOnly | VpcOnly`
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `PublicInternetOnly | VpcOnly`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-appnetworkaccesstype */
    AppNetworkAccessType?: string | Intrinsic
    /**
     * - The entity that creates and manages the required security groups for inter-app communication in `VpcOnly` mode. Required when `CreateDomain.AppNetworkAccessType` is `VpcOnly` and `DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn` is provided. If setting up the domain for use with RStudio, this value must be set to `Service`.
     * - _Allowed Values_: `Service` | `Customer`
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `Service | Customer`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-appsecuritygroupmanagement */
    AppSecurityGroupManagement?: string | Intrinsic
    /**
     * - The mode of authentication that members use to access the Domain.
     * - _Valid Values_: `SSO | IAM`
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `SSO | IAM`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-authmode */
    AuthMode: string | Intrinsic
    /**
     * - A collection of settings that apply to spaces created in the domain.
     * - _Required_: No
     * - _Type_: [DefaultSpaceSettings](./aws-properties-sagemaker-domain-defaultspacesettings.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-defaultspacesettings */
    DefaultSpaceSettings?: DefaultSpaceSettings
    /**
     * - The default user settings.
     * - _Required_: Yes
     * - _Type_: [UserSettings](./aws-properties-sagemaker-domain-usersettings.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-defaultusersettings */
    DefaultUserSettings: UserSettings
    /**
     * - The domain name.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-domainname */
    DomainName: string | Intrinsic
    /**
     * - A collection of settings that apply to the `SageMaker Domain`. These settings are specified through the `CreateDomain` API call.
     * - _Required_: No
     * - _Type_: [DomainSettings](./aws-properties-sagemaker-domain-domainsettings.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-domainsettings */
    DomainSettings?: DomainSettings
    /**
     * - SageMaker uses AWS KMS to encrypt the EFS volume attached to the Domain with an AWS managed customer master key (CMK) by default. For more control, specify a customer managed CMK.
     * - _Length Constraints_: Maximum length of 2048.
     * - _Pattern_: `.*`
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-kmskeyid */
    KmsKeyId?: string | Intrinsic
    /**
     * - The VPC subnets that Studio uses for communication.
     * - _Length Constraints_: Maximum length of 32.
     * - _Array members_: Minimum number of 1 item. Maximum number of 16 items.
     * - _Pattern_: `[-0-9a-zA-Z]+`
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `32 | 16`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-subnetids */
    SubnetIds: (string | Intrinsic)[]
    /**
     * - Tags to associated with the Domain. Each tag consists of a key and an optional value. Tag keys must be unique per resource. Tags are searchable using the Search API.
     * - Tags that you specify for the Domain are also added to all apps that are launched in the Domain.
     * - _Array members_: Minimum number of 0 items. Maximum number of 50 items.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-sagemaker-domain-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `50`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-tags */
    Tags?: Tag[]
    /**
     * - The ID of the Amazon Virtual Private Cloud (Amazon VPC) that Studio uses for communication.
     * - _Length Constraints_: Maximum length of 32.
     * - _Pattern_: `[-0-9a-zA-Z]+`
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[-0-9a-zA-Z]+`
     * - _Maximum_: `32`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-domain.html#cfn-sagemaker-domain-vpcid */
    VpcId: string | Intrinsic
  }
}
