import type { Intrinsic } from '../intrinsic/index.js' /**
 * A complex type that contains information about an instance that AWS Cloud Map creates when you submit a `RegisterInstance` request.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-instance.html */

export interface ServiceDiscoveryInstance {
  Type: 'AWS::ServiceDiscovery::Instance'
  Properties: {
    /**
     * - A string map that contains the following information for the service that you specify in `ServiceId`:
     * - Supported attribute keys include the following:
     * - _Required_: Yes
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-instance.html#cfn-servicediscovery-instance-instanceattributes */
    InstanceAttributes: any | Intrinsic
    /**
     * - An identifier that you want to associate with the instance. Note the following:
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[0-9a-zA-Z_/:.@-]+$`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-instance.html#cfn-servicediscovery-instance-instanceid */
    InstanceId?: string | Intrinsic
    /**
     * - The ID of the service that you want to use for settings for the instance.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-servicediscovery-instance.html#cfn-servicediscovery-instance-serviceid */
    ServiceId: string | Intrinsic
  }
}
