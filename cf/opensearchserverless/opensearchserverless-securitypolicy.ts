import type { Intrinsic } from '../intrinsic/index.js' /**
 * Creates an encryption or network policy to be used by one or more OpenSearch Serverless collections.
 * Network policies specify access to a collection and its OpenSearch Dashboards endpoint from public networks or specific VPC endpoints. For more information, see [Network access for Amazon OpenSearch Serverless](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-network.html).
 * Encryption policies specify a KMS encryption key to assign to particular collections. For more information, see [Encryption at rest for Amazon OpenSearch Serverless](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-encryption.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securitypolicy.html */

export interface OpenSearchServerlessSecurityPolicy {
  Type: 'AWS::OpenSearchServerless::SecurityPolicy'
  Properties: {
    /**
     * - The description of the security policy.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securitypolicy.html#cfn-opensearchserverless-securitypolicy-description */
    Description?: string | Intrinsic
    /**
     * - The name of the policy.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-z][a-z0-9-]{2,31}$`
     * - _Minimum_: `3`
     * - _Maximum_: `32`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securitypolicy.html#cfn-opensearchserverless-securitypolicy-name */
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
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securitypolicy.html#cfn-opensearchserverless-securitypolicy-policy */
    Policy: string | Intrinsic
    /**
     * - The type of security policy. Can be either `encryption` or `network`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `encryption | network`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-securitypolicy.html#cfn-opensearchserverless-securitypolicy-type */
    Type: string | Intrinsic
  }
}
