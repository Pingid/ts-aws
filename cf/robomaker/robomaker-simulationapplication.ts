import type { Intrinsic } from '../intrinsic/index.js' /**
 * Information about a rendering engine.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplication.html */

export interface RenderingEngine {
  /**
   * - The name of the rendering engine.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `OGRE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplication.html#cfn-robomaker-simulationapplication-renderingengine-name */
  Name: string | Intrinsic
  /**
   * - The version of the rendering engine.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `1.x`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplication.html#cfn-robomaker-simulationapplication-renderingengine-version */
  Version: string | Intrinsic
}

/**
 * Information about a robot software suite.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplication.html */

export interface RobotSoftwareSuite {
  /**
   * - The name of the robot software suite. `General` is the only supported value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `ROS | ROS2 | General`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplication.html#cfn-robomaker-simulationapplication-robotsoftwaresuite-name */
  Name: string | Intrinsic
  /**
   * - The version of the robot software suite. Not applicable for General software suite.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `Kinetic | Melodic | Dashing | Foxy`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplication.html#cfn-robomaker-simulationapplication-robotsoftwaresuite-version */
  Version?: string | Intrinsic
}

/**
 * Information about a simulation software suite.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplication.html */

export interface SimulationSoftwareSuite {
  /**
   * - The name of the simulation software suite. `SimulationRuntime` is the only supported value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `Gazebo | RosbagPlay | SimulationRuntime`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplication.html#cfn-robomaker-simulationapplication-simulationsoftwaresuite-name */
  Name: string | Intrinsic
  /**
   * - The version of the simulation software suite. Not applicable for `SimulationRuntime`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `7 | 9 | 11 | Kinetic | Melodic | Dashing | Foxy`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplication.html#cfn-robomaker-simulationapplication-simulationsoftwaresuite-version */
  Version?: string | Intrinsic
}

/**
 * Information about a source configuration.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplication.html */

export interface SourceConfig {
  /**
   * - The target processor architecture for the application.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `X86_64 | ARM64 | ARMHF`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplication.html#cfn-robomaker-simulationapplication-sourceconfig-architecture */
  Architecture: string | Intrinsic
  /**
   * - The Amazon S3 bucket name.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[a-z0-9][a-z0-9.\-]*[a-z0-9]`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplication.html#cfn-robomaker-simulationapplication-sourceconfig-s3bucket */
  S3Bucket: string | Intrinsic
  /**
   * - The s3 object key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplication.html#cfn-robomaker-simulationapplication-sourceconfig-s3key */
  S3Key: string | Intrinsic
}

/**
 * The `AWS::RoboMaker::SimulationApplication` resource creates an AWS RoboMaker simulation application.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplication.html */

export interface RoboMakerSimulationApplication {
  Type: 'AWS::RoboMaker::SimulationApplication'
  Properties: {
    /**
     * - The current revision id.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplication.html#cfn-robomaker-simulationapplication-currentrevisionid */
    CurrentRevisionId?: string | Intrinsic
    /**
     * - The environment of the simulation application.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplication.html#cfn-robomaker-simulationapplication-environment */
    Environment?: string | Intrinsic
    /**
     * - The name of the simulation application.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9_\-]*`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplication.html#cfn-robomaker-simulationapplication-name */
    Name?: string | Intrinsic
    /**
     * - The rendering engine for the simulation application.
     * - _Required_: No
     * - _Type_: [RenderingEngine](./aws-properties-robomaker-simulationapplication-renderingengine.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplication.html#cfn-robomaker-simulationapplication-renderingengine */
    RenderingEngine?: RenderingEngine
    /**
     * - The robot software suite used by the simulation application.
     * - _Required_: Yes
     * - _Type_: [RobotSoftwareSuite](./aws-properties-robomaker-simulationapplication-robotsoftwaresuite.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplication.html#cfn-robomaker-simulationapplication-robotsoftwaresuite */
    RobotSoftwareSuite: RobotSoftwareSuite
    /**
     * - The simulation software suite used by the simulation application.
     * - _Required_: Yes
     * - _Type_: [SimulationSoftwareSuite](./aws-properties-robomaker-simulationapplication-simulationsoftwaresuite.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplication.html#cfn-robomaker-simulationapplication-simulationsoftwaresuite */
    SimulationSoftwareSuite: SimulationSoftwareSuite
    /**
     * - The sources of the simulation application.
     * - _Required_: No
     * - _Type_: Array of [SourceConfig](./aws-properties-robomaker-simulationapplication-sourceconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplication.html#cfn-robomaker-simulationapplication-sources */
    Sources?: SourceConfig[]
    /**
     * - A map that contains tag keys and tag values that are attached to the simulation application.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `^[a-zA-Z0-9-]{1,128}$`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplication.html#cfn-robomaker-simulationapplication-tags */
    Tags?: Record<string, string | Intrinsic>
  }
}
