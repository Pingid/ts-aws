import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A complex type that contains `Tag` key and `Tag` value.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-connectiongroup.html */

export interface Tag {
    /**
     * - A string that contains `Tag` key.
     * - The string length should be between 1 and 128 characters. Valid characters include `a-z`, `A-Z`, `0-9`, space, and the special characters `_ - . : / = + @`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-connectiongroup.html#cfn-cloudfront-connectiongroup-tag-key */
    "Key": string | Intrinsic;
    /**
     * - A string that contains an optional `Tag` value.
     * - The string length should be between 0 and 256 characters. Valid characters include `a-z`, `A-Z`, `0-9`, space, and the special characters `_ - . : / = + @`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `([\p{L}\p{Z}\p{N}_.:/=+\-@]*)`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-connectiongroup.html#cfn-cloudfront-connectiongroup-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The connection group for your distribution tenants. When you first create a distribution tenant and you don't specify a connection group, CloudFront will automatically create a default connection group for you. When you create a new distribution tenant and don't specify a connection group, the default one will be associated with your distribution tenant.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-connectiongroup.html */

export interface CloudFrontConnectionGroup extends ResourceAttributes {
    "Type": "AWS::CloudFront::ConnectionGroup";
    "Properties": {
        /**
         * - The ID of the Anycast static IP list.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-connectiongroup.html#cfn-cloudfront-connectiongroup-anycastiplistid */
        "AnycastIpListId"?: string | Intrinsic;
        /**
         * - Whether the connection group is enabled.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-connectiongroup.html#cfn-cloudfront-connectiongroup-enabled */
        "Enabled"?: boolean | Intrinsic;
        /**
         * - IPv6 is enabled for the connection group.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-connectiongroup.html#cfn-cloudfront-connectiongroup-ipv6enabled */
        "Ipv6Enabled"?: boolean | Intrinsic;
        /**
         * - The name of the connection group.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-connectiongroup.html#cfn-cloudfront-connectiongroup-name */
        "Name": string | Intrinsic;
        /**
         * - A complex type that contains zero or more `Tag` elements.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-cloudfront-connectiongroup-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-connectiongroup.html#cfn-cloudfront-connectiongroup-tags */
        "Tags"?: Tag[];
    };
}