import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `AWS::XRay::TransactionSearchConfig` resource Property description not available. for XRay.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-transactionsearchconfig.html */

export interface XRayTransactionSearchConfig extends ResourceAttributes {
    "Type": "AWS::XRay::TransactionSearchConfig";
    "Properties": {
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: Number
         * - _Minimum_: `0`
         * - _Maximum_: `100`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-transactionsearchconfig.html#cfn-xray-transactionsearchconfig-indexingpercentage */
        "IndexingPercentage"?: number | Intrinsic;
    };
}