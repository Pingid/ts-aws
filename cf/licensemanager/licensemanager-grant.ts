import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Specifies a grant.
 * A grant shares the use of license entitlements with specific AWS accounts. For more information, see [Granted licenses](https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html) in the _AWS License Manager User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-grant.html */

export interface LicenseManagerGrant extends ResourceAttributes {
  Type: 'AWS::LicenseManager::Grant'
  Properties: {
    /**
     * - Allowed operations for the grant.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `8`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-grant.html#cfn-licensemanager-grant-allowedoperations */
    AllowedOperations?: (string | Intrinsic)[]
    /**
     * - Grant name.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-grant.html#cfn-licensemanager-grant-grantname */
    GrantName?: string | Intrinsic
    /**
     * - Home Region of the grant.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-grant.html#cfn-licensemanager-grant-homeregion */
    HomeRegion?: string | Intrinsic
    /**
     * - License ARN.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-grant.html#cfn-licensemanager-grant-licensearn */
    LicenseArn?: string | Intrinsic
    /**
     * - The grant principals. You can specify one of the following as an Amazon Resource Name (ARN):
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-grant.html#cfn-licensemanager-grant-principals */
    Principals?: (string | Intrinsic)[]
    /**
     * - Granted license status.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `AVAILABLE | PENDING_AVAILABLE | DEACTIVATED | SUSPENDED | EXPIRED | PENDING_DELETE | DELETED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-licensemanager-grant.html#cfn-licensemanager-grant-status */
    Status?: string | Intrinsic
  }
}
