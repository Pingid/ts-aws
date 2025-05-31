import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Creates a data access policy for OpenSearch Serverless. Access policies limit access to collections and the resources within them, and allow a user to access that data irrespective of the access mechanism or network source. For more information, see [Data access control for Amazon OpenSearch Serverless](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-data-access.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-accesspolicy.html */

export interface OpenSearchServerlessAccessPolicy extends ResourceAttributes {
    "Type": "AWS::OpenSearchServerless::AccessPolicy";
    "Properties": {
        /**
         * - The description of the policy.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `1000`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-accesspolicy.html#cfn-opensearchserverless-accesspolicy-description */
        "Description"?: string | Intrinsic;
        /**
         * - The name of the policy.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-z][a-z0-9-]{2,31}$`
         * - _Minimum_: `3`
         * - _Maximum_: `32`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-accesspolicy.html#cfn-opensearchserverless-accesspolicy-name */
        "Name": string | Intrinsic;
        /**
         * - The JSON policy document without any whitespaces.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[\u0009\u000A\u000D\u0020-\u007E\u00A1-\u00FF]+`
         * - _Minimum_: `1`
         * - _Maximum_: `20480`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-accesspolicy.html#cfn-opensearchserverless-accesspolicy-policy */
        "Policy": string | Intrinsic;
        /**
         * - The type of access policy. Currently the only option is `data`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `data`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-accesspolicy.html#cfn-opensearchserverless-accesspolicy-type */
        "Type": string | Intrinsic;
    };
}