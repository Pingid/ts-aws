import type { Intrinsic } from '../intrinsic/index.js' /**
 * Describes a tag.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html */

export interface TagItem {
  /**
   * - The tag key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html#cfn-guardduty-detector-tagitem-key */
  Key: string | Intrinsic
  /**
   * - The tag value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html#cfn-guardduty-detector-tagitem-value */
  Value: string | Intrinsic
}

/**
 * Describes whether S3 data event logs will be enabled as a data source when the detector is created.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html */

export interface CFNS3LogsConfiguration {
  /**
   * - The status of S3 data event logs as a data source.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html#cfn-guardduty-detector-cfns3logsconfiguration-enable */
  Enable: boolean | Intrinsic
}

/**
 * Information about the additional configuration of a feature in your account.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html */

export interface CFNFeatureAdditionalConfiguration {
  /**
   * - Name of the additional configuration.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html#cfn-guardduty-detector-cfnfeatureadditionalconfiguration-name */
  Name?: string | Intrinsic
  /**
   * - Status of the additional configuration.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html#cfn-guardduty-detector-cfnfeatureadditionalconfiguration-status */
  Status?: string | Intrinsic
}

/**
 * Describes which optional data sources are enabled for a detector.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html */

export interface CFNKubernetesAuditLogsConfiguration {
  /**
   * - Describes whether Kubernetes audit logs are enabled as a data source for the detector.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html#cfn-guardduty-detector-cfnkubernetesauditlogsconfiguration-enable */
  Enable: boolean | Intrinsic
}

/**
 * Describes whether Malware Protection for EC2 instances with findings will be enabled as a data source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html */

export interface CFNScanEc2InstanceWithFindingsConfiguration {
  /**
   * - Describes the configuration for scanning EBS volumes as data source.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html#cfn-guardduty-detector-cfnscanec2instancewithfindingsconfiguration-ebsvolumes */
  EbsVolumes?: boolean | Intrinsic
}

/**
 * Information about the configuration of a feature in your account.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html */

export interface CFNFeatureConfiguration {
  /**
   * - Information about the additional configuration of a feature in your account.
   * - _Required_: No
   * - _Type_: Array of [CFNFeatureAdditionalConfiguration](./aws-properties-guardduty-detector-cfnfeatureadditionalconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html#cfn-guardduty-detector-cfnfeatureconfiguration-additionalconfiguration */
  AdditionalConfiguration?: CFNFeatureAdditionalConfiguration[]
  /**
   * - Name of the feature. For a list of allowed values, see [DetectorFeatureConfiguration](https://docs.aws.amazon.com/guardduty/latest/APIReference/API_DetectorFeatureConfiguration.html#guardduty-Type-DetectorFeatureConfiguration-name) in the _GuardDuty API Reference_.
   * - _Required_: Yes
   * - _Type_: String
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html#cfn-guardduty-detector-cfnfeatureconfiguration-name */
  Name: string | Intrinsic
  /**
   * - Status of the feature configuration.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `ENABLED | DISABLED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html#cfn-guardduty-detector-cfnfeatureconfiguration-status */
  Status: string | Intrinsic
}

/**
 * Describes which Kubernetes protection data sources are enabled for the detector.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html */

export interface CFNKubernetesConfiguration {
  /**
   * - Describes whether Kubernetes audit logs are enabled as a data source for the detector.
   * - _Required_: Yes
   * - _Type_: [CFNKubernetesAuditLogsConfiguration](./aws-properties-guardduty-detector-cfnkubernetesauditlogsconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html#cfn-guardduty-detector-cfnkubernetesconfiguration-auditlogs */
  AuditLogs: CFNKubernetesAuditLogsConfiguration
}

/**
 * Describes whether Malware Protection will be enabled as a data source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html */

export interface CFNMalwareProtectionConfiguration {
  /**
   * - Describes the configuration of Malware Protection for EC2 instances with findings.
   * - _Required_: No
   * - _Type_: [CFNScanEc2InstanceWithFindingsConfiguration](./aws-properties-guardduty-detector-cfnscanec2instancewithfindingsconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html#cfn-guardduty-detector-cfnmalwareprotectionconfiguration-scanec2instancewithfindings */
  ScanEc2InstanceWithFindings?: CFNScanEc2InstanceWithFindingsConfiguration
}

/**
 * Describes whether S3 data event logs, Kubernetes audit logs, or Malware Protection will be enabled as a data source when the detector is created.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html */

export interface CFNDataSourceConfigurations {
  /**
   * - Describes which Kubernetes data sources are enabled for a detector.
   * - _Required_: No
   * - _Type_: [CFNKubernetesConfiguration](./aws-properties-guardduty-detector-cfnkubernetesconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html#cfn-guardduty-detector-cfndatasourceconfigurations-kubernetes */
  Kubernetes?: CFNKubernetesConfiguration
  /**
   * - Describes whether Malware Protection will be enabled as a data source.
   * - _Required_: No
   * - _Type_: [CFNMalwareProtectionConfiguration](./aws-properties-guardduty-detector-cfnmalwareprotectionconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html#cfn-guardduty-detector-cfndatasourceconfigurations-malwareprotection */
  MalwareProtection?: CFNMalwareProtectionConfiguration
  /**
   * - Describes whether S3 data event logs are enabled as a data source.
   * - _Required_: No
   * - _Type_: [CFNS3LogsConfiguration](./aws-properties-guardduty-detector-cfns3logsconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html#cfn-guardduty-detector-cfndatasourceconfigurations-s3logs */
  S3Logs?: CFNS3LogsConfiguration
}

/**
 * The `AWS::GuardDuty::Detector` resource specifies a new GuardDuty detector. A detector is an object that represents the GuardDuty service. A detector is required for GuardDuty to become operational.
 * Make sure you use either `DataSources` or `Features` in a one request, and not both.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html */

export interface GuardDutyDetector {
  Type: 'AWS::GuardDuty::Detector'
  Properties: {
    /**
     * - Describes which data sources will be enabled for the detector.
     * - _Required_: No
     * - _Type_: [CFNDataSourceConfigurations](./aws-properties-guardduty-detector-cfndatasourceconfigurations.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html#cfn-guardduty-detector-datasources */
    DataSources?: CFNDataSourceConfigurations
    /**
     * - Specifies whether the detector is to be enabled on creation.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html#cfn-guardduty-detector-enable */
    Enable: boolean | Intrinsic
    /**
     * - A list of features that will be configured for the detector.
     * - _Required_: No
     * - _Type_: Array of [CFNFeatureConfiguration](./aws-properties-guardduty-detector-cfnfeatureconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html#cfn-guardduty-detector-features */
    Features?: CFNFeatureConfiguration[]
    /**
     * - Specifies how frequently updated findings are exported.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `FIFTEEN_MINUTES | ONE_HOUR | SIX_HOURS`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html#cfn-guardduty-detector-findingpublishingfrequency */
    FindingPublishingFrequency?: string | Intrinsic
    /**
     * - Specifies tags added to a new detector resource. Each tag consists of a key and an optional value, both of which you define.
     * - Currently, support is available only for creating and deleting a tag. No support exists for updating the tags.
     * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     * - _Required_: No
     * - _Type_: Array of [TagItem](./aws-properties-guardduty-detector-tagitem.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-detector.html#cfn-guardduty-detector-tags */
    Tags?: TagItem[]
  }
}
