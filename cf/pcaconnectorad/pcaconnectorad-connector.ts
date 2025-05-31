import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Information about your VPC and security groups used with the connector.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-connector.html */

export interface VpcInformation {
    /**
     * - The VPC IP address type.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `IPV4 | DUALSTACK`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-connector.html#cfn-pcaconnectorad-connector-vpcinformation-ipaddresstype */
    "IpAddressType"?: string | Intrinsic;
    /**
     * - The security groups used with the connector. You can use a maximum of 4 security groups with a connector.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `11 | 1`
     * - _Maximum_: `20 | 5`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-connector.html#cfn-pcaconnectorad-connector-vpcinformation-securitygroupids */
    "SecurityGroupIds": (string | Intrinsic)[];
}

/**
 * Creates a connector between AWS Private CA and an Active Directory. You must specify the private CA, directory ID, and security groups.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-connector.html */

export interface PCAConnectorADConnector extends ResourceAttributes {
    "Type": "AWS::PCAConnectorAD::Connector";
    "Properties": {
        /**
         * - The Amazon Resource Name (ARN) of the certificate authority being used.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:[\w-]+:acm-pca:[\w-]+:[0-9]+:certificate-authority\/[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$`
         * - _Minimum_: `5`
         * - _Maximum_: `200`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-connector.html#cfn-pcaconnectorad-connector-certificateauthorityarn */
        "CertificateAuthorityArn": string | Intrinsic;
        /**
         * - The identifier of the Active Directory.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^d-[0-9a-f]{10}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-connector.html#cfn-pcaconnectorad-connector-directoryid */
        "DirectoryId": string | Intrinsic;
        /**
         * - Metadata assigned to a connector consisting of a key-value pair.
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `.+`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-connector.html#cfn-pcaconnectorad-connector-tags */
        "Tags"?: Record<string, string | Intrinsic>;
        /**
         * - Information of the VPC and security group(s) used with the connector.
         * - _Required_: Yes
         * - _Type_: [VpcInformation](./aws-properties-pcaconnectorad-connector-vpcinformation.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-connector.html#cfn-pcaconnectorad-connector-vpcinformation */
        "VpcInformation": VpcInformation;
    };
}