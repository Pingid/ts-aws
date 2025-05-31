import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * ###### Note
 * 
 * This is the latest version of **AWS WAF** , named AWS WAFV2, released in November, 2019. For information, including how to migrate your AWS WAF resources from the prior release, see the [AWS WAF developer guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html).
 * Use a web ACL association to define an association between a web ACL and a regional application resource, to protect the resource. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AWS AppSync GraphQL API, an Amazon Cognito user pool, an AWS App Runner service, an AWS Amplify application, or an AWS Verified Access instance.
 * For Amazon CloudFront, don't use this resource. Instead, use your CloudFront distribution configuration. To associate a web ACL with a distribution, provide the Amazon Resource Name (ARN) of the [AWS::WAFv2::WebACL](./aws-resource-wafv2-webacl.html) to your CloudFront distribution configuration. To disassociate a web ACL, provide an empty ARN. For information, see [AWS::CloudFront::Distribution](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distribution.html).
 * **Required permissions for customer-managed IAM policies**
 * This call requires permissions that are specific to the protected resource type. For details, see [Permissions for AssociateWebACL](https://docs.aws.amazon.com/waf/latest/developerguide/security_iam_service-with-iam.html#security_iam_action-AssociateWebACL) in the _AWS WAF Developer Guide_.
 * **Temporary inconsistencies during updates**
 * When you create or change a web ACL or other AWS WAF resources, the changes take a small amount of time to propagate to all areas where the resources are stored. The propagation time can be from a few seconds to a number of minutes.
 * The following are examples of the temporary inconsistencies that you might notice during change propagation:
 * *   After you create a web ACL, if you try to associate it with a resource, you might get an exception indicating that the web ACL is unavailable.
 *     
 * *   After you add a rule group to a web ACL, the new rule group rules might be in effect in one area where the web ACL is used and not in another.
 *     
 * *   After you change a rule action setting, you might see the old action in some places and the new action in others.
 *     
 * *   After you add an IP address to an IP set that is in use in a blocking rule, the new address might be blocked in one area while still allowed in another.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webaclassociation.html */

export interface WAFv2WebACLAssociation extends ResourceAttributes {
    "Type": "AWS::WAFv2::WebACLAssociation";
    "Properties": {
        /**
         * - The Amazon Resource Name (ARN) of the resource to associate with the web ACL.
         * - The ARN must be in one of the following formats:
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `20`
         * - _Maximum_: `2048`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webaclassociation.html#cfn-wafv2-webaclassociation-resourcearn */
        "ResourceArn": string | Intrinsic;
        /**
         * - The Amazon Resource Name (ARN) of the web ACL that you want to associate with the resource.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `20`
         * - _Maximum_: `2048`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webaclassociation.html#cfn-wafv2-webaclassociation-webaclarn */
        "WebACLArn": string | Intrinsic;
    };
}