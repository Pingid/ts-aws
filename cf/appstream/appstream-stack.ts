import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Describes an interface VPC endpoint (interface endpoint) that lets you create a private connection between the virtual private cloud (VPC) that you specify and AppStream 2.0. When you specify an interface endpoint for a stack, users of the stack can connect to AppStream 2.0 only through that endpoint. When you specify an interface endpoint for an image builder, administrators can connect to the image builder only through that endpoint.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html */

export interface AccessEndpoint {
  /**
   * - The type of interface endpoint.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `STREAMING`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-accessendpoint-endpointtype */
  EndpointType: string | Intrinsic
  /**
   * - The identifier (ID) of the VPC in which the interface endpoint is used.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-accessendpoint-vpceid */
  VpceId: string | Intrinsic
}

/**
 * The persistent application settings for users of a stack.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html */

export interface ApplicationSettings {
  /**
   * - Enables or disables persistent application settings for users during their streaming sessions.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-applicationsettings-enabled */
  Enabled: boolean | Intrinsic
  /**
   * - The path prefix for the S3 bucket where users’ persistent application settings are stored. You can allow the same persistent application settings to be used across multiple stacks by specifying the same settings group for each stack.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-applicationsettings-settingsgroup */
  SettingsGroup?: string | Intrinsic
}

/**
 * A connector that enables persistent storage for users.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html */

export interface StorageConnector {
  /**
   * - The type of storage connector.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `HOMEFOLDERS | GOOGLE_DRIVE | ONE_DRIVE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-storageconnector-connectortype */
  ConnectorType: string | Intrinsic
  /**
   * - The names of the domains for the account.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-storageconnector-domains */
  Domains?: (string | Intrinsic)[]
  /**
   * - The ARN of the storage connector.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-storageconnector-resourceidentifier */
  ResourceIdentifier?: string | Intrinsic
}

/**
 * The streaming protocol that you want your stack to prefer. This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html */

export interface StreamingExperienceSettings {
  /**
   * - The preferred protocol that you want to use while streaming your application.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `TCP | UDP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-streamingexperiencesettings-preferredprotocol */
  PreferredProtocol?: string | Intrinsic
}

/**
 * The tag of the stack.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html */

export interface Tag {
  /**
   * - The key of the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-tag-key */
  Key: string | Intrinsic
  /**
   * - The value of the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-tag-value */
  Value: string | Intrinsic
}

/**
 * Specifies an action and whether the action is enabled or disabled for users during their streaming sessions.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html */

export interface UserSetting {
  /**
   * - The action that is enabled or disabled.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `CLIPBOARD_COPY_FROM_LOCAL_DEVICE | CLIPBOARD_COPY_TO_LOCAL_DEVICE | FILE_UPLOAD | FILE_DOWNLOAD | PRINTING_TO_LOCAL_DEVICE | DOMAIN_PASSWORD_SIGNIN | DOMAIN_SMART_CARD_SIGNIN`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-usersetting-action */
  Action: string | Intrinsic
  /**
   * - Specifies the number of characters that can be copied by end users from the local device to the remote session, and to the local device from the remote session.
   * - This can be specified only for the `CLIPBOARD_COPY_FROM_LOCAL_DEVICE` and `CLIPBOARD_COPY_TO_LOCAL_DEVICE` actions.
   * - This defaults to 20,971,520 (20 MB) when unspecified and the permission is `ENABLED`. This can't be specified when the permission is `DISABLED`.
   * - The value can be between 1 and 20,971,520 (20 MB).
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-usersetting-maximumlength */
  MaximumLength?: number | Intrinsic
  /**
   * - Indicates whether the action is enabled or disabled.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `ENABLED | DISABLED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-usersetting-permission */
  Permission: string | Intrinsic
}

/**
 * The `AWS::AppStream::Stack` resource creates a stack to start streaming applications to Amazon AppStream 2.0 users. A stack consists of an associated fleet, user access policies, and storage configurations.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html */

export interface AppStreamStack extends ResourceAttributes {
  Type: 'AWS::AppStream::Stack'
  Properties: {
    /**
     * - The list of virtual private cloud (VPC) interface endpoint objects. Users of the stack can connect to AppStream 2.0 only through the specified endpoints.
     * - _Required_: No
     * - _Type_: Array of [AccessEndpoint](./aws-properties-appstream-stack-accessendpoint.html)
     * - _Minimum_: `1`
     * - _Maximum_: `4`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-accessendpoints */
    AccessEndpoints?: AccessEndpoint[]
    /**
     * - The persistent application settings for users of the stack. When these settings are enabled, changes that users make to applications and Windows settings are automatically saved after each session and applied to the next session.
     * - _Required_: No
     * - _Type_: [ApplicationSettings](./aws-properties-appstream-stack-applicationsettings.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-applicationsettings */
    ApplicationSettings?: ApplicationSettings
    /**
     * - The stack attributes to delete.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-attributestodelete */
    AttributesToDelete?: (string | Intrinsic)[]
    /**
     * - _This parameter has been deprecated._
     * - Deletes the storage connectors currently enabled for the stack.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-deletestorageconnectors */
    DeleteStorageConnectors?: boolean | Intrinsic
    /**
     * - The description to display.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-description */
    Description?: string | Intrinsic
    /**
     * - The stack name to display.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-displayname */
    DisplayName?: string | Intrinsic
    /**
     * - The domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `20`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-embedhostdomains */
    EmbedHostDomains?: (string | Intrinsic)[]
    /**
     * - The URL that users are redirected to after they click the Send Feedback link. If no URL is specified, no Send Feedback link is displayed.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-feedbackurl */
    FeedbackURL?: string | Intrinsic
    /**
     * - The name of the stack.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9_.-]{0,100}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-name */
    Name?: string | Intrinsic
    /**
     * - The URL that users are redirected to after their streaming session ends.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-redirecturl */
    RedirectURL?: string | Intrinsic
    /**
     * - The storage connectors to enable.
     * - _Required_: No
     * - _Type_: Array of [StorageConnector](./aws-properties-appstream-stack-storageconnector.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-storageconnectors */
    StorageConnectors?: StorageConnector[]
    /**
     * - The streaming protocol that you want your stack to prefer. This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.
     * - _Required_: No
     * - _Type_: [StreamingExperienceSettings](./aws-properties-appstream-stack-streamingexperiencesettings.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-streamingexperiencesettings */
    StreamingExperienceSettings?: StreamingExperienceSettings
    /**
     * - An array of key-value pairs.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-appstream-stack-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-tags */
    Tags?: Tag[]
    /**
     * - The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled.
     * - _Required_: No
     * - _Type_: Array of [UserSetting](./aws-properties-appstream-stack-usersetting.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stack.html#cfn-appstream-stack-usersettings */
    UserSettings?: UserSetting[]
  }
}
