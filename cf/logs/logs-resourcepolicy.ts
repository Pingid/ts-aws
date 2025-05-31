import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Creates or updates a resource policy that allows other AWS services to put log events to this account. An account can have up to 10 resource policies per AWS Region.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-resourcepolicy.html */

export interface LogsResourcePolicy extends ResourceAttributes {
    "Type": "AWS::Logs::ResourcePolicy";
    "Properties": {
        /**
         * - The details of the policy. It must be formatted in JSON, and you must use backslashes to escape characters that need to be escaped in JSON strings, such as double quote marks.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[\u0009\u000A\u000D\u0020-\u00FF]+`
         * - _Minimum_: `1`
         * - _Maximum_: `5120`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-resourcepolicy.html#cfn-logs-resourcepolicy-policydocument */
        "PolicyDocument": string | Intrinsic;
        /**
         * - The name of the resource policy.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^([^:*\/]+\/?)*[^:*\/]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-resourcepolicy.html#cfn-logs-resourcepolicy-policyname */
        "PolicyName": string | Intrinsic;
    };
}