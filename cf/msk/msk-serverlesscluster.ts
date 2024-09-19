import type { Intrinsic } from '../intrinsic/index.js' /**
 * The `VpcConfig` property type specifies Property description not available. for an [AWS::MSK::ServerlessCluster](./aws-resource-msk-serverlesscluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html */

export interface VpcConfig {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html#cfn-msk-serverlesscluster-vpcconfig-securitygroups */
  SecurityGroups?: (string | Intrinsic)[]
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html#cfn-msk-serverlesscluster-vpcconfig-subnetids */
  SubnetIds: (string | Intrinsic)[]
}

/**
 * The `Iam` property type specifies Property description not available. for an [AWS::MSK::ServerlessCluster](./aws-resource-msk-serverlesscluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html */

export interface Iam {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html#cfn-msk-serverlesscluster-iam-enabled */
  Enabled: boolean | Intrinsic
}

/**
 * The `Sasl` property type specifies Property description not available. for an [AWS::MSK::ServerlessCluster](./aws-resource-msk-serverlesscluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html */

export interface Sasl {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: [Iam](./aws-properties-msk-serverlesscluster-iam.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html#cfn-msk-serverlesscluster-sasl-iam */
  Iam: Iam
}

/**
 * The `ClientAuthentication` property type specifies Property description not available. for an [AWS::MSK::ServerlessCluster](./aws-resource-msk-serverlesscluster.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html */

export interface ClientAuthentication {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: [Sasl](./aws-properties-msk-serverlesscluster-sasl.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html#cfn-msk-serverlesscluster-clientauthentication-sasl */
  Sasl: Sasl
}

/**
 * The `AWS::MSK::ServerlessCluster` resource Property description not available. for MSK.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html */

export interface MSKServerlessCluster {
  Type: 'AWS::MSK::ServerlessCluster'
  Properties: {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: [ClientAuthentication](./aws-properties-msk-serverlesscluster-clientauthentication.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html#cfn-msk-serverlesscluster-clientauthentication */
    ClientAuthentication: ClientAuthentication
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html#cfn-msk-serverlesscluster-clustername */
    ClusterName: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html#cfn-msk-serverlesscluster-tags */
    Tags?: Record<string, string | Intrinsic>
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: Array of [VpcConfig](./aws-properties-msk-serverlesscluster-vpcconfig.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html#cfn-msk-serverlesscluster-vpcconfigs */
    VpcConfigs: VpcConfig[]
  }
}
