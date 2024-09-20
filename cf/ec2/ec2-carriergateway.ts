import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Specifies a tag. For more information, see [Resource tags](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-carriergateway.html */

export interface Tag {
  /**
   * - The tag key.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(?!aws:.*)`
   * - _Minimum_: `1`
   * - _Maximum_: `127`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-carriergateway.html#cfn-ec2-carriergateway-tag-key */
  Key?: string | Intrinsic
  /**
   * - The tag value.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(?!aws:.*)`
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-carriergateway.html#cfn-ec2-carriergateway-tag-value */
  Value?: string | Intrinsic
}

/**
 * Creates a carrier gateway. For more information about carrier gateways, see [Carrier gateways](https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#wavelength-carrier-gateway) in the _AWS Wavelength Developer Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-carriergateway.html */

export interface EC2CarrierGateway extends ResourceAttributes {
  Type: 'AWS::EC2::CarrierGateway'
  Properties: {
    /**
     * - The tags assigned to the carrier gateway.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-ec2-carriergateway-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-carriergateway.html#cfn-ec2-carriergateway-tags */
    Tags?: Tag[]
    /**
     * - The ID of the VPC associated with the carrier gateway.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-carriergateway.html#cfn-ec2-carriergateway-vpcid */
    VpcId: string | Intrinsic
  }
}
