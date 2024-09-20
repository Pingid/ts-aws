import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The approved origin for the instance.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-approvedorigin.html */

export interface ConnectApprovedOrigin extends ResourceAttributes {
  Type: 'AWS::Connect::ApprovedOrigin'
  Properties: {
    /**
     * - The Amazon Resource Name (ARN) of the instance.
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-approvedorigin.html#cfn-connect-approvedorigin-instanceid */
    InstanceId: string | Intrinsic
    /**
     * - Domain name to be added to the allow-list of the instance.
     * - _Maximum_: `267`
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `267`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-approvedorigin.html#cfn-connect-approvedorigin-origin */
    Origin: string | Intrinsic
  }
}
