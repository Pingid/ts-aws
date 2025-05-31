import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `AWS::SecurityHub::ProductSubscription` resource creates a subscription to a third-party product that generates findings that you want to receive in AWS Security Hub. For a list of integrations to third-party products, see [Available third-party partner product integrations](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-partner-providers.html) in the _AWS Security Hub User Guide_.
 * To change a product subscription, remove the current product subscription resource, and then create a new one.
 * Tags aren't supported for this resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-productsubscription.html */

export interface SecurityHubProductSubscription extends ResourceAttributes {
    "Type": "AWS::SecurityHub::ProductSubscription";
    "Properties": {
        /**
         * - The ARN of the product to enable the integration for.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `arn:aws\S*:securityhub:\S*`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-productsubscription.html#cfn-securityhub-productsubscription-productarn */
        "ProductArn": string | Intrinsic;
    };
}