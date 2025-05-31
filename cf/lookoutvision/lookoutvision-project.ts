import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `AWS::LookoutVision::Project` type creates an Amazon Lookout for Vision project. A project is a grouping of the resources needed to create and manage an Amazon Lookout for Vision model.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutvision-project.html */

export interface LookoutVisionProject extends ResourceAttributes {
    "Type": "AWS::LookoutVision::Project";
    "Properties": {
        /**
         * - The name of the project.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[a-zA-Z0-9][a-zA-Z0-9_\-]*`
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutvision-project.html#cfn-lookoutvision-project-projectname */
        "ProjectName": string | Intrinsic;
    };
}