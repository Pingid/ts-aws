import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Specifies a tag. For more information, see [Resource tags](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-customergateway.html */

export interface Tag {
  /**
   * - The tag key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-customergateway.html#cfn-ec2-customergateway-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-customergateway.html#cfn-ec2-customergateway-tag-value */
  Value: string | Intrinsic
}

/**
 * Specifies a customer gateway.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-customergateway.html */

export interface EC2CustomerGateway extends ResourceAttributes {
  Type: 'AWS::EC2::CustomerGateway'
  Properties: {
    /**
     * - For customer gateway devices that support BGP, specify the device's ASN. You must specify either `BgpAsn` or `BgpAsnExtended` when creating the customer gateway. If the ASN is larger than `2,147,483,647`, you must use `BgpAsnExtended`.
     * - Default: 65000
     * - Valid values: `1` to `2,147,483,647`
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-customergateway.html#cfn-ec2-customergateway-bgpasn */
    BgpAsn?: number | Intrinsic
    /**
     * - For customer gateway devices that support BGP, specify the device's ASN. You must specify either `BgpAsn` or `BgpAsnExtended` when creating the customer gateway. If the ASN is larger than `2,147,483,647`, you must use `BgpAsnExtended`.
     * - Valid values: `2,147,483,648` to `4,294,967,295`
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `2147483648`
     * - _Maximum_: `4294967294`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-customergateway.html#cfn-ec2-customergateway-bgpasnextended */
    BgpAsnExtended?: number | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) for the customer gateway certificate.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:(aws[a-zA-Z-]*)?:acm:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:\d{12}:certificate\/[a-zA-Z0-9-_]+$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-customergateway.html#cfn-ec2-customergateway-certificatearn */
    CertificateArn?: string | Intrinsic
    /**
     * - The name of customer gateway device.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-customergateway.html#cfn-ec2-customergateway-devicename */
    DeviceName?: string | Intrinsic
    /**
     * - IPv4 address for the customer gateway device's outside interface. The address must be static. If `OutsideIpAddressType` in your VPN connection options is set to `PrivateIpv4`, you can use an RFC6598 or RFC1918 private IPv4 address. If `OutsideIpAddressType` is set to `PublicIpv4`, you can use a public IPv4 address.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-customergateway.html#cfn-ec2-customergateway-ipaddress */
    IpAddress: string | Intrinsic
    /**
     * - One or more tags for the customer gateway.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-ec2-customergateway-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-customergateway.html#cfn-ec2-customergateway-tags */
    Tags?: Tag[]
    /**
     * - The type of VPN connection that this customer gateway supports (`ipsec.1`).
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ipsec.1`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-customergateway.html#cfn-ec2-customergateway-type */
    Type: string | Intrinsic
  }
}
