import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Attaches a resource-based policy to a data stream or registered consumer. If you are using an identity other than the root user of the AWS account that owns the resource, the calling identity must have the `PutResourcePolicy` permissions on the specified Kinesis Data Streams resource and belong to the owner's account in order to use this operation. If you don't have `PutResourcePolicy` permissions, Amazon Kinesis Data Streams returns a `403 Access Denied error`. If you receive a `ResourceNotFoundException`, check to see if you passed a valid stream or consumer resource.
 * Request patterns can be one of the following:
 * *   Data stream pattern: `arn:aws.*:kinesis:.*:\d{12}:.*stream/\S+`
 *     
 * *   Consumer pattern: `^(arn):aws.*:kinesis:.*:\d{12}:.*stream\/[a-zA-Z0-9_.-]+\/consumer\/[a-zA-Z0-9_.-]+:[0-9]+`
 * For more information, see [Controlling Access to Amazon Kinesis Data Streams Resources Using IAM](https://docs.aws.amazon.com/streams/latest/dev/controlling-access.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-resourcepolicy.html */

export interface KinesisResourcePolicy extends ResourceAttributes {
    "Type": "AWS::Kinesis::ResourcePolicy";
    "Properties": {
        /**
         * - This is the name for the resource policy.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `arn:aws.*:kinesis:.*:\d{12}:stream/\S+`
         * - _Minimum_: `1`
         * - _Maximum_: `2048`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-resourcepolicy.html#cfn-kinesis-resourcepolicy-resourcearn */
        "ResourceArn": string | Intrinsic;
        /**
         * - This is the description for the resource policy.
         * - _Required_: Yes
         * - _Type_: Json
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-resourcepolicy.html#cfn-kinesis-resourcepolicy-resourcepolicy */
        "ResourcePolicy": any | Intrinsic;
    };
}