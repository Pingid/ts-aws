import type { Intrinsic } from '../intrinsic/index.js' /**
 * Contains information about a Lambda configuration.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-alert.html */

export interface LambdaConfiguration {
  /**
   * - The ARN of the Lambda function.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:([a-z\d-]+):.*:.*:.*:.+`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-alert.html#cfn-lookoutmetrics-alert-lambdaconfiguration-lambdaarn */
  LambdaArn: string | Intrinsic
  /**
   * - The ARN of an IAM role that has permission to invoke the Lambda function.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:([a-z\d-]+):.*:.*:.*:.+`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-alert.html#cfn-lookoutmetrics-alert-lambdaconfiguration-rolearn */
  RoleArn: string | Intrinsic
}

/**
 * Contains information about the SNS topic to which you want to send your alerts and the IAM role that has access to that topic.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-alert.html */

export interface SNSConfiguration {
  /**
   * - The ARN of the IAM role that has access to the target SNS topic.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:([a-z\d-]+):.*:.*:.*:.+`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-alert.html#cfn-lookoutmetrics-alert-snsconfiguration-rolearn */
  RoleArn: string | Intrinsic
  /**
   * - The ARN of the target SNS topic.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:([a-z\d-]+):.*:.*:.*:.+`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-alert.html#cfn-lookoutmetrics-alert-snsconfiguration-snstopicarn */
  SnsTopicArn: string | Intrinsic
}

/**
 * A configuration that specifies the action to perform when anomalies are detected.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-alert.html */

export interface Action {
  /**
   * - A configuration for an AWS Lambda channel.
   * - _Required_: No
   * - _Type_: [LambdaConfiguration](./aws-properties-lookoutmetrics-alert-lambdaconfiguration.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-alert.html#cfn-lookoutmetrics-alert-action-lambdaconfiguration */
  LambdaConfiguration?: LambdaConfiguration
  /**
   * - A configuration for an Amazon SNS channel.
   * - _Required_: No
   * - _Type_: [SNSConfiguration](./aws-properties-lookoutmetrics-alert-snsconfiguration.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-alert.html#cfn-lookoutmetrics-alert-action-snsconfiguration */
  SNSConfiguration?: SNSConfiguration
}

/**
 * The `AWS::LookoutMetrics::Alert` type creates an alert for an anomaly detector.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-alert.html */

export interface LookoutMetricsAlert {
  Type: 'AWS::LookoutMetrics::Alert'
  Properties: {
    /**
     * - Action that will be triggered when there is an alert.
     * - _Required_: Yes
     * - _Type_: [Action](./aws-properties-lookoutmetrics-alert-action.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-alert.html#cfn-lookoutmetrics-alert-action */
    Action: Action
    /**
     * - A description of the alert.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*\S.*`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-alert.html#cfn-lookoutmetrics-alert-alertdescription */
    AlertDescription?: string | Intrinsic
    /**
     * - The name of the alert.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9\-_]*`
     * - _Minimum_: `1`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-alert.html#cfn-lookoutmetrics-alert-alertname */
    AlertName?: string | Intrinsic
    /**
     * - An integer from 0 to 100 specifying the alert sensitivity threshold.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `100`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-alert.html#cfn-lookoutmetrics-alert-alertsensitivitythreshold */
    AlertSensitivityThreshold: number | Intrinsic
    /**
     * - The ARN of the detector to which the alert is attached.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `arn:([a-z\d-]+):.*:.*:.*:.+`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutmetrics-alert.html#cfn-lookoutmetrics-alert-anomalydetectorarn */
    AnomalyDetectorArn: string | Intrinsic
  }
}
