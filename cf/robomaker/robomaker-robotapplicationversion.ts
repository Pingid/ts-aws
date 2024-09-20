import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `AWS::RoboMaker::RobotApplicationVersion` resource creates an AWS RoboMaker robot version.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robotapplicationversion.html */

export interface RoboMakerRobotApplicationVersion extends ResourceAttributes {
  Type: 'AWS::RoboMaker::RobotApplicationVersion'
  Properties: {
    /**
     * - The application information for the robot application.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=,.@-]+)*`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robotapplicationversion.html#cfn-robomaker-robotapplicationversion-application */
    Application: string | Intrinsic
    /**
     * - The current revision id for the robot application. If you provide a value and it matches the latest revision ID, a new version will be created.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9_.\-]*`
     * - _Minimum_: `1`
     * - _Maximum_: `40`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robotapplicationversion.html#cfn-robomaker-robotapplicationversion-currentrevisionid */
    CurrentRevisionId?: string | Intrinsic
  }
}
