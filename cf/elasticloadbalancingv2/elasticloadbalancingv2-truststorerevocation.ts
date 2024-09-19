import type { Intrinsic } from '../intrinsic/index.js' /**
 * Information about a revocation file. You must specify `S3Bucket` and `S3Key`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-truststorerevocation.html */

export interface RevocationContent {
  /**
   * - The type of revocation file.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `CRL`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-truststorerevocation.html#cfn-elasticloadbalancingv2-truststorerevocation-revocationcontent-revocationtype */
  RevocationType?: string | Intrinsic
  /**
   * - The Amazon S3 bucket for the revocation file.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-truststorerevocation.html#cfn-elasticloadbalancingv2-truststorerevocation-revocationcontent-s3bucket */
  S3Bucket?: string | Intrinsic
  /**
   * - The Amazon S3 path for the revocation file.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-truststorerevocation.html#cfn-elasticloadbalancingv2-truststorerevocation-revocationcontent-s3key */
  S3Key?: string | Intrinsic
  /**
   * - The Amazon S3 object version of the revocation file.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-truststorerevocation.html#cfn-elasticloadbalancingv2-truststorerevocation-revocationcontent-s3objectversion */
  S3ObjectVersion?: string | Intrinsic
}

/**
 * Adds the specified revocation contents to the specified trust store. You must specify `TrustStoreArn`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-truststorerevocation.html */

export interface ElasticLoadBalancingV2TrustStoreRevocation {
  Type: 'AWS::ElasticLoadBalancingV2::TrustStoreRevocation'
  Properties: {
    /**
     * - The revocation file to add.
     * - _Required_: No
     * - _Type_: Array of [RevocationContent](./aws-properties-elasticloadbalancingv2-truststorerevocation-revocationcontent.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-truststorerevocation.html#cfn-elasticloadbalancingv2-truststorerevocation-revocationcontents */
    RevocationContents?: RevocationContent[]
    /**
     * - The Amazon Resource Name (ARN) of the trust store.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-truststorerevocation.html#cfn-elasticloadbalancingv2-truststorerevocation-truststorearn */
    TrustStoreArn?: string | Intrinsic
  }
}
