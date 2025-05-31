import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Specifies the state of the _block public access for snapshots_ setting for the Region. For more information, see [Block public access for snapshots](https://docs.aws.amazon.com/ebs/latest/userguide/block-public-access-snapshots.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-snapshotblockpublicaccess.html */

export interface EC2SnapshotBlockPublicAccess extends ResourceAttributes {
    "Type": "AWS::EC2::SnapshotBlockPublicAccess";
    "Properties": {
        /**
         * - The mode in which to enable block public access for snapshots for the Region. Specify one of the following values:
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `block-all-sharing | block-new-sharing`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-snapshotblockpublicaccess.html#cfn-ec2-snapshotblockpublicaccess-state */
        "State": string | Intrinsic;
    };
}