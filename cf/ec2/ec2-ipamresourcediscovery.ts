import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * If your IPAM is integrated with AWS Organizations, you can exclude an [organizational unit (OU)](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#organizationalunit) from being managed by IPAM. When you exclude an OU, IPAM will not manage the IP addresses in accounts in that OU. For more information, see [Exclude organizational units from IPAM](https://docs.aws.amazon.com/vpc/latest/ipam/exclude-ous.html) in the _Amazon Virtual Private Cloud IP Address Manager User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamresourcediscovery.html */

export interface IpamResourceDiscoveryOrganizationalUnitExclusion {
    /**
     * - An AWS Organizations entity path. For more information on the entity path, see [Understand the AWS Organizations entity path](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_last-accessed-view-data-orgs.html#access_policies_access-advisor-viewing-orgs-entity-path) in the _AWS Identity and Access Management User Guide_.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamresourcediscovery.html#cfn-ec2-ipamresourcediscovery-ipamresourcediscoveryorganizationalunitexclusion-organizationsentitypath */
    "OrganizationsEntityPath": string | Intrinsic;
}

/**
 * Specifies a tag. For more information, see [Resource tags](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamresourcediscovery.html */

export interface Tag {
    /**
     * - The tag key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamresourcediscovery.html#cfn-ec2-ipamresourcediscovery-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The tag value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamresourcediscovery.html#cfn-ec2-ipamresourcediscovery-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The operating Regions for an IPAM. Operating Regions are AWS Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the AWS Regions you select as operating Regions.
 * For more information about operating Regions, see [Create an IPAM](https://docs.aws.amazon.com/vpc/latest/ipam/create-ipam.html) in the _Amazon VPC IPAM User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamresourcediscovery.html */

export interface IpamOperatingRegion {
    /**
     * - The name of the operating Region.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamresourcediscovery.html#cfn-ec2-ipamresourcediscovery-ipamoperatingregion-regionname */
    "RegionName": string | Intrinsic;
}

/**
 * A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamresourcediscovery.html */

export interface EC2IPAMResourceDiscovery extends ResourceAttributes {
    "Type": "AWS::EC2::IPAMResourceDiscovery";
    "Properties": {
        /**
         * - The resource discovery description.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamresourcediscovery.html#cfn-ec2-ipamresourcediscovery-description */
        "Description"?: string | Intrinsic;
        /**
         * - The operating Regions for the resource discovery. Operating Regions are AWS Regions where the IPAM is allowed to manage IP address CIDRs. IPAM only discovers and monitors resources in the AWS Regions you select as operating Regions.
         * - _Required_: No
         * - _Type_: Array of [IpamOperatingRegion](./aws-properties-ec2-ipamresourcediscovery-ipamoperatingregion.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamresourcediscovery.html#cfn-ec2-ipamresourcediscovery-operatingregions */
        "OperatingRegions"?: IpamOperatingRegion[];
        /**
         * - If your IPAM is integrated with AWS Organizations, you can exclude an [organizational unit (OU)](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_getting-started_concepts.html#organizationalunit) from being managed by IPAM. When you exclude an OU, IPAM will not manage the IP addresses in accounts in that OU. For more information, see [Exclude organizational units from IPAM](https://docs.aws.amazon.com/vpc/latest/ipam/exclude-ous.html) in the _Amazon Virtual Private Cloud IP Address Manager User Guide_.
         * - _Required_: No
         * - _Type_: Array of [IpamResourceDiscoveryOrganizationalUnitExclusion](./aws-properties-ec2-ipamresourcediscovery-ipamresourcediscoveryorganizationalunitexclusion.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamresourcediscovery.html#cfn-ec2-ipamresourcediscovery-organizationalunitexclusions */
        "OrganizationalUnitExclusions"?: IpamResourceDiscoveryOrganizationalUnitExclusion[];
        /**
         * - A tag is a label that you assign to an AWS resource. Each tag consists of a key and an optional value. You can use tags to search and filter your resources or track your AWS costs.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-ec2-ipamresourcediscovery-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-ipamresourcediscovery.html#cfn-ec2-ipamresourcediscovery-tags */
        "Tags"?: Tag[];
    };
}