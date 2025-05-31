import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `Tag` property type specifies Property description not available. for an [AWS::QuickSight::VPCConnection](./aws-resource-quicksight-vpcconnection.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-vpcconnection.html */

export interface Tag {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-vpcconnection.html#cfn-quicksight-vpcconnection-tag-key */
    "Key": string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-vpcconnection.html#cfn-quicksight-vpcconnection-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Creates a new VPC connection.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-vpcconnection.html */

export interface QuickSightVPCConnection extends ResourceAttributes {
    "Type": "AWS::QuickSight::VPCConnection";
    "Properties": {
        /**
         * - The availability status of the VPC connection.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `AVAILABLE | UNAVAILABLE | PARTIALLY_AVAILABLE`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-vpcconnection.html#cfn-quicksight-vpcconnection-availabilitystatus */
        "AvailabilityStatus"?: string | Intrinsic;
        /**
         * - The AWS account ID of the account where you want to create a new VPC connection.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[0-9]{12}$`
         * - _Minimum_: `12`
         * - _Maximum_: `12`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-vpcconnection.html#cfn-quicksight-vpcconnection-awsaccountid */
        "AwsAccountId"?: string | Intrinsic;
        /**
         * - A list of IP addresses of DNS resolver endpoints for the VPC connection.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-vpcconnection.html#cfn-quicksight-vpcconnection-dnsresolvers */
        "DnsResolvers"?: (string | Intrinsic)[];
        /**
         * - The display name for the VPC connection.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-vpcconnection.html#cfn-quicksight-vpcconnection-name */
        "Name"?: string | Intrinsic;
        /**
         * - The ARN of the IAM role associated with the VPC connection.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-vpcconnection.html#cfn-quicksight-vpcconnection-rolearn */
        "RoleArn"?: string | Intrinsic;
        /**
         * - The Amazon EC2 security group IDs associated with the VPC connection.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Minimum_: `1 | 1`
         * - _Maximum_: `255 | 16`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-vpcconnection.html#cfn-quicksight-vpcconnection-securitygroupids */
        "SecurityGroupIds"?: (string | Intrinsic)[];
        /**
         * - A list of subnet IDs for the VPC connection.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Minimum_: `1 | 2`
         * - _Maximum_: `255 | 15`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-vpcconnection.html#cfn-quicksight-vpcconnection-subnetids */
        "SubnetIds"?: (string | Intrinsic)[];
        /**
         * - A map of the key-value pairs for the resource tag or tags assigned to the VPC connection.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-quicksight-vpcconnection-tag.html)
         * - _Minimum_: `1`
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-vpcconnection.html#cfn-quicksight-vpcconnection-tags */
        "Tags"?: Tag[];
        /**
         * - The ID of the VPC connection that you're creating. This ID is a unique identifier for each AWS Region in an AWS account.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[\w\-]+`
         * - _Minimum_: `1`
         * - _Maximum_: `1000`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-quicksight-vpcconnection.html#cfn-quicksight-vpcconnection-vpcconnectionid */
        "VPCConnectionId"?: string | Intrinsic;
    };
}