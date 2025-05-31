import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `AWS::Lightsail::LoadBalancerTlsCertificate` resource specifies a TLS certificate that can be used with a Lightsail load balancer.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancertlscertificate.html */

export interface LightsailLoadBalancerTlsCertificate extends ResourceAttributes {
    "Type": "AWS::Lightsail::LoadBalancerTlsCertificate";
    "Properties": {
        /**
         * - An array of alternative domain names and subdomain names for your SSL/TLS certificate.
         * - In addition to the primary domain name, you can have up to nine alternative domain names. Wildcards (such as `*.example.com`) are not supported.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Update requires_: Updates are not supported.
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancertlscertificate.html#cfn-lightsail-loadbalancertlscertificate-certificatealternativenames */
        "CertificateAlternativeNames"?: (string | Intrinsic)[];
        /**
         * - The domain name for the SSL/TLS certificate. For example, `example.com` or `www.example.com`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: Updates are not supported.
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancertlscertificate.html#cfn-lightsail-loadbalancertlscertificate-certificatedomainname */
        "CertificateDomainName": string | Intrinsic;
        /**
         * - The name of the SSL/TLS certificate.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancertlscertificate.html#cfn-lightsail-loadbalancertlscertificate-certificatename */
        "CertificateName": string | Intrinsic;
        /**
         * - A Boolean value indicating whether HTTPS redirection is enabled for the load balancer that the TLS certificate is attached to.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancertlscertificate.html#cfn-lightsail-loadbalancertlscertificate-httpsredirectionenabled */
        "HttpsRedirectionEnabled"?: boolean | Intrinsic;
        /**
         * - A Boolean value indicating whether the SSL/TLS certificate is attached to a Lightsail load balancer.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancertlscertificate.html#cfn-lightsail-loadbalancertlscertificate-isattached */
        "IsAttached"?: boolean | Intrinsic;
        /**
         * - The name of the load balancer that the SSL/TLS certificate is attached to.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `\w[\w\-]*\w`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lightsail-loadbalancertlscertificate.html#cfn-lightsail-loadbalancertlscertificate-loadbalancername */
        "LoadBalancerName": string | Intrinsic;
    };
}