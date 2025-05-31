import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Specifies an SSL server certificate for the certificate list of a secure listener.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenercertificate.html */

export interface Certificate {
    /**
     * - The Amazon Resource Name (ARN) of the certificate.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenercertificate.html#cfn-elasticloadbalancingv2-listenercertificate-certificate-certificatearn */
    "CertificateArn"?: string | Intrinsic;
}

/**
 * Specifies an SSL server certificate to add to the certificate list for an HTTPS or TLS listener.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenercertificate.html */

export interface ElasticLoadBalancingV2ListenerCertificate extends ResourceAttributes {
    "Type": "AWS::ElasticLoadBalancingV2::ListenerCertificate";
    "Properties": {
        /**
         * - The certificate. You can specify one certificate per resource.
         * - _Required_: Yes
         * - _Type_: Array of [Certificate](./aws-properties-elasticloadbalancingv2-listenercertificate-certificate.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenercertificate.html#cfn-elasticloadbalancingv2-listenercertificate-certificates */
        "Certificates": Certificate[];
        /**
         * - The Amazon Resource Name (ARN) of the listener.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenercertificate.html#cfn-elasticloadbalancingv2-listenercertificate-listenerarn */
        "ListenerArn": string | Intrinsic;
    };
}