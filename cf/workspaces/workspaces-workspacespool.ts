import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Describes the user capacity for the pool.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspacespool.html */

export interface Capacity {
    /**
     * - The desired number of user sessions for the WorkSpaces in the pool.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspacespool.html#cfn-workspaces-workspacespool-capacity-desiredusersessions */
    "DesiredUserSessions": number | Intrinsic;
}

/**
 * Describes the timeout settings for the pool.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspacespool.html */

export interface TimeoutSettings {
    /**
     * - Specifies the amount of time, in seconds, that a streaming session remains active after users disconnect. If users try to reconnect to the streaming session after a disconnection or network interruption within the time set, they are connected to their previous session. Otherwise, they are connected to a new session with a new streaming instance.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `60`
     * - _Maximum_: `36000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspacespool.html#cfn-workspaces-workspacespool-timeoutsettings-disconnecttimeoutinseconds */
    "DisconnectTimeoutInSeconds"?: number | Intrinsic;
    /**
     * - The amount of time in seconds a connection will stay active while idle.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `36000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspacespool.html#cfn-workspaces-workspacespool-timeoutsettings-idledisconnecttimeoutinseconds */
    "IdleDisconnectTimeoutInSeconds"?: number | Intrinsic;
    /**
     * - Specifies the maximum amount of time, in seconds, that a streaming session can remain active. If users are still connected to a streaming instance five minutes before this limit is reached, they are prompted to save any open documents before being disconnected. After this time elapses, the instance is terminated and replaced by a new instance.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `600`
     * - _Maximum_: `432000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspacespool.html#cfn-workspaces-workspacespool-timeoutsettings-maxuserdurationinseconds */
    "MaxUserDurationInSeconds"?: number | Intrinsic;
}

/**
 * The persistent application settings for users in the pool.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspacespool.html */

export interface ApplicationSettings {
    /**
     * - The path prefix for the S3 bucket where users’ persistent application settings are stored.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[A-Za-z0-9_./()!*'-]+$`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspacespool.html#cfn-workspaces-workspacespool-applicationsettings-settingsgroup */
    "SettingsGroup"?: string | Intrinsic;
    /**
     * - Enables or disables persistent application settings for users during their pool sessions.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `DISABLED | ENABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspacespool.html#cfn-workspaces-workspacespool-applicationsettings-status */
    "Status": string | Intrinsic;
}

/**
 * Describes a pool of WorkSpaces.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspacespool.html */

export interface WorkSpacesWorkspacesPool extends ResourceAttributes {
    "Type": "AWS::WorkSpaces::WorkspacesPool";
    "Properties": {
        /**
         * - The persistent application settings for users of the pool.
         * - _Required_: No
         * - _Type_: [ApplicationSettings](./aws-properties-workspaces-workspacespool-applicationsettings.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspacespool.html#cfn-workspaces-workspacespool-applicationsettings */
        "ApplicationSettings"?: ApplicationSettings;
        /**
         * - The identifier of the bundle used by the pool.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^wsb-[0-9a-z]{8,63}$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspacespool.html#cfn-workspaces-workspacespool-bundleid */
        "BundleId": string | Intrinsic;
        /**
         * - Describes the user capacity for the pool.
         * - _Required_: Yes
         * - _Type_: [Capacity](./aws-properties-workspaces-workspacespool-capacity.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspacespool.html#cfn-workspaces-workspacespool-capacity */
        "Capacity": Capacity;
        /**
         * - The description of the pool.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9_./() -]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspacespool.html#cfn-workspaces-workspacespool-description */
        "Description"?: string | Intrinsic;
        /**
         * - The identifier of the directory used by the pool.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^wsd-[0-9a-z]{8,63}$`
         * - _Minimum_: `10`
         * - _Maximum_: `65`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspacespool.html#cfn-workspaces-workspacespool-directoryid */
        "DirectoryId": string | Intrinsic;
        /**
         * - The name of the pool.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[A-Za-z0-9][A-Za-z0-9_.-]{0,63}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspacespool.html#cfn-workspaces-workspacespool-poolname */
        "PoolName": string | Intrinsic;
        /**
         * - The running mode of the pool.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `ALWAYS_ON | AUTO_STOP`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspacespool.html#cfn-workspaces-workspacespool-runningmode */
        "RunningMode"?: string | Intrinsic;
        /**
         * - The amount of time that a pool session remains active after users disconnect. If they try to reconnect to the pool session after a disconnection or network interruption within this time interval, they are connected to their previous session. Otherwise, they are connected to a new session with a new pool instance.
         * - _Required_: No
         * - _Type_: [TimeoutSettings](./aws-properties-workspaces-workspacespool-timeoutsettings.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspaces-workspacespool.html#cfn-workspaces-workspacespool-timeoutsettings */
        "TimeoutSettings"?: TimeoutSettings;
    };
}