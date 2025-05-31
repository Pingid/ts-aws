import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The SyncJob.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-syncjob.html */

export interface IoTTwinMakerSyncJob extends ResourceAttributes {
    "Type": "AWS::IoTTwinMaker::SyncJob";
    "Properties": {
        /**
         * - The SyncJob IAM role. This IAM role is used by the sync job to read from the syncSource, and create, update or delete the corresponding resources.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `arn:((aws)|(aws-cn)|(aws-us-gov)):iam::[0-9]{12}:role/.*`
         * - _Minimum_: `20`
         * - _Maximum_: `2048`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-syncjob.html#cfn-iottwinmaker-syncjob-syncrole */
        "SyncRole": string | Intrinsic;
        /**
         * - The sync source.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-syncjob.html#cfn-iottwinmaker-syncjob-syncsource */
        "SyncSource": string | Intrinsic;
        /**
         * - Metadata you can use to manage the SyncJob.
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-syncjob.html#cfn-iottwinmaker-syncjob-tags */
        "Tags"?: Record<string, string | Intrinsic>;
        /**
         * - The ID of the workspace that contains the sync job.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[a-zA-Z_0-9][a-zA-Z_\-0-9]*[a-zA-Z0-9]+`
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iottwinmaker-syncjob.html#cfn-iottwinmaker-syncjob-workspaceid */
        "WorkspaceId": string | Intrinsic;
    };
}