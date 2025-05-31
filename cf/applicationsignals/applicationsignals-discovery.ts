import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Enables this AWS account to be able to use CloudWatch Application Signals by creating the `AWSServiceRoleForCloudWatchApplicationSignals` service-linked role. This service-linked role has the following permissions:
 * *   `xray:GetServiceGraph`
 *     
 * *   `logs:StartQuery`
 *     
 * *   `logs:GetQueryResults`
 *     
 * *   `cloudwatch:GetMetricData`
 *     
 * *   `cloudwatch:ListMetrics`
 *     
 * *   `tag:GetResources`
 *     
 * *   `autoscaling:DescribeAutoScalingGroups`
 * After completing this step, you still need to instrument your Java and Python applications to send data to Application Signals. For more information, see [Enabling Application Signals](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Signals-Enable.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationsignals-discovery.html */

export interface ApplicationSignalsDiscovery extends ResourceAttributes {
    "Type": "AWS::ApplicationSignals::Discovery";
    "Properties": {};
}