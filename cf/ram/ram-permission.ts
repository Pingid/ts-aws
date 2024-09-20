import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A structure containing a tag. A tag is metadata that you can attach to your resources to help organize and categorize them. You can also use them to help you secure your resources. For more information, see [Controlling access to AWS resources using tags](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html).
 * For more information about tags, see [Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the _AWS General Reference Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-permission.html */

export interface Tag {
  /**
   * - The key, or name, attached to the tag. Every tag must have a key. Key names are case sensitive.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-permission.html#cfn-ram-permission-tag-key */
  Key: string | Intrinsic
  /**
   * - The string value attached to the tag. The value can be an empty string. Key values are case sensitive.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-permission.html#cfn-ram-permission-tag-value */
  Value: string | Intrinsic
}

/**
 * Creates a customer managed permission for a specified resource type that you can attach to resource shares. It is created in the AWS Region in which you call the operation.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-permission.html */

export interface RAMPermission extends ResourceAttributes {
  Type: 'AWS::RAM::Permission'
  Properties: {
    /**
     * - Specifies the name of the customer managed permission. The name must be unique within the AWS Region.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\w.-]*`
     * - _Minimum_: `1`
     * - _Maximum_: `36`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-permission.html#cfn-ram-permission-name */
    Name: string | Intrinsic
    /**
     * - A string in JSON format string that contains the following elements of a resource-based policy:
     * - This template can't include either the `Resource` or `Principal` elements. Those are both filled in by AWS RAM when it instantiates the resource-based policy on each resource shared using this managed permission. The `Resource` comes from the ARN of the specific resource that you are sharing. The `Principal` comes from the list of identities added to the resource share.
     * - _Required_: Yes
     * - _Type_: Json
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-permission.html#cfn-ram-permission-policytemplate */
    PolicyTemplate: any | Intrinsic
    /**
     * - Specifies the name of the resource type that this customer managed permission applies to.
     * - The format is `_<service-code>_:_<resource-type>_` and is not case sensitive. For example, to specify an Amazon EC2 Subnet, you can use the string `ec2:subnet`. To see the list of valid values for this parameter, query the [ListResourceTypes](https://docs.aws.amazon.com/ram/latest/APIReference/API_ListResourceTypes.html) operation.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-permission.html#cfn-ram-permission-resourcetype */
    ResourceType: string | Intrinsic
    /**
     * - Specifies a list of one or more tag key and value pairs to attach to the permission.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-ram-permission-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ram-permission.html#cfn-ram-permission-tags */
    Tags?: Tag[]
  }
}
