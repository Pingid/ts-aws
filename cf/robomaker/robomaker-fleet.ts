import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * ###### Important
 * 
 * The following resource is now deprecated. This resource can no longer be provisioned via stack create or update operations, and should not be included in your stack templates.
 * 
 * We recommend migrating to AWS IoT Greengrass Version 2. For more information, see [Support Changes: May 2, 2022](https://docs.aws.amazon.com/robomaker/latest/dg/chapter-support-policy.html#software-support-policy-may2022) in the _AWS RoboMaker Developer Guide_.
 * The `AWS::RoboMaker::Fleet` resource creates an AWS RoboMaker fleet. Fleets contain robots and can receive deployments.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-fleet.html */

export interface RoboMakerFleet extends ResourceAttributes {
    "Type": "AWS::RoboMaker::Fleet";
    "Properties": {
        /**
         * - The name of the fleet.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[a-zA-Z0-9_\-]{1,255}$`
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-fleet.html#cfn-robomaker-fleet-name */
        "Name"?: string | Intrinsic;
        /**
         * - The list of all tags added to the fleet.
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `^[a-zA-Z0-9-]{1,128}$`
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-robomaker-fleet.html#cfn-robomaker-fleet-tags */
        "Tags"?: Record<string, string | Intrinsic>;
    };
}