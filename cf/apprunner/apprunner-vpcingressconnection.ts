import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Specifications for the customer’s VPC and related PrivateLink VPC endpoint that are used to associate with the VPC Ingress Connection resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcingressconnection.html */

export interface IngressVpcConfiguration {
  /**
   * - The ID of the VPC endpoint that your App Runner service connects to.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `.*`
   * - _Minimum_: `0`
   * - _Maximum_: `51200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcingressconnection.html#cfn-apprunner-vpcingressconnection-ingressvpcconfiguration-vpcendpointid */
  VpcEndpointId: string | Intrinsic
  /**
   * - The ID of the VPC that is used for the VPC endpoint.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `.*`
   * - _Minimum_: `0`
   * - _Maximum_: `51200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcingressconnection.html#cfn-apprunner-vpcingressconnection-ingressvpcconfiguration-vpcid */
  VpcId: string | Intrinsic
}

/**
 * Describes a tag that is applied to an AWS App Runner resource. A tag is a metadata item consisting of a key-value pair.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcingressconnection.html */

export interface Tag {
  /**
   * - The key of the tag.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(?!aws:).+`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcingressconnection.html#cfn-apprunner-vpcingressconnection-tag-key */
  Key?: string | Intrinsic
  /**
   * - The value of the tag assigned to `VpcIngressConnection` resource of the App Runner service.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `.*`
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcingressconnection.html#cfn-apprunner-vpcingressconnection-tag-value */
  Value?: string | Intrinsic
}

/**
 * The `AWS::AppRunner::VpcIngressConnection` resource is an AWS App Runner resource type that specifies an App Runner VPC Ingress Connection.
 * App Runner requires this resource when you want to associate your App Runner service to an Amazon VPC endpoint.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcingressconnection.html */

export interface AppRunnerVpcIngressConnection extends ResourceAttributes {
  Type: 'AWS::AppRunner::VpcIngressConnection'
  Properties: {
    /**
     * - Specifications for the customer’s Amazon VPC and the related AWS PrivateLink VPC endpoint that are used to create the VPC Ingress Connection resource.
     * - _Required_: Yes
     * - _Type_: [IngressVpcConfiguration](./aws-properties-apprunner-vpcingressconnection-ingressvpcconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcingressconnection.html#cfn-apprunner-vpcingressconnection-ingressvpcconfiguration */
    IngressVpcConfiguration: IngressVpcConfiguration
    /**
     * - The Amazon Resource Name (ARN) for this App Runner service that is used to create the VPC Ingress Connection resource.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `arn:aws(-[\w]+)*:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[0-9]{12}:(\w|/|-){1,1011}`
     * - _Minimum_: `1`
     * - _Maximum_: `1011`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcingressconnection.html#cfn-apprunner-vpcingressconnection-servicearn */
    ServiceArn: string | Intrinsic
    /**
     * - An optional list of metadata items that you can associate with the VPC Ingress Connection resource. A tag is a key-value pair.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-apprunner-vpcingressconnection-tag.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcingressconnection.html#cfn-apprunner-vpcingressconnection-tags */
    Tags?: Tag[]
    /**
     * - The customer-provided VPC Ingress Connection name.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[A-Za-z0-9][A-Za-z0-9\-_]{3,39}`
     * - _Minimum_: `4`
     * - _Maximum_: `40`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcingressconnection.html#cfn-apprunner-vpcingressconnection-vpcingressconnectionname */
    VpcIngressConnectionName?: string | Intrinsic
  }
}
