import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Onboards and syncs resources tagged with a specific tag key-value pair to an application.
 * **Minimum permissions**
 * To run this command, you must have the following permissions:
 * *   `resource-groups:StartTagSyncTask`
 *     
 * *   `resource-groups:CreateGroup`
 *     
 * *   `iam:PassRole` for the role you provide to create a tag-sync task
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-tagsynctask.html */

export interface ResourceGroupsTagSyncTask extends ResourceAttributes {
    "Type": "AWS::ResourceGroups::TagSyncTask";
    "Properties": {
        /**
         * - The Amazon resource name (ARN) or name of the application group for which you want to create a tag-sync task.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `([a-zA-Z0-9_\\.-]{1,150}/[a-z0-9]{26})|(arn:aws(-[a-z]+)*:resource-groups(-(test|beta|gamma))?:[a-z]{2}(-[a-z]+)+-\d{1}:[0-9]{12}:group/[a-zA-Z0-9_\\.-]{1,150}/[a-z0-9]{26})`
         * - _Minimum_: `12`
         * - _Maximum_: `1600`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-tagsynctask.html#cfn-resourcegroups-tagsynctask-group */
        "Group": string | Intrinsic;
        /**
         * - The Amazon resource name (ARN) of the role assumed by the service to tag and untag resources on your behalf.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `arn:(aws[a-zA-Z-]*)?:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+`
         * - _Minimum_: `20`
         * - _Maximum_: `2048`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-tagsynctask.html#cfn-resourcegroups-tagsynctask-rolearn */
        "RoleArn": string | Intrinsic;
        /**
         * - The tag key.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-tagsynctask.html#cfn-resourcegroups-tagsynctask-tagkey */
        "TagKey": string | Intrinsic;
        /**
         * - The tag value.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
         * - _Minimum_: `0`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourcegroups-tagsynctask.html#cfn-resourcegroups-tagsynctask-tagvalue */
        "TagValue": string | Intrinsic;
    };
}