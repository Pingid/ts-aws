import type { Intrinsic } from '../intrinsic/index.js' /**
 * Provides permissions for the AWS Shield Advanced Shield response team (SRT) to access your account and your resource protections, to help you mitigate potential distributed denial of service (DDoS) attacks.
 * **Configure `AWS::Shield::DRTAccess` for one account**
 * To configure this resource through AWS CloudFormation, you must be subscribed to AWS Shield Advanced. You can subscribe through the [Shield Advanced console](https://console.aws.amazon.com/wafv2/shieldv2#/) and through the APIs. For more information, see [Subscribe to AWS Shield Advanced](https://docs.aws.amazon.com/waf/latest/developerguide/enable-ddos-prem.html).
 * See example templates for Shield Advanced in AWS CloudFormation at [aws-samples/aws-shield-advanced-examples](https://github.com/aws-samples/aws-shield-advanced-examples).
 * **Configure Shield Advanced using AWS CloudFormation and AWS Firewall Manager**
 * You might be able to use Firewall Manager with AWS CloudFormation to configure Shield Advanced across multiple accounts and protected resources. To do this, your accounts must be part of an organization in AWS Organizations. You can use Firewall Manager to configure Shield Advanced protections for any resource types except for Amazon Route 53 or AWS Global Accelerator.
 * For an example of this, see the one-click configuration guidance published by the AWS technical community at [One-click deployment of Shield Advanced](https://youtu.be/LCA3FwMk_QE).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-drtaccess.html */

export interface ShieldDRTAccess {
  Type: 'AWS::Shield::DRTAccess'
  Properties: {
    /**
     * - Authorizes the Shield Response Team (SRT) to access the specified Amazon S3 bucket containing log data such as Application Load Balancer access logs, CloudFront logs, or logs from third party sources. You can associate up to 10 Amazon S3 buckets with your subscription.
     * - Use this to share information with the SRT that's not available in AWS WAF logs.
     * - To use the services of the SRT, you must be subscribed to the [Business Support plan](https://aws.amazon.com/premiumsupport/business-support/) or the [Enterprise Support plan](https://aws.amazon.com/premiumsupport/enterprise-support/).
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `3 | 0`
     * - _Maximum_: `63 | 10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-drtaccess.html#cfn-shield-drtaccess-logbucketlist */
    LogBucketList?: (string | Intrinsic)[]
    /**
     * - Authorizes the Shield Response Team (SRT) using the specified role, to access your AWS account to assist with DDoS attack mitigation during potential attacks. This enables the SRT to inspect your AWS WAF configuration and logs and to create or update AWS WAF rules and web ACLs.
     * - You can associate only one `RoleArn` with your subscription. If you submit this update for an account that already has an associated role, the new `RoleArn` will replace the existing `RoleArn`.
     * - This change requires the following:
     * - The SRT will have access only to your AWS WAF and Shield resources. By submitting this request, you provide permissions to the SRT to inspect your AWS WAF and Shield configuration and logs, and to create and update AWS WAF rules and web ACLs on your behalf. The SRT takes these actions only if explicitly authorized by you.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-shield-drtaccess.html#cfn-shield-drtaccess-rolearn */
    RoleArn: string | Intrinsic
  }
}
