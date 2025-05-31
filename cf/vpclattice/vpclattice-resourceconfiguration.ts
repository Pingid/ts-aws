import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The tags for the resource configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-resourceconfiguration.html */

export interface Tag {
    /**
     * - The tag key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-resourceconfiguration.html#cfn-vpclattice-resourceconfiguration-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The tag value.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-resourceconfiguration.html#cfn-vpclattice-resourceconfiguration-tag-value */
    "Value"?: string | Intrinsic;
}

/**
 * The domain name of the resource configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-resourceconfiguration.html */

export interface DnsResource {
    /**
     * - The domain name of the resource configuration.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `3`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-resourceconfiguration.html#cfn-vpclattice-resourceconfiguration-dnsresource-domainname */
    "DomainName": string | Intrinsic;
    /**
     * - The IP address type for the resource configuration. Dualstack is not currently supported.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `IPV4 | IPV6 | DUALSTACK`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-resourceconfiguration.html#cfn-vpclattice-resourceconfiguration-dnsresource-ipaddresstype */
    "IpAddressType": string | Intrinsic;
}

/**
 * Identifies the resource configuration in one of the following ways:
 * *   **Amazon Resource Name (ARN)** - Supported resource-types that are provisioned by AWS services, such as RDS databases, can be identified by their ARN.
 *     
 * *   **Domain name** - Any domain name that is publicly resolvable.
 *     
 * *   **IP address** - For IPv4 and IPv6, only IP addresses in the VPC are supported.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-resourceconfiguration.html */

export interface ResourceConfigurationDefinition {
    /**
     * - The Amazon Resource Name (ARN) of the resource configuration. For the ARN syntax and format, see [ARN format](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html#arns-syntax) in the _AWS Identity and Access Management user guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn.*`
     * - _Maximum_: `1224`
     * - _Update requires_: Updates are not supported.
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-resourceconfiguration.html#cfn-vpclattice-resourceconfiguration-resourceconfigurationdefinition-arnresource */
    "ArnResource"?: string | Intrinsic;
    /**
     * - The DNS name of the resource configuration.
     * - _Required_: No
     * - _Type_: [DnsResource](./aws-properties-vpclattice-resourceconfiguration-dnsresource.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-resourceconfiguration.html#cfn-vpclattice-resourceconfiguration-resourceconfigurationdefinition-dnsresource */
    "DnsResource"?: DnsResource;
    /**
     * - The IP address of the resource configuration.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `4`
     * - _Maximum_: `39`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-resourceconfiguration.html#cfn-vpclattice-resourceconfiguration-resourceconfigurationdefinition-ipresource */
    "IpResource"?: string | Intrinsic;
}

/**
 * Creates a resource configuration. A resource configuration defines a specific resource. You can associate a resource configuration with a service network or a VPC endpoint.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-resourceconfiguration.html */

export interface VpcLatticeResourceConfiguration extends ResourceAttributes {
    "Type": "AWS::VpcLattice::ResourceConfiguration";
    "Properties": {
        /**
         * - Specifies whether the resource configuration can be associated with a sharable service network.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-resourceconfiguration.html#cfn-vpclattice-resourceconfiguration-allowassociationtosharableservicenetwork */
        "AllowAssociationToSharableServiceNetwork"?: boolean | Intrinsic;
        /**
         * - The name of the resource configuration.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^(?!rcfg-)(?![-])(?!.*[-]$)(?!.*[-]{2})[a-z0-9-]+$`
         * - _Minimum_: `3`
         * - _Maximum_: `40`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-resourceconfiguration.html#cfn-vpclattice-resourceconfiguration-name */
        "Name": string | Intrinsic;
        /**
         * - (SINGLE, GROUP, CHILD) The TCP port ranges that a consumer can use to access a resource configuration (for example: 1-65535). You can separate port ranges using commas (for example: 1,2,22-30).
         * - _Required_: No
         * - _Type_: Array of String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-resourceconfiguration.html#cfn-vpclattice-resourceconfiguration-portranges */
        "PortRanges"?: (string | Intrinsic)[];
        /**
         * - (SINGLE, GROUP) The protocol accepted by the resource configuration.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `TCP`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-resourceconfiguration.html#cfn-vpclattice-resourceconfiguration-protocoltype */
        "ProtocolType"?: string | Intrinsic;
        /**
         * - The auth type for the resource configuration.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `NONE | AWS_IAM`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-resourceconfiguration.html#cfn-vpclattice-resourceconfiguration-resourceconfigurationauthtype */
        "ResourceConfigurationAuthType"?: string | Intrinsic;
        /**
         * - Identifies the resource configuration in one of the following ways:
         * - _Required_: No
         * - _Type_: [ResourceConfigurationDefinition](./aws-properties-vpclattice-resourceconfiguration-resourceconfigurationdefinition.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-resourceconfiguration.html#cfn-vpclattice-resourceconfiguration-resourceconfigurationdefinition */
        "ResourceConfigurationDefinition"?: ResourceConfigurationDefinition;
        /**
         * - The ID of the group resource configuration.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^rcfg-[0-9a-z]{17}$`
         * - _Minimum_: `22`
         * - _Maximum_: `22`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-resourceconfiguration.html#cfn-vpclattice-resourceconfiguration-resourceconfigurationgroupid */
        "ResourceConfigurationGroupId"?: string | Intrinsic;
        /**
         * - The type of resource configuration. A resource configuration can be one of the following types:
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `GROUP | CHILD | SINGLE | ARN`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-resourceconfiguration.html#cfn-vpclattice-resourceconfiguration-resourceconfigurationtype */
        "ResourceConfigurationType": string | Intrinsic;
        /**
         * - The ID of the resource gateway.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-resourceconfiguration.html#cfn-vpclattice-resourceconfiguration-resourcegatewayid */
        "ResourceGatewayId"?: string | Intrinsic;
        /**
         * - The tags for the resource configuration.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-vpclattice-resourceconfiguration-tag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-vpclattice-resourceconfiguration.html#cfn-vpclattice-resourceconfiguration-tags */
        "Tags"?: Tag[];
    };
}