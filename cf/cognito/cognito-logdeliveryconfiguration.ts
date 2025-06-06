import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Configuration for the CloudWatch log group destination of user pool detailed activity logging, or of user activity log export with advanced security features.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-logdeliveryconfiguration.html */

export interface CloudWatchLogsConfiguration {
    /**
     * - The Amazon Resource Name (arn) of a CloudWatch Logs log group where your user pool sends logs. The log group must not be encrypted with AWS Key Management Service and must be in the same AWS account as your user pool.
     * - To send logs to log groups with a resource policy of a size greater than 5120 characters, configure a log group with a path that starts with `/aws/vendedlogs`. For more information, see [Enabling logging from certain AWS services](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html).
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:[\w+=/,.@-]+:[\w+=/,.@-]+:([\w+=/,.@-]*)?:[0-9]+:[\w+=/,.@-]+(:[\w+=/,.@-]+)?(:[\w+=/,.@-]+)?`
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-logdeliveryconfiguration.html#cfn-cognito-logdeliveryconfiguration-cloudwatchlogsconfiguration-loggrouparn */
    "LogGroupArn"?: string | Intrinsic;
}

/**
 * Configuration for the Amazon Data Firehose stream destination of user activity log export with threat protection.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-logdeliveryconfiguration.html */

export interface FirehoseConfiguration {
    /**
     * - The ARN of an Amazon Data Firehose stream that's the destination for threat protection log export.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:[\w+=/,.@-]+:[\w+=/,.@-]+:([\w+=/,.@-]*)?:[0-9]+:[\w+=/,.@-]+(:[\w+=/,.@-]+)?(:[\w+=/,.@-]+)?`
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-logdeliveryconfiguration.html#cfn-cognito-logdeliveryconfiguration-firehoseconfiguration-streamarn */
    "StreamArn"?: string | Intrinsic;
}

/**
 * Configuration for the Amazon S3 bucket destination of user activity log export with threat protection.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-logdeliveryconfiguration.html */

export interface S3Configuration {
    /**
     * - The ARN of an Amazon S3 bucket that's the destination for threat protection log export.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:[\w+=/,.@-]+:[\w+=/,.@-]+:::[\w+=/,.@-]+(:[\w+=/,.@-]+)?(:[\w+=/,.@-]+)?`
     * - _Minimum_: `3`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-logdeliveryconfiguration.html#cfn-cognito-logdeliveryconfiguration-s3configuration-bucketarn */
    "BucketArn"?: string | Intrinsic;
}

/**
 * The configuration of user event logs to an external AWS service like Amazon Data Firehose, Amazon S3, or Amazon CloudWatch Logs.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-logdeliveryconfiguration.html */

export interface LogConfiguration {
    /**
     * - Configuration for the CloudWatch log group destination of user pool detailed activity logging, or of user activity log export with advanced security features.
     * - _Required_: No
     * - _Type_: [CloudWatchLogsConfiguration](./aws-properties-cognito-logdeliveryconfiguration-cloudwatchlogsconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-logdeliveryconfiguration.html#cfn-cognito-logdeliveryconfiguration-logconfiguration-cloudwatchlogsconfiguration */
    "CloudWatchLogsConfiguration"?: CloudWatchLogsConfiguration;
    /**
     * - The source of events that your user pool sends for logging. To send error-level logs about user notification activity, set to `userNotification`. To send info-level logs about threat-protection user activity in user pools with the Plus feature plan, set to `userAuthEvents`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `userNotification | userAuthEvents`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-logdeliveryconfiguration.html#cfn-cognito-logdeliveryconfiguration-logconfiguration-eventsource */
    "EventSource"?: string | Intrinsic;
    /**
     * - Configuration for the Amazon Data Firehose stream destination of user activity log export with threat protection.
     * - _Required_: No
     * - _Type_: [FirehoseConfiguration](./aws-properties-cognito-logdeliveryconfiguration-firehoseconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-logdeliveryconfiguration.html#cfn-cognito-logdeliveryconfiguration-logconfiguration-firehoseconfiguration */
    "FirehoseConfiguration"?: FirehoseConfiguration;
    /**
     * - The `errorlevel` selection of logs that a user pool sends for detailed activity logging. To send `userNotification` activity with [information about message delivery](https://docs.aws.amazon.com/cognito/latest/developerguide/exporting-quotas-and-usage.html), choose `ERROR` with `CloudWatchLogsConfiguration`. To send `userAuthEvents` activity with user logs from threat protection with the Plus feature plan, choose `INFO` with one of `CloudWatchLogsConfiguration`, `FirehoseConfiguration`, or `S3Configuration`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ERROR | INFO`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-logdeliveryconfiguration.html#cfn-cognito-logdeliveryconfiguration-logconfiguration-loglevel */
    "LogLevel"?: string | Intrinsic;
    /**
     * - Configuration for the Amazon S3 bucket destination of user activity log export with threat protection.
     * - _Required_: No
     * - _Type_: [S3Configuration](./aws-properties-cognito-logdeliveryconfiguration-s3configuration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-logdeliveryconfiguration.html#cfn-cognito-logdeliveryconfiguration-logconfiguration-s3configuration */
    "S3Configuration"?: S3Configuration;
}

/**
 * Sets up or modifies the logging configuration of a user pool. User pools can export user notification logs and, when threat protection is active, user-activity logs. For more information, see [Exporting user pool logs](https://docs.aws.amazon.com/cognito/latest/developerguide/exporting-quotas-and-usage.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-logdeliveryconfiguration.html */

export interface CognitoLogDeliveryConfiguration extends ResourceAttributes {
    "Type": "AWS::Cognito::LogDeliveryConfiguration";
    "Properties": {
        /**
         * - A logging destination of a user pool. User pools can have multiple logging destinations for message-delivery and user-activity logs.
         * - _Required_: No
         * - _Type_: Array of [LogConfiguration](./aws-properties-cognito-logdeliveryconfiguration-logconfiguration.html)
         * - _Minimum_: `0`
         * - _Maximum_: `2`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-logdeliveryconfiguration.html#cfn-cognito-logdeliveryconfiguration-logconfigurations */
        "LogConfigurations"?: LogConfiguration[];
        /**
         * - The ID of the user pool where you configured logging.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[\w-]+_[0-9a-zA-Z]+`
         * - _Minimum_: `1`
         * - _Maximum_: `55`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-logdeliveryconfiguration.html#cfn-cognito-logdeliveryconfiguration-userpoolid */
        "UserPoolId": string | Intrinsic;
    };
}