import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A JSON string that contains a list of Insights types that are logged on an event data store.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html */

export interface InsightSelector {
  /**
   * - The type of Insights events to log on an event data store. `ApiCallRateInsight` and `ApiErrorRateInsight` are valid Insight types.
   * - The `ApiCallRateInsight` Insights type analyzes write-only management API calls that are aggregated per minute against a baseline API call volume.
   * - The `ApiErrorRateInsight` Insights type analyzes management API calls that result in error codes. The error is shown if the API call is unsuccessful.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ApiCallRateInsight | ApiErrorRateInsight`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-insightselector-insighttype */
  InsightType?: string | Intrinsic
}

/**
 * A custom key-value pair associated with a resource such as a CloudTrail trail, event data store, or channel.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html */

export interface Tag {
  /**
   * - The key in a key-value pair. The key must be must be no longer than 128 Unicode characters. The key must be unique for the resource to which it applies.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-tag-key */
  Key: string | Intrinsic
  /**
   * - The value in a key-value pair of a tag. The value must be no longer than 256 Unicode characters.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-tag-value */
  Value: string | Intrinsic
}

/**
 * A single selector statement in an advanced event selector.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html */

export interface AdvancedFieldSelector {
  /**
   * - An operator that includes events that match the last few characters of the event record field specified as the value of `Field`.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `2048`
   * - _Minimum_: `1 | 1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-advancedfieldselector-endswith */
  EndsWith?: (string | Intrinsic)[]
  /**
   * - An operator that includes events that match the exact value of the event record field specified as the value of `Field`. This is the only valid operator that you can use with the `readOnly`, `eventCategory`, and `resources.type` fields.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `2048`
   * - _Minimum_: `1 | 1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-advancedfieldselector-equals */
  Equals?: (string | Intrinsic)[]
  /**
   * - A field in a CloudTrail event record on which to filter events to be logged. For event data stores for CloudTrail Insights events, AWS Config configuration items, Audit Manager evidence, or events outside of AWS, the field is used only for selecting events as filtering is not supported.
   * - For CloudTrail management events, supported fields include `readOnly`, `eventCategory`, and `eventSource`.
   * - For CloudTrail data events, supported fields include `readOnly`, `eventCategory`, `eventName`, `resources.type`, and `resources.ARN`.
   * - For event data stores for CloudTrail Insights events, AWS Config configuration items, Audit Manager evidence, or events outside of AWS, the only supported field is `eventCategory`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `([\w|\d|\.|_]+)`
   * - _Minimum_: `1`
   * - _Maximum_: `1000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-advancedfieldselector-field */
  Field: string | Intrinsic
  /**
   * - An operator that excludes events that match the last few characters of the event record field specified as the value of `Field`.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `2048`
   * - _Minimum_: `1 | 1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-advancedfieldselector-notendswith */
  NotEndsWith?: (string | Intrinsic)[]
  /**
   * - An operator that excludes events that match the exact value of the event record field specified as the value of `Field`.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `2048`
   * - _Minimum_: `1 | 1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-advancedfieldselector-notequals */
  NotEquals?: (string | Intrinsic)[]
  /**
   * - An operator that excludes events that match the first few characters of the event record field specified as the value of `Field`.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `2048`
   * - _Minimum_: `1 | 1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-advancedfieldselector-notstartswith */
  NotStartsWith?: (string | Intrinsic)[]
  /**
   * - An operator that includes events that match the first few characters of the event record field specified as the value of `Field`.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `2048`
   * - _Minimum_: `1 | 1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-advancedfieldselector-startswith */
  StartsWith?: (string | Intrinsic)[]
}

/**
 * Advanced event selectors let you create fine-grained selectors for CloudTrail management and data events. They help you control costs by logging only those events that are important to you. For more information about advanced event selectors, see [Logging management events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html) and [Logging data events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html) in the _AWS CloudTrail User Guide_.
 * You cannot apply both event selectors and advanced event selectors to a trail.
 * **Supported CloudTrail event record fields for management events**
 * *   `eventCategory` (required)
 *
 * *   `eventSource`
 *
 * *   `readOnly`
 * **Supported CloudTrail event record fields for data events**
 * *   `eventCategory` (required)
 *
 * *   `resources.type` (required)
 *
 * *   `readOnly`
 *
 * *   `eventName`
 *
 * *   `resources.ARN`
 * ###### Note
 *
 * For event data stores for CloudTrail Insights events, AWS Config configuration items, Audit Manager evidence, or events outside of AWS, the only supported field is `eventCategory`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html */

export interface AdvancedEventSelector {
  /**
   * - Contains all selector statements in an advanced event selector.
   * - _Required_: Yes
   * - _Type_: Array of [AdvancedFieldSelector](./aws-properties-cloudtrail-eventdatastore-advancedfieldselector.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-advancedeventselector-fieldselectors */
  FieldSelectors: AdvancedFieldSelector[]
  /**
   * - An optional, descriptive name for an advanced event selector, such as "Log data events for only two S3 buckets".
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `1000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-advancedeventselector-name */
  Name?: string | Intrinsic
}

/**
 * Creates a new event data store.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html */

export interface CloudTrailEventDataStore extends ResourceAttributes {
  Type: 'AWS::CloudTrail::EventDataStore'
  Properties: {
    /**
     * - The advanced event selectors to use to select the events for the data store. You can configure up to five advanced event selectors for each event data store.
     * - For more information about how to use advanced event selectors to log CloudTrail events, see [Log events by using advanced event selectors](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html#creating-data-event-selectors-advanced) in the CloudTrail User Guide.
     * - For more information about how to use advanced event selectors to include AWS Config configuration items in your event data store, see [Create an event data store for AWS Config configuration items](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/lake-eds-cli.html#lake-cli-create-eds-config) in the CloudTrail User Guide.
     * - For more information about how to use advanced event selectors to include events outside of AWS events in your event data store, see [Create an integration to log events from outside AWS](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/lake-integrations-cli.html#lake-cli-create-integration) in the CloudTrail User Guide.
     * - _Required_: No
     * - _Type_: Array of [AdvancedEventSelector](./aws-properties-cloudtrail-eventdatastore-advancedeventselector.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-advancedeventselectors */
    AdvancedEventSelectors?: AdvancedEventSelector[]
    /**
     * - The billing mode for the event data store determines the cost for ingesting events and the default and maximum retention period for the event data store.
     * - The following are the possible values:
     * - The default value is `EXTENDABLE_RETENTION_PRICING`.
     * - For more information about CloudTrail pricing, see [AWS CloudTrail Pricing](https://aws.amazon.com/cloudtrail/pricing/) and [Managing CloudTrail Lake costs](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake-manage-costs.html).
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `EXTENDABLE_RETENTION_PRICING | FIXED_RETENTION_PRICING`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-billingmode */
    BillingMode?: string | Intrinsic
    /**
     * - Indicates if [Lake query federation](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-federation.html) is enabled. By default, Lake query federation is disabled. You cannot delete an event data store if Lake query federation is enabled.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-federationenabled */
    FederationEnabled?: boolean | Intrinsic
    /**
     * - If Lake query federation is enabled, provides the ARN of the federation role used to access the resources for the federated event data store.
     * - The federation role must exist in your account and provide the [required minimum permissions](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-federation.html#query-federation-permissions-role).
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9._/\-:@=\+,\.]+$`
     * - _Minimum_: `3`
     * - _Maximum_: `125`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-federationrolearn */
    FederationRoleArn?: string | Intrinsic
    /**
     * - Specifies whether the event data store should start ingesting live events. The default is true.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-ingestionenabled */
    IngestionEnabled?: boolean | Intrinsic
    /**
     * - The ARN (or ID suffix of the ARN) of the destination event data store that logs Insights events. For more information, see [Create an event data store for CloudTrail Insights events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-event-data-store-insights.html).
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9._/\-:]+$`
     * - _Minimum_: `3`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-insightsdestination */
    InsightsDestination?: string | Intrinsic
    /**
     * - A JSON string that contains the Insights types you want to log on an event data store. `ApiCallRateInsight` and `ApiErrorRateInsight` are valid Insight types.
     * - The `ApiCallRateInsight` Insights type analyzes write-only management API calls that are aggregated per minute against a baseline API call volume.
     * - The `ApiErrorRateInsight` Insights type analyzes management API calls that result in error codes. The error is shown if the API call is unsuccessful.
     * - _Required_: No
     * - _Type_: Array of [InsightSelector](./aws-properties-cloudtrail-eventdatastore-insightselector.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-insightselectors */
    InsightSelectors?: InsightSelector[]
    /**
     * - Specifies the AWS KMS key ID to use to encrypt the events delivered by CloudTrail. The value can be an alias name prefixed by `alias/`, a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.
     * - CloudTrail also supports AWS KMS multi-Region keys. For more information about multi-Region keys, see [Using multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html) in the _AWS Key Management Service Developer Guide_.
     * - Examples:
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9._/\-:]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `350`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-kmskeyid */
    KmsKeyId?: string | Intrinsic
    /**
     * - Specifies whether the event data store includes events from all Regions, or only from the Region in which the event data store is created.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-multiregionenabled */
    MultiRegionEnabled?: boolean | Intrinsic
    /**
     * - The name of the event data store.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9._\-]+$`
     * - _Minimum_: `3`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-name */
    Name?: string | Intrinsic
    /**
     * - Specifies whether an event data store collects events logged for an organization in AWS Organizations.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-organizationenabled */
    OrganizationEnabled?: boolean | Intrinsic
    /**
     * - The retention period of the event data store, in days. If `BillingMode` is set to `EXTENDABLE_RETENTION_PRICING`, you can set a retention period of up to 3653 days, the equivalent of 10 years. If `BillingMode` is set to `FIXED_RETENTION_PRICING`, you can set a retention period of up to 2557 days, the equivalent of seven years.
     * - CloudTrail Lake determines whether to retain an event by checking if the `eventTime` of the event is within the specified retention period. For example, if you set a retention period of 90 days, CloudTrail will remove events when the `eventTime` is older than 90 days.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `7`
     * - _Maximum_: `3653`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-retentionperiod */
    RetentionPeriod?: number | Intrinsic
    /**
     * - A list of tags.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-cloudtrail-eventdatastore-tag.html)
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-tags */
    Tags?: Tag[]
    /**
     * - Specifies whether termination protection is enabled for the event data store. If termination protection is enabled, you cannot delete the event data store until termination protection is disabled.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudtrail-eventdatastore.html#cfn-cloudtrail-eventdatastore-terminationprotectionenabled */
    TerminationProtectionEnabled?: boolean | Intrinsic
  }
}
