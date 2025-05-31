import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Represents a secret stored in the AWS Secrets Manager that can be used to authenticate with a cluster using a user name and a password.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-batchscramsecret.html */

export interface MSKBatchScramSecret extends ResourceAttributes {
    "Type": "AWS::MSK::BatchScramSecret";
    "Properties": {
        /**
         * - The Amazon Resource Name (ARN) that uniquely identifies the cluster.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-batchscramsecret.html#cfn-msk-batchscramsecret-clusterarn */
        "ClusterArn": string | Intrinsic;
        /**
         * - List of Amazon Resource Name (ARN)s of Secrets Manager secrets.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-batchscramsecret.html#cfn-msk-batchscramsecret-secretarnlist */
        "SecretArnList"?: (string | Intrinsic)[];
    };
}