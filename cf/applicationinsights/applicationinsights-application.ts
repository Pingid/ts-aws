import type { Intrinsic } from '../intrinsic/index.js' /**
 * The `AWS::ApplicationInsights::Application CustomComponent` property type describes a custom component by grouping similar standalone instances to monitor.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html */

export interface CustomComponent {
  /**
   * - The name of the component.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[\d\w\-_.+]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-customcomponent-componentname */
  ComponentName: string | Intrinsic
  /**
   * - The list of resource ARNs that belong to the component.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Maximum_: `300`
   * - _Minimum_: `20 | 1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-customcomponent-resourcelist */
  ResourceList: (string | Intrinsic)[]
}

/**
 * An object that defines the tags associated with an application. A _tag_ is a label that you optionally define and associate with an application. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria.
 * Each tag consists of a required _tag key_ and an associated _tag value_, both of which you define. A tag key is a general label that acts as a category for a more specific tag value. A tag value acts as a descriptor within a tag key. A tag key can contain as many as 128 characters. A tag value can contain as many as 256 characters. The characters can be Unicode letters, digits, white space, or one of the following symbols: \_ . : / = + -. The following additional restrictions apply to tags:
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html */

export interface Tag {
  /**
   * - One part of a key-value pair that defines a tag. The maximum length of a tag key is 128 characters. The minimum length is 1 character.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-tag-key */
  Key: string | Intrinsic
  /**
   * - The optional part of a key-value pair that defines a tag. The maximum length of a tag value is 256 characters. The minimum length is 0 characters. If you don't want an application to have a specific tag value, don't specify a value for this parameter.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-tag-value */
  Value: string | Intrinsic
}

/**
 * The `AWS::ApplicationInsights::Application LogPattern` property type specifies an object that defines the log patterns that belong to a `LogPatternSet`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html */

export interface LogPattern {
  /**
   * - A regular expression that defines the log pattern. A log pattern can contain up to 50 characters, and it cannot be empty.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-logpattern-pattern */
  Pattern: string | Intrinsic
  /**
   * - The name of the log pattern. A log pattern name can contain up to 50 characters, and it cannot be empty. The characters can be Unicode letters, digits, or one of the following symbols: period, dash, underscore.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[a-zA-Z0-9.-_]*`
   * - _Minimum_: `1`
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-logpattern-patternname */
  PatternName: string | Intrinsic
  /**
   * - The rank of the log pattern.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-logpattern-rank */
  Rank: number | Intrinsic
}

/**
 * The `AWS::ApplicationInsights::Application AlarmMetric` property type defines a metric to monitor for the component.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html */

export interface AlarmMetric {
  /**
   * - The name of the metric to be monitored for the component. For metrics supported by Application Insights, see [Logs and metrics supported by Amazon CloudWatch Application Insights](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/appinsights-logs-and-metrics.html).
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-alarmmetric-alarmmetricname */
  AlarmMetricName: string | Intrinsic
}

/**
 * The `AWS::ApplicationInsights::Application Alarm` property type defines a CloudWatch alarm to be monitored for the component.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html */

export interface Alarm {
  /**
   * - The name of the CloudWatch alarm to be monitored for the component.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-alarm-alarmname */
  AlarmName: string | Intrinsic
  /**
   * - Indicates the degree of outage when the alarm goes off.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `HIGH | MEDIUM | LOW`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-alarm-severity */
  Severity?: string | Intrinsic
}

/**
 * The `AWS::ApplicationInsights::Application HAClusterPrometheusExporter` property type defines the HA cluster Prometheus Exporter settings. For more information, see the [component configuration](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/component-config-sections.html#component-configuration-prometheus) in the CloudWatch Application Insights documentation.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html */

export interface HAClusterPrometheusExporter {
  /**
   * - The target port to which Prometheus sends metrics. If not specified, the default port 9668 is used.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-haclusterprometheusexporter-prometheusport */
  PrometheusPort?: string | Intrinsic
}

/**
 * The `AWS::ApplicationInsights::Application HANAPrometheusExporter` property type defines the HANA DB Prometheus Exporter settings. For more information, see the [component configuration](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/component-config-sections.html#component-configuration-prometheus) in the CloudWatch Application Insights documentation.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html */

export interface HANAPrometheusExporter {
  /**
   * - Designates whether you agree to install the HANA DB client.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-hanaprometheusexporter-agreetoinstallhanadbclient */
  AgreeToInstallHANADBClient: boolean | Intrinsic
  /**
   * - The HANA database port by which the exporter will query HANA metrics.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-hanaprometheusexporter-hanaport */
  HANAPort: string | Intrinsic
  /**
   * - The AWS Secrets Manager secret that stores HANA monitoring user credentials. The HANA Prometheus exporter uses these credentials to connect to the database and query HANA metrics.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-hanaprometheusexporter-hanasecretname */
  HANASecretName: string | Intrinsic
  /**
   * - The three-character SAP system ID (SID) of the SAP HANA system.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-hanaprometheusexporter-hanasid */
  HANASID: string | Intrinsic
  /**
   * - The target port to which Prometheus sends metrics. If not specified, the default port 9668 is used.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-hanaprometheusexporter-prometheusport */
  PrometheusPort?: string | Intrinsic
}

/**
 * The `AWS::ApplicationInsights::Application JMXPrometheusExporter` property type defines the JMXPrometheus Exporter configuration. For more information, see the [component configuration](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/component-config-sections.html#component-configuration-prometheus) in the CloudWatch Application Insights documentation.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html */

export interface JMXPrometheusExporter {
  /**
   * - The host and port to connect to through remote JMX. Only one of `jmxURL` and `hostPort` can be specified.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-jmxprometheusexporter-hostport */
  HostPort?: string | Intrinsic
  /**
   * - The complete JMX URL to connect to.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-jmxprometheusexporter-jmxurl */
  JMXURL?: string | Intrinsic
  /**
   * - The target port to send Prometheus metrics to. If not specified, the default port `9404` is used.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-jmxprometheusexporter-prometheusport */
  PrometheusPort?: string | Intrinsic
}

/**
 * The `AWS::ApplicationInsights::Application Log` property type specifies a log to monitor for the component.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html */

export interface Log {
  /**
   * - The type of encoding of the logs to be monitored. The specified encoding should be included in the list of CloudWatch agent supported encodings. If not provided, CloudWatch Application Insights uses the default encoding type for the log type:
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `utf-8 | utf-16 | ascii`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-log-encoding */
  Encoding?: string | Intrinsic
  /**
   * - The CloudWatch log group name to be associated with the monitored log.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[\.\-_/#A-Za-z0-9]+`
   * - _Minimum_: `1`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-log-loggroupname */
  LogGroupName?: string | Intrinsic
  /**
   * - The path of the logs to be monitored. The log path must be an absolute Windows or Linux system file path. For more information, see [CloudWatch Agent Configuration File: Logs Section](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-Configuration-File-Details.html#CloudWatch-Agent-Configuration-File-Logssection).
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^([a-zA-Z]:\\[\\\S|*\S]?.*|/[^"']*)$`
   * - _Minimum_: `1`
   * - _Maximum_: `260`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-log-logpath */
  LogPath?: string | Intrinsic
  /**
   * - The log type decides the log patterns against which Application Insights analyzes the log. The log type is selected from the following: `SQL_SERVER`, `MYSQL`, `MYSQL_SLOW_QUERY`, `POSTGRESQL`, `ORACLE_ALERT`, `ORACLE_LISTENER`, `IIS`, `APPLICATION`, `WINDOWS_EVENTS`, `WINDOWS_EVENTS_ACTIVE_DIRECTORY`, `WINDOWS_EVENTS_DNS` , `WINDOWS_EVENTS_IIS` , `WINDOWS_EVENTS_SHAREPOINT`, `SQL_SERVER_ALWAYSON_AVAILABILITY_GROUP`, `SQL_SERVER_FAILOVER_CLUSTER_INSTANCE`, `STEP_FUNCTION`, `API_GATEWAY_ACCESS`, `API_GATEWAY_EXECUTION`, `SAP_HANA_LOGS`, `SAP_HANA_TRACE`, `SAP_HANA_HIGH_AVAILABILITY`, and `DEFAULT`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[A-Z][[A-Z]_]*$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-log-logtype */
  LogType: string | Intrinsic
  /**
   * - The log pattern set.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[a-zA-Z0-9.-_]*`
   * - _Minimum_: `1`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-log-patternset */
  PatternSet?: string | Intrinsic
}

/**
 * The `NetWeaverPrometheusExporter` property type specifies Property description not available. for an [AWS::ApplicationInsights::Application](./aws-resource-applicationinsights-application.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html */

export interface NetWeaverPrometheusExporter {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `2`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-netweaverprometheusexporter-instancenumbers */
  InstanceNumbers: (string | Intrinsic)[]
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-netweaverprometheusexporter-prometheusport */
  PrometheusPort?: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-netweaverprometheusexporter-sapsid */
  SAPSID: string | Intrinsic
}

/**
 * The `Process` property type specifies Property description not available. for an [AWS::ApplicationInsights::Application](./aws-resource-applicationinsights-application.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html */

export interface Process {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: Array of [AlarmMetric](./aws-properties-applicationinsights-application-alarmmetric.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-process-alarmmetrics */
  AlarmMetrics: AlarmMetric[]
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9_,-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-process-processname */
  ProcessName: string | Intrinsic
}

/**
 * The `SQLServerPrometheusExporter` property type specifies Property description not available. for an [AWS::ApplicationInsights::Application](./aws-resource-applicationinsights-application.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html */

export interface SQLServerPrometheusExporter {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-sqlserverprometheusexporter-prometheusport */
  PrometheusPort: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-sqlserverprometheusexporter-sqlsecretname */
  SQLSecretName: string | Intrinsic
}

/**
 * The `AWS::ApplicationInsights::Application WindowsEvent` property type specifies a Windows Event to monitor for the component.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html */

export interface WindowsEvent {
  /**
   * - The levels of event to log. You must specify each level to log. Possible values include `INFORMATION`, `WARNING`, `ERROR`, `CRITICAL`, and `VERBOSE`. This field is required for each type of Windows Event to log.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-windowsevent-eventlevels */
  EventLevels: (string | Intrinsic)[]
  /**
   * - The type of Windows Events to log, equivalent to the Windows Event log channel name. For example, System, Security, CustomEventName, and so on. This field is required for each type of Windows event to log.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9_ \\/-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `260`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-windowsevent-eventname */
  EventName: string | Intrinsic
  /**
   * - The CloudWatch log group name to be associated with the monitored log.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[\.\-_/#A-Za-z0-9]+`
   * - _Minimum_: `1`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-windowsevent-loggroupname */
  LogGroupName: string | Intrinsic
  /**
   * - The log pattern set.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[a-zA-Z0-9.-_]*`
   * - _Minimum_: `1`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-windowsevent-patternset */
  PatternSet?: string | Intrinsic
}

/**
 * The `AWS::ApplicationInsights::Application SubComponentConfigurationDetails` property type specifies the configuration settings of the sub-components.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html */

export interface SubComponentConfigurationDetails {
  /**
   * - A list of metrics to monitor for the component. All component types can use `AlarmMetrics`.
   * - _Required_: No
   * - _Type_: Array of [AlarmMetric](./aws-properties-applicationinsights-application-alarmmetric.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-subcomponentconfigurationdetails-alarmmetrics */
  AlarmMetrics?: AlarmMetric[]
  /**
   * - A list of logs to monitor for the component. Only Amazon EC2 instances can use `Logs`.
   * - _Required_: No
   * - _Type_: Array of [Log](./aws-properties-applicationinsights-application-log.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-subcomponentconfigurationdetails-logs */
  Logs?: Log[]
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: Array of [Process](./aws-properties-applicationinsights-application-process.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-subcomponentconfigurationdetails-processes */
  Processes?: Process[]
  /**
   * - A list of Windows Events to monitor for the component. Only Amazon EC2 instances running on Windows can use `WindowsEvents`.
   * - _Required_: No
   * - _Type_: Array of [WindowsEvent](./aws-properties-applicationinsights-application-windowsevent.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-subcomponentconfigurationdetails-windowsevents */
  WindowsEvents?: WindowsEvent[]
}

/**
 * The `AWS::ApplicationInsights::Application LogPatternSet` property type specifies the log pattern set.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html */

export interface LogPatternSet {
  /**
   * - A list of objects that define the log patterns that belong to `LogPatternSet`.
   * - _Required_: Yes
   * - _Type_: Array of [LogPattern](./aws-properties-applicationinsights-application-logpattern.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-logpatternset-logpatterns */
  LogPatterns: LogPattern[]
  /**
   * - The name of the log pattern. A log pattern name can contain up to 30 characters, and it cannot be empty. The characters can be Unicode letters, digits, or one of the following symbols: period, dash, underscore.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[a-zA-Z0-9.-_]*`
   * - _Minimum_: `1`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-logpatternset-patternsetname */
  PatternSetName: string | Intrinsic
}

/**
 * The `AWS::ApplicationInsights::Application ConfigurationDetails` property type specifies the configuration settings.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html */

export interface ConfigurationDetails {
  /**
   * - A list of metrics to monitor for the component. All component types can use `AlarmMetrics`.
   * - _Required_: No
   * - _Type_: Array of [AlarmMetric](./aws-properties-applicationinsights-application-alarmmetric.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-configurationdetails-alarmmetrics */
  AlarmMetrics?: AlarmMetric[]
  /**
   * - A list of alarms to monitor for the component. All component types can use `Alarm`.
   * - _Required_: No
   * - _Type_: Array of [Alarm](./aws-properties-applicationinsights-application-alarm.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-configurationdetails-alarms */
  Alarms?: Alarm[]
  /**
   * - The HA cluster Prometheus Exporter settings.
   * - _Required_: No
   * - _Type_: [HAClusterPrometheusExporter](./aws-properties-applicationinsights-application-haclusterprometheusexporter.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-configurationdetails-haclusterprometheusexporter */
  HAClusterPrometheusExporter?: HAClusterPrometheusExporter
  /**
   * - The HANA DB Prometheus Exporter settings.
   * - _Required_: No
   * - _Type_: [HANAPrometheusExporter](./aws-properties-applicationinsights-application-hanaprometheusexporter.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-configurationdetails-hanaprometheusexporter */
  HANAPrometheusExporter?: HANAPrometheusExporter
  /**
   * - A list of Java metrics to monitor for the component.
   * - _Required_: No
   * - _Type_: [JMXPrometheusExporter](./aws-properties-applicationinsights-application-jmxprometheusexporter.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-configurationdetails-jmxprometheusexporter */
  JMXPrometheusExporter?: JMXPrometheusExporter
  /**
   * - A list of logs to monitor for the component. Only Amazon EC2 instances can use `Logs`.
   * - _Required_: No
   * - _Type_: Array of [Log](./aws-properties-applicationinsights-application-log.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-configurationdetails-logs */
  Logs?: Log[]
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [NetWeaverPrometheusExporter](./aws-properties-applicationinsights-application-netweaverprometheusexporter.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-configurationdetails-netweaverprometheusexporter */
  NetWeaverPrometheusExporter?: NetWeaverPrometheusExporter
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: Array of [Process](./aws-properties-applicationinsights-application-process.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-configurationdetails-processes */
  Processes?: Process[]
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [SQLServerPrometheusExporter](./aws-properties-applicationinsights-application-sqlserverprometheusexporter.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-configurationdetails-sqlserverprometheusexporter */
  SQLServerPrometheusExporter?: SQLServerPrometheusExporter
  /**
   * - A list of Windows Events to monitor for the component. Only Amazon EC2 instances running on Windows can use `WindowsEvents`.
   * - _Required_: No
   * - _Type_: Array of [WindowsEvent](./aws-properties-applicationinsights-application-windowsevent.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-configurationdetails-windowsevents */
  WindowsEvents?: WindowsEvent[]
}

/**
 * The `AWS::ApplicationInsights::Application SubComponentTypeConfiguration` property type specifies the sub-component configurations for a component.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html */

export interface SubComponentTypeConfiguration {
  /**
   * - The configuration settings of the sub-components.
   * - _Required_: Yes
   * - _Type_: [SubComponentConfigurationDetails](./aws-properties-applicationinsights-application-subcomponentconfigurationdetails.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-subcomponenttypeconfiguration-subcomponentconfigurationdetails */
  SubComponentConfigurationDetails: SubComponentConfigurationDetails
  /**
   * - The sub-component type.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `AWS::EC2::Instance | AWS::EC2::Volume`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-subcomponenttypeconfiguration-subcomponenttype */
  SubComponentType: string | Intrinsic
}

/**
 * The `AWS::ApplicationInsights::Application ComponentConfiguration` property type defines the configuration settings of the component.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html */

export interface ComponentConfiguration {
  /**
   * - The configuration settings.
   * - _Required_: No
   * - _Type_: [ConfigurationDetails](./aws-properties-applicationinsights-application-configurationdetails.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-componentconfiguration-configurationdetails */
  ConfigurationDetails?: ConfigurationDetails
  /**
   * - Sub-component configurations of the component.
   * - _Required_: No
   * - _Type_: Array of [SubComponentTypeConfiguration](./aws-properties-applicationinsights-application-subcomponenttypeconfiguration.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-componentconfiguration-subcomponenttypeconfigurations */
  SubComponentTypeConfigurations?: SubComponentTypeConfiguration[]
}

/**
 * The `AWS::ApplicationInsights::Application ComponentMonitoringSetting` property type defines the monitoring setting of the component.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html */

export interface ComponentMonitoringSetting {
  /**
   * - The ARN of the component. Either the component ARN or the component name is required.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:aws(-[\w]+)*:[\w\d-]+:([\w\d-]*)?:[\w\d_-]*([:/].+)*$`
   * - _Minimum_: `20`
   * - _Maximum_: `300`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-componentmonitoringsetting-componentarn */
  ComponentARN?: string | Intrinsic
  /**
   * - Component monitoring can be configured in one of the following three modes:
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `DEFAULT | DEFAULT_WITH_OVERWRITE | CUSTOM`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-componentmonitoringsetting-componentconfigurationmode */
  ComponentConfigurationMode: string | Intrinsic
  /**
   * - The name of the component. Either the component ARN or the component name is required.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[\d\w\-_.+]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-componentmonitoringsetting-componentname */
  ComponentName?: string | Intrinsic
  /**
   * - Customized monitoring settings. Required if CUSTOM mode is configured in `ComponentConfigurationMode`.
   * - _Required_: No
   * - _Type_: [ComponentConfiguration](./aws-properties-applicationinsights-application-componentconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-componentmonitoringsetting-customcomponentconfiguration */
  CustomComponentConfiguration?: ComponentConfiguration
  /**
   * - Customized overwrite monitoring settings. Required if CUSTOM mode is configured in `ComponentConfigurationMode`.
   * - _Required_: No
   * - _Type_: [ComponentConfiguration](./aws-properties-applicationinsights-application-componentconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-componentmonitoringsetting-defaultoverwritecomponentconfiguration */
  DefaultOverwriteComponentConfiguration?: ComponentConfiguration
  /**
   * - The tier of the application component. Supported tiers include `DOT_NET_CORE`, `DOT_NET_WORKER`, `DOT_NET_WEB`, `SQL_SERVER`, `SQL_SERVER_ALWAYSON_AVAILABILITY_GROUP`, `SQL_SERVER_FAILOVER_CLUSTER_INSTANCE`, `MYSQL`, `POSTGRESQL`, `JAVA_JMX`, `ORACLE`, `SAP_HANA_MULTI_NODE`, `SAP_HANA_SINGLE_NODE`, `SAP_HANA_HIGH_AVAILABILITY`, `SHAREPOINT`. `ACTIVE_DIRECTORY`, and `DEFAULT`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[A-Z][[A-Z]_]*$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-componentmonitoringsetting-tier */
  Tier: string | Intrinsic
}

/**
 * The `AWS::ApplicationInsights::Application` resource adds an application that is created from a resource group.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html */

export interface ApplicationInsightsApplication {
  Type: 'AWS::ApplicationInsights::Application'
  Properties: {
    /**
     * - If set to true, the managed policies for SSM and CW will be attached to the instance roles if they are missing.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-attachmissingpermission */
    AttachMissingPermission?: boolean | Intrinsic
    /**
     * - If set to `true`, the application components will be configured with the monitoring configuration recommended by Application Insights.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-autoconfigurationenabled */
    AutoConfigurationEnabled?: boolean | Intrinsic
    /**
     * - The monitoring settings of the components. Not required to set up default monitoring for all components. To set up default monitoring for all components, set `AutoConfigurationEnabled` to `true`.
     * - _Required_: No
     * - _Type_: Array of [ComponentMonitoringSetting](./aws-properties-applicationinsights-application-componentmonitoringsetting.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-componentmonitoringsettings */
    ComponentMonitoringSettings?: ComponentMonitoringSetting[]
    /**
     * - Describes a custom component by grouping similar standalone instances to monitor.
     * - _Required_: No
     * - _Type_: Array of [CustomComponent](./aws-properties-applicationinsights-application-customcomponent.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-customcomponents */
    CustomComponents?: CustomComponent[]
    /**
     * - Indicates whether Application Insights can listen to CloudWatch events for the application resources, such as `instance terminated`, `failed deployment`, and others.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-cwemonitorenabled */
    CWEMonitorEnabled?: boolean | Intrinsic
    /**
     * - Application Insights can create applications based on a resource group or on an account. To create an account-based application using all of the resources in the account, set this parameter to `ACCOUNT_BASED`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ACCOUNT_BASED`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-groupingtype */
    GroupingType?: string | Intrinsic
    /**
     * - The log pattern sets.
     * - _Required_: No
     * - _Type_: Array of [LogPatternSet](./aws-properties-applicationinsights-application-logpatternset.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-logpatternsets */
    LogPatternSets?: LogPatternSet[]
    /**
     * - Indicates whether Application Insights will create OpsItems for any problem that is detected by Application Insights for an application.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-opscenterenabled */
    OpsCenterEnabled?: boolean | Intrinsic
    /**
     * - The SNS topic provided to Application Insights that is associated with the created OpsItems to receive SNS notifications for opsItem updates.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:aws(-[\w]+)*:[\w\d-]+:([\w\d-]*)?:[\w\d_-]*([:/].+)*$`
     * - _Minimum_: `20`
     * - _Maximum_: `300`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-opsitemsnstopicarn */
    OpsItemSNSTopicArn?: string | Intrinsic
    /**
     * - The name of the resource group used for the application.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9.-_]*`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-resourcegroupname */
    ResourceGroupName: string | Intrinsic
    /**
     * - An array of `Tags`.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-applicationinsights-application-tag.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationinsights-application.html#cfn-applicationinsights-application-tags */
    Tags?: Tag[]
  }
}
