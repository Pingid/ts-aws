import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `IpPool` property type specifies Property description not available. for an [AWS::MediaLive::Network](./aws-resource-medialive-network.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-network.html */

export interface IpPool {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-network.html#cfn-medialive-network-ippool-cidr */
  Cidr?: string | Intrinsic
}

/**
 * The `Route` property type specifies Property description not available. for an [AWS::MediaLive::Network](./aws-resource-medialive-network.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-network.html */

export interface Route {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-network.html#cfn-medialive-network-route-cidr */
  Cidr?: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-network.html#cfn-medialive-network-route-gateway */
  Gateway?: string | Intrinsic
}

/**
 * The `Tags` property type specifies Property description not available. for an [AWS::MediaLive::Network](./aws-resource-medialive-network.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-network.html */

export interface Tags {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-network.html#cfn-medialive-network-tags-key */
  Key?: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-network.html#cfn-medialive-network-tags-value */
  Value?: string | Intrinsic
}

/**
 * The `AWS::MediaLive::Network` resource Property description not available. for MediaLive.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-network.html */

export interface MediaLiveNetwork extends ResourceAttributes {
  Type: 'AWS::MediaLive::Network'
  Properties: {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: Array of [IpPool](./aws-properties-medialive-network-ippool.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-network.html#cfn-medialive-network-ippools */
    IpPools: IpPool[]
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-network.html#cfn-medialive-network-name */
    Name: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Array of [Route](./aws-properties-medialive-network-route.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-network.html#cfn-medialive-network-routes */
    Routes?: Route[]
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [Array](./aws-properties-medialive-network-tags.html) of [Tags](./aws-properties-medialive-network-tags.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-network.html#cfn-medialive-network-tags */
    Tags?: Tags[]
  }
}
