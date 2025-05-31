import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Information, such as repository, branch, provider, and resource names for a specific sync configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-syncconfiguration.html */

export interface CodeStarConnectionsSyncConfiguration extends ResourceAttributes {
    "Type": "AWS::CodeStarConnections::SyncConfiguration";
    "Properties": {
        /**
         * - The branch associated with a specific sync configuration.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^.*$`
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-syncconfiguration.html#cfn-codestarconnections-syncconfiguration-branch */
        "Branch": string | Intrinsic;
        /**
         * - The file path to the configuration file associated with a specific sync configuration. The path should point to an actual file in the sync configurations linked repository.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-syncconfiguration.html#cfn-codestarconnections-syncconfiguration-configfile */
        "ConfigFile": string | Intrinsic;
        /**
         * - Whether to enable or disable publishing of deployment status to source providers.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `ENABLED | DISABLED`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-syncconfiguration.html#cfn-codestarconnections-syncconfiguration-publishdeploymentstatus */
        "PublishDeploymentStatus"?: string | Intrinsic;
        /**
         * - The ID of the repository link associated with a specific sync configuration.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-syncconfiguration.html#cfn-codestarconnections-syncconfiguration-repositorylinkid */
        "RepositoryLinkId": string | Intrinsic;
        /**
         * - The name of the connection resource associated with a specific sync configuration.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[a-za-z0-9_\.-]+`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-syncconfiguration.html#cfn-codestarconnections-syncconfiguration-resourcename */
        "ResourceName": string | Intrinsic;
        /**
         * - The Amazon Resource Name (ARN) of the IAM role associated with a specific sync configuration.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `arn:aws(-[\w]+)*:iam::\d{12}:role/[a-zA-Z_0-9+=,.@\-_/]+`
         * - _Minimum_: `1`
         * - _Maximum_: `1024`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-syncconfiguration.html#cfn-codestarconnections-syncconfiguration-rolearn */
        "RoleArn": string | Intrinsic;
        /**
         * - The type of sync for a specific sync configuration.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `CFN_STACK_SYNC`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-syncconfiguration.html#cfn-codestarconnections-syncconfiguration-synctype */
        "SyncType": string | Intrinsic;
        /**
         * - When to trigger Git sync to begin the stack update.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `ANY_CHANGE | FILE_CHANGE`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-syncconfiguration.html#cfn-codestarconnections-syncconfiguration-triggerresourceupdateon */
        "TriggerResourceUpdateOn"?: string | Intrinsic;
    };
}