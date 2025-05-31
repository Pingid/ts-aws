import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Creates and starts a deployment to deploy an application into a runtime environment.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-deployment.html */

export interface M2Deployment extends ResourceAttributes {
    "Type": "AWS::M2::Deployment";
    "Properties": {
        /**
         * - The unique identifier of the application.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^\S{1,80}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-deployment.html#cfn-m2-deployment-applicationid */
        "ApplicationId": string | Intrinsic;
        /**
         * - The version of the application.
         * - _Required_: Yes
         * - _Type_: Integer
         * - _Minimum_: `1`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-deployment.html#cfn-m2-deployment-applicationversion */
        "ApplicationVersion": number | Intrinsic;
        /**
         * - The unique identifier of the runtime environment.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^\S{1,80}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-m2-deployment.html#cfn-m2-deployment-environmentid */
        "EnvironmentId": string | Intrinsic;
    };
}