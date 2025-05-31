import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Creates an OpenSearch Serverless-managed interface VPC endpoint. For more information, see [Access Amazon OpenSearch Serverless using an interface endpoint](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-vpc.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-vpcendpoint.html */

export interface OpenSearchServerlessVpcEndpoint extends ResourceAttributes {
    "Type": "AWS::OpenSearchServerless::VpcEndpoint";
    "Properties": {
        /**
         * - The name of the endpoint.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-z][a-z0-9-]{2,31}$`
         * - _Minimum_: `3`
         * - _Maximum_: `32`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-vpcendpoint.html#cfn-opensearchserverless-vpcendpoint-name */
        "Name": string | Intrinsic;
        /**
         * - The unique identifiers of the security groups that define the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Minimum_: `1 | 1`
         * - _Maximum_: `128 | 5`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-vpcendpoint.html#cfn-opensearchserverless-vpcendpoint-securitygroupids */
        "SecurityGroupIds"?: (string | Intrinsic)[];
        /**
         * - The ID of the subnets from which you access OpenSearch Serverless.
         * - _Required_: Yes
         * - _Type_: Array of String
         * - _Minimum_: `1 | 1`
         * - _Maximum_: `32 | 6`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-vpcendpoint.html#cfn-opensearchserverless-vpcendpoint-subnetids */
        "SubnetIds": (string | Intrinsic)[];
        /**
         * - The ID of the VPC from which you access OpenSearch Serverless.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^vpc-[0-9a-z]*$`
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-opensearchserverless-vpcendpoint.html#cfn-opensearchserverless-vpcendpoint-vpcid */
        "VpcId": string | Intrinsic;
    };
}