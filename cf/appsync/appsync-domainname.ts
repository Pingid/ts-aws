import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A tag (key-value pair) for this domain name.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainname.html */

export interface Tag {
    /**
     * - Describes the key of the tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?!aws:)[ a-zA-Z+-=._:/]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainname.html#cfn-appsync-domainname-tag-key */
    "Key": string | Intrinsic;
    /**
     * - Describes the value of the tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[\s\w+-=\.:/@]*$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainname.html#cfn-appsync-domainname-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The `AWS::AppSync::DomainName` resource creates a `DomainNameConfig` object to configure a custom domain.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainname.html */

export interface AppSyncDomainName extends ResourceAttributes {
    "Type": "AWS::AppSync::DomainName";
    "Properties": {
        /**
         * - The Amazon Resource Name (ARN) of the certificate. This will be an AWS Certificate Manager certificate.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:[a-z-]*:acm:[a-z0-9-]*:\d{12}:certificate/[0-9A-Za-z_/-]*$`
         * - _Minimum_: `3`
         * - _Maximum_: `2048`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainname.html#cfn-appsync-domainname-certificatearn */
        "CertificateArn": string | Intrinsic;
        /**
         * - The decription for your domain name.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `0`
         * - _Maximum_: `255`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainname.html#cfn-appsync-domainname-description */
        "Description"?: string | Intrinsic;
        /**
         * - The domain name.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^(\*[a-z\d-]*\.)?([a-z\d-]+\.)+[a-z\d-]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `253`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainname.html#cfn-appsync-domainname-domainname */
        "DomainName": string | Intrinsic;
        /**
         * - A set of tags (key-value pairs) for this domain name.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-appsync-domainname-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainname.html#cfn-appsync-domainname-tags */
        "Tags"?: Tag[];
    };
}