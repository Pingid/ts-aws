import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Creates a version for the specified customer-managed flow within the specified instance.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflowversion.html */

export interface ConnectContactFlowVersion extends ResourceAttributes {
    "Type": "AWS::Connect::ContactFlowVersion";
    "Properties": {
        /**
         * - The identifier of the flow.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]+:[0-9]{12}:instance/[-a-zA-Z0-9]+/contact-flow/[-a-zA-Z0-9]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `500`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflowversion.html#cfn-connect-contactflowversion-contactflowid */
        "ContactFlowId": string | Intrinsic;
        /**
         * - The description of the flow version.
         * - _Required_: No
         * - _Type_: String
         * - _Maximum_: `500`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-contactflowversion.html#cfn-connect-contactflowversion-description */
        "Description"?: string | Intrinsic;
    };
}