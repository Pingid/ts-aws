import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `AWS::RoboMaker::SimulationApplicationVersion` resource creates a version of an AWS RoboMaker simulation application.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplicationversion.html */

export interface RoboMakerSimulationApplicationVersion extends ResourceAttributes {
    "Type": "AWS::RoboMaker::SimulationApplicationVersion";
    "Properties": {
        /**
         * - The application information for the simulation application.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `arn:[\w+=/,.@-]+:[\w+=/,.@-]+:[\w+=/,.@-]*:[0-9]*:[\w+=,.@-]+(/[\w+=,.@-]+)*`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplicationversion.html#cfn-robomaker-simulationapplicationversion-application */
        "Application": string | Intrinsic;
        /**
         * - The current revision id for the simulation application. If you provide a value and it matches the latest revision ID, a new version will be created.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[a-zA-Z0-9_.\-]*`
         * - _Minimum_: `1`
         * - _Maximum_: `40`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-simulationapplicationversion.html#cfn-robomaker-simulationapplicationversion-currentrevisionid */
        "CurrentRevisionId"?: string | Intrinsic;
    };
}