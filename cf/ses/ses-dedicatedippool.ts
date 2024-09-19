import type { Intrinsic } from '../intrinsic/index.js' /**
 * Create a new pool of dedicated IP addresses. A pool can include one or more dedicated IP addresses that are associated with your AWS account. You can associate a pool with a configuration set. When you send an email that uses that configuration set, the message is sent from one of the addresses in the associated pool.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-dedicatedippool.html */

export interface SESDedicatedIpPool {
  Type: 'AWS::SES::DedicatedIpPool'
  Properties: {
    /**
     * - The name of the dedicated IP pool that the IP address is associated with.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-z0-9_-]{0,64}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-dedicatedippool.html#cfn-ses-dedicatedippool-poolname */
    PoolName?: string | Intrinsic
    /**
     * - The type of scaling mode.
     * - The following options are available:
     * - The `STANDARD` option is selected by default if no value is specified.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^(STANDARD|MANAGED)$`
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-dedicatedippool.html#cfn-ses-dedicatedippool-scalingmode */
    ScalingMode?: string | Intrinsic
  }
}
