import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Creates a new origin access control in CloudFront. After you create an origin access control, you can add it to an origin in a CloudFront distribution so that CloudFront sends authenticated (signed) requests to the origin.
 * This makes it possible to block public access to the origin, allowing viewers (users) to access the origin's content only through CloudFront.
 * For more information about using a CloudFront origin access control, see [Restricting access to an AWS origin](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-origin.html) in the _Amazon CloudFront Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originaccesscontrol.html */

export interface OriginAccessControlConfig {
    /**
     * - A description of the origin access control.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originaccesscontrol.html#cfn-cloudfront-originaccesscontrol-originaccesscontrolconfig-description */
    "Description"?: string | Intrinsic;
    /**
     * - A name to identify the origin access control. You can specify up to 64 characters.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originaccesscontrol.html#cfn-cloudfront-originaccesscontrol-originaccesscontrolconfig-name */
    "Name": string | Intrinsic;
    /**
     * - The type of origin that this origin access control is for.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(s3|mediastore|lambda|mediapackagev2)$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originaccesscontrol.html#cfn-cloudfront-originaccesscontrol-originaccesscontrolconfig-originaccesscontrolorigintype */
    "OriginAccessControlOriginType": string | Intrinsic;
    /**
     * - Specifies which requests CloudFront signs (adds authentication information to). Specify `always` for the most common use case. For more information, see [origin access control advanced settings](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html#oac-advanced-settings) in the _Amazon CloudFront Developer Guide_.
     * - This field can have one of the following values:
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(never|no-override|always)$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originaccesscontrol.html#cfn-cloudfront-originaccesscontrol-originaccesscontrolconfig-signingbehavior */
    "SigningBehavior": string | Intrinsic;
    /**
     * - The signing protocol of the origin access control, which determines how CloudFront signs (authenticates) requests. The only valid value is `sigv4`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(sigv4)$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originaccesscontrol.html#cfn-cloudfront-originaccesscontrol-originaccesscontrolconfig-signingprotocol */
    "SigningProtocol": string | Intrinsic;
}

/**
 * Creates a new origin access control in CloudFront. After you create an origin access control, you can add it to an origin in a CloudFront distribution so that CloudFront sends authenticated (signed) requests to the origin.
 * This makes it possible to block public access to the origin, allowing viewers (users) to access the origin's content only through CloudFront.
 * For more information about using a CloudFront origin access control, see [Restricting access to an AWS origin](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-origin.html) in the _Amazon CloudFront Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originaccesscontrol.html */

export interface CloudFrontOriginAccessControl extends ResourceAttributes {
    "Type": "AWS::CloudFront::OriginAccessControl";
    "Properties": {
        /**
         * - The origin access control.
         * - _Required_: Yes
         * - _Type_: [OriginAccessControlConfig](./aws-properties-cloudfront-originaccesscontrol-originaccesscontrolconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originaccesscontrol.html#cfn-cloudfront-originaccesscontrol-originaccesscontrolconfig */
        "OriginAccessControlConfig": OriginAccessControlConfig;
    };
}