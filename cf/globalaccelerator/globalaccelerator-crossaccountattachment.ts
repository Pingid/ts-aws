import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A resource is one of the following: the ARN for an AWS resource that is supported by AWS Global Accelerator to be added as an endpoint, or a CIDR range that specifies a bring your own IP (BYOIP) address pool.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-crossaccountattachment.html */

export interface Resource {
  /**
   * - An IP address range, in CIDR format, that is specified as resource. The address must be provisioned and advertised in AWS Global Accelerator by following the bring your own IP address (BYOIP) process for Global Accelerator
   * - For more information, see [Bring your own IP addresses (BYOIP)](https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html) in the AWS Global Accelerator Developer Guide.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-crossaccountattachment.html#cfn-globalaccelerator-crossaccountattachment-resource-cidr */
  Cidr?: string | Intrinsic
  /**
   * - The endpoint ID for the endpoint that is specified as a AWS resource.
   * - An endpoint ID for the cross-account feature is the ARN of an AWS resource, such as a Network Load Balancer, that Global Accelerator supports as an endpoint for an accelerator.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-crossaccountattachment.html#cfn-globalaccelerator-crossaccountattachment-resource-endpointid */
  EndpointId?: string | Intrinsic
  /**
   * - The AWS Region where a shared endpoint resource is located.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-crossaccountattachment.html#cfn-globalaccelerator-crossaccountattachment-resource-region */
  Region?: string | Intrinsic
}

/**
 * A complex type that contains a `Tag` key and `Tag` value.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-crossaccountattachment.html */

export interface Tag {
  /**
   * - A string that contains a `Tag` key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `127`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-crossaccountattachment.html#cfn-globalaccelerator-crossaccountattachment-tag-key */
  Key: string | Intrinsic
  /**
   * - A string that contains a `Tag` value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-crossaccountattachment.html#cfn-globalaccelerator-crossaccountattachment-tag-value */
  Value: string | Intrinsic
}

/**
 * Create a cross-account attachment in AWS Global Accelerator. You create a cross-account attachment to specify the _principals_ who have permission to work with _resources_ in accelerators in their own account. You specify, in the same attachment, the resources that are shared.
 * A principal can be an AWS account number or the Amazon Resource Name (ARN) for an accelerator. For account numbers that are listed as principals, to work with a resource listed in the attachment, you must sign in to an account specified as a principal. Then, you can work with resources that are listed, with any of your accelerators. If an accelerator ARN is listed in the cross-account attachment as a principal, anyone with permission to make updates to the accelerator can work with resources that are listed in the attachment.
 * Specify each principal and resource separately. To specify two CIDR address pools, list them individually under `Resources`, and so on. For a command line operation, for example, you might use a statement like the following:
 * `"Resources": [{"Cidr": "169.254.60.0/24"},{"Cidr": "169.254.59.0/24"}]`
 * For more information, see [Working with cross-account attachments and resources in AWS Global Accelerator](https://docs.aws.amazon.com/global-accelerator/latest/dg/cross-account-resources.html) in the _AWS Global Accelerator Developer Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-crossaccountattachment.html */

export interface GlobalAcceleratorCrossAccountAttachment extends ResourceAttributes {
  Type: 'AWS::GlobalAccelerator::CrossAccountAttachment'
  Properties: {
    /**
     * - The name of the cross-account attachment.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_-]{0,64}$`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-crossaccountattachment.html#cfn-globalaccelerator-crossaccountattachment-name */
    Name: string | Intrinsic
    /**
     * - The principals included in the cross-account attachment.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-crossaccountattachment.html#cfn-globalaccelerator-crossaccountattachment-principals */
    Principals?: (string | Intrinsic)[]
    /**
     * - The resources included in the cross-account attachment.
     * - _Required_: No
     * - _Type_: Array of [Resource](./aws-properties-globalaccelerator-crossaccountattachment-resource.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-crossaccountattachment.html#cfn-globalaccelerator-crossaccountattachment-resources */
    Resources?: Resource[]
    /**
     * - Add tags for a cross-account attachment.
     * - For more information, see [Tagging in AWS Global Accelerator](https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html) in the _AWS Global Accelerator Developer Guide_.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-globalaccelerator-crossaccountattachment-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-crossaccountattachment.html#cfn-globalaccelerator-crossaccountattachment-tags */
    Tags?: Tag[]
  }
}
