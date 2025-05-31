import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Contains the virtual private cloud (VPC) configuration for the specified access point.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-accesspoint.html */

export interface VpcConfiguration {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-accesspoint.html#cfn-s3outposts-accesspoint-vpcconfiguration-vpcid */
    "VpcId"?: string | Intrinsic;
}

/**
 * The AWS::S3Outposts::AccessPoint resource specifies an access point and associates it with the specified Amazon S3 on Outposts bucket. For more information, see [Managing data access with Amazon S3 access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html).
 * 
 * ###### Note
 * 
 * S3 on Outposts supports only VPC-style access points.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-accesspoint.html */

export interface S3OutpostsAccessPoint extends ResourceAttributes {
    "Type": "AWS::S3Outposts::AccessPoint";
    "Properties": {
        /**
         * - The Amazon Resource Name (ARN) of the S3 on Outposts bucket that is associated with this access point.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:[^:]+:s3-outposts:[a-zA-Z0-9\-]+:\d{12}:outpost\/[^:]+\/bucket\/[^:]+$`
         * - _Minimum_: `20`
         * - _Maximum_: `2048`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-accesspoint.html#cfn-s3outposts-accesspoint-bucket */
        "Bucket": string | Intrinsic;
        /**
         * - The name of this access point.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-z0-9]([a-z0-9\\-]*[a-z0-9])?$`
         * - _Minimum_: `3`
         * - _Maximum_: `50`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-accesspoint.html#cfn-s3outposts-accesspoint-name */
        "Name": string | Intrinsic;
        /**
         * - The access point policy associated with this access point.
         * - _Required_: No
         * - _Type_: Json
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-accesspoint.html#cfn-s3outposts-accesspoint-policy */
        "Policy"?: any | Intrinsic;
        /**
         * - The virtual private cloud (VPC) configuration for this access point, if one exists.
         * - _Required_: Yes
         * - _Type_: [VpcConfiguration](./aws-properties-s3outposts-accesspoint-vpcconfiguration.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-accesspoint.html#cfn-s3outposts-accesspoint-vpcconfiguration */
        "VpcConfiguration": VpcConfiguration;
    };
}