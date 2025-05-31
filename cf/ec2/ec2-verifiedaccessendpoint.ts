import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Describes the network interface options when creating an AWS Verified Access endpoint using the `network-interface` type.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html */

export interface NetworkInterfaceOptions {
    /**
     * - The ID of the network interface.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-networkinterfaceoptions-networkinterfaceid */
    "NetworkInterfaceId"?: string | Intrinsic;
    /**
     * - The IP port number.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `65535`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-networkinterfaceoptions-port */
    "Port"?: number | Intrinsic;
    /**
     * - The port ranges.
     * - _Required_: No
     * - _Type_: Array of [PortRange](./aws-properties-ec2-verifiedaccessendpoint-portrange.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-networkinterfaceoptions-portranges */
    "PortRanges"?: PortRange[];
    /**
     * - The IP protocol.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `http | https | tcp`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-networkinterfaceoptions-protocol */
    "Protocol"?: string | Intrinsic;
}

/**
 * AWS Verified Access provides server side encryption by default to data at rest using AWS-owned KMS keys. You also have the option of using customer managed KMS keys, which can be specified using the options below.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html */

export interface SseSpecification {
    /**
     * - Enable or disable the use of customer managed KMS keys for server side encryption.
     * - Valid values: `True` | `False`
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-ssespecification-customermanagedkeyenabled */
    "CustomerManagedKeyEnabled"?: boolean | Intrinsic;
    /**
     * - The ARN of the KMS key.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-ssespecification-kmskeyarn */
    "KmsKeyArn"?: string | Intrinsic;
}

/**
 * Describes the load balancer options when creating an AWS Verified Access endpoint using the `load-balancer` type.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html */

export interface LoadBalancerOptions {
    /**
     * - The ARN of the load balancer.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-loadbalanceroptions-loadbalancerarn */
    "LoadBalancerArn"?: string | Intrinsic;
    /**
     * - The IP port number.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `65535`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-loadbalanceroptions-port */
    "Port"?: number | Intrinsic;
    /**
     * - The port ranges.
     * - _Required_: No
     * - _Type_: Array of [PortRange](./aws-properties-ec2-verifiedaccessendpoint-portrange.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-loadbalanceroptions-portranges */
    "PortRanges"?: PortRange[];
    /**
     * - The IP protocol.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `http | https | tcp`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-loadbalanceroptions-protocol */
    "Protocol"?: string | Intrinsic;
    /**
     * - The IDs of the subnets. You can specify only one subnet per Availability Zone.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-loadbalanceroptions-subnetids */
    "SubnetIds"?: (string | Intrinsic)[];
}

/**
 * Describes the RDS options for a Verified Access endpoint.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html */

export interface RdsOptions {
    /**
     * - The port.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `65535`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-rdsoptions-port */
    "Port"?: number | Intrinsic;
    /**
     * - The protocol.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `http | https | tcp`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-rdsoptions-protocol */
    "Protocol"?: string | Intrinsic;
    /**
     * - The ARN of the DB cluster.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-rdsoptions-rdsdbclusterarn */
    "RdsDbClusterArn"?: string | Intrinsic;
    /**
     * - The ARN of the RDS instance.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-rdsoptions-rdsdbinstancearn */
    "RdsDbInstanceArn"?: string | Intrinsic;
    /**
     * - The ARN of the RDS proxy.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-rdsoptions-rdsdbproxyarn */
    "RdsDbProxyArn"?: string | Intrinsic;
    /**
     * - The RDS endpoint.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-rdsoptions-rdsendpoint */
    "RdsEndpoint"?: string | Intrinsic;
    /**
     * - The IDs of the subnets. You can specify only one subnet per Availability Zone.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-rdsoptions-subnetids */
    "SubnetIds"?: (string | Intrinsic)[];
}

/**
 * Specifies a tag. For more information, see [Resource tags](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html */

export interface Tag {
    /**
     * - The tag key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The tag value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Describes the port range for a Verified Access endpoint.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html */

export interface PortRange {
    /**
     * - The start of the port range.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `65535`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-portrange-fromport */
    "FromPort"?: number | Intrinsic;
    /**
     * - The end of the port range.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `65535`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-portrange-toport */
    "ToPort"?: number | Intrinsic;
}

/**
 * Describes the CIDR options for a Verified Access endpoint.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html */

export interface CidrOptions {
    /**
     * - The CIDR.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-cidroptions-cidr */
    "Cidr"?: string | Intrinsic;
    /**
     * - The port ranges.
     * - _Required_: No
     * - _Type_: Array of [PortRange](./aws-properties-ec2-verifiedaccessendpoint-portrange.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-cidroptions-portranges */
    "PortRanges"?: PortRange[];
    /**
     * - The protocol.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `http | https | tcp`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-cidroptions-protocol */
    "Protocol"?: string | Intrinsic;
    /**
     * - The IDs of the subnets.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-cidroptions-subnetids */
    "SubnetIds"?: (string | Intrinsic)[];
}

/**
 * An AWS Verified Access endpoint specifies the application that AWS Verified Access provides access to. It must be attached to an AWS Verified Access group. An AWS Verified Access endpoint must also have an attached access policy before you attached it to a group.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html */

export interface EC2VerifiedAccessEndpoint extends ResourceAttributes {
    "Type": "AWS::EC2::VerifiedAccessEndpoint";
    "Properties": {
        /**
         * - The DNS name for users to reach your application.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-applicationdomain */
        "ApplicationDomain"?: string | Intrinsic;
        /**
         * - The type of attachment used to provide connectivity between the AWS Verified Access endpoint and the application.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `vpc`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-attachmenttype */
        "AttachmentType": string | Intrinsic;
        /**
         * - The options for a CIDR endpoint.
         * - _Required_: No
         * - _Type_: [CidrOptions](./aws-properties-ec2-verifiedaccessendpoint-cidroptions.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-cidroptions */
        "CidrOptions"?: CidrOptions;
        /**
         * - A description for the AWS Verified Access endpoint.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-description */
        "Description"?: string | Intrinsic;
        /**
         * - The ARN of a public TLS/SSL certificate imported into or created with ACM.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-domaincertificatearn */
        "DomainCertificateArn"?: string | Intrinsic;
        /**
         * - A custom identifier that is prepended to the DNS name that is generated for the endpoint.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-endpointdomainprefix */
        "EndpointDomainPrefix"?: string | Intrinsic;
        /**
         * - The type of AWS Verified Access endpoint. Incoming application requests will be sent to an IP address, load balancer or a network interface depending on the endpoint type specified.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `load-balancer | network-interface | rds | cidr`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-endpointtype */
        "EndpointType": string | Intrinsic;
        /**
         * - The load balancer details if creating the AWS Verified Access endpoint as `load-balancer`type.
         * - _Required_: No
         * - _Type_: [LoadBalancerOptions](./aws-properties-ec2-verifiedaccessendpoint-loadbalanceroptions.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-loadbalanceroptions */
        "LoadBalancerOptions"?: LoadBalancerOptions;
        /**
         * - The options for network-interface type endpoint.
         * - _Required_: No
         * - _Type_: [NetworkInterfaceOptions](./aws-properties-ec2-verifiedaccessendpoint-networkinterfaceoptions.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-networkinterfaceoptions */
        "NetworkInterfaceOptions"?: NetworkInterfaceOptions;
        /**
         * - The Verified Access policy document.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-policydocument */
        "PolicyDocument"?: string | Intrinsic;
        /**
         * - The status of the Verified Access policy.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-policyenabled */
        "PolicyEnabled"?: boolean | Intrinsic;
        /**
         * - The options for an RDS endpoint.
         * - _Required_: No
         * - _Type_: [RdsOptions](./aws-properties-ec2-verifiedaccessendpoint-rdsoptions.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-rdsoptions */
        "RdsOptions"?: RdsOptions;
        /**
         * - The IDs of the security groups for the endpoint.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-securitygroupids */
        "SecurityGroupIds"?: (string | Intrinsic)[];
        /**
         * - The options for additional server side encryption.
         * - _Required_: No
         * - _Type_: [SseSpecification](./aws-properties-ec2-verifiedaccessendpoint-ssespecification.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-ssespecification */
        "SseSpecification"?: SseSpecification;
        /**
         * - The tags.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-ec2-verifiedaccessendpoint-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-tags */
        "Tags"?: Tag[];
        /**
         * - The ID of the AWS Verified Access group.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-verifiedaccessendpoint.html#cfn-ec2-verifiedaccessendpoint-verifiedaccessgroupid */
        "VerifiedAccessGroupId": string | Intrinsic;
    };
}