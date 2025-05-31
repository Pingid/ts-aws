import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `AWS::ARCZonalShift::AutoshiftObserverNotificationStatus` resource Property description not available. for ARCZonalShift.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-arczonalshift-autoshiftobservernotificationstatus.html */

export interface ARCZonalShiftAutoshiftObserverNotificationStatus extends ResourceAttributes {
    "Type": "AWS::ARCZonalShift::AutoshiftObserverNotificationStatus";
    "Properties": {
        /**
         * - Property description not available.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `ENABLED`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-arczonalshift-autoshiftobservernotificationstatus.html#cfn-arczonalshift-autoshiftobservernotificationstatus-status */
        "Status": string | Intrinsic;
    };
}