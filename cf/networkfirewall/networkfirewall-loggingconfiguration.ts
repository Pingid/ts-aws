import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Defines where AWS Network Firewall sends logs for the firewall for one log type. This is used in [AWS::NetworkFirewall::LoggingConfiguration](./aws-resource-networkfirewall-loggingconfiguration.html). You can send each type of log to an Amazon S3 bucket, a CloudWatch log group, or a Kinesis Data Firehose delivery stream.
 * Network Firewall generates logs for stateful rule groups. You can save alert and flow log types. The stateful rules engine records flow logs for all network traffic that it receives. It records alert logs for traffic that matches stateful rules that have the rule action set to `DROP` or `ALERT`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-loggingconfiguration.html */

export interface LogDestinationConfig {
    /**
     * - The named location for the logs, provided in a key:value mapping that is specific to the chosen destination type.
     * - _Required_: Yes
     * - _Type_: Object of String
     * - _Pattern_: `^[0-9A-Za-z.\-_@\/]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-loggingconfiguration.html#cfn-networkfirewall-loggingconfiguration-logdestinationconfig-logdestination */
    "LogDestination": Record<string, string | Intrinsic>;
    /**
     * - The type of storage destination to send these logs to. You can send logs to an Amazon S3 bucket, a CloudWatch log group, or a Firehose delivery stream.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `S3 | CloudWatchLogs | KinesisDataFirehose`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-loggingconfiguration.html#cfn-networkfirewall-loggingconfiguration-logdestinationconfig-logdestinationtype */
    "LogDestinationType": string | Intrinsic;
    /**
     * - The type of log to record. You can record the following types of logs from your Network Firewall stateful engine.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ALERT | FLOW | TLS`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-loggingconfiguration.html#cfn-networkfirewall-loggingconfiguration-logdestinationconfig-logtype */
    "LogType": string | Intrinsic;
}

/**
 * Defines how AWS Network Firewall performs logging for a [AWS::NetworkFirewall::Firewall](./aws-resource-networkfirewall-firewall.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-loggingconfiguration.html */

export interface LoggingConfiguration {
    /**
     * - Defines the logging destinations for the logs for a firewall. Network Firewall generates logs for stateful rule groups.
     * - _Required_: Yes
     * - _Type_: Array of [LogDestinationConfig](./aws-properties-networkfirewall-loggingconfiguration-logdestinationconfig.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-loggingconfiguration.html#cfn-networkfirewall-loggingconfiguration-loggingconfiguration-logdestinationconfigs */
    "LogDestinationConfigs": LogDestinationConfig[];
}

/**
 * Use the AWS::NetworkFirewall::LoggingConfiguration to define the destinations and logging options for an [AWS::NetworkFirewall::Firewall](./aws-resource-networkfirewall-firewall.html).
 * You must change the logging configuration by changing one `LogDestinationConfig` setting at a time in your `LogDestinationConfigs`.
 * You can make only one of the following changes to your AWS::NetworkFirewall::LoggingConfiguration resource:
 * *   Create a new log destination object by adding a single `LogDestinationConfig` array element to `LogDestinationConfigs`.
 *     
 * *   Delete a log destination object by removing a single `LogDestinationConfig` array element from `LogDestinationConfigs`.
 *     
 * *   Change the `LogDestination` setting in a single `LogDestinationConfig` array element.
 * You can't change the `LogDestinationType` or `LogType` in a `LogDestinationConfig`. To change these settings, delete the existing `LogDestinationConfig` object and create a new one, in two separate modifications.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-loggingconfiguration.html */

export interface NetworkFirewallLoggingConfiguration extends ResourceAttributes {
    "Type": "AWS::NetworkFirewall::LoggingConfiguration";
    "Properties": {
        /**
         * - The Amazon Resource Name (ARN) of the [AWS::NetworkFirewall::Firewall](./aws-resource-networkfirewall-firewall.html) that the logging configuration is associated with. You can't change the firewall specification after you create the logging configuration.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:aws.*$`
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-loggingconfiguration.html#cfn-networkfirewall-loggingconfiguration-firewallarn */
        "FirewallArn": string | Intrinsic;
        /**
         * - The name of the firewall that the logging configuration is associated with. You can't change the firewall specification after you create the logging configuration.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9-]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-loggingconfiguration.html#cfn-networkfirewall-loggingconfiguration-firewallname */
        "FirewallName"?: string | Intrinsic;
        /**
         * - Defines how AWS Network Firewall performs logging for a [AWS::NetworkFirewall::Firewall](./aws-resource-networkfirewall-firewall.html).
         * - _Required_: Yes
         * - _Type_: [LoggingConfiguration](./aws-properties-networkfirewall-loggingconfiguration-loggingconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-loggingconfiguration.html#cfn-networkfirewall-loggingconfiguration-loggingconfiguration */
        "LoggingConfiguration": LoggingConfiguration;
    };
}