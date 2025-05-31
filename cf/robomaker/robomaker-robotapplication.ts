import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Information about a source configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robotapplication.html */

export interface SourceConfig {
    /**
     * - The target processor architecture for the application.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `X86_64 | ARM64 | ARMHF`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robotapplication.html#cfn-robomaker-robotapplication-sourceconfig-architecture */
    "Architecture": string | Intrinsic;
    /**
     * - The Amazon S3 bucket name.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-z0-9][a-z0-9.\-]*[a-z0-9]`
     * - _Minimum_: `3`
     * - _Maximum_: `63`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robotapplication.html#cfn-robomaker-robotapplication-sourceconfig-s3bucket */
    "S3Bucket": string | Intrinsic;
    /**
     * - The s3 object key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robotapplication.html#cfn-robomaker-robotapplication-sourceconfig-s3key */
    "S3Key": string | Intrinsic;
}

/**
 * Information about a robot software suite.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robotapplication.html */

export interface RobotSoftwareSuite {
    /**
     * - The name of the robot software suite. `General` is the only supported value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ROS | ROS2 | General`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robotapplication.html#cfn-robomaker-robotapplication-robotsoftwaresuite-name */
    "Name": string | Intrinsic;
    /**
     * - The version of the robot software suite. Not applicable for General software suite.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `Kinetic | Melodic | Dashing`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robotapplication.html#cfn-robomaker-robotapplication-robotsoftwaresuite-version */
    "Version"?: string | Intrinsic;
}

/**
 * The `AWS::RoboMaker::RobotApplication` resource creates an AWS RoboMaker robot application.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robotapplication.html */

export interface RoboMakerRobotApplication extends ResourceAttributes {
    "Type": "AWS::RoboMaker::RobotApplication";
    "Properties": {
        /**
         * - The current revision id.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `40`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robotapplication.html#cfn-robomaker-robotapplication-currentrevisionid */
        "CurrentRevisionId"?: string | Intrinsic;
        /**
         * - The environment of the robot application.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robotapplication.html#cfn-robomaker-robotapplication-environment */
        "Environment"?: string | Intrinsic;
        /**
         * - The name of the robot application.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robotapplication.html#cfn-robomaker-robotapplication-name */
        "Name"?: string | Intrinsic;
        /**
         * - The robot software suite used by the robot application.
         * - _Required_: Yes
         * - _Type_: [RobotSoftwareSuite](./aws-properties-robomaker-robotapplication-robotsoftwaresuite.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robotapplication.html#cfn-robomaker-robotapplication-robotsoftwaresuite */
        "RobotSoftwareSuite": RobotSoftwareSuite;
        /**
         * - The sources of the robot application.
         * - _Required_: No
         * - _Type_: Array of [SourceConfig](./aws-properties-robomaker-robotapplication-sourceconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robotapplication.html#cfn-robomaker-robotapplication-sources */
        "Sources"?: SourceConfig[];
        /**
         * - A map that contains tag keys and tag values that are attached to the robot application.
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `^[a-zA-Z0-9-]{1,128}$`
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-robotapplication.html#cfn-robomaker-robotapplication-tags */
        "Tags"?: Record<string, string | Intrinsic>;
    };
}