import type { Intrinsic } from '../intrinsic/index.js' /**
 * Registers a package version.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-packageversion.html */

export interface PanoramaPackageVersion {
  Type: 'AWS::Panorama::PackageVersion'
  Properties: {
    /**
     * - Whether to mark the new version as the latest version.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-packageversion.html#cfn-panorama-packageversion-marklatest */
    MarkLatest?: boolean | Intrinsic
    /**
     * - An owner account.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[0-9a-z\_]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `12`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-packageversion.html#cfn-panorama-packageversion-owneraccount */
    OwnerAccount?: string | Intrinsic
    /**
     * - A package ID.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9\-\_\/]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-packageversion.html#cfn-panorama-packageversion-packageid */
    PackageId: string | Intrinsic
    /**
     * - A package version.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([0-9]+)\.([0-9]+)$`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-packageversion.html#cfn-panorama-packageversion-packageversion */
    PackageVersion: string | Intrinsic
    /**
     * - A patch version.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-z0-9]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-packageversion.html#cfn-panorama-packageversion-patchversion */
    PatchVersion: string | Intrinsic
    /**
     * - If the version was marked latest, the new version to maker as latest.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-z0-9]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-panorama-packageversion.html#cfn-panorama-packageversion-updatedlatestpatchversion */
    UpdatedLatestPatchVersion?: string | Intrinsic
  }
}
