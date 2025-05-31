import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `AWS::AppStream::StackFleetAssociation` resource associates the specified fleet with the specified stack for Amazon AppStream 2.0.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackfleetassociation.html */

export interface AppStreamStackFleetAssociation extends ResourceAttributes {
    "Type": "AWS::AppStream::StackFleetAssociation";
    "Properties": {
        /**
         * - The name of the fleet.
         * - To associate a fleet with a stack, you must specify a dependency on the fleet resource. For more information, see [DependsOn Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html).
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackfleetassociation.html#cfn-appstream-stackfleetassociation-fleetname */
        "FleetName": string | Intrinsic;
        /**
         * - The name of the stack.
         * - To associate a fleet with a stack, you must specify a dependency on the stack resource. For more information, see [DependsOn Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html).
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appstream-stackfleetassociation.html#cfn-appstream-stackfleetassociation-stackname */
        "StackName": string | Intrinsic;
    };
}