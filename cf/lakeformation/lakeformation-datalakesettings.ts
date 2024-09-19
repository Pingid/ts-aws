import type { Intrinsic } from '../intrinsic/index.js' /**
 * The Lake Formation principal.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html */

export interface DataLakePrincipal {
  /**
   * - An identifier for the Lake Formation principal.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html#cfn-lakeformation-datalakesettings-datalakeprincipal-datalakeprincipalidentifier */
  DataLakePrincipalIdentifier: string | Intrinsic
}

/**
 * Permissions granted to a principal.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html */

export interface PrincipalPermissions {
  /**
   * - The permissions that are granted to the principal.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html#cfn-lakeformation-datalakesettings-principalpermissions-permissions */
  Permissions?: (string | Intrinsic)[]
  /**
   * - The principal who is granted permissions.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html#cfn-lakeformation-datalakesettings-principalpermissions-principal */
  Principal?: string | Intrinsic
}

/**
 * The `AWS::LakeFormation::DataLakeSettings` resource is an AWS Lake Formation resource type that manages the data lake settings for your account.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html */

export interface LakeFormationDataLakeSettings {
  Type: 'AWS::LakeFormation::DataLakeSettings'
  Properties: {
    /**
     * - A list of AWS Lake Formation principals.
     * - _Required_: No
     * - _Type_: Array of [DataLakePrincipal](./aws-properties-lakeformation-datalakesettings-datalakeprincipal.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html#cfn-lakeformation-datalakesettings-admins */
    Admins?: DataLakePrincipal[]
    /**
     * - Whether to allow Amazon EMR clusters or other third-party query engines to access data managed by Lake Formation.
     * - If set to true, you allow Amazon EMR clusters or other third-party engines to access data in Amazon S3 locations that are registered with Lake Formation.
     * - If false or null, no third-party query engines will be able to access data in Amazon S3 locations that are registered with Lake Formation.
     * - For more information, see [External data filtering setting](https://docs.aws.amazon.com/lake-formation/latest/dg/initial-LF-setup.html#external-data-filter).
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html#cfn-lakeformation-datalakesettings-allowexternaldatafiltering */
    AllowExternalDataFiltering?: boolean | Intrinsic
    /**
     * - Specifies whether query engines and applications can get credentials without IAM session tags if the user has full table access. It provides query engines and applications performance benefits as well as simplifies data access. Amazon EMR on Amazon EC2 is able to leverage this setting.
     * - For more information, see [https://docs.aws.amazon.com/lake-formation/latest/dg/using-cred-vending.html](https://docs.aws.amazon.com/lake-formation/latest/dg/using-cred-vending.html)
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html#cfn-lakeformation-datalakesettings-allowfulltableexternaldataaccess */
    AllowFullTableExternalDataAccess?: boolean | Intrinsic
    /**
     * - Lake Formation relies on a privileged process secured by Amazon EMR or the third party integrator to tag the user's role while assuming it. Lake Formation will publish the acceptable key-value pair, for example key = "LakeFormationTrustedCaller" and value = "TRUE" and the third party integrator must properly tag the temporary security credentials that will be used to call Lake Formation's administrative API operations.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html#cfn-lakeformation-datalakesettings-authorizedsessiontagvaluelist */
    AuthorizedSessionTagValueList?: (string | Intrinsic)[]
    /**
     * - Specifies whether access control on a newly created database is managed by Lake Formation permissions or exclusively by IAM permissions.
     * - A null value indicates that the access is controlled by Lake Formation permissions. `ALL` permissions assigned to `IAM_ALLOWED_PRINCIPALS` group indicates that the user's IAM permissions determine the access to the database. This is referred to as the setting "Use only IAM access control," and is to support backward compatibility with the AWS Glue permission model implemented by IAM permissions.
     * - The only permitted values are an empty array or an array that contains a single JSON object that grants `ALL` to `IAM_ALLOWED_PRINCIPALS`.
     * - For more information, see [Changing the default security settings for your data lake](https://docs.aws.amazon.com/lake-formation/latest/dg/change-settings.html).
     * - _Required_: No
     * - _Type_: Array of [PrincipalPermissions](./aws-properties-lakeformation-datalakesettings-principalpermissions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html#cfn-lakeformation-datalakesettings-createdatabasedefaultpermissions */
    CreateDatabaseDefaultPermissions?: PrincipalPermissions[]
    /**
     * - Specifies whether access control on a newly created table is managed by Lake Formation permissions or exclusively by IAM permissions.
     * - A null value indicates that the access is controlled by Lake Formation permissions. `ALL` permissions assigned to `IAM_ALLOWED_PRINCIPALS` group indicate that the user's IAM permissions determine the access to the table. This is referred to as the setting "Use only IAM access control," and is to support the backward compatibility with the AWS Glue permission model implemented by IAM permissions.
     * - The only permitted values are an empty array or an array that contains a single JSON object that grants `ALL` permissions to `IAM_ALLOWED_PRINCIPALS`.
     * - For more information, see [Changing the default security settings for your data lake](https://docs.aws.amazon.com/lake-formation/latest/dg/change-settings.html).
     * - _Required_: No
     * - _Type_: Array of [PrincipalPermissions](./aws-properties-lakeformation-datalakesettings-principalpermissions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html#cfn-lakeformation-datalakesettings-createtabledefaultpermissions */
    CreateTableDefaultPermissions?: PrincipalPermissions[]
    /**
     * - A list of the account IDs of AWS accounts with Amazon EMR clusters or third-party engines that are allwed to perform data filtering.
     * - _Required_: No
     * - _Type_: Array of [DataLakePrincipal](./aws-properties-lakeformation-datalakesettings-datalakeprincipal.html)
     * - _Minimum_: `0`
     * - _Maximum_: `30`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html#cfn-lakeformation-datalakesettings-externaldatafilteringallowlist */
    ExternalDataFilteringAllowList?: DataLakePrincipal[]
    /**
     * - Specifies whether the data lake settings are updated by adding new values to the current settings (`APPEND`) or by replacing the current settings with new settings (`REPLACE`).
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html#cfn-lakeformation-datalakesettings-mutationtype */
    MutationType?: string | Intrinsic
    /**
     * - A key-value map that provides an additional configuration on your data lake. `CrossAccountVersion` is the key you can configure in the `Parameters` field. Accepted values for the `CrossAccountVersion` key are 1, 2, and 3.
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html#cfn-lakeformation-datalakesettings-parameters */
    Parameters?: any | Intrinsic
    /**
     * - An array of UTF-8 strings.
     * - A list of the resource-owning account IDs that the caller's account can use to share their user access details (user ARNs). The user ARNs can be logged in the resource owner's CloudTrail log. You may want to specify this property when you are in a high-trust boundary, such as the same team or company.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-datalakesettings.html#cfn-lakeformation-datalakesettings-trustedresourceowners */
    TrustedResourceOwners?: (string | Intrinsic)[]
  }
}
