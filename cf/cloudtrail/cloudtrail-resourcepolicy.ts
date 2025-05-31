import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Attaches a resource-based permission policy to a CloudTrail event data store, dashboard, or channel. For more information about resource-based policies, see [CloudTrail resource-based policy examples](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/security_iam_resource-based-policy-examples.html) in the _CloudTrail User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-resourcepolicy.html */

export interface CloudTrailResourcePolicy extends ResourceAttributes {
    "Type": "AWS::CloudTrail::ResourcePolicy";
    "Properties": {
        /**
         * - The Amazon Resource Name (ARN) of the CloudTrail event data store, dashboard, or channel attached to the resource-based policy.
         * - Example event data store ARN format: `arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE`
         * - Example dashboard ARN format: `arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash`
         * - Example channel ARN format: `arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890`
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9._/\-:]+$`
         * - _Minimum_: `3`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-resourcepolicy.html#cfn-cloudtrail-resourcepolicy-resourcearn */
        "ResourceArn": string | Intrinsic;
        /**
         * - A JSON-formatted string for an AWS resource-based policy.
         * - For example resource-based policies, see [CloudTrail resource-based policy examples](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/security_iam_resource-based-policy-examples.html) in the _CloudTrail User Guide_.
         * - _Required_: Yes
         * - _Type_: Json
         * - _Minimum_: `1`
         * - _Maximum_: `8192`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-resourcepolicy.html#cfn-cloudtrail-resourcepolicy-resourcepolicy */
        "ResourcePolicy": any | Intrinsic;
    };
}