import type { Intrinsic } from '../intrinsic/index.js' /**
 * Creates a lifecyle policy to be applied to OpenSearch Serverless indexes. Lifecycle policies define the number of days or hours to retain the data on an OpenSearch Serverless index. For more information, see [Creating data lifecycle policies](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-lifecycle.html#serverless-lifecycle-create).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-lifecyclepolicy.html */

export interface OpenSearchServerlessLifecyclePolicy {
  Type: 'AWS::OpenSearchServerless::LifecyclePolicy'
  Properties: {
    /**
     * - The description of the lifecycle policy.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-lifecyclepolicy.html#cfn-opensearchserverless-lifecyclepolicy-description */
    Description?: string | Intrinsic
    /**
     * - The name of the lifecycle policy.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-z][a-z0-9-]+$`
     * - _Minimum_: `3`
     * - _Maximum_: `32`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-lifecyclepolicy.html#cfn-opensearchserverless-lifecyclepolicy-name */
    Name: string | Intrinsic
    /**
     * - The JSON policy document without any whitespaces.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\u0009\u000A\u000D\u0020-\u007E\u00A1-\u00FF]+`
     * - _Minimum_: `1`
     * - _Maximum_: `20480`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-lifecyclepolicy.html#cfn-opensearchserverless-lifecyclepolicy-policy */
    Policy: string | Intrinsic
    /**
     * - The type of lifecycle policy.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `retention`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-lifecyclepolicy.html#cfn-opensearchserverless-lifecyclepolicy-type */
    Type: string | Intrinsic
  }
}
