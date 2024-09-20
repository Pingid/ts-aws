import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Information about the integration of DevOps Guru with CloudWatch log groups for log anomaly detection.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsguru-loganomalydetectionintegration.html */

export interface DevOpsGuruLogAnomalyDetectionIntegration extends ResourceAttributes {
  Type: 'AWS::DevOpsGuru::LogAnomalyDetectionIntegration'
  Properties: {}
}
