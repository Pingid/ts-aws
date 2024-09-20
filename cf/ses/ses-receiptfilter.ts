import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A receipt IP address filter enables you to specify whether to accept or reject mail originating from an IP address or range of IP addresses.
 * For information about setting up IP address filters, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-ip-filtering-console-walkthrough.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptfilter.html */

export interface IpFilter {
  /**
   * - A single IP address or a range of IP addresses to block or allow, specified in Classless Inter-Domain Routing (CIDR) notation. An example of a single email address is 10.0.0.1. An example of a range of IP addresses is 10.0.0.1/24. For more information about CIDR notation, see [RFC 2317](https://tools.ietf.org/html/rfc2317).
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptfilter.html#cfn-ses-receiptfilter-ipfilter-cidr */
  Cidr: string | Intrinsic
  /**
   * - Indicates whether to block or allow incoming mail from the specified IP addresses.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `Block | Allow`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptfilter.html#cfn-ses-receiptfilter-ipfilter-policy */
  Policy: string | Intrinsic
}

/**
 * Specifies an IP address filter.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptfilter.html */

export interface Filter {
  /**
   * - A structure that provides the IP addresses to block or allow, and whether to block or allow incoming mail from them.
   * - _Required_: Yes
   * - _Type_: [IpFilter](./aws-properties-ses-receiptfilter-ipfilter.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptfilter.html#cfn-ses-receiptfilter-filter-ipfilter */
  IpFilter: IpFilter
  /**
   * - The name of the IP address filter. The name must meet the following requirements:
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptfilter.html#cfn-ses-receiptfilter-filter-name */
  Name?: string | Intrinsic
}

/**
 * Specify a new IP address filter. You use IP address filters when you receive email with Amazon SES.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptfilter.html */

export interface SESReceiptFilter extends ResourceAttributes {
  Type: 'AWS::SES::ReceiptFilter'
  Properties: {
    /**
     * - A data structure that describes the IP address filter to create, which consists of a name, an IP address range, and whether to allow or block mail from it.
     * - _Required_: Yes
     * - _Type_: [Filter](./aws-properties-ses-receiptfilter-filter.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptfilter.html#cfn-ses-receiptfilter-filter */
    Filter: Filter
  }
}
