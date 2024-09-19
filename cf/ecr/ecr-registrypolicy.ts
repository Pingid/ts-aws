import type { Intrinsic } from '../intrinsic/index.js' /**
 * The `AWS::ECR::RegistryPolicy` resource creates or updates the permissions policy for a private registry.
 * A private registry policy is used to specify permissions for another AWS account and is used when configuring cross-account replication. For more information, see [Registry permissions](https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html) in the _Amazon Elastic Container Registry User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-registrypolicy.html */

export interface ECRRegistryPolicy {
  Type: 'AWS::ECR::RegistryPolicy'
  Properties: {
    /**
     * - The JSON policy text for your registry.
     * - _Required_: Yes
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecr-registrypolicy.html#cfn-ecr-registrypolicy-policytext */
    PolicyText: any | Intrinsic
  }
}
