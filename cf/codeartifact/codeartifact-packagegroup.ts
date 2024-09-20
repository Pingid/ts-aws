import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A tag is a key-value pair that can be used to manage, search for, or filter resources in AWS CodeArtifact.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-packagegroup.html */

export interface Tag {
  /**
   * - The tag key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-packagegroup.html#cfn-codeartifact-packagegroup-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-packagegroup.html#cfn-codeartifact-packagegroup-tag-value */
  Value: string | Intrinsic
}

/**
 * The `RestrictionType` property type specifies the package group origin configuration restriction mode, and the repositories when the `RestrictionMode` is set to `ALLOW_SPECIFIC_REPOSITORIES`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-packagegroup.html */

export interface RestrictionType {
  /**
   * - The repositories to add to the allowed repositories list. The allowed repositories list is used when the `RestrictionMode` is set to `ALLOW_SPECIFIC_REPOSITORIES`.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-packagegroup.html#cfn-codeartifact-packagegroup-restrictiontype-repositories */
  Repositories?: (string | Intrinsic)[]
  /**
   * - The package group origin restriction setting. When the value is `INHERIT`, the value is set to the value of the first parent package group which does not have a value of `INHERIT`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `ALLOW | BLOCK | ALLOW_SPECIFIC_REPOSITORIES | INHERIT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-packagegroup.html#cfn-codeartifact-packagegroup-restrictiontype-restrictionmode */
  RestrictionMode: string | Intrinsic
}

/**
 * Contains information about the configured restrictions of the origin controls of a package group.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-packagegroup.html */

export interface Restrictions {
  /**
   * - The package group origin restriction setting for external, upstream repositories.
   * - _Required_: No
   * - _Type_: [RestrictionType](./aws-properties-codeartifact-packagegroup-restrictiontype.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-packagegroup.html#cfn-codeartifact-packagegroup-restrictions-externalupstream */
  ExternalUpstream?: RestrictionType
  /**
   * - The package group origin restriction setting for internal, upstream repositories.
   * - _Required_: No
   * - _Type_: [RestrictionType](./aws-properties-codeartifact-packagegroup-restrictiontype.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-packagegroup.html#cfn-codeartifact-packagegroup-restrictions-internalupstream */
  InternalUpstream?: RestrictionType
  /**
   * - The package group origin restriction setting for publishing packages.
   * - _Required_: No
   * - _Type_: [RestrictionType](./aws-properties-codeartifact-packagegroup-restrictiontype.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-packagegroup.html#cfn-codeartifact-packagegroup-restrictions-publish */
  Publish?: RestrictionType
}

/**
 * The package group origin configuration that determines how package versions can enter repositories.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-packagegroup.html */

export interface OriginConfiguration {
  /**
   * - The origin configuration settings that determine how package versions can enter repositories.
   * - _Required_: Yes
   * - _Type_: [Restrictions](./aws-properties-codeartifact-packagegroup-restrictions.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-packagegroup.html#cfn-codeartifact-packagegroup-originconfiguration-restrictions */
  Restrictions: Restrictions
}

/**
 * Creates a package group. For more information about creating package groups, including example CLI commands, see [Create a package group](https://docs.aws.amazon.com/codeartifact/latest/ug/create-package-group.html) in the _CodeArtifact User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-packagegroup.html */

export interface CodeArtifactPackageGroup extends ResourceAttributes {
  Type: 'AWS::CodeArtifact::PackageGroup'
  Properties: {
    /**
     * - The contact information of the package group.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-packagegroup.html#cfn-codeartifact-packagegroup-contactinfo */
    ContactInfo?: string | Intrinsic
    /**
     * - The description of the package group.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-packagegroup.html#cfn-codeartifact-packagegroup-description */
    Description?: string | Intrinsic
    /**
     * - The domain that contains the package group.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([a-z][a-z0-9\-]{0,48}[a-z0-9])$`
     * - _Minimum_: `2`
     * - _Maximum_: `50`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-packagegroup.html#cfn-codeartifact-packagegroup-domainname */
    DomainName: string | Intrinsic
    /**
     * - The 12-digit account number of the AWS account that owns the domain. It does not include dashes or spaces.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[0-9]{12}`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-packagegroup.html#cfn-codeartifact-packagegroup-domainowner */
    DomainOwner?: string | Intrinsic
    /**
     * - Details about the package origin configuration of a package group.
     * - _Required_: No
     * - _Type_: [OriginConfiguration](./aws-properties-codeartifact-packagegroup-originconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-packagegroup.html#cfn-codeartifact-packagegroup-originconfiguration */
    OriginConfiguration?: OriginConfiguration
    /**
     * - The pattern of the package group. The pattern determines which packages are associated with the package group.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `2`
     * - _Maximum_: `520`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-packagegroup.html#cfn-codeartifact-packagegroup-pattern */
    Pattern: string | Intrinsic
    /**
     * - A list of tags to be applied to the package group.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-codeartifact-packagegroup-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-packagegroup.html#cfn-codeartifact-packagegroup-tags */
    Tags?: Tag[]
  }
}
