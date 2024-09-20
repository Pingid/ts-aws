import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The user type of the user for which the user profile is created.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-userprofile.html */

export interface DataZoneUserProfile extends ResourceAttributes {
  Type: 'AWS::DataZone::UserProfile'
  Properties: {
    /**
     * - The identifier of a Amazon DataZone domain in which a user profile exists.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^dzd[-_][a-zA-Z0-9_-]{1,36}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-userprofile.html#cfn-datazone-userprofile-domainidentifier */
    DomainIdentifier: string | Intrinsic
    /**
     * - The status of the user profile.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ASSIGNED | NOT_ASSIGNED | ACTIVATED | DEACTIVATED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-userprofile.html#cfn-datazone-userprofile-status */
    Status?: string | Intrinsic
    /**
     * - The identifier of the user for which the user profile is created.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `(^([0-9a-f]{10}-|)[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$|^[a-zA-Z_0-9+=,.@-]+$|^arn:aws:iam::\d{12}:.+$)`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-userprofile.html#cfn-datazone-userprofile-useridentifier */
    UserIdentifier: string | Intrinsic
    /**
     * - The user type of the user for which the user profile is created.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `IAM_USER | IAM_ROLE | SSO_USER`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-userprofile.html#cfn-datazone-userprofile-usertype */
    UserType?: string | Intrinsic
  }
}
