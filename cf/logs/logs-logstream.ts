import type { Intrinsic } from '../intrinsic/index.js' /**
 * The `AWS::Logs::LogStream` resource specifies an Amazon CloudWatch Logs log stream in a specific log group. A log stream represents the sequence of events coming from an application instance or resource that you are monitoring.
 * There is no limit on the number of log streams that you can create for a log group.
 * You must use the following guidelines when naming a log stream:
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-logstream.html */

export interface LogsLogStream {
  Type: 'AWS::Logs::LogStream'
  Properties: {
    /**
     * - The name of the log group where the log stream is created.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\.\-_/#A-Za-z0-9]+`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-logstream.html#cfn-logs-logstream-loggroupname */
    LogGroupName: string | Intrinsic
    /**
     * - The name of the log stream. The name must be unique within the log group.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[^:*]*`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-logstream.html#cfn-logs-logstream-logstreamname */
    LogStreamName?: string | Intrinsic
  }
}
