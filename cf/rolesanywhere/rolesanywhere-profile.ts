import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A label that consists of a key and value you define.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html */

export interface Tag {
  /**
   * - The tag key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html#cfn-rolesanywhere-profile-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html#cfn-rolesanywhere-profile-tag-value */
  Value: string | Intrinsic
}

/**
 * A single mapping entry for each supported specifier or sub-field.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html */

export interface MappingRule {
  /**
   * - Specifier within a certificate field, such as CN, OU, or UID from the Subject field.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `60`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html#cfn-rolesanywhere-profile-mappingrule-specifier */
  Specifier: string | Intrinsic
}

/**
 * A mapping applied to the authenticating end-entity certificate.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html */

export interface AttributeMapping {
  /**
   * - Fields (x509Subject, x509Issuer and x509SAN) within X.509 certificates.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `x509Subject | x509Issuer | x509SAN`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html#cfn-rolesanywhere-profile-attributemapping-certificatefield */
  CertificateField: string | Intrinsic
  /**
   * - A list of mapping entries for every supported specifier or sub-field.
   * - _Required_: Yes
   * - _Type_: Array of [MappingRule](./aws-properties-rolesanywhere-profile-mappingrule.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html#cfn-rolesanywhere-profile-attributemapping-mappingrules */
  MappingRules: MappingRule[]
}

/**
 * Creates a Profile.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html */

export interface RolesAnywhereProfile extends ResourceAttributes {
  Type: 'AWS::RolesAnywhere::Profile'
  Properties: {
    /**
     * - Used to determine if a custom role session name will be accepted in a temporary credential request.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html#cfn-rolesanywhere-profile-acceptrolesessionname */
    AcceptRoleSessionName?: boolean | Intrinsic
    /**
     * - A mapping applied to the authenticating end-entity certificate.
     * - _Required_: No
     * - _Type_: Array of [AttributeMapping](./aws-properties-rolesanywhere-profile-attributemapping.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html#cfn-rolesanywhere-profile-attributemappings */
    AttributeMappings?: AttributeMapping[]
    /**
     * - The number of seconds vended session credentials will be valid for
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `900`
     * - _Maximum_: `43200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html#cfn-rolesanywhere-profile-durationseconds */
    DurationSeconds?: number | Intrinsic
    /**
     * - The enabled status of the resource.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html#cfn-rolesanywhere-profile-enabled */
    Enabled?: boolean | Intrinsic
    /**
     * - A list of managed policy ARNs. Managed policies identified by this list will be applied to the vended session credentials.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `0`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html#cfn-rolesanywhere-profile-managedpolicyarns */
    ManagedPolicyArns?: (string | Intrinsic)[]
    /**
     * - The customer specified name of the resource.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[ a-zA-Z0-9-_]*`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html#cfn-rolesanywhere-profile-name */
    Name: string | Intrinsic
    /**
     * - Specifies whether instance properties are required in CreateSession requests with this profile.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html#cfn-rolesanywhere-profile-requireinstanceproperties */
    RequireInstanceProperties?: boolean | Intrinsic
    /**
     * - A list of IAM role ARNs that can be assumed when this profile is specified in a CreateSession request.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `1011`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html#cfn-rolesanywhere-profile-rolearns */
    RoleArns: (string | Intrinsic)[]
    /**
     * - A session policy that will applied to the trust boundary of the vended session credentials.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html#cfn-rolesanywhere-profile-sessionpolicy */
    SessionPolicy?: string | Intrinsic
    /**
     * - A list of Tags.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-rolesanywhere-profile-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rolesanywhere-profile.html#cfn-rolesanywhere-profile-tags */
    Tags?: Tag[]
  }
}
