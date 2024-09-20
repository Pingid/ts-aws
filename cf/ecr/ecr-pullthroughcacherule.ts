import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `AWS::ECR::PullThroughCacheRule` resource creates or updates a pull through cache rule. A pull through cache rule provides a way to cache images from an upstream registry in your Amazon ECR private registry.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-pullthroughcacherule.html */

export interface ECRPullThroughCacheRule extends ResourceAttributes {
  Type: 'AWS::ECR::PullThroughCacheRule'
  Properties: {
    /**
     * - The ARN of the Secrets Manager secret associated with the pull through cache rule.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:aws:secretsmanager:[a-zA-Z0-9-:]+:secret:ecr\-pullthroughcache\/[a-zA-Z0-9\/_+=.@-]+$`
     * - _Minimum_: `50`
     * - _Maximum_: `612`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-pullthroughcacherule.html#cfn-ecr-pullthroughcacherule-credentialarn */
    CredentialArn?: string | Intrinsic
    /**
     * - The Amazon ECR repository prefix associated with the pull through cache rule.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `(?:[a-z0-9]+(?:[._-][a-z0-9]+)*)*[a-z0-9]+(?:[._-][a-z0-9]+)*`
     * - _Minimum_: `2`
     * - _Maximum_: `30`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-pullthroughcacherule.html#cfn-ecr-pullthroughcacherule-ecrrepositoryprefix */
    EcrRepositoryPrefix?: string | Intrinsic
    /**
     * - The name of the upstream source registry associated with the pull through cache rule.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ecr-public | quay | k8s | docker-hub | github-container-registry | azure-container-registry | gitlab-container-registry`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-pullthroughcacherule.html#cfn-ecr-pullthroughcacherule-upstreamregistry */
    UpstreamRegistry?: string | Intrinsic
    /**
     * - The upstream registry URL associated with the pull through cache rule.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-pullthroughcacherule.html#cfn-ecr-pullthroughcacherule-upstreamregistryurl */
    UpstreamRegistryUrl?: string | Intrinsic
  }
}
