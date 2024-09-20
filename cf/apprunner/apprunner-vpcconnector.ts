import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Describes a tag that is applied to an AWS App Runner resource. A tag is a metadata item consisting of a key-value pair.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcconnector.html */

export interface Tag {
  /**
   * - The key of the tag assigned to the `VpcConnector` resource of the App Runner service.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(?!aws:).+`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcconnector.html#cfn-apprunner-vpcconnector-tag-key */
  Key?: string | Intrinsic
  /**
   * - The value of the tag assigned to the `VpcConnector` resource of the App Runner service.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `.*`
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcconnector.html#cfn-apprunner-vpcconnector-tag-value */
  Value?: string | Intrinsic
}

/**
 * The `AWS::AppRunner::VpcConnector` resource is an AWS App Runner resource type that specifies an App Runner VPC connector.
 * App Runner requires this resource when you want to associate your App Runner service to a custom Amazon Virtual Private Cloud (Amazon VPC).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcconnector.html */

export interface AppRunnerVpcConnector extends ResourceAttributes {
  Type: 'AWS::AppRunner::VpcConnector'
  Properties: {
    /**
     * - A list of IDs of security groups that App Runner should use for access to AWS resources under the specified subnets. If not specified, App Runner uses the default security group of the Amazon VPC. The default security group allows all outbound traffic.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcconnector.html#cfn-apprunner-vpcconnector-securitygroups */
    SecurityGroups?: (string | Intrinsic)[]
    /**
     * - A list of IDs of subnets that App Runner should use when it associates your service with a custom Amazon VPC. Specify IDs of subnets of a single Amazon VPC. App Runner determines the Amazon VPC from the subnets you specify.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcconnector.html#cfn-apprunner-vpcconnector-subnets */
    Subnets: (string | Intrinsic)[]
    /**
     * - A list of metadata items that you can associate with your VPC connector resource. A tag is a key-value pair.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-apprunner-vpcconnector-tag.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcconnector.html#cfn-apprunner-vpcconnector-tags */
    Tags?: Tag[]
    /**
     * - A name for the VPC connector.
     * - If you don't specify a name, AWS CloudFormation generates a name for your VPC connector.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[A-Za-z0-9][A-Za-z0-9-\\_]{3,39}$`
     * - _Minimum_: `4`
     * - _Maximum_: `40`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-vpcconnector.html#cfn-apprunner-vpcconnector-vpcconnectorname */
    VpcConnectorName?: string | Intrinsic
  }
}
