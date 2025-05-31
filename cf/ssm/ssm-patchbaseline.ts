import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * `PatchSource` is the property type for the `Sources` resource of the [AWS::SSM::PatchBaseline](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html) resource.
 * The AWS CloudFormation`AWS::SSM::PatchSource` resource is used to provide information about the patches to use to update target instances, including target operating systems and source repository. Applies to Linux managed nodes only.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html */

export interface PatchSource {
    /**
     * - The value of the yum repo configuration. For example:
     * - `[main]`
     * - `name=MyCustomRepository`
     * - `baseurl=https://my-custom-repository`
     * - `enabled=1`
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-patchsource-configuration */
    "Configuration"?: string | Intrinsic;
    /**
     * - The name specified to identify the patch source.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_\-.]{3,50}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-patchsource-name */
    "Name"?: string | Intrinsic;
    /**
     * - The specific operating system versions a patch repository applies to, such as "Ubuntu16.04", "RedhatEnterpriseLinux7.2" or "Suse12.7". For lists of supported product values, see [PatchFilter](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PatchFilter.html) in the _AWS Systems Manager API Reference_.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1 | 0`
     * - _Maximum_: `128 | 20`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-patchsource-products */
    "Products"?: (string | Intrinsic)[];
}

/**
 * Metadata that you assign to your AWS resources. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment. In AWS Systems Manager, you can apply tags to Systems Manager documents (SSM documents), managed nodes, maintenance windows, parameters, patch baselines, OpsItems, and OpsMetadata.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html */

export interface Tag {
    /**
     * - The name of the tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value of the tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The `Rule` property type specifies an approval rule for a Systems Manager patch baseline.
 * The `PatchRules` property of the [RuleGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-rulegroup.html) property type contains a list of `Rule` property types.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html */

export interface Rule {
    /**
     * - The number of days after the release date of each patch matched by the rule that the patch is marked as approved in the patch baseline. For example, a value of `7` means that patches are approved seven days after they are released.
     * - This parameter is marked as `Required: No`, but your request must include a value for either `ApproveAfterDays` or `ApproveUntilDate`.
     * - Not supported for Debian Server or Ubuntu Server.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `360`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-rule-approveafterdays */
    "ApproveAfterDays"?: number | Intrinsic;
    /**
     * - The cutoff date for auto approval of released patches. Any patches released on or before this date are installed automatically.
     * - Enter dates in the format `YYYY-MM-DD`. For example, `2024-12-31`.
     * - This parameter is marked as `Required: No`, but your request must include a value for either `ApproveUntilDate` or `ApproveAfterDays`.
     * - Not supported for Debian Server or Ubuntu Server.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-rule-approveuntildate */
    "ApproveUntilDate"?: string | Intrinsic;
    /**
     * - A compliance severity level for all approved patches in a patch baseline. Valid compliance severity levels include the following: `UNSPECIFIED`, `CRITICAL`, `HIGH`, `MEDIUM`, `LOW`, and `INFORMATIONAL`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `CRITICAL | HIGH | INFORMATIONAL | LOW | MEDIUM | UNSPECIFIED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-rule-compliancelevel */
    "ComplianceLevel"?: string | Intrinsic;
    /**
     * - For managed nodes identified by the approval rule filters, enables a patch baseline to apply non-security updates available in the specified repository. The default value is `false`. Applies to Linux managed nodes only.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-rule-enablenonsecurity */
    "EnableNonSecurity"?: boolean | Intrinsic;
    /**
     * - The patch filter group that defines the criteria for the rule.
     * - _Required_: No
     * - _Type_: [PatchFilterGroup](./aws-properties-ssm-patchbaseline-patchfiltergroup.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-rule-patchfiltergroup */
    "PatchFilterGroup"?: PatchFilterGroup;
}

/**
 * The `RuleGroup` property type specifies a set of rules that define the approval rules for an AWS Systems Manager patch baseline.
 * `RuleGroup` is the property type for the `ApprovalRules` property of the [AWS::SSM::PatchBaseline](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html) resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html */

export interface RuleGroup {
    /**
     * - The rules that make up the rule group.
     * - _Required_: No
     * - _Type_: Array of [Rule](./aws-properties-ssm-patchbaseline-rule.html)
     * - _Minimum_: `0`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-rulegroup-patchrules */
    "PatchRules"?: Rule[];
}

/**
 * The `PatchFilter` property type defines a patch filter for an AWS Systems Manager patch baseline.
 * The `PatchFilters` property of the [PatchFilterGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-patchfiltergroup.html) property type contains a list of `PatchFilter` property types.
 * You can view lists of valid values for the patch properties by running the `DescribePatchProperties` command. For more information, see [DescribePatchProperties](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_DescribePatchProperties.html) in the _AWS Systems Manager API Reference_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html */

export interface PatchFilter {
    /**
     * - The key for the filter.
     * - For information about valid keys, see [PatchFilter](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PatchFilter.html) in the _AWS Systems Manager API Reference_.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ADVISORY_ID | ARCH | BUGZILLA_ID | CLASSIFICATION | CVE_ID | EPOCH | MSRC_SEVERITY | NAME | PATCH_ID | PATCH_SET | PRIORITY | PRODUCT | PRODUCT_FAMILY | RELEASE | REPOSITORY | SECTION | SECURITY | SEVERITY | VERSION`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-patchfilter-key */
    "Key"?: string | Intrinsic;
    /**
     * - The value for the filter key.
     * - For information about valid values for each key based on operating system type, see [PatchFilter](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_PatchFilter.html) in the _AWS Systems Manager API Reference_.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1 | 0`
     * - _Maximum_: `64 | 20`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-patchfilter-values */
    "Values"?: (string | Intrinsic)[];
}

/**
 * The `PatchFilterGroup` property type specifies a set of patch filters for an AWS Systems Manager patch baseline, typically used for approval rules for a Systems Manager patch baseline.
 * `PatchFilterGroup` is the property type for the `GlobalFilters` property of the [AWS::SSM::PatchBaseline](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html) resource and the `PatchFilterGroup` property of the [Rule](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ssm-patchbaseline-rule.html) property type.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html */

export interface PatchFilterGroup {
    /**
     * - The set of patch filters that make up the group.
     * - _Required_: No
     * - _Type_: Array of [PatchFilter](./aws-properties-ssm-patchbaseline-patchfilter.html)
     * - _Minimum_: `0`
     * - _Maximum_: `5`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-patchfiltergroup-patchfilters */
    "PatchFilters"?: PatchFilter[];
}

/**
 * The `AWS::SSM::PatchBaseline` resource defines the basic information for an AWS Systems Manager patch baseline. A patch baseline defines which patches are approved for installation on your instances.
 * For more information, see [CreatePatchBaseline](https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_CreatePatchBaseline.html) in the _AWS Systems Manager API Reference_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html */

export interface SSMPatchBaseline extends ResourceAttributes {
    "Type": "AWS::SSM::PatchBaseline";
    "Properties": {
        /**
         * - A set of rules used to include patches in the baseline.
         * - _Required_: No
         * - _Type_: [RuleGroup](./aws-properties-ssm-patchbaseline-rulegroup.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-approvalrules */
        "ApprovalRules"?: RuleGroup;
        /**
         * - A list of explicitly approved patches for the baseline.
         * - For information about accepted formats for lists of approved patches and rejected patches, see [Package name formats for approved and rejected patch lists](https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-approved-rejected-package-name-formats.html) in the _AWS Systems Manager User Guide_.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Minimum_: `1 | 0`
         * - _Maximum_: `100 | 50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-approvedpatches */
        "ApprovedPatches"?: (string | Intrinsic)[];
        /**
         * - Defines the compliance level for approved patches. When an approved patch is reported as missing, this value describes the severity of the compliance violation. The default value is `UNSPECIFIED`.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `CRITICAL | HIGH | MEDIUM | LOW | INFORMATIONAL | UNSPECIFIED`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-approvedpatchescompliancelevel */
        "ApprovedPatchesComplianceLevel"?: string | Intrinsic;
        /**
         * - Indicates whether the list of approved patches includes non-security updates that should be applied to the managed nodes. The default value is `false`. Applies to Linux managed nodes only.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-approvedpatchesenablenonsecurity */
        "ApprovedPatchesEnableNonSecurity"?: boolean | Intrinsic;
        /**
         * - Indicates whether this is the default baseline. AWS Systems Manager supports creating multiple default patch baselines. For example, you can create a default patch baseline for each operating system.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-defaultbaseline */
        "DefaultBaseline"?: boolean | Intrinsic;
        /**
         * - A description of the patch baseline.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `1024`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-description */
        "Description"?: string | Intrinsic;
        /**
         * - A set of global filters used to include patches in the baseline.
         * - _Required_: No
         * - _Type_: [PatchFilterGroup](./aws-properties-ssm-patchbaseline-patchfiltergroup.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-globalfilters */
        "GlobalFilters"?: PatchFilterGroup;
        /**
         * - The name of the patch baseline.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9_\-.]{3,128}$`
         * - _Minimum_: `3`
         * - _Maximum_: `128`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-name */
        "Name": string | Intrinsic;
        /**
         * - Defines the operating system the patch baseline applies to. The default value is `WINDOWS`.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `WINDOWS | AMAZON_LINUX | AMAZON_LINUX_2 | AMAZON_LINUX_2022 | AMAZON_LINUX_2023 | UBUNTU | REDHAT_ENTERPRISE_LINUX | SUSE | CENTOS | ORACLE_LINUX | DEBIAN | MACOS | RASPBIAN | ROCKY_LINUX | ALMA_LINUX`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-operatingsystem */
        "OperatingSystem"?: string | Intrinsic;
        /**
         * - The name of the patch group to be registered with the patch baseline.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-patchgroups */
        "PatchGroups"?: (string | Intrinsic)[];
        /**
         * - A list of explicitly rejected patches for the baseline.
         * - For information about accepted formats for lists of approved patches and rejected patches, see [Package name formats for approved and rejected patch lists](https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-approved-rejected-package-name-formats.html) in the _AWS Systems Manager User Guide_.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Minimum_: `1 | 0`
         * - _Maximum_: `100 | 50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-rejectedpatches */
        "RejectedPatches"?: (string | Intrinsic)[];
        /**
         * - The action for Patch Manager to take on patches included in the `RejectedPackages` list.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `ALLOW_AS_DEPENDENCY | BLOCK`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-rejectedpatchesaction */
        "RejectedPatchesAction"?: string | Intrinsic;
        /**
         * - Information about the patches to use to update the managed nodes, including target operating systems and source repositories. Applies to Linux managed nodes only.
         * - _Required_: No
         * - _Type_: Array of [PatchSource](./aws-properties-ssm-patchbaseline-patchsource.html)
         * - _Minimum_: `0`
         * - _Maximum_: `20`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-sources */
        "Sources"?: PatchSource[];
        /**
         * - Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag a patch baseline to identify the severity level of patches it specifies and the operating system family it applies to.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-ssm-patchbaseline-tag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `1000`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssm-patchbaseline.html#cfn-ssm-patchbaseline-tags */
        "Tags"?: Tag[];
    };
}