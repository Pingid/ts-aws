import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The failure reason, if any, for a create or delete endpoint operation.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html */

export interface FailedReason {
  /**
   * - The failure code, if any, for a create or delete endpoint operation.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html#cfn-s3outposts-endpoint-failedreason-errorcode */
  ErrorCode?: string | Intrinsic
  /**
   * - Additional error details describing the endpoint failure and recommended action.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html#cfn-s3outposts-endpoint-failedreason-message */
  Message?: string | Intrinsic
}

/**
 * This AWS::S3Outposts::Endpoint resource specifies an endpoint and associates it with the specified Outpost.
 * Amazon S3 on Outposts access points simplify managing data access at scale for shared datasets in S3 on Outposts. S3 on Outposts uses endpoints to connect to S3 on Outposts buckets so that you can perform actions within your virtual private cloud (VPC). For more information, see [Accessing S3 on Outposts using VPC-only access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/AccessingS3Outposts.html).
 * ###### Note
 *
 * It can take up to 5 minutes for this resource to be created.
 *
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html */

export interface S3OutpostsEndpoint extends ResourceAttributes {
  Type: 'AWS::S3Outposts::Endpoint'
  Properties: {
    /**
     * - The container for the type of connectivity used to access the Amazon S3 on Outposts endpoint. To use the Amazon VPC, choose `Private`. To use the endpoint with an on-premises network, choose `CustomerOwnedIp`. If you choose `CustomerOwnedIp`, you must also provide the customer-owned IP address pool (CoIP pool).
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `CustomerOwnedIp | Private`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html#cfn-s3outposts-endpoint-accesstype */
    AccessType?: string | Intrinsic
    /**
     * - The ID of the customer-owned IPv4 address pool (CoIP pool) for the endpoint. IP addresses are allocated from this pool for the endpoint.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^ipv4pool-coip-([0-9a-f]{17})$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html#cfn-s3outposts-endpoint-customerownedipv4pool */
    CustomerOwnedIpv4Pool?: string | Intrinsic
    /**
     * - The failure reason, if any, for a create or delete endpoint operation.
     * - _Required_: No
     * - _Type_: [FailedReason](./aws-properties-s3outposts-endpoint-failedreason.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html#cfn-s3outposts-endpoint-failedreason */
    FailedReason?: FailedReason
    /**
     * - The ID of the Outpost.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(op-[a-f0-9]{17}|\d{12}|ec2)$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html#cfn-s3outposts-endpoint-outpostid */
    OutpostId: string | Intrinsic
    /**
     * - The ID of the security group used for the endpoint.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^sg-([0-9a-f]{8}|[0-9a-f]{17})$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html#cfn-s3outposts-endpoint-securitygroupid */
    SecurityGroupId: string | Intrinsic
    /**
     * - The ID of the subnet used for the endpoint.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^subnet-([0-9a-f]{8}|[0-9a-f]{17})$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html#cfn-s3outposts-endpoint-subnetid */
    SubnetId: string | Intrinsic
  }
}
