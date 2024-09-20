import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * ###### Important
 *
 * The following resource is now deprecated. This resource can no longer be provisioned via stack create or update operations, and should not be included in your stack templates.
 *
 * We recommend migrating to AWS IoT Greengrass Version 2. For more information, see [Support Changes: May 2, 2022](https://docs.aws.amazon.com/robomaker/latest/dg/chapter-support-policy.html#software-support-policy-may2022) in the _AWS RoboMaker Developer Guide_.
 * The `AWS::RoboMaker::RobotApplication` resource creates an AWS RoboMaker robot.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robot.html */

export interface RoboMakerRobot extends ResourceAttributes {
  Type: 'AWS::RoboMaker::Robot'
  Properties: {
    /**
     * - The architecture of the robot.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `X86_64 | ARM64 | ARMHF`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robot.html#cfn-robomaker-robot-architecture */
    Architecture: string | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of the fleet to which the robot will be registered.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1224`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robot.html#cfn-robomaker-robot-fleet */
    Fleet?: string | Intrinsic
    /**
     * - The Greengrass group associated with the robot.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1224`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robot.html#cfn-robomaker-robot-greengrassgroupid */
    GreengrassGroupId: string | Intrinsic
    /**
     * - The name of the robot.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robot.html#cfn-robomaker-robot-name */
    Name?: string | Intrinsic
    /**
     * - A map that contains tag keys and tag values that are attached to the robot.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `^[a-zA-Z0-9-]{1,128}$`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robot.html#cfn-robomaker-robot-tags */
    Tags?: Record<string, string | Intrinsic>
  }
}
