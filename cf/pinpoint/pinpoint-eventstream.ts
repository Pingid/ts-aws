import type { Intrinsic } from '../intrinsic/index.js' /**
 * Creates a new event stream for an application or updates the settings of an existing event stream for an application.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-eventstream.html */

export interface PinpointEventStream {
  Type: 'AWS::Pinpoint::EventStream'
  Properties: {
    /**
     * - The unique identifier for the Amazon Pinpoint application that you want to export data from.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-eventstream.html#cfn-pinpoint-eventstream-applicationid */
    ApplicationId: string | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of the Amazon Kinesis Data Stream or Amazon Data Firehose delivery stream that you want to publish event data to.
     * - For a Kinesis Data Stream, the ARN format is: `` arn:aws:kinesis:`region`:`account-id`:stream/`stream_name` ``
     * - For a Firehose delivery stream, the ARN format is: `` arn:aws:firehose:`region`:`account-id`:deliverystream/`stream_name` ``
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-eventstream.html#cfn-pinpoint-eventstream-destinationstreamarn */
    DestinationStreamArn: string | Intrinsic
    /**
     * - The AWS Identity and Access Management (IAM) role that authorizes Amazon Pinpoint to publish event data to the stream in your AWS account.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-eventstream.html#cfn-pinpoint-eventstream-rolearn */
    RoleArn: string | Intrinsic
  }
}
