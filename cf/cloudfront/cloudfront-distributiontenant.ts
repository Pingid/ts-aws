import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A complex type that contains `Tag` key and `Tag` value.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html */

export interface Tag {
    /**
     * - A string that contains `Tag` key.
     * - The string length should be between 1 and 128 characters. Valid characters include `a-z`, `A-Z`, `0-9`, space, and the special characters `_ - . : / = + @`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html#cfn-cloudfront-distributiontenant-tag-key */
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
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html#cfn-cloudfront-distributiontenant-tag-value */
    "Value": string | Intrinsic;
}

/**
 * A list of parameter values to add to the resource. A parameter is specified as a key-value pair. A valid parameter value must exist for any parameter that is marked as required in the multi-tenant distribution.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html */

export interface Parameter {
    /**
     * - The parameter name.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9-_]+`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html#cfn-cloudfront-distributiontenant-parameter-name */
    "Name"?: string | Intrinsic;
    /**
     * - The parameter value.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html#cfn-cloudfront-distributiontenant-parameter-value */
    "Value"?: string | Intrinsic;
}

/**
 * An object that represents the request for the Amazon CloudFront managed ACM certificate.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html */

export interface ManagedCertificateRequest {
    /**
     * - You can opt out of certificate transparency logging by specifying the `disabled` option. Opt in by specifying `enabled`. For more information, see [Certificate Transparency Logging](https://docs.aws.amazon.com/acm/latest/userguide/acm-concepts.html#concept-transparency) in the _AWS Certificate Manager User Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `enabled | disabled`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html#cfn-cloudfront-distributiontenant-managedcertificaterequest-certificatetransparencyloggingpreference */
    "CertificateTransparencyLoggingPreference"?: string | Intrinsic;
    /**
     * - The primary domain name associated with the CloudFront managed ACM certificate.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html#cfn-cloudfront-distributiontenant-managedcertificaterequest-primarydomainname */
    "PrimaryDomainName"?: string | Intrinsic;
    /**
     * - Specify how the HTTP validation token will be served when requesting the CloudFront managed ACM certificate.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `cloudfront | self-hosted`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html#cfn-cloudfront-distributiontenant-managedcertificaterequest-validationtokenhost */
    "ValidationTokenHost"?: string | Intrinsic;
}

/**
 * The AWS Certificate Manager (ACM) certificate associated with your distribution.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html */

export interface Certificate {
    /**
     * - The Amazon Resource Name (ARN) of the ACM certificate.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html#cfn-cloudfront-distributiontenant-certificate-arn */
    "Arn"?: string | Intrinsic;
}

/**
 * The customizations that you specified for the distribution tenant for geographic restrictions.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html */

export interface GeoRestrictionCustomization {
    /**
     * - The locations for geographic restrictions.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html#cfn-cloudfront-distributiontenant-georestrictioncustomization-locations */
    "Locations"?: (string | Intrinsic)[];
    /**
     * - The method that you want to use to restrict distribution of your content by country:
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `blacklist | whitelist | none`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html#cfn-cloudfront-distributiontenant-georestrictioncustomization-restrictiontype */
    "RestrictionType"?: string | Intrinsic;
}

/**
 * The AWS WAF web ACL customization specified for the distribution tenant.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html */

export interface WebAclCustomization {
    /**
     * - The action for the AWS WAF web ACL customization. You can specify `override` to specify a separate AWS WAF web ACL for the distribution tenant. If you specify `disable`, the distribution tenant won't have AWS WAF web ACL protections and won't inherit from the multi-tenant distribution.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `override | disable`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html#cfn-cloudfront-distributiontenant-webaclcustomization-action */
    "Action"?: string | Intrinsic;
    /**
     * - The Amazon Resource Name (ARN) of the AWS WAF web ACL.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html#cfn-cloudfront-distributiontenant-webaclcustomization-arn */
    "Arn"?: string | Intrinsic;
}

/**
 * Customizations for the distribution tenant. For each distribution tenant, you can specify the geographic restrictions, and the Amazon Resource Names (ARNs) for the ACM certificate and AWS WAF web ACL. These are specific values that you can override or disable from the multi-tenant distribution that was used to create the distribution tenant.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html */

export interface Customizations {
    /**
     * - The AWS Certificate Manager (ACM) certificate.
     * - _Required_: No
     * - _Type_: [Certificate](./aws-properties-cloudfront-distributiontenant-certificate.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html#cfn-cloudfront-distributiontenant-customizations-certificate */
    "Certificate"?: Certificate;
    /**
     * - The geographic restrictions.
     * - _Required_: No
     * - _Type_: [GeoRestrictionCustomization](./aws-properties-cloudfront-distributiontenant-georestrictioncustomization.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html#cfn-cloudfront-distributiontenant-customizations-georestrictions */
    "GeoRestrictions"?: GeoRestrictionCustomization;
    /**
     * - The AWS WAF web ACL.
     * - _Required_: No
     * - _Type_: [WebAclCustomization](./aws-properties-cloudfront-distributiontenant-webaclcustomization.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html#cfn-cloudfront-distributiontenant-customizations-webacl */
    "WebAcl"?: WebAclCustomization;
}

/**
 * The distribution tenant.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html */

export interface CloudFrontDistributionTenant extends ResourceAttributes {
    "Type": "AWS::CloudFront::DistributionTenant";
    "Properties": {
        /**
         * - The ID of the connection group for the distribution tenant. If you don't specify a connection group, CloudFront uses the default connection group.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html#cfn-cloudfront-distributiontenant-connectiongroupid */
        "ConnectionGroupId"?: string | Intrinsic;
        /**
         * - Customizations for the distribution tenant. For each distribution tenant, you can specify the geographic restrictions, and the Amazon Resource Names (ARNs) for the ACM certificate and AWS WAF web ACL. These are specific values that you can override or disable from the multi-tenant distribution that was used to create the distribution tenant.
         * - _Required_: No
         * - _Type_: [Customizations](./aws-properties-cloudfront-distributiontenant-customizations.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html#cfn-cloudfront-distributiontenant-customizations */
        "Customizations"?: Customizations;
        /**
         * - The ID of the multi-tenant distribution.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html#cfn-cloudfront-distributiontenant-distributionid */
        "DistributionId": string | Intrinsic;
        /**
         * - The domains associated with the distribution tenant.
         * - _Required_: Yes
         * - _Type_: Array of String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html#cfn-cloudfront-distributiontenant-domains */
        "Domains": (string | Intrinsic)[];
        /**
         * - Indicates whether the distribution tenant is in an enabled state. If disabled, the distribution tenant won't serve traffic.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html#cfn-cloudfront-distributiontenant-enabled */
        "Enabled"?: boolean | Intrinsic;
        /**
         * - An object that represents the request for the Amazon CloudFront managed ACM certificate.
         * - _Required_: No
         * - _Type_: [ManagedCertificateRequest](./aws-properties-cloudfront-distributiontenant-managedcertificaterequest.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html#cfn-cloudfront-distributiontenant-managedcertificaterequest */
        "ManagedCertificateRequest"?: ManagedCertificateRequest;
        /**
         * - The name of the distribution tenant.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html#cfn-cloudfront-distributiontenant-name */
        "Name": string | Intrinsic;
        /**
         * - A list of parameter values to add to the resource. A parameter is specified as a key-value pair. A valid parameter value must exist for any parameter that is marked as required in the multi-tenant distribution.
         * - _Required_: No
         * - _Type_: Array of [Parameter](./aws-properties-cloudfront-distributiontenant-parameter.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html#cfn-cloudfront-distributiontenant-parameters */
        "Parameters"?: Parameter[];
        /**
         * - A complex type that contains zero or more `Tag` elements.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-cloudfront-distributiontenant-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distributiontenant.html#cfn-cloudfront-distributiontenant-tags */
        "Tags"?: Tag[];
    };
}