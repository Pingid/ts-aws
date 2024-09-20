import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Applies an Amazon S3 access policy to an Amazon S3 Multi-Region Access Point.
 * It is not possible to delete an access policy for a Multi-Region Access Point from the CloudFormation template. When you attempt to delete the policy, CloudFormation updates the policy using `DeletionPolicy:Retain` and `UpdateReplacePolicy:Retain`. CloudFormation updates the policy to only allow access to the account that created the bucket.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspointpolicy.html */

export interface S3MultiRegionAccessPointPolicy extends ResourceAttributes {
  Type: 'AWS::S3::MultiRegionAccessPointPolicy'
  Properties: {
    /**
     * - The name of the Multi-Region Access Point.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-z0-9][-a-z0-9]{1,48}[a-z0-9]$`
     * - _Minimum_: `3`
     * - _Maximum_: `50`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspointpolicy.html#cfn-s3-multiregionaccesspointpolicy-mrapname */
    MrapName: string | Intrinsic
    /**
     * - The access policy associated with the Multi-Region Access Point.
     * - _Required_: Yes
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspointpolicy.html#cfn-s3-multiregionaccesspointpolicy-policy */
    Policy: any | Intrinsic
  }
}
