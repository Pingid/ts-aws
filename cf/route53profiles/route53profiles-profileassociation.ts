import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Tag for the Profile.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profileassociation.html */

export interface Tag {
  /**
   * - Key associated with the `Tag`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profileassociation.html#cfn-route53profiles-profileassociation-tag-key */
  Key: string | Intrinsic
  /**
   * - Value for the Tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profileassociation.html#cfn-route53profiles-profileassociation-tag-value */
  Value: string | Intrinsic
}

/**
 * An association between a Route 53 Profile and a VPC.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profileassociation.html */

export interface Route53ProfilesProfileAssociation extends ResourceAttributes {
  Type: 'AWS::Route53Profiles::ProfileAssociation'
  Properties: {
    /**
     * - The Amazon Resource Name (ARN) of the profile association to a VPC.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profileassociation.html#cfn-route53profiles-profileassociation-arn */
    Arn?: string | Intrinsic
    /**
     * - Name of the Profile association.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `(?!^[0-9]+$)([a-zA-Z0-9\-_' ']+)`
     * - _Minimum_: `0`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profileassociation.html#cfn-route53profiles-profileassociation-name */
    Name: string | Intrinsic
    /**
     * - ID of the Profile.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profileassociation.html#cfn-route53profiles-profileassociation-profileid */
    ProfileId: string | Intrinsic
    /**
     * - The ID of the VPC.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profileassociation.html#cfn-route53profiles-profileassociation-resourceid */
    ResourceId: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-route53profiles-profileassociation-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53profiles-profileassociation.html#cfn-route53profiles-profileassociation-tags */
    Tags?: Tag[]
  }
}
