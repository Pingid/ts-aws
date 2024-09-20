import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `AWS::Rekognition::Project` type creates an Amazon Rekognition Custom Labels project. A project is a group of resources needed to create and manage versions of an Amazon Rekognition Custom Labels model.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rekognition-project.html */

export interface RekognitionProject extends ResourceAttributes {
  Type: 'AWS::Rekognition::Project'
  Properties: {
    /**
     * - The name of the project to create.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9][a-zA-Z0-9_\-]*`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rekognition-project.html#cfn-rekognition-project-projectname */
    ProjectName: string | Intrinsic
  }
}
