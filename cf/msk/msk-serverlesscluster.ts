import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
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
    "SecurityGroups"?: (string | Intrinsic)[];
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html#cfn-msk-serverlesscluster-vpcconfig-subnetids */
    "SubnetIds": (string | Intrinsic)[];
}

/**
 * Details for SASL/IAM client authentication.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html */

export interface Iam {
    /**
     * - SASL/IAM authentication is enabled or not.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html#cfn-msk-serverlesscluster-iam-enabled */
    "Enabled": boolean | Intrinsic;
}

/**
 * Details for client authentication using SASL. To turn on SASL, you must also turn on `EncryptionInTransit` by setting `inCluster` to true. You must set `clientBroker` to either `TLS` or `TLS_PLAINTEXT`. If you choose `TLS_PLAINTEXT`, then you must also set `unauthenticated` to true.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html */

export interface Sasl {
    /**
     * - Details for ClientAuthentication using IAM.
     * - _Required_: Yes
     * - _Type_: [Iam](./aws-properties-msk-serverlesscluster-iam.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html#cfn-msk-serverlesscluster-sasl-iam */
    "Iam": Iam;
}

/**
 * Includes all client authentication information.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html */

export interface ClientAuthentication {
    /**
     * - Details for client authentication using SASL. To turn on SASL, you must also turn on `EncryptionInTransit` by setting `inCluster` to true. You must set `clientBroker` to either `TLS` or `TLS_PLAINTEXT`. If you choose `TLS_PLAINTEXT`, then you must also set `unauthenticated` to true.
     * - _Required_: Yes
     * - _Type_: [Sasl](./aws-properties-msk-serverlesscluster-sasl.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html#cfn-msk-serverlesscluster-clientauthentication-sasl */
    "Sasl": Sasl;
}

/**
 * Specifies the properties required for creating a serverless cluster.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html */

export interface MSKServerlessCluster extends ResourceAttributes {
    "Type": "AWS::MSK::ServerlessCluster";
    "Properties": {
        /**
         * - Includes all client authentication related information.
         * - _Required_: Yes
         * - _Type_: [ClientAuthentication](./aws-properties-msk-serverlesscluster-clientauthentication.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html#cfn-msk-serverlesscluster-clientauthentication */
        "ClientAuthentication": ClientAuthentication;
        /**
         * - The name of the cluster.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `64`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html#cfn-msk-serverlesscluster-clustername */
        "ClusterName": string | Intrinsic;
        /**
         * - An arbitrary set of tags (key-value pairs) for the cluster.
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html#cfn-msk-serverlesscluster-tags */
        "Tags"?: Record<string, string | Intrinsic>;
        /**
         * - VPC configuration information for the serverless cluster.
         * - _Required_: Yes
         * - _Type_: Array of [VpcConfig](./aws-properties-msk-serverlesscluster-vpcconfig.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-serverlesscluster.html#cfn-msk-serverlesscluster-vpcconfigs */
        "VpcConfigs": VpcConfig[];
    };
}