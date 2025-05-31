import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in requests that CloudFront sends to the origin.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originrequestpolicy.html */

export interface CookiesConfig {
    /**
     * - Determines whether cookies in viewer requests are included in requests that CloudFront sends to the origin. Valid values are:
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(none|whitelist|all|allExcept)$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originrequestpolicy.html#cfn-cloudfront-originrequestpolicy-cookiesconfig-cookiebehavior */
    "CookieBehavior": string | Intrinsic;
    /**
     * - Contains a list of cookie names.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originrequestpolicy.html#cfn-cloudfront-originrequestpolicy-cookiesconfig-cookies */
    "Cookies"?: (string | Intrinsic)[];
}

/**
 * An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in requests that CloudFront sends to the origin.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originrequestpolicy.html */

export interface QueryStringsConfig {
    /**
     * - Determines whether any URL query strings in viewer requests are included in requests that CloudFront sends to the origin. Valid values are:
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(none|whitelist|all|allExcept)$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originrequestpolicy.html#cfn-cloudfront-originrequestpolicy-querystringsconfig-querystringbehavior */
    "QueryStringBehavior": string | Intrinsic;
    /**
     * - Contains a list of query string names.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originrequestpolicy.html#cfn-cloudfront-originrequestpolicy-querystringsconfig-querystrings */
    "QueryStrings"?: (string | Intrinsic)[];
}

/**
 * An object that determines whether any HTTP headers (and if so, which headers) are included in requests that CloudFront sends to the origin.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originrequestpolicy.html */

export interface HeadersConfig {
    /**
     * - Determines whether any HTTP headers are included in requests that CloudFront sends to the origin. Valid values are:
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(none|whitelist|allViewer|allViewerAndWhitelistCloudFront|allExcept)$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originrequestpolicy.html#cfn-cloudfront-originrequestpolicy-headersconfig-headerbehavior */
    "HeaderBehavior": string | Intrinsic;
    /**
     * - Contains a list of HTTP header names.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originrequestpolicy.html#cfn-cloudfront-originrequestpolicy-headersconfig-headers */
    "Headers"?: (string | Intrinsic)[];
}

/**
 * An origin request policy configuration.
 * This configuration determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:
 * *   The request body and the URL path (without the domain name) from the viewer request.
 *     
 * *   The headers that CloudFront automatically includes in every origin request, including `Host`, `User-Agent`, and `X-Amz-Cf-Id`.
 *     
 * *   All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.
 * CloudFront sends a request when it can't find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use `CachePolicy`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originrequestpolicy.html */

export interface OriginRequestPolicyConfig {
    /**
     * - A comment to describe the origin request policy. The comment cannot be longer than 128 characters.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originrequestpolicy.html#cfn-cloudfront-originrequestpolicy-originrequestpolicyconfig-comment */
    "Comment"?: string | Intrinsic;
    /**
     * - The cookies from viewer requests to include in origin requests.
     * - _Required_: Yes
     * - _Type_: [CookiesConfig](./aws-properties-cloudfront-originrequestpolicy-cookiesconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originrequestpolicy.html#cfn-cloudfront-originrequestpolicy-originrequestpolicyconfig-cookiesconfig */
    "CookiesConfig": CookiesConfig;
    /**
     * - The HTTP headers to include in origin requests. These can include headers from viewer requests and additional headers added by CloudFront.
     * - _Required_: Yes
     * - _Type_: [HeadersConfig](./aws-properties-cloudfront-originrequestpolicy-headersconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originrequestpolicy.html#cfn-cloudfront-originrequestpolicy-originrequestpolicyconfig-headersconfig */
    "HeadersConfig": HeadersConfig;
    /**
     * - A unique name to identify the origin request policy.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originrequestpolicy.html#cfn-cloudfront-originrequestpolicy-originrequestpolicyconfig-name */
    "Name": string | Intrinsic;
    /**
     * - The URL query strings from viewer requests to include in origin requests.
     * - _Required_: Yes
     * - _Type_: [QueryStringsConfig](./aws-properties-cloudfront-originrequestpolicy-querystringsconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originrequestpolicy.html#cfn-cloudfront-originrequestpolicy-originrequestpolicyconfig-querystringsconfig */
    "QueryStringsConfig": QueryStringsConfig;
}

/**
 * An origin request policy.
 * When it's attached to a cache behavior, the origin request policy determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:
 * *   The request body and the URL path (without the domain name) from the viewer request.
 *     
 * *   The headers that CloudFront automatically includes in every origin request, including `Host`, `User-Agent`, and `X-Amz-Cf-Id`.
 *     
 * *   All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.
 * CloudFront sends a request when it can't find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use `CachePolicy`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originrequestpolicy.html */

export interface CloudFrontOriginRequestPolicy extends ResourceAttributes {
    "Type": "AWS::CloudFront::OriginRequestPolicy";
    "Properties": {
        /**
         * - The origin request policy configuration.
         * - _Required_: Yes
         * - _Type_: [OriginRequestPolicyConfig](./aws-properties-cloudfront-originrequestpolicy-originrequestpolicyconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originrequestpolicy.html#cfn-cloudfront-originrequestpolicy-originrequestpolicyconfig */
        "OriginRequestPolicyConfig": OriginRequestPolicyConfig;
    };
}