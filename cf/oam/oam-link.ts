import type { Intrinsic } from '../intrinsic/index.js' /**
 * When used in `MetricConfiguration` this field specifies which metric namespaces are to be shared with the monitoring account
 * When used in `LogGroupConfiguration` this field specifies which log groups are to share their log events with the monitoring account. Use the term `LogGroupName` and one or more of the following operands.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-link.html */

export interface LinkFilter {
  /**
   * - When used in `MetricConfiguration` this field specifies which metric namespaces are to be shared with the monitoring account
   * - When used in `LogGroupConfiguration` this field specifies which log groups are to share their log events with the monitoring account. Use the term `LogGroupName` and one or more of the following operands.
   * - Use single quotation marks (') around log group names and metric namespaces.
   * - The matching of log group names and metric namespaces is case sensitive. Each filter has a limit of five conditional operands. Conditional operands are `AND` and `OR`.
   * - Examples:
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `2000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-link.html#cfn-oam-link-linkfilter-filter */
  Filter: string | Intrinsic
}

/**
 * Use this structure to optionally create filters that specify that only some metric namespaces or log groups are to be shared from the source account to the monitoring account.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-link.html */

export interface LinkConfiguration {
  /**
   * - Use this structure to filter which log groups are to share log events from this source account to the monitoring account.
   * - _Required_: No
   * - _Type_: [LinkFilter](./aws-properties-oam-link-linkfilter.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-link.html#cfn-oam-link-linkconfiguration-loggroupconfiguration */
  LogGroupConfiguration?: LinkFilter
  /**
   * - Use this structure to filter which metric namespaces are to be shared from the source account to the monitoring account.
   * - _Required_: No
   * - _Type_: [LinkFilter](./aws-properties-oam-link-linkfilter.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-link.html#cfn-oam-link-linkconfiguration-metricconfiguration */
  MetricConfiguration?: LinkFilter
}

/**
 * Creates a link between a source account and a sink that you have created in a monitoring account.
 * Before you create a link, you must create a sink in the monitoring account. The sink must have a sink policy that permits the source account to link to it. You can grant permission to source accounts by granting permission to an entire organization, an organizational unit, or to individual accounts.
 * For more information, see [CreateSink](https://docs.aws.amazon.com/OAM/latest/APIReference/API_CreateSink.html) and [PutSinkPolicy](https://docs.aws.amazon.com/OAM/latest/APIReference/API_PutSinkPolicy.html).
 * Each monitoring account can be linked to as many as 100,000 source accounts.
 * Each source account can be linked to as many as five monitoring accounts.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-link.html */

export interface OamLink {
  Type: 'AWS::Oam::Link'
  Properties: {
    /**
     * - Specify a friendly human-readable name to use to identify this source account when you are viewing data from it in the monitoring account.
     * - You can include the following variables in your template:
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-link.html#cfn-oam-link-labeltemplate */
    LabelTemplate?: string | Intrinsic
    /**
     * - Use this structure to optionally create filters that specify that only some metric namespaces or log groups are to be shared from the source account to the monitoring account.
     * - _Required_: No
     * - _Type_: [LinkConfiguration](./aws-properties-oam-link-linkconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-link.html#cfn-oam-link-linkconfiguration */
    LinkConfiguration?: LinkConfiguration
    /**
     * - An array of strings that define which types of data that the source account shares with the monitoring account. Valid values are `AWS::CloudWatch::Metric | AWS::Logs::LogGroup | AWS::XRay::Trace | AWS::ApplicationInsights::Application | AWS::InternetMonitor::Monitor`.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-link.html#cfn-oam-link-resourcetypes */
    ResourceTypes: (string | Intrinsic)[]
    /**
     * - The ARN of the sink in the monitoring account that you want to link to. You can use [ListSinks](https://docs.aws.amazon.com/OAM/latest/APIReference/API_ListSinks.html) to find the ARNs of sinks.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-link.html#cfn-oam-link-sinkidentifier */
    SinkIdentifier: string | Intrinsic
    /**
     * - An array of key-value pairs to apply to the link.
     * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `^(?!aws:.*).{1,128}$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-oam-link.html#cfn-oam-link-tags */
    Tags?: Record<string, string | Intrinsic>
  }
}
