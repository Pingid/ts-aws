import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * An Amazon CloudFront VPC origin endpoint configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-vpcorigin.html */

export interface VpcOriginEndpointConfig {
    /**
     * - The ARN of the CloudFront VPC origin endpoint configuration.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-vpcorigin.html#cfn-cloudfront-vpcorigin-vpcoriginendpointconfig-arn */
    "Arn": string | Intrinsic;
    /**
     * - The HTTP port for the CloudFront VPC origin endpoint configuration. The default value is `80`.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-vpcorigin.html#cfn-cloudfront-vpcorigin-vpcoriginendpointconfig-httpport */
    "HTTPPort"?: number | Intrinsic;
    /**
     * - The HTTPS port of the CloudFront VPC origin endpoint configuration. The default value is `443`.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-vpcorigin.html#cfn-cloudfront-vpcorigin-vpcoriginendpointconfig-httpsport */
    "HTTPSPort"?: number | Intrinsic;
    /**
     * - The name of the CloudFront VPC origin endpoint configuration.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-vpcorigin.html#cfn-cloudfront-vpcorigin-vpcoriginendpointconfig-name */
    "Name": string | Intrinsic;
    /**
     * - The origin protocol policy for the CloudFront VPC origin endpoint configuration.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `http-only | match-viewer | https-only`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-vpcorigin.html#cfn-cloudfront-vpcorigin-vpcoriginendpointconfig-originprotocolpolicy */
    "OriginProtocolPolicy"?: string | Intrinsic;
    /**
     * - Specifies the minimum SSL/TLS protocol that CloudFront uses when connecting to your origin over HTTPS. Valid values include `SSLv3`, `TLSv1`, `TLSv1.1`, and `TLSv1.2`.
     * - For more information, see [Minimum Origin SSL Protocol](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginSSLProtocols) in the _Amazon CloudFront Developer Guide_.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-vpcorigin.html#cfn-cloudfront-vpcorigin-vpcoriginendpointconfig-originsslprotocols */
    "OriginSSLProtocols"?: (string | Intrinsic)[];
}

/**
 * A complex type that contains `Tag` key and `Tag` value.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-vpcorigin.html */

export interface Tag {
    /**
     * - A string that contains `Tag` key.
     * - The string length should be between 1 and 128 characters. Valid characters include `a-z`, `A-Z`, `0-9`, space, and the special characters `_ - . : / = + @`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-vpcorigin.html#cfn-cloudfront-vpcorigin-tag-key */
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
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-vpcorigin.html#cfn-cloudfront-vpcorigin-tag-value */
    "Value": string | Intrinsic;
}

/**
 * An Amazon CloudFront VPC origin.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-vpcorigin.html */

export interface CloudFrontVpcOrigin extends ResourceAttributes {
    "Type": "AWS::CloudFront::VpcOrigin";
    "Properties": {
        /**
         * - A complex type that contains zero or more `Tag` elements.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-cloudfront-vpcorigin-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-vpcorigin.html#cfn-cloudfront-vpcorigin-tags */
        "Tags"?: Tag[];
        /**
         * - The VPC origin endpoint configuration.
         * - _Required_: Yes
         * - _Type_: [VpcOriginEndpointConfig](./aws-properties-cloudfront-vpcorigin-vpcoriginendpointconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-vpcorigin.html#cfn-cloudfront-vpcorigin-vpcoriginendpointconfig */
        "VpcOriginEndpointConfig": VpcOriginEndpointConfig;
    };
}