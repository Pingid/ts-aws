import type { Intrinsic } from '../intrinsic/index.js' /**
 * A scrape configuration for a scraper, base 64 encoded. For more information, see [Scraper configuration](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-collector-how-to.html#AMP-collector-configuration) in the _Amazon Managed Service for Prometheus User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-scraper.html */

export interface ScrapeConfiguration {
  /**
   * - The base 64 encoded scrape configuration file.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-scraper.html#cfn-aps-scraper-scrapeconfiguration-configurationblob */
  ConfigurationBlob?: string | Intrinsic
}

/**
 * A tag associated with a resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-scraper.html */

export interface Tag {
  /**
   * - The key of the tag. Must not begin with `aws:`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-scraper.html#cfn-aps-scraper-tag-key */
  Key: string | Intrinsic
  /**
   * - The value of the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-scraper.html#cfn-aps-scraper-tag-value */
  Value: string | Intrinsic
}

/**
 * The `AmpConfiguration` structure defines the Amazon Managed Service for Prometheus instance a scraper should send metrics to.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-scraper.html */

export interface AmpConfiguration {
  /**
   * - ARN of the Amazon Managed Service for Prometheus workspace.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:aws[-a-z]*:aps:[-a-z0-9]+:[0-9]{12}:workspace/.+$`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-scraper.html#cfn-aps-scraper-ampconfiguration-workspacearn */
  WorkspaceArn: string | Intrinsic
}

/**
 * The `EksConfiguration` structure describes the connection to the Amazon EKS cluster from which a scraper collects metrics.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-scraper.html */

export interface EksConfiguration {
  /**
   * - ARN of the Amazon EKS cluster.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:aws[-a-z]*:eks:[-a-z0-9]+:[0-9]{12}:cluster/.+$`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-scraper.html#cfn-aps-scraper-eksconfiguration-clusterarn */
  ClusterArn: string | Intrinsic
  /**
   * - A list of the security group IDs for the Amazon EKS cluster VPC configuration.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `5`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-scraper.html#cfn-aps-scraper-eksconfiguration-securitygroupids */
  SecurityGroupIds?: (string | Intrinsic)[]
  /**
   * - A list of subnet IDs for the Amazon EKS cluster VPC configuration.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `5`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-scraper.html#cfn-aps-scraper-eksconfiguration-subnetids */
  SubnetIds: (string | Intrinsic)[]
}

/**
 * Where to send the metrics from a scraper.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-scraper.html */

export interface Destination {
  /**
   * - The Amazon Managed Service for Prometheus workspace to send metrics to.
   * - _Required_: No
   * - _Type_: [AmpConfiguration](./aws-properties-aps-scraper-ampconfiguration.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-scraper.html#cfn-aps-scraper-destination-ampconfiguration */
  AmpConfiguration?: AmpConfiguration
}

/**
 * The source of collected metrics for a scraper.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-scraper.html */

export interface Source {
  /**
   * - The Amazon EKS cluster from which a scraper collects metrics.
   * - _Required_: No
   * - _Type_: [EksConfiguration](./aws-properties-aps-scraper-eksconfiguration.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-scraper.html#cfn-aps-scraper-source-eksconfiguration */
  EksConfiguration?: EksConfiguration
}

/**
 * A scraper is a fully-managed agentless collector that discovers and pulls metrics automatically. A scraper pulls metrics from Prometheus-compatible sources within an Amazon EKS cluster, and sends them to your Amazon Managed Service for Prometheus workspace. Scrapers are flexible. You can configure the scraper to control what metrics are collected, the frequency of collection, what transformations are applied to the metrics, and more.
 * An IAM role will be created for you that Amazon Managed Service for Prometheus uses to access the metrics in your cluster. You must configure this role with a policy that allows it to scrape metrics from your cluster. For more information, see [Configuring your Amazon EKS cluster](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-collector-how-to.html#AMP-collector-eks-setup) in the _Amazon Managed Service for Prometheus User Guide_.
 * The `scrapeConfiguration` parameter contains the YAML configuration for the scraper.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-scraper.html */

export interface APSScraper {
  Type: 'AWS::APS::Scraper'
  Properties: {
    /**
     * - An optional user-assigned scraper alias.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[0-9A-Za-z][-.0-9A-Z_a-z]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-scraper.html#cfn-aps-scraper-alias */
    Alias?: string | Intrinsic
    /**
     * - The Amazon Managed Service for Prometheus workspace the scraper sends metrics to.
     * - _Required_: Yes
     * - _Type_: [Destination](./aws-properties-aps-scraper-destination.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-scraper.html#cfn-aps-scraper-destination */
    Destination: Destination
    /**
     * - The configuration in use by the scraper.
     * - _Required_: Yes
     * - _Type_: [ScrapeConfiguration](./aws-properties-aps-scraper-scrapeconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-scraper.html#cfn-aps-scraper-scrapeconfiguration */
    ScrapeConfiguration: ScrapeConfiguration
    /**
     * - The Amazon EKS cluster from which the scraper collects metrics.
     * - _Required_: Yes
     * - _Type_: [Source](./aws-properties-aps-scraper-source.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-scraper.html#cfn-aps-scraper-source */
    Source: Source
    /**
     * - (Optional) The list of tag keys and values associated with the scraper.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-aps-scraper-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-aps-scraper.html#cfn-aps-scraper-tags */
    Tags?: Tag[]
  }
}
